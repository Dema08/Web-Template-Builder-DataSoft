<?php

namespace App\Domains\Publish\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\System\Models\Setting;
use App\Domains\Website\Models\Website;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
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
    public function showBySlug(Request $request, string $slug)
    {
        $slug = $request->attributes->get('published_slug', $slug);
        $website = Website::where('slug', $slug)->first();

        abort_unless($website, 404);

        return view('welcome');
    }

    public function show(Request $request): JsonResponse
    {
        $hostSlug = $request->attributes->get('published_slug');
        $slug = $hostSlug ?? $request->query('slug');
        $isPreview = $request->boolean('preview') || $request->query('preview') === 'true' || $request->query('preview') === '1';

        abort_if(!is_string($slug) || $slug === '', 404);

        $website = Website::where('slug', $slug)->first();

        abort_unless($website, 404);

        $statusStr = is_string($website->status) ? $website->status : ($website->status?->value ?? 'draft');

        // If NOT in preview mode, respect pending and rejected states for public visitors
        if (!$isPreview) {
            if ($statusStr === 'pending') {
                return $this->success([
                    'status' => 'pending',
                    'site_name' => $website->name,
                    'subdomain' => $website->slug,
                    'requested_at' => $website->requested_at?->toISOString(),
                ], 'Website is pending admin approval');
            }

            if ($statusStr === 'rejected') {
                return $this->success([
                    'status' => 'rejected',
                    'site_name' => $website->name,
                    'subdomain' => $website->slug,
                    'rejection_reason' => $website->rejection_reason,
                ], 'Website publication was rejected');
            }

            if ($statusStr !== 'published') {
                return $this->error('Website is not published', 404);
            }
        }

        $brandBadge = Setting::get('brand_badge', 'DS');
        $brandColor = Setting::get('brand_color', '#2563eb');
        $logoRaw    = Setting::get('logo_path');

        $logoUrl = $logoRaw ? Storage::url($logoRaw) : null;

        // Record view/visitor only for public live visits (not preview mode)
        if (!$isPreview && $statusStr === 'published') {
            $website->views()->create([
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);
        }

        $siteName = $website->name;
        $siteSubdomain = $website->slug;

        // Prioritize draft_json when in preview mode, published_json when live
        $contentJson = $isPreview
            ? ($website->draft_json ?? $website->published_json ?? [])
            : ($website->published_json ?? $website->draft_json ?? []);

        // Handle both structure formats: { sections: [...] } or direct section array [...]
        $sections = [];
        if (is_array($contentJson)) {
            if (isset($contentJson['sections']) && is_array($contentJson['sections'])) {
                $sections = $contentJson['sections'];
            } elseif (isset($contentJson[0]['type']) || isset($contentJson[0]['id'])) {
                $sections = $contentJson;
            }
        }

        $html = $contentJson['html'] ?? '';
        $css  = $contentJson['css']  ?? '';
        $pages = $contentJson['pages'] ?? [];

        return $this->success([
            'status' => $statusStr,
            'is_preview' => $isPreview,
            'site_name' => $siteName,
            'subdomain' => $siteSubdomain,
            'brand_badge' => $brandBadge,
            'brand_color' => $brandColor,
            'logo_url' => $website->logo ? Storage::url($website->logo) : $logoUrl,
            'sections' => $sections,
            'pages' => is_array($pages) ? $pages : [],
            'html' => $html,
            'css' => $css,
        ], 'Public site data retrieved');
    }

    /**
     * Get all published templates for public showcase (e.g., landing page).
     */
    public function templates(): JsonResponse
    {
        $query = \App\Domains\Template\Models\Template::forList()
            ->where('status', 'published')
            ->publiclyVisible()
            ->with('industryCategory');

        if ($categoryId = request('industry_category_id')) {
            $query->where('category_id', $categoryId);
        }

        if ($search = request('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('code', 'like', "%{$search}%");
            });
        }

        $templates = $query->orderByDesc('is_featured')
            ->orderBy('sort_order')
            ->orderByDesc('id')
            ->get();

        return $this->success(
            \App\Domains\Template\Resources\TemplateResource::collection($templates),
            'Published templates retrieved successfully'
        );
    }

    /**
     * Get a single published template by ID for public preview.
     */
    public function showTemplate($id): JsonResponse
    {
        $template = \App\Domains\Template\Models\Template::where('status', 'published')
            ->publiclyVisible()
            ->with('industryCategory')
            ->where(function ($q) use ($id) {
                if (is_numeric($id)) {
                    $q->where('id', (int) $id)->orWhere('slug', $id);
                } else {
                    $q->where('slug', $id)->orWhere('id', $id);
                }
            })
            ->first();

        if (!$template) {
            return $this->error('Published template not found', 404);
        }

        return $this->success(
            new \App\Domains\Template\Resources\TemplateResource($template),
            'Published template retrieved successfully'
        );
    }
}
