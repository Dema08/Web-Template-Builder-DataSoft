<?php

namespace App\Domains\System\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

/**
 * AdminSettingController
 *
 * System Settings — Single Source of Truth.
 * All settings are stored as key/value rows in the `settings` table.
 * Every page (admin/user sidebar, login, dashboard, builder, public site)
 * reads its brand identity and platform flags from this same table.
 */
class AdminSettingController extends BaseController
{
    /**
     * The canonical list of every managed setting key.
     */
    public const SETTING_KEYS = [
        'brand_name',
        'brand_badge',
        'brand_color',
        'plan_label',
        'logo_path',
        'maintenance_mode',
        'allow_registration',
        'default_storage_limit',
    ];

    /**
     * Default fallback values (used when a key row is missing).
     */
    protected const DEFAULTS = [
        'brand_name'            => 'DataSoft',
        'brand_badge'           => 'DS',
        'brand_color'           => '#2563eb',
        'plan_label'            => 'Premium Plan',
        'logo_path'             => null,
        'maintenance_mode'      => false,
        'allow_registration'    => true,
        'default_storage_limit' => 100,
    ];

    /**
     * Build a flat, frontend-ready settings object from the database.
     *
     * logo_path is resolved through Storage::url() so the consumer
     * receives a ready-to-use URL (or null when no logo is set).
     */
    protected function buildSettingsArray(): array
    {
        $settings = [];

        foreach (self::SETTING_KEYS as $key) {
            $raw = Setting::get($key, self::DEFAULTS[$key] ?? null);

            if ($key === 'logo_path') {
                $settings[$key] = $raw ? Storage::url($raw) : null;
            } elseif ($key === 'maintenance_mode' || $key === 'allow_registration') {
                $settings[$key] = (bool) $raw;
            } elseif ($key === 'default_storage_limit') {
                $settings[$key] = (int) $raw;
            } else {
                $settings[$key] = $raw;
            }
        }

        return $settings;
    }

    /**
     * GET /api/admin/settings
     * Return all settings as a flat object.
     *
     * {
     *   "brand_name": "DataSoft",
     *   "brand_badge": "DS",
     *   "brand_color": "#2563eb",
     *   "plan_label": "Premium Plan",
     *   "logo_path": "/storage/settings/logo.png",
     *   "maintenance_mode": false,
     *   "allow_registration": true,
     *   "default_storage_limit": 100
     * }
     */
    public function index(): JsonResponse
    {
        return $this->success($this->buildSettingsArray(), 'Settings retrieved successfully');
    }

    /**
     * PUT /api/admin/settings
     * Update one or more settings by key.
     * Accepts a flat payload: { "brand_name": "...", "brand_color": "..." }
     *
     * logo_path is NOT accepted here — it is managed exclusively through
     * the dedicated logo upload / remove endpoints.
     */
    public function update(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'brand_name'            => 'sometimes|string|max:255',
            'brand_badge'           => 'sometimes|string|max:4',
            'brand_color'           => 'sometimes|string|max:7',
            'plan_label'            => 'sometimes|string|max:255',
            'maintenance_mode'      => 'sometimes|boolean',
            'allow_registration'    => 'sometimes|boolean',
            'default_storage_limit' => 'sometimes|integer|min:1',
        ]);

        foreach ($validated as $key => $value) {
            $existing = Setting::where('key', $key)->first();

            if ($existing) {
                // UPDATE existing row — never create a duplicate.
                Setting::set($key, $value, $existing->type, $existing->group);
            }
        }

        // Keep the maintenance-mode cache in sync with the settings table.
        if (array_key_exists('maintenance_mode', $validated)) {
            Cache::put(
                'maintenance_mode',
                (bool) $validated['maintenance_mode'],
                now()->addDays(30)
            );
        }

        // Return the fresh, resolved settings so the frontend can refresh its store.
        return $this->success($this->buildSettingsArray(), 'Settings updated successfully');
    }

    /**
     * POST /api/admin/settings/logo
     * Upload a new logo image.
     *
     * - Deletes the previous logo file (if any).
     * - Stores the new file at storage/app/public/settings/<filename>.
     * - Updates the logo_path setting row (UPDATE, not INSERT).
     */
    public function uploadLogo(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'file' => 'required|image|mimes:png,jpg,jpeg,svg,webp|max:2048',
        ]);

        // Delete the old logo file if it exists.
        $oldPath = Setting::get('logo_path');
        if ($oldPath && Storage::disk('public')->exists($oldPath)) {
            Storage::disk('public')->delete($oldPath);
        }

        // Store the new logo on the public disk under settings/.
        $path = $request->file('file')->store('settings', 'public');

        // UPSERT the logo_path setting (UPDATE if exists, INSERT if not).
        Setting::updateOrCreate(
            ['key' => 'logo_path'],
            ['value' => $path, 'type' => 'string', 'group' => 'brand']
        );

        return $this->success(
            ['logo_path' => Storage::url($path)],
            'Logo uploaded successfully'
        );
    }

    /**
     * DELETE /api/admin/settings/logo
     * Remove the current logo image and clear the logo_path setting.
     */
    public function removeLogo(): JsonResponse
    {
        $oldPath = Setting::get('logo_path');

        if ($oldPath && Storage::disk('public')->exists($oldPath)) {
            Storage::disk('public')->delete($oldPath);
        }

        Setting::updateOrCreate(
            ['key' => 'logo_path'],
            ['value' => null, 'type' => 'string', 'group' => 'brand']
        );

        return $this->success(
            ['logo_path' => null],
            'Logo removed successfully'
        );
    }
}
