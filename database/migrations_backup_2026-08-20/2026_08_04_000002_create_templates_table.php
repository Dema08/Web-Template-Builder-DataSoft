<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('templates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('thumbnail')->nullable();
            $table->json('preview_data')->nullable();
            $table->json('schema'); // Section-component schema for the builder
            $table->json('default_content')->nullable(); // Default draft JSON content
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('usage_count')->default(0);
            $table->timestamps();

            $table->index(['category_id', 'is_active', 'sort_order']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('templates');
    }
};
