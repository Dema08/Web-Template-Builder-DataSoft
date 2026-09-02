<?php

namespace App\Domains\Billing\Models;

use App\Domains\Billing\Enums\TransactionStatus;
use App\Domains\Pricelist\Models\Pricelist;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Transaction (Transaksi Pembayaran Midtrans)
 */
class Transaction extends Model
{
    use HasFactory;

    protected $table = 'transaksi';

    protected $fillable = [
        'order_id',
        'invoice_number',
        'pengguna_id',
        'paket_harga_id',
        'nominal',
        'status',
        'metode_pembayaran',
        'snap_token',
        'snap_redirect_url',
        'paid_at',
        'payload_midtrans',
    ];

    protected $casts = [
        'nominal' => 'decimal:2',
        'status' => TransactionStatus::class,
        'paid_at' => 'datetime',
        'payload_midtrans' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'pengguna_id');
    }

    public function pricelist(): BelongsTo
    {
        return $this->belongsTo(Pricelist::class, 'paket_harga_id');
    }

    public function subscription(): HasOne
    {
        return $this->hasOne(Subscription::class, 'transaction_id');
    }

    public function isPaid(): bool
    {
        return $this->status === TransactionStatus::Paid;
    }
}
