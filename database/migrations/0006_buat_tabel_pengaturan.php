<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel pengaturan (settings)
 *
 * Key-value system & brand settings. `key` unik agar update tidak
 * menciptakan baris duplikat (idempoten via updateOrCreate).
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pengaturan', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->mediumText('value')->nullable();
            $table->string('type')->default('string'); // string, boolean, integer, json
            $table->string('group')->default('general'); // general, brand, system
            $table->timestamps();

            $table->index(['group', 'key']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pengaturan');
    }
};
