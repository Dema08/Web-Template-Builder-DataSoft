import { create } from 'zustand';
import { templateApi, pricelistApi } from '../api';
import { toast } from './toastStore';

/**
 * useSubscriptionStore
 *
 * Mengelola state paket langganan pengguna, kuota Starter Template,
 * riwayat template yang telah digunakan, dan kontrol modal Upgrade.
 */
export const useSubscriptionStore = create((set, get) => ({
  plan: 'free',
  planName: 'Free',
  templateLimit: 0,
  usedTemplateCount: 0,
  remainingQuota: 0,
  usedTemplateIds: [],
  usedTemplates: [],
  isUnlimited: false,
  isFree: true,
  isLoading: false,
  error: null,

  // Daftar paket untuk UpgradeModal (diambil dari public pricelists)
  availablePlans: [],
  isPlansLoading: false,

  // Upgrade Modal State
  isUpgradeModalOpen: false,
  upgradeModalData: {
    title: 'Upgrade Paket Anda',
    message: 'Akses Starter Template dibatasi berdasarkan paket langganan Anda.',
    reason: '',
    targetPlan: 'starter',
  },

  /**
   * Mengambil status paket dan kuota template pengguna terkini dari backend.
   */
  fetchSubscriptionStatus: async () => {
    try {
      set({ isLoading: true, error: null });
      const res = await templateApi.getQuota();
      const data = res.data?.data ?? res.data ?? {};
      const usedIds = Array.isArray(data.used_template_ids)
        ? data.used_template_ids.map(Number)
        : [];

      set({
        plan: data.plan || 'free',
        planName: data.plan_name || 'Free',
        templateLimit: data.limit !== undefined ? Number(data.limit) : 0,
        usedTemplateCount: Number(data.used_count || 0),
        remainingQuota: data.remaining_quota,
        usedTemplateIds: usedIds,
        usedTemplates: usedIds.map((id) => ({ id })),
        isUnlimited: data.is_unlimited ?? (data.limit === -1),
        isFree: data.is_free ?? (data.limit === 0),
        isLoading: false,
      });
      return data;
    } catch (err) {
      console.warn('Gagal memuat status kuota langganan:', err);
      set({ isLoading: false, error: err.message });
      return null;
    }
  },

  /**
   * Ambil daftar paket aktif untuk ditampilkan di UpgradeModal.
   */
  fetchAvailablePlans: async () => {
    try {
      set({ isPlansLoading: true });
      const res = await pricelistApi.getPublic();
      const plans = res?.data ?? res ?? [];
      set({ availablePlans: Array.isArray(plans) ? plans : [], isPlansLoading: false });
      return plans;
    } catch (err) {
      set({ isPlansLoading: false });
      return [];
    }
  },

  /**
   * Helper sinkron untuk mengecek apakah user boleh menggunakan template ini.
   */
  canUseTemplate: (templateId, isBlank = false) => {
    const { isUnlimited, isFree, templateLimit, usedTemplateCount, usedTemplateIds } = get();

    if (isBlank || isUnlimited) return true;

    // Jika template ID sudah pernah digunakan, bebas re-use tanpa memotong kuota baru
    if (usedTemplateIds.includes(Number(templateId))) return true;

    // Free user tidak bisa menggunakan starter template baru
    if (isFree || templateLimit === 0) return false;

    // Starter user: cek apakah kuota masih ada
    return usedTemplateCount < templateLimit;
  },

  /**
   * Menerapkan template ke workspace dan mencatat kuota di backend.
   */
  applyTemplate: async (templateId) => {
    try {
      set({ isLoading: true });
      const res = await templateApi.apply(templateId);
      const data = res.data?.data ?? res.data ?? {};

      // Update quota status in store jika dikembalikan oleh API
      if (data.quota) {
        set({
          plan: data.quota.plan || get().plan,
          planName: data.quota.plan_name || get().planName,
          templateLimit: Number(data.quota.limit ?? get().templateLimit),
          usedTemplateCount: Number(data.quota.used_count ?? get().usedTemplateCount),
          remainingQuota: data.quota.remaining_quota,
          usedTemplateIds: Array.isArray(data.quota.used_template_ids)
            ? data.quota.used_template_ids.map(Number)
            : [...get().usedTemplateIds, Number(templateId)],
          isUnlimited: data.quota.is_unlimited,
          isFree: data.quota.is_free,
        });
      }

      set({ isLoading: false });
      return { success: true, data };
    } catch (err) {
      set({ isLoading: false });
      const errorResponse = err.response?.data;
      const isUpgradeRequired = errorResponse?.upgrade_required || err.response?.status === 403;
      const errorMessage = errorResponse?.message || 'Gagal menerapkan template.';

      if (isUpgradeRequired) {
        get().openUpgradeModal({
          title: get().isFree ? 'Fitur Khusus Paket Starter' : 'Batas Kuota Tercapai',
          message: errorMessage,
          reason: errorMessage,
          targetPlan: get().isFree ? 'starter' : 'unlimited',
        });
      } else {
        toast.error(errorMessage, 'Akses Ditolak');
      }

      return { success: false, error: errorMessage, upgradeRequired: isUpgradeRequired };
    }
  },

  /**
   * Aktifkan (pilih) template premium ke kuota user Starter.
   */
  activateTemplate: async (templateId) => {
    try {
      set({ isLoading: true, error: null });
      const res = await templateApi.activate(templateId);
      const data = res.data?.data ?? res.data ?? {};
      if (data.quota) {
        const usedIds = Array.isArray(data.quota.used_template_ids)
          ? data.quota.used_template_ids.map(Number)
          : get().usedTemplateIds;
        set({
          usedTemplateCount: Number(data.quota.used_count ?? get().usedTemplateCount),
          remainingQuota: data.quota.remaining_quota,
          usedTemplateIds: usedIds,
          usedTemplates: usedIds.map((id) => ({ id })),
          isLoading: false,
        });
      } else {
        set({ isLoading: false });
      }
      return { success: true, data };
    } catch (err) {
      set({ isLoading: false });
      const msg = err.response?.data?.message || 'Gagal mengaktifkan template.';
      if (err.response?.status === 403) {
        get().openUpgradeModal({
          title: get().isFree ? 'Template ini memerlukan paket berlangganan' : 'Batas maksimal template telah tercapai',
          message: msg,
          reason: msg,
          targetPlan: get().isFree ? 'starter' : 'unlimited',
        });
        return { success: false, error: msg, upgradeRequired: true };
      }
      toast.error(msg, 'Gagal Mengaktifkan');
      return { success: false, error: msg };
    }
  },

  /**
   * Nonaktifkan (hapus) template dari kuota — user bisa ganti pilihan.
   */
  deactivateTemplate: async (templateId) => {
    try {
      set({ isLoading: true, error: null });
      const res = await templateApi.deactivate(templateId);
      const data = res.data?.data ?? res.data ?? {};
      if (data.quota) {
        const usedIds = Array.isArray(data.quota.used_template_ids)
          ? data.quota.used_template_ids.map(Number)
          : get().usedTemplateIds.filter((id) => Number(id) !== Number(templateId));
        set({
          usedTemplateCount: Number(data.quota.used_count ?? usedIds.length),
          remainingQuota: data.quota.remaining_quota,
          usedTemplateIds: usedIds,
          usedTemplates: usedIds.map((id) => ({ id })),
          isLoading: false,
        });
      } else {
        const usedIds = get().usedTemplateIds.filter((id) => Number(id) !== Number(templateId));
        set({ usedTemplateIds: usedIds, usedTemplates: usedIds.map((id) => ({ id })), isLoading: false });
      }
      toast.success('Template dihapus dari pilihan Anda.', 'Kuota Diperbarui');
      return { success: true, data };
    } catch (err) {
      set({ isLoading: false });
      const msg = err.response?.data?.message || 'Gagal menonaktifkan template.';
      toast.error(msg, 'Gagal');
      return { success: false, error: msg };
    }
  },

  /**
   * Endpoint "Gunakan Template" — validasi + terapkan via backend.
   */
  useTemplate: async (templateId) => {
    try {
      set({ isLoading: true, error: null });
      const res = await templateApi.useTemplate(templateId);
      const data = res.data?.data ?? res.data ?? {};
      if (data.quota) {
        const usedIds = Array.isArray(data.quota.used_template_ids)
          ? data.quota.used_template_ids.map(Number)
          : get().usedTemplateIds;
        set({
          usedTemplateCount: Number(data.quota.used_count ?? get().usedTemplateCount),
          remainingQuota: data.quota.remaining_quota,
          usedTemplateIds: usedIds,
          isLoading: false,
        });
      } else {
        set({ isLoading: false });
      }
      return { success: true, data };
    } catch (err) {
      set({ isLoading: false });
      const errorResponse = err.response?.data;
      const msg = errorResponse?.message || 'Gagal menggunakan template.';
      if (errorResponse?.upgrade_required || err.response?.status === 403) {
        get().openUpgradeModal({
          title: get().isFree ? 'Template ini memerlukan paket berlangganan' : 'Batas maksimal template telah tercapai',
          message: msg,
          reason: msg,
          targetPlan: get().isFree ? 'starter' : 'unlimited',
        });
        return { success: false, error: msg, upgradeRequired: true };
      }
      toast.error(msg, 'Gagal');
      return { success: false, error: msg };
    }
  },

  /**
   * Buka popup modal ajakan upgrade
   */
  openUpgradeModal: (data = {}) => {
    set({
      isUpgradeModalOpen: true,
      upgradeModalData: {
        title: data.title || (get().isFree ? 'Upgrade ke Starter Template' : 'Upgrade ke Unlimited'),
        message: data.message || 'Nikmati kebebasan menggunakan template profesional untuk website Anda.',
        reason: data.reason || '',
        targetPlan: data.targetPlan || (get().isFree ? 'starter' : 'unlimited'),
      },
    });
  },

  /**
   * Tutup modal upgrade
   */
  closeUpgradeModal: () => {
    set({ isUpgradeModalOpen: false });
  },

  /**
   * Reset store (misal saat logout)
   */
  resetSubscriptionState: () => {
    set({
      plan: 'free',
      planName: 'Free',
      templateLimit: 0,
      usedTemplateCount: 0,
      remainingQuota: 0,
      usedTemplateIds: [],
      usedTemplates: [],
      isUnlimited: false,
      isFree: true,
      isLoading: false,
      error: null,
      availablePlans: [],
      isPlansLoading: false,
      isUpgradeModalOpen: false,
    });
  },
}));
