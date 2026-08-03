<?php

namespace App\Domains\Shared\Repositories;

use App\Domains\Shared\Contracts\RepositoryContract;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

/**
 * BaseRepository
 *
 * Generic, reusable data-access base. Feature repositories extend
 * this and provide their concrete model. Repositories are the ONLY
 * place where Eloquent queries belong.
 *
 * @template TModel of Model
 */
abstract class BaseRepository implements RepositoryContract
{
    /**
     * The model instance.
     *
     * @var TModel
     */
    protected Model $model;

    public function __construct()
    {
        $this->model = $this->resolveModel();
    }

    /**
     * Return the fully-qualified model class name.
     *
     * @return class-string<TModel>
     */
    abstract public function model(): string;

    /**
     * Resolve the model class.
     *
     * @return TModel
     */
    protected function resolveModel(): Model
    {
        $modelClass = $this->model();
        $model = app($modelClass);

        return $model;
    }

    /**
     * Start a new query against the model.
     */
    public function query(): Builder
    {
        return $this->model->newQuery();
    }

    /**
     * Find a model by its primary key.
     *
     * @return TModel|null
     */
    public function find(int|string $id, array $columns = ['*']): ?Model
    {
        return $this->model->find($id, $columns);
    }

    /**
     * Find a model by its primary key or throw.
     *
     * @throws ModelNotFoundException
     * @return TModel
     */
    public function findOrFail(int|string $id, array $columns = ['*']): Model
    {
        return $this->model->findOrFail($id, $columns);
    }

    /**
     * Find a model by a set of attributes.
     *
     * @param  array<string, mixed>  $attributes
     * @return TModel|null
     */
    public function findBy(array $attributes, array $columns = ['*']): ?Model
    {
        return $this->query()->where($attributes)->first($columns);
    }

    /**
     * Find a model by a set of attributes or throw.
     *
     * @param  array<string, mixed>  $attributes
     * @throws ModelNotFoundException
     * @return TModel
     */
    public function findByOrFail(array $attributes, array $columns = ['*']): Model
    {
        return $this->query()->where($attributes)->firstOrFail($columns);
    }

    /**
     * Get all records.
     *
     * @return Collection<int, TModel>
     */
    public function all(array $columns = ['*']): Collection
    {
        return $this->query()->get($columns);
    }

    /**
     * Get records with pagination.
     *
     * @return LengthAwarePaginator<int, TModel>
     */
    public function paginate(int $perPage = 15, array $columns = ['*'], string $pageName = 'page', ?int $page = null): LengthAwarePaginator
    {
        return $this->query()->paginate($perPage, $columns, $pageName, $page);
    }

    /**
     * Create a new record.
     *
     * @param  array<string, mixed>  $attributes
     * @return TModel
     */
    public function create(array $attributes): Model
    {
        return $this->model->create($attributes);
    }

    /**
     * Update an existing record by its primary key.
     *
     * @param  array<string, mixed>  $attributes
     * @return TModel
     */
    public function update(int|string $id, array $attributes): Model
    {
        $record = $this->findOrFail($id);
        $record->update($attributes);

        return $record->refresh();
    }

    /**
     * Update a record by its primary key or create it.
     *
     * @param  array<string, mixed>  $attributes
     * @param  array<string, mixed>  $values
     * @return TModel
     */
    public function updateOrCreate(array $attributes, array $values = []): Model
    {
        return $this->model->updateOrCreate($attributes, $values);
    }

    /**
     * Delete a record by its primary key.
     *
     * @throws ModelNotFoundException
     */
    public function delete(int|string $id): bool
    {
        $record = $this->findOrFail($id);

        return (bool) $record->delete();
    }

    /**
     * Run a database transaction with a closure.
     *
     * @template TReturn
     *
     * @param  callable(): TReturn  $callback
     * @return TReturn
     */
    public function transaction(callable $callback): mixed
    {
        return DB::transaction($callback);
    }
}
