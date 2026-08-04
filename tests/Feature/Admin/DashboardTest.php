<?php

use App\Domains\User\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('returns the authenticated user dashboard payload with website null and recent activities', function () {
    $user = User::factory()->create([
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'password' => 'Password123',
        'avatar' => null,
    ]);

    $this->actingAs($user, 'sanctum');

    $this->getJson('/api/v1/dashboard')
        ->assertOk()
        ->assertJsonPath('data.user.name', 'Jane Doe')
        ->assertJsonPath('data.user.email', 'jane@example.com')
        ->assertJsonPath('data.website', null)
        ->assertJsonStructure([
            'data' => [
                'user' => ['id', 'name', 'email', 'avatar', 'role', 'created_at'],
                'website',
                'quick_actions' => [
                    ['label', 'description', 'href', 'icon'],
                ],
                'activities' => [
                    ['action', 'description', 'created_at'],
                ],
            ],
        ]);
});
