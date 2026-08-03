<?php

namespace App\Domains\Auth\DTO;

use App\Domains\Shared\DTO\BaseDTO;

/**
 * ChangePasswordDTO
 *
 * Validated payload for an authenticated password change.
 */
class ChangePasswordDTO extends BaseDTO
{
    protected function keys(): array
    {
        return ['current_password', 'new_password'];
    }

    public function getCurrentPassword(): string
    {
        return $this->get('current_password');
    }

    public function getNewPassword(): string
    {
        return $this->get('new_password');
    }
}
