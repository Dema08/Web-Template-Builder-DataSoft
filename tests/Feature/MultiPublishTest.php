<?php

use App\Domains\Publish\Http\Controllers\PublicSiteController;
use App\Domains\Publish\Http\Requests\PublishWebsiteRequest;
use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use App\Domains\Website\Http\Controllers\WebsiteController;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Cache;

beforeEach(function (): void {
    Schema::dropIfExists('website');
    Schema::dropIfExists('website_view');
    Schema::dropIfExists('subscriptions');
    Schema::dropIfExists('paket_harga');
    Schema::dropIfExists('pengaturan');

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
        $table->string('nama');
        $table->integer('maks_domain');
        $table->boolean('bisa_custom_domain')->default(false);
        $table->boolean('is_default')->default(false);
    });

    Schema::create('pengaturan', function (Blueprint $table): void {
        $table->id();
        $table->string('key')->unique();
        $table->text('value')->nullable();
        $table->string('type')->default('string');
        $table->string('group')->default('general');
        $table->timestamps();
    });

    DB::table('paket_harga')->insert([
        'id' => 1,
        'slug' => 'unlimited-test',
        'nama' => 'Unlimited Test',
        'maks_domain' => -1,
        'bisa_custom_domain' => true,
        'is_default' => true,
    ]);
    Cache::flush();
});

function publishTestRequest(User $user, int $websiteId, string $slug): PublishWebsiteRequest
{
    $request = PublishWebsiteRequest::create('/api/v1/website/publish', 'POST', [
        'website_id' => $websiteId,
        'slug' => $slug,
        'domain_type' => 'subdomain',
    ]);
    $request->setContainer(app());
    $request->setRedirector(app(Redirector::class));
    $request->setUserResolver(fn () => $user);
    $request->validateResolved();

    return $request;
}

it('publishes multiple selected websites without replacing previous publishes', function () {
    $user = new User();
    $user->id = 10;
    $user->name = 'Test User';
    $user->email = 'test@example.test';
    $user->peran = UserRole::User;
    $user->paket_harga_id = 1;

    $websiteIds = [];
    foreach (['tokoku', 'jasaweb', 'portofolio'] as $slug) {
        $websiteIds[$slug] = DB::table('website')->insertGetId([
            'user_id' => $user->id,
            'name' => $slug,
            'slug' => $slug,
            'status' => 'draft',
            'draft_json' => json_encode(['sections' => []]),
            'settings' => json_encode([]),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    $controller = app(WebsiteController::class);
    foreach ($websiteIds as $slug => $websiteId) {
        $response = $controller->publish(publishTestRequest($user, $websiteId, $slug));
        expect($response->getStatusCode())->toBe(200);
    }

    $publishedSites = DB::table('website')
        ->where('user_id', $user->id)
        ->where('status', 'published')
        ->orderBy('slug')
        ->pluck('slug')
        ->all();

    expect($publishedSites)->toBe(['jasaweb', 'portofolio', 'tokoku']);

    foreach ($websiteIds as $slug => $websiteId) {
        $publicRequest = Request::create('/api/v1/public/site?slug='.$slug, 'GET');
        $publicResponse = app(PublicSiteController::class)->show($publicRequest);
        expect($publicResponse->getStatusCode())->toBe(200)
            ->and(DB::table('website')->where('id', $websiteId)->value('status'))->toBe('published');

        $this->withoutVite()->get('/p/'.$slug)->assertOk();
    }
});
