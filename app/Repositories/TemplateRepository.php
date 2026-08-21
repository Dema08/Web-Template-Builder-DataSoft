<?php

namespace App\Repositories;

use App\Contracts\TemplateRepositoryInterface;
use App\Domains\Template\Models\Template;
use Illuminate\Pagination\LengthAwarePaginator;

class TemplateRepository implements TemplateRepositoryInterface
{
    public function getAllActiveByCategory(int $categoryId, int $skip = 0, int $take = 20): LengthAwarePaginator
    {
        return Template::where('category_id', $categoryId)
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('name')
            ->skip($skip)
            ->take($take)
            ->paginate($take, ['*'], 'page', ($skip / $take) + 1);
    }

    public function findById(int $id): ?Template
    {
        return Template::find($id);
    }

    public function findBySlug(string $slug): ?Template
    {
        return Template::where('slug', $slug)->first();
    }

    public function create(array $data): Template
    {
        return Template::create($data);
    }

    public function update(Template $template, array $data): Template
    {
        $template->update($data);
        return $template->fresh();
    }

    public function delete(Template $template): bool
    {
        return $template->delete();
    }

    public function incrementUsageCount(Template $template): void
    {
        $template->increment('usage_count');
    }
}
