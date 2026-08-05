<?php

namespace App\Domains\Auth\Http\Controllers;

use App\Domains\Auth\DTO\ChangePasswordDTO;
use App\Domains\Auth\DTO\ForgotPasswordOtpRequestDTO;
use App\Domains\Auth\DTO\LoginDTO;
use App\Domains\Auth\DTO\RegisterDTO;
use App\Domains\Auth\DTO\ResetPasswordDTO;
use App\Domains\Auth\DTO\VerifyOtpRequestDTO;
use App\Domains\Auth\Requests\ChangePasswordRequest;
use App\Domains\Auth\Requests\ForgotPasswordOtpRequest;
use App\Domains\Auth\Requests\LoginRequest;
use App\Domains\Auth\Requests\RegisterRequest;
use App\Domains\Auth\Requests\ResetPasswordRequest;
use App\Domains\Auth\Requests\VerifyOtpRequest;
use App\Domains\Auth\Services\AuthService;
use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\User\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * AuthController
 *
 * Thin HTTP layer: resolve request → DTO → service → ApiResponse.
 */
class AuthController extends BaseController
{
    public function __construct(protected AuthService $authService)
    {
        //
    }

    /**
     * POST /api/v1/auth/register
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        $dto = RegisterDTO::fromArray($request->validated());

        $result = $this->authService->register($dto);

        return $this->created([
            'user' => new UserResource($result['user']),
            'token' => $result['token'],
        ], 'Registration successful');
    }

    /**
     * POST /api/v1/auth/login
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $dto = LoginDTO::fromArray($request->validated());

        $result = $this->authService->login($dto);

        return $this->success([
            'user' => new UserResource($result['user']),
            'token' => $result['token'],
        ], 'Login successful');
    }

    /**
     * POST /api/v1/auth/logout
     */
    public function logout(Request $request): JsonResponse
    {
        $this->authService->logout($request->user());

        return $this->success(null, 'Logged out successfully');
    }

    /**
     * GET /api/v1/auth/me
     */
    public function me(Request $request): JsonResponse
    {
        return $this->success(
            new UserResource($this->authService->me($request->user())),
            'Authenticated user'
        );
    }

    /**
     * PUT /api/v1/auth/change-password
     */
    public function changePassword(ChangePasswordRequest $request): JsonResponse
    {
        $dto = ChangePasswordDTO::fromArray($request->validated());

        $this->authService->changePassword($request->user(), $dto);

        return $this->success(null, 'Password changed successfully');
    }

    /**
     * POST /api/v1/auth/forgot-password
     * Send OTP to user's email for password reset.
     */
    public function forgotPassword(ForgotPasswordOtpRequest $request): JsonResponse
    {
        $dto = ForgotPasswordOtpRequestDTO::fromArray($request->validated());

        $this->authService->forgotPassword($dto);

        return $this->success(null, 'Kode OTP telah dikirim ke email Anda.');
    }

    /**
     * POST /api/v1/auth/verify-otp
     * Verify OTP code.
     */
    public function verifyOtp(VerifyOtpRequest $request): JsonResponse
    {
        $dto = VerifyOtpRequestDTO::fromArray($request->validated());

        $this->authService->verifyOtp($dto);

        return $this->success(null, 'Kode OTP valid.');
    }

    /**
     * POST /api/v1/auth/reset-password
     * Reset password with OTP verification.
     */
    public function resetPassword(ResetPasswordRequest $request): JsonResponse
    {
        $dto = ResetPasswordDTO::fromArray($request->validated());

        $this->authService->resetPassword($dto);

        return $this->success(null, 'Password berhasil diubah. Silakan login dengan password baru.');
    }
}
