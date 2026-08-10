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

        // Seed platform system & brand settings (Single Source of Truth)
        $this->call(SettingsSeeder::class);

        // Seed default industry categories
        $this->call(CategorySeeder::class);

        // Seed demo templates
        $this->call(TemplateSeeder::class);

        // Seed default website and visitor analytics views for standard user
        $standardUser = User::where('email', 'user@datasoft.id')->first();
        $category = \App\Models\Category::first();
        $template = \App\Models\Template::first();

        if ($standardUser && $category && $template) {
            $website = \App\Models\Website::updateOrCreate(
                ['user_id' => $standardUser->id],
                [
                    'category_id' => $category->id,
                    'template_id' => $template->id,
                    'name' => 'Koperasi Maju',
                    'slug' => 'koperasimaju',
                    'status' => 'published',
                    'draft_json' => $template->default_content ?? ['sections' => []],
                    'published_json' => $template->default_content ?? ['sections' => []],
                    'settings' => ['siteName' => 'Koperasi Maju'],
                    'published_at' => now(),
                ]
            );

            // Delete old views to avoid accumulating view counts when seeding multiple times
            $website->views()->delete();

            // Seed view data for the past 7 days:
            // index 0 = 6 days ago, index 6 = today
            $dailyCounts = [18, 22, 30, 45, 12, 28, 15];

            foreach ($dailyCounts as $offsetDays => $count) {
                // Determine actual date based on offset from 6 days ago to today
                $date = now()->subDays(6 - $offsetDays);
                for ($i = 0; $i < $count; $i++) {
                    $website->views()->create([
                        'ip_address' => '192.168.1.' . rand(1, 50), // 50 unique IPs
                        'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'created_at' => $date->copy()->startOfDay()->addHours(rand(0, 23))->addMinutes(rand(0, 59)),
                    ]);
                }
            }
        }
    }
}
