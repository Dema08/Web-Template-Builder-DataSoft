<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Seed default industry categories.
     * These can be managed/updated later via the Admin > Categories panel.
     */
    public function run(): void
    {
        $categories = [
            [
                'name'        => 'Corporate & Bisnis',
                'slug'        => 'corporate-bisnis',
                'description' => 'Template untuk perusahaan, korporasi, dan bisnis profesional.',
                'icon'        => '🏢',
                'color'       => '#3b82f6',
                'sort_order'  => 1,
                'is_active'   => true,
            ],
            [
                'name'        => 'E-Commerce & Toko Online',
                'slug'        => 'ecommerce-toko-online',
                'description' => 'Template untuk toko online, marketplace, dan bisnis retail digital.',
                'icon'        => '🛒',
                'color'       => '#f59e0b',
                'sort_order'  => 2,
                'is_active'   => true,
            ],
            [
                'name'        => 'Portofolio & Kreatif',
                'slug'        => 'portofolio-kreatif',
                'description' => 'Template untuk desainer, fotografer, dan profesional kreatif.',
                'icon'        => '🎨',
                'color'       => '#8b5cf6',
                'sort_order'  => 3,
                'is_active'   => true,
            ],
            [
                'name'        => 'SaaS & Teknologi',
                'slug'        => 'saas-teknologi',
                'description' => 'Template untuk produk software, startup teknologi, dan layanan digital.',
                'icon'        => '💻',
                'color'       => '#06b6d4',
                'sort_order'  => 4,
                'is_active'   => true,
            ],
            [
                'name'        => 'Pendidikan & Pelatihan',
                'slug'        => 'pendidikan-pelatihan',
                'description' => 'Template untuk institusi pendidikan, kursus online, dan lembaga pelatihan.',
                'icon'        => '📚',
                'color'       => '#10b981',
                'sort_order'  => 5,
                'is_active'   => true,
            ],
            [
                'name'        => 'Kesehatan & Klinik',
                'slug'        => 'kesehatan-klinik',
                'description' => 'Template untuk klinik, rumah sakit, apotek, dan layanan kesehatan.',
                'icon'        => '🏥',
                'color'       => '#ef4444',
                'sort_order'  => 6,
                'is_active'   => true,
            ],
            [
                'name'        => 'Restoran & Kuliner',
                'slug'        => 'restoran-kuliner',
                'description' => 'Template untuk restoran, kafe, catering, dan bisnis kuliner.',
                'icon'        => '🍽️',
                'color'       => '#f97316',
                'sort_order'  => 7,
                'is_active'   => true,
            ],
            [
                'name'        => 'Properti & Real Estate',
                'slug'        => 'properti-real-estate',
                'description' => 'Template untuk agen properti, developer perumahan, dan real estate.',
                'icon'        => '🏠',
                'color'       => '#64748b',
                'sort_order'  => 8,
                'is_active'   => true,
            ],
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(
                ['slug' => $category['slug']],
                $category
            );
        }
    }
}
