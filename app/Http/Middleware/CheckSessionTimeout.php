<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckSessionTimeout
{
    /**
     * Session timeout in minutes (5 minutes)
     */
    protected int $timeout = 5;

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!Auth::check()) {
            return $next($request);
        }

        $lastActivity = session()->get('last_activity_time');

        if ($lastActivity && (time() - $lastActivity) > ($this->timeout * 60)) {
            // Session expired - revoke token for Sanctum
            if ($request->user()) {
                $request->user()->currentAccessToken()->delete();
            }

            // Invalidate session
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            if ($request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Sesi Anda telah berakhir karena tidak ada aktivitas selama 5 menit. Silakan login kembali.',
                    'errors' => ['session_timeout' => 'Session expired due to inactivity'],
                ], 401);
            }

            return redirect()->route('login')->with('message', 'Sesi Anda telah berakhir karena tidak ada aktivitas selama 5 menit. Silakan login kembali.');
        }

        // Update last activity time
        session()->put('last_activity_time', time());

        return $next($request);
    }
}
