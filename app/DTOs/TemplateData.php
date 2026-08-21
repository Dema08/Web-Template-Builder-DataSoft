<?php

namespace App\DTOs;

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
    ) {}

    public static function fromModel(\App\Domains\Template\Models\Template $template): self
    {
        return new self(
            id: $template->id,
            categoryId: $template->category_id,
            name: $template->name,
            slug: $template->slug,
            description: $template->description,
            thumbnail: $template->thumbnail,
            previewData: $template->preview_data,
            schema: $template->schema,
            defaultContent: $template->default_content,
            sortOrder: $template->sort_order,
            isActive: $template->is_active,
            usageCount: $template->usage_count,
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
        ];
    }
}
