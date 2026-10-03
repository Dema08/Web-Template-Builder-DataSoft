<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function (): void {
    Schema::create('website', function (Blueprint $table): void {
        $table->id();
        $table->string('slug');
        $table->string('status');
    });
});

it('caches the published website id instead of serializing the model', function () {
    $websiteId = DB::table('website')->insertGetId([
        'slug' => 'testv1',
        'status' => 'published',
    ]);

    $this->get('/p/testv1')->assertOk();

    expect(Cache::get('site:website-id:testv1'))->toBe($websiteId);
});
