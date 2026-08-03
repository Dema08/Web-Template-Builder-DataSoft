<?php

namespace App\Domains\Shared\Contracts;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * RepositoryContract
 *
 * Defines the contract every feature repository must implement.
 * Repositories are the ONLY layer allowed to touch Eloquent queries.
 */
interface RepositoryContract
{
    public function query(): Builder;

    /**
     * @return Model|null
     */
    public function find(int|string $id, array $columns = ['*']): ?Model;

    /**
     * @return Model
     */
    public function findOrFail(int|string $id, array $columns = ['*']): Model;

    /**
     * @return Model|null
     */
    public function findBy(array $attributes, array $columns = ['*']): ?Model;

    /**
     * @return Model
     */
    public function findByOrFail(array $attributes, array $columns = ['*']): Model;

    /**
     * @return Collection<int, Model>
     */
    public function all(array $columns = ['*']): Collection;

    /**
     * @return LengthAwarePaginator<int, Model>
     */
    public function paginate(int $perPage = 15, array $columns = ['*'], string $pageName = 'page', ?int $page = null): LengthAwarePaginator;

    /**
     * @param  array<string, mixed>  $attributes
     * @return Model
     */
    public function create(array $attributes): Model;

    /**
     * @param  array<string, mixed>  $attributes
     * @return Model
     */
    public function update(int|string $id, array $attributes): Model;

    /**
     * @param  array<string, mixed>  $attributes
     * @param  array<string, mixed>  $values
     * @return Model
     */
    public function updateOrCreate(array $attributes, array $values = []): Model;

    public function delete(int|string $id): bool;

    /**
     * @template TReturn
     *
     * @param  callable(): TReturn  $callback
     * @return TReturn
     */
    public function transaction(callable $callback): mixed;
}
