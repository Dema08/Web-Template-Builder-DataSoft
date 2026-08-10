<?php

namespace App\Domains\Admin\Services;

use App\Domains\Admin\Repositories\DashboardRepository;
use App\Domains\Shared\Services\BaseService;
use App\Domains\User\Models\User;
use App\Models\Website;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class DashboardService extends BaseService
{
    public function __construct(protected DashboardRepository $dashboardRepository)
    {
        parent::__construct();
    }

    public function repository(): DashboardRepository
    {
        return $this->dashboardRepository;
    }

    public function getDashboardPayload(User $user): array
    {
        $range = request()->query('range', '7days');
        $startDateParam = request()->query('start_date', '');
        $endDateParam = request()->query('end_date', '');

        $cacheKey = "dashboard:{$user->id}:{$range}:{$startDateParam}:{$endDateParam}";

        return Cache::remember($cacheKey, 5, function () use ($user, $range, $startDateParam, $endDateParam) {
            // Admin-specific dashboard metrics
            if ($user->isAdmin()) {
                $totalWebsites = Website::count();
                $totalUsers = User::count();
                $totalViews = \DB::table('website_views')->count();
                $publishedCount = Website::where('status', 'published')->count();

                $websitesFormatted = Website::with('user', 'template')
                    ->orderByDesc('created_at')
                    ->limit(10)
                    ->get()
                    ->map(fn($site) => [
                        'id' => $site->id,
                        'name' => $site->name,
                        'subdomain' => $site->slug,
                        'is_published' => $site->status === 'published',
                        'template' => $site->template?->name ?? 'Default Template',
                        'owner' => [
                            'name' => $site->user?->name ?? 'Unknown',
                        ],
                    ])
                    ->toArray();

                return [
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'email' => $user->email,
                        'avatar' => $user->avatar ? Storage::disk('public')->url($user->avatar) : null,
                        'role' => $user->role?->value ?? 'admin',
                        'created_at' => $user->created_at?->toISOString(),
                    ],
                    'stats' => [
                        'total_websites' => $totalWebsites,
                        'total_users' => $totalUsers,
                        'total_views' => $totalViews,
                        'published_count' => $publishedCount,
                    ],
                    'websites' => $websitesFormatted,
                    'recentActivity' => array_slice($this->dashboardRepository->getLatestActivitiesForUser($user->id), 0, 10),
                ];
            }

            // Standard user dashboard metrics
            $websites = Website::where('user_id', $user->id)->with('template')->get();
            $websitesFormatted = [];
            $totalViews = 0;
            $uniqueVisitors = 0;
            $dailyViews = [];

            foreach ($websites as $website) {
                $websitesFormatted[] = [
                    'id' => $website->id,
                    'name' => $website->name,
                    'subdomain' => $website->slug,
                    'is_published' => $website->status === 'published',
                    'template' => $website->template?->name ?? 'Default Template',
                    'created_at' => $website->created_at?->toISOString(),
                ];
            }

            $primaryWebsite = $websites->first();
            if ($primaryWebsite) {
                $startDate = null;
                $endDate = now()->endOfDay();

                if ($range === '7days') {
                    $startDate = now()->subDays(6)->startOfDay();
                } elseif ($range === '30days') {
                    $startDate = now()->subDays(29)->startOfDay();
                } elseif ($range === 'last_month') {
                    $startDate = now()->subMonth()->startOfMonth();
                    $endDate = now()->subMonth()->endOfMonth();
                } elseif ($range === 'custom' && !empty($startDateParam) && !empty($endDateParam)) {
                    try {
                        $startDate = \Carbon\Carbon::parse($startDateParam)->startOfDay();
                        $endDate = \Carbon\Carbon::parse($endDateParam)->endOfDay();
                    } catch (\Exception $e) {
                        $startDate = now()->subDays(6)->startOfDay();
                    }
                } else {
                    $startDate = now()->subDays(6)->startOfDay();
                }

                // Protect against out-of-order custom dates
                if ($startDate->gt($endDate)) {
                    $temp = $startDate;
                    $startDate = $endDate->copy()->startOfDay();
                    $endDate = $temp->copy()->endOfDay();
                }

                // Cap ranges to 90 days to avoid layout crash
                $daysDiff = $startDate->diffInDays($endDate);
                if ($daysDiff > 90) {
                    $daysDiff = 90;
                    $startDate = $endDate->copy()->subDays(90)->startOfDay();
                }

                $totalViews = $primaryWebsite->views()
                    ->whereBetween('created_at', [$startDate, $endDate])
                    ->count();

                $uniqueVisitors = $primaryWebsite->views()
                    ->whereBetween('created_at', [$startDate, $endDate])
                    ->distinct('ip_address')
                    ->count('ip_address');

                for ($i = 0; $i <= $daysDiff; $i++) {
                    $dayDate = $startDate->copy()->addDays($i);
                    $dateStr = $dayDate->format('Y-m-d');
                    $label = $daysDiff > 14 ? $dayDate->format('d') : $dayDate->format('D');

                    $dailyViews[] = [
                        'date' => $dateStr,
                        'label' => $label,
                        'views' => 0,
                    ];
                }

                $viewsQuery = $primaryWebsite->views()
                    ->whereBetween('created_at', [$startDate, $endDate])
                    ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
                    ->groupBy('date')
                    ->pluck('count', 'date');

                foreach ($dailyViews as &$day) {
                    if (isset($viewsQuery[$day['date']])) {
                        $day['views'] = (int) $viewsQuery[$day['date']];
                    }
                }
            } else {
                for ($i = 6; $i >= 0; $i--) {
                    $dailyViews[] = [
                        'date' => now()->subDays($i)->format('Y-m-d'),
                        'label' => now()->subDays($i)->format('D'),
                        'views' => 0,
                    ];
                }
            }

            return [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'avatar' => $user->avatar ? Storage::disk('public')->url($user->avatar) : null,
                    'role' => $user->role?->value ?? 'user',
                    'created_at' => $user->created_at?->toISOString(),
                ],
                'websites' => $websitesFormatted,
                'analytics' => [
                    'total_views' => $totalViews,
                    'unique_visitors' => $uniqueVisitors,
                    'daily_views' => $dailyViews,
                ],
                'quick_actions' => [
                    [
                        'label' => 'Create Website',
                        'description' => 'Start a new company profile website for your brand.',
                        'href' => '/builder',
                        'icon' => 'sparkles',
                    ],
                    [
                        'label' => 'Open Templates',
                        'description' => 'Browse curated website templates.',
                        'href' => '/templates',
                        'icon' => 'layout-grid',
                    ],
                    [
                        'label' => 'Edit Profile',
                        'description' => 'Update your personal profile details and avatar.',
                        'href' => '/profile',
                        'icon' => 'user-circle',
                    ],
                ],
                'activities' => array_slice($this->dashboardRepository->getLatestActivitiesForUser($user->id), 0, 10),
            ];
        });
    }
}
