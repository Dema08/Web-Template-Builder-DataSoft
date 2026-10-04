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

function publishTestRequest(
    User $user,
    int $websiteId,
    string $slug,
    string $publishAction = 'update',
    ?array $draftJson = null
): PublishWebsiteRequest
{
    $payload = [
        'website_id' => $websiteId,
        'slug' => $slug,
        'domain_type' => 'subdomain',
        'publish_action' => $publishAction,
    ];
    if ($draftJson !== null) {
        $payload['draft_json'] = $draftJson;
    }

    $request = PublishWebsiteRequest::create('/api/v1/website/publish', 'POST', $payload);
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
            'draft_json' => json_encode([
                'sections' => [],
                'pages' => $slug === 'tokoku'
                    ? ['about' => ['id' => 'about', 'name' => 'About', 'slug' => 'about', 'sections' => []]]
                    : [],
            ]),
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
        if ($slug === 'tokoku') {
            expect($publicResponse->getData(true)['data']['pages'])
                ->toHaveKey('about');
        }

        $this->withoutVite()->get('/p/'.$slug)->assertOk();
    }
});

it('creates a separate published website from the edited draft without changing the existing published website', function () {
    $user = new User();
    $user->id = 10;
    $user->name = 'Test User';
    $user->email = 'test@example.test';
    $user->peran = UserRole::User;
    $user->paket_harga_id = 1;

    $websiteId = DB::table('website')->insertGetId([
        'user_id' => $user->id,
        'name' => 'Original Website',
        'slug' => 'original-website',
        'status' => 'published',
        'draft_json' => json_encode(['sections' => [['id' => 'latest-draft']]]),
        'published_json' => json_encode(['sections' => [['id' => 'previous-version']]]),
        'settings' => json_encode(['domain_type' => 'subdomain']),
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $response = app(WebsiteController::class)->publish(
        publishTestRequest(
            $user,
            $websiteId,
            'new-website-copy',
            'new',
            ['sections' => [[
                'id' => 'latest-canvas-snapshot',
                'customTexts' => ['t_4_Original' => 'Updated Company Name'],
                'background' => ['type' => 'color', 'color' => ['hex' => '#123456']],
                'components' => [[
                    'id' => 'company-heading',
                    'type' => 'heading',
                    'props' => ['content' => 'Updated Heading', 'fontSize' => '42px'],
                ]],
            ]]]
        )
    );
    $payload = $response->getData(true);
    $newWebsite = DB::table('website')->where('slug', 'new-website-copy')->first();
    $originalWebsite = DB::table('website')->where('id', $websiteId)->first();

    expect($response->getStatusCode())->toBe(200)
        ->and($newWebsite)->not->toBeNull()
        ->and($newWebsite->status)->toBe('published')
        ->and(json_decode($newWebsite->published_json, true)['sections'][0]['id'])->toBe('latest-canvas-snapshot')
        ->and(json_decode($newWebsite->published_json, true)['sections'][0]['customTexts']['t_4_Original'])->toBe('Updated Company Name')
        ->and(json_decode($newWebsite->published_json, true)['sections'][0]['background']['color']['hex'])->toBe('#123456')
        ->and(json_decode($newWebsite->published_json, true)['sections'][0]['components'][0]['props']['content'])->toBe('Updated Heading')
        ->and($originalWebsite->slug)->toBe('original-website')
        ->and(json_decode($originalWebsite->published_json, true)['sections'][0]['id'])->toBe('previous-version')
        ->and($payload['data']['website']['id'])->toBe($newWebsite->id);

    DB::table('website')->where('id', $websiteId)->update([
        'draft_json' => json_encode(['sections' => [['id' => 'updated-existing']]]),
    ]);
    $updateResponse = app(WebsiteController::class)->publish(
        publishTestRequest(
            $user,
            $websiteId,
            'original-website',
            'update',
            ['sections' => [['id' => 'latest-update-snapshot']]]
        )
    );
    $updatedOriginal = DB::table('website')->where('id', $websiteId)->first();

    expect($updateResponse->getStatusCode())->toBe(200)
        ->and($updatedOriginal->slug)->toBe('original-website')
        ->and(json_decode($updatedOriginal->published_json, true)['sections'][0]['id'])->toBe('latest-update-snapshot')
        ->and(json_decode($updatedOriginal->draft_json, true)['sections'][0]['id'])->toBe('latest-update-snapshot')
        ->and(DB::table('website')->where('user_id', $user->id)->count())->toBe(2);
});
