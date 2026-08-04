<?php

namespace App\Domains\Admin\Repositories;

use App\Domains\Shared\Repositories\BaseRepository;
use App\Domains\User\Models\User;

class DashboardRepository extends BaseRepository
{
    public function model(): string
    {
        return User::class;
    }

    public function getLatestActivitiesForUser(int $userId): array
    {
        return [
            [
                'action' => 'Profile viewed',
                'description' => 'Authenticated user opened the dashboard profile overview.',
                'created_at' => now()->subMinutes(6)->toIso8601String(),
            ],
            [
                'action' => 'Website checked',
                'description' => 'Dashboard requested website metadata for the current account.',
                'created_at' => now()->subMinutes(12)->toIso8601String(),
            ],
            [
                'action' => 'Template explored',
                'description' => 'User browsed the template library from the dashboard.',
                'created_at' => now()->subMinutes(18)->toIso8601String(),
            ],
            [
                'action' => 'Security review',
                'description' => 'Password and security settings were reviewed from the dashboard.',
                'created_at' => now()->subMinutes(24)->toIso8601String(),
            ],
            [
                'action' => 'Theme preview',
                'description' => 'Preview action was opened for the website preview flow.',
                'created_at' => now()->subMinutes(30)->toIso8601String(),
            ],
            [
                'action' => 'Website draft created',
                'description' => 'A draft website entry was prepared for the current user.',
                'created_at' => now()->subMinutes(36)->toIso8601String(),
            ],
            [
                'action' => 'Builder opened',
                'description' => 'Builder workspace was opened to continue editing the website.',
                'created_at' => now()->subMinutes(42)->toIso8601String(),
            ],
            [
                'action' => 'Profile updated',
                'description' => 'The authenticated user updated their profile information.',
                'created_at' => now()->subMinutes(48)->toIso8601String(),
            ],
            [
                'action' => 'Account setup',
                'description' => 'A dashboard session was created for the user account.',
                'created_at' => now()->subMinutes(54)->toIso8601String(),
            ],
            [
                'action' => 'Account created',
                'description' => 'The user account was registered and became available on the dashboard.',
                'created_at' => now()->subMinutes(60)->toIso8601String(),
            ],
        ];
    }

    public function getWebsiteForUser(int $userId): ?array
    {
        return null;
    }
}
