<?php

use Illuminate\Support\Facades\Route;
use App\Domains\Template\Models\Template;

Route::get('/debug/templates', function () {
    $templates = Template::select('id', 'name', 'thumbnail', 'preview_image', 'status')
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
            ];
        }),
    ]);
});