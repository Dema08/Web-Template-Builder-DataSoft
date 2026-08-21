<?php

namespace App\Services;

use App\Contracts\CategoryRepositoryInterface;
use App\Contracts\TemplateRepositoryInterface;
use App\Contracts\WebsiteRepositoryInterface;
use App\DTOs\CategoryData;
use App\DTOs\TemplateData;
use App\DTOs\WebsiteData;
use App\Enums\WebsiteStatus;
use App\Domains\Template\Models\Template;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class OnboardingService
{
    public function __construct(
        private CategoryRepositoryInterface $categoryRepository,
        private TemplateRepositoryInterface $templateRepository,
        private WebsiteRepositoryInterface $websiteRepository,
    ) {}

    public function getCategories(int $skip = 0, int $take = 100): array
    {
        $categories = $this->categoryRepository->getAllActive($skip, $take);

        return array_map(function ($category) {
            return CategoryData::fromModel($category)->toArray();
        }, $categories);
    }

    public function getTemplatesByCategory(int $categoryId, int $skip = 0, int $take = 20): array
    {
        $paginator = $this->templateRepository->getAllActiveByCategory($categoryId, $skip, $take);

        return [
            'data' => $paginator->getCollection()->map(fn (Template $template) => TemplateData::fromModel($template)->toArray())->all(),
            'meta' => [
                'total' => $paginator->total(),
                'per_page' => $paginator->perPage(),
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
            ],
        ];
    }

    public function getTemplateById(int $id): ?TemplateData
    {
        $template = $this->templateRepository->findById($id);

        if (!$template || !$template->is_active) {
            return null;
        }

        return TemplateData::fromModel($template);
    }

    public function checkSlug(string $slug, ?User $user = null): array
    {
        $slug = strtolower(trim($slug));
        $slug = preg_replace('/[^a-z0-9-]/', '-', $slug);
        $slug = preg_replace('/-+/', '-', $slug);
        $slug = trim($slug, '-');

        if (empty($slug) || strlen($slug) < 3) {
            return [
                'available' => false,
                'slug' => $slug,
                'message' => 'Slug must be at least 3 characters long.',
            ];
        }

        $existing = $this->websiteRepository->findBySlug($slug);

        if ($existing) {
            return [
                'available' => false,
                'slug' => $slug,
                'message' => 'This slug is already taken.',
            ];
        }

        return [
            'available' => true,
            'slug' => $slug,
            'message' => 'Slug is available.',
        ];
    }

    public function createWebsite(User $user, array $data): WebsiteData
    {
        $existingWebsite = $this->websiteRepository->findActiveByUser($user);

        if ($existingWebsite) {
            abort(403, 'You already own a website. Each user can only have one website.');
        }

        $template = $this->templateRepository->findById($data['template_id']);

        if (!$template || !$template->is_active) {
            abort(422, 'Selected template is not available.');
        }

        $category = $template->category;

        if (!$category || !$category->is_active) {
            abort(422, 'Template category is not available.');
        }

        $slugCheck = $this->checkSlug($data['slug'], $user);

        if (!$slugCheck['available']) {
            abort(422, $slugCheck['message']);
        }

        $defaultDraftJson = $template->default_content ?? [
            'sections' => [],
            'settings' => [
                'siteName' => $data['company_name'],
                'tagline' => '',
                'logo' => null,
                'favicon' => null,
            ],
        ];

        if (!isset($defaultDraftJson['settings'])) {
            $defaultDraftJson['settings'] = [];
        }

        $defaultDraftJson['settings']['siteName'] = $data['company_name'];
        $defaultDraftJson['settings']['tagline'] = $data['tagline'] ?? '';

        $website = $this->websiteRepository->create([
            'user_id' => $user->id,
            'category_id' => $category->id,
            'template_id' => $template->id,
            'name' => $data['company_name'],
            'slug' => $slugCheck['slug'],
            'status' => WebsiteStatus::DRAFT->value,
            'draft_json' => $defaultDraftJson,
            'published_json' => null,
            'settings' => $defaultDraftJson['settings'],
        ]);

        $this->templateRepository->incrementUsageCount($template);

        return WebsiteData::fromModel($website);
    }
}
