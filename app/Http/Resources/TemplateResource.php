<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TemplateResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'category_id' => $this->category_id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'thumbnail' => $this->thumbnail,
            'preview_data' => $this->preview_data,
            'schema' => $this->schema,
            'default_content' => $this->default_content,
            'sort_order' => $this->sort_order,
            'is_active' => $this->is_active,
            'usage_count' => $this->usage_count,
        ];
    }
}
