<?php

namespace App\Domains\Template\Enums;

/**
 * TemplateStatus
 *
 * Represents the publication state of a template.
 */
enum TemplateStatus: string
{
    case Draft = 'draft';
    case Published = 'published';
    case Archived = 'archived';
    case Disabled = 'disabled';

    public function label(): string
    {
        return match ($this) {
            self::Draft => 'Draft',
            self::Published => 'Published',
            self::Archived => 'Archived',
            self::Disabled => 'Disabled',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::Draft => 'gray',
            self::Published => 'emerald',
            self::Archived => 'amber',
            self::Disabled => 'red',
        };
    }

    public function isActive(): bool
    {
        return $this === self::Published;
    }

    public function isManaged(): bool
    {
        return in_array($this, [self::Draft, self::Published, self::Archived]);
    }
}
