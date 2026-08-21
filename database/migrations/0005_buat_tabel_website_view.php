<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel website_view (website_views)
 *
 * Pencatatan kunjungan per website untuk dasbor analitik.
 * Hanya menyimpan metadata (ip, user_agent), bukan konten.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('website_view', function (Blueprint $table) {
            $table->id();
            $table->foreignId('website_id')->constrained('website')->cascadeOnDelete();
            $table->string('ip_address', 45)->nullable();
            $table->string('user_agent')->nullable();
            $table->timestamps();

            $table->index(['website_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('website_view');
    }
};
