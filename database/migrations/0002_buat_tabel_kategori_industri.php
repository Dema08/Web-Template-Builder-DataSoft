<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel kategori_industri (categories)
 *
 * 10 sektor industri yang sudah ada. Kolom deskripsi/ikon/warna
 * sengaja dihilangkan karena tidak digunakan oleh aplikasi.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('kategori_industri', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index(['is_active', 'sort_order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kategori_industri');
    }
};
