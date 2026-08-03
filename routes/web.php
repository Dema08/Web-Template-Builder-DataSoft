<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Enjoy building!
|
*/

// The React SPA handles all web routing.
// Any unknown path falls through to the root Blade view which
// mounts the React application.
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
