<?php

namespace Database\Seeders;

use App\Domains\Template\Enums\TemplateStatus;
use App\Models\Category;
use App\Models\Template;
use App\Domains\User\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TemplateSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::where('role', 'admin')->first();

        if (!$admin) {
            $admin = User::create([
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'role' => 'admin',
                'password' => bcrypt('password'),
            ]);
        }

        $categories = Category::all();

        foreach ($categories as $category) {
            $this->createTemplatesForCategory($category, $admin);
        }
    }

    private function createTemplatesForCategory(Category $category, User $admin): void
    {
        $templates = match ($category->slug) {
            'logistics' => [
                [
                    'name' => 'Logistics Enterprise',
                    'description' => 'Professional logistics company profile template with shipping tracking features.',
                    'is_featured' => true,
                    'sort_order' => 1,
                    'draft_json' => $this->getLogisticsDraftJson(),
                ],
                [
                    'name' => 'Supply Chain Pro',
                    'description' => 'Modern supply chain management company profile template.',
                    'is_featured' => false,
                    'sort_order' => 2,
                    'draft_json' => $this->getSupplyChainDraftJson(),
                ],
            ],
            'education' => [
                [
                    'name' => 'Campus Academy',
                    'description' => 'Elegant educational institution template with course catalog.',
                    'is_featured' => true,
                    'sort_order' => 1,
                    'draft_json' => $this->getEducationDraftJson(),
                ],
            ],
            'manufacturing' => [
                [
                    'name' => 'Industrial Factory',
                    'description' => 'Robust manufacturing company profile with product showcase.',
                    'is_featured' => true,
                    'sort_order' => 1,
                    'draft_json' => $this->getManufacturingDraftJson(),
                ],
                [
                    'name' => 'Factory Plus',
                    'description' => 'Modern manufacturing template with quality certifications.',
                    'is_featured' => false,
                    'sort_order' => 2,
                    'draft_json' => $this->getManufacturingDraftJson(),
                ],
            ],
            default => [
                [
                    'name' => 'Corporate Basic',
                    'description' => 'Clean and professional corporate template.',
                    'is_featured' => false,
                    'sort_order' => 1,
                    'draft_json' => $this->getDefaultDraftJson(),
                ],
            ],
        };

        foreach ($templates as $index => $templateData) {
            $name = $templateData['name'];
            $code = 'TMPL-' . strtoupper(Str::random(6));
            $slug = Str::slug($name) . '-' . $category->slug . '-' . ($index + 1);

            \App\Models\Template::create([
                'category_id' => $category->id,
                'code' => $code,
                'name' => $name,
                'slug' => $slug,
                'description' => $templateData['description'],
                'thumbnail' => 'templates/thumbnails/default-' . $category->slug . '.jpg',
                'preview_image' => 'templates/previews/default-' . $category->slug . '.jpg',
                'draft_json' => $templateData['draft_json'],
                'published_json' => $templateData['draft_json'],
                'version' => '1.0.0',
                'sort_order' => $templateData['sort_order'],
                'is_featured' => $templateData['is_featured'],
                'status' => TemplateStatus::Published,
                'created_by' => $admin->id,
                'updated_by' => $admin->id,
            ]);
        }
    }

    private function getDefaultDraftJson(): array
    {
        return [
            'sections' => [
                ['type' => 'hero', 'title' => 'Welcome', 'subtitle' => 'Your Company'],
                ['type' => 'about', 'title' => 'About Us'],
                ['type' => 'services', 'title' => 'Our Services'],
                ['type' => 'contact', 'title' => 'Contact'],
            ],
        ];
    }

    private function getLogisticsDraftJson(): array
    {
        return [
            'sections' => [
                ['type' => 'hero', 'title' => 'Global Logistics Solutions', 'subtitle' => 'Delivering Excellence Worldwide'],
                ['type' => 'services', 'title' => 'Our Services', 'items' => ['Freight', 'Warehousing', 'Supply Chain']],
                ['type' => 'tracking', 'title' => 'Track Shipment'],
                ['type' => 'about', 'title' => 'About Our Company'],
                ['type' => 'contact', 'title' => 'Get In Touch'],
            ],
        ];
    }

    private function getSupplyChainDraftJson(): array
    {
        return [
            'sections' => [
                ['type' => 'hero', 'title' => 'Supply Chain Management', 'subtitle' => 'Optimize Your Operations'],
                ['type' => 'services', 'title' => 'Solutions', 'items' => ['Planning', 'Execution', 'Monitoring']],
                ['type' => 'about', 'title' => 'Who We Are'],
                ['type' => 'contact', 'title' => 'Contact Us'],
            ],
        ];
    }

    private function getEducationDraftJson(): array
    {
        return [
            'sections' => [
                ['type' => 'hero', 'title' => 'Excellence in Education', 'subtitle' => 'Shaping Future Leaders'],
                ['type' => 'courses', 'title' => 'Our Programs'],
                ['type' => 'facilities', 'title' => 'Campus Facilities'],
                ['type' => 'about', 'title' => 'Our Mission'],
                ['type' => 'contact', 'title' => 'Admissions'],
            ],
        ];
    }

    private function getManufacturingDraftJson(): array
    {
        return [
            'sections' => [
                ['type' => 'hero', 'title' => 'Industrial Manufacturing', 'subtitle' => 'Quality & Precision'],
                ['type' => 'products', 'title' => 'Our Products'],
                ['type' => 'certifications', 'title' => 'Certifications'],
                ['type' => 'about', 'title' => 'Company Overview'],
                ['type' => 'contact', 'title' => 'Request Quote'],
            ],
        ];
    }
}
