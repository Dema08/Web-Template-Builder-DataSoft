<?php

namespace App\Domains\Admin\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\Website\Models\Website;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminWebsiteController extends BaseController
{
    /**
     * List all websites with owner, domain, and template info.
     * Excludes heavy draft_json and published_json columns to avoid MySQL sort memory buffer overflow.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Website::select([
            'id',
            'user_id',
            'category_id',
            'template_id',
            'name',
            'slug',
            'status',
            'settings',
            'favicon',
            'logo',
            'published_at',
            'created_at',
            'updated_at',
        ])
        ->withCount('views')
        ->with(['user.pricelist', 'template', 'category'])
        ->latest();

        if ($search = $request->get('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('slug', 'like', "%{$search}%")
                  ->orWhereHas('user', fn($u) => $u->where('name', 'like', "%{$search}%")->orWhere('email', 'like', "%{$search}%"));
            });
        }

        if ($status = $request->get('status')) {
            if ($status !== 'all') {
                $query->where('status', $status);
            }
        }

        $websites = $query->paginate($request->get('per_page', 50));

        $items = $websites->getCollection()->map(function ($site) {
            $settings = $site->settings ?? [];
            $domainType = $settings['domain_type'] ?? 'subdomain';
            $customDomain = $settings['custom_domain'] ?? null;
            $publishedUrl = ($domainType === 'custom' && $customDomain)
                ? (str_starts_with($customDomain, 'http') ? $customDomain : 'https://' . $customDomain)
                : url('/public/site?slug=' . $site->slug);

            $user = $site->user;
            $plan = $user?->effective_pricelist;

            return [
                'id'                     => $site->id,
                'name'                   => $site->name,
                'slug'                   => $site->slug,
                'domain'                 => $customDomain ?: ($site->slug . '.datasoft.id'),
                'domain_type'            => $domainType,
                'custom_domain'          => $customDomain,
                'published_url'          => $publishedUrl,
                'status'                 => $site->status,
                'is_published'           => $site->status === 'published',
                'published_at'           => $site->published_at?->toIso8601String(),
                'published_at_formatted' => $site->published_at ? $site->published_at->format('d M Y, H:i') : null,
                'created_at'             => $site->created_at?->toIso8601String(),
                'updated_at'             => $site->updated_at?->toIso8601String(),
                'owner' => [
                    'id'    => $user?->id,
                    'name'  => $user?->name ?? 'Unknown User',
                    'email' => $user?->email ?? '-',
                    'phone' => $user?->phone ?? '-',
                    'role'  => $user?->role ?? 'user',
                    'plan'  => $plan?->nama_paket ?? 'Free Tier',
                ],
                'template' => [
                    'id'   => $site->template?->id,
                    'name' => $site->template?->name ?? 'Default Template',
                ],
                'category' => [
                    'id'   => $site->category?->id,
                    'name' => $site->category?->name ?? 'General',
                ],
                'views_count' => $site->views_count ?? 0,
            ];
        });

        return $this->success([
            'data'  => $items,
            'total' => $websites->total(),
            'stats' => [
                'total'      => Website::count(),
                'published'  => Website::where('status', 'published')->count(),
                'draft'      => Website::where('status', 'draft')->count(),
                'suspended'  => Website::where('status', 'suspended')->count(),
            ],
        ], 'Websites retrieved successfully');
    }

    /**
     * Update a website's status.
     */
    public function updateStatus(Request $request, Website $website): JsonResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:published,draft,suspended',
        ]);

        $website->update(['status' => $validated['status']]);

        return $this->success([
            'id'     => $website->id,
            'status' => $website->status,
        ], 'Website status updated successfully');
    }

    /**
     * Delete a website permanently.
     */
    public function destroy(Website $website): JsonResponse
    {
        $website->delete();

        return $this->success(null, 'Website deleted successfully');
    }
}
