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
        $isAdminRoute = $request->is('api/v1/admin/*') || $request->is('api/admin/*') || $request->is('admin/*');
        $payload = $this->dashboardService->getDashboardPayload($request->user(), $isAdminRoute);

        return $this->success(
            $payload,
            'Dashboard retrieved successfully'
        );
    }
}
