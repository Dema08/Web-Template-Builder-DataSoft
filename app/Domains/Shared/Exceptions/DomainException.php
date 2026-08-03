<?php

namespace App\Domains\Shared\Exceptions;

use App\Domains\Shared\Helpers\ApiResponse;
use Illuminate\Http\JsonResponse;
use RuntimeException;

/**
 * DomainException
 *
 * Base exception for all domain-level failures. Thrown by Services
 * when a business rule is violated; caught globally to produce the
 * canonical ApiResponse error shape.
 */
class DomainException extends RuntimeException
{
    protected int $statusCode = 400;

    public function __construct(string $message = 'Domain rule violated', int $statusCode = 400)
    {
        parent::__construct($message);

        $this->statusCode = $statusCode;
    }

    public function getStatusCode(): int
    {
        return $this->statusCode;
    }

    public function render(): JsonResponse
    {
        return ApiResponse::error($this->getMessage(), $this->getStatusCode());
    }
}
