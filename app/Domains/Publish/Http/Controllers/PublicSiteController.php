<?php

namespace App\Domains\Publish\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;

/**
 * PublicSiteController
 *
 * Serves the published company profile website data.
 */
class PublicSiteController extends BaseController
{
    public function show(): JsonResponse
    {
        return $this->success([
            'site_name' => 'Koperasi Maju Profile',
            'subdomain' => 'koperasimaju',
            'html' => '<h1>Selamat Datang di Website Resmi</h1>',
            'css' => 'h1 { color: #2563eb; }',
        ], 'Public site data retrieved');
    }
}
