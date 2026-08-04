<?php

namespace App\Enums;

enum WebsiteStatus: string
{
    case DRAFT = 'draft';
    case PUBLISHED = 'published';
    case ARCHIVED = 'archived';
    case DISABLED = 'disabled';
}
