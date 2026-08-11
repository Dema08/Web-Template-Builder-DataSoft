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

Route::get('/{any?}', fn () => view('welcome'))->where('any', '.*');


