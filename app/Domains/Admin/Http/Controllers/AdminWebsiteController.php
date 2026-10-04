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
            $subdomainUrl = $site->url_subdomain ?: 'https://' . $site->slug . '.' . config('app.main_domain', 'microdata.co.id');
            $publishedUrl = ($domainType === 'custom' && $customDomain)
                ? (str_starts_with($customDomain, 'http') ? $customDomain : 'https://' . $customDomain)
                : $subdomainUrl;
            $displayDomain = $customDomain ?: str_replace(['https://', 'http://'], '', $subdomainUrl);

            $user = $site->user;
            $plan = $user?->effective_pricelist;

            return [
                'id'                     => $site->id,
                'name'                   => $site->name,
                'slug'                   => $site->slug,
                'url_path'               => $site->url_path,
                'domain'                 => $displayDomain,
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
                    'plan'  => $plan?->nama ?? $plan?->nama_paket ?? 'Free Tier',
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
     * When publishing a draft, checks the website owner's domain quota.
     * Admin cannot bypass user quota limits when publishing.
     */
    public function updateStatus(Request $request, Website $website): JsonResponse
    {
        $validated = $request->validate([
            'status' => 'required|in:published,draft,suspended',
        ]);

        $newStatus = $validated['status'];

        // Jika admin mencoba mempublish website yang masih draft,
        // periksa apakah kuota domain user sudah penuh.
        if ($newStatus === 'published' && $website->status !== 'published') {
            $user = $website->user;
            $plan = $user?->effective_pricelist;
            $maxDomains = (int) ($plan?->maks_domain ?? 0);
            $unlimited = $maxDomains === -1;

            if (!$unlimited && $maxDomains > 0) {
                $publishedCount = Website::where('user_id', $website->user_id)
                    ->where('status', 'published')
                    ->count();

                if ($publishedCount >= $maxDomains) {
                    return response()->json([
                        'success' => false,
                        'message' => "Tidak bisa dipublish: Kuota domain user \"{$user?->name}\" sudah penuh ({$publishedCount}/{$maxDomains} domain pada paket {$plan?->nama}). User perlu upgrade paket terlebih dahulu.",
                        'code'    => 'DOMAIN_LIMIT_REACHED',
                        'current' => $publishedCount,
                        'max'     => $maxDomains,
                        'package' => $plan?->nama,
                    ], 422);
                }
            }

            // Set published_at saat dipublish oleh admin
            $website->update([
                'status'       => $newStatus,
                'published_at' => now(),
            ]);
        } else {
            // Unpublish / suspend: bebas dilakukan admin
            $updateData = ['status' => $newStatus];
            if ($newStatus !== 'published') {
                $updateData['published_at'] = null;
            }
            $website->update($updateData);
        }

        return $this->success([
            'id'     => $website->id,
            'status' => $website->fresh()->status,
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
