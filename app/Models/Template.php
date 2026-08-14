<?php

namespace App\Models;

use App\Domains\Template\Enums\TemplateStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Template extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'category_id',
        'code',
        'name',
        'slug',
        'description',
        'thumbnail',
        'preview_image',
        'draft_json',
        'published_json',
        'version',
        'sort_order',
        'is_featured',
        'status',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'draft_json' => 'array',
        'published_json' => 'array',
        'is_featured' => 'boolean',
        'sort_order' => 'integer',
        'status' => TemplateStatus::class,
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * Get full URL for template thumbnail.
     */
    public function getThumbnailUrlAttribute(): ?string
    {
        if (!$this->thumbnail) {
            return null;
        }

        if (str_starts_with($this->thumbnail, 'http://') || str_starts_with($this->thumbnail, 'https://')) {
            return $this->thumbnail;
        }

        if (str_starts_with($this->thumbnail, 'storage/')) {
            return asset($this->thumbnail);
        }

        if (str_starts_with($this->thumbnail, '/storage/')) {
            return asset(ltrim($this->thumbnail, '/'));
        }

        return asset('storage/' . $this->thumbnail);
    }

    /**
     * Get full URL for template preview image.
     */
    public function getPreviewImageUrlAttribute(): ?string
    {
        if (!$this->preview_image) {
            return null;
        }

        if (str_starts_with($this->preview_image, 'http://') || str_starts_with($this->preview_image, 'https://')) {
            return $this->preview_image;
        }

        if (str_starts_with($this->preview_image, 'storage/')) {
            return asset($this->preview_image);
        }

        if (str_starts_with($this->preview_image, '/storage/')) {
            return asset(ltrim($this->preview_image, '/'));
        }

        return asset('storage/' . $this->preview_image);
    }

    public function industryCategory(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function websites(): HasMany
    {
        return $this->hasMany(Website::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updater(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
