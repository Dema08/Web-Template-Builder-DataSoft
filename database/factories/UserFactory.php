<?php

namespace Database\Factories;

use App\Domains\Shared\Enums\UserRole;
use App\Domains\User\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
    /**
     * The model this factory corresponds to.
     *
     * @var class-string<User>
     */
    protected $model = User::class;

    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => 'password', // User model auto-hashes via Attribute cast
            'avatar' => null,
            'peran' => UserRole::User,
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Create a user with the admin role.
     */
    public function admin(): static
    {
        return $this->state(fn (array $attributes) => [
            'peran' => UserRole::Admin,
        ]);
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
