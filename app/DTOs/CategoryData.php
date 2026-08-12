<?php

namespace App\DTOs;

class CategoryData
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly string $slug,
        public readonly int $sortOrder,
        public readonly bool $isActive,
    ) {}

    public static function fromModel(\App\Models\Category $category): self
    {
        return new self(
            id: $category->id,
            name: $category->name,
            slug: $category->slug,
            sortOrder: $category->sort_order,
            isActive: $category->is_active,
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'sort_order' => $this->sortOrder,
            'is_active' => $this->isActive,
        ];
    }
}
