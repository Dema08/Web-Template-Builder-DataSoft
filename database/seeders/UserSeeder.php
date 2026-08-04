<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
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
                'password'           => Hash::make('password'),
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
                'password'           => Hash::make('password'),
                'role'               => 'user',
                'level'              => 2,
                'email_verified_at'  => now(),
            ]
        );
    }
}
