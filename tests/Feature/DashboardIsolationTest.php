<?php

use App\Domains\Admin\Services\DashboardService;
use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

beforeEach(function (): void {
    Schema::dropIfExists('website_view');
    Schema::dropIfExists('website');
    Schema::dropIfExists('template');

    Schema::create('template', function (Blueprint $table): void {
        $table->id();
        $table->string('name');
        $table->timestamp('deleted_at')->nullable();
    });

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

    Schema::create('website_view', function (Blueprint $table): void {
        $table->id();
        $table->unsignedBigInteger('website_id');
        $table->string('ip_address')->nullable();
        $table->string('user_agent')->nullable();
        $table->timestamps();
    });

    DB::table('template')->insert(['id' => 1, 'name' => 'Test Template']);
    Cache::flush();
});

function dashboardTestUser(int $id): User
{
    $user = new User();
    $user->id = $id;
    $user->name = "User {$id}";
    $user->email = "user{$id}@example.test";
    $user->peran = UserRole::User;

    return $user;
}

function dashboardTestWebsite(int $userId, string $slug): int
{
    return DB::table('website')->insertGetId([
        'user_id' => $userId,
        'category_id' => null,
        'template_id' => 1,
        'name' => $slug,
        'slug' => $slug,
        'status' => 'published',
        'created_at' => now(),
        'updated_at' => now(),
    ]);
}

it('returns only the current user websites and their visitor analytics', function () {
    $userWebsiteOne = dashboardTestWebsite(10, 'user-one');
    $userWebsiteTwo = dashboardTestWebsite(10, 'user-two');
    $otherUserWebsite = dashboardTestWebsite(20, 'other-user');

    DB::table('website_view')->insert([
        ['website_id' => $userWebsiteOne, 'ip_address' => '192.0.2.10', 'created_at' => now(), 'updated_at' => now()],
        ['website_id' => $userWebsiteOne, 'ip_address' => '192.0.2.11', 'created_at' => now(), 'updated_at' => now()],
        ['website_id' => $otherUserWebsite, 'ip_address' => '198.51.100.20', 'created_at' => now(), 'updated_at' => now()],
    ]);

    app()->instance('request', Request::create('/api/v1/dashboard?range=7days', 'GET'));
    $service = app(DashboardService::class);

    $userDashboard = $service->getDashboardPayload(dashboardTestUser(10));
    $emptyUserDashboard = $service->getDashboardPayload(dashboardTestUser(30));

    expect(array_column($userDashboard['websites'], 'id'))
        ->toBe([$userWebsiteOne, $userWebsiteTwo])
        ->and($userDashboard['analytics']['total_views'])->toBe(2)
        ->and($userDashboard['analytics']['unique_visitors'])->toBe(2)
        ->and($emptyUserDashboard['websites'])->toBe([])
        ->and($emptyUserDashboard['analytics']['total_views'])->toBe(0)
        ->and($emptyUserDashboard['analytics']['unique_visitors'])->toBe(0);
});
