<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tambah kolom visibility dan owner_id ke tabel template
 *
 * - visibility: 'private' | 'public' — kontrol siapa yang bisa melihat template buatan user
 *   - 'private' : hanya owner yang bisa melihat dan menggunakan
 *   - 'public'  : muncul di galeri semua user dan bisa digunakan siapapun
 *   - NULL (default untuk template lama/admin) — selalu muncul di galeri, diperlakukan sebagai public
 *
 * - owner_id: foreign key ke pengguna.id
 *   - NULL = template sistem/admin (bukan buatan user)
 *   - NOT NULL = template buatan user (user-generated template)
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('template', function (Blueprint $table) {
            // Visibilitas template: private atau public
            // Nullable agar template lama (admin) tidak terdampak dan tetap muncul di galeri
            $table->string('visibility', 10)->nullable()->default(null)->after('status');

            // Pemilik template (user yang membuat via builder)
            // NULL = template sistem/admin, NOT NULL = template user-generated
            $table->unsignedBigInteger('owner_id')->nullable()->after('visibility');

            $table->foreign('owner_id')->references('id')->on('pengguna')->nullOnDelete();

            $table->index(['owner_id', 'visibility']);
        });
    }

    public function down(): void
    {
        Schema::table('template', function (Blueprint $table) {
            $table->dropForeign(['owner_id']);
            $table->dropIndex(['owner_id', 'visibility']);
            $table->dropColumn(['visibility', 'owner_id']);
        });
    }
};
