<?php

use App\Domains\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;

uses(RefreshDatabase::class);

it('registers a user and allows login with the submitted password', function () {
    $payload = [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'password' => 'Password123',
        'password_confirmation' => 'Password123',
    ];

    $response = $this->postJson('/api/v1/auth/register', $payload);

    $response
        ->assertCreated()
        ->assertJsonPath('message', 'Registration successful')
        ->assertJsonPath('data.user.email', $payload['email']);

    $user = User::query()->where('email', $payload['email'])->firstOrFail();

    expect($user->password)->not->toBe($payload['password']);
    expect(Hash::check($payload['password'], $user->password))->toBeTrue();

    $loginResponse = $this->postJson('/api/v1/auth/login', [
        'email' => $payload['email'],
        'password' => $payload['password'],
    ]);

    $loginResponse
        ->assertOk()
        ->assertJsonPath('message', 'Login successful');
});
