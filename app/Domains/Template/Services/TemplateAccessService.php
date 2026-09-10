<?php

namespace App\Domains\Template\Services;

use App\Domains\Template\Models\Template;
use App\Domains\Template\Models\TemplateUsage;
use App\Domains\User\Models\User;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 * TemplateAccessService
 *
 * Mengelola aturan bisnis pembatasan Starter Template berdasarkan Paket Langganan:
 *   - Free: Hanya preview / Blank Template (Starter template terkunci dengan prompt PRO/Upgrade).
 *   - Starter (maks_starter_template > 0): Maksimal N template berbeda (misal 5). Re-use template yang sama tidak mengurangi kuota.
 *   - Unlimited (maks_starter_template = -1): Tanpa batas kuota.
 */
class TemplateAccessService
{
    /**
     * Cek apakah user berhak menggunakan / menerapkan template tertentu ke canvas.
     */
    public function canUseTemplate(User $user, Template|int $template): array
    {
        $templateModel = $template instanceof Template ? $template : Template::findOrFail($template);
        $isBlank = $templateModel->isBlankTemplate();
        $isPremium = $templateModel->isPremium();
        $isAlreadyActivated = $this->isTemplateActivated($user, $templateModel->id);

        // Admin & Superadmin selalu memiliki akses unlimited
        if ($user->isAdmin()) {
            return [
                'allowed' => true,
                'reason' => null,
                'plan' => 'unlimited',
                'plan_name' => 'Admin Unlimited',
                'limit' => -1,
                'used_count' => $user->templateUsages()->count(),
                'remaining_quota' => 'unlimited',
                'is_already_used' => true,
                'is_activated' => true,
                'is_blank' => $isBlank,
                'is_premium' => $isPremium,
            ];
        }

        // Blank Template selalu bebas digunakan oleh semua user
        if ($isBlank) {
            $quota = $this->getQuotaStatus($user);
            return array_merge($quota, [
                'allowed' => true,
                'reason' => null,
                'is_already_used' => true,
                'is_activated' => true,
                'is_blank' => true,
                'is_premium' => false,
            ]);
        }

        // Template non-premium (free) selalu bisa dipakai semua user
        if (!$isPremium) {
            $quota = $this->getQuotaStatus($user);
            return array_merge($quota, [
                'allowed' => true,
                'reason' => null,
                'is_already_used' => $isAlreadyActivated,
                'is_activated' => $isAlreadyActivated,
                'is_blank' => false,
                'is_premium' => false,
            ]);
        }

        $plan = $user->effective_pricelist;
        $planSlug = strtolower($plan->slug ?? 'free');
        $limit = (int) ($plan->maks_starter_template ?? 0);

        // Ambil riwayat template yang sudah pernah digunakan oleh user
        $usedTemplateIds = $user->templateUsages()->pluck('template_id')->toArray();
        $isAlreadyUsed = in_array($templateModel->id, $usedTemplateIds);
        $usedCount = count($usedTemplateIds);

        // 1. FREE PLAN (maks_starter_template = 0)
        if ($limit === 0) {
            if ($isAlreadyUsed) {
                return [
                    'allowed' => true,
                    'reason' => null,
                    'plan' => 'free',
                    'plan_name' => $plan->nama ?? 'Free',
                    'limit' => 0,
                    'used_count' => $usedCount,
                    'remaining_quota' => 0,
                    'is_already_used' => true,
                    'is_blank' => false,
                ];
            }

            return [
                'allowed' => false,
                'reason' => 'Template ini adalah Starter Template (PRO). Silakan upgrade ke paket Starter untuk menggunakan template ini.',
                'plan' => 'free',
                'plan_name' => $plan->nama ?? 'Free',
                'limit' => 0,
                'used_count' => $usedCount,
                'remaining_quota' => 0,
                'is_already_used' => false,
                'is_activated' => false,
                'is_blank' => false,
                'is_premium' => true,
            ];
        }

        // 2. UNLIMITED PLAN (maks_starter_template = -1)
        if ($limit === -1) {
            return [
                'allowed' => true,
                'reason' => null,
                'plan' => $planSlug,
                'plan_name' => $plan->nama ?? 'Unlimited',
                'limit' => -1,
                'used_count' => $usedCount,
                'remaining_quota' => 'unlimited',
                'is_already_used' => $isAlreadyUsed,
                'is_activated' => $isAlreadyUsed,
                'is_blank' => false,
                'is_premium' => true,
            ];
        }

        // 3. STARTER / LIMITED PLAN (maks_starter_template > 0)
        if ($isAlreadyUsed) {
            // Re-using the same template does NOT consume additional quota
            return [
                'allowed' => true,
                'reason' => null,
                'plan' => $planSlug,
                'plan_name' => $plan->nama ?? 'Starter',
                'limit' => $limit,
                'used_count' => $usedCount,
                'remaining_quota' => max(0, $limit - $usedCount),
                'is_already_used' => true,
                'is_activated' => true,
                'is_blank' => false,
                'is_premium' => true,
            ];
        }

        // Template baru yang belum pernah digunakan
        if ($usedCount < $limit) {
            return [
                'allowed' => true,
                'reason' => null,
                'plan' => $planSlug,
                'plan_name' => $plan->nama ?? 'Starter',
                'limit' => $limit,
                'used_count' => $usedCount,
                'remaining_quota' => max(0, $limit - $usedCount),
                'is_already_used' => false,
                'is_activated' => false,
                'is_blank' => false,
                'is_premium' => true,
            ];
        }

        // Batas kuota template berbeda telah tercapai
        return [
            'allowed' => false,
            'reason' => "Batas maksimal {$limit} template telah tercapai. Hapus salah satu pilihan atau upgrade ke paket Unlimited untuk mengakses semua template.",
            'plan' => $planSlug,
            'plan_name' => $plan->nama ?? 'Starter',
            'limit' => $limit,
            'used_count' => $usedCount,
            'remaining_quota' => 0,
            'is_already_used' => false,
            'is_activated' => false,
            'is_blank' => false,
            'is_premium' => true,
        ];
    }

    /**
     * Dapatkan status kuota dan pemakaian template pengguna saat ini.
     */
    public function getQuotaStatus(User $user): array
    {
        if ($user->isAdmin()) {
            return [
                'plan' => 'unlimited',
                'plan_name' => 'Admin Unlimited',
                'limit' => -1,
                'used_count' => $user->templateUsages()->count(),
                'remaining_quota' => 'unlimited',
                'used_template_ids' => $user->templateUsages()->pluck('template_id')->toArray(),
                'is_unlimited' => true,
                'is_free' => false,
            ];
        }

        $plan = $user->effective_pricelist;
        $planSlug = strtolower($plan->slug ?? 'free');
        $limit = (int) ($plan->maks_starter_template ?? 0);
        $usedTemplateIds = $user->templateUsages()->pluck('template_id')->toArray();
        $usedCount = count($usedTemplateIds);

        $remainingQuota = match (true) {
            $limit === -1 => 'unlimited',
            $limit === 0 => 0,
            default => max(0, $limit - $usedCount),
        };

        return [
            'plan' => $planSlug,
            'plan_name' => $plan->nama ?? 'Free',
            'limit' => $limit,
            'used_count' => $usedCount,
            'remaining_quota' => $remainingQuota,
            'used_template_ids' => $usedTemplateIds,
            'is_unlimited' => $limit === -1,
            'is_free' => $limit === 0,
        ];
    }

    /**
     * Terapkan template ke workspace pengguna dan catat penggunaan kuota.
     */
    public function applyTemplate(User $user, Template|int $template): array
    {
        $templateModel = $template instanceof Template ? $template : Template::findOrFail($template);
        $access = $this->canUseTemplate($user, $templateModel);

        if (!$access['allowed']) {
            throw new AccessDeniedHttpException($access['reason'] ?? 'Akses ke template ini dibatasi oleh paket langganan Anda.');
        }

        // Catat penggunaan jika bukan blank template dan belum pernah dicatat
        if (!$templateModel->isBlankTemplate() && !$user->isAdmin()) {
            TemplateUsage::firstOrCreate([
                'pengguna_id' => $user->id,
                'template_id' => $templateModel->id,
            ]);
        }

        // Ambil status kuota terkini setelah pencatatan
        $updatedQuota = $this->getQuotaStatus($user);

        return [
            'template' => [
                'id' => $templateModel->id,
                'name' => $templateModel->name,
                'slug' => $templateModel->slug,
                'draft_json' => $templateModel->draft_json,
                'published_json' => $templateModel->published_json,
            ],
            'quota' => $updatedQuota,
            'access' => $this->canUseTemplate($user->fresh(), $templateModel->id),
            'message' => "Template \"{$templateModel->name}\" berhasil diterapkan ke workspace.",
        ];
    }

    /**
     * Aktifkan (pilih) template premium ke dalam kuota user Starter.
     * POST /api/v1/templates/{id}/activate
     * Idempotent: template yang sudah aktif tidak memotong kuota lagi.
     */
    public function activateTemplate(User $user, Template|int $template): array
    {
        $templateModel = $template instanceof Template ? $template : Template::findOrFail($template);

        if ($templateModel->isBlankTemplate() || !$templateModel->isPremium()) {
            return [
                'activated' => true,
                'already' => true,
                'quota' => $this->getQuotaStatus($user),
                'access' => $this->canUseTemplate($user, $templateModel),
                'message' => 'Template gratis selalu tersedia tanpa memakai kuota.',
            ];
        }

        $access = $this->canUseTemplate($user, $templateModel);

        if (!$access['allowed']) {
            throw new AccessDeniedHttpException($access['reason'] ?? 'Batas maksimal template telah tercapai.');
        }

        $usage = TemplateUsage::firstOrCreate([
            'pengguna_id' => $user->id,
            'template_id' => $templateModel->id,
        ]);

        return [
            'activated' => true,
            'already' => !$usage->wasRecentlyCreated,
            'quota' => $this->getQuotaStatus($user->fresh()),
            'access' => $this->canUseTemplate($user->fresh(), $templateModel),
            'message' => $usage->wasRecentlyCreated
                ? "Template \"{$templateModel->name}\" ditambahkan ke pilihan Anda."
                : "Template \"{$templateModel->name}\" sudah ada di pilihan Anda.",
        ];
    }

    /**
     * Nonaktifkan (hapus) template dari kuota user Starter.
     * DELETE /api/v1/templates/{id}/deactivate
     */
    public function deactivateTemplate(User $user, Template|int $template): array
    {
        $templateModel = $template instanceof Template ? $template : Template::findOrFail($template);

        TemplateUsage::where('pengguna_id', $user->id)
            ->where('template_id', $templateModel->id)
            ->delete();

        return [
            'deactivated' => true,
            'quota' => $this->getQuotaStatus($user->fresh()),
            'access' => $this->canUseTemplate($user->fresh(), $templateModel),
            'message' => "Template \"{$templateModel->name}\" dihapus dari pilihan Anda. Kuota kembali tersedia.",
        ];
    }

    /**
     * Cek apakah template sudah diaktivasi (masuk kuota) user.
     */
    public function isTemplateActivated(User $user, int $templateId): bool
    {
        return TemplateUsage::where('pengguna_id', $user->id)
            ->where('template_id', $templateId)
            ->exists();
    }

    /**
     * Daftar template premium + status akses per user (untuk gallery / onboarding).
     * Mengembalikan array terindeks id template: ['can_use'=>bool,'is_activated'=>bool,'is_premium'=>bool].
     *
     * @param \Illuminate\Support\Collection|array $templates
     */
    public function mapAccessForTemplates(User $user, $templates): array
    {
        $map = [];
        foreach ($templates as $tpl) {
            $tplModel = $tpl instanceof Template ? $tpl : Template::find($tpl);
            if (!$tplModel) {
                continue;
            }
            $access = $this->canUseTemplate($user, $tplModel);
            $map[$tplModel->id] = [
                'can_use' => (bool) $access['allowed'],
                'is_activated' => (bool) ($access['is_activated'] ?? false),
                'is_premium' => (bool) ($access['is_premium'] ?? $tplModel->isPremium()),
                'is_blank' => (bool) ($access['is_blank'] ?? false),
                'reason' => $access['allowed'] ? null : ($access['reason'] ?? null),
            ];
        }

        return $map;
    }
}
