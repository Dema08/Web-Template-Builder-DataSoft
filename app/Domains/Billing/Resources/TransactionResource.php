<?php

namespace App\Domains\Billing\Resources;

use App\Domains\Billing\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * TransactionResource
 */
class TransactionResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        /** @var Transaction $tx */
        $tx = $this->resource;

        $nominalFloat = (float) $tx->nominal;
        $formattedNominal = 'Rp ' . number_format($nominalFloat, 0, ',', '.');

        return [
            'id' => $tx->id,
            'order_id' => $tx->order_id,
            'invoice_number' => $tx->invoice_number,
            'user' => [
                'id' => $tx->user?->id,
                'name' => $tx->user?->name,
                'email' => $tx->user?->email,
            ],
            'pricelist' => [
                'id' => $tx->pricelist?->id,
                'name' => $tx->pricelist?->nama,
                'nama' => $tx->pricelist?->nama,
                'slug' => $tx->pricelist?->slug,
            ],
            'nominal' => $nominalFloat,
            'formatted_nominal' => $formattedNominal,
            'status' => $tx->status instanceof \BackedEnum ? $tx->status->value : $tx->status,
            'status_label' => method_exists($tx->status, 'label') ? $tx->status->label() : ucfirst((string) $tx->status),
            'metode_pembayaran' => $tx->metode_pembayaran ?? 'Online Payment',
            'snap_token' => $tx->snap_token,
            'snap_redirect_url' => $tx->snap_redirect_url,
            'paid_at' => $tx->paid_at?->toISOString(),
            'created_at' => $tx->created_at?->toISOString(),
            'formatted_date' => $tx->created_at?->format('d/m/Y H:i'),
        ];
    }
}
