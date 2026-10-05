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
  const [isTemplateUpdateChoiceOpen, setIsTemplateUpdateChoiceOpen] = useState(false);
  const [isEditingUserTemplate, setIsEditingUserTemplate] = useState(false);
  const [activeDraftTemplateId, setActiveDraftTemplateId] = useState(null); // ID template draft yang sedang diedit
  const [activeDraftTemplateName, setActiveDraftTemplateName] = useState('');
  const [lastAutoSaveTime, setLastAutoSaveTime] = useState(null);
  const autoSaveIntervalRef = useRef(null);

  const {
    sections,
    loadSections,
    setTemplateName,
    setTemplateId,
    selectSection,
    resetBuilder,
  } = useBuilderStore();

  // Load template or user website content on mount
  useEffect(() => {
    let isMounted = true;

    const initializeBuilderContent = async () => {
      try {
        setIsLoadingContent(true);
        setTemplateId(null);

        const editTemplateId = sessionStorage.getItem('edit_template_id') || sessionStorage.getItem('draft_template_id');
        const editTemplateName = sessionStorage.getItem('edit_template_name') || sessionStorage.getItem('draft_template_name');
        const pendingTemplateId = sessionStorage.getItem('pending_template_id');
        const pendingTemplateName = sessionStorage.getItem('pending_template_name');
        const blankMode = sessionStorage.getItem('blank_template_mode');

        // Fetch existing website metadata ONLY if user is not creating a brand-new website from a template/blank mode
        if (!editTemplateId && !pendingTemplateId && !blankMode) {
          try {
            const site = await websiteApi.getWebsite();
            if (site && isMounted) {
              setWebsiteInfo(site);
            }
          } catch (_siteErr) {
            // ignore
          }
        }

        // ─── MODE: Edit User Draft Template (dari My Templates → Edit Builder) ───
        // Langsung update template yang ada, TANPA membuat template baru (mencegah duplikasi)
        if (editTemplateId) {
          setTemplateId(null);
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
              setIsEditingUserTemplate(true);

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
          setTemplateId(null);
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
              setTemplateId(Number(pendingTemplateId));
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

        // 2. Fetch existing user website content
        try {
          const site = await websiteApi.getWebsite();
          if (site && isMounted) {
            setTemplateId(site.template_id ? Number(site.template_id) : null);
            setWebsiteInfo(site);
            if (site.name) {
              setTemplateName(site.name);
            }
            const currentWebsiteId = new URLSearchParams(window.location.search).get('website_id');
            if (site.id && !currentWebsiteId) {
              window.history.replaceState(null, '', `${ROUTES.BUILDER}?website_id=${site.id}`);
            }
          }
          const res = await websiteApi.getContent();
          const content = res.data?.data ?? res.data ?? site?.draft_json ?? site?.published_json;

          if (content && isMounted) {
            let sectionsToLoad = [];
            let pagesToLoad = {};

            if (Array.isArray(content)) {
              sectionsToLoad = content;
            } else if (content && typeof content === 'object') {
              if (Array.isArray(content.sections)) {
                sectionsToLoad = content.sections;
              } else if (Array.isArray(content.draft_json?.sections)) {
                sectionsToLoad = content.draft_json.sections;
              } else if (Array.isArray(content.published_json?.sections)) {
                sectionsToLoad = content.published_json.sections;
              } else if (Array.isArray(content.draft_json)) {
                sectionsToLoad = content.draft_json;
              } else if (Array.isArray(content.published_json)) {
                sectionsToLoad = content.published_json;
              }
              if (content.pages) pagesToLoad = content.pages;
            }

            if (sectionsToLoad.length > 0) {
              loadSections(sectionsToLoad, pagesToLoad);
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
  }, [loadSections, setTemplateId, setTemplateName]);

  // ─── Draft Template Auto-Save to My Templates ───────────────────────────

  /**
   * Simpan konten builder saat ini ke template draft baru atau update yang ada.
   * Dipanggil oleh tombol "Save Draft" dan juga auto-save interval.
   * silent=true → tidak tampilkan toast (untuk auto-save).
   */
  const saveDraftTemplate = useCallback(async ({ name, bannerFile = null, silent = false } = {}) => {
    if (useBuilderStore.getState().hasPendingVideoUpload?.()) {
      if (!silent) toast.error('Selesaikan upload video background dulu (tunggu 100% / batalkan) sebelum menyimpan.', 'Video Belum Selesai');
      return false;
    }
    const currentDraftId = activeDraftTemplateId || Number(sessionStorage.getItem('draft_template_id')) || null;
    const templateName = name || activeDraftTemplateName || sessionStorage.getItem('draft_template_name') || 'Draft Template';

    const draftJson = useBuilderStore.getState().serializeDraftJson();
    let templateId = currentDraftId;

    try {
      if (currentDraftId) {
        // Update template draft yang sudah ada
        const updatePayload = {
          name: templateName,
          draft_json: draftJson,
          source_template_id: useBuilderStore.getState().templateId || undefined,
        };
        if (!isEditingUserTemplate) {
          updatePayload.status = 'draft';
        }
        await templateApi.updateMyTemplate(currentDraftId, updatePayload);
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
          source_template_id: useBuilderStore.getState().templateId || undefined,
        });
        const newTemplate = res.data?.data ?? res.data;
        if (!newTemplate?.id) {
          throw new Error('Template tersimpan tetapi ID template tidak diterima.');
        }
        templateId = newTemplate.id;
        setActiveDraftTemplateId(newTemplate.id);
        setActiveDraftTemplateName(templateName);
        try {
          sessionStorage.setItem('draft_template_id', String(newTemplate.id));
          sessionStorage.setItem('draft_template_name', templateName);
        } catch (_) {}
      }

      if (bannerFile && templateId) {
        const formData = new FormData();
        formData.append('thumbnail', bannerFile);
        await templateApi.uploadMyTemplateThumbnail(templateId, formData);
      }

      setLastAutoSaveTime(new Date());
      queryClient.invalidateQueries(['my-templates']);

      if (!silent) {
        toast.success(
          `Draft "${templateName}" berhasil tersimpan!`,
          'Draft Disimpan'
        );
      }
      return true;
    } catch (err) {
      if (!silent) {
        toast.error(
          err.response?.data?.message || 'Gagal menyimpan draft template.',
          'Error'
        );
      } else {
        console.warn('[AutoSave] Failed to auto-save draft template:', err);
      }
      return false;
    }
  }, [activeDraftTemplateId, activeDraftTemplateName, isEditingUserTemplate, queryClient]);

  // Auto-save setiap 10 detik jika ada draft template aktif
  useEffect(() => {
    const activeId = activeDraftTemplateId || Number(sessionStorage.getItem('draft_template_id')) || null;
    if (activeId && !isEditingUserTemplate) {
      autoSaveIntervalRef.current = setInterval(() => {
        saveDraftTemplate({ silent: true });
      }, 10000); // 10 detik
    } else {
      clearInterval(autoSaveIntervalRef.current);
    }

    return () => clearInterval(autoSaveIntervalRef.current);
  }, [activeDraftTemplateId, isEditingUserTemplate, saveDraftTemplate]);

  /**
   * Dipanggil saat user klik tombol "Save Draft" di Toolbar.
   * Buka modal agar nama dan banner opsional bisa dipilih sebelum penyimpanan.
   */
  const handleSaveDraft = async () => {
    setIsSaveDraftModalOpen(true);
  };

  const handleConfirmSaveDraft = async ({ name, bannerFile }) => {
    setIsSavingDraft(true);
    try {
      const saved = await saveDraftTemplate({ name, bannerFile, silent: false });
      if (saved) setIsSaveDraftModalOpen(false);
    } finally {
      setIsSavingDraft(false);
    }
  };

  const handleUpdateUserTemplate = async () => {
    const templateId = activeDraftTemplateId || Number(sessionStorage.getItem('draft_template_id'));
    if (!templateId) {
      toast.error('Template yang sedang diedit tidak ditemukan.', 'Gagal memperbarui');
      return;
    }

    try {
      setIsSaving(true);
      const draftJson = useBuilderStore.getState().serializeDraftJson();
      await templateApi.updateMyTemplate(templateId, {
        draft_json: draftJson,
        source_template_id: useBuilderStore.getState().templateId || undefined,
      });
      queryClient.invalidateQueries({ queryKey: ['my-templates'] });
      setIsTemplateUpdateChoiceOpen(false);
      toast.success(`Template "${activeDraftTemplateName || 'Template'}" berhasil diperbarui.`, 'Template Diperbarui');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Gagal memperbarui template.', 'Error');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublishUserTemplateAsWebsite = async () => {
    try {
      setIsSaving(true);
      const draftJson = useBuilderStore.getState().serializeDraftJson();
      const websiteName = activeDraftTemplateName || useBuilderStore.getState().templateName || 'Website';
      const res = await websiteApi.saveContent({
        draft_json: draftJson,
        name: websiteName,
        ...(useBuilderStore.getState().templateId
          ? { template_id: useBuilderStore.getState().templateId }
          : {}),
        is_new: true,
      });
      const newWebsite = res?.data ?? res;
      if (!newWebsite?.id) {
        throw new Error('Website baru tidak berhasil dibuat.');
      }

      setWebsiteInfo(newWebsite);
      setPublishResult(null);
      setIsTemplateUpdateChoiceOpen(false);
      window.history.replaceState(null, '', `${ROUTES.BUILDER}?website_id=${newWebsite.id}`);
      setIsPublishModalOpen(true);
      toast.success('Website draft berhasil dibuat. Tentukan subdomain untuk melanjutkan publish.', 'Siap Dipublish');
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || 'Gagal membuat website dari template.', 'Error');
    } finally {
      setIsSaving(false);
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
      if (useBuilderStore.getState().hasPendingVideoUpload?.()) {
        toast.error('Selesaikan upload video background dulu (tunggu 100% / batalkan) sebelum menyimpan.', 'Video Belum Selesai');
        return;
      }
      setIsSaving(true);
      const currentDraftId = activeDraftTemplateId || Number(sessionStorage.getItem('draft_template_id')) || null;

      if (currentDraftId) {
        await saveDraftTemplate({ silent: false });
      } else {
        const draftJson = useBuilderStore.getState().serializeDraftJson();
        const urlWebsiteId = new URLSearchParams(window.location.search).get('website_id');
        const activeWebsiteId = urlWebsiteId || (websiteInfo?.id ? String(websiteInfo.id) : null);
        const savePayload = {
          draft_json: draftJson,
          record_template_usage: true,
          source_template_id: useBuilderStore.getState().templateId || null,
        };
        if (activeWebsiteId) savePayload.website_id = activeWebsiteId;
        await websiteApi.saveContent(savePayload);
        queryClient.invalidateQueries({ queryKey: ['websites'] });
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
      const site = await websiteApi.getWebsite();
      if (site) setWebsiteInfo(site);
    } catch (_e) {
      // ignore
    }
    setIsPublishModalOpen(true);
  };

  const handleConfirmPublish = async (domainConfig) => {
    try {
      if (useBuilderStore.getState().hasPendingVideoUpload?.()) {
        toast.error('Selesaikan upload video background dulu (tunggu 100% / batalkan) sebelum publish.', 'Video Belum Selesai');
        return;
      }
      setIsPublishing(true);
      const draftJson = useBuilderStore.getState().serializeDraftJson();

      // Resolve the active website_id from URL query param or websiteInfo state
      const urlWebsiteId = new URLSearchParams(window.location.search).get('website_id');
      const activeWebsiteId = urlWebsiteId || (websiteInfo?.id ? String(websiteInfo.id) : null);
      if (!activeWebsiteId) {
        toast.error('Simpan website terlebih dahulu sebelum mempublikasikannya.', 'Gagal mempublish');
        return;
      }

      // Publish the exact current canvas snapshot so draft and live content are persisted atomically.
      const publishPayload = {
        ...domainConfig,
        website_id: activeWebsiteId,
        draft_json: draftJson,
        source_template_id: useBuilderStore.getState().templateId || null,
      };
      const res = await websiteApi.publish(publishPayload);
      const pubData = res?.data ?? res;

      const publishedWebsite = pubData?.website;
      if (publishedWebsite?.id) {
        setWebsiteInfo(publishedWebsite);
        window.history.replaceState(null, '', `${ROUTES.BUILDER}?website_id=${publishedWebsite.id}`);
      }
      setPublishResult({
        ...pubData,
        publish_action: domainConfig.publish_action || 'update',
      });
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
        source_template_id: useBuilderStore.getState().templateId || undefined,
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
            onUpdate={isEditingUserTemplate ? () => setIsTemplateUpdateChoiceOpen(true) : undefined}
            onSaveAsTemplate={() => setIsSaveAsTemplateOpen(true)}
            onSaveDraft={handleSaveDraft}
            isEditingUserTemplate={isEditingUserTemplate}
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
        initialWebsiteId={websiteInfo?.id || null}
        initialSlug={websiteInfo?.slug || ''}
        initialCustomDomain={websiteInfo?.settings?.custom_domain || ''}
        initialDomainType={websiteInfo?.settings?.domain_type || 'subdomain'}
        initialIsPublished={websiteInfo?.status === 'published'}
        isPublishing={isPublishing}
        publishResult={publishResult}
      />

      {isTemplateUpdateChoiceOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="template-update-title">
            <h2 id="template-update-title" className="text-lg font-extrabold text-slate-900">
              Update template
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Pilih apakah perubahan hanya disimpan ke Template Saya atau dibuat menjadi website dengan subdomain.
            </p>
            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={handleUpdateUserTemplate}
                disabled={isSaving}
                className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-left transition hover:bg-indigo-100 disabled:opacity-60"
              >
                <span className="block text-sm font-bold text-indigo-900">Update template saja</span>
                <span className="mt-1 block text-xs text-indigo-700">Perbarui konten template ini tanpa membuat website baru.</span>
              </button>
              <button
                type="button"
                onClick={handlePublishUserTemplateAsWebsite}
                disabled={isSaving}
                className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-left transition hover:bg-emerald-100 disabled:opacity-60"
              >
                <span className="block text-sm font-bold text-emerald-900">Publish menjadi subdomain</span>
                <span className="mt-1 block text-xs text-emerald-700">Buat website baru dari versi saat ini, lalu pilih slug subdomain untuk publish.</span>
              </button>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setIsTemplateUpdateChoiceOpen(false)}
                disabled={isSaving}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-60"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

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
        initialName={activeDraftTemplateName || sessionStorage.getItem('draft_template_name') || ''}
      />
    </>
  );
}
