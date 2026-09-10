import { useState, useEffect } from 'react';
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
import { ROUTES } from '@constants';
import { Loader2 } from 'lucide-react';

export default function Builder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

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
            // Non-403 (network/dll) → lanjutkan fallback normal
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
            // useTemplate 403 → akses ditolak: redirect ke Gallery
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

  const handleBack = () => {
    navigate(ROUTES.TEMPLATES);
  };

  const handleSave = async () => {
    const currentSections = useBuilderStore.getState().sections;
    try {
      setIsSaving(true);
      const draftJson = {
        sections: currentSections.map((s) => ({
          id: s.id,
          type: s.type,
          layout: s.layout,
          styles: s.styles || {},
          isLocked: s.isLocked || false,
          isHidden: s.isHidden || false,
          components: s.components,
        })),
      };

      await websiteApi.saveContent({ draft_json: draftJson });
      queryClient.invalidateQueries([ROUTES.WEBSITES]);
      toast.success('Perubahan website berhasil disimpan!', 'Disimpan');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Gagal menyimpan perubahan website.', 'Error');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    const currentSections = useBuilderStore.getState().sections;
    try {
      setIsPublishing(true);
      const draftJson = {
        sections: currentSections.map((s) => ({
          id: s.id,
          type: s.type,
          layout: s.layout,
          styles: s.styles || {},
          isLocked: s.isLocked || false,
          isHidden: s.isHidden || false,
          components: s.components,
        })),
      };

      // Save content first
      await websiteApi.saveContent({ draft_json: draftJson });

      // Publish website
      const res = await websiteApi.publish();
      const pubData = res.data?.data ?? res.data;

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
              Lihat Website Live →
            </a>
          )}
        </div>,
        'Publish Berhasil'
      );
    } catch (err) {
      toast.error(err.response?.data?.message || 'Gagal mempublish website.', 'Error');
    } finally {
      setIsPublishing(false);
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
            onPublish={handlePublish}
            isSaving={isSaving}
            isPublishing={isPublishing}
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
    </>
  );
}
