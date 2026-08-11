<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Auth;

class CheckMaintenanceMode
{
    public function handle(Request $request, Closure $next)
    {
        // Resolve authenticated user from Sanctum guard or default session guard
        $user = $request->user('sanctum') ?? Auth::user();

        // Skip maintenance mode completely for admin users (admin can always access)
        if ($user && method_exists($user, 'isAdmin') && $user->isAdmin()) {
            return $next($request);
        }

        // Allow auth endpoints, admin endpoints, public settings, and login page
        if ($request->is('api/v1/auth/*') ||
            $request->is('api/v1/admin/*') ||
            $request->is('api/v1/public/settings') ||
            $request->is('login')) {
            return $next($request);
        }

        // Read maintenance mode from the settings table (single source of truth),
        // cached for 30 days. The cache is kept in sync by SystemSettingsController
        // and AdminSettingController whenever the value changes.
        $maintenanceMode = Cache::remember('maintenance_mode', now()->addDays(30), function () {
            return (bool) Setting::get('maintenance_mode', false);
        });

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

