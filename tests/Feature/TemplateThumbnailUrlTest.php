<?php

use App\Domains\Template\Models\Template;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Storage;

it('builds uploaded thumbnail URLs from the public disk configuration', function () {
    Config::set('filesystems.disks.public.url', 'https://web.example.test/uploads');
    Storage::forgetDisk('public');

    $template = new Template([
        'thumbnail' => 'templates/thumbnails/banner.png',
    ]);

    expect($template->thumbnail_url)
        ->toBe('https://web.example.test/uploads/templates/thumbnails/banner.png');
});

it('serves the default template banner from the public web root', function () {
    $template = new Template([
        'thumbnail' => '/images/default-template-banner.png',
    ]);

    expect($template->thumbnail_url)
        ->toBe(asset('images/default-template-banner.png'));
});
