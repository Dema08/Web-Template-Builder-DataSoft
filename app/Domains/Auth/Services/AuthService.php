<?php

namespace App\Domains\Auth\Services;

use App\Domains\Auth\DTO\ChangePasswordDTO;
use App\Domains\Auth\DTO\ForgotPasswordOtpRequestDTO;
use App\Domains\Auth\DTO\LoginDTO;
use App\Domains\Auth\DTO\RegisterDTO;
use App\Domains\Auth\DTO\ResetPasswordDTO;
use App\Domains\Auth\DTO\VerifyOtpRequestDTO;
use App\Domains\Shared\Exceptions\DomainException;
use App\Domains\Shared\Contracts\RepositoryContract;
use App\Domains\Shared\Services\BaseService;
use App\Domains\User\Models\PasswordResetOtp;
use App\Domains\User\Models\User;
use App\Domains\User\Repositories\UserRepository;
use App\Mail\OtpPasswordResetMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;

/**
 * AuthService
 *
 * Holds ALL authentication business logic:
 *  - register: validate + hash + default USER role + issue token
 *  - login: verify credentials + issue token
 *  - logout: revoke current token
 *  - changePassword: verify current + rehash new
 *  - forgotPassword: send OTP to email
 *  - verifyOtp: verify OTP code
 *  - resetPassword: reset password with OTP
 */
class AuthService extends BaseService
{
    public function __construct(protected UserRepository $userRepository)
    {
        // AuthService uses custom repository methods, not BaseService CRUD
    }

    public function repository(): RepositoryContract
    {
        return $this->userRepository;
    }

    /**
     * Register a new user.
     *
     * @return array{user: User, token: string}
     */
    public function register(RegisterDTO $dto): array
    {
        return $this->repository()->transaction(function () use ($dto): array {
            $user = $this->userRepository->createRegularUser([
                'name' => $dto->getName(),
                'email' => $dto->getEmail(),
                'password' => $dto->getPassword(), // User model auto-hashes via Attribute cast
            ]);

            $token = $user->createToken(
                config('auth.token_name', 'auth-token')
            )->plainTextToken;

            return ['user' => $user, 'token' => $token];
        });
    }

    /**
     * Log a user in with email + password.
     *
     * @throws DomainException
     * @return array{user: User, token: string}
     */
    public function login(LoginDTO $dto): array
    {
        $user = $this->userRepository->findByEmail($dto->getEmail());

        if (! $user || ! Hash::check($dto->getPassword(), $user->password)) {
            throw new DomainException('Invalid credentials', 401);
        }

        $token = $user->createToken(
            config('auth.token_name', 'auth-token')
        )->plainTextToken;

        return ['user' => $user, 'token' => $token];
    }

    /**
     * Log the authenticated user out by revoking the current token.
     */
    public function logout(User $user): void
    {
        $user->currentAccessToken()?->delete();
    }

    /**
     * Change the authenticated user's password.
     *
     * @throws DomainException
     */
    public function changePassword(User $user, ChangePasswordDTO $dto): void
    {
        if (! Hash::check($dto->getCurrentPassword(), $user->password)) {
            throw new DomainException('Current password is incorrect', 422);
        }

        $user->update([
            'password' => $dto->getNewPassword(), // User model auto-hashes via Attribute cast
        ]);
    }

    /**
     * Return the authenticated user.
     */
    public function me(User $user): User
    {
        return $user;
    }

    /**
     * Send OTP to user's email for password reset.
     *
     * @throws DomainException
     */
    public function forgotPassword(ForgotPasswordOtpRequestDTO $dto): void
    {
        $user = $this->userRepository->findByEmail($dto->getEmail());

        if (! $user) {
            throw new DomainException('Email tidak terdaftar dalam sistem kami.', 404);
        }

        // Invalidate previous unused OTPs for this email
        PasswordResetOtp::where('email', $dto->getEmail())
            ->whereNull('used_at')
            ->where('expires_at', '>', now())
            ->update(['used_at' => now()]);

        // Generate 6-digit OTP
        $otpCode = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        // Create OTP record (expires in 15 minutes)
        $otp = $this->userRepository->createPasswordResetOtp([
            'user_id' => $user->id,
            'email' => $dto->getEmail(),
            'otp_code' => $otpCode,
            'expires_at' => now()->addMinutes(15),
        ]);

        // Send OTP via email
        Mail::to($user->email)->send(new OtpPasswordResetMail($otp));
    }

    /**
     * Verify OTP code.
     *
     * @throws DomainException
     */
    public function verifyOtp(VerifyOtpRequestDTO $dto): bool
    {
        $otp = $this->userRepository->findValidOtp(
            $dto->getEmail(),
            $dto->getOtpCode()
        );

        if (! $otp) {
            throw new DomainException('Kode OTP tidak valid atau telah kedaluwarsa.', 422);
        }

        return true;
    }

    /**
     * Reset password with OTP verification.
     *
     * @throws DomainException
     */
    public function resetPassword(ResetPasswordDTO $dto): void
    {
        $otp = $this->userRepository->findValidOtp(
            $dto->getEmail(),
            $dto->getOtpCode()
        );

        if (! $otp) {
            throw new DomainException('Kode OTP tidak valid atau telah kedaluwarsa.', 422);
        }

        $user = $this->userRepository->findByEmail($dto->getEmail());

        if (! $user) {
            throw new DomainException('Pengguna tidak ditemukan.', 404);
        }

        // Update password
        $this->userRepository->updatePassword($user, $dto->getNewPassword());

        // Mark OTP as used
        $this->userRepository->markOtpAsUsed($otp);

        // Revoke all user tokens for security
        $user->tokens()->delete();
    }
}
