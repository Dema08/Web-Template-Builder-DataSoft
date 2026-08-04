<?php

namespace App\Domains\Admin\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\User\Models\User;
use App\Domains\User\Resources\UserResource;
use Illuminate\Http\JsonResponse;

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
}
