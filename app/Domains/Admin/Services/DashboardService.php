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
            if ($forceAdmin || $user->isAdmin() || request()->is('api/v1/admin/*') || request()->is('api/admin/*') || request()->is('admin/*')) {
                $totalWebsites = Website::count();
                $totalUsers = User::count();
                $totalViews = \Illuminate\Support\Facades\Schema::hasTable('website_view') ? \DB::table('website_view')->count() : 0;
                $publishedTemplatesCount = \App\Domains\Template\Models\Template::where('status', 'published')
                    ->where(function ($q) {
                        $q->whereNull('owner_id')
                          ->orWhere('visibility', 'public');
                    })
                    ->count();
                $publishedWebsitesCount = Website::where('status', 'published')->count();
                $pendingRequestsCount = Website::where('status', 'pending')->count();
                $rejectedRequestsCount = Website::where('status', 'rejected')->count();
                $draftWebsitesCount = Website::where('status', 'draft')->count();

                $websitesFormatted = Website::select([
                    'id', 'user_id', 'category_id', 'template_id', 'name', 'slug', 'status', 'published_at', 'created_at', 'updated_at'
                ])
                ->with(['user', 'template'])
                ->orderByDesc('created_at')
                ->limit(10)
                ->get()
                ->map(function($site) {
                    $status = is_string($site->status) ? $site->status : ($site->status?->value ?? 'draft');
                    return [
                        'id' => $site->id,
                        'name' => $site->name,
                        'slug' => $site->slug,
                        'subdomain' => $site->slug,
                        'subdomain_url' => $site->url_subdomain,
                        'status' => $status,
                        'is_published' => $status === 'published',
                        'is_pending' => $status === 'pending',
                        'is_rejected' => $status === 'rejected',
                        'template' => $site->template?->name ?? 'Default Template',
                        'owner' => [
                            'name' => $site->user?->name ?? 'Unknown',
                            'email' => $site->user?->email ?? '',
                        ],
                        'created_at' => $site->created_at?->toISOString(),
                    ];
                })
                ->toArray();

                $pendingRequests = Website::select([
                    'id', 'user_id', 'category_id', 'template_id', 'name', 'slug', 'status', 'thumbnail_path', 'requested_at', 'created_at', 'updated_at'
                ])
                ->where('status', 'pending')
                ->with(['user.pricelist', 'template'])
                ->orderByDesc('requested_at')
                ->limit(15)
                ->get()
                ->map(function($site) {
                    $status = is_string($site->status) ? $site->status : ($site->status?->value ?? 'pending');
                    return [
                        'id' => $site->id,
                        'name' => $site->name,
                        'slug' => $site->slug,
                        'subdomain' => $site->slug,
                        'domain' => $site->slug . '.' . config('app.publish_domain', 'web.microdata.co.id'),
                        'published_url' => $site->url_subdomain,
                        'subdomain_url' => $site->url_subdomain,
                        'thumbnail_url' => $site->thumbnail_url,
                        'status' => $status,
                        'is_pending' => $status === 'pending',
                        'template' => $site->template?->name ?? 'Default Template',
                        'owner' => [
                            'id' => $site->user?->id,
                            'name' => $site->user?->name ?? 'Unknown',
                            'email' => $site->user?->email ?? '',
                            'plan' => $site->user?->effective_pricelist?->nama ?? 'Free',
                        ],
                        'requested_at' => $site->requested_at?->toISOString(),
                        'requested_at_formatted' => $site->requested_at ? $site->requested_at->format('d M Y, H:i') : null,
                    ];
                })
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

                $recentPendingSites = Website::select([
                    'id', 'user_id', 'name', 'slug', 'status', 'requested_at'
                ])->where('status', 'pending')->with('user')->latest('requested_at')->limit(5)->get();
                foreach ($recentPendingSites as $site) {
                    $ownerName = $site->user?->name ?? 'Pengguna';
                    $recentActivities[] = [
                        'action' => 'Permintaan Hosting Baru',
                        'description' => "Permintaan hosting subdomain \"{$site->slug}.web.microdata.co.id\" diajukan oleh {$ownerName}.",
                        'created_at' => $site->requested_at?->toISOString() ?? now()->toISOString(),
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
                        'pending_requests_count' => $pendingRequestsCount,
                        'rejected_requests_count' => $rejectedRequestsCount,
                        'draft_count' => $draftWebsitesCount,
                    ],
                    'pending_requests' => $pendingRequests,
                    'websites' => $websitesFormatted,
                    'recentActivity' => array_slice($recentActivities, 0, 10),
                ];
            }

            // Standard user dashboard metrics
            $websites = Website::select([
                'id', 'user_id', 'category_id', 'template_id', 'name', 'slug', 'thumbnail_path', 'status', 'settings', 'rejection_reason', 'requested_at', 'published_at', 'created_at', 'updated_at'
            ])
            ->where('user_id', $user->id)
            ->with('template')
            ->orderByDesc('updated_at')
            ->get();

            $websitesFormatted = [];
            $totalViews = 0;
            $uniqueVisitors = 0;
            $dailyViews = [];

            $baseDomain = config('app.publish_domain', config('app.primary_host', 'web.microdata.co.id'));

            foreach ($websites as $website) {
                $status = is_string($website->status) ? $website->status : ($website->status?->value ?? 'draft');
                $websitesFormatted[] = [
                    'id' => $website->id,
                    'name' => $website->name,
                    'subdomain' => $website->slug,
                    'subdomain_url' => $website->url_subdomain,
                    'thumbnail_url' => $website->thumbnail_url,
                    'status' => $status,
                    'is_published' => $status === 'published',
                    'is_pending' => $status === 'pending',
                    'is_rejected' => $status === 'rejected',
                    'rejection_reason' => $website->rejection_reason,
                    'requested_at' => $website->requested_at?->toISOString(),
                    'template' => $website->template?->name ?? 'Default Template',
                    'created_at' => $website->created_at?->toISOString(),
                    'updated_at' => $website->updated_at?->toISOString(),
                ];
            }

            // Only published websites are tracked for visitor analytics
            $publishedWebsites = $websites->filter(function($w) {
                $status = is_string($w->status) ? $w->status : ($w->status?->value ?? 'draft');
                return $status === 'published';
            });
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

            $publishedWebsitesFormatted = $publishedWebsites->map(function ($w) use ($baseDomain) {
                return [
                    'id' => $w->id,
                    'name' => $w->name,
                    'domain' => ($w->settings['domain_type'] ?? '') === 'custom' && !empty($w->settings['custom_domain'])
                        ? $w->settings['custom_domain']
                        : ($w->slug . '.' . $baseDomain),
                ];
            })->values()->all();

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
