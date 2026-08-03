<?php

namespace App\Domains\Auth\DTO;

use App\Domains\Shared\DTO\BaseDTO;

/**
 * RegisterDTO
 *
 * Validated payload for user registration.
 */
class RegisterDTO extends BaseDTO
{
    protected function keys(): array
    {
        return ['name', 'email', 'password'];
    }

    public function getName(): string
    {
        return $this->get('name');
    }

    public function getEmail(): string
    {
        return $this->get('email');
    }

    public function getPassword(): string
    {
        return $this->get('password');
    }
}
