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
        // GET /api/v1/public/settings — brand identity for unauthenticated pages
        Route::get('/settings', [App\Domains\System\Http\Controllers\PublicSettingsController::class, 'index']);
    });

    // -------------------------------------------------------------
    // Authentication
    // -------------------------------------------------------------
    Route::prefix('auth')->group(function (): void {
        // Guest endpoints
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
        Route::post('/verify-otp', [AuthController::class, 'verifyOtp']);
        Route::post('/reset-password', [AuthController::class, 'resetPassword']);

        // Authenticated endpoints (Sanctum)
        Route::middleware('auth:sanctum')->group(function (): void {
            Route::post('/logout', [AuthController::class, 'logout']);
            Route::get('/me', [AuthController::class, 'me']);
            Route::put('/change-password', [AuthController::class, 'changePassword']);
        });
    });

    // -------------------------------------------------------------
    // Admin-only endpoints (accessible even during maintenance)
    Route::prefix('admin')->middleware(['auth:sanctum', 'session.timeout', 'admin'])->group(function (): void {
        Route::get('/users', [App\Domains\Admin\Http\Controllers\AdminUserController::class, 'index']);
        Route::patch('/users/{user}/approve', [App\Domains\Admin\Http\Controllers\AdminUserController::class, 'approveUser']);
        Route::patch('/users/{user}/role', [App\Domains\Admin\Http\Controllers\AdminUserController::class, 'updateRole']);
        Route::delete('/users/{user}', [App\Domains\Admin\Http\Controllers\AdminUserController::class, 'destroy']);
        Route::apiResource('categories', App\Domains\Admin\Http\Controllers\AdminCategoryController::class);
        Route::apiResource('templates', App\Domains\Template\Http\Controllers\TemplateController::class);
        Route::apiResource('categories.templates', App\Domains\Admin\Http\Controllers\AdminTemplateController::class);

        Route::get('/templates/trashed', [App\Domains\Template\Http\Controllers\TemplateController::class, 'trashed']);
        Route::patch('/templates/{template}/publish', [App\Domains\Template\Http\Controllers\TemplateController::class, 'publish']);
        Route::patch('/templates/{template}/archive', [App\Domains\Template\Http\Controllers\TemplateController::class, 'archive']);
        Route::post('/templates/{template}/duplicate', [App\Domains\Template\Http\Controllers\TemplateController::class, 'duplicate']);
        Route::patch('/templates/{template}/featured', [App\Domains\Template\Http\Controllers\TemplateController::class, 'toggleFeatured']);
        Route::delete('/templates/{template}/force', [App\Domains\Template\Http\Controllers\TemplateController::class, 'forceDelete']);
        Route::patch('/templates/{id}/restore', [App\Domains\Template\Http\Controllers\TemplateController::class, 'restore']);

        // System settings (accessible even during maintenance)
        Route::get('/system/maintenance', [App\Domains\System\Http\Controllers\SystemSettingsController::class, 'getMaintenanceMode']);
        Route::patch('/system/maintenance', [App\Domains\System\Http\Controllers\SystemSettingsController::class, 'updateMaintenanceMode']);

        Route::get('/settings', [App\Domains\System\Http\Controllers\AdminSettingController::class, 'index']);
        Route::put('/settings', [App\Domains\System\Http\Controllers\AdminSettingController::class, 'update']);
        Route::post('/settings/logo', [App\Domains\System\Http\Controllers\AdminSettingController::class, 'uploadLogo']);
        Route::delete('/settings/logo', [App\Domains\System\Http\Controllers\AdminSettingController::class, 'removeLogo']);

        // Dashboard summary (admin-only, always accessible even in maintenance)
        Route::get('/dashboard-summary', [App\Domains\Admin\Http\Controllers\DashboardController::class, 'index']);
    });

    // Authenticated application endpoints (protected by maintenance mode)
    Route::middleware(['auth:sanctum', 'session.timeout', 'maintenance'])->group(function (): void {
        Route::prefix('user')->group(function (): void {
            Route::get('/profile', [App\Domains\User\Http\Controllers\UserController::class, 'profile']);
            Route::put('/profile', [App\Domains\User\Http\Controllers\UserController::class, 'updateProfile']);
            Route::post('/avatar', [App\Domains\User\Http\Controllers\UserController::class, 'uploadAvatar']);
            Route::delete('/avatar', [App\Domains\User\Http\Controllers\UserController::class, 'deleteAvatar']);
            Route::put('/change-password', [App\Domains\User\Http\Controllers\UserController::class, 'changePassword']);
        });

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

        // Onboarding endpoints
        Route::prefix('onboarding')->group(function (): void {
            Route::get('/categories', [App\Http\Controllers\OnboardingController::class, 'getCategories']);
            Route::get('/templates/{categoryId}', [App\Http\Controllers\OnboardingController::class, 'getTemplatesByCategory']);
            Route::get('/template/{id}', [App\Http\Controllers\OnboardingController::class, 'getTemplate']);
            Route::post('/check-slug', [App\Http\Controllers\OnboardingController::class, 'checkSlug']);
            Route::post('/create', [App\Http\Controllers\OnboardingController::class, 'createWebsite']);
        });
    });
});

// Backwards-compatible /api/user convenience route for Sanctum SPA auth.
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
