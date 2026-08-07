<?php

namespace App\Domains\System\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

/**
 * PublicSettingsController
 *
 * Returns the subset of system settings that are needed by public,
 * unauthenticated pages (login, register, forgot password, etc.).
 * No authentication required so the brand identity is available
 * before the user signs in.
 */
class PublicSettingsController extends BaseController
{
    /**
     * The setting keys that are safe to expose publicly.
     */
    public const PUBLIC_KEYS = [
        'brand_name',
        'brand_badge',
        'brand_color',
        'plan_label',
        'logo_path',
    ];

    /**
     * Default fallback values for public settings.
     */
    protected const DEFAULTS = [
        'brand_name'  => 'DataSoft',
        'brand_badge' => 'DS',
        'brand_color' => '#2563eb',
        'plan_label'  => 'Premium Plan',
        'logo_path'   => null,
    ];

    /**
     * GET /api/v1/public/settings
     *
     * Return public-facing brand settings as a flat object.
     * logo_path is resolved through Storage::url().
     */
    public function index(): JsonResponse
    {
        $settings = [];

        foreach (self::PUBLIC_KEYS as $key) {
            $raw = Setting::get($key, self::DEFAULTS[$key] ?? null);

            if ($key === 'logo_path') {
                $settings[$key] = $raw ? Storage::url($raw) : null;
            } else {
                $settings[$key] = $raw;
            }
        }

        return $this->success($settings, 'Public settings retrieved successfully');
    }
}
