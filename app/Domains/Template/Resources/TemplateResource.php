<?php

namespace App\Domains\Template\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TemplateResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'                   => $this->id,
            'category_id'         => $this->category_id,
            'industry_category_id' => $this->industry_category_id,
            'industry_category'   => $this->whenLoaded('industryCategory', fn () => [
                'id'   => $this->industryCategory->id,
                'name' => $this->industryCategory->name,
            ]),
            'code'         => $this->code,
            'name'         => $this->name,
            'slug'         => $this->slug,
            'description'  => $this->description,
            // Always return the full URL so the frontend <img> src works immediately
            'thumbnail'     => $this->thumbnail_url,
            'preview_image' => $this->preview_image_url,
            'draft_json'    => $this->draft_json,
            'published_json' => $this->published_json,
            'version'       => $this->version,
            'sort_order'   => $this->sort_order,
            'is_featured'  => $this->is_featured,
            'status'       => $this->status?->value ?? $this->status,
            'status_label' => $this->status?->label() ?? $this->status,
            'is_active'    => $this->is_active ?? ($this->status?->value === 'published'),
            'usage_count'  => $this->usage_count ?? 0,
            'created_at'   => $this->created_at?->toISOString(),
            'updated_at'   => $this->updated_at?->toISOString(),
        ];
    }
}
