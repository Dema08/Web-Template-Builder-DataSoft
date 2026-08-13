<?php

namespace App\Domains\Template\Repositories;

use App\Domains\Shared\Contracts\RepositoryContract;
use App\Domains\Template\Enums\TemplateStatus;
use App\Domains\Template\Models\Template;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * TemplateRepository
 *
 * Handles data access for Template entities with support for filtering,
 * searching, and ordering.
 */
class TemplateRepository implements RepositoryContract
{
    public function model(): string
    {
        return Template::class;
    }

    public function query(): Builder
    {
        return Template::query();
    }

    public function find(int|string $id, array $columns = ['*']): ?Model
    {
        return Template::find($id, $columns);
    }

    public function findOrFail(int|string $id, array $columns = ['*']): Model
    {
        return Template::with(['industryCategory', 'creator', 'updater'])->findOrFail($id, $columns);
    }

    public function findBy(array $attributes, array $columns = ['*']): ?Model
    {
        return Template::with(['industryCategory', 'creator', 'updater'])->where($attributes)->first($columns);
    }

    public function findByOrFail(array $attributes, array $columns = ['*']): Model
    {
        return Template::with(['industryCategory', 'creator', 'updater'])->where($attributes)->firstOrFail($columns);
    }

    public function all(array $columns = ['*']): Collection
    {
        return Template::with(['industryCategory', 'creator', 'updater'])->get($columns);
    }

    public function paginate(int $perPage = 15, array $columns = ['*'], string $pageName = 'page', ?int $page = null): LengthAwarePaginator
    {
        return Template::with(['industryCategory', 'creator', 'updater'])->paginate($perPage, $columns, $pageName, $page);
    }

    public function create(array $attributes): Model
    {
        return Template::create($attributes);
    }

    public function update(int|string $id, array $attributes): Model
    {
        $template = Template::findOrFail($id);
        $template->update($attributes);
        return $template->fresh();
    }

    public function updateOrCreate(array $attributes, array $values = []): Model
    {
        return Template::with(['industryCategory', 'creator', 'updater'])->updateOrCreate($attributes, $values);
    }

    public function delete(int|string $id): bool
    {
        $template = Template::find($id);
        if (!$template) {
            return false;
        }
        return $template->delete();
    }

    public function transaction(callable $callback): mixed
    {
        return \Illuminate\Support\Facades\DB::transaction($callback);
    }

    // -----------------------------------------------------------------
    // Template-specific queries
    // -----------------------------------------------------------------

    public function getActiveByCategory(int $categoryId, int $perPage = 15): LengthAwarePaginator
    {
        return Template::with(['industryCategory'])
            ->byCategory($categoryId)
            ->byStatus(TemplateStatus::Published)
            ->orderByDesc('is_featured')
            ->orderBy('sort_order')
            ->paginate($perPage);
    }

    public function getFeatured(int $limit = 10): Collection
    {
        return Template::with(['industryCategory'])
            ->featured()
            ->byStatus(TemplateStatus::Published)
            ->orderBy('sort_order')
            ->limit($limit)
            ->get();
    }

    public function search(string $query, int $perPage = 15): LengthAwarePaginator
    {
        return Template::with(['industryCategory', 'creator'])
            ->where('name', 'like', "%{$query}%")
            ->orWhere('code', 'like', "%{$query}%")
            ->orWhere('description', 'like', "%{$query}%")
            ->orderBy('sort_order')
            ->paginate($perPage);
    }

    public function filterByStatus(TemplateStatus $status, int $perPage = 15): LengthAwarePaginator
    {
        return Template::with(['industryCategory', 'creator'])
            ->byStatus($status)
            ->orderBy('sort_order')
            ->paginate($perPage);
    }

    public function getFiltered(array $filters = [], int $perPage = 15): LengthAwarePaginator
    {
        $query = Template::with(['industryCategory', 'creator', 'updater']);

        if (!empty($filters['search'])) {
            $search = $filters['search'];
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('code', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        if (!empty($filters['industry_category_id'])) {
            $query->byCategory((int) $filters['industry_category_id']);
        }

        if (!empty($filters['status'])) {
            $enumStatus = TemplateStatus::tryFrom($filters['status']);
            if ($enumStatus) {
                $query->byStatus($enumStatus);
            }
        }

        if (!empty($filters['is_featured'])) {
            $query->featured();
        }

        $sortBy = $filters['sort_by'] ?? 'sort_order';
        $sortDir = $filters['sort_dir'] ?? 'asc';

        $query->orderBy($sortBy, $sortDir);

        return $query->paginate($perPage);
    }
}
