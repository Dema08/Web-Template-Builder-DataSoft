<?php

use Illuminate\Support\Facades\Route;
use App\Domains\Template\Models\Template;

Route::get('/debug/templates', function () {
    $all = Template::withTrashed()->get();
    $repository = new \App\Domains\Template\Repositories\TemplateRepository();
    $filtered = $repository->getFiltered([], 50);

    return response()->json([
        'total_in_db' => $all->count(),
        'all_templates' => $all,
        'filtered_count' => $filtered->total(),
        'filtered_data' => $filtered,
    ]);
});