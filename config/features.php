<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Feature Flags & Limits
    |--------------------------------------------------------------------------
    |
    | Centralized application constants for feature toggles, limits,
    | and media policies. Never hardcode these values in feature code.
    |
    */

    'auth' => [
        'token_name' => 'auth-token',
        'token_prefix' => env('SANCTUM_TOKEN_PREFIX', ''),
    ],

    'media' => [
        'allowed_extensions' => ['jpg', 'jpeg', 'png', 'webp'],
        'allowed_mime_types' => ['image/jpeg', 'image/png', 'image/webp'],
        'max_size_mb' => 5,
        'max_size_bytes' => 5 * 1024 * 1024,
        'disk' => 'websites',
    ],

    'website' => [
        'max_sections' => 7,
        'draft_json_limit_kb' => 2048,
        'published_json_limit_kb' => 2048,
    ],

    'templates' => [
        'categories' => [
            'logistics',
            'holding-company',
            'education',
            'service-company',
            'msme',
            'organization',
            'manufacturing',
            'cooperative',
            'trading-distribution',
            'dairy-cooperative',
        ],
    ],

    'website_status' => [
        'draft',
        'published',
        'archived',
        'disabled',
    ],

];
