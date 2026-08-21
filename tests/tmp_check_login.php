<?php

require __DIR__ . '/../vendor/autoload.php';

$app = require __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$user = App\Domains\User\Models\User::where('email', 'admin@datasoft.id')->first();

echo 'Found: ' . ($user ? 'YES' : 'NO') . PHP_EOL;
if ($user) {
    echo 'Hash check: ' . (Illuminate\Support\Facades\Hash::check('password123', $user->password) ? 'VALID' : 'INVALID') . PHP_EOL;
    echo 'Approved: ' . ($user->disetujui ? 'YES' : 'NO') . PHP_EOL;
    echo 'Role: ' . $user->peran . PHP_EOL;
}