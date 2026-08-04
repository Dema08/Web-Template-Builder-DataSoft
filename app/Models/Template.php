<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Template extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'description',
        'thumbnail',
        'preview_data',
        'schema',
        'default_content',
        'sort_order',
        'is_active',
        'usage_count',
    ];

    protected $casts = [
        'preview_data' => 'array',
        'schema' => 'array',
        'default_content' => 'array',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
        'usage_count' => 'integer',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function websites(): HasMany
    {
        return $this->hasMany(Website::class);
    }
}
