<?php

namespace App\Domains\Admin\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;

/**
 * DashboardController
 *
 * Returns dashboard summary for the authenticated user.
 */
class DashboardController extends BaseController
{
    public function index(): JsonResponse
    {
        return $this->success([
            'stats' => [
                'total_websites' => 1,
                'published_websites' => 1,
                'total_views' => 1248,
            ],
            'recent_activity' => [
                ['action' => 'Website Created', 'timestamp' => now()->toIso8601String()],
            ],
        ], 'Dashboard summary retrieved');
    }
}
