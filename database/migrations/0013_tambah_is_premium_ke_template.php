<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tambah kolom is_premium pada tabel template.
 *
 * Pemetaan ke spesifikasi:
 *   - is_premium (boolean) : penanda template PRO/Berbayar.
 *   - is_published TIDAK dibuat sebagai kolom terpisah karena status
 *     publikasi sudah diwakili kolom `status` (draft/published/archived/disabled).
 *     Resource mengekspos `is_published` sebagai turunan: status === 'published'.
 *   - subscription_plans  -> dipakai ulang tabel `paket_harga`
 *     (kolom batas = `maks_starter_template`: 0=free/blank-only, >0=kuota, -1=unlimited).
 *   - user_subscriptions  -> dipakai ulang tabel `subscriptions`.
 *   - user_template_activations -> dipakai ulang tabel `user_template_usage`
 *     (1 baris = 1 template premium yang sedang dipilih/digunakan user Starter).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('template', function (Blueprint $table) {
            if (!Schema::hasColumn('template', 'is_premium')) {
                $table->boolean('is_premium')->default(false)->after('is_featured');
            }
        });
    }

    public function down(): void
    {
        Schema::table('template', function (Blueprint $table) {
            if (Schema::hasColumn('template', 'is_premium')) {
                $table->dropColumn('is_premium');
            }
        });
    }
};
