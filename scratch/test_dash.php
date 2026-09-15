<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$user = App\Domains\User\Models\User::where('peran', 'admin')->first() ?? App\Domains\User\Models\User::first();
echo "User ID: {$user->id}, Email: {$user->email}, Peran: " . json_encode($user->peran) . "\n";
echo "Is Admin: " . ($user->isAdmin() ? 'YES' : 'NO') . "\n";

$service = app(App\Domains\Admin\Services\DashboardService::class);
$payload = $service->getDashboardPayload($user);

echo "STATS:\n";
print_r($payload['stats'] ?? $payload);
