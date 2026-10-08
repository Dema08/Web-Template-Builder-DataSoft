<?php

namespace App\Domains\Website\Enums;

enum WebsiteStatus: string
{
    case DRAFT = 'draft';
    case PENDING = 'pending';
    case PUBLISHED = 'published';
    case REJECTED = 'rejected';
    case ARCHIVED = 'archived';
    case SUSPENDED = 'suspended';
    case DISABLED = 'disabled';
}
