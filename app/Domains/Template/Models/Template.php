<?php

namespace App\Domains\Template\Models;

use App\Domains\Template\Enums\TemplateStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Template
 *
 * Represents a company profile website template owned by an industry category.
 */
class Template extends Model
{
    use HasFactory, SoftDeletes;

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
        'draft_json' => 'array',
        'published_json' => 'array',
        'is_featured' => 'boolean',
        'sort_order' => 'integer',
        'status' => TemplateStatus::class,
    ];

    /**
     * Get the route key for the model.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * Industry category that owns this template.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
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

    /**
     * Scope templates by status.
     */
    public function scopeByStatus(Builder $query, TemplateStatus $status): Builder
    {
        return $query->where('status', $status);
    }

    /**
     * Scope featured templates only.
     */
    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope templates by industry category.
     */
    public function scopeByCategory(Builder $query, int $categoryId): Builder
    {
        return $query->where('category_id', $categoryId);
    }

    /**
     * Check if template is published.
     */
    public function isPublished(): bool
    {
        return $this->status === TemplateStatus::Published;
    }

    /**
     * Check if template is draft.
     */
    public function isDraft(): bool
    {
        return $this->status === TemplateStatus::Draft;
    }

    /**
     * Check if template is archived.
     */
    public function isArchived(): bool
    {
        return $this->status === TemplateStatus::Archived;
    }

    /**
     * Check if template is disabled.
     */
    public function isDisabled(): bool
    {
        return $this->status === TemplateStatus::Disabled;
    }

    /**
     * Determine whether the template is available for use.
     */
    public function isAvailable(): bool
    {
        return $this->status === TemplateStatus::Published
            && !$this->trashed()
            && $this->category?->is_active;
    }
}
