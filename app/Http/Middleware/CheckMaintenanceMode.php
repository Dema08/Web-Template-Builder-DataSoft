<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Auth;

class CheckMaintenanceMode
{
    public function handle(Request $request, Closure $next)
    {
        // Skip if user is admin (admin can always access)
        if (Auth::check() && Auth::user()->isAdmin()) {
            return $next($request);
        }

        // Allow auth endpoints and admin endpoints so administrators can log in and manage the site
        if ($request->is('api/v1/auth/*') || $request->is('api/v1/admin/*') || $request->is('login')) {
            return $next($request);
        }

        // Check if maintenance mode is enabled
        $maintenanceMode = Cache::get('maintenance_mode', false);

        if ($maintenanceMode) {
            // Return maintenance mode response for API or JSON requests
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sistem sedang dalam pemeliharaan (maintenance mode). Silakan coba lagi nanti.',
                    'data'    => null,
                    'errors'  => ['maintenance' => true],
                ], 503);
            }

            return response()->view('maintenance', [], 503);
        }

        return $next($request);
    }
}