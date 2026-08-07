<?php

namespace App\Domains\Publish\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Models\Setting;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

/**
 * PublicSiteController
 *
 * Serves the published company profile website data.
 * Brand identity (name, badge, color, logo) is read from the
 * settings table so the public site always reflects the
 * latest brand configuration.
 */
class PublicSiteController extends BaseController
{
    public function show(): JsonResponse
    {
        $brandName  = Setting::get('brand_name', 'DataSoft');
        $brandBadge = Setting::get('brand_badge', 'DS');
        $brandColor = Setting::get('brand_color', '#2563eb');
        $logoRaw    = Setting::get('logo_path');

        $logoUrl = $logoRaw ? Storage::url($logoRaw) : null;

        return $this->success([
            'site_name' => $brandName,
            'subdomain' => 'koperasimaju',
            'brand_badge' => $brandBadge,
            'brand_color' => $brandColor,
            'logo_url'    => $logoUrl,
            'html' => '<h1>Selamat Datang di Website Resmi</h1>',
            'css'  => "h1 { color: {$brandColor}; }",
        ], 'Public site data retrieved');
    }
}
