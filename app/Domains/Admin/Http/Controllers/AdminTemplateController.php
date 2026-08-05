<?php

namespace App\Domains\Admin\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Models\Template;
use App\Models\Category;
use App\Http\Resources\TemplateResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminTemplateController extends BaseController
{
    public function index(Category $category): JsonResponse
    {
        $templates = Template::where('category_id', $category->id)
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get();

        return $this->success(
            TemplateResource::collection($templates),
            'Templates retrieved successfully'
        );
    }

    public function store(Request $request, Category $category): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:templates,slug',
            'description' => 'nullable|string',
            'thumbnail' => 'nullable|string|max:255',
            'preview_data' => 'nullable|array',
            'schema' => 'nullable|array',
            'default_content' => 'nullable|array',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = $validated['slug'] ?? str($validated['name'])->slug()->__toString();
        $validated['is_active'] = $validated['is_active'] ?? true;
        $validated['category_id'] = $category->id;

        $template = Template::create($validated);

        return $this->success(
            new TemplateResource($template),
            'Template created successfully',
            201
        );
    }

    public function show(Template $template): JsonResponse
    {
        return $this->success(
            new TemplateResource($template),
            'Template retrieved successfully'
        );
    }

    public function update(Request $request, Template $template): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:templates,slug,' . $template->id,
            'description' => 'nullable|string',
            'thumbnail' => 'nullable|string|max:255',
            'preview_data' => 'nullable|array',
            'schema' => 'nullable|array',
            'default_content' => 'nullable|array',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = $validated['slug'] ?? str($validated['name'])->slug()->__toString();

        $template->update($validated);

        return $this->success(
            new TemplateResource($template->fresh()),
            'Template updated successfully'
        );
    }

    public function destroy(Template $template): JsonResponse
    {
        $template->delete();

        return $this->success(null, 'Template deleted successfully');
    }
}