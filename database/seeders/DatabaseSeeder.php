<?php

namespace Database\Seeders;

use App\Domains\Pricelist\Models\Pricelist;
use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * Order of operations:
     *   1. Pricelists (Free, Harga 1, Harga 2, Harga 3)
     *   2. System & brand settings
     *   3. Users per Pricelist level
     *   4. Industry categories
     */
    public function run(): void
    {
        // ── 1. Pricelists ────────────────────────────────────────────────
        $this->call(PricelistSeeder::class);

        // Fetch pricelists for assignment
        $freePlan = Pricelist::where('slug', 'free')->first();
        $harga1Plan = Pricelist::where('slug', 'harga-1')->first();
        $harga2Plan = Pricelist::where('slug', 'harga-2')->first();
        $harga3Plan = Pricelist::where('slug', 'harga-3')->first();

        // ── 2. System & brand settings ───────────────────────────────────
        $this->call(SettingsSeeder::class);

        // ── 3. Admin Account ──────────────────────────────────────────────
        // Note: User model auto-hashes 'password' via Attribute cast

        // 3.1 Datasoft Administrator (Super Admin)
        User::updateOrCreate(
            ['email' => 'admin@datasoft.id'],
            [
                'name'              => 'Datasoft Administrator',
                'password'          => 'password123',
                'peran'             => UserRole::Admin,
                'paket_harga_id'    => $harga3Plan?->id,
                'email_verified_at' => now(),
                'disetujui'         => true,
            ]
        );

        User::updateOrCreate(
            ['email' => 'user@datasoft.id'],
            [
                'name'              => 'Datasoft User',
                'password'          => 'password123',
                'peran'             => UserRole::User,
                'paket_harga_id'    => $harga3Plan?->id,
                'email_verified_at' => now(),
                'disetujui'         => true,
            ]
        );

        // ── 4. Industry categories ───────────────────────────────────────
        $this->call(CategorySeeder::class);
    }
}
