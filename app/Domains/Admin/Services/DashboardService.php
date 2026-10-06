<?php

namespace App\Domains\Admin\Services;

use App\Domains\Admin\Repositories\DashboardRepository;
use App\Domains\Shared\Services\BaseService;
use App\Domains\User\Models\User;
use App\Domains\Website\Models\Website;
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

    public function getDashboardPayload(User $user, bool $forceAdmin = false): array
    {
        $range = request()->query('range', '7days');
        $startDateParam = request()->query('start_date', '');
        $endDateParam = request()->query('end_date', '');

        $websiteIdParam = request()->query('website_id', '');
        $cacheKey = "dashboard:{$user->id}:{$range}:{$startDateParam}:{$endDateParam}:{$websiteIdParam}:" . ($forceAdmin ? 'admin' : 'user');

        return Cache::remember($cacheKey, 5, function () use ($user, $range, $startDateParam, $endDateParam, $forceAdmin) {
            // Admin-specific dashboard metrics (only for admin endpoints or explicit forceAdmin)
            if ($forceAdmin || request()->is('api/v1/admin/*') || request()->is('api/admin/*') || request()->is('admin/*')) {
                $totalWebsites = Website::where('status', 'published')->count();
                $totalUsers = User::count();
                $totalViews = \Illuminate\Support\Facades\Schema::hasTable('website_view') ? \DB::table('website_view')->count() : 0;
                $publishedTemplatesCount = \App\Domains\Template\Models\Template::where('status', 'published')
                    ->where(function ($q) {
                        $q->whereNull('owner_id')
                          ->orWhere('visibility', 'public');
                    })
                    ->count();
                $publishedWebsitesCount = Website::where('status', 'published')->count();
                $draftWebsitesCount = Website::where('status', 'draft')->count();

                $websitesFormatted = Website::select([
                    'id', 'user_id', 'category_id', 'template_id', 'name', 'slug', 'status', 'published_at', 'created_at', 'updated_at'
                ])
                ->where('status', 'published')
                ->with(['user', 'template'])
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
                        'email' => $site->user?->email ?? '',
                    ],
                    'created_at' => $site->created_at?->toISOString(),
                ])
                ->toArray();

                // Dynamic Recent Activities generated from real system events
                $recentActivities = [];
                $recentUsers = User::latest()->limit(5)->get();
                foreach ($recentUsers as $u) {
                    $recentActivities[] = [
                        'action' => 'Pengguna Baru Terdaftar',
                        'description' => "{$u->name} ({$u->email}) mendaftar di platform.",
                        'created_at' => $u->created_at?->toISOString(),
                    ];
                }

                $recentPublishedSites = Website::select([
                    'id', 'user_id', 'category_id', 'template_id', 'name', 'slug', 'status', 'published_at', 'created_at', 'updated_at'
                ])->where('status', 'published')->with('user')->latest('updated_at')->limit(5)->get();
                foreach ($recentPublishedSites as $site) {
                    $ownerName = $site->user?->name ?? 'Pengguna';
                    $recentActivities[] = [
                        'action' => 'Website Dipublikasikan',
                        'description' => "Website \"{$site->name}\" dipublikasikan oleh {$ownerName}.",
                        'created_at' => $site->updated_at?->toISOString(),
                    ];
                }

                // Sort activity by created_at descending
                usort($recentActivities, function ($a, $b) {
                    return strtotime($b['created_at']) <=> strtotime($a['created_at']);
                });

                return [
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'email' => $user->email,
                        'avatar' => $user->avatar ? Storage::disk('public')->url($user->avatar) : null,
                        'role' => $user->peran?->value ?? 'admin',
                        'created_at' => $user->created_at?->toISOString(),
                    ],
                    'stats' => [
                        'total_users' => $totalUsers,
                        'total_views' => $totalViews,
                        'published_templates_count' => $publishedTemplatesCount,
                        'total_websites' => $totalWebsites,
                        'published_count' => $publishedWebsitesCount,
                        'draft_count' => $draftWebsitesCount,
                    ],
                    'websites' => $websitesFormatted,
                    'recentActivity' => array_slice($recentActivities, 0, 10),
                ];
            }

            // Standard user dashboard metrics
            $userPlan = $user->effective_pricelist;
            $maxDomains = (int) ($userPlan?->maks_domain ?? 0);
            $unlimited = $maxDomains === -1;

            $publishedCount = Website::where('user_id', $user->id)
                ->where('status', 'published')
                ->count();

            $isQuotaReached = !$user->isAdmin() && !$unlimited && $maxDomains > 0 && $publishedCount >= $maxDomains;

            $websitesQuery = Website::select([
                'id', 'user_id', 'category_id', 'template_id', 'name', 'slug', 'thumbnail_path', 'status', 'settings', 'published_at', 'created_at', 'updated_at'
            ])->where('user_id', $user->id)->with('template');

            if ($isQuotaReached) {
                $websitesQuery->where('status', 'published');
            }

            $websites = $websitesQuery->get();
            $websitesFormatted = [];
            $totalViews = 0;
            $uniqueVisitors = 0;
            $dailyViews = [];

            foreach ($websites as $website) {
                $websitesFormatted[] = [
                    'id' => $website->id,
                    'name' => $website->name,
                    'subdomain' => $website->slug,
                    'thumbnail_url' => $website->thumbnail_url,
                    'is_published' => $website->status === 'published',
                    'template' => $website->template?->name ?? 'Default Template',
                    'created_at' => $website->created_at?->toISOString(),
                ];
            }

            // Only published websites are tracked for visitor analytics
            $publishedWebsites = $websites->filter(fn($w) => $w->status === 'published');
            $requestedWebsiteId = request()->query('website_id');

            $targetWebsite = null;
            if ($requestedWebsiteId) {
                $targetWebsite = $publishedWebsites->firstWhere('id', (int) $requestedWebsiteId);
            }
            if (!$targetWebsite) {
                $targetWebsite = $publishedWebsites->first();
            }

            if ($targetWebsite) {
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

                $totalViews = $targetWebsite->views()
                    ->whereBetween('created_at', [$startDate, $endDate])
                    ->count();

                $uniqueVisitors = $targetWebsite->views()
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

                $viewsQuery = $targetWebsite->views()
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

            $publishedWebsitesFormatted = $publishedWebsites->map(fn($w) => [
                'id' => $w->id,
                'name' => $w->name,
                'domain' => ($w->settings['domain_type'] ?? '') === 'custom' && !empty($w->settings['custom_domain'])
                    ? $w->settings['custom_domain']
                    : ($w->slug . '.' . config('app.main_domain')),
            ])->values()->all();

            return [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'avatar' => $user->avatar ? Storage::disk('public')->url($user->avatar) : null,
                    'role' => $user->peran?->value ?? 'user',
                    'created_at' => $user->created_at?->toISOString(),
                ],
                'websites' => $websitesFormatted,
                'published_websites' => $publishedWebsitesFormatted,
                'selected_website_id' => $targetWebsite?->id ?? null,
                'website' => $targetWebsite,
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
