<?php

namespace App\Domains\Shared\Enums;

/**
 * UserRole
 *
 * The only two roles in the platform.
 */
enum UserRole: string
{
    case Admin = 'admin';
    case User = 'user';

    /**
     * Determine whether this role has admin privileges.
     */
    public function isAdmin(): bool
    {
        return $this === self::Admin;
    }

    /**
     * Return the default role for newly registered users.
     */
    public static function default(): self
    {
        return self::User;
    }

    /**
     * All scalar values.
     *
     * @return array<int, string>
     */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
