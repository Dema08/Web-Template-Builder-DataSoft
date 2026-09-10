<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel user_template_usage (riwayat penggunaan starter template oleh pengguna)
 *
 * Menyimpan pencatatan penggunaan starter template oleh pengguna:
 *   - pengguna_id : ID pengguna (foreign key)
 *   - template_id : ID template (foreign key)
 *   - created_at  : Waktu template pertama kali digunakan/dimuat ke workspace
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_template_usage', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pengguna_id')->constrained('pengguna')->cascadeOnDelete();
            $table->foreignId('template_id')->constrained('template')->cascadeOnDelete();
            $table->timestamps();

            // Memastikan 1 pengguna dengan template yang sama hanya dicatat 1 kali secara unik
            $table->unique(['pengguna_id', 'template_id']);
            $table->index('pengguna_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_template_usage');
    }
};
