<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

/**
 * RoleMiddleware
 *
 * Works with App\Domains\User\Models\User and UserRole enum.
 * Usage: middleware('role:admin') for admin panel routes.
 * The integer :1 format is also supported for backwards compatibility.
 */
class RoleMiddleware
{
    public function handle(Request $request, Closure $next, string $role = 'admin'): Response
    {
        if (!Auth::check()) {
            return redirect()->route('login')->with('info', 'Silakan masuk terlebih dahulu.');
        }

        $user = Auth::user();

        // Support both integer level (legacy :1) and string role name (:admin)
        $isAdminRequired = ($role === 'admin' || $role === '1');

        if ($isAdminRequired && !$user->isAdmin()) {
            return redirect()->route('dashboard')
                ->with('error', 'Halaman ini khusus untuk Administrator.');
        }

        if (!$isAdminRequired && $user->isAdmin()) {
            return redirect()->route('admin.dashboard')
                ->with('error', 'Anda sudah login sebagai Administrator.');
        }

        return $next($request);
    }
}
