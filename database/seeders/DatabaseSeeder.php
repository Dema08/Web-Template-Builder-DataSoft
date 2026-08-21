<?php

namespace Database\Seeders;

use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use App\Models\Category;
use App\Models\Website;
use App\Domains\Template\Models\Template;
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

        // ── 4. Default templates ─────────────────────────────────────────
        // Templates are seeded with deterministic slugs so re-running
        // the seeder is safe (updateOrCreate keyed on slug).
        $this->call(TemplateSeeder::class);

        // ── 5. Default website for the standard user ─────────────────────
        // Pick the "Koperasi" category and a published template within it.
        $standardUser = User::where('email', 'user@datasoft.id')->first();
        $koperasiCategory = Category::where('slug', 'koperasi')->first();
        $template = $koperasiCategory
            ? Template::where('category_id', $koperasiCategory->id)
                ->where('status', 'published')
                ->first()
            : null;

        if ($standardUser && $koperasiCategory && $template) {
            $website = Website::updateOrCreate(
                ['user_id' => $standardUser->id],
                [
                    'category_id'    => $koperasiCategory->id,
                    'template_id'    => $template->id,
                    'name'           => 'Koperasi Maju',
                    'slug'           => 'koperasimaju',
                    'status'         => 'published',
                    'draft_json'     => $template->draft_json ?? ['sections' => []],
                    'published_json' => $template->draft_json ?? ['sections' => []],
                    'settings'       => ['siteName' => 'Koperasi Maju'],
                    'published_at'   => now(),
                ]
            );

            // Delete old views to avoid accumulating view counts when seeding multiple times
            $website->views()->delete();

            // Seed view data for the past 7 days:
            // index 0 = 6 days ago, index 6 = today
            $dailyCounts = [18, 22, 30, 45, 12, 28, 15];

            foreach ($dailyCounts as $offsetDays => $count) {
                $date = now()->subDays(6 - $offsetDays);
                for ($i = 0; $i < $count; $i++) {
                    $website->views()->create([
                        'ip_address' => '192.168.1.' . rand(1, 50),
                        'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'created_at' => $date->copy()->startOfDay()->addHours(rand(0, 23))->addMinutes(rand(0, 59)),
                    ]);
                }
            }
        }
    }
}
