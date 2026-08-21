<?php

require __DIR__ . '/../vendor/autoload.php';

$app = require __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use App\Domains\Auth\DTO\LoginDTO;
use App\Domains\Auth\Services\AuthService;

try {
    $dto = LoginDTO::fromArray(['email' => 'admin@datasoft.id', 'password' => 'password123', 'remember' => false]);
    $service = app(AuthService::class);
    $result = $service->login($dto);
    echo 'LOGIN SUCCESS' . PHP_EOL;
    echo 'Token: ' . substr($result['token'], 0, 20) . '...' . PHP_EOL;
} catch (Exception $e) {
    echo 'LOGIN FAILED: ' . get_class($e) . PHP_EOL;
    echo 'Message: ' . $e->getMessage() . PHP_EOL;
    echo 'File: ' . $e->getFile() . ':' . $e->getLine() . PHP_EOL;
}