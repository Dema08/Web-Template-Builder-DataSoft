<?php

namespace App\Domains\Website\Resources;

use App\Domains\User\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WebsiteResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        /** @var User|null $user */
        $user = $request->user();
        $quotaInfo = $this->resource->getAttribute('quota_info');

        if ($quotaInfo === null && $user) {
            $plan = $user->effective_pricelist;
            $maxDomains = (int) ($plan->maks_domain ?? 0);
            $current = $user->websites()->where('status', 'published')->count();
            $quotaInfo = [
                'package' => $plan->nama,
                'current' => $current,
                'max' => $maxDomains,
                'unlimited' => $maxDomains === -1,
            ];
        }

        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'category_id' => $this->category_id,
            'template_id' => $this->template_id,
            'name' => $this->name,
            'slug' => $this->slug,
            'thumbnail_path' => $this->thumbnail_path,
            'thumbnail_url' => $this->thumbnail_url,
            'status' => $this->status,
            'draft_json' => $this->draft_json,
            'published_json' => $this->published_json,
            'settings' => $this->settings,
            'favicon' => $this->favicon,
            'logo' => $this->logo,
            'published_at' => $this->published_at?->toDateTimeString(),
            'url_path' => $this->url_path,
            'url_subdomain' => $this->url_subdomain,
            'quota_info' => $quotaInfo,
            'views_count' => (int) ($this->views_count ?? 0),
            'monthly_views_count' => (int) ($this->monthly_views_count ?? 0),
            'created_at' => $this->created_at?->toDateTimeString(),
            'updated_at' => $this->updated_at?->toDateTimeString(),
        ];
    }
}
