<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Menambahkan kolom deskripsi dan is_popular ke tabel paket_harga.
 *
 * - deskripsi : kalimat singkat deskripsi paket (ditampilkan di landing page)
 * - is_popular: penanda paket "Most Popular" (highlight di carousel pricing)
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('paket_harga', function (Blueprint $table) {
            $table->text('deskripsi')->nullable()->after('harga');
            $table->boolean('is_popular')->default(false)->after('is_default');
        });
    }

    public function down(): void
    {
        Schema::table('paket_harga', function (Blueprint $table) {
            $table->dropColumn(['deskripsi', 'is_popular']);
        });
    }
};
