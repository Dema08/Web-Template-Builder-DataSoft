<?php

namespace App\Domains\Template\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\Template\Models\Template;
use App\Domains\Template\Services\TemplateAccessService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 * TemplateAccessController
 *
 * Mengelola pengecekan akses dan penerapan Starter Template berdasarkan langganan pengguna.
 */
class TemplateAccessController extends BaseController
{
    public function __construct(
        protected TemplateAccessService $templateAccessService
    ) {}

    /**
     * Daftar semua template published + flag akses per user.
     * GET /api/v1/templates
     * Response per item: TemplateResource + is_premium, can_use, is_activated.
     */
    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $query = Template::with('industryCategory')->where('status', 'published');

        if ($categoryId = $request->integer('industry_category_id') ?: $request->integer('category_id')) {
            $query->where('category_id', $categoryId);
        }

        if ($search = trim((string) $request->query('search', ''))) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%")
                    ->orWhere('code', 'like', "%{$search}%");
            });
        }

        $templates = $query->orderByDesc('is_featured')
            ->orderBy('sort_order')
            ->orderByDesc('id')
            ->get();

        $accessMap = $this->templateAccessService->mapAccessForTemplates($user, $templates);

        $data = $templates->map(function (Template $tpl) use ($accessMap) {
            $arr = (new \App\Domains\Template\Resources\TemplateResource($tpl))->toArray(request());
            $flags = $accessMap[$tpl->id] ?? ['can_use' => true, 'is_activated' => false, 'is_premium' => $tpl->isPremium(), 'is_blank' => $tpl->isBlankTemplate(), 'reason' => null];

            return array_merge($arr, $flags);
        });

        $quota = $this->templateAccessService->getQuotaStatus($user);

        return $this->success([
            'data' => $data->values(),
            'quota' => $quota,
        ], 'Daftar template berhasil diambil.');
    }

    /**
     * Dapatkan status kuota dan pemakaian starter template pengguna saat ini.
     * GET /api/v1/subscription/template-quota
     */
    public function quota(Request $request): JsonResponse
    {
        $user = $request->user();
        $status = $this->templateAccessService->getQuotaStatus($user);

        return $this->success($status, 'Status kuota template pengguna berhasil diambil.');
    }

    /**
     * Cek apakah pengguna diizinkan menggunakan template tertentu.
     * GET /api/v1/templates/{id}/check-access
     */
    public function checkAccess(Request $request, int $id): JsonResponse
    {
        $user = $request->user();
        $template = Template::findOrFail($id);
        $access = $this->templateAccessService->canUseTemplate($user, $template);

        return $this->success($access, 'Informasi hak akses template berhasil diperiksa.');
    }

    /**
     * Terapkan template ke workspace pengguna dan catat kuota pemakaian.
     * POST /api/v1/templates/{id}/apply
     */
    public function apply(Request $request, int $id): JsonResponse
    {
        $user = $request->user();
        $template = Template::findOrFail($id);

        try {
            $result = $this->templateAccessService->applyTemplate($user, $template);

            return $this->success($result, $result['message'] ?? 'Template berhasil diterapkan.');
        } catch (AccessDeniedHttpException $e) {
            $quota = $this->templateAccessService->getQuotaStatus($user);

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'upgrade_required' => true,
                'data' => [
                    'reason' => $e->getMessage(),
                    'quota' => $quota,
                ],
            ], 403);
        } catch (\Throwable $e) {
            return $this->error('Gagal menerapkan template: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Aktifkan (pilih) template premium ke kuota user Starter.
     * POST /api/v1/templates/{id}/activate
     */
    public function activate(Request $request, int $id): JsonResponse
    {
        $user = $request->user();
        $template = Template::findOrFail($id);

        try {
            $result = $this->templateAccessService->activateTemplate($user, $template);

            return $this->success($result, $result['message'] ?? 'Template berhasil diaktifkan.');
        } catch (AccessDeniedHttpException $e) {
            $quota = $this->templateAccessService->getQuotaStatus($user);

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'upgrade_required' => true,
                'data' => [
                    'reason' => $e->getMessage(),
                    'quota' => $quota,
                ],
            ], 403);
        } catch (\Throwable $e) {
            return $this->error('Gagal mengaktifkan template: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Nonaktifkan (hapus) template dari kuota user Starter.
     * DELETE /api/v1/templates/{id}/deactivate
     */
    public function deactivate(Request $request, int $id): JsonResponse
    {
        $user = $request->user();
        $template = Template::findOrFail($id);

        try {
            $result = $this->templateAccessService->deactivateTemplate($user, $template);

            return $this->success($result, $result['message'] ?? 'Template berhasil dinonaktifkan.');
        } catch (\Throwable $e) {
            return $this->error('Gagal menonaktifkan template: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Endpoint "Gunakan Template" — validasi akses + terapkan + kembalikan konten.
     * POST /api/v1/templates/{id}/use
     */
    public function use(Request $request, int $id): JsonResponse
    {
        $user = $request->user();
        $template = Template::with('industryCategory')->findOrFail($id);

        try {
            $result = $this->templateAccessService->applyTemplate($user, $template);

            return $this->success($result, $result['message'] ?? 'Template siap digunakan di Builder.');
        } catch (AccessDeniedHttpException $e) {
            $quota = $this->templateAccessService->getQuotaStatus($user);

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
                'upgrade_required' => true,
                'data' => [
                    'reason' => $e->getMessage(),
                    'quota' => $quota,
                ],
            ], 403);
        } catch (\Throwable $e) {
            return $this->error('Gagal menggunakan template: ' . $e->getMessage(), 500);
        }
    }
}
