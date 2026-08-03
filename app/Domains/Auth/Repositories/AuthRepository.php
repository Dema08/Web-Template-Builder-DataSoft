<?php

namespace App\Domains\Auth\Repositories;

use App\Domains\Shared\Repositories\BaseRepository;
use App\Domains\User\Repositories\UserRepository;

/**
 * AuthRepository
 *
 * Delegates authentication data access to the UserRepository.
 * Keeps the Auth domain decoupled from Eloquent while presenting
 * a single Auth-facing repository.
 */
class AuthRepository extends BaseRepository
{
    public function __construct(protected UserRepository $userRepository)
    {
        parent::__construct();
    }

    /**
     * The auth domain works against the User entity.
     */
    public function model(): string
    {
        return $this->userRepository->model();
    }

    /**
     * Find a user by email.
     */
    public function findByEmail(string $email): ?\App\Domains\User\Models\User
    {
        return $this->userRepository->findByEmail($email);
    }

    /**
     * Create a user with the default USER role.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function createUser(array $attributes): \App\Domains\User\Models\User
    {
        return $this->userRepository->createRegularUser($attributes);
    }

    /**
     * Revoke all access tokens for a user.
     */
    public function revokeTokens(\App\Domains\User\Models\User $user): void
    {
        $this->userRepository->revokeAllTokens($user);
    }
}
