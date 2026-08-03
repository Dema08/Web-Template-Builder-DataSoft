<?php

namespace App\Domains\Auth\Services;

use App\Domains\Auth\DTO\ChangePasswordDTO;
use App\Domains\Auth\DTO\LoginDTO;
use App\Domains\Auth\DTO\RegisterDTO;
use App\Domains\Shared\Exceptions\DomainException;
use App\Domains\Shared\Services\BaseService;
use App\Domains\User\Models\User;
use App\Domains\User\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;

/**
 * AuthService
 *
 * Holds ALL authentication business logic:
 *  - register: validate + hash + default USER role + issue token
 *  - login: verify credentials + issue token
 *  - logout: revoke current token
 *  - changePassword: verify current + rehash new
 *
 * Controllers never touch Eloquent or business rules directly.
 */
class AuthService extends BaseService
{
    public function __construct(protected UserRepository $userRepository)
    {
        parent::__construct();
    }

    public function repository(): UserRepository
    {
        return $this->userRepository;
    }

    /**
     * Register a new user.
     *
     * @return array{user: User, token: string}
     */
    public function register(RegisterDTO $dto): array
    {
        return $this->repository()->transaction(function () use ($dto): array {
            $user = $this->userRepository->createRegularUser([
                'name' => $dto->getName(),
                'email' => $dto->getEmail(),
                'password' => $dto->getPassword(), // cast 'hashed' stores it safely
            ]);

            $token = $user->createToken(
                config('auth.token_name', 'auth-token')
            )->plainTextToken;

            return ['user' => $user, 'token' => $token];
        });
    }

    /**
     * Log a user in with email + password.
     *
     * @throws DomainException
     * @return array{user: User, token: string}
     */
    public function login(LoginDTO $dto): array
    {
        $user = $this->userRepository->findByEmail($dto->getEmail());

        if (! $user || ! Hash::check($dto->getPassword(), $user->password)) {
            throw new DomainException('Invalid credentials', 401);
        }

        $token = $user->createToken(
            config('auth.token_name', 'auth-token')
        )->plainTextToken;

        return ['user' => $user, 'token' => $token];
    }

    /**
     * Log the authenticated user out by revoking the current token.
     */
    public function logout(User $user): void
    {
        $user->currentAccessToken()?->delete();
    }

    /**
     * Change the authenticated user's password.
     *
     * @throws DomainException
     */
    public function changePassword(User $user, ChangePasswordDTO $dto): void
    {
        if (! Hash::check($dto->getCurrentPassword(), $user->password)) {
            throw new DomainException('Current password is incorrect', 422);
        }

        $user->update([
            'password' => $dto->getNewPassword(), // 'hashed' cast applies
        ]);
    }

    /**
     * Return the authenticated user.
     */
    public function me(User $user): User
    {
        return $user;
    }
}
