<?php
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

// Fix logo_path to use storage-relative path so Storage::url() works correctly
App\Domains\System\Models\Setting::where('key', 'logo_path')
    ->update(['value' => 'settings/microdata-emblem.png']);

echo "Fixed! logo_path = settings/microdata-emblem.png\n";

// Verify
$val = App\Domains\System\Models\Setting::where('key', 'logo_path')->value('value');
echo "DB value: " . $val . "\n";

$url = Illuminate\Support\Facades\Storage::url($val);
echo "Storage URL: " . $url . "\n";
