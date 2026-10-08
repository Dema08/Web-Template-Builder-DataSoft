<?php

use Illuminate\Database\Migrations\Migration;
use App\Domains\Template\Models\Template;
use App\Domains\Template\Enums\TemplateStatus;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $jsonPath = database_path('seeders/starter_templates_data.json');
        if (!file_exists($jsonPath)) {
            return;
        }

        $allTemplates = json_decode(file_get_contents($jsonPath), true);
        if (!is_array($allTemplates)) {
            return;
        }

        foreach ($allTemplates as $data) {
            if ($data['slug'] === 'puskopolda-koperasi') {
                $template = Template::where('slug', 'puskopolda-koperasi')->first();

                if ($template) {
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
                        'sort_order'     => $data['sort_order'] ?? 4,
                        'is_featured'    => $data['is_featured'] ?? true,
                        'is_premium'     => $data['is_premium'] ?? false,
                        'status'         => TemplateStatus::Published,
                        'visibility'     => 'public',
                        'owner_id'       => null,
                    ]);
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
                        'sort_order'     => $data['sort_order'] ?? 4,
                        'is_featured'    => $data['is_featured'] ?? true,
                        'is_premium'     => $data['is_premium'] ?? false,
                        'status'         => TemplateStatus::Published,
                        'visibility'     => 'public',
                        'owner_id'       => null,
                        'created_by'     => 1,
                        'updated_by'     => 1,
                    ]);
                }
                break;
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Template::where('slug', 'puskopolda-koperasi')->forceDelete();
    }
};
