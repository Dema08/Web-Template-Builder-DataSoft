<?php

use App\Domains\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;

uses(RefreshDatabase::class);

it('allows an authenticated user to view, update, upload, delete avatar, and change password', function () {
    $user = User::factory()->create([
        'name' => 'Old Name',
        'email' => 'old@example.com',
        'password' => 'Password123',
        'avatar' => null,
    ]);

    $this->actingAs($user, 'sanctum');

    $this->getJson('/api/v1/user/profile')
        ->assertOk()
        ->assertJsonPath('data.name', 'Old Name');

    $this->putJson('/api/v1/user/profile', [
        'name' => 'New Name',
        'email' => 'new@example.com',
    ])
        ->assertOk()
        ->assertJsonPath('data.name', 'New Name')
        ->assertJsonPath('data.email', 'new@example.com');

    $avatar = UploadedFile::fake()->image('avatar.png', 120, 120);

    $this->postJson('/api/v1/user/avatar', [
        'avatar' => $avatar,
    ])
        ->assertOk()
        ->assertJsonPath('data.avatar', fn ($value) => str_contains($value, '/storage/avatars/'));

    $this->deleteJson('/api/v1/user/avatar')
        ->assertOk();

    $this->putJson('/api/v1/user/change-password', [
        'current_password' => 'Password123',
        'password' => 'NewPassword123',
        'password_confirmation' => 'NewPassword123',
    ])
        ->assertOk();

    $user->refresh();

    expect(Hash::check('NewPassword123', $user->password))->toBeTrue();
});
