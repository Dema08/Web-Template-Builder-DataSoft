<?php

namespace App\Domains\Template\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\Template\Requests\StoreTemplateRequest;
use App\Domains\Template\Requests\UpdateTemplateRequest;
use App\Domains\Template\Resources\TemplateResource;
use App\Domains\Template\Services\TemplateService;
use App\Domains\Template\Models\Template as TemplateModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TemplateController extends BaseController
{
    public function __construct(protected TemplateService $templateService)
    {
        //
    }

    public function index(Request $request): JsonResponse
    {
        $this->authorize('viewAny', TemplateModel::class);

        $filters = [
            'search' => $request->query('search'),
            'industry_category_id' => $request->query('industry_category_id'),
            'status' => $request->query('status'),
            'is_featured' => $request->query('is_featured'),
            'sort_by' => $request->query('sort_by', 'sort_order'),
            'sort_dir' => $request->query('sort_dir', 'asc'),
        ];

        $perPage = (int) $request->query('per_page', 15);
        $templates = $this->templateService->getFilteredTemplates($filters, $perPage);

        return $this->success(
            TemplateResource::collection($templates),
            'Templates retrieved successfully'
        );
    }

    public function store(StoreTemplateRequest $request): JsonResponse
    {
        $this->authorize('create', TemplateModel::class);

        $template = $this->templateService->createTemplate(
            $request->validated(),
            $request->user()
        );

        return $this->success(
            new TemplateResource($template),
            'Template created successfully',
            201
        );
    }

    public function show(TemplateModel $template): JsonResponse
    {
        $this->authorize('view', $template);

        return $this->success(
            new TemplateResource($template),
            'Template retrieved successfully'
        );
    }

    public function update(UpdateTemplateRequest $request, TemplateModel $template): JsonResponse
    {
        $this->authorize('update', $template);

        $template = $this->templateService->updateTemplate(
            $template,
            $request->validated()
        );

        return $this->success(
            new TemplateResource($template),
            'Template updated successfully'
        );
    }

    public function destroy(Request $request, TemplateModel $template): JsonResponse
    {
        $this->authorize('delete', $template);

        $this->templateService->deleteTemplate($template);

        return $this->success(null, 'Template deleted successfully');
    }

    public function forceDelete(Request $request, TemplateModel $template): JsonResponse
    {
        $this->authorize('forceDelete', $template);

        $this->templateService->forceDeleteTemplate($template);

        return $this->success(null, 'Template permanently deleted');
    }

    public function restore(int $id): JsonResponse
    {
        $template = \App\Domains\Template\Models\Template::withTrashed()->findOrFail($id);
        $this->authorize('restore', $template);

        $template = $this->templateService->restoreTemplate($id);

        return $this->success(
            new TemplateResource($template),
            'Template restored successfully'
        );
    }

    public function publish(Request $request, TemplateModel $template): JsonResponse
    {
        $this->authorize('publish', $template);

        $template = $this->templateService->publishTemplate($template);

        return $this->success(
            new TemplateResource($template),
            'Template published successfully'
        );
    }

    public function archive(Request $request, TemplateModel $template): JsonResponse
    {
        $this->authorize('archive', $template);

        $template = $this->templateService->archiveTemplate($template);

        return $this->success(
            new TemplateResource($template),
            'Template archived successfully'
        );
    }

    public function duplicate(Request $request, TemplateModel $template): JsonResponse
    {
        $this->authorize('duplicate', $template);

        $duplicate = $this->templateService->duplicateTemplate($template, $request->user());

        return $this->success(
            new TemplateResource($duplicate),
            'Template duplicated successfully',
            201
        );
    }

    public function toggleFeatured(Request $request, TemplateModel $template): JsonResponse
    {
        $this->authorize('update', $template);

        $template = $this->templateService->toggleFeatured($template);

        return $this->success(
            new TemplateResource($template),
            'Template featured status updated'
        );
    }

    public function trashed(Request $request): JsonResponse
    {
        $this->authorize('viewAny', TemplateModel::class);

        $perPage = (int) $request->query('per_page', 15);
        $templates = \App\Domains\Template\Models\Template::onlyTrashed()
            ->with(['industryCategory', 'creator', 'updater'])
            ->orderByDesc('deleted_at')
            ->paginate($perPage);

        return $this->success(
            TemplateResource::collection($templates),
            'Trashed templates retrieved successfully'
        );
    }

    public function uploadThumbnail(Request $request, TemplateModel $template): JsonResponse
    {
        $this->authorize('update', $template);

        $request->validate([
            'thumbnail' => ['required', 'file', 'mimetypes:image/png,image/jpg,image/jpeg,image/webp,image/svg+xml,image/gif,image/bmp,image/avif', 'max:10240'], // max 10MB
        ]);

        $template = $this->templateService->uploadThumbnail($template, $request->file('thumbnail'));

        return $this->success(
            new TemplateResource($template),
            'Thumbnail uploaded successfully'
        );
    }

    public function uploadPreviewImage(Request $request, TemplateModel $template): JsonResponse
    {
        $this->authorize('update', $template);

        $request->validate([
            'preview_image' => ['required', 'file', 'mimetypes:image/png,image/jpg,image/jpeg,image/webp,image/svg+xml,image/gif,image/bmp,image/avif', 'max:10240'], // max 10MB
        ]);

        $template = $this->templateService->uploadPreviewImage($template, $request->file('preview_image'));

        return $this->success(
            new TemplateResource($template),
            'Preview image uploaded successfully'
        );
    }
}
