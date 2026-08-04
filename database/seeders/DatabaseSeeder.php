<?php

namespace Database\Seeders;

use App\Domains\User\Models\User;
use App\Domains\Shared\Enums\UserRole;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Level 1 / Role Admin
        // Note: User model auto-hashes 'password' via Attribute cast
        User::updateOrCreate(
            ['email' => 'admin@datasoft.id'],
            [
                'name'              => 'Datasoft Administrator',
                'password'          => 'password',
                'role'              => UserRole::Admin,
                'email_verified_at' => now(),
            ]
        );

        // Level 2 / Role User
        User::updateOrCreate(
            ['email' => 'user@datasoft.id'],
            [
                'name'              => 'Koperasi Maju User',
                'password'          => 'password',
                'role'              => UserRole::User,
                'email_verified_at' => now(),
            ]
        );

        // Additional admin test user
        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name'              => 'Admin User',
                'password'          => 'password',
                'role'              => UserRole::Admin,
                'email_verified_at' => now(),
            ]
        );
    }
}
