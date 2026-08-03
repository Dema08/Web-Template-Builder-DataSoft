<?php

namespace App\Domains\Shared\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

/**
 * EnsureUserIsAdmin
 *
 * Guards admin-only routes. Relies on the User model's isAdmin()
 * implementation which uses the UserRole enum.
 */
class EnsureUserIsAdmin
{
    /**
     * Ensure the authenticated user has the admin role.
     */
    public function handle(Request $request, Closure $next): SymfonyResponse
    {
        $user = $request->user();

        if (! $user || ! $user->isAdmin()) {
            return Response::json([
                'success' => false,
                'message' => 'Forbidden. Admin access required.',
            ], 403);
        }

        return $next($request);
    }
}
