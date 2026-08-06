<?php

namespace App\Domains\Template\Services;

use App\Domains\Shared\Exceptions\DomainException;
use App\Domains\Shared\Services\BaseService;
use App\Domains\Template\Enums\TemplateStatus;
use App\Domains\Template\Models\Template;
use App\Domains\Template\Repositories\TemplateRepository;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TemplateService extends BaseService
{
    public function __construct(protected TemplateRepository $templateRepository)
    {
        parent::__construct();
    }

    public function repository(): TemplateRepository
    {
        return $this->templateRepository;
    }

    public function createTemplate(array $attributes, User $creator): Template
    {
        $attributes['code'] = $attributes['code'] ?? str('TMPL-' . strtoupper(Str::random(6)))->__toString();
        $attributes['slug'] = $attributes['slug'] ?? str($attributes['name'])->slug()->__toString();
        $attributes['status'] = $attributes['status'] ?? TemplateStatus::Draft;
        $attributes['version'] = $attributes['version'] ?? '1.0.0';
        $attributes['created_by'] = $creator->id;
        $attributes['updated_by'] = $creator->id;

        return $this->templateRepository->create($attributes);
    }

    public function updateTemplate(Template $template, array $attributes): Template
    {
        if (isset($attributes['name']) && !isset($attributes['slug'])) {
            $attributes['slug'] = str($attributes['name'])->slug()->__toString();
        }

        $attributes['updated_by'] = auth()->id();

        return $this->templateRepository->update($template->id, $attributes);
    }

    public function deleteTemplate(Template $template): bool
    {
        return $this->templateRepository->delete($template->id);
    }

    public function forceDeleteTemplate(Template $template): bool
    {
        if ($template->thumbnail && Storage::disk('public')->exists($template->thumbnail)) {
            Storage::disk('public')->delete($template->thumbnail);
        }
        if ($template->preview_image && Storage::disk('public')->exists($template->preview_image)) {
            Storage::disk('public')->delete($template->preview_image);
        }

        $template->forceDelete();

        return true;
    }

    public function restoreTemplate(int $id): Template
    {
        $template = Template::withTrashed()->findOrFail($id);
        $template->restore();

        return $template->fresh();
    }

    public function publishTemplate(Template $template): Template
    {
        if ($template->isPublished()) {
            throw new DomainException('Template is already published.', 422);
        }

        $template->status = TemplateStatus::Published;
        $template->published_json = $template->draft_json;
        $template->updated_by = auth()->id();
        $template->save();

        return $template->fresh();
    }

    public function archiveTemplate(Template $template): Template
    {
        if ($template->isArchived()) {
            throw new DomainException('Template is already archived.', 422);
        }

        $template->status = TemplateStatus::Archived;
        $template->updated_by = auth()->id();
        $template->save();

        return $template->fresh();
    }

    public function disableTemplate(Template $template): Template
    {
        if ($template->isDisabled()) {
            throw new DomainException('Template is already disabled.', 422);
        }

        $template->status = TemplateStatus::Disabled;
        $template->updated_by = auth()->id();
        $template->save();

        return $template->fresh();
    }

    public function duplicateTemplate(Template $template, User $creator): Template
    {
        $newTemplate = $template->replicate();
        $newTemplate->name = $template->name . ' (Copy)';
        $newTemplate->slug = $template->slug . '-copy-' . time();
        $newTemplate->code = str('TMPL-' . strtoupper(Str::random(6)))->__toString();
        $newTemplate->status = TemplateStatus::Draft;
        $newTemplate->version = '1.0.0';
        $newTemplate->is_featured = false;
        $newTemplate->usage_count = 0;
        $newTemplate->created_by = $creator->id;
        $newTemplate->updated_by = $creator->id;
        $newTemplate->save();

        return $newTemplate;
    }

    public function uploadThumbnail(Template $template, UploadedFile $thumbnail): Template
    {
        if ($template->thumbnail && Storage::disk('public')->exists($template->thumbnail)) {
            Storage::disk('public')->delete($template->thumbnail);
        }

        $filename = Str::uuid() . '.' . $thumbnail->getClientOriginalExtension();
        $storedPath = $thumbnail->storeAs('templates/thumbnails', $filename, 'public');

        $template->update([
            'thumbnail' => $storedPath,
        ]);

        return $template->fresh();
    }

    public function uploadPreviewImage(Template $template, UploadedFile $previewImage): Template
    {
        if ($template->preview_image && Storage::disk('public')->exists($template->preview_image)) {
            Storage::disk('public')->delete($template->preview_image);
        }

        $filename = Str::uuid() . '.' . $previewImage->getClientOriginalExtension();
        $storedPath = $previewImage->storeAs('templates/previews', $filename, 'public');

        $template->update([
            'preview_image' => $storedPath,
        ]);

        return $template->fresh();
    }

    public function toggleFeatured(Template $template): Template
    {
        $template->is_featured = !$template->is_featured;
        $template->updated_by = auth()->id();
        $template->save();

        return $template->fresh();
    }

    public function getTemplatesForSelection(int $categoryId): \Illuminate\Pagination\LengthAwarePaginator
    {
        return $this->templateRepository->getActiveByCategory($categoryId);
    }

    public function getFilteredTemplates(array $filters = [], int $perPage = 15): \Illuminate\Pagination\LengthAwarePaginator
    {
        return $this->templateRepository->getFiltered($filters, $perPage);
    }
}
