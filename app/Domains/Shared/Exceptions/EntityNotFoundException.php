<?php

namespace App\Domains\Shared\Exceptions;

/**
 * EntityNotFoundException
 *
 * Thrown when a requested domain entity cannot be located.
 * Renders as HTTP 404.
 */
class EntityNotFoundException extends DomainException
{
    public function __construct(string $message = 'Resource not found')
    {
        parent::__construct($message, 404);
    }
}
