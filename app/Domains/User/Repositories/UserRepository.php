<?php

namespace App\Domains\User\Repositories;

use App\Domains\Shared\Enums\UserRole;
use App\Domains\Shared\Repositories\BaseRepository;
use App\Domains\User\Models\User;

/**
 * UserRepository
 *
 * Data-access layer for the User entity.
 */
class UserRepository extends BaseRepository
{
    /**
     * Return the fully-qualified model class name.
     */
    public function model(): string
    {
        return User::class;
    }

    /**
     * Find a user by their email address.
     */
    public function findByEmail(string $email): ?User
    {
        return $this->findBy(['email' => $email]);
    }

    /**
     * Find a user by their email address or fail with 404 semantics
     * converted by the service layer.
     */
    public function findByEmailOrFail(string $email): User
    {
        return $this->findByOrFail(['email' => $email]);
    }

    /**
     * Create a user with the default USER role.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function createRegularUser(array $attributes): User
    {
        $attributes['role'] ??= UserRole::User;

        return $this->create($attributes);
    }

    /**
     * Check whether an email is already used by another user account.
     */
    public function emailExistsForOtherUser(string $email, int|string $exceptId): bool
    {
        return $this->query()
            ->where('email', $email)
            ->whereKeyNot($exceptId)
            ->exists();
    }

    /**
     * Revoke all existing access tokens for the given user model.
     */
    public function revokeAllTokens(User $user): void
    {
        $user->tokens()->delete();
    }
}
