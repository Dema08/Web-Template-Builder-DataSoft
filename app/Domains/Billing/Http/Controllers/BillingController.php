<?php

namespace App\Domains\Billing\Http\Controllers;

use App\Domains\Billing\Resources\SubscriptionResource;
use App\Domains\Billing\Resources\TransactionResource;
use App\Domains\Billing\Services\BillingService;
use App\Domains\Pricelist\Resources\PricelistResource;
use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * BillingController
 *
 * User Billing & Midtrans Webhook endpoints.
 */
class BillingController extends BaseController
{
    public function __construct(
        protected BillingService $billingService
    ) {}

    /**
     * Get active plan & subscription details for the authenticated user.
     * GET /api/v1/billing/current
     */
    public function currentPlan(Request $request): JsonResponse
    {
        $user = $request->user();
        $user->load('pricelist', 'subscriptions');

        $activeSub = $user->activeSubscription();
        $effectivePlan = $user->effective_pricelist;

        return $this->success([
            'current_plan' => new PricelistResource($effectivePlan),
            'subscription' => $activeSub ? new SubscriptionResource($activeSub) : null,
        ], 'Detail paket aktif pengguna.');
    }

    /**
     * Initiate checkout transaction and obtain Midtrans Snap Token.
     * POST /api/v1/billing/checkout
     */
    public function checkout(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'paket_harga_id' => 'required|integer|exists:paket_harga,id',
        ]);

        $user = $request->user();

        try {
            $transaction = $this->billingService->checkout($user, (int) $validated['paket_harga_id']);

            // If free plan (harga = 0), return success immediately without Snap token
            if ((float) $transaction->nominal === 0.0) {
                return $this->success([
                    'transaction' => new TransactionResource($transaction),
                    'order_id' => $transaction->order_id,
                    'invoice_number' => $transaction->invoice_number,
                    'snap_token' => null,
                    'is_free' => true,
                    'message' => 'Paket Free berhasil diaktifkan.',
                ], 'Paket Free berhasil diaktifkan.', 201);
            }

            return $this->success([
                'transaction' => new TransactionResource($transaction),
                'order_id' => $transaction->order_id,
                'invoice_number' => $transaction->invoice_number,
                'snap_token' => $transaction->snap_token,
                'snap_redirect_url' => $transaction->snap_redirect_url,
                'client_key' => config('midtrans.client_key'),
                'snap_js_url' => config('midtrans.snap_js_url'),
                'is_free' => false,
            ], 'Checkout berhasil dibuat.', 201);
        } catch (\Throwable $e) {
            return $this->error($e->getMessage(), 400);
        }
    }

    /**
     * Get transaction history for the authenticated user.
     * GET /api/v1/billing/history
     */
    public function history(Request $request): JsonResponse
    {
        $user = $request->user();

        $transactions = $user->transactions()
            ->with(['pricelist'])
            ->latest('id')
            ->paginate($request->integer('per_page', 15));

        return $this->success([
            'data' => TransactionResource::collection($transactions),
            'pagination' => [
                'current_page' => $transactions->currentPage(),
                'last_page' => $transactions->lastPage(),
                'total' => $transactions->total(),
                'per_page' => $transactions->perPage(),
            ],
        ], 'Riwayat transaksi pengguna berhasil diambil.');
    }

    /**
     * Public Webhook callback endpoint for Midtrans notifications.
     * POST /api/v1/billing/webhook
     */
    public function webhook(Request $request): JsonResponse
    {
        $payload = $request->all();

        try {
            $transaction = $this->billingService->handleWebhook($payload);

            return $this->success([
                'order_id' => $transaction->order_id,
                'status' => $transaction->status instanceof \BackedEnum ? $transaction->status->value : $transaction->status,
            ], 'Webhook Midtrans berhasil diproses.');
        } catch (\InvalidArgumentException $e) {
            return $this->error($e->getMessage(), 422);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return $this->error($e->getMessage(), 404);
        } catch (\Throwable $e) {
            return $this->error('Gagal memproses webhook Midtrans: ' . $e->getMessage(), 500);
        }
    }
}
