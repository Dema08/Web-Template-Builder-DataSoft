<?php

namespace App\Domains\User\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\User\Http\Requests\ChangePasswordRequest;
use App\Domains\User\Http\Requests\DeleteAvatarRequest;
use App\Domains\User\Http\Requests\UpdateProfileRequest;
use App\Domains\User\Http\Requests\UploadAvatarRequest;
use App\Domains\User\Resources\UserResource;
use App\Domains\User\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends BaseController
{
    public function __construct(protected UserService $userService)
    {
        //
    }

    public function profile(Request $request): JsonResponse
    {
        return $this->success(
            new UserResource($request->user()),
            'Profile retrieved successfully'
        );
    }

    public function updateProfile(UpdateProfileRequest $request): JsonResponse
    {
        $user = $this->userService->updateProfile($request->user(), $request->validated());

        return $this->success(
            new UserResource($user),
            'Profile updated successfully'
        );
    }

    public function uploadAvatar(UploadAvatarRequest $request): JsonResponse
    {
        $user = $this->userService->uploadAvatar($request->user(), $request->file('avatar'));

        return $this->success(
            new UserResource($user),
            'Avatar uploaded successfully'
        );
    }

    public function deleteAvatar(DeleteAvatarRequest $request): JsonResponse
    {
        $user = $this->userService->deleteAvatar($request->user());

        return $this->success(
            new UserResource($user),
            'Avatar deleted successfully'
        );
    }

    public function changePassword(ChangePasswordRequest $request): JsonResponse
    {
        $this->userService->changePassword($request->user(), $request->validated());

        return $this->success(null, 'Password changed successfully');
    }
}
