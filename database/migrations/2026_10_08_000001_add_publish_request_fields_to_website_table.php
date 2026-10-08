<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('website', function (Blueprint $table) {
            if (!Schema::hasColumn('website', 'requested_at')) {
                $table->timestamp('requested_at')->nullable()->after('published_at');
            }
            if (!Schema::hasColumn('website', 'rejection_reason')) {
                $table->text('rejection_reason')->nullable()->after('requested_at');
            }
            if (!Schema::hasColumn('website', 'approved_at')) {
                $table->timestamp('approved_at')->nullable()->after('rejection_reason');
            }
            if (!Schema::hasColumn('website', 'approved_by')) {
                $table->foreignId('approved_by')->nullable()->after('approved_at')->constrained('pengguna')->nullOnDelete();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('website', function (Blueprint $table) {
            if (Schema::hasColumn('website', 'approved_by')) {
                $table->dropForeign(['approved_by']);
                $table->dropColumn('approved_by');
            }
            if (Schema::hasColumn('website', 'approved_at')) {
                $table->dropColumn('approved_at');
            }
            if (Schema::hasColumn('website', 'rejection_reason')) {
                $table->dropColumn('rejection_reason');
            }
            if (Schema::hasColumn('website', 'requested_at')) {
                $table->dropColumn('requested_at');
            }
        });
    }
};
