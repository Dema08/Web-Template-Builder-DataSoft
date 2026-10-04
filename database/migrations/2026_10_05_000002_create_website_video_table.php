<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel website_video
 *
 * Background video di builder bersifat PER SECTION (section.background.video),
 * sedangkan sebelumnya file-nya ditulis ke satu kolom background_video_* di
 * tabel website. Akibatnya upload video di section kedua menimpa/menghapus
 * video section pertama.
 *
 * Tabel ini menyimpan satu baris per section (section_key = id section di
 * builder). section_key NULL = video level website (kompatibilitas client lama
 * yang belum mengirim section_id).
 */
return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('website_video')) {
            return;
        }

        Schema::create('website_video', function (Blueprint $table) {
            $table->id();
            $table->foreignId('website_id')->constrained('website')->cascadeOnDelete();
            $table->string('section_key')->nullable();
            $table->string('upload_id')->nullable();
            $table->string('path')->nullable();
            $table->string('poster')->nullable();
            $table->unsignedBigInteger('size')->nullable();
            $table->unsignedInteger('duration')->nullable();
            $table->string('format')->nullable();
            $table->string('status')->default('processing');
            $table->timestamps();

            $table->index(['website_id', 'section_key']);
            $table->index('upload_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('website_video');
    }
};
