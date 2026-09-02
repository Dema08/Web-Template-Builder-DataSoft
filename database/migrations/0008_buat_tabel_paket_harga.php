<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel paket_harga (pricelists)
 *
 * Menyimpan konfigurasi paket harga / langganan pengguna:
 *   - slug                  : unik (free, harga-1, harga-2, harga-3, dll)
 *   - nama                  : nama paket harga
 *   - harga                 : nominal harga (0 untuk Free)
 *   - periode               : periode langganan (bulan, tahun, selamanya)
 *   - maks_domain           : jumlah batas custom domain (0 = subdomain saja, >0 = limit domain, -1 = unlimited)
 *   - maks_starter_template : jumlah batas starter template (0 = blank template saja, >0 = limit, -1 = unlimited)
 *   - bisa_upload_website   : boolean izin upload website kustom
 *   - bisa_custom_domain    : boolean izin hubungkan custom domain
 *   - fitur                 : array JSON deskripsi fitur paket
 *   - is_active             : status aktif paket
 *   - is_default            : penanda paket default untuk pendaftaran baru
 *   - urutan                : urutan prioritas tampilan
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('paket_harga', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('nama');
            $table->decimal('harga', 12, 2)->default(0);
            $table->string('periode')->default('bulan');
            $table->integer('maks_domain')->default(0);
            $table->integer('maks_starter_template')->default(0);
            $table->boolean('bisa_upload_website')->default(false);
            $table->boolean('bisa_custom_domain')->default(false);
            $table->json('fitur')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_default')->default(false);
            $table->integer('urutan')->default(0);
            $table->timestamps();

            $table->index(['is_active', 'urutan']);
        });

        // Tambahkan kolom paket_harga_id pada tabel pengguna
        Schema::table('pengguna', function (Blueprint $table) {
            $table->foreignId('paket_harga_id')
                ->nullable()
                ->after('disetujui')
                ->constrained('paket_harga')
                ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('pengguna', function (Blueprint $table) {
            $table->dropForeign(['paket_harga_id']);
            $table->dropColumn('paket_harga_id');
        });

        Schema::dropIfExists('paket_harga');
    }
};
