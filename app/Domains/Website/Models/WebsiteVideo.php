<?php

namespace App\Domains\Website\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

/**
 * Video background per section (satu baris = satu section di builder).
 *
 * Dipakai supaya upload video di section lain tidak menimpa/menghapus video
 * section yang sudah ada. File fisik disimpan di disk 'public'
 * (folder website-videos/{website_id}).
 */
class WebsiteVideo extends Model
{
    public const STATUS_PROCESSING = 'processing';

    public const STATUS_READY = 'ready';

    public const STATUS_FAILED = 'failed';

    protected $table = 'website_video';

    protected $fillable = [
        'website_id',
        'section_key',
        'upload_id',
        'path',
        'poster',
        'size',
        'duration',
        'format',
        'status',
    ];

    protected $casts = [
        'size' => 'integer',
        'duration' => 'integer',
    ];

    public function website(): BelongsTo
    {
        return $this->belongsTo(Website::class);
    }

    public function isReady(): bool
    {
        return $this->status === self::STATUS_READY && (bool) $this->path;
    }

    public function getUrlAttribute(): ?string
    {
        return $this->publicUrl($this->path);
    }

    public function getPosterUrlAttribute(): ?string
    {
        return $this->publicUrl($this->poster);
    }

    /**
     * Apakah file (path) masih dipakai baris lain? Dipakai sebelum menghapus
     * file supaya video milik section lain tidak ikut terhapus.
     */
    public static function isPathReferenced(string $path): bool
    {
        return static::query()
            ->where('path', $path)
            ->orWhere('poster', $path)
            ->exists();
    }

    /**
     * Apakah path (relatif disk public) masih direferensikan draft/published
     * JSON website mana pun. Dipakai oleh perintah pembersih file orphan.
     */
    public static function isReferencedByWebsiteJson(string $path): bool
    {
        return Website::query()
            ->where('draft_json', 'like', '%'.$path.'%')
            ->orWhere('published_json', 'like', '%'.$path.'%')
            ->exists();
    }

    private function publicUrl(?string $path): ?string
    {
        if (! $path || ! Storage::disk('public')->exists($path)) {
            return null;
        }

        return Storage::disk('public')->url($path);
    }
}
