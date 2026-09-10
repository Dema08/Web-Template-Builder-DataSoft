<?php

namespace App\Domains\Onboarding\DTO;

use App\Domains\Template\Models\Template;

class TemplateData
{
    public function __construct(
        public readonly int $id,
        public readonly int $categoryId,
        public readonly string $name,
        public readonly string $slug,
        public readonly ?string $description,
        public readonly ?string $thumbnail,
        public readonly ?array $previewData,
        public readonly array $schema,
        public readonly ?array $defaultContent,
        public readonly int $sortOrder,
        public readonly bool $isActive,
        public readonly int $usageCount,
        public readonly bool $isPremium = true,
        public readonly bool $isPublished = true,
        public readonly ?bool $canUse = null,
        public readonly ?bool $isActivated = null,
        public readonly ?string $accessReason = null,
    ) {}

    public static function fromModel(Template $template, ?array $access = null): self
    {
        return new self(
            id: $template->id,
            categoryId: $template->category_id,
            name: $template->name,
            slug: $template->slug,
            description: $template->description,
            thumbnail: $template->thumbnail_url,
            previewData: $template->preview_data,
            schema: $template->schema ?? [],
            defaultContent: $template->published_json ?? $template->draft_json ?? $template->default_content,
            sortOrder: $template->sort_order,
            isActive: (bool) ($template->is_active ?? $template->isPublished()),
            usageCount: (int) ($template->usage_count ?? 0),
            isPremium: $template->isPremium(),
            isPublished: $template->isPublished(),
            canUse: isset($access['allowed']) ? (bool) $access['allowed'] : null,
            isActivated: isset($access['is_activated']) ? (bool) $access['is_activated'] : null,
            accessReason: $access['reason'] ?? null,
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'category_id' => $this->categoryId,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'thumbnail' => $this->thumbnail,
            'preview_data' => $this->previewData,
            'schema' => $this->schema,
            'default_content' => $this->defaultContent,
            'sort_order' => $this->sortOrder,
            'is_active' => $this->isActive,
            'usage_count' => $this->usageCount,
            'is_premium' => $this->isPremium,
            'is_published' => $this->isPublished,
            'can_use' => $this->canUse,
            'is_activated' => $this->isActivated,
            'reason' => $this->accessReason,
        ];
    }
}