<?php

namespace App\Domains\Billing\Services;

use App\Domains\Billing\Enums\TransactionStatus;
use App\Domains\Billing\Models\Transaction;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 * MidtransService
 *
 * Handling Midtrans Snap API communication & signature verifications.
 */
class MidtransService
{
    protected string $serverKey;
    protected string $clientKey;
    protected bool $isProduction;
    protected string $snapUrl;

    public function __construct()
    {
        $this->serverKey = \App\Domains\System\Models\Setting::get('midtrans_server_key')
            ?: config('midtrans.server_key', env('MIDTRANS_SERVER_KEY', ''));

        $this->clientKey = \App\Domains\System\Models\Setting::get('midtrans_client_key')
            ?: config('midtrans.client_key', env('MIDTRANS_CLIENT_KEY', ''));

        $isProdSetting = \App\Domains\System\Models\Setting::get('midtrans_is_production');
        $this->isProduction = $isProdSetting !== null
            ? filter_var($isProdSetting, FILTER_VALIDATE_BOOLEAN)
            : config('midtrans.is_production', false);

        $this->snapUrl = $this->isProduction
            ? 'https://app.midtrans.com/snap/v1/transactions'
            : 'https://app.sandbox.midtrans.com/snap/v1/transactions';
    }

    /**
     * Generate Midtrans Snap Token & Redirect URL for a given internal Transaction.
     *
     * @param Transaction $transaction
     * @return array{snap_token: string, redirect_url: string}
     */
    public function createSnapTransaction(Transaction $transaction): array
    {
        $user = $transaction->user;
        $pricelist = $transaction->pricelist;

        $params = [
            'transaction_details' => [
                'order_id' => $transaction->order_id,
                'gross_amount' => (int) round((float) $transaction->nominal),
            ],
            'item_details' => [
                [
                    'id' => 'PLAN-' . $pricelist->id,
                    'price' => (int) round((float) $transaction->nominal),
                    'quantity' => 1,
                    'name' => mb_substr('Paket ' . $pricelist->nama, 0, 50),
                ],
            ],
            'customer_details' => [
                'first_name' => $user->name,
                'email' => $user->email,
            ],
        ];

        // Perform HTTP POST to Midtrans Snap API with Basic Auth (ServerKey:)
        $response = Http::withBasicAuth($this->serverKey, '')
            ->withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
            ])
            ->post($this->snapUrl, $params);

        if (!$response->successful()) {
            Log::error('Midtrans Snap API Error', [
                'order_id' => $transaction->order_id,
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            throw new \RuntimeException('Gagal berkomunikasi dengan Payment Gateway Midtrans: ' . ($response->json('error_messages.0') ?? $response->reason()));
        }

        $data = $response->json();

        return [
            'snap_token' => $data['token'] ?? '',
            'redirect_url' => $data['redirect_url'] ?? '',
        ];
    }

    /**
     * Verify Midtrans Signature Key from Webhook payload.
     * signature_key = sha512(order_id + status_code + gross_amount + ServerKey)
     *
     * @param array $payload
     * @return bool
     */
    public function verifySignature(array $payload): bool
    {
        $orderId = $payload['order_id'] ?? '';
        $statusCode = $payload['status_code'] ?? '';
        $grossAmount = $payload['gross_amount'] ?? '';
        $signatureKey = $payload['signature_key'] ?? '';

        if (empty($orderId) || empty($statusCode) || empty($grossAmount) || empty($signatureKey)) {
            return false;
        }

        $input = $orderId . $statusCode . $grossAmount . $this->serverKey;
        $expectedSignature = hash('sha512', $input);

        return hash_equals($expectedSignature, $signatureKey);
    }

    /**
     * Map Midtrans notification status string to internal TransactionStatus enum.
     *
     * @param string $transactionStatus
     * @param string|null $fraudStatus
     * @return TransactionStatus
     */
    public function mapMidtransStatus(string $transactionStatus, ?string $fraudStatus = null): TransactionStatus
    {
        if ($transactionStatus === 'capture') {
            if ($fraudStatus === 'challenge') {
                return TransactionStatus::Pending;
            }
            return TransactionStatus::Paid;
        }

        return match ($transactionStatus) {
            'settlement' => TransactionStatus::Paid,
            'pending' => TransactionStatus::Pending,
            'deny', 'failure' => TransactionStatus::Failed,
            'expire' => TransactionStatus::Expired,
            'cancel' => TransactionStatus::Cancelled,
            'refund', 'partial_refund' => TransactionStatus::Refunded,
            default => TransactionStatus::Pending,
        };
    }
}
