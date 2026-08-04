<?php

namespace App\Contracts;

use App\Models\Template;
use Illuminate\Pagination\LengthAwarePaginator;

interface TemplateRepositoryInterface
{
    public function getAllActiveByCategory(int $categoryId, int $skip = 0, int $take = 20): LengthAwarePaginator;

    public function findById(int $id): ?Template;

    public function findBySlug(string $slug): ?Template;

    public function create(array $data): Template;

    public function update(Template $template, array $data): Template;

    public function delete(Template $template): bool;

    public function incrementUsageCount(Template $template): void;
}
