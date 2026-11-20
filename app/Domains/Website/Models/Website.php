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
use Illuminate\Support\Facades\Storage;

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
        'thumbnail_path',
        'status',
        'draft_json',
        'published_json',
        'settings',
        'favicon',
        'logo',
        'published_at',
        'requested_at',
        'rejection_reason',
        'approved_at',
        'approved_by',
    ];

    protected $casts = [
        'draft_json' => 'array',
        'published_json' => 'array',
        'settings' => 'array',
        'published_at' => 'datetime',
        'requested_at' => 'datetime',
        'approved_at' => 'datetime',
    ];

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', 'published');
    }

    public function scopePending(Builder $query): Builder
    {
        return $query->where('status', 'pending');
    }

    public function scopeRejected(Builder $query): Builder
    {
        return $query->where('status', 'rejected');
    }

    public function getDomainTypeAttribute(): string
    {
        return $this->settings['domain_type'] ?? 'subdomain';
    }

    public function getCustomDomainAttribute(): ?string
    {
        return $this->settings['custom_domain'] ?? null;
    }

    public function getUrlSubdomainAttribute(): ?string
    {
        if (!$this->slug) {
            return null;
        }

        $baseDomain = config('app.publish_domain', config('app.primary_host', 'web.microdata.co.id'));

        return "https://{$this->slug}.{$baseDomain}";
    }

    public function getUrlPathAttribute(): string
    {
        if (!$this->slug) {
            return '';
        }

        if (app()->runningInConsole() || !request()) {
            $base = rtrim(config('app.url', 'http://localhost:8000'), '/');
            return "{$base}/{$this->slug}";
        }

        $scheme = request()->getScheme();
        $host = request()->getHost();
        $port = request()->getPort();
        $portStr = ($port && !in_array($port, [80, 443])) ? ":{$port}" : '';

        return "{$scheme}://{$host}{$portStr}/{$this->slug}";
    }

    public function getPublishedUrlAttribute(): string
    {
        $domainType = $this->domain_type ?? ($this->settings['domain_type'] ?? 'subdomain');

        if ($domainType === 'custom') {
            $custom = $this->custom_domain ?? ($this->settings['custom_domain'] ?? null);
            if (!empty($custom)) {
                return str_starts_with($custom, 'http') ? $custom : "https://{$custom}";
            }
        }

        if ($domainType === 'subprefix' || $domainType === 'path') {
            return $this->url_path;
        }

        return $this->url_subdomain ?? $this->url_path;
    }

    public function getThumbnailUrlAttribute(): ?string
    {
        if (!$this->thumbnail_path) {
            return null;
        }

        return Storage::disk('public')->url($this->thumbnail_path);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
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