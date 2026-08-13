<?php

namespace App\Domains\Template\Resources;

use App\Domains\Shared\Http\Resources\BaseResource;
use App\Domains\Template\Enums\TemplateStatus;
use App\Domains\Template\Models\Template;

/**
 * TemplateResource
 *
 * Transforms a Template model into a canonical JSON API payload.
 */
class TemplateResource extends BaseResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'thumbnail' => $this->thumbnail_url,
            'preview_image' => $this->preview_image_url,
            'draft_json' => $this->draft_json,
            'published_json' => $this->published_json,
            'version' => $this->version,
            'sort_order' => $this->sort_order,
            'is_featured' => $this->is_featured,
            'status' => $this->status?->value ?? TemplateStatus::Draft->value,
            'status_label' => $this->status?->label() ?? TemplateStatus::Draft->label(),
            'status_color' => $this->status?->color() ?? TemplateStatus::Draft->color(),
            'industry_category_id' => $this->category_id,
            'industry_category' => $this->industryCategory ? [
                'id'   => $this->industryCategory->id,
                'name' => $this->industryCategory->name,
                'slug' => $this->industryCategory->slug,
            ] : null,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'creator' => $this->creator ? [
                'id' => $this->creator->id,
                'name' => $this->creator->name,
            ] : null,
            'updater' => $this->updater ? [
                'id' => $this->updater->id,
                'name' => $this->updater->name,
            ] : null,
            'deleted_at' => $this->deleted_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    /**
     * Get the thumbnail URL.
     */
    protected function getThumbnailUrlAttribute(): ?string
    {
        return $this->thumbnail ? asset('storage/' . $this->thumbnail) : null;
    }

    /**
     * Get the preview image URL.
     */
    protected function getPreviewImageUrlAttribute(): ?string
    {
        return $this->preview_image ? asset('storage/' . $this->preview_image) : null;
    }
}
