<?php

namespace App\Domains\Website\Models;

use App\Domains\Category\Models\Category;
use App\Domains\Template\Models\Template;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Website extends Model
{
    protected $table = 'website';

    protected $fillable = [
        'user_id',
        'category_id',
        'template_id',
        'name',
        'slug',
        'status',
        'draft_json',
        'published_json',
        'settings',
        'favicon',
        'logo',
        'published_at',
    ];

    protected $casts = [
        'draft_json' => 'array',
        'published_json' => 'array',
        'settings' => 'array',
        'published_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function template(): BelongsTo
    {
        return $this->belongsTo(Template::class);
    }

    public function views(): HasMany
    {
        return $this->hasMany(WebsiteView::class);
    }
}