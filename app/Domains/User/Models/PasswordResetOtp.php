<?php

namespace App\Domains\User\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * PasswordResetOtp
 *
 * Stores one-time passwords (OTPs) sent via email for password reset.
 */
class PasswordResetOtp extends Model
{
    use HasFactory;

    protected $table = 'password_reset_otps';

    protected $fillable = [
        'user_id',
        'email',
        'otp_code',
        'expires_at',
        'used_at',
    ];

    protected $casts = [
        'expires_at' => 'datetime',
        'used_at' => 'datetime',
    ];

    /**
     * Relationship to the user who requested the reset.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Check if the OTP is still valid (not used and not expired).
     */
    public function isValid(): bool
    {
        return is_null($this->used_at) && $this->expires_at->isFuture();
    }
}
