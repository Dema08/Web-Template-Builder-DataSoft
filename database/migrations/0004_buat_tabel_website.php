<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel website (websites)
 *
 * Satu pengguna hanya memiliki satu website (unique pada pengguna_id).
 * Slug website unik. Menyimpan draft/published JSON dan metadata
 * tampilan (favicon, logo). Tidak menyimpan file gambar di database.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('website', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('pengguna')->cascadeOnDelete();
            $table->foreignId('category_id')->constrained('kategori_industri')->cascadeOnDelete();
            $table->foreignId('template_id')->constrained('template')->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('status')->default('draft');
            $table->json('draft_json')->nullable();
            $table->json('published_json')->nullable();
            $table->json('settings')->nullable();
            $table->string('favicon')->nullable();
            $table->string('logo')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->timestamps();

            $table->unique('user_id');
            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('website');
    }
};
