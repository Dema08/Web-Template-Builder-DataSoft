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
    // Initial load from storage snapshot
    loadDraftFromStorage();

    // If ID parameter exists and no local storage sections loaded, fetch from API
    if (id && (!sections || sections.length === 0)) {
      templateApi.getById(id).then(res => {
        const data = res.data?.data;
        if (data) {
          const sectionsData = data.draft_json?.sections || data.published_json?.sections || [];
          if (sectionsData.length > 0) {
            loadSections(sectionsData);
          }
          if (data.name) setTemplateName(data.name);
        }
      }).catch(err => {
        console.warn('Could not load template API preview:', err);
      });
    }
  }, [id]);

  // 3. Realtime Live Synchronization via BroadcastChannel + Storage Event Listener
  useEffect(() => {
    let channel = null;

    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        channel = new BroadcastChannel('datasoft_builder_sync');
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
    if (window.history.length > 1) {
      window.close();
      // Fallback if window.close() blocked by browser pop-up rules:
      setTimeout(() => {
        navigate('/admin/templates');
      }, 200);
    } else {
      navigate('/admin/templates');
    }
  };

  // Viewport width styling
  const getViewportContainerStyle = () => {
    if (viewport === 'tablet') {
      return 'w-[768px] mx-auto min-h-[90vh] my-6 bg-white shadow-2xl rounded-2xl border border-slate-300/80 overflow-hidden transition-all duration-300 ease-in-out';
    }
    if (viewport === 'mobile') {
      return 'w-[375px] mx-auto min-h-[85vh] my-6 bg-white shadow-2xl rounded-3xl border-4 border-slate-800 overflow-hidden transition-all duration-300 ease-in-out';
    }
    return 'w-full min-h-screen bg-white transition-all duration-300 ease-in-out';
  };

  return (
    <div className="min-h-screen bg-slate-900/95 font-sans relative selection:bg-indigo-500 selection:text-white">
      {/* 48px Floating Header Preview Toolbar */}
      <div
        onMouseEnter={() => setIsToolbarExpanded(true)}
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isToolbarExpanded
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-40 hover:opacity-100 hover:scale-105'
        }`}
      >
        {isToolbarExpanded ? (
          <div className="h-12 bg-slate-900/90 text-white backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl px-4 flex items-center gap-4 text-xs">
            {/* Live Indicator */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div className="flex flex-col">
                <span className="font-extrabold text-[11px] text-white flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5 text-indigo-400" />
                  Live Website Preview
                </span>
                <span className="text-[9px] text-slate-400 truncate max-w-[120px] sm:max-w-[200px]">
                  {templateName || slug || 'DataSoft Template'}
                </span>
              </div>
            </div>

            <div className="h-5 w-px bg-slate-700/80" />

            {/* Viewport Switcher */}
            <div className="flex items-center bg-slate-800/80 p-0.5 rounded-xl border border-slate-700/60 gap-0.5">
              <button
                type="button"
                onClick={() => setViewport('desktop')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  viewport === 'desktop'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                }`}
                title="Desktop View (100%)"
              >
                <Monitor className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewport('tablet')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  viewport === 'tablet'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Tablet</span>
              </button>
              <button
                type="button"
                onClick={() => setViewport('mobile')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  viewport === 'mobile'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                }`}
                title="Mobile View (375px)"
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Mobile</span>
              </button>
            </div>

            <div className="h-5 w-px bg-slate-700/80" />

            {/* Actions */}
            <div className="flex items-center gap-1.5">
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
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsToolbarExpanded(true)}
            className="h-9 px-3.5 bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-full text-white text-xs font-extrabold shadow-xl flex items-center gap-2 hover:bg-slate-800 transition"
          >
            <Eye className="h-4 w-4 text-indigo-400" />
            <span>Preview</span>
          </button>
        )}
      </div>

      {/* Main Website Canvas */}
      <div className={`pt-12 pb-16 transition-all duration-300 min-h-screen ${viewport !== 'desktop' ? 'px-4' : ''}`}>
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
                Add sections or generate a starter template in the DataSoft Builder tab to view live preview here.
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
