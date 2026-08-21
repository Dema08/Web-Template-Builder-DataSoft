<?php

namespace App\Domains\User\Repositories;

use App\Domains\Shared\Contracts\RepositoryContract;
use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\PasswordResetOtp;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

/**
 * UserRepository
 *
 * Handles data access for User and PasswordResetOtp entities.
 */
class UserRepository implements RepositoryContract
{
    /**
     * Find user by email.
     */
    public function findByEmail(string $email): ?User
    {
        return User::where('email', $email)->first();
    }

    /**
     * Create a regular user (role = User).
     *
     * @param  array<string, mixed>  $attributes
     */
    public function createRegularUser(array $attributes): User
    {
        return User::create(array_merge($attributes, [
            'peran'        => UserRole::User,
            'disetujui' => false, // Needs admin approval before login
        ]));
    }

    /**
     * Return the model class name.
     */
    public function model(): string
    {
        return User::class;
    }

    /**
     * Revoke all access tokens for a user.
     */
    public function revokeAllTokens(User $user): void
    {
        $user->tokens()->delete();
    }

    /**
     * Check if an email exists for another user (excluding the given user ID).
     */
    public function emailExistsForOtherUser(string $email, int $excludeUserId): bool
    {
        return User::where('email', $email)
            ->where('id', '!=', $excludeUserId)
            ->exists();
    }

    /**
     * Create a new password reset OTP.
     */
    public function createPasswordResetOtp(array $data): PasswordResetOtp
    {
        return PasswordResetOtp::create($data);
    }

    /**
     * Find valid OTP by email and code.
     */
    public function findValidOtp(string $email, string $otpCode): ?PasswordResetOtp
    {
        return PasswordResetOtp::where('email', $email)
            ->where('otp_code', $otpCode)
            ->whereNull('used_at')
            ->where('expires_at', '>', now())
            ->latest()
            ->first();
    }

    /**
     * Mark OTP as used.
     */
    public function markOtpAsUsed(PasswordResetOtp $otp): void
    {
        $otp->update(['used_at' => now()]);
    }

    /**
     * Update user password.
     */
    public function updatePassword(User $user, string $newPassword): void
    {
        $user->update([
            'password' => $newPassword, // Will be hashed by model mutator
        ]);
    }

    // -----------------------------------------------------------------
    // RepositoryContract implementation (generic CRUD)
    // -----------------------------------------------------------------

    public function query(): Builder
    {
        return User::query();
    }

    public function find(int|string $id, array $columns = ['*']): ?Model
    {
        return User::find($id, $columns);
    }

    public function findOrFail(int|string $id, array $columns = ['*']): Model
    {
        return User::findOrFail($id, $columns);
    }

    public function findBy(array $attributes, array $columns = ['*']): ?Model
    {
        return User::where($attributes)->first($columns);
    }

    public function findByOrFail(array $attributes, array $columns = ['*']): Model
    {
        return User::where($attributes)->firstOrFail($columns);
    }

    public function all(array $columns = ['*']): Collection
    {
        return User::all($columns);
    }

    public function paginate(int $perPage = 15, array $columns = ['*'], string $pageName = 'page', ?int $page = null): \Illuminate\Pagination\LengthAwarePaginator
    {
        return User::paginate($perPage, $columns, $pageName, $page);
    }

    public function create(array $attributes): Model
    {
        return User::create($attributes);
    }

    public function update(int|string $id, array $attributes): Model
    {
        $user = User::findOrFail($id);
        $user->update($attributes);
        return $user;
    }

    public function updateOrCreate(array $attributes, array $values = []): Model
    {
        return User::updateOrCreate($attributes, $values);
    }

    public function delete(int|string $id): bool
    {
        $user = User::find($id);
        if (!$user) {
            return false;
        }
        return $user->delete();
    }

    public function transaction(callable $callback): mixed
    {
        return DB::transaction($callback);
    }
}
