<?php

namespace App\Domains\Template\Models;

use App\Domains\Template\Enums\TemplateStatus;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Template
 *
 * Represents a company profile website template owned by an industry category.
 * DB table: templates
 * Category FK: category_id (aliased as industry_category_id for API compatibility)
 */
class Template extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'template';

    /**
     * Always bind routes by numeric primary key so frontend numeric IDs resolve correctly.
     */
    public function getRouteKeyName(): string
    {
        return 'id';
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
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

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'draft_json'     => 'array',
        'published_json' => 'array',
        'is_featured'    => 'boolean',
        'sort_order'     => 'integer',
        'status'         => TemplateStatus::class,
    ];

    /**
     * Virtual accessor: industry_category_id → category_id.
     * Lets the API send/receive industry_category_id without a DB column rename.
     */
    protected function industryCategoryId(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->category_id,
            set: fn ($value) => ['category_id' => $value],
        );
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

    /**
     * Industry category that owns this template (primary relation).
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Category::class, 'category_id');
    }

    /**
     * Alias for category() — used in resources and eager loads.
     */
    public function industryCategory(): BelongsTo
    {
        return $this->belongsTo(\App\Models\Category::class, 'category_id');
    }

    /**
     * User who created this template.
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * User who last updated this template.
     */
    public function updater(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    // ------------------------------------------------------------------
    // Scopes
    // ------------------------------------------------------------------

    public function scopeByStatus(Builder $query, TemplateStatus $status): Builder
    {
        return $query->where('status', $status->value);
    }

    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true);
    }

    public function scopeByCategory(Builder $query, int $categoryId): Builder
    {
        return $query->where('category_id', $categoryId);
    }

    // ------------------------------------------------------------------
    // Helpers
    // ------------------------------------------------------------------

    public function isPublished(): bool
    {
        return $this->status === TemplateStatus::Published;
    }

    public function isDraft(): bool
    {
        return $this->status === TemplateStatus::Draft;
    }

    public function isArchived(): bool
    {
        return $this->status === TemplateStatus::Archived;
    }

    public function isDisabled(): bool
    {
        return $this->status === TemplateStatus::Disabled;
    }

    public function isAvailable(): bool
    {
        return $this->status === TemplateStatus::Published
            && !$this->trashed()
            && $this->category?->is_active;
    }
}
