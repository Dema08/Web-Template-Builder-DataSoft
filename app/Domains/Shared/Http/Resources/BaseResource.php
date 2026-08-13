<?php

namespace App\Domains\Shared\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * BaseResource
 *
 * Thin wrapper around JsonResource so all domain resources extend a
 * single base class that can be enriched later (e.g. global meta, links).
 */
class BaseResource extends JsonResource
{
    //
}
