import { useState, useEffect, useRef } from 'react';
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
} from 'lucide-react';

export default function AdminTemplatePreview() {
  const { id, slug } = useParams();
  const navigate = useNavigate();

  const [viewport, setViewport] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [isToolbarExpanded, setIsToolbarExpanded] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const hideTimerRef = useRef(null);

  const {
    sections,
    templateName,
    loadSections,
    setTemplateName,
    setIndustry,
    setIsPreviewMode,
  } = useBuilderStore();

  // 1. Force isPreviewMode = true on mount and cleanup on unmount
  useEffect(() => {
    setIsPreviewMode(true);
    return () => {
      setIsPreviewMode(false);
    };
  }, [setIsPreviewMode]);

  // 2. Load template data from localStorage or API
  const loadDraftFromStorage = () => {
    try {
      const rawData = localStorage.getItem('template_builder_preview_data');
      if (rawData) {
        const parsed = JSON.parse(rawData);
        if (parsed.templateName) {
          setTemplateName(parsed.templateName);
        }
        if (parsed.industrySlug) {
          setIndustry(null, parsed.industrySlug, parsed.industryName || '', false);
        }
        if (parsed.sections && Array.isArray(parsed.sections) && parsed.sections.length > 0) {
          loadSections(parsed.sections);
        }
        setLastUpdated(Date.now());
      }
    } catch (err) {
      console.error('Failed to parse preview storage data:', err);
    }
  };

  useEffect(() => {
    // If template ID parameter exists in URL, fetch from API
    if (id) {
      const applyTemplateData = (res) => {
        const data = res.data?.data ?? res.data;
        if (data) {
          const pubSections = data.published_json?.sections;
          const draftSections = data.draft_json?.sections;
          const sectionsData = (pubSections && Array.isArray(pubSections) && pubSections.length > 0)
            ? pubSections
            : ((draftSections && Array.isArray(draftSections) && draftSections.length > 0) ? draftSections : []);

          if (sectionsData.length > 0) {
            loadSections(sectionsData);
          }
          if (data.name) setTemplateName(data.name);
        }
      };

      // Try public endpoint first so guest users can preview published templates
      templateApi.getPublicById(id)
        .then(applyTemplateData)
        .catch(() => {
          // Fallback to admin endpoint for previewing unpublished draft templates if authenticated
          templateApi.getById(id)
            .then(applyTemplateData)
            .catch(err => {
              console.warn('Could not load template API preview:', err);
              // Fallback to local storage if API fails
              loadDraftFromStorage();
            });
        });
    } else {
      // No ID in URL — previewing live unsaved builder state from localStorage
      loadDraftFromStorage();
    }
  }, [id]);

  // 3. Realtime Live Synchronization via BroadcastChannel + Storage Event Listener
  useEffect(() => {
    let channel = null;

    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        channel = new BroadcastChannel('Microdata_builder_sync');
        channel.onmessage = (event) => {
          if (event.data && event.data.sections) {
            loadSections(event.data.sections);
            if (event.data.templateName) setTemplateName(event.data.templateName);
            setLastUpdated(Date.now());
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
          if (parsed.sections) {
            loadSections(parsed.sections);
            if (parsed.templateName) setTemplateName(parsed.templateName);
            setLastUpdated(Date.now());
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
  }, [loadSections, setTemplateName]);

  // 4. Auto-Hide Toolbar System (collapses after 3 seconds of mouse inactivity)
  const resetHideTimer = () => {
    setIsToolbarExpanded(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setIsToolbarExpanded(false);
    }, 3000);
  };

  useEffect(() => {
    resetHideTimer();
    const handleMouseMove = () => resetHideTimer();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClose = () => {
    if (typeof window !== 'undefined' && window.opener) {
      window.close();
    } else {
      navigate('/');
    }
  };

  // Viewport width styling
  const getViewportContainerStyle = () => {
    if (viewport === 'tablet') {
      return 'w-[768px] max-w-[calc(100vw-2rem)] mx-auto min-h-[90vh] my-6 bg-white shadow-2xl rounded-2xl border border-slate-700/80 overflow-y-auto transition-all duration-300 ease-in-out';
    }
    if (viewport === 'mobile') {
      return 'w-[375px] max-w-[calc(100vw-2rem)] mx-auto min-h-[85vh] my-6 bg-white shadow-2xl rounded-[32px] border-[6px] border-slate-800 overflow-y-auto transition-all duration-300 ease-in-out';
    }
    return 'w-full min-h-[calc(100vh-3.5rem)] bg-white transition-all duration-300 ease-in-out';
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans relative selection:bg-indigo-500 selection:text-white overflow-y-auto">
      {/* Fixed Top Header Preview Toolbar — Never covers canvas content */}
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
            </span>
            <span className="text-[10px] text-slate-400 truncate max-w-[150px] sm:max-w-[260px]">
              {templateName || slug || 'Microdata Template'}
            </span>
          </div>
        </div>

        {/* Center: Viewport Switcher */}
        <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/60 gap-1">
          <button
            type="button"
            onClick={() => setViewport('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${
              viewport === 'desktop'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
            title="Desktop View (100%)"
          >
            <Monitor className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setViewport('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${
              viewport === 'tablet'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
            title="Tablet View (768px)"
          >
            <Tablet className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => setViewport('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${
              viewport === 'mobile'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
            }`}
            title="Mobile View (375px)"
          >
            <Smartphone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={loadDraftFromStorage}
            className="p-1.5 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition"
            title="Refresh Live Data Sync"
          >
            <RotateCw className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition"
            title="Close Live Preview"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main Website Canvas Container */}
      <div className={`pt-14 pb-12 transition-all duration-300 ${viewport !== 'desktop' ? 'px-4' : ''}`}>
        <div className={getViewportContainerStyle()}>
          {sections && sections.length > 0 ? (
            sections.map((section) => (
              <SectionRenderer
                key={section.id}
                section={section}
                isSelected={false}
                onClick={() => {}}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-32 px-4 text-center bg-white">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
                <Layers className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-1">
                No Sections Found in Template
              </h2>
              <p className="text-xs text-slate-500 max-w-md mb-6">
                Add sections or generate a starter template in the Microdata Builder tab to view live preview here.
              </p>
              <button
                type="button"
                onClick={() => window.close()}
                className="px-5 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-md hover:bg-indigo-700 transition"
              >
                Return to Builder
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
