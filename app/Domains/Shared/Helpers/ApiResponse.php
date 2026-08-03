<?php

namespace App\Domains\Shared\Helpers;

use Illuminate\Http\JsonResponse;

/**
 * ApiResponse Helper
 *
 * Centralizes all JSON API response formatting so that every endpoint
 * returns a consistent, predictable payload shape:
 *
 *   success:  { "success": true,  "message": "...", "data": mixed }
 *   error:    { "success": false, "message": "...", "errors": mixed|null }
 *
 * Controllers MUST use this helper. Raw `response()->json()` from
 * feature code is forbidden.
 */
class ApiResponse
{
    /**
     * Success response.
     *
     * @param  mixed  $data
     */
    public static function success($data = null, string $message = 'Success', int $status = 200): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $status);
    }

    /**
     * Created response (HTTP 201).
     *
     * @param  mixed  $data
     */
    public static function created($data = null, string $message = 'Resource created successfully'): JsonResponse
    {
        return self::success($data, $message, 201);
    }

    /**
     * Accepted response (HTTP 202).
     *
     * @param  mixed  $data
     */
    public static function accepted($data = null, string $message = 'Request accepted'): JsonResponse
    {
        return self::success($data, $message, 202);
    }

    /**
     * No content response (HTTP 204).
     */
    public static function noContent(): JsonResponse
    {
        return response()->json(null, 204);
    }

    /**
     * Error response.
     *
     * @param  mixed  $errors
     */
    public static function error(string $message = 'Something went wrong', int $status = 400, $errors = null): JsonResponse
    {
        $payload = [
            'success' => false,
            'message' => $message,
        ];

        if (! is_null($errors)) {
            $payload['errors'] = $errors;
        }

        return response()->json($payload, $status);
    }

    /**
     * Validation error response (HTTP 422).
     *
     * @param  mixed  $errors
     */
    public static function validationError($errors, string $message = 'The given data was invalid'): JsonResponse
    {
        return self::error($message, 422, $errors);
    }

    /**
     * Unauthorized response (HTTP 401).
     */
    public static function unauthorized(string $message = 'Unauthorized'): JsonResponse
    {
        return self::error($message, 401);
    }

    /**
     * Forbidden response (HTTP 403).
     */
    public static function forbidden(string $message = 'Forbidden'): JsonResponse
    {
        return self::error($message, 403);
    }

    /**
     * Not found response (HTTP 404).
     */
    public static function notFound(string $message = 'Resource not found'): JsonResponse
    {
        return self::error($message, 404);
    }

    /**
     * Server error response (HTTP 500).
     */
    public static function serverError(string $message = 'Internal server error'): JsonResponse
    {
        return self::error($message, 500);
    }
}
