<?php

namespace App\Domains\Pricelist\Http\Controllers;

use App\Domains\Pricelist\Models\Pricelist;
use App\Domains\Pricelist\Resources\PricelistResource;
use App\Domains\Shared\Helpers\ApiResponse;
use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;

/**
 * PublicPricelistController
 *
 * Endpoint API Publik untuk melihat daftar paket harga yang aktif.
 */
class PublicPricelistController extends BaseController
{
    public function index(): JsonResponse
    {
        $plans = Pricelist::where('is_active', true)
            ->orderBy('urutan', 'asc')
            ->orderBy('id', 'asc')
            ->get();

        return ApiResponse::success(
            PricelistResource::collection($plans),
            'Daftar paket harga berhasil diambil.'
        );
    }
}
