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
*/

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*')->middleware('maintenance');
