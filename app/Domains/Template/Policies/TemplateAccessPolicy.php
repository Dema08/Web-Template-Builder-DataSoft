<?php

namespace App\Domains\Template\Policies;

use App\Domains\Template\Models\Template;
use App\Domains\Template\Services\TemplateAccessService;
use App\Domains\User\Models\User;

/**
 * TemplateAccessPolicy
 *
 * Policy terpusat untuk memastikan user tidak bisa membuka Builder
 * dengan template premium di luar hak paketnya.
 */
class TemplateAccessPolicy
{
    public function __construct(
        protected TemplateAccessService $accessService
    ) {}

    /**
     * Apakah user boleh memakai template ini di Builder / Onboarding.
     */
    public function use(User $user, Template $template): bool
    {
        $access = $this->accessService->canUseTemplate($user, $template);

        return (bool) ($access['allowed'] ?? false);
    }

    /**
     * Pesan penolakan untuk user yang tidak berhak.
     */
    public function denialReason(User $user, Template $template): string
    {
        $access = $this->accessService->canUseTemplate($user, $template);

        return (string) ($access['reason'] ?? 'Akses ke template ini dibatasi oleh paket langganan Anda.');
    }
}
