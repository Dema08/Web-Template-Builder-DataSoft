import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@store';
import { templateApi, websiteApi } from '@api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import BuilderLayout from '@builder/components/layouts/BuilderLayout';
import BuilderToolbar from '@builder/components/toolbar/BuilderToolbar';
import LeftPanel from '@builder/components/sidebar/LeftPanel';
import RightInspector from '@builder/components/property-panel/RightInspector';
import StatusBar from '@builder/components/status-bar/StatusBar';
import BuilderCanvas from '@builder/components/editing/BuilderCanvas';
import SectionCanvas from '@builder/components/editing/SectionCanvas';
import FloatingToolbar from '@builder/components/editing/FloatingToolbar';
import ContextMenu from '@builder/components/editing/ContextMenu';
import KeyboardShortcuts from '@builder/components/editing/KeyboardShortcuts';
import { useBuilderStore } from '@builder/stores/builderStore';
import BuilderErrorBoundary from '@builder/components/common/BuilderErrorBoundary';
import { PublishDomainModal } from '@shared/components/ui';
import SaveAsTemplateModal from '@builder/components/modals/SaveAsTemplateModal';
import SaveDraftModal from '@builder/components/modals/SaveDraftModal';
import { ROUTES, QUERY_KEYS } from '@constants';
import { Loader2 } from 'lucide-react';

export default function Builder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [isSaveAsTemplateOpen, setIsSaveAsTemplateOpen] = useState(false);
  const [isSavingTemplate, setIsSavingTemplate] = useState(false);
  const [websiteInfo, setWebsiteInfo] = useState(null);

  // Draft template to My Templates state
  const [isSaveDraftModalOpen, setIsSaveDraftModalOpen] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [activeDraftTemplateId, setActiveDraftTemplateId] = useState(null); // ID template draft yang sedang diedit
  const [activeDraftTemplateName, setActiveDraftTemplateName] = useState('');
  const [lastAutoSaveTime, setLastAutoSaveTime] = useState(null);
  const autoSaveIntervalRef = useRef(null);

  const {
    sections,
    loadSections,
    setTemplateName,
    selectSection,
    resetBuilder,
  } = useBuilderStore();

  // Load template or user website content on mount
  useEffect(() => {
    let isMounted = true;

    const initializeBuilderContent = async () => {
      try {
        setIsLoadingContent(true);

        // Fetch website metadata first
        try {
          const site = await websiteApi.getWebsite();
          if (site && isMounted) {
            setWebsiteInfo(site);
          }
        } catch (_siteErr) {
          // ignore
        }

        // 1. Check if user came from Templates page with a pending template selection
        const pendingTemplateId = sessionStorage.getItem('pending_template_id');
        const pendingTemplateName = sessionStorage.getItem('pending_template_name');
        const blankMode = sessionStorage.getItem('blank_template_mode');

        // Blank Template mode — selalu diizinkan (tanpa memuat layout template manapun)
        if (blankMode) {
          sessionStorage.removeItem('blank_template_mode');
          sessionStorage.removeItem('pending_template_id');
          sessionStorage.removeItem('pending_template_name');
          if (isMounted) {
            loadSections([]);
            setTemplateName('Blank Website');
            toast.success('Builder dibuka dengan Template Kosong.', 'Blank Template');
            await websiteApi.saveContent({ draft_json: { sections: [] } });
            setIsLoadingContent(false);
          }
          return;
        }

        if (pendingTemplateId) {
          sessionStorage.removeItem('pending_template_id');
          sessionStorage.removeItem('pending_template_name');

          // Pengecekan akses awal: template premium tanpa hak → redirect Gallery + notifikasi
          try {
            const accessRes = await templateApi.checkAccess(pendingTemplateId);
            const access = accessRes.data?.data ?? accessRes.data ?? {};
            if (access && access.allowed === false) {
              toast.error(access.reason || 'Akses ke template ini dibatasi oleh paket langganan Anda.', 'Akses Ditolak');
              navigate(ROUTES.TEMPLATES, { replace: true });
              return;
            }
          } catch (accessErr) {
            const msg = accessErr?.response?.data?.message;
            if (accessErr?.response?.status === 403) {
              toast.error(msg || 'Template ini memerlukan paket berlangganan.', 'Akses Ditolak');
              navigate(ROUTES.TEMPLATES, { replace: true });
              return;
            }
          }

          try {
            const res = await templateApi.useTemplate(pendingTemplateId);
            const payload = res.data?.data ?? res.data ?? {};
            const templateData = payload.template ?? (await templateApi.getPublicById(pendingTemplateId).then((r) => r.data?.data ?? r.data));

            if (templateData && isMounted) {
              const pubSections = templateData.published_json?.sections;
              const draftSections = templateData.draft_json?.sections;
              const sectionsToLoad = (pubSections && Array.isArray(pubSections) && pubSections.length > 0)
                ? pubSections
                : ((draftSections && Array.isArray(draftSections) && draftSections.length > 0) ? draftSections : []);

              if (sectionsToLoad.length > 0) {
                loadSections(sectionsToLoad);
              }
              setTemplateName(templateData.name || pendingTemplateName || 'My Website');
              toast.success(`Template "${templateData.name || 'Selected Template'}" berhasil dimuat ke Builder!`, 'Template Loaded');

              // Auto-save initial draft for user
              await websiteApi.saveContent({
                draft_json: { sections: sectionsToLoad },
              });
              setIsLoadingContent(false);
              return;
            }
          } catch (tplErr) {
            if (tplErr?.response?.status === 403) {
              toast.error(tplErr?.response?.data?.message || 'Akses ke template ini dibatasi oleh paket langganan Anda.', 'Akses Ditolak');
              navigate(ROUTES.TEMPLATES, { replace: true });
              return;
            }
            console.warn('Could not fetch selected template, falling back to website content:', tplErr);
          }
        }

        // 2. Fetch existing user website content
        try {
          const res = await websiteApi.getContent();
          const content = res.data?.data ?? res.data;

          if (content && isMounted) {
            const savedSections = content.sections || content.draft_json?.sections || content.published_json?.sections;
            if (savedSections && Array.isArray(savedSections) && savedSections.length > 0) {
              loadSections(savedSections);
            }
          }
        } catch (_err) {
          // New website with no content yet
        }

      } catch (err) {
        console.error('Error initializing builder:', err);
      } finally {
        if (isMounted) setIsLoadingContent(false);
      }
    };

    initializeBuilderContent();

    return () => {
      isMounted = false;
    };
  }, [loadSections, setTemplateName]);

  // ─── Draft Template Auto-Save to My Templates ───────────────────────────

  /**
   * Simpan konten builder saat ini ke template draft baru atau update yang ada.
   * Dipanggil oleh tombol "Save Draft" dan juga auto-save interval.
   * silent=true → tidak tampilkan toast (untuk auto-save).
   */
  const saveDraftTemplate = useCallback(async ({ name, silent = false } = {}) => {
    const templateName = name || activeDraftTemplateName;
    if (!templateName) return; // Butuh nama template

    const draftJson = useBuilderStore.getState().serializeDraftJson();

    try {
      if (activeDraftTemplateId) {
        // Update template draft yang sudah ada
        await templateApi.updateMyTemplate(activeDraftTemplateId, {
          draft_json: draftJson,
          status: 'draft',
        });
      } else {
        // Buat template draft baru
        const res = await templateApi.saveAsUserTemplate({
          name: templateName,
          draft_json: draftJson,
          visibility: 'private',
          status: 'draft',
        });
        const newTemplate = res.data?.data ?? res.data;
        if (newTemplate?.id) {
          setActiveDraftTemplateId(newTemplate.id);
          setActiveDraftTemplateName(templateName);
          // Simpan juga di sessionStorage agar reload tidak kehilangan context
          try {
            sessionStorage.setItem('draft_template_id', String(newTemplate.id));
            sessionStorage.setItem('draft_template_name', templateName);
          } catch (_) {}
        }
      }

      setLastAutoSaveTime(new Date());
      queryClient.invalidateQueries(['my-templates']);

      if (!silent) {
        toast.success(
          `Draft "${templateName}" tersimpan ke Template Saya!`,
          'Draft Disimpan'
        );
      }
    } catch (err) {
      if (!silent) {
        toast.error(
          err.response?.data?.message || 'Gagal menyimpan draft template.',
          'Error'
        );
      } else {
        console.warn('[AutoSave] Failed to auto-save draft template:', err);
      }
    }
  }, [activeDraftTemplateId, activeDraftTemplateName, queryClient]);

  // Auto-save setiap 10 detik jika ada draft template aktif
  useEffect(() => {
    if (activeDraftTemplateId) {
      autoSaveIntervalRef.current = setInterval(() => {
        saveDraftTemplate({ silent: true });
      }, 10000); // 10 detik
    } else {
      clearInterval(autoSaveIntervalRef.current);
    }

    return () => clearInterval(autoSaveIntervalRef.current);
  }, [activeDraftTemplateId, saveDraftTemplate]);

  // Cek sessionStorage: apakah user sebelumnya sudah punya draft template aktif
  useEffect(() => {
    const savedDraftId = sessionStorage.getItem('draft_template_id');
    const savedDraftName = sessionStorage.getItem('draft_template_name');
    if (savedDraftId && savedDraftName) {
      setActiveDraftTemplateId(Number(savedDraftId));
      setActiveDraftTemplateName(savedDraftName);
    }
  }, []);

  /**
   * Dipanggil saat user klik tombol "Save Draft" di Toolbar.
   * Jika belum ada draft aktif → buka modal untuk isi nama.
   * Jika sudah ada draft aktif → langsung simpan (update).
   */
  const handleSaveDraft = async () => {
    if (activeDraftTemplateId) {
      // Sudah ada draft aktif → langsung auto-save
      setIsSavingDraft(true);
      try {
        await saveDraftTemplate({ silent: false });
      } finally {
        setIsSavingDraft(false);
      }
    } else {
      // Belum ada draft → minta nama dulu
      setIsSaveDraftModalOpen(true);
    }
  };

  const handleConfirmSaveDraft = async ({ name }) => {
    setIsSavingDraft(true);
    try {
      await saveDraftTemplate({ name, silent: false });
      setIsSaveDraftModalOpen(false);
    } finally {
      setIsSavingDraft(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────

  const handleBack = () => {
    navigate(ROUTES.TEMPLATES);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const draftJson = useBuilderStore.getState().serializeDraftJson();

      await websiteApi.saveContent({ draft_json: draftJson });
      queryClient.invalidateQueries([ROUTES.WEBSITES]);
      toast.success('Perubahan website berhasil disimpan!', 'Disimpan');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Gagal menyimpan perubahan website.', 'Error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleOpenPublishModal = async () => {
    try {
      const site = await websiteApi.getWebsite();
      if (site) setWebsiteInfo(site);
    } catch (_e) {
      // ignore
    }
    setIsPublishModalOpen(true);
  };

  const handleConfirmPublish = async (domainConfig) => {
    try {
      setIsPublishing(true);
      const draftJson = useBuilderStore.getState().serializeDraftJson();

      // 1. Save current canvas draft
      await websiteApi.saveContent({ draft_json: draftJson });

      // 2. Execute publish with domain settings
      const res = await websiteApi.publish(domainConfig);
      const pubData = res?.data ?? res;

      setIsPublishModalOpen(false);
      queryClient.invalidateQueries({ queryKey: [ROUTES.WEBSITES] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WEBSITE] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WEBSITE_CONTENT] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DASHBOARD] });

      toast.success(
        <div>
          <p className="font-bold">Website Berhasil Dipublish!</p>
          {pubData?.published_url && (
            <a
              href={pubData.published_url}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-indigo-200 underline mt-1 inline-block"
            >
              Lihat Website Live ({pubData?.domain_type === 'custom' ? pubData.custom_domain : `${pubData.website?.slug}.microdata.id`}) →
            </a>
          )}
        </div>,
        'Publish Berhasil'
      );

      // Keluar dari builder menuju ke halaman website
      navigate(ROUTES.WEBSITES);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Gagal mempublish website.', 'Error');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleConfirmSaveAsTemplate = async (templateData) => {
    try {
      setIsSavingTemplate(true);
      const draftJson = useBuilderStore.getState().serializeDraftJson();

      const payload = {
        name: templateData.name,
        description: templateData.description,
        visibility: templateData.visibility,
        draft_json: draftJson,
      };

      await templateApi.saveAsUserTemplate(payload);
      setIsSaveAsTemplateOpen(false);
      queryClient.invalidateQueries(['my-templates']);
      toast.success(
        `Template "${templateData.name}" berhasil disimpan sebagai template ${templateData.visibility === 'public' ? 'Publik' : 'Private'}!`,
        'Template Disimpan'
      );
    } catch (err) {
      toast.error(err.response?.data?.message || 'Gagal menyimpan template.', 'Error');
    } finally {
      setIsSavingTemplate(false);
    }
  };

  const handleCanvasClick = (e) => {
    if (e.target === e.currentTarget) {
      selectSection(null);
    }
  };

  if (isLoadingContent) {
    return (
      <div className="h-screen w-full bg-slate-900 flex flex-col items-center justify-center text-white">
        <Loader2 className="h-10 w-10 animate-spin text-indigo-500 mb-4" />
        <p className="text-sm font-extrabold tracking-wide">Memuat Microdata Builder...</p>
        <p className="text-xs text-slate-400 mt-1">Mengambil struktur template dan section website</p>
      </div>
    );
  }

  return (
    <>
      <KeyboardShortcuts />
      <FloatingToolbar />
      <ContextMenu />

      <BuilderLayout
        toolbar={
          <BuilderToolbar
            onBack={handleBack}
            onSave={handleSave}
            onPublish={handleOpenPublishModal}
            onSaveAsTemplate={() => setIsSaveAsTemplateOpen(true)}
            onSaveDraft={handleSaveDraft}
            isSaving={isSaving}
            isPublishing={isPublishing}
            isSavingDraft={isSavingDraft}
            activeDraftTemplateName={activeDraftTemplateName}
            lastAutoSaveTime={lastAutoSaveTime}
          />
        }
        leftPanel={
          <BuilderErrorBoundary title="Left Navigation Panel">
            <LeftPanel />
          </BuilderErrorBoundary>
        }
        rightPanel={
          <BuilderErrorBoundary title="Inspector Property Panel">
            <RightInspector />
          </BuilderErrorBoundary>
        }
        statusBar={<StatusBar />}
      >
        <BuilderCanvas>
          <div onClick={handleCanvasClick} className="w-full min-h-full">
            <BuilderErrorBoundary title="Canvas Section Renderer">
              <SectionCanvas />
            </BuilderErrorBoundary>
          </div>
        </BuilderCanvas>
      </BuilderLayout>

      <PublishDomainModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
        onPublish={handleConfirmPublish}
        initialSlug={websiteInfo?.slug || ''}
        initialCustomDomain={websiteInfo?.settings?.custom_domain || ''}
        initialDomainType={websiteInfo?.settings?.domain_type || 'subdomain'}
        isPublishing={isPublishing}
      />

      <SaveAsTemplateModal
        isOpen={isSaveAsTemplateOpen}
        onClose={() => setIsSaveAsTemplateOpen(false)}
        onSave={handleConfirmSaveAsTemplate}
        isSaving={isSavingTemplate}
      />

      <SaveDraftModal
        isOpen={isSaveDraftModalOpen}
        onClose={() => setIsSaveDraftModalOpen(false)}
        onSave={handleConfirmSaveDraft}
        isSaving={isSavingDraft}
      />
    </>
  );
}
