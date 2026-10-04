<?php

use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use App\Domains\Website\Http\Controllers\VideoUploadController;
use App\Domains\Website\Models\Website;
use App\Jobs\OptimizeVideoJob;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;

beforeEach(function (): void {
    Storage::fake('public');
    Storage::fake('local');

    Schema::dropIfExists('pengaturan');
    Schema::create('pengaturan', function ($table): void {
        $table->id();
        $table->string('key')->unique();
        $table->mediumText('value')->nullable();
        $table->string('type')->default('string');
        $table->string('group')->default('general');
        $table->timestamps();
    });
    DB::table('pengaturan')->insert([
        'key' => 'maintenance_mode',
        'value' => '0',
        'type' => 'boolean',
        'group' => 'system',
    ]);

    Schema::dropIfExists('website');
    Schema::create('website', function ($table): void {
        $table->id();
        $table->unsignedBigInteger('user_id');
        $table->unsignedBigInteger('category_id')->nullable();
        $table->unsignedBigInteger('template_id')->nullable();
        $table->string('name');
        $table->string('slug')->unique();
        $table->string('thumbnail_path')->nullable();
        $table->string('status')->default('draft');
        $table->json('draft_json')->nullable();
        $table->json('published_json')->nullable();
        $table->json('settings')->nullable();
        $table->string('favicon')->nullable();
        $table->string('logo')->nullable();
        $table->timestamp('published_at')->nullable();
        $table->string('background_video_path')->nullable();
        $table->string('background_video_poster')->nullable();
        $table->unsignedBigInteger('background_video_size')->nullable();
        $table->unsignedInteger('background_video_duration')->nullable();
        $table->string('background_video_format')->nullable();
        $table->timestamps();
    });

    Schema::dropIfExists('website_video');
    Schema::create('website_video', function ($table): void {
        $table->id();
        $table->foreignId('website_id')->constrained('website')->cascadeOnDelete();
        $table->string('section_key')->nullable();
        $table->string('upload_id')->nullable();
        $table->string('path')->nullable();
        $table->string('poster')->nullable();
        $table->unsignedBigInteger('size')->nullable();
        $table->unsignedInteger('duration')->nullable();
        $table->string('format')->nullable();
        $table->string('status')->default('processing');
        $table->timestamps();
    });

    if (! Schema::hasTable('pengguna')) {
        Schema::create('pengguna', function ($table): void {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('avatar')->nullable();
            $table->string('peran')->default('user');
            $table->boolean('disetujui')->default(true);
            $table->unsignedBigInteger('paket_harga_id')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }
});

function makeVideoUser(string $email): User
{
    $user = new User();
    $user->forceFill([
        'name' => 'Video User',
        'email' => $email,
        'password' => 'password',
        'peran' => UserRole::User,
        'disetujui' => true,
    ]);
    $user->save();

    return $user;
}

function makeVideoWebsite(int $userId, string $slug, array $attrs = []): Website
{
    $id = DB::table('website')->insertGetId(array_merge([
        'user_id' => $userId,
        'name' => 'Site '.$slug,
        'slug' => $slug,
        'status' => 'draft',
    ], $attrs));

    return Website::find($id);
}

it('returns null video urls when website has no background video', function () {
    $user = makeVideoUser('novideo@test.com');
    $website = makeVideoWebsite($user->id, 'no-video');

    $this->actingAs($user)
        ->getJson("/api/v1/website/{$website->id}/video/status")
        ->assertOk()
        ->assertJsonPath('data.video_url', null)
        ->assertJsonPath('data.processing', true);
});

it('deletes background video files and resets columns', function () {
    Storage::disk('public')->put('website-videos/1/v.mp4', 'x');
    Storage::disk('public')->put('website-videos/1/p.jpg', 'x');

    $user = makeVideoUser('owner@test.com');
    $website = makeVideoWebsite($user->id, 'with-video', [
        'background_video_path' => 'website-videos/1/v.mp4',
        'background_video_poster' => 'website-videos/1/p.jpg',
        'background_video_size' => 10,
        'background_video_duration' => 5,
        'background_video_format' => 'mp4',
    ]);

    $this->actingAs($user)
        ->deleteJson("/api/v1/website/{$website->id}/video")
        ->assertOk()
        ->assertJsonPath('success', true);

    expect($website->fresh()->background_video_path)->toBeNull();
    Storage::disk('public')->assertMissing('website-videos/1/v.mp4');
    Storage::disk('public')->assertMissing('website-videos/1/p.jpg');
});

it('forbids uploading to another user website', function () {
    $owner = makeVideoUser('owner2@test.com');
    $other = makeVideoUser('other@test.com');
    $website = makeVideoWebsite($owner->id, 'other-owner');

    $file = UploadedFile::fake()->create('v.mp4', 1000, 'video/mp4');

    $this->actingAs($other)
        ->postJson("/api/v1/website/{$website->id}/video/upload", [
            'file' => $file,
            'dzchunkindex' => 0,
            'dztotalchunkcount' => 1,
            'dzuuid' => 'abc123',
            'dztotalfilesize' => 1000,
        ])
        ->assertNotFound();
});

it('rejects non video format', function () {
    $user = makeVideoUser('pdf@test.com');
    $website = makeVideoWebsite($user->id, 'pdf-site');

    $file = UploadedFile::fake()->create('d.pdf', 100, 'application/pdf');

    $this->actingAs($user)
        ->postJson("/api/v1/website/{$website->id}/video/upload", [
            'file' => $file,
            'dzchunkindex' => 0,
            'dztotalchunkcount' => 1,
            'dzuuid' => 'pdf123',
            'dztotalfilesize' => 100,
        ])
        ->assertStatus(422);
});

it('merges chunks in order and queues the optimize job', function () {
    Queue::fake();

    $user = makeVideoUser('chunks@test.com');
    $website = makeVideoWebsite($user->id, 'chunk-site');

    $this->actingAs($user)
        ->postJson("/api/v1/website/{$website->id}/video/upload", [
            'file' => UploadedFile::fake()->createWithContent('v.mp4', 'AAA'),
            'dzchunkindex' => 0,
            'dztotalchunkcount' => 2,
            'dzuuid' => 'order1',
            'dztotalfilesize' => 6,
        ])
        ->assertOk()
        ->assertJsonPath('data.status', true);

    $this->actingAs($user)
        ->postJson("/api/v1/website/{$website->id}/video/upload", [
            'file' => UploadedFile::fake()->createWithContent('v.mp4', 'BBB'),
            'dzchunkindex' => 1,
            'dztotalchunkcount' => 2,
            'dzuuid' => 'order1',
            'dztotalfilesize' => 6,
        ])
        ->assertOk()
        ->assertJsonPath('data.processing', true);

    $tempFiles = Storage::disk('local')->files('videos/temp');
    expect($tempFiles)->toHaveCount(1)
        ->and(Storage::disk('local')->get($tempFiles[0]))->toBe('AAABBB');

    Storage::disk('local')->assertDirectoryEmpty('video-chunks/'.$website->id);

    Queue::assertPushed(OptimizeVideoJob::class, fn ($job) => $job->websiteId === $website->id);
});

it('rejects final chunk when a previous chunk is missing and cleans up', function () {
    Queue::fake();

    $user = makeVideoUser('gap@test.com');
    $website = makeVideoWebsite($user->id, 'gap-site');

    // Kirim chunk terakhir (index 1) tanpa chunk 0 -> urutan tidak lengkap.
    $this->actingAs($user)
        ->postJson("/api/v1/website/{$website->id}/video/upload", [
            'file' => UploadedFile::fake()->createWithContent('v.mp4', 'BBB'),
            'dzchunkindex' => 1,
            'dztotalchunkcount' => 2,
            'dzuuid' => 'gap1',
            'dztotalfilesize' => 6,
        ])
        ->assertStatus(422)
        ->assertJsonPath('success', false);

    expect(Storage::disk('local')->files('videos/temp'))->toBeEmpty();
    Storage::disk('local')->assertDirectoryEmpty('video-chunks/'.$website->id);

    Queue::assertNothingPushed();
});

it('optimizes uploaded temp video and fills website columns', function () {
    $user = makeVideoUser('job@test.com');
    $website = makeVideoWebsite($user->id, 'job-site');

    Storage::disk('local')->put('videos/temp/vid_'.$website->id.'_abc.mp4', str_repeat('VIDEO', 500));

    (new OptimizeVideoJob($website->id, 'videos/temp/vid_'.$website->id.'_abc.mp4'))->handle();

    $website->refresh();

    expect($website->background_video_path)->not->toBeNull()
        ->and($website->background_video_format)->toBe('mp4')
        ->and($website->background_video_size)->toBeGreaterThan(0)
        ->and(Storage::disk('public')->exists($website->background_video_path))->toBeTrue()
        ->and(Storage::disk('local')->exists('videos/temp/vid_'.$website->id.'_abc.mp4'))->toBeFalse();
});

it('deletes the previous video file when a new upload replaces it', function () {
    $user = makeVideoUser('replace@test.com');
    $website = makeVideoWebsite($user->id, 'replace-site', [
        'background_video_path' => 'website-videos/'.$user->id.'/old.mp4',
        'background_video_poster' => 'website-videos/'.$user->id.'/old.jpg',
        'background_video_size' => 4,
        'background_video_format' => 'mp4',
    ]);

    Storage::disk('public')->put($website->background_video_path, 'OLDVIDEO');
    Storage::disk('public')->put($website->background_video_poster, 'OLDPOSTER');

    $temp = 'videos/temp/vid_'.$website->id.'_new.mp4';
    Storage::disk('local')->put($temp, str_repeat('NEW', 400));

    (new OptimizeVideoJob($website->id, $temp))->handle();

    $website->refresh();

    expect($website->background_video_path)->not->toBe('website-videos/'.$user->id.'/old.mp4')
        ->and($website->background_video_path)->not->toBeNull()
        ->and(Storage::disk('public')->exists($website->background_video_path))->toBeTrue();

    Storage::disk('public')->assertMissing('website-videos/'.$user->id.'/old.mp4');
    Storage::disk('public')->assertMissing('website-videos/'.$user->id.'/old.jpg');
});

it('deletes temp file without touching website when the record is gone', function () {
    $user = makeVideoUser('gone@test.com');
    $website = makeVideoWebsite($user->id, 'gone-site');

    $temp = 'videos/temp/vid_'.$website->id.'_gone.mp4';
    Storage::disk('local')->put($temp, 'X');

    $websiteId = $website->id;
    $website->delete();

    (new OptimizeVideoJob($websiteId, $temp))->handle();

    expect(Storage::disk('local')->exists($temp))->toBeFalse();
});
