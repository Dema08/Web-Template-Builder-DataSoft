<?php

namespace App\Domains\Admin\Http\Controllers;

use App\Domains\Shared\Enums\UserRole;
use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\User\Models\User;
use App\Domains\User\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

/**
 * AdminUserController
 *
 * Admin user management API endpoint.
 */
class AdminUserController extends BaseController
{
    public function index(): JsonResponse
    {
        $users = User::latest()->get();

        return $this->success(
            UserResource::collection($users),
            'Users retrieved successfully'
        );
    }

    public function approveUser(User $user): JsonResponse
    {
        if ($user->is_approved) {
            return $this->error("Akun {$user->name} sudah disetujui sebelumnya.", 409);
        }

        $user->update(['is_approved' => true]);

        return $this->success(
            new UserResource($user),
            "Akun {$user->name} berhasil disetujui. User sekarang dapat login."
        );
    }

    public function updateRole(Request $request, User $user): JsonResponse
    {
        $validated = $request->validate([
            'role' => ['required', 'string', Rule::in(UserRole::values())],
        ]);

        $user->update(['role' => $validated['role']]);

        return $this->success(
            new UserResource($user),
            "Role user {$user->name} berhasil diperbarui menjadi {$validated['role']}"
        );
    }

    public function destroy(Request $request, User $user): JsonResponse
    {
        if ($request->user()->id === $user->id) {
            return $this->error('Anda tidak dapat menghapus akun admin Anda sendiri.', 400);
        }

        $user->delete();

        return $this->success(
            null,
            "Akun user {$user->name} berhasil dihapus"
        );
    }
}
