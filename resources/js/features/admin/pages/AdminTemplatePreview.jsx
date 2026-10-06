import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBuilderStore } from '@builder/stores/builderStore';
import SectionRenderer from '@builder/components/sections/SectionRenderer';
import { templateApi } from '@api';
import {
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
  X,
  Eye,
  Layers,
  ZoomIn,
  Check,
  Loader2,
} from 'lucide-react';

/**
 * Helper to extract sections, pages, templateName, and industry from various payload shapes
 */
const parseTemplatePayload = (raw) => {
  if (!raw) return { sections: [], pages: {}, name: '', industry: '' };
  const data = raw.data?.data ?? raw.data ?? raw;

  const name = data.name || data.templateName || '';
  const industry = data.industry_category?.name || data.industryCategory?.name || data.industryName || data.industrySlug || '';

  let pubJson = data.published_json;
  if (typeof pubJson === 'string') {
    try { pubJson = JSON.parse(pubJson); } catch (e) { /* ignore */ }
  }

  let draftJson = data.draft_json;
  if (typeof draftJson === 'string') {
    try { draftJson = JSON.parse(draftJson); } catch (e) { /* ignore */ }
  }

  let sections = [];
  let pages = {};

  // 1. Try published_json first
  if (pubJson) {
    if (Array.isArray(pubJson.sections) && pubJson.sections.length > 0) {
      sections = pubJson.sections;
    } else if (Array.isArray(pubJson) && pubJson.length > 0) {
      sections = pubJson;
    }
    if (pubJson.pages && typeof pubJson.pages === 'object' && !Array.isArray(pubJson.pages)) {
      pages = pubJson.pages;
    }
  }

  // 2. Fallback to draft_json
  if (sections.length === 0 && draftJson) {
    if (Array.isArray(draftJson.sections) && draftJson.sections.length > 0) {
      sections = draftJson.sections;
    } else if (Array.isArray(draftJson) && draftJson.length > 0) {
      sections = draftJson;
    }
    if (draftJson.pages && typeof draftJson.pages === 'object' && !Array.isArray(draftJson.pages)) {
      pages = draftJson.pages;
    }
  }

  // 3. Fallback to direct sections property
  if (sections.length === 0 && Array.isArray(data.sections)) {
    sections = data.sections;
    if (data.pages && typeof data.pages === 'object' && !Array.isArray(data.pages)) {
      pages = data.pages;
    }
  }

  return { sections, pages, name, industry };
};

export default function AdminTemplatePreview() {
  const { id, slug } = useParams();
  const templateParam = id || slug || null;
  const navigate = useNavigate();

  const getInitialViewport = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const fromQuery = params.get('viewport') || params.get('deviceView');
      if (['desktop', 'tablet', 'mobile'].includes(fromQuery)) return fromQuery;
    } catch (e) { /* abaikan */ }
    try {
      const raw = localStorage.getItem('template_builder_preview_data');
      if (raw) {
        const parsed = JSON.parse(raw);
        const fromPayload = parsed.viewport || parsed.deviceView;
        if (['desktop', 'tablet', 'mobile'].includes(fromPayload)) return fromPayload;
      }
    } catch (e) { /* abaikan */ }
    try {
      const storeView = useBuilderStore.getState()?.deviceView;
      if (['desktop', 'tablet', 'mobile'].includes(storeView)) return storeView;
    } catch (e) { /* abaikan */ }
    return 'desktop';
  };

  const [viewport, setViewport] = useState(getInitialViewport); // 'desktop' | 'tablet' | 'mobile'
  const userPickedViewportRef = useRef(false);
  const [zoom, setZoom] = useState(100); // 100 | 90 | 80 | 75
  const [showZoomMenu, setShowZoomMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(!!templateParam);
  const [lastUpdated, setLastUpdated] = useState(Date.now());

  const {
    sections,
    pages,
    currentPreviewPageId,
    switchPreviewPage,
    templateName,
    loadSections,
    setTemplateName,
    setIndustry,
    setIsPreviewMode,
    setDeviceView,
    selectComponent,
    selectSection,
  } = useBuilderStore();

  // Handle viewport changes and sync with builder store
  const handleViewportChange = (newViewport) => {
    userPickedViewportRef.current = true;
    setViewport(newViewport);
    if (setDeviceView) {
      setDeviceView(newViewport);
    }
  };

  const syncViewportFromPayload = (parsed) => {
    if (userPickedViewportRef.current || !parsed) return;
    const fromPayload = parsed.viewport || parsed.deviceView;
    if (['desktop', 'tablet', 'mobile'].includes(fromPayload) && fromPayload !== viewport) {
      setViewport(fromPayload);
      if (setDeviceView) setDeviceView(fromPayload);
    }
  };

  const lastDataHashRef = useRef('');

  // Apply template sections only when data has genuinely changed to prevent infinite re-render loops
  const applyDataIfChanged = useCallback((sectionsData, pagesData = {}, name = null, industry = null) => {
    if (!sectionsData || !Array.isArray(sectionsData)) return;
    const hash = JSON.stringify({
      sections: sectionsData,
      pages: pagesData,
      name,
      industry,
    });
    if (hash === lastDataHashRef.current) return;
    lastDataHashRef.current = hash;

    loadSections(sectionsData, pagesData);
    if (name) setTemplateName(name);
    if (industry && setIndustry) setIndustry(null, industry, '', false);
    setLastUpdated(Date.now());
  }, [loadSections, setTemplateName, setIndustry]);

  // Fetch template data for a specific template ID/slug
  const fetchTemplateData = useCallback(async (targetId) => {
    setIsLoading(true);
    try {
      let res;
      try {
        res = await templateApi.getPublicById(targetId);
      } catch (err) {
        // Fallback to admin/auth endpoint if template is a draft or previewed by admin
        res = await templateApi.getById(targetId);
      }

      const { sections: s, pages: p, name: n, industry: ind } = parseTemplatePayload(res);
      if (s.length > 0) {
        applyDataIfChanged(s, p, n, ind);
      } else {
        // Clear sections if template genuinely has none
        loadSections([], {});
        if (n) setTemplateName(n);
      }
    } catch (err) {
      console.error('Failed to fetch template for preview:', err);
      // Fallback: check if local storage has matching template data
      try {
        const raw = localStorage.getItem('template_builder_preview_data');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.templateId && String(parsed.templateId) === String(targetId)) {
            const { sections: s, pages: p, name: n, industry: ind } = parseTemplatePayload(parsed);
            if (s.length > 0) applyDataIfChanged(s, p, n, ind);
          }
        }
      } catch (e) { /* ignore */ }
    } finally {
      setIsLoading(false);
    }
  }, [applyDataIfChanged, loadSections, setTemplateName]);

  // 1. Force isPreviewMode = true on mount, clear selections, and load preview
  useEffect(() => {
    setIsPreviewMode(true);
    if (selectComponent) selectComponent(null);
    if (selectSection) selectSection(null);

    if (templateParam) {
      fetchTemplateData(templateParam);
    } else {
      // Direct builder preview without specific ID
      try {
        const rawData = localStorage.getItem('template_builder_preview_data');
        if (rawData) {
          const parsed = JSON.parse(rawData);
          syncViewportFromPayload(parsed);
          const { sections: s, pages: p, name: n, industry: ind } = parseTemplatePayload(parsed);
          if (s.length > 0) {
            applyDataIfChanged(s, p, n, ind);
          }
        }
      } catch (err) {
        console.error('Failed to parse preview storage data:', err);
      }
      setIsLoading(false);
    }

    return () => {
      setIsPreviewMode(false);
    };
  }, [templateParam, fetchTemplateData, applyDataIfChanged, selectComponent, selectSection, setIsPreviewMode]);

  // 2. Realtime Live Synchronization via BroadcastChannel + Storage Event Listener
  useEffect(() => {
    let channel = null;

    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        channel = new BroadcastChannel('datasoft_builder_sync');
        channel.onmessage = (event) => {
          if (!event.data) return;
          // If viewing a specific template ID, only accept sync messages for that template
          if (templateParam && event.data.templateId && String(event.data.templateId) !== String(templateParam)) {
            return;
          }
          syncViewportFromPayload(event.data);
          const { sections: s, pages: p, name: n, industry: ind } = parseTemplatePayload(event.data);
          if (s.length > 0) {
            applyDataIfChanged(s, p, n, ind);
          }
        };
      } catch (e) {
        console.warn('BroadcastChannel error in preview:', e);
      }
    }

    const handleStorageChange = (e) => {
      if (e.key === 'template_builder_preview_data' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (templateParam && parsed.templateId && String(parsed.templateId) !== String(templateParam)) {
            return;
          }
          syncViewportFromPayload(parsed);
          const { sections: s, pages: p, name: n, industry: ind } = parseTemplatePayload(parsed);
          if (s.length > 0) {
            applyDataIfChanged(s, p, n, ind);
          }
        } catch (err) {
          // ignore
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      if (channel) channel.close();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [templateParam, applyDataIfChanged]);

  const handleRefresh = () => {
    if (templateParam) {
      fetchTemplateData(templateParam);
    } else {
      try {
        const rawData = localStorage.getItem('template_builder_preview_data');
        if (rawData) {
          const parsed = JSON.parse(rawData);
          const { sections: s, pages: p, name: n, industry: ind } = parseTemplatePayload(parsed);
          if (s.length > 0) {
            applyDataIfChanged(s, p, n, ind);
          }
        }
      } catch (err) {
        console.error('Failed to parse preview storage data:', err);
      }
    }
  };

  const handleClose = () => {
    if (typeof window !== 'undefined' && window.opener) {
      window.close();
    } else {
      navigate('/');
    }
  };

  const getViewportContainerStyle = () => {
    if (viewport === 'tablet') {
      return 'w-[768px] max-w-[calc(100vw-2rem)] mx-auto bg-white shadow-2xl rounded-2xl border border-slate-700/80 overflow-hidden transition-all duration-300 ease-in-out';
    }
    if (viewport === 'mobile') {
      return 'w-[375px] max-w-[calc(100vw-2rem)] mx-auto bg-white shadow-2xl rounded-[32px] border-[6px] border-slate-800 overflow-hidden transition-all duration-300 ease-in-out';
    }
    return 'w-full max-w-[1536px] mx-auto bg-white rounded-2xl shadow-2xl border border-slate-800/80 overflow-hidden transition-all duration-300 ease-in-out';
  };

  const getActiveSections = () => {
    if (currentPreviewPageId && currentPreviewPageId !== 'landing') {
      return pages?.[currentPreviewPageId]?.sections || [];
    }
    return sections || [];
  };

  const renderActiveSections = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-36 px-4 text-center bg-white min-h-[500px]">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4 border border-indigo-100 shadow-sm">
            <Loader2 className="h-6 w-6 text-indigo-600 animate-spin" />
          </div>
          <h3 className="text-base font-extrabold text-slate-900 mb-1">
            Memuat Pratinjau Template...
          </h3>
          <p className="text-xs text-slate-500 max-w-xs">
            Menyiapkan tata letak responsif dan komponen visual template.
          </p>
        </div>
      );
    }

    const activeSections = getActiveSections();
    if (activeSections && activeSections.length > 0) {
      return activeSections.map((section) => (
        <SectionRenderer
          key={section.id}
          section={section}
          isPreview={true}
          isSelected={false}
          onClick={() => {}}
        />
      ));
    }
    if (currentPreviewPageId && currentPreviewPageId !== 'landing') {
      return (
        <div className="flex flex-col items-center justify-center py-32 px-4 text-center bg-white">
          <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
            <Layers className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mb-1">
            No Sections Found in Subpage
          </h2>
          <p className="text-xs text-slate-500 max-w-md mb-6">
            This subpage is currently empty. You can add sections to it in the Builder.
          </p>
          <button
            type="button"
            onClick={() => switchPreviewPage('landing')}
            className="px-5 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            Return to Landing Page
          </button>
        </div>
      );
    }
    return <EmptyStateContent />;
  };

  const getViewportBadge = () => {
    switch (viewport) {
      case 'mobile':
        return 'Mobile • 375px';
      case 'tablet':
        return 'Tablet • 768px';
      case 'desktop':
      default:
        return 'Desktop • 100%';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans relative selection:bg-indigo-500 selection:text-white overflow-y-auto">
      {/* Fixed Top Header Preview Toolbar */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 text-white z-50 px-4 sm:px-6 flex items-center justify-between shadow-2xl">
        {/* Left: Live Indicator & Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="flex flex-col min-w-0">
            <span className="font-extrabold text-xs text-white flex items-center gap-1.5 truncate">
              <Eye className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              Live Website Preview
              <span className="ml-1 text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-semibold hidden md:inline-block">
                {getViewportBadge()}
              </span>
            </span>
            <span className="text-[10px] text-slate-400 truncate max-w-[150px] sm:max-w-[260px]">
              {templateName || slug || 'Microdata Template'}
            </span>
          </div>
        </div>

        {/* Center: Viewport Switcher */}
        <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/60 gap-1 shadow-inner">
          <button
            type="button"
            onClick={() => handleViewportChange('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
              viewport === 'desktop'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
            title="Desktop View (Full Width)"
          >
            <Monitor className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => handleViewportChange('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
              viewport === 'tablet'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
            title="Tablet View (768px)"
          >
            <Tablet className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => handleViewportChange('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
              viewport === 'mobile'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
            title="Mobile View (375px)"
          >
            <Smartphone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Right: Zoom Controls, Refresh & Close */}
        <div className="flex items-center gap-2">
          {/* Zoom Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowZoomMenu(!showZoomMenu)}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-bold border border-slate-700/60 transition"
              title="Zoom Scale"
            >
              <ZoomIn className="h-3.5 w-3.5 text-indigo-400" />
              <span>{zoom}%</span>
            </button>

            {showZoomMenu && (
              <div className="absolute right-0 mt-2 w-32 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-1.5 z-50">
                {[100, 90, 80, 75].map((z) => (
                  <button
                    key={z}
                    type="button"
                    onClick={() => {
                      setZoom(z);
                      setShowZoomMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-semibold flex items-center justify-between transition ${
                      zoom === z ? 'bg-indigo-600/30 text-indigo-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{z}%</span>
                    {zoom === z && <Check className="h-3.5 w-3.5 text-indigo-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleRefresh}
            className="p-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700/60 transition"
            title="Refresh Live Data Sync"
          >
            <RotateCw className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition"
            title="Close Pratinjau Langsung"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Subpage banner in preview mode if viewing a subpage */}
      {currentPreviewPageId && currentPreviewPageId !== 'landing' && (
        <div className="fixed top-14 left-0 right-0 bg-indigo-900 text-white px-6 py-3 flex items-center justify-between z-40 shadow-xl border-b border-indigo-800">
          <div className="flex items-center gap-2.5 text-xs font-bold">
            <span className="px-2 py-0.5 bg-indigo-600 rounded-md text-[10px] uppercase">Subpage Preview</span>
            <span>Viewing Page: <strong className="underline decoration-indigo-400">{pages?.[currentPreviewPageId]?.name || currentPreviewPageId}</strong></span>
          </div>
          <button
            type="button"
            onClick={() => switchPreviewPage('landing')}
            className="flex items-center gap-2 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-extrabold shadow-md transition-all duration-200"
          >
            <span>⬅️</span>
            <span>Kembali ke Landing Page</span>
          </button>
        </div>
      )}

      {/* Main Preview Container with Zoom Scale & Realistic Device Mockups */}
      <div className={`pb-16 px-4 transition-all duration-300 flex justify-center items-start min-h-[calc(100vh-3.5rem)] ${currentPreviewPageId && currentPreviewPageId !== 'landing' ? 'pt-28' : 'pt-20'}`}>
        <div
          style={{
            transform: zoom !== 100 ? `scale(${zoom / 100})` : 'none',
            transformOrigin: 'top center',
            width: viewport === 'desktop' ? '100%' : undefined,
          }}
          className="transition-transform duration-300 w-full flex justify-center"
        >
          {/* MOBILE VIEWPORT MOCKUP (375px) */}
          {viewport === 'mobile' && (
            <div className="w-[375px] max-w-full bg-slate-900 border-[10px] border-slate-900 rounded-[48px] shadow-2xl shadow-indigo-950/80 relative transition-all duration-300 my-2">
              {/* iPhone Dynamic Island / Speaker Notch */}
              <div className="w-full bg-slate-900 pt-3 pb-2 flex justify-center items-center rounded-t-[38px] select-none">
                <div className="w-28 h-4 bg-slate-950 rounded-full flex items-center justify-between px-3 border border-slate-800/60">
                  <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-950"></span>
                </div>
              </div>

              {/* Scrollable Screen Content */}
              <div className="builder-canvas-mobile w-full bg-white min-h-[667px] max-h-[820px] overflow-y-auto overflow-x-hidden ds-scrollbar-thin rounded-[22px]">
                {renderActiveSections()}
              </div>

              {/* iPhone Home Bar */}
              <div className="w-full bg-slate-900 py-2.5 flex justify-center items-center rounded-b-[38px] select-none">
                <div className="w-32 h-1 bg-slate-500/50 rounded-full"></div>
              </div>
            </div>
          )}

          {/* TABLET VIEWPORT MOCKUP (768px) */}
          {viewport === 'tablet' && (
            <div className="w-[768px] max-w-full bg-slate-900 border-[12px] border-slate-900 rounded-[32px] shadow-2xl shadow-indigo-950/80 relative transition-all duration-300 my-2">
              {/* iPad Camera Dot */}
              <div className="w-full bg-slate-900 pt-2.5 pb-1.5 flex justify-center items-center rounded-t-[20px] select-none">
                <div className="w-3 h-3 bg-slate-950 rounded-full border border-slate-800"></div>
              </div>

              {/* Scrollable Screen Content */}
              <div className="builder-canvas-tablet w-full bg-white min-h-[720px] max-h-[860px] overflow-y-auto overflow-x-hidden ds-scrollbar-thin rounded-[12px]">
                {renderActiveSections()}
              </div>

              {/* iPad Home Bar */}
              <div className="w-full bg-slate-900 py-2 flex justify-center items-center rounded-b-[20px] select-none">
                <div className="w-36 h-1 bg-slate-500/50 rounded-full"></div>
              </div>
            </div>
          )}

          {/* DESKTOP VIEWPORT MOCKUP (Full Width Browser Frame) */}
          {viewport === 'desktop' && (
            <div className="w-full max-w-[1536px] mx-auto bg-white rounded-2xl shadow-2xl border border-slate-800/80 overflow-hidden transition-all duration-300 my-2">
              {/* macOS Browser Bar Mockup */}
              <div className="w-full bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-slate-400 text-xs select-none">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block shadow-xs"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-xs"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-xs"></span>
                  </div>
                </div>
                <div className="flex-1 max-w-md bg-slate-800/90 rounded-lg px-3 py-1 text-[11px] text-slate-300 flex items-center justify-center gap-2 border border-slate-700/60 mx-4 shadow-inner">
                  <span className="text-emerald-400 font-bold">🔒 https://</span>
                  <span className="text-slate-200 font-mono truncate">
                    {templateName ? `${templateName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.microdata.id` : 'preview.microdata.id'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-bold hidden sm:block bg-slate-800 px-2 py-0.5 rounded">
                  Desktop • 100%
                </div>
              </div>

              {/* Desktop Website Canvas */}
              <div className="builder-canvas-desktop w-full bg-white min-h-[calc(100vh-8rem)]">
                {renderActiveSections()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyStateContent() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center bg-white">
      <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
        <Layers className="h-8 w-8" />
      </div>
      <h2 className="text-xl font-extrabold text-slate-900 mb-1">
        Tidak Ada Bagian dalam Template
      </h2>
      <p className="text-xs text-slate-500 max-w-md mb-6">
        Tambahkan bagian atau buat template awal di tab Microdata Builder untuk melihat pratinjau live di sini.
      </p>
      <button
        type="button"
        onClick={() => window.close()}
        className="px-5 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-indigo-700 transition"
      >
        Kembali ke Builder
      </button>
    </div>
  );
}
