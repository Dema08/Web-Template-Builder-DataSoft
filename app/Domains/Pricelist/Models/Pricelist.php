<?php

namespace App\Domains\Pricelist\Models;

use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Pricelist (Paket Harga)
 *
 * Entitas untuk mengelola jenis paket harga dan batasan fitur pengguna.
 */
class Pricelist extends Model
{
    use HasFactory;

    protected $table = 'paket_harga';

    protected $fillable = [
        'slug',
        'nama',
        'harga',
        'deskripsi',
        'periode',
        'maks_domain',
        'maks_starter_template',
        'bisa_upload_website',
        'bisa_custom_domain',
        'fitur',
        'is_active',
        'is_default',
        'is_popular',
        'urutan',
    ];

    protected $casts = [
        'harga' => 'decimal:2',
        'maks_domain' => 'integer',
        'maks_starter_template' => 'integer',
        'bisa_upload_website' => 'boolean',
        'bisa_custom_domain' => 'boolean',
        'fitur' => 'array',
        'is_active' => 'boolean',
        'is_default' => 'boolean',
        'is_popular' => 'boolean',
        'urutan' => 'integer',
    ];

    /**
     * Relasi ke semua pengguna yang menggunakan paket ini.
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'paket_harga_id');
    }

    /**
     * Cek apakah paket ini memiliki unlimited custom domain.
     */
    public function isUnlimitedDomains(): bool
    {
        return $this->maks_domain === -1;
    }

    /**
     * Cek apakah paket ini memiliki unlimited starter templates.
     */
    public function isUnlimitedTemplates(): bool
    {
        return $this->maks_starter_template === -1;
    }
}
