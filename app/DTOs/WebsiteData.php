<?php

namespace App\DTOs;

class WebsiteData
{
    public function __construct(
        public readonly int $id,
        public readonly int $userId,
        public readonly int $categoryId,
        public readonly int $templateId,
        public readonly string $name,
        public readonly string $slug,
        public readonly string $status,
        public readonly ?array $draftJson,
        public readonly ?array $publishedJson,
        public readonly ?array $settings,
        public readonly ?string $favicon,
        public readonly ?string $logo,
        public readonly ?string $publishedAt,
    ) {}

    public static function fromModel(\App\Models\Website $website): self
    {
        return new self(
            id: $website->id,
            userId: $website->user_id,
            categoryId: $website->category_id,
            templateId: $website->template_id,
            name: $website->name,
            slug: $website->slug,
            status: $website->status,
            draftJson: $website->draft_json,
            publishedJson: $website->published_json,
            settings: $website->settings,
            favicon: $website->favicon,
            logo: $website->logo,
            publishedAt: $website->published_at?->toDateTimeString(),
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->userId,
            'category_id' => $this->categoryId,
            'template_id' => $this->templateId,
            'name' => $this->name,
            'slug' => $this->slug,
            'status' => $this->status,
            'draft_json' => $this->draftJson,
            'published_json' => $this->publishedJson,
            'settings' => $this->settings,
            'favicon' => $this->favicon,
            'logo' => $this->logo,
            'published_at' => $this->publishedAt,
        ];
    }
}
