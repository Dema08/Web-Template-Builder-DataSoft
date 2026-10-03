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
  const [publishResult, setPublishResult] = useState(null);
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

        // 1. Check if user came from Templates page with a pending template selection
        const editTemplateId = sessionStorage.getItem('edit_template_id') || sessionStorage.getItem('draft_template_id');
        const editTemplateName = sessionStorage.getItem('edit_template_name') || sessionStorage.getItem('draft_template_name');
        const pendingTemplateId = sessionStorage.getItem('pending_template_id');
        const pendingTemplateName = sessionStorage.getItem('pending_template_name');
        const blankMode = sessionStorage.getItem('blank_template_mode');
        const urlWebsiteId = new URLSearchParams(window.location.search).get('website_id');

        // ─── MODE: Edit User Draft Template (dari My Templates → Edit Builder) ───
        // Langsung update template yang ada, TANPA membuat template baru (mencegah duplikasi)
        if (editTemplateId) {
          sessionStorage.removeItem('edit_template_id');
          sessionStorage.removeItem('edit_template_name');

          try {
            const res = await templateApi.getMyTemplate(editTemplateId);
            const templateData = res.data?.data ?? res.data;

            if (templateData && isMounted) {
              // Parse sections & pages dari draft_json (fallback ke published_json)
              let sectionsToLoad = [];
              const draftObj = templateData.draft_json;
              const pubObj = templateData.published_json;

              if (Array.isArray(draftObj)) {
                sectionsToLoad = draftObj;
              } else if (draftObj && Array.isArray(draftObj.sections)) {
                sectionsToLoad = draftObj.sections;
              } else if (Array.isArray(pubObj)) {
                sectionsToLoad = pubObj;
              } else if (pubObj && Array.isArray(pubObj.sections)) {
                sectionsToLoad = pubObj.sections;
              }

              const pagesToLoad = (draftObj && typeof draftObj === 'object' && draftObj.pages)
                ? draftObj.pages
                : ((pubObj && typeof pubObj === 'object' && pubObj.pages) ? pubObj.pages : {});

              if (sectionsToLoad.length > 0) {
                loadSections(sectionsToLoad, pagesToLoad);
              }
              const tplName = templateData.name || editTemplateName || 'Draft Template';
              setTemplateName(tplName);

              const numId = Number(editTemplateId);
              setActiveDraftTemplateId(numId);
              setActiveDraftTemplateName(tplName);

              try {
                sessionStorage.setItem('draft_template_id', String(numId));
                sessionStorage.setItem('draft_template_name', tplName);
              } catch (_) {}

              toast.success(`Template "${tplName}" berhasil dimuat untuk diedit!`, 'Edit Mode');
              setIsLoadingContent(false);
              return;
            }
          } catch (editErr) {
            console.warn('Gagal memuat template untuk edit, fallback ke website content:', editErr);
            try {
              sessionStorage.removeItem('draft_template_id');
              sessionStorage.removeItem('draft_template_name');
            } catch (_) {}
          }
        }

        // Blank Template mode — selalu diizinkan (tanpa memuat layout template manapun)
        if (blankMode) {
          sessionStorage.removeItem('blank_template_mode');
          sessionStorage.removeItem('pending_template_id');
          sessionStorage.removeItem('pending_template_name');
          sessionStorage.removeItem('draft_template_id');
          sessionStorage.removeItem('draft_template_name');
          if (isMounted) {
            loadSections([]);
            setTemplateName('Blank Website');
            try {
              const newSite = await websiteApi.saveContent({
                draft_json: { sections: [] },
                name: 'Blank Website',
                is_new: true,
              });
              if (newSite?.id) {
                setWebsiteInfo(newSite);
                window.history.replaceState(null, '', `${ROUTES.BUILDER}?website_id=${newSite.id}`);
              }
            } catch (blankErr) {
              console.warn('Could not create blank site:', blankErr);
            }
            toast.success('Builder dibuka dengan Template Kosong.', 'Blank Template');
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
              const siteName = templateData.name || pendingTemplateName || 'My Website';
              setTemplateName(siteName);

              // Auto-create a NEW website record for this selected template
              try {
                const newSite = await websiteApi.saveContent({
                  draft_json: { sections: sectionsToLoad },
                  template_id: Number(pendingTemplateId),
                  name: siteName,
                  is_new: true,
                });
                if (newSite?.id) {
                  setWebsiteInfo(newSite);
                  window.history.replaceState(null, '', `${ROUTES.BUILDER}?website_id=${newSite.id}`);
                }
              } catch (saveErr) {
                console.warn('Gagal membuat website baru untuk template:', saveErr);
                if (saveErr?.response?.status === 422) {
                  toast.error(saveErr?.response?.data?.message || 'Batas jumlah website paket tercapai.', 'Quota Exceeded');
                  navigate(ROUTES.WEBSITES, { replace: true });
                  return;
                }
              }

              toast.success(`Website baru dari template "${templateData.name || 'Selected Template'}" berhasil dibuat!`, 'Template Loaded');
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

        // 2. Fetch existing user website content (only when not creating new template)
        try {
          const site = await websiteApi.getWebsite(urlWebsiteId);
          if (site && isMounted) {
            setWebsiteInfo(site);
            if (site.id && !urlWebsiteId) {
              window.history.replaceState(null, '', `${ROUTES.BUILDER}?website_id=${site.id}`);
            }
          }
          const res = await websiteApi.getContent(urlWebsiteId || site?.id);
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
    const currentDraftId = activeDraftTemplateId || Number(sessionStorage.getItem('draft_template_id')) || null;
    const templateName = name || activeDraftTemplateName || sessionStorage.getItem('draft_template_name') || 'Draft Template';

    const draftJson = useBuilderStore.getState().serializeDraftJson();

    try {
      if (currentDraftId) {
        // Update template draft yang sudah ada
        await templateApi.updateMyTemplate(currentDraftId, {
          name: templateName,
          draft_json: draftJson,
          status: 'draft',
        });
        setActiveDraftTemplateId(currentDraftId);
        setActiveDraftTemplateName(templateName);
        try {
          sessionStorage.setItem('draft_template_id', String(currentDraftId));
          sessionStorage.setItem('draft_template_name', templateName);
        } catch (_) {}
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
          `Draft "${templateName}" berhasil tersimpan!`,
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
    const activeId = activeDraftTemplateId || Number(sessionStorage.getItem('draft_template_id')) || null;
    if (activeId) {
      autoSaveIntervalRef.current = setInterval(() => {
        saveDraftTemplate({ silent: true });
      }, 10000); // 10 detik
    } else {
      clearInterval(autoSaveIntervalRef.current);
    }

    return () => clearInterval(autoSaveIntervalRef.current);
  }, [activeDraftTemplateId, saveDraftTemplate]);

  /**
   * Dipanggil saat user klik tombol "Save Draft" di Toolbar.
   * Jika belum ada draft aktif → buka modal untuk isi nama.
   * Jika sudah ada draft aktif → langsung simpan (update).
   */
  const handleSaveDraft = async () => {
    const activeId = activeDraftTemplateId || Number(sessionStorage.getItem('draft_template_id')) || null;
    if (activeId) {
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
    try {
      sessionStorage.removeItem('edit_template_id');
      sessionStorage.removeItem('edit_template_name');
      sessionStorage.removeItem('draft_template_id');
      sessionStorage.removeItem('draft_template_name');
    } catch (_) {}
    navigate(ROUTES.TEMPLATES);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const currentDraftId = activeDraftTemplateId || Number(sessionStorage.getItem('draft_template_id')) || null;

      if (currentDraftId) {
        await saveDraftTemplate({ silent: false });
      } else {
        const draftJson = useBuilderStore.getState().serializeDraftJson();
        const currentWebsiteId = websiteInfo?.id || new URLSearchParams(window.location.search).get('website_id');
        await websiteApi.saveContent({ draft_json: draftJson, website_id: currentWebsiteId }, currentWebsiteId);
        queryClient.invalidateQueries([ROUTES.WEBSITES]);
        toast.success('Perubahan website berhasil disimpan!', 'Disimpan');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Gagal menyimpan perubahan.', 'Error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleOpenPublishModal = async () => {
    setPublishResult(null);
    try {
      const currentWebsiteId = websiteInfo?.id || new URLSearchParams(window.location.search).get('website_id');
      const site = await websiteApi.getWebsite(currentWebsiteId);
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
      const currentWebsiteId = websiteInfo?.id || new URLSearchParams(window.location.search).get('website_id');

      // 1. Save current canvas draft
      await websiteApi.saveContent({ draft_json: draftJson, website_id: currentWebsiteId }, currentWebsiteId);

      // 2. Execute publish with domain settings
      const res = await websiteApi.publish({ ...domainConfig, website_id: currentWebsiteId }, currentWebsiteId);
      const pubData = res?.data ?? res;

      setPublishResult(pubData);
      queryClient.invalidateQueries({ queryKey: ['websites'] });
      queryClient.invalidateQueries({ queryKey: ['website-quota'] });
      queryClient.invalidateQueries({ queryKey: [ROUTES.WEBSITES] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WEBSITE] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WEBSITE_CONTENT] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.DASHBOARD] });

      toast.success('Website berhasil dipublish. URL publik sudah siap disalin.', 'Publish Berhasil');
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
        thumbnail: templateData.bannerOption === 'default' ? '/images/default-template-banner.png' : undefined,
      };

      const res = await templateApi.saveAsUserTemplate(payload);
      const savedTemplate = res.data?.data ?? res.data;

      // Upload custom banner file jika user memilih upload custom banner
      if (templateData.bannerOption === 'custom' && templateData.bannerFile && savedTemplate?.id) {
        const formData = new FormData();
        formData.append('thumbnail', templateData.bannerFile);
        await templateApi.uploadMyTemplateThumbnail(savedTemplate.id, formData);
      }

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
            isEditing={!!(activeDraftTemplateId || sessionStorage.getItem('draft_template_id'))}
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
        onClose={() => {
          setIsPublishModalOpen(false);
          if (publishResult) navigate(ROUTES.WEBSITES);
        }}
        onPublish={handleConfirmPublish}
        initialSlug={websiteInfo?.slug || ''}
        initialCustomDomain={websiteInfo?.settings?.custom_domain || ''}
        initialDomainType={websiteInfo?.settings?.domain_type || 'subdomain'}
        websiteId={websiteInfo?.id || new URLSearchParams(window.location.search).get('website_id')}
        isPublishing={isPublishing}
        publishResult={publishResult}
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
