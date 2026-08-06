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
        return $this->belongsTo(Category::class);
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
