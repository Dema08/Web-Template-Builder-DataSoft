<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('settings')->where('key', 'logo_url')->update(['key' => 'logo_path']);
    }

    public function down(): void
    {
        DB::table('settings')->where('key', 'logo_path')->update(['key' => 'logo_url']);
    }
};
