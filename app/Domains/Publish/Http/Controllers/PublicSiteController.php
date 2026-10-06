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
        $website = $this->findPublishedWebsite($slug);

        abort_unless($website, 404);

        return view('welcome');
    }

    public function show(Request $request): JsonResponse
    {
        $hostSlug = $request->attributes->get('published_slug');
        $slug = $hostSlug ?? $request->query('slug');

        abort_if(!is_string($slug) || $slug === '', 404);

        $website = $this->findPublishedWebsite($slug);

        abort_unless($website, 404);

        $brandBadge = Setting::get('brand_badge', 'DS');
        $brandColor = Setting::get('brand_color', '#2563eb');
        $logoRaw    = Setting::get('logo_path');

        $logoUrl = $logoRaw ? Storage::url($logoRaw) : null;

        // Record view/visitor
        $website->views()->create([
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        $siteName = $website->name;
        $siteSubdomain = $website->slug;
        $publishedJson = $website->published_json ?? [];

        // Handle both structure formats: { sections: [...] } or direct section array [...]
        $sections = [];
        if (is_array($publishedJson)) {
            if (isset($publishedJson['sections']) && is_array($publishedJson['sections'])) {
                $sections = $publishedJson['sections'];
            } elseif (isset($publishedJson[0]['type']) || isset($publishedJson[0]['id'])) {
                $sections = $publishedJson;
            }
        }

        $html = $publishedJson['html'] ?? '';
        $css  = $publishedJson['css']  ?? '';
        $pages = $publishedJson['pages'] ?? [];

        return $this->success([
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

    private function findPublishedWebsite(string $slug): ?Website
    {
        $websiteId = Cache::remember("site:website-id:{$slug}", 300, function () use ($slug): int|string|null {
            return Website::published()->where('slug', $slug)->value('id');
        });

        if (!is_int($websiteId) && !is_string($websiteId)) {
            return null;
        }

        return Website::published()->whereKey($websiteId)->first();
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
