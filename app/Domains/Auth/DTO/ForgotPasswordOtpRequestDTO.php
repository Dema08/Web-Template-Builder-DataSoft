<?php

namespace App\Domains\Auth\DTO;

/**
 * ForgotPasswordOtpRequestDTO
 *
 * Data transfer object for forgot password OTP request.
 */
class ForgotPasswordOtpRequestDTO
{
    public function __construct(protected string $email)
    {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            email: trim($data['email']),
        );
    }

    public function getEmail(): string
    {
        return $this->email;
    }
}
