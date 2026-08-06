<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('templates', function (Blueprint $table) {
            $table->string('code')->nullable()->after('id');
            $table->string('preview_image')->nullable()->after('thumbnail');
            $table->json('draft_json')->nullable()->after('preview_image');
            $table->json('published_json')->nullable()->after('draft_json');
            $table->string('version')->nullable()->after('published_json');
            $table->boolean('is_featured')->default(false)->after('version');
            $table->string('status')->default('draft')->after('is_featured');
            $table->unsignedBigInteger('created_by')->nullable()->after('status');
            $table->unsignedBigInteger('updated_by')->nullable()->after('created_by');

            $table->foreign('created_by')->references('id')->on('users')->nullOnDelete();
            $table->foreign('updated_by')->references('id')->on('users')->nullOnDelete();

            $table->index(['category_id', 'status', 'is_featured', 'sort_order']);
            $table->index('code');
            $table->index('slug');
        });
    }

    public function down(): void
    {
        Schema::table('templates', function (Blueprint $table) {
            $table->dropForeign(['created_by']);
            $table->dropForeign(['updated_by']);
            $table->dropColumn([
                'code',
                'preview_image',
                'draft_json',
                'published_json',
                'version',
                'is_featured',
                'status',
                'created_by',
                'updated_by',
            ]);
        });
    }
};
