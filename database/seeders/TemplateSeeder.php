<?php

namespace Database\Seeders;

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
     */
    public function run(): void
    {
        $admin = User::where('email', 'admin@datasoft.id')->first();
        $adminId = $admin?->id ?? 1;

        $dataPath = database_path('seeders/starter_templates_data.json');
        if (!File::exists($dataPath)) {
            $this->command->error("Starter template JSON file not found at: {$dataPath}");
            return;
        }

        $templates = json_decode(File::get($dataPath), true);
        if (!is_array($templates)) {
            $this->command->error("Invalid starter template JSON format.");
            return;
        }

        $count = 0;
        foreach ($templates as $data) {
            Template::updateOrCreate(
                [
                    'slug' => $data['slug'],
                ],
                [
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
                ]
            );
            $count++;
        }

        $this->command->info("Successfully seeded {$count} published starter templates across 10 industry categories.");
    }
}
