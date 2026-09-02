<?php

namespace App\Domains\Billing\Services;

use App\Domains\Billing\Enums\SubscriptionStatus;
use App\Domains\Billing\Enums\TransactionStatus;
use App\Domains\Billing\Models\Subscription;
use App\Domains\Billing\Models\Transaction;
use App\Domains\Pricelist\Models\Pricelist;
use App\Domains\User\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

/**
 * BillingService
 *
 * Directs checkout, idempotency webhooks, subscription duration calculations,
 * and user plan updates.
 */
class BillingService
{
    public function __construct(
        protected MidtransService $midtransService
    ) {}

    /**
     * Initiate a checkout transaction for an authenticated user.
     *
     * @param User $user
     * @param int $pricelistId
     * @return Transaction
     */
    public function checkout(User $user, int $pricelistId): Transaction
    {
        $pricelist = Pricelist::where('is_active', true)->where('id', $pricelistId)->firstOrFail();

        // Nominal price strictly from database
        $nominal = (float) $pricelist->harga;

        // Generate unique order_id and invoice_number
        $orderId = 'BILL-' . now()->format('Ymd') . '-' . strtoupper(Str::random(6));
        $invoiceNumber = $this->generateInvoiceNumber();

        return DB::transaction(function () use ($user, $pricelist, $nominal, $orderId, $invoiceNumber) {
            $transaction = Transaction::create([
                'order_id' => $orderId,
                'invoice_number' => $invoiceNumber,
                'pengguna_id' => $user->id,
                'paket_harga_id' => $pricelist->id,
                'nominal' => $nominal,
                'status' => TransactionStatus::Pending,
            ]);

            // Free plan: skip Midtrans, activate immediately
            if ($nominal == 0) {
                $transaction->update([
                    'status' => TransactionStatus::Paid,
                    'paid_at' => now(),
                    'metode_pembayaran' => 'free',
                ]);
                $this->activateSubscription($transaction->fresh(['user', 'pricelist']));
                return $transaction->fresh(['user', 'pricelist']);
            }

            // Paid plan: call Midtrans Snap API
            $snapResult = $this->midtransService->createSnapTransaction($transaction);
            $transaction->update([
                'snap_token' => $snapResult['snap_token'],
                'snap_redirect_url' => $snapResult['redirect_url'],
            ]);

            return $transaction->fresh(['user', 'pricelist']);
        });
    }

    /**
     * Handle incoming Midtrans Webhook Callback safely with Signature & Idempotency.
     *
     * @param array $payload
     * @return Transaction
     */
    public function handleWebhook(array $payload): Transaction
    {
        // 1. Verify Midtrans signature
        if (!$this->midtransService->verifySignature($payload)) {
            Log::warning('Midtrans Webhook: Invalid signature', $payload);
            throw new \InvalidArgumentException('Signature key Midtrans tidak valid.');
        }

        $orderId = $payload['order_id'] ?? '';
        $transaction = Transaction::where('order_id', $orderId)->first();

        if (!$transaction) {
            Log::warning('Midtrans Webhook: Order ID not found', ['order_id' => $orderId]);
            throw new \Illuminate\Database\Eloquent\ModelNotFoundException('Transaksi dengan Order ID ini tidak ditemukan.');
        }

        // 2. Verify gross amount match
        $grossAmount = (float) ($payload['gross_amount'] ?? 0);
        if (abs($grossAmount - (float) $transaction->nominal) > 0.01) {
            Log::error('Midtrans Webhook: Amount mismatch', [
                'order_id' => $orderId,
                'expected' => $transaction->nominal,
                'received' => $grossAmount,
            ]);
            throw new \InvalidArgumentException('Nominal pembayaran tidak sesuai dengan pesanan.');
        }

        // 3. Idempotency Check: if transaction is ALREADY paid, return directly without processing twice
        if ($transaction->status === TransactionStatus::Paid) {
            Log::info('Midtrans Webhook: Idempotent skip - Transaction already paid', ['order_id' => $orderId]);
            return $transaction;
        }

        // 4. Map status
        $newStatus = $this->midtransService->mapMidtransStatus(
            $payload['transaction_status'] ?? 'pending',
            $payload['fraud_status'] ?? null
        );

        $paymentType = $payload['payment_type'] ?? $transaction->metode_pembayaran;

        // DB Transaction for atomic update
        return DB::transaction(function () use ($transaction, $newStatus, $paymentType, $payload) {
            $transaction->update([
                'status' => $newStatus,
                'metode_pembayaran' => $paymentType,
                'payload_midtrans' => $payload,
                'paid_at' => $newStatus === TransactionStatus::Paid ? now() : $transaction->paid_at,
            ]);

            // If settlement/capture -> Activate Subscription & Update User Plan
            if ($newStatus === TransactionStatus::Paid) {
                $this->activateSubscription($transaction);
            }

            return $transaction->fresh(['user', 'pricelist']);
        });
    }

    /**
     * Activate subscription and update user's paket_harga_id.
     *
     * @param Transaction $transaction
     */
    protected function activateSubscription(Transaction $transaction): void
    {
        $user = $transaction->user;
        $pricelist = $transaction->pricelist;

        // Cancel previous active subscriptions for this user
        Subscription::where('pengguna_id', $user->id)
            ->where('status', SubscriptionStatus::Active)
            ->update(['status' => SubscriptionStatus::Cancelled]);

        // Calculate started_at and expired_at based on pricelist duration
        $startedAt = now();
        $expiredAt = match (strtolower($pricelist->periode ?? 'bulan')) {
            'tahun', 'yearly' => Carbon::now()->addYear(),
            'selamanya', 'lifetime', 'forever' => null,
            default => Carbon::now()->addMonth(),
        };

        // Create new active subscription
        Subscription::create([
            'pengguna_id' => $user->id,
            'paket_harga_id' => $pricelist->id,
            'transaction_id' => $transaction->id,
            'status' => SubscriptionStatus::Active,
            'started_at' => $startedAt,
            'expired_at' => $expiredAt,
            'auto_renew' => false,
        ]);

        // Update user plan and approve account for instant login
        $user->update([
            'paket_harga_id' => $pricelist->id,
            'disetujui' => true,
        ]);
    }

    /**
     * Generate unique sequential invoice number.
     * Format: INV-2026-000001
     *
     * @return string
     */
    protected function generateInvoiceNumber(): string
    {
        $year = now()->format('Y');
        $latestId = Transaction::max('id') ?? 0;
        $nextNum = str_pad((string) ($latestId + 1), 6, '0', STR_PAD_LEFT);

        return "INV-{$year}-{$nextNum}";
    }

    /**
     * Get transaction metrics for admin dashboard.
     *
     * @return array
     */
    public function getAdminMetrics(): array
    {
        $totalRevenue = (float) Transaction::where('status', TransactionStatus::Paid)->sum('nominal');
        $successfulCount = Transaction::where('status', TransactionStatus::Paid)->count();
        $pendingCount = Transaction::where('status', TransactionStatus::Pending)->count();
        $failedCount = Transaction::whereIn('status', [TransactionStatus::Failed, TransactionStatus::Expired, TransactionStatus::Cancelled])->count();

        return [
            'total_revenue' => $totalRevenue,
            'formatted_total_revenue' => 'Rp ' . number_format($totalRevenue, 0, ',', '.'),
            'successful_transactions' => $successfulCount,
            'pending_transactions' => $pendingCount,
            'failed_transactions' => $failedCount,
        ];
    }
}
