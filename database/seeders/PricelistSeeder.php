<?php

namespace Database\Seeders;

use App\Domains\Pricelist\Models\Pricelist;
use App\Domains\User\Models\User;
use Illuminate\Database\Seeder;

class PricelistSeeder extends Seeder
{
    public function run(): void
    {
        $plans = [
            [
                'slug' => 'free',
                'nama' => 'Free',
                'harga' => 0,
                'deskripsi' => 'Cocok untuk proyek pribadi dan mencoba platform.',
                'periode' => 'selamanya',
                'maks_domain' => 0, // Hanya subdomain (.datasoft.id)
                'maks_starter_template' => 0, // Hanya Blank Template
                'bisa_upload_website' => false,
                'bisa_custom_domain' => false,
                'fitur' => [
                    'Akses ke Blank Template',
                    'Subdomain Gratis (.datasoft.id)',
                    'Builder Visual Dasar',
                    'Tidak Bisa Custom Domain',
                    'Tidak Bisa Upload HTML/Zip',
                ],
                'is_active' => true,
                'is_default' => true,
                'is_popular' => false,
                'urutan' => 1,
            ],
            [
                'slug' => 'harga-1',
                'nama' => 'Harga 1 (Starter)',
                'harga' => 99000,
                'deskripsi' => 'Untuk individu & freelancer yang mulai meluncurkan website.',
                'periode' => 'bulan',
                'maks_domain' => 3, // Maksimal 3 domain
                'maks_starter_template' => 5, // Sedikit starter template
                'bisa_upload_website' => true,
                'bisa_custom_domain' => true,
                'fitur' => [
                    'Akses ke 5 Starter Templates',
                    'Bisa Upload Website (HTML / Custom Web)',
                    'Maksimal 3 Custom Domain',
                    'Subdomain + Custom Domain',
                    'SSL & Keamanan Standar',
                ],
                'is_active' => true,
                'is_default' => false,
                'is_popular' => false,
                'urutan' => 2,
            ],
            [
                'slug' => 'harga-2',
                'nama' => 'Harga 2 (Pro)',
                'harga' => 199000,
                'deskripsi' => 'Untuk bisnis berkembang yang siap melipatgandakan visibilitas online.',
                'periode' => 'bulan',
                'maks_domain' => 10, // Domain lebih banyak
                'maks_starter_template' => 20, // Starter template lebih banyak
                'bisa_upload_website' => true,
                'bisa_custom_domain' => true,
                'fitur' => [
                    'Akses ke 20 Starter Templates',
                    'Bisa Upload Website Custom Unrestricted',
                    'Maksimal 10 Custom Domain',
                    'Analytics & Laporan Kunjungan',
                    'Dukungan Prioritas Email',
                ],
                'is_active' => true,
                'is_default' => false,
                'is_popular' => true,
                'urutan' => 3,
            ],
            [
                'slug' => 'harga-3',
                'nama' => 'Harga 3 (Unlimited)',
                'harga' => 399000,
                'deskripsi' => 'Untuk instansi dan agensi yang membutuhkan akses tanpa batas.',
                'periode' => 'bulan',
                'maks_domain' => -1, // Unlimited
                'maks_starter_template' => -1, // Unlimited starter templates
                'bisa_upload_website' => true,
                'bisa_custom_domain' => true,
                'fitur' => [
                    'Akses Semua Starter Templates (Unlimited)',
                    'Upload Website Tanpa Batas',
                    'Unlimited Custom Domain',
                    'Fitur Eksklusif & VIP Support 24/7',
                    'Custom Branding & White-label',
                ],
                'is_active' => true,
                'is_default' => false,
                'is_popular' => false,
                'urutan' => 4,
            ],
        ];

        foreach ($plans as $planData) {
            Pricelist::updateOrCreate(
                ['slug' => $planData['slug']],
                $planData
            );
        }

        // Set default plan for existing users who don't have a plan assigned yet
        $defaultPlan = Pricelist::where('is_default', true)->first() ?? Pricelist::first();
        if ($defaultPlan) {
            User::whereNull('paket_harga_id')->update(['paket_harga_id' => $defaultPlan->id]);
        }
    }
}
