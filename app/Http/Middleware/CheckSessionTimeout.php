<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckSessionTimeout
{
    /**
     * Session timeout in minutes (15 minutes)
     */
    protected int $timeout = 15;

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
            // Session expired - revoke token for Sanctum if present
            if ($request->user() && method_exists($request->user(), 'currentAccessToken') && $request->user()->currentAccessToken()) {
                try {
                    $request->user()->currentAccessToken()->delete();
                } catch (\Throwable $e) {
                    // Ignore if token already revoked or session-only
                }
            }

            // Invalidate session
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'success' => false,
                    'message' => "Sesi Anda telah berakhir karena tidak ada aktivitas selama {$this->timeout} menit. Silakan login kembali.",
                    'errors'  => ['session_timeout' => 'Session expired due to inactivity'],
                ], 401);
            }

            return redirect()->to('/login?logout=1')->with('message', "Sesi Anda telah berakhir karena tidak ada aktivitas selama {$this->timeout} menit. Silakan login kembali.");
        }

        // Update last activity time
        session()->put('last_activity_time', time());

        return $next($request);
    }
}

