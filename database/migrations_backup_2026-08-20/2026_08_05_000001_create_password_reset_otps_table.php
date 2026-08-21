<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('password_reset_otps', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Domains\User\Models\User::class)->constrained()->cascadeOnDelete();
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
