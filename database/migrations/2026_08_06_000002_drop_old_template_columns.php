<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('templates', function (Blueprint $table) {
            $table->dropColumn(['preview_data', 'schema', 'default_content', 'is_active', 'usage_count']);
        });
    }

    public function down(): void
    {
        Schema::table('templates', function (Blueprint $table) {
            $table->json('preview_data')->nullable()->after('thumbnail');
            $table->json('schema')->nullable()->after('preview_data');
            $table->json('default_content')->nullable()->after('schema');
            $table->boolean('is_active')->default(true)->after('default_content');
            $table->unsignedInteger('usage_count')->default(0)->after('is_active');
        });
    }
};
