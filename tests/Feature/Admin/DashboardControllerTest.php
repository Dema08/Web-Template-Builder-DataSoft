<?php

use App\Domains\Admin\Http\Controllers\DashboardController;
use App\Domains\Admin\Services\DashboardService;
use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use Illuminate\Http\Request;

it('does not force regular users into the admin dashboard', function () {
    $user = new User(['peran' => UserRole::User]);
    $request = Request::create('/api/v1/dashboard', 'GET');
    $request->setUserResolver(fn () => $user);

    $dashboardService = Mockery::mock(DashboardService::class);
    $dashboardService->shouldReceive('getDashboardPayload')
        ->once()
        ->with($user, false)
        ->andReturn([]);

    $response = (new DashboardController($dashboardService))->index($request);

    expect($response->getStatusCode())->toBe(200);
});

it('keeps the admin dashboard global for administrators', function () {
    $user = new User(['peran' => UserRole::Admin]);
    $request = Request::create('/api/v1/admin/dashboard-summary', 'GET');
    $request->setUserResolver(fn () => $user);

    $dashboardService = Mockery::mock(DashboardService::class);
    $dashboardService->shouldReceive('getDashboardPayload')
        ->once()
        ->with($user, true)
        ->andReturn([]);

    $response = (new DashboardController($dashboardService))->index($request);

    expect($response->getStatusCode())->toBe(200);
});
