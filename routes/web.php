<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes — React SPA Entry Point & Storage Asset Streaming
|--------------------------------------------------------------------------
|
| Serve uploaded storage files (avatars, logos, thumbnails) dynamically
| from storage/app/public, supporting servers without symlink permissions.
|
*/

Route::get('/storage/{path}', function (string $path) {
    $filePath = storage_path('app/public/' . ltrim($path, '/'));
    if (!file_exists($filePath) || is_dir($filePath)) {
        abort(404);
    }
    $mimeType = mime_content_type($filePath) ?: 'application/octet-stream';
    return response()->file($filePath, [
        'Content-Type' => $mimeType,
        'Cache-Control' => 'public, max-age=86400',
    ]);
})->where('path', '.*');

Route::get('/{any?}', fn () => view('welcome'))->where('any', '.*');
Route::post('/login', fn () => redirect('/login'));
