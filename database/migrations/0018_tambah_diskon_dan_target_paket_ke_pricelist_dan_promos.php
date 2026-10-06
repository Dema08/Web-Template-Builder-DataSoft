<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('paket_harga') && !Schema::hasColumn('paket_harga', 'diskon_persen')) {
            Schema::table('paket_harga', function (Blueprint $table) {
                $table->integer('diskon_persen')->default(0)->after('harga');
            });
        }

        if (Schema::hasTable('promo_codes') && !Schema::hasColumn('promo_codes', 'applicable_plans')) {
            Schema::table('promo_codes', function (Blueprint $table) {
                $table->json('applicable_plans')->nullable()->after('discount_value');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('paket_harga') && Schema::hasColumn('paket_harga', 'diskon_persen')) {
            Schema::table('paket_harga', function (Blueprint $table) {
                $table->dropColumn('diskon_persen');
            });
        }

        if (Schema::hasTable('promo_codes') && Schema::hasColumn('promo_codes', 'applicable_plans')) {
            Schema::table('promo_codes', function (Blueprint $table) {
                $table->dropColumn('applicable_plans');
            });
        }
    }
};
