<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('website', function (Blueprint $table) {
            if (! Schema::hasColumn('website', 'background_video_path')) {
                $table->string('background_video_path')->nullable();
            }
            if (! Schema::hasColumn('website', 'background_video_poster')) {
                $table->string('background_video_poster')->nullable();
            }
            if (! Schema::hasColumn('website', 'background_video_size')) {
                $table->unsignedBigInteger('background_video_size')->nullable();
            }
            if (! Schema::hasColumn('website', 'background_video_duration')) {
                $table->unsignedInteger('background_video_duration')->nullable();
            }
            if (! Schema::hasColumn('website', 'background_video_format')) {
                $table->string('background_video_format')->nullable();
            }
        });
    }

    public function down(): void
    {
        Schema::table('website', function (Blueprint $table) {
            foreach ([
                'background_video_path',
                'background_video_poster',
                'background_video_size',
                'background_video_duration',
                'background_video_format',
            ] as $column) {
                if (Schema::hasColumn('website', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
