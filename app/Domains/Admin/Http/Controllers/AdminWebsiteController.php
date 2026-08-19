<?php

namespace App\Domains\Admin\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Models\Website;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminWebsiteController extends BaseController
{
    /**
     * List all websites with owner and template info.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Website::with(['user', 'template', 'category'])
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

        $items = $websites->getCollection()->map(fn($site) => [
            'id'           => $site->id,
            'name'         => $site->name,
            'slug'         => $site->slug,
            'domain'       => $site->slug . '.datasoft.id',
            'status'       => $site->status,
            'is_published' => $site->status === 'published',
            'published_at' => $site->published_at?->toIso8601String(),
            'created_at'   => $site->created_at?->toIso8601String(),
            'updated_at'   => $site->updated_at?->toIso8601String(),
            'owner' => [
                'name'  => $site->user?->name ?? 'Unknown',
                'email' => $site->user?->email ?? '',
            ],
            'template' => [
                'name' => $site->template?->name ?? 'Default Template',
            ],
            'category' => [
                'name' => $site->category?->name ?? '-',
            ],
            'views_count' => $site->views()->count(),
        ]);

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
