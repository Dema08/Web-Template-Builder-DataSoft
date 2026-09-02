<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel transaksi (transactions)
 *
 * Menyimpan data pesanan/pembayaran pengguna via Midtrans Snap:
 *   - order_id             : ID unik pesanan untuk Midtrans (misal: BILL-20260901-8F2A91)
 *   - invoice_number       : Nomor invoice unik pengguna (misal: INV-2026-000001)
 *   - pengguna_id          : ID pengguna pemesan (foreign key)
 *   - paket_harga_id       : ID paket harga yang dibeli (foreign key)
 *   - nominal              : Jumlah pembayaran (decimal)
 *   - status               : Status transaksi internal (pending, paid, expired, failed, cancelled, refunded)
 *   - metode_pembayaran    : Channel pembayaran (gopay, bank_transfer, qris, credit_card, dll)
 *   - snap_token           : Token transaksi Snap dari Midtrans
 *   - snap_redirect_url   : URL redirect Snap dari Midtrans
 *   - paid_at              : Tanggal & waktu pelunasan
 *   - payload_midtrans     : Log JSON respon webhook dari Midtrans
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaksi', function (Blueprint $table) {
            $table->id();
            $table->string('order_id')->unique();
            $table->string('invoice_number')->unique();
            $table->foreignId('pengguna_id')->constrained('pengguna')->cascadeOnDelete();
            $table->foreignId('paket_harga_id')->constrained('paket_harga')->cascadeOnDelete();
            $table->decimal('nominal', 12, 2);
            $table->string('status')->default('pending'); // pending, paid, expired, failed, cancelled, refunded
            $table->string('metode_pembayaran')->nullable();
            $table->text('snap_token')->nullable();
            $table->text('snap_redirect_url')->nullable();
            $table->timestamp('paid_at')->nullable();
            $table->json('payload_midtrans')->nullable();
            $table->timestamps();

            $table->index(['pengguna_id', 'status']);
            $table->index(['status', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaksi');
    }
};
