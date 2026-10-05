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
        // Video background: kualitas terjaga (tanpa re-encode), server tetap ringan
        // karena file disimpan statis + di-streaming via HTTP Range Requests.
        'allowed_video_extensions' => ['mp4', 'webm', 'ogg'],
        'allowed_video_mime_types' => ['video/mp4', 'video/webm', 'video/ogg'],
        'max_video_size_mb' => 50,
        'max_video_size_bytes' => 50 * 1024 * 1024,
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
