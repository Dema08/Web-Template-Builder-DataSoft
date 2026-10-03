<?php

use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use App\Domains\Website\Http\Controllers\WebsiteController;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function (): void {
    Schema::dropIfExists('website');
    Schema::dropIfExists('subscriptions');
    Schema::dropIfExists('paket_harga');

    Schema::create('website', function (Blueprint $table): void {
        $table->id();
        $table->unsignedBigInteger('user_id');
        $table->unsignedBigInteger('category_id')->nullable();
        $table->unsignedBigInteger('template_id')->nullable();
        $table->string('name');
        $table->string('slug')->unique();
        $table->string('status')->default('draft');
        $table->json('draft_json')->nullable();
        $table->json('published_json')->nullable();
        $table->json('settings')->nullable();
        $table->string('favicon')->nullable();
        $table->string('logo')->nullable();
        $table->timestamp('published_at')->nullable();
        $table->timestamps();
    });

    Schema::create('subscriptions', function (Blueprint $table): void {
        $table->id();
        $table->unsignedBigInteger('pengguna_id');
        $table->unsignedBigInteger('paket_harga_id')->nullable();
        $table->unsignedBigInteger('transaction_id')->nullable();
        $table->string('status');
        $table->timestamp('started_at')->nullable();
        $table->timestamp('expired_at')->nullable();
        $table->boolean('auto_renew')->default(false);
        $table->timestamps();
    });

    Schema::create('paket_harga', function (Blueprint $table): void {
        $table->id();
        $table->string('slug');
        $table->boolean('is_default')->default(false);
    });
});

it('returns only the authenticated user published websites ordered by publish date', function () {
    $user = new User();
    $user->id = 10;
    $user->peran = UserRole::User;

    DB::table('website')->insert([
        'user_id' => 20,
        'name' => 'Other Published',
        'slug' => 'other-published',
        'status' => 'published',
        'published_at' => '2026-10-03 10:00:00',
    ]);
    DB::table('website')->insert([
        'user_id' => 10,
        'name' => 'My Draft',
        'slug' => 'my-draft',
        'status' => 'draft',
    ]);
    $olderPublishedId = DB::table('website')->insertGetId([
        'user_id' => 10,
        'name' => 'My Older Published',
        'slug' => 'my-older-published',
        'status' => 'published',
        'published_at' => '2026-10-02 10:00:00',
    ]);
    $newerPublishedId = DB::table('website')->insertGetId([
        'user_id' => 10,
        'name' => 'My Newer Published',
        'slug' => 'my-newer-published',
        'status' => 'published',
        'published_at' => '2026-10-04 10:00:00',
    ]);

    $request = Request::create('/api/v1/website/list', 'GET');
    $request->setUserResolver(fn () => $user);
    $response = app(WebsiteController::class)->index($request);
    $payload = $response->getData(true);

    expect(array_column($payload['data'], 'id'))
        ->toBe([$newerPublishedId, $olderPublishedId]);
});
