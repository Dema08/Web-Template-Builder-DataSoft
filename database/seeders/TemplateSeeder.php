<?php

namespace Database\Seeders;

use App\Domains\Category\Models\Category;
use App\Domains\Template\Enums\TemplateStatus;
use App\Domains\Template\Models\Template;
use App\Domains\User\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class TemplateSeeder extends Seeder
{
    /**
     * Seed all 30 official starter templates published by Admin.
     * Covers all 10 industry categories (3 templates each).
     *
     * Idempotent & safe: Pengecekan data agar jika sudah ada di database,
     * seeder dilewati sehingga tidak menumpuk / menduplikasi data saat deploy.
     */
    public function run(): void
    {
        // 1. Pastikan kategori industri tersedia terlebih dahulu
        if (Category::count() < 10) {
            $this->call(CategorySeeder::class);
        }

        // 2. Cari file data JSON starter templates
        $dataPath = database_path('seeders/starter_templates_data.json');
        if (!File::exists($dataPath)) {
            $dataPath = __DIR__ . '/starter_templates_data.json';
        }

        if (!File::exists($dataPath)) {
            $this->command?->error("File starter_templates_data.json tidak ditemukan.");
            return;
        }

        $templates = json_decode(File::get($dataPath), true);
        if (!is_array($templates) || empty($templates)) {
            $this->command?->error("Format starter_templates_data.json tidak valid.");
            return;
        }

        // 3. Pengecekan apakah 30 template resmi admin sudah ada di database
        $slugs = array_column($templates, 'slug');
        $existingCount = Template::whereNull('owner_id')
            ->whereIn('slug', $slugs)
            ->count();

        if ($existingCount >= count($templates)) {
            $this->command?->info("Pengecekan Seeder: Seluruh {$existingCount} template resmi admin sudah ada di database. Seeder dilewati agar tidak menumpuk data saat deploy.");
            return;
        }

        // 4. Ambil User Admin untuk pencatatan created_by
        $admin = User::where('email', 'admin@datasoft.id')->first();
        $adminId = $admin?->id ?? 1;

        $created = 0;
        $updated = 0;

        foreach ($templates as $data) {
            $template = Template::where('slug', $data['slug'])->first();

            if ($template) {
                // Update tanpa membuat row baru
                $template->update([
                    'category_id'    => $data['category_id'],
                    'code'           => $data['code'],
                    'name'           => $data['name'],
                    'description'    => $data['description'],
                    'thumbnail'      => $data['thumbnail'],
                    'preview_image'  => $data['preview_image'],
                    'draft_json'     => $data['draft_json'],
                    'published_json' => $data['published_json'],
                    'version'        => $data['version'] ?? '1.0.0',
                    'sort_order'     => $data['sort_order'] ?? 1,
                    'is_featured'    => $data['is_featured'] ?? false,
                    'is_premium'     => $data['is_premium'] ?? false,
                    'status'         => TemplateStatus::Published,
                    'visibility'     => 'public',
                    'owner_id'       => null,
                ]);
                $updated++;
            } else {
                Template::create([
                    'category_id'    => $data['category_id'],
                    'code'           => $data['code'],
                    'name'           => $data['name'],
                    'slug'           => $data['slug'],
                    'description'    => $data['description'],
                    'thumbnail'      => $data['thumbnail'],
                    'preview_image'  => $data['preview_image'],
                    'draft_json'     => $data['draft_json'],
                    'published_json' => $data['published_json'],
                    'version'        => $data['version'] ?? '1.0.0',
                    'sort_order'     => $data['sort_order'] ?? 1,
                    'is_featured'    => $data['is_featured'] ?? false,
                    'is_premium'     => $data['is_premium'] ?? false,
                    'status'         => TemplateStatus::Published,
                    'visibility'     => 'public',
                    'owner_id'       => null,
                    'created_by'     => $adminId,
                    'updated_by'     => $adminId,
                ]);
                $created++;
            }
        }

        $this->command?->info("TemplateSeeder selesai: {$created} template baru ditambahkan, {$updated} template diperbarui.");
    }
}
