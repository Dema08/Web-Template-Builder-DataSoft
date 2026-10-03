<?php

namespace App\Domains\User\Services;

use App\Domains\Shared\Exceptions\DomainException;
use App\Domains\Shared\Services\BaseService;
use App\Domains\User\Models\User;
use App\Domains\User\Repositories\UserRepository;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserService extends BaseService
{
    public function __construct(protected UserRepository $userRepository)
    {
        parent::__construct();
    }

    public function repository(): UserRepository
    {
        return $this->userRepository;
    }

    public function updateProfile(User $user, array $attributes): User
    {
        $email = $attributes['email'] ?? $user->email;

        if ($email !== $user->email && $this->userRepository->emailExistsForOtherUser($email, $user->id)) {
            throw new DomainException('The email has already been taken.', 422);
        }

        $user->fill([
            'name' => $attributes['name'],
            'email' => $email,
        ]);

        $user->save();

        return $user->refresh();
    }

    public function uploadAvatar(User $user, UploadedFile $avatar): User
    {
        $avatarPath = $user->avatar;

        if ($avatarPath && Storage::disk('public')->exists($avatarPath)) {
            Storage::disk('public')->delete($avatarPath);
        }

        if ($avatarPath) {
            $publicOldFile = public_path('storage/' . ltrim($avatarPath, '/'));
            if (file_exists($publicOldFile)) {
                @unlink($publicOldFile);
            }
        }

        $extension = strtolower($avatar->getClientOriginalExtension() ?: 'jpg');
        $filename = Str::uuid() . '.' . $extension;
        $storedPath = $avatar->storeAs('avatars', $filename, 'public');

        // Dual-write to public_path/storage/avatars for instant web server static file delivery
        try {
            $publicDir = public_path('storage/avatars');
            if (!file_exists($publicDir)) {
                @mkdir($publicDir, 0755, true);
            }
            @copy(storage_path('app/public/' . $storedPath), $publicDir . '/' . $filename);
        } catch (\Throwable $e) {
            // Ignore if directory creation is restricted
        }

        $user->update([
            'avatar' => $storedPath,
        ]);

        return $user->refresh();
    }

    public function deleteAvatar(User $user): User
    {
        if ($user->avatar) {
            if (Storage::disk('public')->exists($user->avatar)) {
                Storage::disk('public')->delete($user->avatar);
            }
            $publicFile = public_path('storage/' . ltrim($user->avatar, '/'));
            if (file_exists($publicFile)) {
                @unlink($publicFile);
            }
        }

        $user->update([
            'avatar' => null,
        ]);

        return $user->refresh();
    }

    public function changePassword(User $user, array $attributes): void
    {
        if (! Hash::check($attributes['current_password'], $user->password)) {
            throw new DomainException('Current password is incorrect.', 422);
        }

        $user->update([
            'password' => $attributes['password'],
        ]);
    }
}
