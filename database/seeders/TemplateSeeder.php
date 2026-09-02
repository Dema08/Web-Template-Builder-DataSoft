<?php

namespace Database\Seeders;

use App\Domains\Category\Models\Category;
use App\Domains\Template\Models\Template;
use Illuminate\Database\Seeder;

class TemplateSeeder extends Seeder
{
    /**
     * Seed initial published system templates into database.
     */
    public function run(): void
    {
        $logisticsCat = Category::find(1) ?? Category::first();
        $corporateCat = Category::find(2) ?? Category::first();
        $serviceCat = Category::find(3) ?? Category::first();
        $educationCat = Category::find(5) ?? Category::first();
        $manufactureCat = Category::find(7) ?? Category::first();
        $koperasiCat = Category::find(8) ?? Category::first();

        $templates = [
            [
                'name' => 'Corporate Business',
                'slug' => 'corporate-business',
                'description' => 'Template perusahaan profesional modern dengan struktur landing page elegan, fitur layanan, tim, dan kontak.',
                'category_id' => $corporateCat?->id,
                'status' => 'published',
                'version' => '1.0.0',
                'is_featured' => true,
                'sort_order' => 1,
                'thumbnail' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
                'preview_image' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
                'code' => 'TPL-CORP-01',
                'draft_json' => [
                    'html' => '<div class="hero"><h1>Perusahaan Solusi Digital Terdepan</h1><p>Memberikan solusi bisnis terbaik untuk pertumbuhan perusahaan Anda.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #f8fafc; } h1 { color: #1e293b; font-size: 32px; }',
                ],
                'published_json' => [
                    'html' => '<div class="hero"><h1>Perusahaan Solusi Digital Terdepan</h1><p>Memberikan solusi bisnis terbaik untuk pertumbuhan perusahaan Anda.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #f8fafc; } h1 { color: #1e293b; font-size: 32px; }',
                ],
            ],
            [
                'name' => 'Logistics Express & Cargo',
                'slug' => 'logistics-express-cargo',
                'description' => 'Template armada pengiriman & logistik terpadu lengkap dengan fitur informasi pelacakan dan armada.',
                'category_id' => $logisticsCat?->id,
                'status' => 'published',
                'version' => '1.0.0',
                'is_featured' => true,
                'sort_order' => 2,
                'thumbnail' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
                'preview_image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
                'code' => 'TPL-LOG-02',
                'draft_json' => [
                    'html' => '<div class="hero"><h1>Layanan Logistik & Kargo Terpercaya</h1><p>Pengiriman cepat, aman, dan tepat waktu ke seluruh Indonesia.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #0f172a; color: white; } h1 { color: #38bdf8; }',
                ],
                'published_json' => [
                    'html' => '<div class="hero"><h1>Layanan Logistik & Kargo Terpercaya</h1><p>Pengiriman cepat, aman, dan tepat waktu ke seluruh Indonesia.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #0f172a; color: white; } h1 { color: #38bdf8; }',
                ],
            ],
            [
                'name' => 'Manufacturing & Industry',
                'slug' => 'manufacturing-industry',
                'description' => 'Template standar industri dan pabrikasi modern untuk menampilkan kapasitas produksi dan sertifikasi.',
                'category_id' => $manufactureCat?->id,
                'status' => 'published',
                'version' => '1.0.0',
                'is_featured' => false,
                'sort_order' => 3,
                'thumbnail' => 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=80',
                'preview_image' => 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&auto=format&fit=crop&q=80',
                'code' => 'TPL-MFG-03',
                'draft_json' => [
                    'html' => '<div class="hero"><h1>Manufaktur Presisi Tinggi</h1><p>Fasilitas pabrik modern berstandar internasional ISO 9001.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #fff7ed; } h1 { color: #ea580c; }',
                ],
                'published_json' => [
                    'html' => '<div class="hero"><h1>Manufaktur Presisi Tinggi</h1><p>Fasilitas pabrik modern berstandar internasional ISO 9001.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #fff7ed; } h1 { color: #ea580c; }',
                ],
            ],
            [
                'name' => 'Educational Academy',
                'slug' => 'educational-academy',
                'description' => 'Template institusi pendidikan, sekolah, dan kampus dengan profil program studi dan berita.',
                'category_id' => $educationCat?->id,
                'status' => 'published',
                'version' => '1.0.0',
                'is_featured' => false,
                'sort_order' => 4,
                'thumbnail' => 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
                'preview_image' => 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80',
                'code' => 'TPL-EDU-04',
                'draft_json' => [
                    'html' => '<div class="hero"><h1>Mencetak Generasi Unggul</h1><p>Pendidikan berkualitas berorientasi teknologi dan karakter.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #f0fdf4; } h1 { color: #16a34a; }',
                ],
                'published_json' => [
                    'html' => '<div class="hero"><h1>Mencetak Generasi Unggul</h1><p>Pendidikan berkualitas berorientasi teknologi dan karakter.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #f0fdf4; } h1 { color: #16a34a; }',
                ],
            ],
            [
                'name' => 'Startup & SaaS Platform',
                'slug' => 'startup-saas-platform',
                'description' => 'Template teknologi startup dengan visualisasi aplikasi, pricing, testimoni, dan Call to Action.',
                'category_id' => $serviceCat?->id,
                'status' => 'published',
                'version' => '1.0.0',
                'is_featured' => true,
                'sort_order' => 5,
                'thumbnail' => 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80',
                'preview_image' => 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80',
                'code' => 'TPL-SAAS-05',
                'draft_json' => [
                    'html' => '<div class="hero"><h1>Platform Digital Masa Depan</h1><p>Otomatiskan alur kerja bisnis Anda dengan satu aplikasi terpadu.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #faf5ff; } h1 { color: #9333ea; }',
                ],
                'published_json' => [
                    'html' => '<div class="hero"><h1>Platform Digital Masa Depan</h1><p>Otomatiskan alur kerja bisnis Anda dengan satu aplikasi terpadu.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #faf5ff; } h1 { color: #9333ea; }',
                ],
            ],
            [
                'name' => 'Koperasi & NGO Community',
                'slug' => 'koperasi-ngo-community',
                'description' => 'Template lembaga masyarakat, koperasi, dan organisasi non-profit dengan transparansi layanan.',
                'category_id' => $koperasiCat?->id,
                'status' => 'published',
                'version' => '1.0.0',
                'is_featured' => false,
                'sort_order' => 6,
                'thumbnail' => 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80',
                'preview_image' => 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80',
                'code' => 'TPL-NGO-06',
                'draft_json' => [
                    'html' => '<div class="hero"><h1>Membangun Ekonomi Bersama</h1><p>Layanan Koperasi Maju Sejahtera untuk seluruh anggota.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #f0f9ff; } h1 { color: #0284c7; }',
                ],
                'published_json' => [
                    'html' => '<div class="hero"><h1>Membangun Ekonomi Bersama</h1><p>Layanan Koperasi Maju Sejahtera untuk seluruh anggota.</p></div>',
                    'css' => '.hero { padding: 60px; text-align: center; background: #f0f9ff; } h1 { color: #0284c7; }',
                ],
            ],
        ];

        foreach ($templates as $tplData) {
            Template::updateOrCreate(
                ['slug' => $tplData['slug']],
                $tplData
            );
        }
    }
}
