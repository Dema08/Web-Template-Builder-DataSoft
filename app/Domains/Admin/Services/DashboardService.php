<?php

namespace App\Domains\Admin\Services;

use App\Domains\Admin\Repositories\DashboardRepository;
use App\Domains\Shared\Services\BaseService;
use App\Domains\User\Models\User;
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
        return Cache::remember('dashboard:'.$user->getKey(), 60, function () use ($user) {
            return [
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'avatar' => $user->avatar ? Storage::disk('public')->url($user->avatar) : null,
                    'role' => $user->role?->value ?? 'user',
                    'created_at' => $user->created_at?->toISOString(),
                ],
                'website' => null,
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
