<?php

use App\Domains\Shared\Exceptions\DomainException;
use App\Domains\Shared\Helpers\ApiResponse;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        apiPrefix: 'api',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // Sanctum stateful API for SPA cookie authentication.
        $middleware->statefulApi();

        // Trusted frontend hosts.
        $middleware->trustHosts(
            at: ['localhost:5173', '127.0.0.1:5173', 'localhost:3000', '127.0.0.1:3000'],
        );

        // Custom middleware aliases.
        $middleware->alias([
            'admin' => \App\Domains\Shared\Http\Middleware\EnsureUserIsAdmin::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        // Render JSON for API requests.
        $exceptions->shouldRenderJsonWhen(
            fn (Request $request) => $request->is('api/*'),
        );

        // Render domain exceptions through the canonical ApiResponse shape.
        $exceptions->render(function (DomainException $e, Request $request) {
            if ($request->is('api/*')) {
                return ApiResponse::error($e->getMessage(), $e->getStatusCode());
            }

            return null;
        });
    })->create();
