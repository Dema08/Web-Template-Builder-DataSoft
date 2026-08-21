<?php

namespace App\Domains\Admin\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Models\Category;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminCategoryController extends BaseController
{
    public function index(): JsonResponse
    {
        $categories = Category::withCount('templates')->orderBy('sort_order')->orderBy('name')->get();

        return $this->success(
            CategoryResource::collection($categories),
            'Categories retrieved successfully'
        );
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:kategori_industri,slug',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = $validated['slug'] ?? str($validated['name'])->slug()->__toString();
        $validated['is_active'] = $validated['is_active'] ?? true;

        $category = Category::create($validated);

        return $this->success(
            new CategoryResource($category),
            'Category created successfully',
            201
        );
    }

    public function show(Category $category): JsonResponse
    {
        return $this->success(
            new CategoryResource($category),
            'Category retrieved successfully'
        );
    }

    public function update(Request $request, Category $category): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:kategori_industri,slug,' . $category->id,
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = $validated['slug'] ?? str($validated['name'])->slug()->__toString();

        $category->update($validated);

        return $this->success(
            new CategoryResource($category->fresh()),
            'Category updated successfully'
        );
    }

    public function destroy(Category $category): JsonResponse
    {
        $category->delete();

        return $this->success(null, 'Category deleted successfully');
    }
}