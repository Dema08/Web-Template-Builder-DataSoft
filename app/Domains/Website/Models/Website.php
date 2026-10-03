<?php

namespace App\Domains\Website\Models;

use App\Domains\Category\Models\Category;
use App\Domains\Template\Models\Template;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Cache;

class Website extends Model
{
    protected $table = 'website';

    protected static function booted(): void
    {
        static::saving(function (Website $website): void {
            $originalSlug = $website->getOriginal('slug');
            if ($originalSlug) {
                Cache::forget("site:{$originalSlug}");
                Cache::forget("site:website-id:{$originalSlug}");
            }

            if ($website->slug) {
                Cache::forget("site:{$website->slug}");
                Cache::forget("site:website-id:{$website->slug}");
            }
        });

        static::deleting(function (Website $website): void {
            if ($website->slug) {
                Cache::forget("site:{$website->slug}");
                Cache::forget("site:website-id:{$website->slug}");
            }
        });
    }

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

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', 'published');
    }

    public function getUrlPathAttribute(): string
    {
        return '/p/'.$this->slug;
    }

    public function getUrlSubdomainAttribute(): ?string
    {
        if (!$this->slug) {
            return null;
        }

        $mainDomain = config('app.main_domain', 'microdata.co.id');

        return "https://{$this->slug}.{$mainDomain}";
    }

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