<?php

namespace App\Domains\Billing\Enums;

/**
 * SubscriptionStatus
 *
 * Status masa berlaku paket langganan pengguna.
 */
enum SubscriptionStatus: string
{
    case Active = 'active';
    case Expired = 'expired';
    case Cancelled = 'cancelled';
}
