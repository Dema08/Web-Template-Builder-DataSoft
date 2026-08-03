<?php

namespace App\Domains\Shared\DTO;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

/**
 * BaseDTO
 *
 * Immutable data-transfer-object base using an internal attributes
 * array. Concrete DTOs declare their keys via `keys()` and access
 * values through typed getters or `get()`. This keeps DTOs simple,
 * serializable, and free of Eloquent coupling.
 */
abstract class BaseDTO implements Arrayable, JsonSerializable
{
    /**
     * The underlying data payload.
     *
     * @var array<string, mixed>
     */
    protected array $attributes = [];

    /**
     * Define the DTO's accepted attribute keys.
     *
     * @return array<int, string>
     */
    abstract protected function keys(): array;

    /**
     * Create a DTO from validated input, ignoring unknown keys.
     *
     * @param  array<string, mixed>  $data
     */
    public static function fromArray(array $data): static
    {
        $instance = new static;
        $instance->attributes = array_intersect_key($data, array_flip($instance->keys()));

        return $instance;
    }

    /**
     * Get an attribute value.
     */
    public function get(string $key, mixed $default = null): mixed
    {
        return $this->attributes[$key] ?? $default;
    }

    /**
     * Determine whether an attribute exists.
     */
    public function has(string $key): bool
    {
        return array_key_exists($key, $this->attributes);
    }

    /**
     * Convert the DTO to an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return $this->attributes;
    }

    /**
     * JSON serialization.
     *
     * @return array<string, mixed>
     */
    public function jsonSerialize(): array
    {
        return $this->toArray();
    }
}
