<?php

namespace App\Console\Commands;

use App\Domains\Billing\Enums\TransactionStatus;
use App\Domains\Billing\Models\Transaction;
use App\Domains\Billing\Services\BillingService;
use Illuminate\Console\Command;

/**
 * MarkTransactionPaid
 *
 * Development-only command to simulate Midtrans webhook "settlement"
 * for a pending transaction. Used when webhook cannot reach localhost.
 *
 * Usage:
 *   php artisan billing:mark-paid BILL-20260907-XXXXXX
 *   php artisan billing:mark-paid --latest
 */
class MarkTransactionPaid extends Command
{
    protected $signature = 'billing:mark-paid
                            {order_id? : The order_id of the transaction to mark as paid}
                            {--latest : Mark the most recent pending transaction as paid}
                            {--force : Skip confirmation prompt}';

    protected $description = '[DEV] Simulate Midtrans webhook settlement for a pending transaction (local testing only)';

    public function __construct(protected BillingService $billingService)
    {
        parent::__construct();
    }

    public function handle(): int
    {
        // Warn if running in production
        if (app()->isProduction()) {
            $this->error('❌ This command is for development/testing only and cannot run in production!');
            return self::FAILURE;
        }

        // Resolve which transaction to mark as paid
        if ($this->option('latest')) {
            $transaction = Transaction::where('status', TransactionStatus::Pending)
                ->latest('id')
                ->first();

            if (!$transaction) {
                $this->warn('⚠️  No pending transactions found.');
                return self::FAILURE;
            }
        } else {
            $orderId = $this->argument('order_id');
            if (!$orderId) {
                $this->error('Please provide an order_id or use --latest flag.');
                $this->line('Usage: php artisan billing:mark-paid BILL-20260907-XXXXXX');
                $this->line('       php artisan billing:mark-paid --latest');
                return self::FAILURE;
            }

            $transaction = Transaction::where('order_id', $orderId)->first();
            if (!$transaction) {
                $this->error("❌ Transaction with order_id '{$orderId}' not found.");
                return self::FAILURE;
            }
        }

        // Show current state
        $this->info("📋 Transaction found:");
        $this->table(
            ['Order ID', 'Invoice', 'Nominal', 'Current Status'],
            [[
                $transaction->order_id,
                $transaction->invoice_number,
                'Rp ' . number_format((float) $transaction->nominal, 0, ',', '.'),
                $transaction->status instanceof \BackedEnum ? $transaction->status->value : $transaction->status,
            ]]
        );

        // If already paid
        if ($transaction->status === TransactionStatus::Paid) {
            $this->warn('⚠️  Transaction is already marked as PAID. No action taken.');
            return self::SUCCESS;
        }

        // Confirm (skip prompt if non-interactive or --force or --no-interaction)
        if ($this->input->isInteractive() && !$this->option('no-interaction') && !$this->option('force')) {
            if (!$this->confirm("Mark this transaction as PAID and activate the subscription?", true)) {
                $this->line('Aborted.');
                return self::SUCCESS;
            }
        }

        // Build a fake Midtrans webhook payload to simulate settlement
        $serverKey = \App\Domains\System\Models\Setting::get('midtrans_server_key')
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

            $this->newLine();
            $this->info("✅ Transaction successfully marked as PAID!");
            $this->info("   Order ID : {$updated->order_id}");
            $this->info("   Status   : {$newStatus}");
            $this->info("   User     : {$updated->user?->name} ({$updated->user?->email})");
            $this->info("   Plan     : {$updated->pricelist?->nama}");
            $this->newLine();
        } catch (\Throwable $e) {
            $this->error('❌ Failed to process webhook simulation: ' . $e->getMessage());
            return self::FAILURE;
        }

        return self::SUCCESS;
    }
}
