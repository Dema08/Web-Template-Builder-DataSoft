<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel subscriptions (langganan pengguna)
 *
 * Menyimpan data dan periode aktif paket langganan pengguna:
 *   - pengguna_id    : ID pengguna (foreign key)
 *   - paket_harga_id : ID paket harga (foreign key)
 *   - transaction_id : ID transaksi pembayaran (foreign key, nullable)
 *   - status         : Status langganan (active, expired, cancelled)
 *   - started_at     : Tanggal mulai langganan
 *   - expired_at     : Tanggal berakhir langganan
 *   - auto_renew     : Boolean perpanjangan otomatis
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pengguna_id')->constrained('pengguna')->cascadeOnDelete();
            $table->foreignId('paket_harga_id')->constrained('paket_harga')->cascadeOnDelete();
            $table->foreignId('transaction_id')->nullable()->constrained('transaksi')->nullOnDelete();
            $table->string('status')->default('active'); // active, expired, cancelled
            $table->timestamp('started_at')->useCurrent();
            $table->timestamp('expired_at')->nullable();
            $table->boolean('auto_renew')->default(false);
            $table->timestamps();

            $table->index(['pengguna_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subscriptions');
    }
};
