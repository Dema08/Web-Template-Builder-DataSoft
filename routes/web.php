<?php

use App\Domains\Publish\Http\Controllers\PublicSiteController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes — React SPA Entry Point & Storage Asset Streaming
|--------------------------------------------------------------------------
|
| Serve public storage files dynamically for servers without symlink support,
| route published sites before the SPA catch-all, and serve the React app.
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

/*
|--------------------------------------------------------------------------
| Internal queue worker (dipicu GitHub Actions cron, tanpa SSH/IT)
|--------------------------------------------------------------------------
| GET /internal/queue-worker?token=DEPLOY_TOKEN
| Menjalankan queue:work --stop-when-empty max 55 detik agar job
| OptimizeVideoJob tidak nyangkut di tabel jobs.
*/
Route::get('/internal/queue-worker', function (\Illuminate\Http\Request $request) {
    $token = (string) (config('app.deploy_token') ?? env('DEPLOY_TOKEN', ''));
    $provided = (string) $request->query('token', '');
    if ($token === '' || ! hash_equals($token, $provided)) {
        abort(403);
    }

    $exit = Artisan::call('queue:work', [
        '--stop-when-empty' => true,
        '--max-time' => 55,
        '--tries' => 1,
    ]);

    // Ringkasan singkat: kelihatan di log GitHub Actions cron -> tahu apakah
    // video dikompresi (ffmpeg ada) atau hanya dicopy (ffmpeg tidak ada).
    $ffmpeg = \App\Domains\Shared\Helpers\Ffmpeg::ffmpeg();
    $summary = sprintf(
        "queue worker: exit=%d, ffmpeg=%s\n",
        $exit,
        $ffmpeg ?: 'NOT FOUND (video dicopy tanpa kompresi)'
    );

    return response($summary.(string) (Artisan::output() ?: ''))->header('Content-Type', 'text/plain');
})->middleware('throttle:60,1');

Route::get('/p/{slug}', [PublicSiteController::class, 'showBySlug'])->name('site.show');
Route::get('/{any?}', fn () => view('welcome'))->where('any', '.*');
Route::post('/login', fn () => redirect('/login'));
