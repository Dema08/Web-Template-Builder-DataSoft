<?php

namespace App\Domains\Admin\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DashboardResource extends JsonResource
{
    public function toArray($request): array
    {
        return $this->resource;
    }
}
