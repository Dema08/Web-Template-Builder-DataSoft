<?php

namespace App\Domains\Pricelist\Http\Controllers;

use App\Domains\Pricelist\Models\PromoCode;
use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminPromoCodeController extends BaseController
{
    /**
     * Get all promo codes (Admin).
     */
    public function index(): JsonResponse
    {
        $promoCodes = PromoCode::orderBy('created_at', 'desc')->get();

        return $this->success(
            $promoCodes,
            'Daftar kode promo berhasil diambil.'
        );
    }

    /**
     * Create a new promo code (Admin).
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'code'           => 'required|string|max:50|unique:promo_codes,code',
            'description'    => 'nullable|string|max:255',
            'discount_type'  => 'nullable|string|in:free,percentage,fixed',
            'discount_value' => 'nullable|numeric|min:0',
            'max_uses'       => 'nullable|integer|min:1',
            'is_active'      => 'nullable|boolean',
            'expires_at'     => 'nullable|date',
        ]);

        $validated['code'] = strtoupper(trim($validated['code']));
        $validated['discount_type'] = $validated['discount_type'] ?? 'free';
        $validated['is_active'] = $validated['is_active'] ?? true;

        $promoCode = PromoCode::create($validated);

        return $this->success(
            $promoCode,
            "Kode promo '{$promoCode->code}' berhasil dibuat.",
            201
        );
    }

    /**
     * Toggle active status of a promo code (Admin).
     */
    public function toggle(PromoCode $promoCode): JsonResponse
    {
        $promoCode->update([
            'is_active' => ! $promoCode->is_active,
        ]);

        $statusText = $promoCode->is_active ? 'diaktifkan' : 'dinonaktifkan';

        return $this->success(
            $promoCode,
            "Kode promo '{$promoCode->code}' berhasil {$statusText}."
        );
    }

    /**
     * Delete a promo code (Admin).
     */
    public function destroy(PromoCode $promoCode): JsonResponse
    {
        $code = $promoCode->code;
        $promoCode->delete();

        return $this->success(
            null,
            "Kode promo '{$code}' berhasil dihapus."
        );
    }

    /**
     * List active promo codes for public display (Register page).
     * Only returns code, description, and discount_type — no sensitive counts.
     */
    public function publicList(): JsonResponse
    {
        $promoCodes = PromoCode::where('is_active', true)
            ->where(function ($q) {
                $q->whereNull('expires_at')->orWhere('expires_at', '>', now());
            })
            ->where(function ($q) {
                $q->whereNull('max_uses')->orWhereColumn('used_count', '<', 'max_uses');
            })
            ->orderBy('created_at', 'desc')
            ->get(['code', 'description', 'discount_type', 'expires_at', 'max_uses', 'used_count']);

        return $this->success(
            $promoCodes,
            'Daftar kode promo aktif berhasil diambil.'
        );
    }

    /**
     * Validate a promo code publicly (for Register page).
     */
    public function validatePublic(Request $request): JsonResponse
    {
        $request->validate([
            'code' => 'required|string',
        ]);

        $codeStr = strtoupper(trim($request->input('code')));
        $promoCode = PromoCode::where('code', $codeStr)->first();

        if (! $promoCode || ! $promoCode->isValid()) {
            return $this->error("Kode promo '{$codeStr}' tidak valid, kadaluarsa, atau sudah habis digunakan.", 400);
        }

        return $this->success([
            'code'           => $promoCode->code,
            'discount_type'  => $promoCode->discount_type,
            'discount_value' => (float) $promoCode->discount_value,
            'description'    => $promoCode->description,
            'is_valid'       => true,
        ], "Kode promo '{$promoCode->code}' berhasil diterapkan!");
    }
}
