<?php

namespace App\Domains\Shared\Http\Controllers;

use App\Domains\Shared\Helpers\ApiResponse;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as LaravelBaseController;
use Illuminate\Support\Facades\Validator;

/**
 * BaseController
 *
 * Shared base for ALL feature controllers. Controllers receive the
 * request, validate via Form Requests, call a service, and return a
 * canonical ApiResponse. NO business logic lives here.
 */
abstract class BaseController extends LaravelBaseController
{
    use AuthorizesRequests;
    use ValidatesRequests;

    /**
     * Return a success response.
     *
     * @param  mixed  $data
     */
    protected function success($data = null, string $message = 'Success', int $status = 200): JsonResponse
    {
        return ApiResponse::success($data, $message, $status);
    }

    /**
     * Return a created response.
     *
     * @param  mixed  $data
     */
    protected function created($data = null, string $message = 'Resource created successfully'): JsonResponse
    {
        return ApiResponse::created($data, $message);
    }

    /**
     * Return a no-content response.
     */
    protected function noContent(): JsonResponse
    {
        return ApiResponse::noContent();
    }

    /**
     * Return an error response.
     *
     * @param  mixed  $errors
     */
    protected function error(string $message = 'Something went wrong', int $status = 400, $errors = null): JsonResponse
    {
        return ApiResponse::error($message, $status, $errors);
    }

    /**
     * Return a validation error response.
     *
     * @param  mixed  $errors
     */
    protected function validationError($errors, string $message = 'The given data was invalid'): JsonResponse
    {
        return ApiResponse::validationError($errors, $message);
    }

    /**
     * Return an unauthorized response.
     */
    protected function unauthorized(string $message = 'Unauthorized'): JsonResponse
    {
        return ApiResponse::unauthorized($message);
    }

    /**
     * Return a forbidden response.
     */
    protected function forbidden(string $message = 'Forbidden'): JsonResponse
    {
        return ApiResponse::forbidden($message);
    }

    /**
     * Return a not-found response.
     */
    protected function notFound(string $message = 'Resource not found'): JsonResponse
    {
        return ApiResponse::notFound($message);
    }

    /**
     * Return a server-error response.
     */
    protected function serverError(string $message = 'Internal server error'): JsonResponse
    {
        return ApiResponse::serverError($message);
    }

    /**
     * Validate the incoming request using either a FormRequest class
     * string or an inline rules array.
     *
     * @param  Request  $request
     * @param  array<string, mixed>|string  $rules
     */
    protected function validateRequest(Request $request, array|string $rules): array
    {
        if (is_string($rules) && class_exists($rules)) {
            /** @var \Illuminate\Foundation\Http\FormRequest $formRequest */
            $formRequest = app($rules);
            $formRequest->validateResolved();

            return $formRequest->validated();
        }

        return Validator::make($request->all(), $rules)->validate();
    }
}
