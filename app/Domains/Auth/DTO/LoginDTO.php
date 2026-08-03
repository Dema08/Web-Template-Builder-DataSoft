<?php

namespace App\Domains\Auth\DTO;

use App\Domains\Shared\DTO\BaseDTO;

/**
 * LoginDTO
 *
 * Validated payload for user login.
 */
class LoginDTO extends BaseDTO
{
    protected function keys(): array
    {
        return ['email', 'password'];
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
