<?php

namespace App\Domains\Website\Enums;

enum WebsiteStatus: string
{
    case DRAFT = 'draft';
    case PUBLISHED = 'published';
    case ARCHIVED = 'archived';
    case DISABLED = 'disabled';
}
