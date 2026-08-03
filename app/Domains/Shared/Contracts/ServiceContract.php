<?php

namespace App\Domains\Shared\Contracts;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * ServiceContract
 *
 * Defines the contract every feature service must implement.
 * Services hold ALL business logic — never controllers.
 */
interface ServiceContract
{
    /**
     * @return Model|null
     */
    public function find(int|string $id): ?Model;

    /**
     * @return Model
     */
    public function findOrFail(int|string $id): Model;

    /**
     * @return Collection<int, Model>
     */
    public function all(): Collection;

    /**
     * @return LengthAwarePaginator<int, Model>
     */
    public function paginate(int $perPage = 15): LengthAwarePaginator;

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

    public function delete(int|string $id): bool;
}
