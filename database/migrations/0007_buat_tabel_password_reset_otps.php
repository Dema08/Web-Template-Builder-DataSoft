<?php

use App\Domains\User\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel password_reset_otps
 *
 * Menyimpan one-time password (OTP) reset kata sandi berbasis email.
 * Tabel keamanan; nama tetap `password_reset_otps` agar alur
 * AuthController (forgot/verify/reset) tetap kompatibel.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('password_reset_otps', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->constrained('pengguna')->cascadeOnDelete();
            $table->string('email');
            $table->string('otp_code', 6);
            $table->timestamp('expires_at');
            $table->timestamp('used_at')->nullable();
            $table->timestamps();

            $table->index(['email', 'otp_code']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('password_reset_otps');
    }
};
