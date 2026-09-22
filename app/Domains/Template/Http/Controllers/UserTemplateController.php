<?php

namespace App\Domains\Template\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\Template\Models\Template;
use App\Domains\Template\Resources\TemplateResource;
use App\Domains\Template\Services\TemplateService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * UserTemplateController
 *
 * Mengelola template yang dibuat oleh user biasa melalui Builder.
 * Setiap template di sini memiliki owner_id = user.id yang login.
 *
 * Visibilitas:
 *   - private : hanya bisa dilihat dan digunakan oleh owner
 *   - public  : muncul di galeri semua user, bisa digunakan siapapun
 */
class UserTemplateController extends BaseController
{
    public function __construct(protected TemplateService $templateService)
    {
        //
    }

    /**
     * Daftar semua template milik user yang login (private + public).
     * GET /api/v1/my-templates
     */
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $query = Template::forList()
            ->with(['industryCategory', 'creator', 'owner'])
            ->where('owner_id', $user->id)
            ->orderByDesc('created_at');

        if ($search = trim((string) $request->query('search', ''))) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        if ($visibility = $request->query('visibility')) {
            if (in_array($visibility, ['private', 'public'])) {
                $query->where('visibility', $visibility);
            }
        }

        $templates = $query->get();

        $data = $templates->map(function (Template $tpl) use ($request) {
            return (new TemplateResource($tpl))->toArray($request);
        });

        return $this->success(
            $data->values(),
            'Daftar template saya berhasil diambil.'
        );
    }

    /**
     * Simpan konten builder sebagai template baru milik user.
     * POST /api/v1/my-templates
     *
     * Body: { name, description?, draft_json, visibility, category_id? }
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name'        => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
            'draft_json'  => ['required', 'array'],
            'visibility'  => ['required', 'string', 'in:private,public'],
            'category_id' => ['nullable', 'integer', 'exists:kategori_industri,id'],
        ], [
            'name.required'       => 'Nama template wajib diisi.',
            'draft_json.required' => 'Konten template tidak boleh kosong.',
            'visibility.in'       => 'Visibilitas harus berupa private atau public.',
        ]);

        $template = $this->templateService->saveAsUserTemplate($request->user(), $validated);
        $template->load('industryCategory');

        return $this->success(
            new TemplateResource($template),
            'Template berhasil disimpan.',
            201
        );
    }

    /**
     * Detail satu template milik user.
     * GET /api/v1/my-templates/{id}
     */
    public function show(Request $request, int $id): JsonResponse
    {
        $user     = $request->user();
        $template = Template::with(['industryCategory', 'owner'])->findOrFail($id);

        if (!$template->isOwnedBy($user->id)) {
            return $this->error('Template tidak ditemukan atau bukan milik Anda.', 404);
        }

        return $this->success(
            new TemplateResource($template),
            'Detail template berhasil diambil.'
        );
    }

    /**
     * Update nama/deskripsi/draft_json template milik user.
     * PUT /api/v1/my-templates/{id}
     */
    public function update(Request $request, int $id): JsonResponse
    {
        $user     = $request->user();
        $template = Template::findOrFail($id);

        if (!$template->isOwnedBy($user->id)) {
            return $this->error('Template tidak ditemukan atau bukan milik Anda.', 404);
        }

        $validated = $request->validate([
            'name'        => ['sometimes', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
            'draft_json'  => ['sometimes', 'array'],
        ]);

        // Jika draft_json diupdate, sync juga ke published_json agar bisa langsung digunakan
        if (isset($validated['draft_json'])) {
            $validated['published_json'] = $validated['draft_json'];
        }

        $validated['updated_by'] = $user->id;

        $template->update($validated);
        $template->load('industryCategory');

        return $this->success(
            new TemplateResource($template->fresh()),
            'Template berhasil diperbarui.'
        );
    }

    /**
     * Hapus template milik user (soft delete).
     * DELETE /api/v1/my-templates/{id}
     */
    public function destroy(Request $request, int $id): JsonResponse
    {
        $user     = $request->user();
        $template = Template::findOrFail($id);

        if (!$template->isOwnedBy($user->id)) {
            return $this->error('Template tidak ditemukan atau bukan milik Anda.', 404);
        }

        $template->delete();

        return $this->success(null, 'Template berhasil dihapus.');
    }

    /**
     * Ubah visibilitas template menjadi public.
     * PATCH /api/v1/my-templates/{id}/publish
     */
    public function publish(Request $request, int $id): JsonResponse
    {
        $user     = $request->user();
        $template = Template::findOrFail($id);

        if (!$template->isOwnedBy($user->id)) {
            return $this->error('Template tidak ditemukan atau bukan milik Anda.', 404);
        }

        try {
            $template = $this->templateService->changeVisibility($template, 'public');
        } catch (\Throwable $e) {
            return $this->error($e->getMessage(), 422);
        }

        return $this->success(
            new TemplateResource($template),
            'Template berhasil dipublikasikan ke galeri umum.'
        );
    }

    /**
     * Ubah visibilitas template menjadi private.
     * PATCH /api/v1/my-templates/{id}/unpublish
     */
    public function unpublish(Request $request, int $id): JsonResponse
    {
        $user     = $request->user();
        $template = Template::findOrFail($id);

        if (!$template->isOwnedBy($user->id)) {
            return $this->error('Template tidak ditemukan atau bukan milik Anda.', 404);
        }

        try {
            $template = $this->templateService->changeVisibility($template, 'private');
        } catch (\Throwable $e) {
            return $this->error($e->getMessage(), 422);
        }

        return $this->success(
            new TemplateResource($template),
            'Template berhasil diubah menjadi private.'
        );
    }
}
