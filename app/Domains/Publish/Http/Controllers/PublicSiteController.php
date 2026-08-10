<?php

namespace App\Domains\Publish\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Models\Setting;
use App\Models\Website;
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

        // Try to look up website by slug (subdomain), or fallback to the first active/published site
        $slug = request()->query('slug');
        if ($slug) {
            $website = Website::where('slug', $slug)->first();
        } else {
            $website = Website::where('status', 'published')->first() ?? Website::first();
        }

        if ($website) {
            // Record view/visitor
            $website->views()->create([
                'ip_address' => request()->ip(),
                'user_agent' => request()->userAgent(),
            ]);

            // Set branding values from website settings if available, or fall back to system defaults
            $siteName = $website->name;
            $siteSubdomain = $website->slug;
            
            $html = $website->published_json['html'] ?? $website->draft_json['html'] ?? "<h1>Selamat Datang di {$siteName}</h1>";
            $css = $website->published_json['css'] ?? $website->draft_json['css'] ?? "h1 { color: {$brandColor}; }";

            return $this->success([
                'site_name' => $siteName,
                'subdomain' => $siteSubdomain,
                'brand_badge' => $brandBadge,
                'brand_color' => $brandColor,
                'logo_url'    => $website->logo ? Storage::url($website->logo) : $logoUrl,
                'html' => $html,
                'css'  => $css,
            ], 'Public site data retrieved');
        }

        // Fallback to default demo site when no websites exist in database
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
