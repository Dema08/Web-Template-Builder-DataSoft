<?php

namespace Database\Seeders;

use App\Domains\User\Models\User;
use App\Domains\Shared\Enums\UserRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Level 1 / Role Admin
        User::updateOrCreate(
            ['email' => 'admin@datasoft.id'],
            [
                'name'              => 'Datasoft Administrator',
                'password'          => Hash::make('password'),
                'role'              => UserRole::Admin,
                'email_verified_at' => now(),
            ]
        );

        // Level 2 / Role User
        User::updateOrCreate(
            ['email' => 'user@datasoft.id'],
            [
                'name'              => 'Koperasi Maju User',
                'password'          => Hash::make('password'),
                'role'              => UserRole::User,
                'email_verified_at' => now(),
            ]
        );

        // Additional admin test user from upstream
        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name'              => 'Admin User',
                'password'          => Hash::make('password'),
                'role'              => UserRole::Admin,
                'email_verified_at' => now(),
            ]
        );
    }
}
