<?php

namespace App\Http\Controllers;

use App\Domains\Shared\Helpers\ApiResponse;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\TemplateResource;
use App\Http\Resources\WebsiteResource;
use App\Services\OnboardingService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OnboardingController extends Controller
{
    public function __construct(private OnboardingService $onboardingService) {}

    public function getCategories(): JsonResponse
    {
        $categories = $this->onboardingService->getCategories();

        return ApiResponse::success($categories, 'Categories retrieved successfully.');
    }

    public function getTemplatesByCategory(int $categoryId, Request $request): JsonResponse
    {
        $skip = (int) $request->query('skip', 0);
        $take = (int) $request->query('take', 20);

        $result = $this->onboardingService->getTemplatesByCategory($categoryId, $skip, $take);

        return ApiResponse::success([
            'data' => $result['data'],
            'meta' => $result['meta'],
        ], 'Templates retrieved successfully.');
    }

    public function getTemplate(int $id): JsonResponse
    {
        $template = $this->onboardingService->getTemplateById($id);

        if (!$template) {
            return ApiResponse::notFound('Template not found.');
        }

        return ApiResponse::success(new TemplateResource($template), 'Template retrieved successfully.');
    }

    public function checkSlug(Request $request): JsonResponse
    {
        $request->validate([
            'slug' => 'required|string|min:3|max:255',
        ]);

        $result = $this->onboardingService->checkSlug($request->input('slug'));

        return ApiResponse::success($result, 'Slug check completed.');
    }

    public function createWebsite(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'company_name' => 'required|string|min:2|max:255',
            'slug' => 'required|string|min:3|max:255|regex:/^[a-z0-9-]+$/',
            'template_id' => 'required|integer|exists:template,id',
        ]);

        $website = $this->onboardingService->createWebsite($request->user(), $validated);

        return ApiResponse::success(new WebsiteResource($website), 'Website created successfully.', 201);
    }
}
