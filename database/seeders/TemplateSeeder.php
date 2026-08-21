<?php

namespace Database\Seeders;

use App\Domains\Shared\Enums\UserRole;
use App\Domains\Template\Enums\TemplateStatus;
use App\Domains\Template\Models\Template;
use App\Domains\User\Models\User;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

/**
 * TemplateSeeder
 *
 * Seeds default published templates for every industry category defined in
 * {@see CategorySeeder}.  Templates are matched to categories by their slug,
 * so the slug values MUST stay in sync with CategorySeeder.
 *
 * Each template is created as "Published" and is given a deterministic slug
 * (and therefore deterministic code) so the seeder is safe to re-run
 * (idempotent) without creating duplicates.
 *
 * Template metadata mirrors the JavaScript starter templates found under
 * resources/js/builder/utils/starter-templates/categories/.
 */
class TemplateSeeder extends Seeder
{
    /**
     * ---------------------------------------------------------------------
     *  Template definitions
     * ---------------------------------------------------------------------
     *
     * Maps each category slug (as created by CategorySeeder) to an array
     * of template definitions.  Every definition MUST contain:
     *   - name           string  Human-readable template name
     *   - description    string  Short description shown in the admin UI
     *   - is_featured    bool    Whether this template is "featured"
     *   - sort_order     int     Display order within the category
     *   - slug           string  URL-friendly unique identifier
     *
     * Optional keys:
     *   - thumbnail      string  Storage path for the thumbnail image
     *   - preview_image  string  Storage path for the preview image
     *
     * @var array<string, array<int, array<string, mixed>>>
     */
    protected array $templates = [
        'logistik-transportasi' => [
            [
                'name'           => 'Logistics Corporate Express',
                'description'    => 'Template premium untuk perusahaan logistik besar: hero dengan trust indicator, profil perusahaan, statistik armada, layanan lengkap, sertifikasi resmi, jangkauan peta, dan FAQ.',
                'is_featured'    => true,
                'sort_order'     => 1,
                'slug'           => 'logistics-corporate-express',
            ],
            [
                'name'           => 'Logistics Premium',
                'description'    => 'Desain premium dengan fokus pada pelacakan real-time dan solusi supply chain terintegrasi.',
                'is_featured'    => false,
                'sort_order'     => 2,
                'slug'           => 'logistics-premium',
            ],
            [
                'name'           => 'Logistics Tracking',
                'description'    => 'Template fokus pada sistem pelacakan pengiriman dengan antarmuka pelanggan yang intuitif.',
                'is_featured'    => false,
                'sort_order'     => 3,
                'slug'           => 'logistics-tracking',
            ],
        ],

        'group-perusahaan-holding-company' => [
            [
                'name'           => 'Holding Enterprise',
                'description'    => 'Template comprehensive untuk group perusahaan dengan struktur holding company yang profesional.',
                'is_featured'    => false,
                'sort_order'     => 1,
                'slug'           => 'holding-enterprise',
            ],
            [
                'name'           => 'Holding Investor',
                'description'    => 'Fokus pada investor relations dengan presentasi keuangan dan laporan tahunan.',
                'is_featured'    => false,
                'sort_order'     => 2,
                'slug'           => 'holding-investor',
            ],
            [
                'name'           => 'Holding Premium',
                'description'    => 'Template premium untuk group holding dengan timeline perusahaan, struktur organisasi, dan investor showcase.',
                'is_featured'    => true,
                'sort_order'     => 3,
                'slug'           => 'holding-premium',
            ],
        ],

        'perusahaan-jasa' => [
            [
                'name'           => 'Service Agency Modern',
                'description'    => 'Template modern untuk perusahaan jasa dengan layout bersih dan fokus pada layanan utama.',
                'is_featured'    => false,
                'sort_order'     => 1,
                'slug'           => 'service-agency-modern',
            ],
            [
                'name'           => 'Service Consulting Premium',
                'description'    => 'Template premium untuk konsultan dengan presentasi nilai tambah, metodologi, dan testimoni klien.',
                'is_featured'    => true,
                'sort_order'     => 2,
                'slug'           => 'service-consulting-premium',
            ],
            [
                'name'           => 'Service Professional',
                'description'    => 'Template profesional untuk perusahaan jasa dengan fokus pada keandalaman layanan.',
                'is_featured'    => false,
                'sort_order'     => 3,
                'slug'           => 'service-professional',
            ],
        ],

        'umkm' => [
            [
                'name'           => 'UMKM Creative',
                'description'    => 'Template kreatif untuk UMKM dengan fokus pada branding warna-warni dan produk unik.',
                'is_featured'    => false,
                'sort_order'     => 1,
                'slug'           => 'umkm-creative',
            ],
            [
                'name'           => 'UMKM E-commerce',
                'description'    => 'Template khusus untuk UMKM yang menggunakan platform e-commerce dengan galeri produk dan CTA pemesanan.',
                'is_featured'    => true,
                'sort_order'     => 2,
                'slug'           => 'umkm-ecommerce',
            ],
            [
                'name'           => 'UMKM Minimalist',
                'description'    => 'Template minimalis untuk UMKM dengan fokus pada esensi produk dan kontak.',
                'is_featured'    => false,
                'sort_order'     => 3,
                'slug'           => 'umkm-minimalist',
            ],
            [
                'name'           => 'UMKM Modern',
                'description'    => 'Template modern untuk UMKM dengan desain bersih dan presentasi produk yang menarik.',
                'is_featured'    => false,
                'sort_order'     => 4,
                'slug'           => 'umkm-modern',
            ],
            [
                'name'           => 'UMKM Premium',
                'description'    => 'Template premium untuk UMKM dengan desain elegan dan fokus pada nilai jual premium.',
                'is_featured'    => false,
                'sort_order'     => 5,
                'slug'           => 'umkm-premium',
            ],
        ],

        'pendidikan-pelatihan' => [
            [
                'name'           => 'Education Academy',
                'description'    => 'Template untuk lembaga pendidikan dengan fokus pada program, fasilitas, dan pendaftaran.',
                'is_featured'    => false,
                'sort_order'     => 1,
                'slug'           => 'education-academy',
            ],
            [
                'name'           => 'Education Online',
                'description'    => 'Template khusus untuk platform pendidikan daring dengan fokus pada kursus online dan pembelajaran.',
                'is_featured'    => true,
                'sort_order'     => 2,
                'slug'           => 'education-online',
            ],
            [
                'name'           => 'Education University',
                'description'    => 'Template profesional untuk universitas dengan fokus pada fakultas, penelitian, dan kampus.',
                'is_featured'    => false,
                'sort_order'     => 3,
                'slug'           => 'education-university',
            ],
        ],

        'organisasi-asosiasi' => [
            [
                'name'           => 'Org Association',
                'description'    => 'Template untuk organisasi/asosiasi dengan fokus pada profil, visi misi, dan keanggotaan.',
                'is_featured'    => true,
                'sort_order'     => 1,
                'slug'           => 'org-association',
            ],
            [
                'name'           => 'Org Community',
                'description'    => 'Template untuk komunitas dengan fokus pada kegiatan, anggota, dan jaringan.',
                'is_featured'    => false,
                'sort_order'     => 2,
                'slug'           => 'org-community',
            ],
            [
                'name'           => 'Org Event',
                'description'    => 'Template untuk organisasi acara dengan fokus pada agenda, acara, dan pendaftaran.',
                'is_featured'    => false,
                'sort_order'     => 3,
                'slug'           => 'org-event',
            ],
        ],

        'industri-manufaktur' => [
            [
                'name'           => 'Manufacturing Factory',
                'description'    => 'Template untuk industri manufaktur dengan fokus pada fasilitas, produk, dan sertifikasi.',
                'is_featured'    => false,
                'sort_order'     => 1,
                'slug'           => 'manufacturing-factory',
            ],
            [
                'name'           => 'Manufacturing Modern',
                'description'    => 'Template modern untuk industri manufaktur dengan desain clean dan fokus pada inovasi.',
                'is_featured'    => false,
                'sort_order'     => 2,
                'slug'           => 'manufacturing-modern',
            ],
            [
                'name'           => 'Manufacturing Premium',
                'description'    => 'Template premium untuk industri manufaktur dengan presentasi pabrik, produk, dan sertifikasi ISO.',
                'is_featured'    => true,
                'sort_order'     => 3,
                'slug'           => 'manufacturing-premium',
            ],
        ],

        'koperasi' => [
            [
                'name'           => 'Koperasi Classic',
                'description'    => 'Template klasik untuk koperasi dengan fokus pada profil, layanan simpan-pinjam, dan kontak anggota.',
                'is_featured'    => false,
                'sort_order'     => 1,
                'slug'           => 'koperasi-classic',
            ],
            [
                'name'           => 'Koperasi Modern',
                'description'    => 'Template modern untuk koperasi dengan statistik pertumbuhan, layanan, dan gambaran profil.',
                'is_featured'    => true,
                'sort_order'     => 2,
                'slug'           => 'koperasi-modern',
            ],
            [
                'name'           => 'Koperasi Premium',
                'description'    => 'Template premium untuk koperasi dengan desain elegan dan fokus pada kepercayaan anggota.',
                'is_featured'    => false,
                'sort_order'     => 3,
                'slug'           => 'koperasi-premium',
            ],
        ],

        'perdagangan-retail' => [
            [
                'name'           => 'Retail Commerce',
                'description'    => 'Template untuk bisnis retail dengan galeri produk, brand partner, dan lokasi toko.',
                'is_featured'    => true,
                'sort_order'     => 1,
                'slug'           => 'retail-commerce',
            ],
            [
                'name'           => 'Retail Modern',
                'description'    => 'Template modern untuk retail dengan fokus pada produk terlaris dan pengalaman belanja.',
                'is_featured'    => false,
                'sort_order'     => 2,
                'slug'           => 'retail-modern',
            ],
            [
                'name'           => 'Retail Premium',
                'description'    => 'Template premium untuk retail dengan brand showcase dan presentasi produk premium.',
                'is_featured'    => false,
                'sort_order'     => 3,
                'slug'           => 'retail-premium',
            ],
        ],

        'koperasi-susu' => [
            [
                'name'           => 'Dairy Coop',
                'description'    => 'Template untuk koperasi susu dengan statistik produksi, layanan pengolahan, dan profil kualitas.',
                'is_featured'    => false,
                'sort_order'     => 1,
                'slug'           => 'dairy-coop',
            ],
            [
                'name'           => 'Dairy Farmer Network',
                'description'    => 'Template fokus pada jaringan peternak susu dengan presentasi peternak, proses, dan jaringan.',
                'is_featured'    => false,
                'sort_order'     => 2,
                'slug'           => 'dairy-farmer-network',
            ],
            [
                'name'           => 'Dairy Premium',
                'description'    => 'Template premium untuk koperasi susu dengan fokus pada kualitas, sertifikasi, dan jangkauan pasar.',
                'is_featured'    => true,
                'sort_order'     => 3,
                'slug'           => 'dairy-premium',
            ],
        ],
    ];

    /**
     * Run the seeder.
     *
     * Looks up the admin user (created by {@see DatabaseSeeder}) and iterates
     * over every category, creating or updating its templates.
     */
    public function run(): void
    {
        $admin = User::where('peran', UserRole::Admin)->first();

        if (!$admin) {
            $this->command->warn('No admin user found — skipping TemplateSeeder.');
            return;
        }

        $categories = Category::all();

        if ($categories->isEmpty()) {
            $this->command->warn('No categories found — run CategorySeeder first.');
            return;
        }

        foreach ($categories as $category) {
            $templateDefs = $this->templates[$category->slug] ?? null;

            if (!$templateDefs) {
                $this->command->warn(sprintf('No templates defined for category "%s" (slug: %s).', $category->name, $category->slug));
                continue;
            }

            foreach ($templateDefs as $templateData) {
                $this->createOrUpdateTemplate($category, $admin, $templateData);
            }
        }
    }

    /**
     * Create or update a single template record.
     *
     * Uses updateOrCreate keyed on the template slug so the seeder is
     * idempotent and safe to re-run.
     */
    private function createOrUpdateTemplate(
        Category $category,
        User $admin,
        array $templateData,
    ): void {
        $code        = $this->generateTemplateCode($category->slug, $templateData['slug']);
        $thumbnail   = $templateData['thumbnail']   ?? $this->defaultThumbnail($category->slug);
        $preview     = $templateData['preview_image'] ?? $this->defaultPreviewImage($category->slug);
        $draftJson   = $this->draftJsonForCategory($category->slug, $templateData['slug']);

        Template::updateOrCreate(
            ['slug' => $templateData['slug']],
            [
                'category_id'      => $category->id,
                'code'             => $code,
                'name'             => $templateData['name'],
                'slug'             => $templateData['slug'],
                'description'      => $templateData['description'],
                'thumbnail'        => $thumbnail,
                'preview_image'    => $preview,
                'draft_json'       => $draftJson,
                'published_json'   => $draftJson,
                'version'          => '1.0.0',
                'sort_order'       => $templateData['sort_order'],
                'is_featured'      => $templateData['is_featured'],
                'status'           => TemplateStatus::Published,
                'created_by'       => $admin->id,
                'updated_by'       => $admin->id,
            ],
        );
    }

    /**
     * Generate a deterministic template code from the category slug and
     * template slug.  Example: "TMPL-LOGISTIK-TRANSPORTASI-LOGISTICS-CORPORATE-EXPRESS".
     */
    private function generateTemplateCode(string $categorySlug, string $templateSlug): string
    {
        $slug  = str_replace('-', '_', $templateSlug);
        $parts = explode('_', $categorySlug . '_' . $slug);

        return 'TMPL-' . implode('-', array_map(fn (string $part): string => strtoupper($part), $parts));
    }

    /**
     * Default thumbnail path for a category.
     */
    private function defaultThumbnail(string $categorySlug): string
    {
        return 'templates/thumbnails/' . $categorySlug . '.jpg';
    }

    /**
     * Default preview image path for a category.
     */
    private function defaultPreviewImage(string $categorySlug): string
    {
        return 'templates/previews/' . $categorySlug . '.jpg';
    }

    /**
     * Build the draft_json section structure for a given category.
     *
     * Section types are derived from the industry configuration in
     * resources/js/builder/utils/industryConfigs.js.
     *
     * @return array<string, array<int, array<string, mixed>>>
     */
    private function draftJsonForCategory(string $categorySlug, string $templateSlug): array
    {
        $sectionSets = [
            'logistik-transportasi' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Solusi Logistik Nasional', 'subtitle' => 'Jaringan distribusi terluas di Indonesia'],
                ['type' => 'statistics', 'title' => 'Kapasitas & Jangkauan'],
                ['type' => 'fleet', 'title' => 'Armada Modern'],
                ['type' => 'coverage', 'title' => 'Area Jangkauan'],
                ['type' => 'services', 'title' => 'Solusi Logistik & Supply Chain'],
                ['type' => 'clients', 'title' => 'Dipercaya Korporat Terkemuka'],
                ['type' => 'certifications', 'title' => 'Standar Mutu & Keamanan'],
                ['type' => 'timeline', 'title' => 'Alur Proses Pengiriman'],
                ['type' => 'testimonials', 'title' => 'Testimonial Korporasi'],
                ['type' => 'faq', 'title' => 'Pertanyaan Umum'],
                ['type' => 'contact', 'title' => 'Hubungi Konsultan Kami'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
            'group-perusahaan-holding-company' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Corporate Hero', 'subtitle' => 'Group perusahaan terkemuka'],
                ['type' => 'about', 'title' => 'Company Overview'],
                ['type' => 'vision', 'title' => 'Visi & Misi'],
                ['type' => 'timeline', 'title' => 'Corporate Journey'],
                ['type' => 'team', 'title' => 'Board of Directors'],
                ['type' => 'clients', 'title' => 'Dipercaya Oleh'],
                ['type' => 'testimonials', 'title' => 'Apa Kata Mereka'],
                ['type' => 'contact', 'title' => 'Investor Contact'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
            'perusahaan-jasa' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Layanan Profesional', 'subtitle' => 'Solusi untuk kebutuhan bisnis Anda'],
                ['type' => 'services', 'title' => 'Layanan Kami'],
                ['type' => 'about', 'title' => 'Mengapa Memilih Kami'],
                ['type' => 'pricing', 'title' => 'Paket Harga'],
                ['type' => 'testimonials', 'title' => 'Testimonial Klien'],
                ['type' => 'faq', 'title' => 'Pertanyaan Umum'],
                ['type' => 'contact', 'title' => 'Hubungi Kami'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
            'umkm' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Produk Unggulan', 'subtitle' => 'UMKM lokal dengan kualitas terbaik'],
                ['type' => 'products', 'title' => 'Produk Kami'],
                ['type' => 'about', 'title' => 'Cerita Kami'],
                ['type' => 'gallery', 'title' => 'Galeri Produk'],
                ['type' => 'pricing', 'title' => 'Harga Terjangkau'],
                ['type' => 'testimonials', 'title' => 'Kata Pelanggan'],
                ['type' => 'contact', 'title' => 'Order Sekarang'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
            'pendidikan-pelatihan' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Excellence in Education', 'subtitle' => 'Membentuk pemimpin masa depan'],
                ['type' => 'programs', 'title' => 'Program & Kursus'],
                ['type' => 'teachers', 'title' => 'Instruktur'],
                ['type' => 'facilities', 'title' => 'Fasilitas'],
                ['type' => 'achievements', 'title' => 'Pencapaian'],
                ['type' => 'testimonials', 'title' => 'Apa Kata Murid'],
                ['type' => 'registration', 'title' => 'Pendaftaran'],
                ['type' => 'contact', 'title' => 'Kontak Admisi'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
            'organisasi-asosiasi' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Organisasi Kami', 'subtitle' => 'Bersama untuk kebaikan bersama'],
                ['type' => 'about', 'title' => 'Tentang Organisasi'],
                ['type' => 'vision', 'title' => 'Visi & Misi'],
                ['type' => 'team', 'title' => 'Tim Pengurus'],
                ['type' => 'achievements', 'title' => 'Pencapaian'],
                ['type' => 'testimonials', 'title' => 'Testimonial Anggota'],
                ['type' => 'contact', 'title' => 'Kontak Sekretariat'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
            'industri-manufaktur' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Industri Manufaktur', 'subtitle' => 'Kualitas & Presisi'],
                ['type' => 'products', 'title' => 'Katalog Produk'],
                ['type' => 'certifications', 'title' => 'Sertifikasi ISO'],
                ['type' => 'about', 'title' => 'Fasilitas Pabrik'],
                ['type' => 'testimonials', 'title' => 'Testimonial Klien'],
                ['type' => 'faq', 'title' => 'Pertanyaan Umum'],
                ['type' => 'contact', 'title' => 'Permintaan Penawaran'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
            'koperasi' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Koperasi Modern', 'subtitle' => 'Bersama Maju Bersama'],
                ['type' => 'statistics', 'title' => 'Statistik Pertumbuhan'],
                ['type' => 'services', 'title' => 'Layanan Simpan & Pinjam'],
                ['type' => 'about', 'title' => 'Profil & Legalitas'],
                ['type' => 'testimonials', 'title' => 'Testimonial Anggota'],
                ['type' => 'contact', 'title' => 'Loket Anggota'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
            'perdagangan-retail' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Produk Unggulan', 'subtitle' => 'Kualitas terbaik untuk kebutuhan Anda'],
                ['type' => 'products', 'title' => 'Produk Terlaris'],
                ['type' => 'clients', 'title' => 'Brand Partner'],
                ['type' => 'about', 'title' => 'Cerita Kami'],
                ['type' => 'testimonials', 'title' => 'Kata Pelanggan'],
                ['type' => 'contact', 'title' => 'Lokasi Toko'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
            'koperasi-susu' => [
                ['type' => 'navbar', 'title' => 'Navigasi'],
                ['type' => 'hero', 'title' => 'Koperasi Susu Premium', 'subtitle' => 'Kualitas segar dari peternak lokal'],
                ['type' => 'statistics', 'title' => 'Statistik Produksi'],
                ['type' => 'services', 'title' => 'Pengolahan Susu'],
                ['type' => 'about', 'title' => 'Kontrol Kualitas'],
                ['type' => 'certifications', 'title' => 'Sertifikasi Keamanan'],
                ['type' => 'testimonials', 'title' => 'Testimonial Peternak'],
                ['type' => 'contact', 'title' => 'Jaringan Peternak'],
                ['type' => 'footer', 'title' => 'Footer'],
            ],
        ];

        return [
            'sections' => $sectionSets[$categorySlug] ?? $sectionSets['logistik-transportasi'],
        ];
    }
}
