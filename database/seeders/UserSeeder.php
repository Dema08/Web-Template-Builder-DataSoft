<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Domains\User\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Level 1 = Administrator
        User::updateOrCreate(
            ['email' => 'admin@datasoft.id'],
            [
                'name'               => 'Datasoft Administrator',
                'password'           => 'password',
                'role'               => 'admin',
                'level'              => 1,
                'email_verified_at'  => now(),
            ]
        );

        // Level 2 = User
        User::updateOrCreate(
            ['email' => 'user@datasoft.id'],
            [
                'name'               => 'Koperasi Maju User',
                'password'           => 'password',
                'role'               => 'user',
                'level'              => 2,
                'email_verified_at'  => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'demaadzhani08@gmail.com'],
            [
                'name'               => 'Dema',
                'password'           => 'Akuabsen8',
                'role'               => 'user',
                'level'              => 2,
                'email_verified_at'  => now(),
            ]
        );

        User::updateOrCreate(
            ['email' => 'demaadzhani5@gmail.com'],
            [
                'name'               => 'demor',
                'password'           => 'Akuabsen8',
                'role'               => 'admin',
                'level'              => 1,
                'email_verified_at'  => now(),
            ]
        );
    }
}
