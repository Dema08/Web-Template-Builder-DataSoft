<?php

use App\Domains\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

uses(RefreshDatabase::class);

it('logs in without remember and returns a token', function () {
    $user = User::factory()->create([
        'email' => 'session@example.com',
        'password' => 'Password123',
        'disetujui' => true,
    ]);

    $response = $this->postJson('/api/v1/auth/login', [
        'email' => $user->email,
        'password' => 'Password123',
    ]);

    $response
        ->assertOk()
        ->assertJsonPath('message', 'Login successful')
        ->assertJsonPath('data.token', fn ($token) => $token !== null);

    $token = PersonalAccessToken::first();

    expect($token->expires_at)->toBeNull();
});

it('logs in with remember and returns an expiring token', function () {
    $user = User::factory()->create([
        'email' => 'remember@example.com',
        'password' => 'Password123',
        'disetujui' => true,
    ]);

    $response = $this->postJson('/api/v1/auth/login', [
        'email' => $user->email,
        'password' => 'Password123',
        'remember' => true,
    ]);

    $response
        ->assertOk()
        ->assertJsonPath('message', 'Login successful')
        ->assertJsonPath('data.token', fn ($token) => $token !== null);

    $token = PersonalAccessToken::first();

    expect($token->expires_at)->not->toBeNull();
    expect($token->expires_at->greaterThan(now()->addDays(29)))->toBeTrue();
});

it('logs out and revokes the current token', function () {
    $user = User::factory()->create([
        'email' => 'logout@example.com',
        'password' => 'Password123',
        'disetujui' => true,
    ]);

    $loginResponse = $this->postJson('/api/v1/auth/login', [
        'email' => $user->email,
        'password' => 'Password123',
        'remember' => true,
    ]);

    $token = $loginResponse->json('data.token');

    $this->withToken($token)
        ->postJson('/api/v1/auth/logout')
        ->assertOk()
        ->assertJsonPath('message', 'Logged out successfully');

    expect(PersonalAccessToken::count())->toBe(0);
});

it('rejects invalid credentials without activating remember', function () {
    $user = User::factory()->create([
        'email' => 'invalid@example.com',
        'password' => 'Password123',
        'disetujui' => true,
    ]);

    $response = $this->postJson('/api/v1/auth/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
        'remember' => true,
    ]);

    $response->assertStatus(401);

    expect(PersonalAccessToken::count())->toBe(0);
});

it('allows admin to login with remember and access admin routes', function () {
    $admin = User::factory()->create([
        'email' => 'admin-remember@example.com',
        'password' => 'Password123',
        'peran' => 'admin',
        'disetujui' => true,
    ]);

    $response = $this->postJson('/api/v1/auth/login', [
        'email' => $admin->email,
        'password' => 'Password123',
        'remember' => true,
    ]);

    $response->assertOk();

    $token = $response->json('data.token');

    $this->withToken($token)
        ->getJson('/api/v1/admin/users')
        ->assertOk();
});

it('allows regular user to login with remember and access user routes', function () {
    $user = User::factory()->create([
        'email' => 'user-remember@example.com',
        'password' => 'Password123',
        'peran' => 'user',
        'disetujui' => true,
    ]);

    $response = $this->postJson('/api/v1/auth/login', [
        'email' => $user->email,
        'password' => 'Password123',
        'remember' => true,
    ]);

    $response->assertOk();

    $token = $response->json('data.token');

    $this->withToken($token)
        ->getJson('/api/v1/user/profile')
        ->assertOk();
});
