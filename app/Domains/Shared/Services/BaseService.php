<?php

namespace App\Domains\Shared\Services;

use App\Domains\Shared\Contracts\RepositoryContract;
use App\Domains\Shared\Contracts\ServiceContract;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * BaseService
 *
 * Generic, reusable business-logic base. Feature services extend this
 * and inject their feature repository. Controllers call services;
 * services NEVER slice through to Eloquent directly.
 *
 * @template TModel of Model
 */
abstract class BaseService implements ServiceContract
{
    /**
     * The repository instance used for data access.
     *
     * @var RepositoryContract
     */
    protected RepositoryContract $repository;

    public function __construct()
    {
        $this->repository = $this->repository();
    }

    /**
     * Return the concrete repository instance.
     */
    abstract public function repository(): RepositoryContract;

    /**
     * Find a model by its primary key.
     *
     * @return TModel|null
     */
    public function find(int|string $id): ?Model
    {
        return $this->repository->find($id);
    }

    /**
     * Find a model by its primary key or throw.
     *
     * @return TModel
     */
    public function findOrFail(int|string $id): Model
    {
        return $this->repository->findOrFail($id);
    }

    /**
     * Get all records.
     *
     * @return Collection<int, TModel>
     */
    public function all(): Collection
    {
        return $this->repository->all();
    }

    /**
     * Get records with pagination.
     *
     * @return LengthAwarePaginator<int, TModel>
     */
    public function paginate(int $perPage = 15): LengthAwarePaginator
    {
        return $this->repository->paginate($perPage);
    }

    /**
     * Create a new record.
     *
     * @param  array<string, mixed>  $attributes
     * @return TModel
     */
    public function create(array $attributes): Model
    {
        return $this->repository->create($attributes);
    }

    /**
     * Update an existing record.
     *
     * @param  array<string, mixed>  $attributes
     * @return TModel
     */
    public function update(int|string $id, array $attributes): Model
    {
        return $this->repository->update($id, $attributes);
    }

    /**
     * Delete a record.
     */
    public function delete(int|string $id): bool
    {
        return $this->repository->delete($id);
    }
}
