<?php

namespace App\Domains\System\Http\Controllers;

use App\Domains\Shared\Enums\UserRole;
use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\User\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class SystemSettingsController extends BaseController
{
    public function getMaintenanceMode(): JsonResponse
    {
        $isEnabled = Cache::get('maintenance_mode', false);

        return $this->success([
            'maintenance_mode' => (bool) $isEnabled,
        ]);
    }

    public function updateMaintenanceMode(Request $request): JsonResponse
    {
        $request->validate([
            'maintenance_mode' => 'required|boolean',
        ]);

        $maintenanceMode = (bool) $request->input('maintenance_mode');

        Cache::put('maintenance_mode', $maintenanceMode, now()->addDays(30));

        // If maintenance mode is enabled, clear all non-admin tokens & sessions
        if ($maintenanceMode) {
            $this->clearNonAdminSessions();
        }

        return $this->success(
            ['maintenance_mode' => $maintenanceMode],
            $maintenanceMode
                ? 'Modus pemeliharaan (maintenance mode) diaktifkan. Seluruh akun pengguna biasa telah dikeluarkan (logout).'
                : 'Modus pemeliharaan (maintenance mode) dinonaktifkan. Pengguna kini dapat login kembali.'
        );
    }

    private function clearNonAdminSessions(): void
    {
        Cache::put('maintenance_mode_enabled_at', now()->timestamp, now()->addDays(30));

        // Revoke all Sanctum tokens for non-admin users
        $nonAdminUserIds = User::where('role', '!=', UserRole::Admin->value)->pluck('id');

        if ($nonAdminUserIds->isNotEmpty()) {
            DB::table('personal_access_tokens')
                ->whereIn('tokenable_id', $nonAdminUserIds)
                ->where('tokenable_type', User::class)
                ->delete();
        }
    }
}