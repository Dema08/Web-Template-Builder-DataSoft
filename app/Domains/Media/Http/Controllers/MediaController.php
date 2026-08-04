<?php

namespace App\Domains\Media\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * MediaController
 *
 * Handles media uploads for the builder.
 */
class MediaController extends BaseController
{
    public function upload(Request $request): JsonResponse
    {
        return $this->created([
            'url' => 'https://via.placeholder.com/800x600',
            'filename' => 'uploaded_asset.png',
        ], 'Media uploaded successfully');
    }
}
