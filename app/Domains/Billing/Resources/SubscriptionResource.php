<?php

namespace App\Domains\Billing\Resources;

use App\Domains\Billing\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * SubscriptionResource
 */
class SubscriptionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        /** @var Subscription $sub */
        $sub = $this->resource;

        return [
            'id' => $sub->id,
            'status' => $sub->status instanceof \BackedEnum ? $sub->status->value : $sub->status,
            'is_active' => $sub->isActive(),
            'started_at' => $sub->started_at?->toISOString(),
            'expired_at' => $sub->expired_at?->toISOString(),
            'formatted_started_at' => $sub->started_at?->format('d M Y'),
            'formatted_expired_at' => $sub->expired_at ? $sub->expired_at->format('d M Y') : 'Selamanya (Lifetime)',
            'pricelist' => [
                'id' => $sub->pricelist?->id,
                'name' => $sub->pricelist?->nama,
                'nama' => $sub->pricelist?->nama,
                'slug' => $sub->pricelist?->slug,
                'harga' => (float) ($sub->pricelist?->harga ?? 0),
                'periode' => $sub->pricelist?->periode,
            ],
            'auto_renew' => (bool) $sub->auto_renew,
        ];
    }
}
