<?php

namespace App\Domains\Onboarding\Services;

use App\Domains\Onboarding\Contracts\CategoryRepositoryInterface;
use App\Domains\Onboarding\Contracts\TemplateRepositoryInterface;
use App\Domains\Onboarding\Contracts\WebsiteRepositoryInterface;
use App\Domains\Onboarding\DTO\CategoryData;
use App\Domains\Onboarding\DTO\TemplateData;
use App\Domains\Onboarding\DTO\WebsiteData;
use App\Domains\Template\Models\Template;
use App\Domains\User\Models\User;
use App\Domains\Website\Enums\WebsiteStatus;
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

    public function getTemplatesByCategory(int $categoryId, int $skip = 0, int $take = 20, ?User $user = null): array
    {
        $paginator = $this->templateRepository->getAllActiveByCategory($categoryId, $skip, $take);

        $accessMap = [];
        if ($user) {
            try {
                $accessMap = app(\App\Domains\Template\Services\TemplateAccessService::class)
                    ->mapAccessForTemplates($user, $paginator->getCollection());
            } catch (\Throwable $e) {
                $accessMap = [];
            }
        }

        return [
            'data' => $paginator->getCollection()->map(function (Template $template) use ($accessMap) {
                $access = $accessMap[$template->id] ?? null;
                if ($access) {
                    $access = [
                        'allowed' => $access['can_use'] ?? true,
                        'is_activated' => $access['is_activated'] ?? false,
                        'reason' => $access['reason'] ?? null,
                    ];
                }

                return TemplateData::fromModel($template, $access)->toArray();
            })->all(),
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

        if (!$template || !$template->isPublished()) {
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

        // Validasi hak akses template berdasarkan paket (Policy terpusat).
        // Free (limit 0) hanya Blank; Starter dibatasi kuota N; Unlimited bebas.
        // Blank template + template non-premium selalu lolos.
        if (!$user->isAdmin()) {
            $accessService = app(\App\Domains\Template\Services\TemplateAccessService::class);
            $access = $accessService->canUseTemplate($user, $template);
            if (!($access['allowed'] ?? false)) {
                abort(403, $access['reason'] ?? 'Akses ke template ini dibatasi oleh paket langganan Anda.');
            }
        }

        $category = $template->category;

        if (!$category || !$category->is_active) {
            abort(422, 'Template category is not available.');
        }

        $slugCheck = $this->checkSlug($data['slug'], $user);

        if (!$slugCheck['available']) {
            abort(422, $slugCheck['message']);
        }

        $defaultDraftJson = $template->published_json ?? $template->draft_json ?? $template->default_content ?? [
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

        // Catat template premium ke kuota user (dipakai untuk batas Starter N).
        try {
            app(\App\Domains\Template\Services\TemplateAccessService::class)
                ->applyTemplate($user, $template);
        } catch (\Throwable $e) {
            // Abaikan — akses sudah lolos di atas; pencatatan bersifat best-effort.
        }

        return WebsiteData::fromModel($website);
    }
}