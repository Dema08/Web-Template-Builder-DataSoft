<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WebsiteResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'category_id' => $this->category_id,
            'template_id' => $this->template_id,
            'name' => $this->name,
            'slug' => $this->slug,
            'status' => $this->status,
            'draft_json' => $this->draft_json,
            'published_json' => $this->published_json,
            'settings' => $this->settings,
            'favicon' => $this->favicon,
            'logo' => $this->logo,
            'published_at' => $this->published_at?->toDateTimeString(),
        ];
    }
}
