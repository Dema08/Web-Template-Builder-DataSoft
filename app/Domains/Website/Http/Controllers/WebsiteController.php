<?php

namespace App\Domains\Website\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * WebsiteController
 *
 * Manages the user's company profile website: content, settings, and publishing.
 */
class WebsiteController extends BaseController
{
    public function show(): JsonResponse
    {
        return $this->success([
            'id' => 1,
            'name' => 'Koperasi Maju Profile',
            'subdomain' => 'koperasimaju',
            'is_published' => true,
            'published_url' => 'http://127.0.0.1:8000',
            'created_at' => now()->toIso8601String(),
        ], 'Website retrieved');
    }

    public function getContent(): JsonResponse
    {
        return $this->success([
            'html' => '<section class="hero"><h1>Website Company Profile</h1></section>',
            'css' => 'body { font-family: Inter, sans-serif; }',
        ], 'Website content retrieved');
    }

    public function saveContent(Request $request): JsonResponse
    {
        return $this->success(null, 'Content saved successfully');
    }

    public function updateSettings(Request $request): JsonResponse
    {
        return $this->success(null, 'Settings updated successfully');
    }

    public function publish(Request $request): JsonResponse
    {
        return $this->success([
            'published_url' => 'http://127.0.0.1:8000',
        ], 'Website published successfully');
    }
}
