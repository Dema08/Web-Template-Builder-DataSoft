<?php

namespace App\Domains\Billing\Enums;

/**
 * TransactionStatus
 *
 * Status internal transaksi aplikasi.
 */
enum TransactionStatus: string
{
    case Pending = 'pending';
    case Paid = 'paid';
    case Expired = 'expired';
    case Failed = 'failed';
    case Cancelled = 'cancelled';
    case Refunded = 'refunded';

    public function label(): string
    {
        return match ($this) {
            self::Pending => 'Pending',
            self::Paid => 'Terbayar',
            self::Expired => 'Kedaluwarsa',
            self::Failed => 'Gagal',
            self::Cancelled => 'Dibatalkan',
            self::Refunded => 'Pengembalian Dana',
        };
    }
}
