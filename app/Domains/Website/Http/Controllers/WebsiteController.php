<?php

namespace App\Domains\Website\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\Publish\Http\Requests\PublishWebsiteRequest;
use App\Domains\Website\Models\Website;
use App\Domains\Website\Resources\WebsiteResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

/**
 * WebsiteController
 *
 * Manages the user's company profile website: content, settings, and publishing.
 */
class WebsiteController extends BaseController
{
    public function index(Request $request): JsonResponse
    {
        $hasViewsTable = \Illuminate\Support\Facades\Schema::hasTable('website_view');

        $query = Website::where('user_id', $request->user()->id)
            ->where('status', 'published')
            ->orderByDesc('published_at');

        if ($hasViewsTable) {
            $query->withCount([
                'views',
                'views as monthly_views_count' => function ($q) {
                    $q->where('created_at', '>=', now()->subDays(30));
                },
            ]);
        }

        $websites = $query->get();
        $quotaInfo = $this->quotaInfo($request);
        $websites->each(fn (Website $website) => $website->setAttribute('quota_info', $quotaInfo));

        return $this->success(
            WebsiteResource::collection($websites)->resolve($request),
            'Websites retrieved'
        );
    }

    public function quota(Request $request): JsonResponse
    {
        $user = $request->user();
        $plan = $user->effective_pricelist;
        $maxDomains = (int) ($plan->maks_domain ?? 0);
        $publishedCount = $user->websites()
            ->where('status', 'published')
            ->count();
        $websiteId = $request->query('website_id');
        $selectedSiteIsPublished = $websiteId !== null
            && $user->websites()
                ->whereKey($websiteId)
                ->where('status', 'published')
                ->exists();
        $unlimited = $maxDomains === -1;

        return $this->success([
            'package' => $plan->nama,
            'current' => $publishedCount,
            'max' => $maxDomains,
            'can_publish' => $user->isAdmin()
                || $unlimited
                || $publishedCount < $maxDomains
                || $selectedSiteIsPublished,
            'unlimited' => $unlimited,
        ], 'Website quota retrieved');
    }

    public function checkSlug(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'slug' => ['required', 'string', 'min:3', 'max:50', 'regex:/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/'],
            'website_id' => ['nullable', 'integer'],
            'ignore_current_website' => ['sometimes', 'boolean'],
        ]);

        $reservedSlugs = [
            'admin', 'api', 'www', 'app', 'mail', 'ftp', 'cdn', 'static',
            'assets', 'public', 'storage', 'p', 'dashboard', 'web',
        ];
        $slug = $validated['slug'];
        $websiteId = $request->query('website_id');
        $user = $request->user();

        $ignoreCurrentWebsite = $request->boolean('ignore_current_website', true);
        $currentWebsiteId = $websiteId === null
            ? ($ignoreCurrentWebsite && $user->websites()->count() === 1 ? $user->websites()->value('id') : null)
            : $user->websites()->whereKey($websiteId)->value('id');
        abort_if($websiteId !== null && $currentWebsiteId === null, 404);

        $available = !in_array($slug, $reservedSlugs, true)
            && !Website::where('slug', $slug)
                ->when($currentWebsiteId, fn ($query) => $query->where('id', '!=', $currentWebsiteId))
                ->exists();

        return $this->success([
            'slug' => $slug,
            'available' => $available,
            'message' => $available ? 'Slug tersedia.' : 'Slug sudah digunakan atau tidak dapat dipakai.',
        ], 'Slug availability checked');
    }

    public function show(Request $request): JsonResponse
    {
        $user = $request->user();
        $website = $this->findUserWebsite($request);

        if ($website) {
            return $this->success(WebsiteResource::make($website)->resolve($request), 'Website retrieved');
        }

        return $this->success([
            'id' => null,
            'name' => $user->name . ' Website',
            'slug' => str($user->name)->slug()->__toString(),
            'status' => 'draft',
        ], 'Website retrieved');
    }

    public function getContent(Request $request): JsonResponse
    {
        $website = $this->findUserWebsite($request);

        if ($website) {
            $content = $website->draft_json ?? $website->published_json;
            if (!$content && $website->template) {
                $content = $website->template->published_json ?? $website->template->draft_json;
            }
            if ($content) {
                return $this->success($content, 'Website content retrieved');
            }
        }

        return $this->success(null, 'No saved content found');
    }

    public function saveContent(Request $request): JsonResponse
    {
        $user = $request->user();
        $isNew = $request->boolean('is_new');
        $websiteId = $request->query('website_id') ?? $request->input('website_id');

        $website = null;
        if ($websiteId !== null && !$isNew) {
            $website = Website::where('user_id', $user->id)->whereKey($websiteId)->first();
        }

        if (!$website && !$isNew) {
            $website = $this->findUserWebsite($request);
        }

        $content = $request->input('draft_json') ?? $request->all();

        if (!$website || $isNew) {
            $siteName = $request->input('name') ?? ($user->name . ' Website');
            $slugBase = str($siteName)->slug()->__toString() ?: 'my-website';
            $slug = $slugBase;
            while (Website::where('slug', $slug)->exists()) {
                $slug = $slugBase . '-' . rand(100, 999);
            }

            $defaultCategory = \App\Domains\Category\Models\Category::first();
            $defaultTemplate = \App\Domains\Template\Models\Template::first();

            $website = Website::create([
                'user_id' => $user->id,
                'category_id' => $request->input('category_id') ?? $defaultCategory?->id ?? 1,
                'template_id' => $request->input('template_id') ?? $defaultTemplate?->id ?? 1,
                'name' => $siteName,
                'slug' => $slug,
                'status' => 'draft',
                'draft_json' => $content,
            ]);
        } else {
            $updatePayload = ['draft_json' => $content];
            if ($request->filled('name')) {
                $updatePayload['name'] = $request->input('name');
            }
            $website->update($updatePayload);
        }

        return $this->success(
            WebsiteResource::make($website->fresh())->resolve($request),
            'Content saved successfully'
        );
    }

    public function updateSettings(Request $request): JsonResponse
    {
        $website = $this->findUserWebsite($request);

        if ($website) {
            $website->update($request->only(['name', 'slug', 'settings', 'logo', 'favicon']));
        }

        return $this->success(
            $website ? WebsiteResource::make($website->fresh())->resolve($request) : null,
            'Settings updated successfully'
        );
    }

    public function publish(PublishWebsiteRequest $request): JsonResponse
    {
        $user = $request->user();
        $validated = $request->validated();
        $sourceWebsite = $user->websites()->findOrFail($validated['website_id']);
        $publishAction = $validated['publish_action'] ?? 'update';
        $isCreatingNew = $publishAction === 'new';
        $domainType = $isCreatingNew ? 'subdomain' : $validated['domain_type'];
        $customDomain = trim((string) ($validated['custom_domain'] ?? ''));
        $slug = $validated['slug'];
        $draftJson = $validated['draft_json'] ?? $sourceWebsite->draft_json;
        $plan = $user->effective_pricelist;

        $maxDomains = (int) ($plan->maks_domain ?? 0);
        $publishedCount = Website::where('user_id', $user->id)
            ->where('status', 'published')
            ->count();

        if (
            !$user->isAdmin()
            && $maxDomains !== -1
            && $publishedCount >= $maxDomains
            && ($isCreatingNew || $sourceWebsite->status !== 'published')
        ) {
            return response()->json([
                'success' => false,
                'message' => "Paket {$plan->nama} hanya mengizinkan {$maxDomains} website. Upgrade paket untuk menambah.",
                'code' => 'DOMAIN_LIMIT_REACHED',
                'current' => $publishedCount,
                'max' => $maxDomains,
                'package' => $plan->nama,
            ], 422);
        }

        if ($domainType === 'custom' && !$plan->bisa_custom_domain && !$user->isAdmin()) {
            return response()->json([
                'success' => false,
                'message' => 'Paket kamu tidak mengizinkan custom domain. Upgrade paket untuk fitur ini.',
                'code' => 'CUSTOM_DOMAIN_NOT_ALLOWED',
                'upgrade_required' => true,
            ], 422);
        }

        $website = DB::transaction(function () use ($sourceWebsite, $isCreatingNew, $slug, $domainType, $customDomain, $draftJson) {
            $website = $sourceWebsite;
            $settings = $sourceWebsite->settings ?? [];

            if ($isCreatingNew) {
                $website = $sourceWebsite->replicate();
                $website->slug = $slug;
            } elseif ($slug && $slug !== $sourceWebsite->slug) {
                $website->slug = $slug;
            }

            $settings['domain_type'] = $domainType;
            if ($domainType === 'subdomain') {
                unset($settings['custom_domain']);
            }
            if ($customDomain) {
                $settings['custom_domain'] = $customDomain;
            }

            $website->fill([
                'draft_json' => $draftJson,
                'published_json' => $draftJson,
                'status' => 'published',
                'published_at' => now(),
                'settings' => $settings,
            ]);
            $website->save();

            return $website;
        });

        $publishedUrl = ($domainType === 'custom' && $customDomain)
            ? (str_starts_with($customDomain, 'http') ? $customDomain : 'https://' . $customDomain)
            : ($domainType === 'subdomain'
                ? 'https://' . $website->slug . '.' . config('app.main_domain')
                : url('/p/' . $website->slug));

        return $this->success([
            'publish_action' => $publishAction,
            'published_url' => $publishedUrl,
            'path_url' => url('/p/'.rawurlencode($website->slug)),
            'subdomain_url' => $website->url_subdomain,
            'domain_type' => $domainType,
            'custom_domain' => $customDomain,
            'website' => WebsiteResource::make($website->fresh())->resolve($request),
        ], 'Website published successfully');
    }

    public function uploadThumbnail(Request $request, int $websiteId): JsonResponse
    {
        $website = $request->user()->websites()->whereKey($websiteId)->firstOrFail();

        $request->validate([
            'thumbnail' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
        ]);

        if ($website->thumbnail_path && Storage::disk('public')->exists($website->thumbnail_path)) {
            Storage::disk('public')->delete($website->thumbnail_path);
        }

        $path = $request->file('thumbnail')->store("website-thumbnails/{$website->id}", 'public');
        $website->update(['thumbnail_path' => $path]);

        return $this->success(
            WebsiteResource::make($website->fresh())->resolve($request),
            'Thumbnail uploaded successfully'
        );
    }

    public function deleteThumbnail(Request $request, int $websiteId): JsonResponse
    {
        $website = $request->user()->websites()->whereKey($websiteId)->firstOrFail();

        if ($website->thumbnail_path && Storage::disk('public')->exists($website->thumbnail_path)) {
            Storage::disk('public')->delete($website->thumbnail_path);
        }

        $website->update(['thumbnail_path' => null]);

        return $this->success(null, 'Thumbnail deleted successfully');
    }

    public function destroy(Request $request, int $websiteId): JsonResponse
    {
        $website = Website::where('user_id', $request->user()->id)
            ->whereKey($websiteId)
            ->firstOrFail();

        $website->delete();

        return $this->success(null, 'Website deleted successfully');
    }

    public function unpublish(Request $request, int $websiteId): JsonResponse
    {
        $website = Website::where('user_id', $request->user()->id)
            ->whereKey($websiteId)
            ->firstOrFail();

        $website->update([
            'status' => 'draft',
            'published_at' => null,
        ]);

        return $this->success(
            WebsiteResource::make($website->fresh())->resolve($request),
            'Website unpublished successfully'
        );
    }

    private function findUserWebsite(Request $request): ?Website
    {
        $websiteId = $request->query('website_id') ?? $request->input('website_id');
        $query = Website::where('user_id', $request->user()->id);

        if ($websiteId !== null) {
            return $query->whereKey($websiteId)->first();
        }

        if ($query->count() === 1) {
            return $query->first();
        }

        return $query->latest('id')->first();
    }

    private function quotaInfo(Request $request): array
    {
        $user = $request->user();
        $plan = $user->effective_pricelist;
        $maxDomains = (int) ($plan->maks_domain ?? 0);

        return [
            'package' => $plan->nama,
            'current' => $user->websites()->where('status', 'published')->count(),
            'max' => $maxDomains,
            'unlimited' => $maxDomains === -1,
        ];
    }
}
