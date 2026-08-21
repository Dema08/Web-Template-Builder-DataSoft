<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel pengguna (users)
 *
 * Menyimpan akun pengguna aplikasi. Kolom bawaan Laravel
 * (id, email, password, email_verified_at, remember_token, timestamps)
 * dipertahankan agar autentikasi, Sanctum, dan hashing tetap berfungsi.
 *
 * Kolom bisnis kustom:
 *   - peran     : enum admin|user (dulu `role`)
 *   - disetujui : status persetujuan akun (dulu `is_approved`)
 *   - avatar    : path relatif ke storage (bukan base64)
 *
 * Catatan: kolom `level` (legacy) sengaja dihilangkan karena tidak
 * digunakan oleh kode mana pun (hanya ada di seeder mati).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pengguna', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('avatar')->nullable();
            $table->enum('peran', ['admin', 'user'])->default('user');
            $table->boolean('disetujui')->default(true);
            $table->rememberToken();
            $table->timestamps();
        });

        // Tabel bawaan Laravel untuk reset kata sandi (broker `users`).
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        // Tabel bawaan Laravel untuk sesi web.
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('pengguna');
    }
};
