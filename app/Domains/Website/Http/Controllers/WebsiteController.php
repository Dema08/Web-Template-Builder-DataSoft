<?php

namespace App\Domains\Website\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\Website\Models\Website;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * WebsiteController
 *
 * Manages the user's company profile website: content, settings, and publishing.
 */
class WebsiteController extends BaseController
{
    public function show(): JsonResponse
    {
        $user = auth()->user();
        $website = Website::where('user_id', $user->id)->first();

        if ($website) {
            return $this->success($website, 'Website retrieved');
        }

        return $this->success([
            'id' => null,
            'name' => $user->name . ' Website',
            'slug' => str($user->name)->slug()->__toString(),
            'status' => 'draft',
        ], 'Website retrieved');
    }

    public function getContent(): JsonResponse
    {
        $user = auth()->user();
        $website = Website::where('user_id', $user->id)->first();

        if ($website && ($website->draft_json || $website->published_json)) {
            $content = $website->draft_json ?? $website->published_json;
            return $this->success($content, 'Website content retrieved');
        }

        return $this->success(null, 'No saved content found');
    }

    public function saveContent(Request $request): JsonResponse
    {
        $user = auth()->user();
        $website = Website::where('user_id', $user->id)->first();

        $content = $request->input('draft_json') ?? $request->all();

        if (!$website) {
            $slugBase = str($user->name)->slug()->__toString() ?: 'my-website';
            $slug = $slugBase;
            while (Website::where('slug', $slug)->exists()) {
                $slug = $slugBase . '-' . rand(100, 999);
            }

            $website = Website::create([
                'user_id' => $user->id,
                'name' => $user->name . ' Website',
                'slug' => $slug,
                'status' => 'draft',
                'draft_json' => $content,
            ]);
        } else {
            $website->update([
                'draft_json' => $content,
            ]);
        }

        return $this->success($website->fresh(), 'Content saved successfully');
    }

    public function updateSettings(Request $request): JsonResponse
    {
        $user = auth()->user();
        $website = Website::where('user_id', $user->id)->first();

        if ($website) {
            $website->update($request->only(['name', 'slug', 'settings', 'logo', 'favicon']));
        }

        return $this->success($website?->fresh(), 'Settings updated successfully');
    }

    public function publish(Request $request): JsonResponse
    {
        $user = auth()->user();
        $website = Website::where('user_id', $user->id)->first();

        if (!$website) {
            return $this->error('Website not found. Please save your site first.', 404);
        }

        $website->update([
            'published_json' => $website->draft_json,
            'status' => 'published',
            'published_at' => now(),
        ]);

        return $this->success([
            'published_url' => url('/public/site?slug=' . $website->slug),
            'website' => $website->fresh(),
        ], 'Website published successfully');
    }
}
