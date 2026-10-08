<?php

namespace App\Domains\Admin\Http\Controllers;

use App\Domains\Notification\Models\Notification;
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
            'thumbnail_path',
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

        // Draft websites are hidden from admin view by default.
        // Admin should only see published and suspended websites.
        $query->where('status', '!=', 'draft');

        if ($status = $request->get('status')) {
            if ($status !== 'all' && $status !== 'draft') {
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
                'thumbnail_path'         => $site->thumbnail_path,
                'thumbnail_url'          => $site->thumbnail_url,
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
                'total'     => Website::where('status', '!=', 'draft')->count(),
                'published' => Website::where('status', 'published')->count(),
                'suspended' => Website::where('status', 'suspended')->count(),
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
            'status' => 'required|in:published,draft,suspended,pending,rejected',
        ]);

        $newStatus = $validated['status'];

        // Jika admin mencoba mempublish website yang masih draft/pending,
        // periksa apakah kuota domain user sudah penuh.
        if ($newStatus === 'published' && $website->status !== 'published') {
            $user = $website->user;
            $plan = $user?->effective_pricelist;
            $maxDomains = (int) ($plan?->maks_domain ?? 0);
            $unlimited = $maxDomains === -1;

            if (!$unlimited && $maxDomains > 0) {
                $publishedCount = Website::where('user_id', $website->user_id)
                    ->where('status', 'published')
                    ->where('id', '!=', $website->id)
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

            // Set published_at & approved_at saat dipublish oleh admin
            $website->update([
                'status'           => $newStatus,
                'published_at'     => now(),
                'approved_at'      => now(),
                'approved_by'      => $request->user()->id,
                'rejection_reason' => null,
                'published_json'   => $website->draft_json ?: $website->published_json,
            ]);

            if ($user) {
                $baseDomain = config('app.publish_domain', config('app.primary_host', 'web.microdata.co.id'));
                Notification::create([
                    'user_id' => $user->id,
                    'judul'   => 'Website Telah Dipublikasikan! 🎉',
                    'pesan'   => "Website \"{$website->name}\" telah dipublikasikan dan aktif di https://{$website->slug}.{$baseDomain}",
                    'tipe'    => 'website_approved',
                    'dibaca'  => false,
                ]);
            }
        } else {
            // Unpublish / suspend / reject: bebas dilakukan admin
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
     * List subdomain hosting / publish requests for Admin.
     */
    public function hostingRequests(Request $request): JsonResponse
    {
        $query = Website::select([
            'id',
            'user_id',
            'category_id',
            'template_id',
            'name',
            'slug',
            'thumbnail_path',
            'status',
            'settings',
            'favicon',
            'logo',
            'published_at',
            'requested_at',
            'rejection_reason',
            'approved_at',
            'approved_by',
            'created_at',
            'updated_at',
        ])
        ->withCount('views')
        ->with(['user.pricelist', 'template', 'category', 'approvedBy']);

        if ($search = $request->get('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('slug', 'like', "%{$search}%")
                  ->orWhereHas('user', fn($u) => $u->where('name', 'like', "%{$search}%")->orWhere('email', 'like', "%{$search}%"));
            });
        }

        $statusFilter = $request->get('status', 'all');
        if ($statusFilter !== 'all') {
            $query->where('status', $statusFilter);
        } else {
            // Exclude draft from hosting requests list (only show pending, published, rejected, suspended)
            $query->where('status', '!=', 'draft');
        }

        // Sort: pending first, then by requested_at desc / updated_at desc
        $query->orderByRaw("CASE WHEN status = 'pending' THEN 0 WHEN status = 'rejected' THEN 1 ELSE 2 END")
              ->orderByDesc('updated_at');

        $websites = $query->paginate($request->get('per_page', 50));

        $baseDomain = config('app.publish_domain', config('app.primary_host', 'web.microdata.co.id'));

        $items = $websites->getCollection()->map(function ($site) use ($baseDomain) {
            $settings = $site->settings ?? [];
            $domainType = $settings['domain_type'] ?? 'subdomain';
            $customDomain = $settings['custom_domain'] ?? null;
            $subdomainUrl = "https://{$site->slug}.{$baseDomain}";
            $publishedUrl = ($domainType === 'custom' && $customDomain)
                ? (str_starts_with($customDomain, 'http') ? $customDomain : 'https://' . $customDomain)
                : $subdomainUrl;
            $displayDomain = "{$site->slug}.{$baseDomain}";

            $user = $site->user;
            $plan = $user?->effective_pricelist;

            return [
                'id'                     => $site->id,
                'name'                   => $site->name,
                'slug'                   => $site->slug,
                'thumbnail_path'         => $site->thumbnail_path,
                'thumbnail_url'          => $site->thumbnail_url,
                'url_path'               => $site->url_path,
                'domain'                 => $displayDomain,
                'subdomain_url'          => $subdomainUrl,
                'domain_type'            => $domainType,
                'custom_domain'          => $customDomain,
                'published_url'          => $publishedUrl,
                'status'                 => $site->status,
                'is_pending'             => $site->status === 'pending',
                'is_published'           => $site->status === 'published',
                'is_rejected'            => $site->status === 'rejected',
                'rejection_reason'       => $site->rejection_reason,
                'requested_at'           => $site->requested_at?->toIso8601String(),
                'requested_at_formatted' => $site->requested_at ? $site->requested_at->format('d M Y, H:i') : null,
                'approved_at'            => $site->approved_at?->toIso8601String(),
                'approved_at_formatted'  => $site->approved_at ? $site->approved_at->format('d M Y, H:i') : null,
                'approved_by'            => $site->approvedBy?->name,
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
                'total'     => Website::where('status', '!=', 'draft')->count(),
                'pending'   => Website::where('status', 'pending')->count(),
                'published' => Website::where('status', 'published')->count(),
                'rejected'  => Website::where('status', 'rejected')->count(),
                'suspended' => Website::where('status', 'suspended')->count(),
            ],
        ], 'Hosting requests retrieved successfully');
    }

    /**
     * Approve a hosting / publish request.
     */
    public function approveHostingRequest(Request $request, Website $website): JsonResponse
    {
        $user = $website->user;
        $plan = $user?->effective_pricelist;
        $maxDomains = (int) ($plan?->maks_domain ?? 0);
        $unlimited = $maxDomains === -1;

        if (!$unlimited && $maxDomains > 0) {
            $publishedCount = Website::where('user_id', $website->user_id)
                ->where('status', 'published')
                ->where('id', '!=', $website->id)
                ->count();

            if ($publishedCount >= $maxDomains) {
                return response()->json([
                    'success' => false,
                    'message' => "Tidak bisa menyetujui permintaan: Kuota domain user \"{$user?->name}\" sudah penuh ({$publishedCount}/{$maxDomains} domain pada paket {$plan?->nama}). User perlu upgrade paket terlebih dahulu.",
                    'code'    => 'DOMAIN_LIMIT_REACHED',
                    'current' => $publishedCount,
                    'max'     => $maxDomains,
                    'package' => $plan?->nama,
                ], 422);
            }
        }

        $website->update([
            'status'           => 'published',
            'published_at'     => now(),
            'approved_at'      => now(),
            'approved_by'      => $request->user()->id,
            'rejection_reason' => null,
            'published_json'   => $website->draft_json ?: $website->published_json,
        ]);

        if ($user) {
            $baseDomain = config('app.publish_domain', config('app.primary_host', 'web.microdata.co.id'));
            $subdomainFull = "{$website->slug}.{$baseDomain}";
            Notification::create([
                'user_id' => $user->id,
                'judul'   => 'Permintaan Hosting Subdomain Disetujui! 🎉',
                'pesan'   => "Selamat! Permintaan publikasi website \"{$website->name}\" telah disetujui oleh admin.\nWebsite Anda kini live dan dapat diakses publik di https://{$subdomainFull}",
                'tipe'    => 'website_approved',
                'dibaca'  => false,
            ]);
        }

        return $this->success([
            'id'     => $website->id,
            'status' => 'published',
            'url'    => $website->url_subdomain,
        ], 'Permintaan publikasi subdomain berhasil disetujui.');
    }

    /**
     * Reject a hosting / publish request with reason.
     */
    public function rejectHostingRequest(Request $request, Website $website): JsonResponse
    {
        $validated = $request->validate([
            'rejection_reason' => 'required|string|min:3|max:1000',
        ], [
            'rejection_reason.required' => 'Alasan penolakan wajib diisi.',
            'rejection_reason.min'      => 'Alasan penolakan minimal 3 karakter.',
        ]);

        $website->update([
            'status'           => 'rejected',
            'rejection_reason' => $validated['rejection_reason'],
        ]);

        $user = $website->user;
        if ($user) {
            $baseDomain = config('app.publish_domain', config('app.primary_host', 'web.microdata.co.id'));
            $subdomainFull = "{$website->slug}.{$baseDomain}";
            Notification::create([
                'user_id' => $user->id,
                'judul'   => 'Permintaan Publikasi Subdomain Ditolak',
                'pesan'   => "Permintaan publikasi website \"{$website->name}\" ({$subdomainFull}) ditolak oleh admin.\nAlasan: " . $validated['rejection_reason'] . "\nSilakan perbaiki konten Anda melalui editor dan ajukan kembali.",
                'tipe'    => 'website_rejected',
                'dibaca'  => false,
            ]);
        }

        return $this->success([
            'id'               => $website->id,
            'status'           => 'rejected',
            'rejection_reason' => $website->rejection_reason,
        ], 'Permintaan publikasi subdomain telah ditolak dan notifikasi telah dikirim ke user.');
    }

    /**
     * Delete a website permanently and send notification to website owner.
     */
    public function destroy(Request $request, Website $website): JsonResponse
    {
        $validated = $request->validate([
            'reason' => 'required|string|min:3|max:1000',
        ], [
            'reason.required' => 'Alasan penghapusan website wajib diisi.',
            'reason.min'      => 'Alasan penghapusan minimal 3 karakter.',
        ]);

        $owner = $website->user;
        $websiteName = $website->name;
        $domain = $website->url_subdomain ?: $website->slug;

        if ($owner) {
            Notification::create([
                'user_id' => $owner->id,
                'judul'   => 'Website Dihapus oleh Admin',
                'pesan'   => "Website \"{$websiteName}\" ({$domain}) telah dihapus oleh Admin.\nAlasan penghapusan: " . $validated['reason'],
                'tipe'    => 'website_deleted',
                'dibaca'  => false,
            ]);
        }

        $website->delete();

        return $this->success(null, 'Website berhasil dihapus dan notifikasi telah dikirim ke pemilik website.');
    }
}
