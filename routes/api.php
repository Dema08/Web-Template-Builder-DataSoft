<?php

use App\Domains\Auth\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| All API routes are versioned under /api/v1 and follow the canonical
| ApiResponse payload shape ({ success, message, data, errors }).
|
*/

Route::prefix('v1')->group(function (): void {
    // -------------------------------------------------------------
    // Public endpoints
    // -------------------------------------------------------------
    Route::prefix('public')->group(function (): void {
        // GET /api/v1/public/site
        Route::get('/site', [App\Domains\Publish\Http\Controllers\PublicSiteController::class, 'show']);
    });

    // -------------------------------------------------------------
    // Authentication
    // -------------------------------------------------------------
    Route::prefix('auth')->group(function (): void {
        // Guest endpoints
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);

        // Authenticated endpoints (Sanctum)
        Route::middleware('auth:sanctum')->group(function (): void {
            Route::post('/logout', [AuthController::class, 'logout']);
            Route::get('/me', [AuthController::class, 'me']);
            Route::put('/change-password', [AuthController::class, 'changePassword']);
        });
    });

    // -------------------------------------------------------------
    // Authenticated application endpoints
    // -------------------------------------------------------------
    Route::middleware('auth:sanctum')->group(function (): void {
        // GET /api/v1/dashboard
        Route::get('/dashboard', [App\Domains\Admin\Http\Controllers\DashboardController::class, 'index']);

        // Website builder endpoints (implemented in later features)
        Route::prefix('website')->group(function (): void {
            Route::get('/', [App\Domains\Website\Http\Controllers\WebsiteController::class, 'show']);
            Route::get('/content', [App\Domains\Website\Http\Controllers\WebsiteController::class, 'getContent']);
            Route::post('/content', [App\Domains\Website\Http\Controllers\WebsiteController::class, 'saveContent']);
            Route::patch('/settings', [App\Domains\Website\Http\Controllers\WebsiteController::class, 'updateSettings']);
            Route::post('/publish', [App\Domains\Website\Http\Controllers\WebsiteController::class, 'publish']);
            Route::post('/assets', [App\Domains\Media\Http\Controllers\MediaController::class, 'upload']);
        });

        // Admin-only endpoints
        Route::prefix('admin')->middleware('admin')->group(function (): void {
            Route::get('/users', [App\Domains\Admin\Http\Controllers\AdminUserController::class, 'index']);
        });
    });
});

// Backwards-compatible /api/user convenience route for Sanctum SPA auth.
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
