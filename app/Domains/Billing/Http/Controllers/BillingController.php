<?php

namespace App\Domains\Billing\Http\Controllers;

use App\Domains\Billing\Enums\TransactionStatus;
use App\Domains\Billing\Models\Transaction;
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
     * Check & sync the latest status of a specific transaction from Midtrans Core API.
     * Useful for polling from frontend when webhook is delayed (especially localhost).
     * Sekaligus healing: jika transaksi sudah PAID tapi langganan belum aktif,
     * subscription akan dibuat/diperbaiki di sini.
     * GET /api/v1/billing/check-order/{orderId}
     */
    public function checkOrderStatus(Request $request, string $orderId): JsonResponse
    {
        $user = $request->user();
        $transaction = \App\Domains\Billing\Models\Transaction::where('order_id', $orderId)
            ->where('pengguna_id', $user->id)
            ->first();

        if (!$transaction) {
            return $this->error('Transaksi tidak ditemukan.', 404);
        }

        // Simpan status lama sebagai string untuk perbandingan yang benar (enum vs enum).
        $oldStatus = $transaction->status instanceof \BackedEnum
            ? $transaction->status->value
            : (string) $transaction->status;

        try {
            $updated = $this->billingService->checkOrderStatus($orderId);

            $newStatus = $updated->status instanceof \BackedEnum
                ? $updated->status->value
                : (string) $updated->status;

            // If now paid, refresh user's plan info
            $user->refresh();
            $user->load('pricelist', 'subscriptions');
            $effectivePlan = $user->effective_pricelist;
            $activeSub = $user->activeSubscription();

            return $this->success([
                'transaction' => new TransactionResource($updated),
                'current_plan' => new PricelistResource($effectivePlan),
                'subscription' => $activeSub ? new SubscriptionResource($activeSub) : null,
                'status_changed' => $newStatus !== $oldStatus,
            ], 'Status transaksi berhasil diperbarui dari Midtrans.');
        } catch (\Throwable $e) {
            return $this->error('Gagal memverifikasi status pembayaran: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Manually activate subscription for a paid order (failsafe endpoint).
     * Healing: jika transaksi sudah PAID tapi subscription belum ada / plan user
     * belum terupdate, endpoint ini akan memperbaikinya secara idempotent.
     * POST /api/v1/billing/activate/{orderId}
     */
    public function manualActivate(Request $request, string $orderId): JsonResponse
    {
        $user = $request->user();
        $transaction = \App\Domains\Billing\Models\Transaction::where('order_id', $orderId)
            ->where('pengguna_id', $user->id)
            ->with(['pricelist', 'user'])
            ->first();

        if (!$transaction) {
            return $this->error('Transaksi tidak ditemukan.', 404);
        }

        if ($transaction->status !== \App\Domains\Billing\Enums\TransactionStatus::Paid) {
            // Try to sync from Midtrans first
            try {
                $transaction = $this->billingService->checkOrderStatus($orderId);
            } catch (\Throwable $e) {
                // ignore — akan ditangani pengecekan di bawah
            }

            if ($transaction->status !== \App\Domains\Billing\Enums\TransactionStatus::Paid) {
                return $this->error('Pembayaran belum selesai atau belum terverifikasi oleh Midtrans.', 400);
            }
        }

        // Force heal: pastikan subscription aktif + paket user sesuai transaksi ini.
        // Idempotent — tidak membuat duplikat jika subscription sudah ada.
        $this->billingService->ensureSubscriptionActivated(
            $transaction->fresh(['user', 'pricelist'])
        );

        // Force re-activate subscription for this transaction
        $user->refresh();
        $user->load('pricelist', 'subscriptions');
        $effectivePlan = $user->effective_pricelist;
        $activeSub = $user->activeSubscription();

        return $this->success([
            'transaction' => new TransactionResource($transaction->fresh(['user', 'pricelist'])),
            'current_plan' => new PricelistResource($effectivePlan),
            'subscription' => $activeSub ? new SubscriptionResource($activeSub) : null,
        ], 'Paket langganan berhasil diperbarui.');
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

    /**
     * [DEV ONLY] Simulate Midtrans payment settlement for a pending transaction.
     * Useful when webhook cannot reach localhost during local development.
     *
     * POST /api/v1/billing/dev/simulate-paid
     * Body: { "order_id": "BILL-20260907-XXXXXX" }
     */
    public function devSimulatePaid(Request $request): JsonResponse
    {
        // STRICT guard — never available in production
        if (app()->isProduction()) {
            return $this->error('Endpoint ini hanya tersedia di lingkungan development.', 403);
        }

        $validated = $request->validate([
            'order_id' => 'required|string|exists:transaksi,order_id',
        ]);

        $transaction = Transaction::where('order_id', $validated['order_id'])->firstOrFail();

        if ($transaction->status === TransactionStatus::Paid) {
            return $this->success([
                'order_id' => $transaction->order_id,
                'status'   => 'paid',
            ], 'Transaksi sudah berstatus PAID sebelumnya. Tidak ada perubahan.');
        }

        // Build signed fake webhook payload
        $serverKey   = \App\Domains\System\Models\Setting::get('midtrans_server_key')
            ?: config('midtrans.server_key', env('MIDTRANS_SERVER_KEY', ''));
        $grossAmount = number_format((float) $transaction->nominal, 2, '.', '');
        $statusCode  = '200';
        $signature   = hash('sha512', $transaction->order_id . $statusCode . $grossAmount . $serverKey);

        $fakePayload = [
            'order_id'           => $transaction->order_id,
            'transaction_status' => 'settlement',
            'fraud_status'       => 'accept',
            'gross_amount'       => $grossAmount,
            'status_code'        => $statusCode,
            'payment_type'       => 'dev_manual_simulate',
            'signature_key'      => $signature,
        ];

        try {
            $updated = $this->billingService->handleWebhook($fakePayload);

            $newStatus = $updated->status instanceof \BackedEnum
                ? $updated->status->value
                : $updated->status;

            return $this->success([
                'order_id'  => $updated->order_id,
                'status'    => $newStatus,
                'user_plan' => $updated->user?->pricelist?->nama ?? $updated->pricelist?->nama,
            ], '[DEV] Pembayaran berhasil disimulasikan dan langganan diaktifkan.');
        } catch (\Throwable $e) {
            return $this->error('Gagal simulasi pembayaran: ' . $e->getMessage(), 500);
        }
    }
}
