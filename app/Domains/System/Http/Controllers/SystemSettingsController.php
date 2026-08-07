<?php

namespace App\Domains\System\Http\Controllers;

use App\Domains\Shared\Enums\UserRole;
use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\User\Models\User;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * SystemSettingsController
 *
 * Handles platform-wide system flags such as maintenance mode.
 * The maintenance_mode setting is persisted to the `settings` table
 * (single source of truth) and also mirrored to Cache for fast
 * reads by the CheckMaintenanceMode middleware.
 */
class SystemSettingsController extends BaseController
{
    /**
     * GET /api/v1/admin/system/maintenance
     */
    public function getMaintenanceMode(): JsonResponse
    {
        $isEnabled = (bool) Setting::get('maintenance_mode', false);

        // Keep the cache warm for the middleware.
        Cache::put('maintenance_mode', $isEnabled, now()->addDays(30));

        return $this->success([
            'maintenance_mode' => $isEnabled,
        ]);
    }

    /**
     * PATCH /api/v1/admin/system/maintenance
     */
    public function updateMaintenanceMode(Request $request): JsonResponse
    {
        $request->validate([
            'maintenance_mode' => 'required|boolean',
        ]);

        $maintenanceMode = (bool) $request->input('maintenance_mode');

        // Persist to the settings table (single source of truth).
        Setting::updateOrCreate(
            ['key' => 'maintenance_mode'],
            ['value' => $maintenanceMode ? '1' : '0', 'type' => 'boolean', 'group' => 'system']
        );

        // Mirror to cache so the middleware can read quickly.
        Cache::put('maintenance_mode', $maintenanceMode, now()->addDays(30));

        // If maintenance mode is enabled, clear all non-admin tokens & sessions.
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

    /**
     * Revoke all Sanctum tokens for non-admin users when entering maintenance.
     */
    private function clearNonAdminSessions(): void
    {
        Cache::put('maintenance_mode_enabled_at', now()->timestamp, now()->addDays(30));

        $nonAdminUserIds = User::where('role', '!=', UserRole::Admin->value)->pluck('id');

        if ($nonAdminUserIds->isNotEmpty()) {
            DB::table('personal_access_tokens')
                ->whereIn('tokenable_id', $nonAdminUserIds)
                ->where('tokenable_type', User::class)
                ->delete();
        }
    }
}
