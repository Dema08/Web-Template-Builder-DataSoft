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
| Maintenance middleware is applied to general public routes only.
| Admin routes and the login page always bypass maintenance so that
| administrators can access the React SPA at any time.
|
*/

// Public landing page — always accessible
Route::get('/', fn () => view('welcome'));

// Admin panel routes — always accessible (admin bypasses maintenance in the SPA)
Route::get('/admin', fn () => view('welcome'));
Route::get('/admin/{any}', fn () => view('welcome'))->where('any', '.*');

// Login / auth pages — must always be accessible so admins can sign in
Route::get('/login', fn () => view('welcome'));
Route::get('/register', fn () => view('welcome'));
Route::get('/forgot-password', fn () => view('welcome'));
Route::get('/verify-otp', fn () => view('welcome'));
Route::get('/reset-password', fn () => view('welcome'));

// All remaining web routes go through maintenance check
Route::get('/{any?}', fn () => view('welcome'))->where('any', '.*')->middleware('maintenance');

