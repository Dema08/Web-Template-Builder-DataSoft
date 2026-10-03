<?php

namespace App\Domains\Admin\Http\Controllers;

use App\Domains\Admin\Resources\DashboardResource;
use App\Domains\Admin\Services\DashboardService;
use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends BaseController
{
    public function __construct(protected DashboardService $dashboardService)
    {
        
    }

    public function index(Request $request): JsonResponse
    {
        $user = $request->user();
        $payload = $this->dashboardService->getDashboardPayload($user, $user->isAdmin());

        return $this->success(
            $payload,
            'Dashboard retrieved successfully'
        );
    }
}
