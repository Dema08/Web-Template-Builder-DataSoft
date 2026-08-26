<?php

namespace Database\Seeders;

use App\Domains\Category\Models\Category;
use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use App\Domains\Website\Models\Website;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * Order of operations:
     *   1. Users (admin + standard user)
     *   2. System & brand settings
     *   3. Industry categories
     *   4. Default templates (one or more per category)
     *   5. Default website for the standard user (uses the first Koperasi category template)
     */
    public function run(): void
    {
        // ── 1. Users ─────────────────────────────────────────────────────
        // Note: User model auto-hashes 'password' via Attribute cast

        User::updateOrCreate(
            ['email' => 'admin@datasoft.id'],
            [
                'name'              => 'Datasoft Administrator',
                'password'          => 'password123',
                'peran'             => UserRole::Admin,
                'email_verified_at' => now(),
                'disetujui'         => true,
            ]
        );

        User::updateOrCreate(
            ['email' => 'user@datasoft.id'],
            [
                'name'              => 'Koperasi Maju User',
                'password'          => 'password123',
                'peran'             => UserRole::User,
                'email_verified_at' => now(),
                'disetujui'         => true,
            ]
        );

        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name'              => 'Admin User',
                'password'          => 'password123',
                'peran'             => UserRole::Admin,
                'email_verified_at' => now(),
                'disetujui'         => true,
            ]
        );

        // ── 2. System & brand settings ───────────────────────────────────
        $this->call(SettingsSeeder::class);

        // ── 3. Industry categories ───────────────────────────────────────
        $this->call(CategorySeeder::class);

        // ── 5. Default website for the standard user ─────────────────────
        // Pick the "Koperasi" category and a published template within it.
        
    }
}
