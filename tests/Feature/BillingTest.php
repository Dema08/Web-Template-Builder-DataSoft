<?php

namespace Tests\Feature;

use App\Domains\Billing\Enums\SubscriptionStatus;
use App\Domains\Billing\Enums\TransactionStatus;
use App\Domains\Billing\Models\Subscription;
use App\Domains\Billing\Models\Transaction;
use App\Domains\Pricelist\Models\Pricelist;
use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BillingTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;
    protected User $admin;
    protected Pricelist $freePlan;
    protected Pricelist $proPlan;

    protected function setUp(): void
    {
        parent::setUp();

        // Create pricelists
        $this->freePlan = Pricelist::create([
            'slug' => 'free',
            'nama' => 'Free',
            'harga' => 0,
            'periode' => 'selamanya',
            'is_active' => true,
            'is_default' => true,
        ]);

        $this->proPlan = Pricelist::create([
            'slug' => 'harga-2',
            'nama' => 'Harga 2 (Pro)',
            'harga' => 199000,
            'periode' => 'bulan',
            'is_active' => true,
            'is_default' => false,
        ]);

        // Create standard user
        $this->user = User::create([
            'name' => 'Standard User',
            'email' => 'user@test.com',
            'password' => 'password123',
            'peran' => UserRole::User,
            'disetujui' => true,
            'paket_harga_id' => $this->freePlan->id,
        ]);

        // Create admin user
        $this->admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@test.com',
            'password' => 'password123',
            'peran' => UserRole::Admin,
            'disetujui' => true,
            'paket_harga_id' => $this->proPlan->id,
        ]);
    }

    /** @test */
    public function authenticated_user_can_initiate_checkout_and_receive_snap_token(): void
    {
        $response = $this->actingAs($this->user)
            ->postJson('/api/v1/billing/checkout', [
                'paket_harga_id' => $this->proPlan->id,
            ]);

        $response->assertStatus(201)
            ->assertJsonPath('success', true)
            ->assertJsonStructure([
                'data' => [
                    'order_id',
                    'invoice_number',
                    'snap_token',
                ],
            ]);

        $this->assertDatabaseHas('transaksi', [
            'pengguna_id' => $this->user->id,
            'paket_harga_id' => $this->proPlan->id,
            'nominal' => 199000.00,
            'status' => 'pending',
        ]);
    }

    /** @test */
    public function valid_webhook_settlement_activates_subscription_and_updates_user_plan(): void
    {
        // 1. Create checkout
        $tx = Transaction::create([
            'order_id' => 'BILL-TEST-001',
            'invoice_number' => 'INV-2026-000001',
            'pengguna_id' => $this->user->id,
            'paket_harga_id' => $this->proPlan->id,
            'nominal' => 199000.00,
            'status' => TransactionStatus::Pending,
        ]);

        $serverKey = config('midtrans.server_key', 'SB-Mid-server-DummyKeyForTestingPurposesOnly123');
        $signature = hash('sha512', 'BILL-TEST-001200199000' . $serverKey);

        $payload = [
            'order_id' => 'BILL-TEST-001',
            'status_code' => '200',
            'gross_amount' => '199000',
            'signature_key' => $signature,
            'transaction_status' => 'settlement',
            'payment_type' => 'gopay',
        ];

        // 2. Post Webhook
        $response = $this->postJson('/api/v1/billing/webhook', $payload);

        $response->assertStatus(200)
            ->assertJsonPath('success', true);

        // Assert transaction status updated to paid
        $this->assertDatabaseHas('transaksi', [
            'id' => $tx->id,
            'status' => 'paid',
            'metode_pembayaran' => 'gopay',
        ]);

        // Assert user plan updated to Pro
        $this->assertEquals($this->proPlan->id, $this->user->fresh()->paket_harga_id);

        // Assert active subscription created
        $this->assertDatabaseHas('subscriptions', [
            'pengguna_id' => $this->user->id,
            'paket_harga_id' => $this->proPlan->id,
            'transaction_id' => $tx->id,
            'status' => 'active',
        ]);
    }

    /** @test */
    public function duplicate_webhook_is_idempotent_and_does_not_duplicate_subscriptions(): void
    {
        $tx = Transaction::create([
            'order_id' => 'BILL-TEST-002',
            'invoice_number' => 'INV-2026-000002',
            'pengguna_id' => $this->user->id,
            'paket_harga_id' => $this->proPlan->id,
            'nominal' => 199000.00,
            'status' => TransactionStatus::Pending,
        ]);

        $serverKey = config('midtrans.server_key', 'SB-Mid-server-DummyKeyForTestingPurposesOnly123');
        $signature = hash('sha512', 'BILL-TEST-002200199000' . $serverKey);

        $payload = [
            'order_id' => 'BILL-TEST-002',
            'status_code' => '200',
            'gross_amount' => '199000',
            'signature_key' => $signature,
            'transaction_status' => 'settlement',
            'payment_type' => 'bank_transfer',
        ];

        // Webhook #1
        $this->postJson('/api/v1/billing/webhook', $payload)->assertStatus(200);
        $this->assertEquals(1, Subscription::where('pengguna_id', $this->user->id)->count());

        // Webhook #2 (Duplicate)
        $this->postJson('/api/v1/billing/webhook', $payload)->assertStatus(200);

        // Ensure subscriptions count remains exactly 1!
        $this->assertEquals(1, Subscription::where('pengguna_id', $this->user->id)->count());
    }

    /** @test */
    public function webhook_with_invalid_signature_is_rejected(): void
    {
        $payload = [
            'order_id' => 'BILL-FAKE-999',
            'status_code' => '200',
            'gross_amount' => '199000',
            'signature_key' => 'INVALID_SIGNATURE_HASH',
            'transaction_status' => 'settlement',
        ];

        $response = $this->postJson('/api/v1/billing/webhook', $payload);

        $response->assertStatus(422)
            ->assertJsonPath('success', false);
    }

    /** @test */
    public function webhook_with_mismatched_amount_is_rejected(): void
    {
        $tx = Transaction::create([
            'order_id' => 'BILL-TEST-003',
            'invoice_number' => 'INV-2026-000003',
            'pengguna_id' => $this->user->id,
            'paket_harga_id' => $this->proPlan->id,
            'nominal' => 199000.00,
            'status' => TransactionStatus::Pending,
        ]);

        $serverKey = config('midtrans.server_key', 'SB-Mid-server-DummyKeyForTestingPurposesOnly123');
        $signature = hash('sha512', 'BILL-TEST-00320050000' . $serverKey); // Fake amount 50000

        $payload = [
            'order_id' => 'BILL-TEST-003',
            'status_code' => '200',
            'gross_amount' => '50000',
            'signature_key' => $signature,
            'transaction_status' => 'settlement',
        ];

        $response = $this->postJson('/api/v1/billing/webhook', $payload);

        $response->assertStatus(422)
            ->assertJsonPath('success', false);

        // Ensure status remains pending
        $this->assertEquals(TransactionStatus::Pending, $tx->fresh()->status);
    }

    /** @test */
    public function non_admin_user_cannot_access_admin_transactions(): void
    {
        $response = $this->actingAs($this->user)
            ->getJson('/api/v1/admin/transactions');

        $response->assertStatus(403);
    }

    /** @test */
    public function admin_can_access_admin_transactions_and_view_metrics(): void
    {
        $response = $this->actingAs($this->admin)
            ->getJson('/api/v1/admin/transactions');

        $response->assertStatus(200)
            ->assertJsonPath('success', true)
            ->assertJsonStructure([
                'data' => [
                    'metrics' => [
                        'total_revenue',
                        'successful_transactions',
                    ],
                    'data',
                ],
            ]);
    }
}
