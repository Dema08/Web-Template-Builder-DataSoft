<?php

namespace App\Domains\Auth\DTO;

/**
 * ResetPasswordDTO
 *
 * Data transfer object for password reset.
 */
class ResetPasswordDTO
{
    public function __construct(
        protected string $email,
        protected string $otpCode,
        protected string $newPassword
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            email: trim($data['email']),
            otpCode: trim($data['otp_code']),
            newPassword: $data['new_password'],
        );
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getOtpCode(): string
    {
        return $this->otpCode;
    }

    public function getNewPassword(): string
    {
        return $this->newPassword;
    }
}
