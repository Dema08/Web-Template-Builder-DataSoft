<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel template (templates)
 *
 * Template website company profile milik sebuah kategori industri.
 * Mendukung draft/published JSON, versioning, fitur unggulan, dan
 * pelacakan pembuat/pembarui. Soft delete diaktifkan.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('template', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('kategori_industri')->cascadeOnDelete();
            $table->string('code')->nullable();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('preview_image')->nullable();
            $table->json('draft_json')->nullable();
            $table->json('published_json')->nullable();
            $table->string('version')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->string('status')->default('draft');
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('created_by')->references('id')->on('pengguna')->nullOnDelete();
            $table->foreign('updated_by')->references('id')->on('pengguna')->nullOnDelete();

            $table->index(['category_id', 'status', 'is_featured', 'sort_order']);
            $table->index('code');
            $table->index('slug');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('template');
    }
};
