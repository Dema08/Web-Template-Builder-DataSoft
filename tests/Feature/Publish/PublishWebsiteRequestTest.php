<?php

use App\Domains\Publish\Http\Requests\PublishWebsiteRequest;
use App\Domains\User\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;

beforeEach(function (): void {
    Schema::dropIfExists('website');
    Schema::create('website', function (Blueprint $table): void {
        $table->id();
        $table->unsignedBigInteger('user_id');
        $table->string('slug')->unique();
    });
});

function publishWebsiteValidator(array $data, int $userId): \Illuminate\Contracts\Validation\Validator
{
    $user = new User();
    $user->id = $userId;

    $request = PublishWebsiteRequest::create('/api/v1/website/publish', 'POST', $data);
    $request->setUserResolver(fn () => $user);

    return Validator::make($request->all(), $request->rules(), $request->messages());
}

it('requires a website id when publishing', function () {
    $validator = publishWebsiteValidator([
        'slug' => 'first-site',
        'domain_type' => 'subdomain',
    ], 10);

    expect($validator->fails())->toBeTrue()
        ->and($validator->errors()->has('website_id'))->toBeTrue();
});

it('rejects publishing a website owned by another user', function () {
    $websiteId = DB::table('website')->insertGetId([
        'user_id' => 20,
        'slug' => 'other-site',
    ]);

    $validator = publishWebsiteValidator([
        'website_id' => $websiteId,
        'slug' => 'other-site',
        'domain_type' => 'subdomain',
    ], 10);

    expect($validator->fails())->toBeTrue()
        ->and($validator->errors()->has('website_id'))->toBeTrue();
});

it('allows the owner to republish the selected website without conflicting with its slug', function () {
    $websiteId = DB::table('website')->insertGetId([
        'user_id' => 10,
        'slug' => 'my-site',
    ]);

    $validator = publishWebsiteValidator([
        'website_id' => $websiteId,
        'slug' => 'my-site',
        'domain_type' => 'subdomain',
    ], 10);

    expect($validator->passes())->toBeTrue();
});

it('does not allow a new website to reuse the source website slug', function () {
    $websiteId = DB::table('website')->insertGetId([
        'user_id' => 10,
        'slug' => 'my-site',
    ]);

    $validator = publishWebsiteValidator([
        'website_id' => $websiteId,
        'publish_action' => 'new',
        'slug' => 'my-site',
        'domain_type' => 'subdomain',
    ], 10);

    expect($validator->fails())->toBeTrue()
        ->and($validator->errors()->has('slug'))->toBeTrue();
});
