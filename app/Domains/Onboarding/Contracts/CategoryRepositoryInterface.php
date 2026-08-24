<?php

namespace App\Domains\Onboarding\Contracts;

use App\Domains\Category\Models\Category;

interface CategoryRepositoryInterface
{
    public function getAllActive(int $skip = 0, int $take = 100): array;

    public function findById(int $id): ?Category;

    public function findBySlug(string $slug): ?Category;

    public function create(array $data): Category;

    public function update(Category $category, array $data): Category;

    public function delete(Category $category): bool;
}