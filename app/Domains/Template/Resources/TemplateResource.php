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
     * Handles both relative paths and full URLs (including corrupted data where full URL was saved to DB).
     */
    protected function getThumbnailUrlAttribute(): ?string
    {
        if (!$this->thumbnail) {
            return null;
        }

        // If already a full URL, return as-is
        if (str_starts_with($this->thumbnail, 'http')) {
            return $this->thumbnail;
        }

        // If it looks like a path that already includes /storage/, normalize it
        if (str_starts_with($this->thumbnail, 'storage/')) {
            return asset($this->thumbnail);
        }

        // Normal case: relative path from storage/app/public
        return asset('storage/' . $this->thumbnail);
    }

    /**
     * Get the preview image URL.
     * Handles both relative paths and full URLs.
     */
    protected function getPreviewImageUrlAttribute(): ?string
    {
        if (!$this->preview_image) {
            return null;
        }

        if (str_starts_with($this->preview_image, 'http')) {
            return $this->preview_image;
        }

        if (str_starts_with($this->preview_image, 'storage/')) {
            return asset($this->preview_image);
        }

        return asset('storage/' . $this->preview_image);
    }
}
