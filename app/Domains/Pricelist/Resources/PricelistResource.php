<?php

namespace App\Domains\Pricelist\Resources;

use App\Domains\Pricelist\Models\Pricelist;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * PricelistResource
 *
 * Transformasi data paket harga ke format JSON canonical.
 */
class PricelistResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        /** @var Pricelist $plan */
        $plan = $this->resource;

        $hargaFloat = (float) $plan->harga;
        $formattedPrice = $hargaFloat == 0
            ? 'Gratis'
            : 'Rp ' . number_format($hargaFloat, 0, ',', '.');

        return [
            'id' => $plan->id,
            'slug' => $plan->slug,
            'name' => $plan->nama,
            'nama' => $plan->nama,
            'harga' => (float) $plan->harga,
            'price' => (float) $plan->harga,
            'formatted_price' => $formattedPrice,
            'period' => $plan->periode,
            'periode' => $plan->periode,
            'deskripsi' => $plan->deskripsi,
            'description' => $plan->deskripsi,
            'max_domains' => (int) $plan->maks_domain,
            'max_starter_templates' => (int) $plan->maks_starter_template,
            'can_upload_website' => (bool) $plan->bisa_upload_website,
            'can_use_custom_domain' => (bool) $plan->bisa_custom_domain,
            'features' => $plan->fitur ?? [],
            'fitur' => $plan->fitur ?? [],
            'is_active' => (bool) $plan->is_active,
            'is_default' => (bool) $plan->is_default,
            'is_popular' => (bool) ($plan->is_popular ?? false),
            'sort_order' => (int) $plan->urutan,
            'users_count' => $plan->users_count ?? $plan->users()->count(),
            'created_at' => $plan->created_at?->toISOString(),
            'updated_at' => $plan->updated_at?->toISOString(),
        ];
    }
}
