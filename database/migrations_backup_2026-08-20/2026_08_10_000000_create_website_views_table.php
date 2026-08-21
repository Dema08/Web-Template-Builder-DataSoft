<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('website_views', function (Blueprint $table) {
            $table->id();
            $table->foreignId('website_id')->constrained()->cascadeOnDelete();
            $table->string('ip_address', 45)->nullable();
            $table->string('user_agent')->nullable();
            $table->timestamps();

            $table->index(['website_id', 'created_at']);
        });

        // Add softDeletes column to templates table as it is used by the Template model
        if (!Schema::hasColumn('templates', 'deleted_at')) {
            Schema::table('templates', function (Blueprint $table) {
                $table->softDeletes();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('website_views');

        if (Schema::hasColumn('templates', 'deleted_at')) {
            Schema::table('templates', function (Blueprint $table) {
                $table->dropSoftDeletes();
            });
        }
    }
};
