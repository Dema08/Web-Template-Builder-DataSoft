<?php

namespace App\Domains\Auth\DTO;

/**
 * VerifyOtpRequestDTO
 *
 * Data transfer object for OTP verification.
 */
class VerifyOtpRequestDTO
{
    public function __construct(
        protected string $email,
        protected string $otpCode
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            email: trim($data['email']),
            otpCode: trim($data['otp_code']),
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
}
