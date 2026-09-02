<?php

namespace App\Domains\User\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Domains\Shared\Enums\UserRole;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

/**
 * User
 *
 * Authenticatable user entity. The `role` attribute is cast to the
 * UserRole enum. `avatar` is nullable and `email_verified_at` is
 * present but verification is optional for the MVP.
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Tabel pengguna (users).
     */
    protected $table = 'pengguna';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'peran',
        'disetujui',
        'paket_harga_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'peran' => UserRole::class,
        'disetujui' => 'boolean',
        'paket_harga_id' => 'integer',
    ];

    /**
     * Relasi paket harga / langganan pengguna.
     */
    public function pricelist(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(\App\Domains\Pricelist\Models\Pricelist::class, 'paket_harga_id');
    }

    /**
     * Relasi transaksi pembayaran pengguna.
     */
    public function transactions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(\App\Domains\Billing\Models\Transaction::class, 'pengguna_id');
    }

    /**
     * Relasi riwayat langganan pengguna.
     */
    public function subscriptions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(\App\Domains\Billing\Models\Subscription::class, 'pengguna_id');
    }

    /**
     * Ambil langganan aktif pengguna saat ini.
     */
    public function activeSubscription(): ?\App\Domains\Billing\Models\Subscription
    {
        return $this->subscriptions()
            ->where('status', \App\Domains\Billing\Enums\SubscriptionStatus::Active)
            ->where(function ($query) {
                $query->whereNull('expired_at')->orWhere('expired_at', '>', now());
            })
            ->latest('id')
            ->first();
    }

    /**
     * Ambil paket harga pengguna saat ini atau default (Free).
     */
    public function getEffectivePricelistAttribute(): \App\Domains\Pricelist\Models\Pricelist
    {
        try {
            if ($this->relationLoaded('pricelist') && $this->pricelist) {
                return $this->pricelist;
            }

            if ($this->paket_harga_id) {
                $plan = $this->pricelist()->first();
                if ($plan) return $plan;
            }

            return \App\Domains\Pricelist\Models\Pricelist::where('is_default', true)->first()
                ?? \App\Domains\Pricelist\Models\Pricelist::first()
                ?? new \App\Domains\Pricelist\Models\Pricelist([
                    'slug' => 'free',
                    'nama' => 'Free',
                    'harga' => 0,
                    'maks_domain' => 0,
                    'maks_starter_template' => 0,
                    'bisa_upload_website' => false,
                    'bisa_custom_domain' => false,
                ]);
        } catch (\Throwable $e) {
            return new \App\Domains\Pricelist\Models\Pricelist([
                'slug' => 'free',
                'nama' => 'Free',
                'harga' => 0,
                'maks_domain' => 0,
                'maks_starter_template' => 0,
                'bisa_upload_website' => false,
                'bisa_custom_domain' => false,
            ]);
        }
    }

    /**
     * Hash the password whenever it is written to storage.
     */
    protected function password(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => Hash::make($value),
        );
    }

    /**
     * Resolve the factory for this model.
     */
    protected static function newFactory(): Factory
    {
        return UserFactory::new();
    }

    /**
     * Determine whether the user is an administrator.
     */
    public function isAdmin(): bool
    {
        return $this->peran?->isAdmin() ?? false;
    }

    /**
     * Accessor for a fallback avatar when none is uploaded.
     */
    protected function avatarUrl(): Attribute
    {
        return Attribute::get(
            fn (): string => $this->avatar
                ?: 'https://ui-avatars.com/api/?name='.urlencode($this->name).'&background=6366f1&color=fff'
        );
    }
}
