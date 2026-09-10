<?php

namespace App\Domains\Template\Models;

use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * TemplateUsage
 *
 * Model pencatatan riwayat penggunaan template oleh pengguna untuk menghitung kuota langganan.
 */
class TemplateUsage extends Model
{
    use HasFactory;

    protected $table = 'user_template_usage';

    protected $fillable = [
        'pengguna_id',
        'template_id',
    ];

    /**
     * Relasi ke Pengguna / User
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'pengguna_id');
    }

    /**
     * Relasi ke Template
     */
    public function template(): BelongsTo
    {
        return $this->belongsTo(Template::class, 'template_id');
    }
}
