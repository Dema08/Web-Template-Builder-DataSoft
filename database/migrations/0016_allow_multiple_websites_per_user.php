<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('website', function (Blueprint $table) {
            $table->index('user_id', 'website_user_id_index');
        });

        Schema::table('website', function (Blueprint $table) {
            $table->dropUnique('website_user_id_unique');
        });
    }

    public function down(): void
    {
        Schema::table('website', function (Blueprint $table) {
            $table->unique('user_id', 'website_user_id_unique');
        });

        Schema::table('website', function (Blueprint $table) {
            $table->dropIndex('website_user_id_index');
        });
    }
};
