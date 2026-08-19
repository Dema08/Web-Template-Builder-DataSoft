<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes — React SPA Entry Point
|--------------------------------------------------------------------------
|
| All web routes fall through to the root Blade view (`welcome.blade.php`),
| which mounts the React Single Page Application (resources/js/app.jsx).
| All backend data interactions are handled via `/api/v1/*` (routes/api.php).
|
| Maintenance mode protection for data & API requests is enforced by
| the `maintenance` middleware on protected `/api/v1/*` routes. Non-admin
| users receive 503 JSON responses which the Axios interceptor handles by
| displaying a clean maintenance alert on the login screen.
|
*/

Route::get('/debug/templates', function () {
    $templates = \App\Domains\Template\Models\Template::select('id', 'name', 'thumbnail', 'preview_image', 'status')
        ->whereNotNull('thumbnail')
        ->limit(5)
        ->get();

    return response()->json([
        'count' => $templates->count(),
        'data' => $templates->map(function ($tpl) {
            return [
                'id' => $tpl->id,
                'name' => $tpl->name,
                'thumbnail_raw' => $tpl->thumbnail,
                'preview_image_raw' => $tpl->preview_image,
                'thumbnail_url_resource' => (new \App\Domains\Template\Resources\TemplateResource($tpl))->toArray(request())['thumbnail'] ?? null,
            ];
        }),
    ]);
});

Route::get('/{any?}', fn () => view('welcome'))->where('any', '.*');
Route::post('/login', fn () => redirect('/login'));


