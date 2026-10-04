<?php

use App\Domains\Template\Models\TemplateUsage;
use App\Domains\Template\Models\Template;
use App\Domains\Template\Services\TemplateAccessService;
use App\Domains\User\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

beforeEach(function (): void {
    Schema::create('template', function (Blueprint $table): void {
        $table->id();
        $table->string('slug')->nullable();
        $table->string('name')->nullable();
        $table->string('code')->nullable();
        $table->boolean('is_premium')->default(false);
        $table->timestamp('deleted_at')->nullable();
    });

    Schema::create('user_template_usage', function (Blueprint $table): void {
        $table->id();
        $table->unsignedBigInteger('pengguna_id');
        $table->unsignedBigInteger('template_id');
        $table->timestamps();
    });
});

it('does not consume quota when a template is only applied in the builder', function () {
    $user = new User();
    $user->id = 7;
    $template = new Template([
        'name' => 'PRO Template',
        'slug' => 'pro-template',
        'is_premium' => true,
    ]);
    $template->id = 45;

    $service = Mockery::mock(TemplateAccessService::class)->makePartial();
    $service->shouldReceive('canUseTemplate')
        ->once()
        ->andReturn(['allowed' => true]);
    $service->shouldReceive('getQuotaStatus')
        ->once()
        ->andReturn(['used_count' => 0, 'used_template_ids' => []]);

    $service->applyTemplate($user, $template);

    expect(TemplateUsage::count())->toBe(0);
});

it('records a premium template only when a save action is finalized', function () {
    $user = new User();
    $user->id = 7;
    $template = new Template([
        'name' => 'PRO Template',
        'slug' => 'pro-template',
        'is_premium' => true,
    ]);
    $template->id = 45;

    $service = Mockery::mock(TemplateAccessService::class)->makePartial();
    $service->shouldReceive('canUseTemplate')
        ->once()
        ->andReturn(['allowed' => true]);
    $service->shouldReceive('getQuotaStatus')
        ->once()
        ->andReturn(['used_count' => 1, 'used_template_ids' => [45]]);

    $result = $service->recordTemplateUsage($user, $template);

    expect($result['recorded'])->toBeTrue()
        ->and($result['quota']['used_count'])->toBe(1)
        ->and(TemplateUsage::where('pengguna_id', 7)->where('template_id', 45)->exists())->toBeTrue();
});

it('never records free template usage', function () {
    $user = new User();
    $user->id = 7;
    $template = new Template([
        'name' => 'Free Template',
        'slug' => 'free-template',
        'is_premium' => false,
    ]);
    $template->id = 46;

    $service = Mockery::mock(TemplateAccessService::class)->makePartial();
    $service->shouldReceive('getQuotaStatus')
        ->once()
        ->andReturn(['used_count' => 0, 'used_template_ids' => []]);

    $result = $service->recordTemplateUsage($user, $template);

    expect($result['recorded'])->toBeFalse()
        ->and(TemplateUsage::count())->toBe(0);
});

it('removes a user template usage when the template has already been deleted', function () {
    TemplateUsage::create([
        'pengguna_id' => 7,
        'template_id' => 123,
    ]);

    $user = new User();
    $user->id = 7;

    $service = Mockery::mock(TemplateAccessService::class)->makePartial();
    $service->shouldReceive('getQuotaStatus')
        ->once()
        ->with($user)
        ->andReturn([
            'used_count' => 0,
            'used_template_ids' => [],
        ]);

    $result = $service->deactivateTemplate($user, 123);

    expect($result['deactivated'])->toBeTrue()
        ->and($result['quota']['used_count'])->toBe(0)
        ->and(TemplateUsage::where('pengguna_id', 7)->where('template_id', 123)->exists())->toBeFalse();
});
