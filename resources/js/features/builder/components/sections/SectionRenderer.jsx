import { useEffect, useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getSectionConfig } from '../../utils/industryConfigs';
import { getLayoutComponent } from '../../engine/layoutComponentMapper';
import { getUIComponent } from '../../engine/componentMapper';
import { renderLayoutComponents } from '../../engine/layoutRenderer.jsx';
import { getLayoutDefaults } from '../../engine/layoutDefaults';
import EditableComponent from '../editing/EditableComponent';
import SnapGrid from '../canvas/SnapGrid';
import BuilderErrorBoundary from '../common/BuilderErrorBoundary';
import { Palette, Trash2, ArrowUp, ArrowDown, Copy } from 'lucide-react';
import { toast } from '@store';

// Convert layout ID like "hero-01" to component name "Hero01"
const layoutIdToComponentName = (layoutId) => {
  if (!layoutId) return null;
  return layoutId
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

// Helper: Convert hex color and opacity (0-1) to rgba string
const hexToRgba = (hex, opacity = 1) => {
  if (!hex) return `rgba(255, 255, 255, ${opacity})`;
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map(char => char + char).join('');
  }
  const num = parseInt(c, 16);
  if (isNaN(num)) return `rgba(255, 255, 255, ${opacity})`;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default function SectionRenderer({ section, isSelected, onClick }) {
  const config = getSectionConfig('default', section?.type);
  const { selectedSectionId, selectSection, selectComponent, isPreviewMode, setRightPanelOpen } = useBuilderStore();
  const sectionRef = useRef(null);

  if (!section) return null;

  const isSectionSelected = !isPreviewMode && (selectedSectionId === section.id || isSelected);

  // Auto-hydrate components from layout defaults if section components are empty
  useEffect(() => {
    if (!isPreviewMode && (!section.components || section.components.length === 0) && section.layout) {
      const defaultComps = getLayoutDefaults(section.layout);
      if (defaultComps && defaultComps.length > 0) {
        const normalizeComponent = (c, idx = 0) => {
          const normalized = {
            id: c.id || `comp-${Date.now()}-${idx}-${Math.random().toString(36).substr(2, 9)}`,
            type: c.type,
            props: c.props || {},
            position: c.position || { x: 0, y: 0, width: null, height: null, rotation: 0, scale: 1, zIndex: 1 },
            isLocked: false,
            isHidden: false,
          };
          if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
            normalized.childrenComponents = c.childrenComponents.map((child, ci) =>
              normalizeComponent(child, ci)
            );
          }
          return normalized;
        };
        const populated = defaultComps.map((c, ci) => normalizeComponent(c, ci));
        useBuilderStore.setState((state) => ({
          sections: state.sections.map((s) => (s.id === section.id ? { ...s, components: populated } : s)),
        }));
      }
    }
  }, [section.id, section.layout, section.components, isPreviewMode]);

  // Apply transparent background to inner `<section>` or `<nav>` elements so custom background is completely visible
  useEffect(() => {
    if (sectionRef.current) {
      const innerLayoutEl = sectionRef.current.querySelector('section, nav, header, footer');
      if (innerLayoutEl) {
        if (section.background && section.background.type && section.background.type !== 'none') {
          innerLayoutEl.style.setProperty('background-color', 'transparent', 'important');
          innerLayoutEl.style.setProperty('background-image', 'none', 'important');
          innerLayoutEl.style.setProperty('background', 'transparent', 'important');
        } else {
          innerLayoutEl.style.removeProperty('background-color');
          innerLayoutEl.style.removeProperty('background-image');
          innerLayoutEl.style.removeProperty('background');
        }
      }
    }
  }, [section.background, section.layout, section.id]);

  // Hydrate section customTexts overrides onto matching template elements
  useEffect(() => {
    if (sectionRef.current && section.customTexts) {
      Object.entries(section.customTexts).forEach(([key, val]) => {
        const el = sectionRef.current.querySelector(`[data-text-key="${key}"]`);
        if (el && val !== undefined && el.innerText !== val) {
          el.innerText = val;
        }
      });
    }
  }, [section.customTexts, section.layout, section.id]);

  // Hydrate section customImages overrides onto matching template image elements
  useEffect(() => {
    if (sectionRef.current && section.customImages) {
      Object.entries(section.customImages).forEach(([key, val]) => {
        const el = sectionRef.current.querySelector(`[data-image-key="${key}"]`);
        const src = typeof val === 'object' && val !== null ? val.src : val;
        const alt = typeof val === 'object' && val !== null ? val.alt : null;
        if (el && src && el.src !== src) {
          el.src = src;
        }
        if (el && alt && el.alt !== alt) {
          el.alt = alt;
        }
      });
    }
  }, [section.customImages, section.layout, section.id]);

  // Universal double-click handler enabling inline editing for ALL section template texts EXCEPT "Support by Microdata"
  const handleSectionDoubleClick = (e) => {
    if (isPreviewMode) return;
    const target = e.target;
    if (!target) return;

    // 🔒 Guard: "Support by Microdata" is non-editable
    if (
      target.closest('[data-non-editable="true"]') ||
      target.closest('[data-microdata-support="true"]') ||
      (target.innerText && target.innerText.toLowerCase().includes('support by microdata'))
    ) {
      e.stopPropagation();
      e.preventDefault();
      toast.info('Teks "Support by Microdata" bersifat tetap dan tidak dapat diedit.', 'Non-Editable Text');
      return;
    }

    // Skip if already in an active contentEditable element
    if (target.isContentEditable || target.closest('[contenteditable="true"]')) {
      return;
    }

    // Find the text element (p, span, h1-h6, b, strong, small, label, td, th, a, button)
    const textEl = target.closest('p, span, h1, h2, h3, h4, h5, h6, b, strong, small, label, td, th, a, button') || target;
    if (!textEl || textEl.closest('[data-non-editable="true"]') || textEl.closest('[data-microdata-support="true"]')) return;

    const currentText = textEl.innerText || textEl.textContent;
    if (!currentText || currentText.trim().length === 0) return;

    e.stopPropagation();
    e.preventDefault();

    // 📐 Open Right Inspector and select section so user sees properties panel
    selectSection(section.id);
    setRightPanelOpen(true);

    textEl.contentEditable = 'true';
    textEl.suppressContentEditableWarning = true;
    textEl.classList.remove('select-none');
    textEl.classList.add('outline-none', 'ring-2', 'ring-indigo-500', 'ring-dashed', 'rounded', 'px-1', 'bg-indigo-500/10');
    textEl.focus();

    try {
      const range = document.createRange();
      range.selectNodeContents(textEl);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } catch (_err) {}

    const initialText = textEl.innerText;

    const handleBlur = () => {
      textEl.contentEditable = 'false';
      textEl.classList.remove('ring-2', 'ring-indigo-500', 'ring-dashed', 'bg-indigo-500/10');
      const newText = textEl.innerText.trim();

      if (newText !== initialText.trim()) {
        const compEl = textEl.closest('[data-component-id]');
        if (compEl) {
          const compId = compEl.getAttribute('data-component-id');
          const secId = compEl.getAttribute('data-section-id') || section.id;
          useBuilderStore.getState().updateComponentProps(secId, compId, { content: newText, label: newText, text: newText });
          // Also select the component so inspector updates
          useBuilderStore.getState().selectComponent(compId, secId);
        } else {
          let textKey = textEl.getAttribute('data-text-key');
          if (!textKey) {
            const allElements = Array.from(sectionRef.current.querySelectorAll('*'));
            const idx = allElements.indexOf(textEl);
            textKey = `t_${idx}_${initialText.substring(0, 10).replace(/[^a-zA-Z0-9]/g, '')}`;
            textEl.setAttribute('data-text-key', textKey);
          }
          useBuilderStore.getState().updateSectionCustomText(section.id, textKey, newText);
        }
        toast.success('Teks berhasil diperbarui!', 'Text Updated');
      }

      textEl.removeEventListener('blur', handleBlur);
      textEl.removeEventListener('keydown', handleKeyDown);
    };

    const handleKeyDown = (keyEvent) => {
      if (keyEvent.key === 'Enter' && !keyEvent.shiftKey) {
        keyEvent.preventDefault();
        textEl.blur();
      }
      if (keyEvent.key === 'Escape') {
        textEl.innerText = initialText;
        textEl.blur();
      }
    };

    textEl.addEventListener('blur', handleBlur);
    textEl.addEventListener('keydown', handleKeyDown);
  };

  // Compute background style
  const getSectionStyle = () => {
    const bg = section.background;
    let style = { position: 'relative', minHeight: section.type === 'navbar' || section.type === 'header' || section.type === 'footer' ? 0 : '120px' };
    if (!bg || bg.type === 'none') return style;

    if (bg.type === 'color') {
      const hex = bg.color?.hex || '#ffffff';
      const opacity = bg.color?.opacity !== undefined ? bg.color.opacity : 100;
      if (opacity < 100) {
        style.backgroundColor = hexToRgba(hex, opacity / 100);
      } else {
        style.backgroundColor = hex;
      }
    } else if (bg.type === 'gradient') {
      const stops = bg.gradient?.stops || [];
      const color1 = stops[0]?.color || '#4f46e5';
      const color2 = stops[1]?.color || '#ec4899';
      const angle = bg.gradient?.angle !== undefined ? bg.gradient.angle : 90;
      style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    } else if (bg.type === 'image' && bg.image?.url) {
      style.backgroundImage = `url(${bg.image.url})`;
      style.backgroundPosition = bg.image.position || 'center';
      style.backgroundSize = bg.image.size || 'cover';
      style.backgroundRepeat = bg.image.repeat || 'no-repeat';
      style.backgroundAttachment = bg.image.attachment || 'scroll';
    }

    // Filters
    if (bg.filters) {
      let filters = [];
      if (bg.filters.blur) filters.push(`blur(${bg.filters.blur}px)`);
      if (bg.filters.brightness !== undefined && bg.filters.brightness !== 100) filters.push(`brightness(${bg.filters.brightness}%)`);
      if (bg.filters.contrast !== undefined && bg.filters.contrast !== 100) filters.push(`contrast(${bg.filters.contrast}%)`);
      if (bg.filters.saturation !== undefined && bg.filters.saturation !== 100) filters.push(`saturate(${bg.filters.saturation}%)`);
      if (filters.length > 0) style.filter = filters.join(' ');
    }

    return style;
  };

  // In Preview Mode, hide section if marked hidden, and render clean section output
  if (isPreviewMode) {
    if (section.isHidden) return null;
    const componentName = layoutIdToComponentName(section.layout);
    const LayoutComponent = getLayoutComponent(componentName);

    if (!LayoutComponent) return null;

    return (
      <div ref={sectionRef} id={section.id} className="relative w-full overflow-hidden" style={getSectionStyle()}>
        {/* Background Video if applicable */}
        {section.background?.type === 'video' && section.background.video?.url && (
          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            src={section.background.video.url}
            autoPlay={section.background.video.autoplay ?? true}
            loop={section.background.video.loop ?? true}
            muted={section.background.video.muted ?? true}
            playsInline
          />
        )}
        {/* Background Overlay if configured */}
        {section.background?.overlay && section.background.overlay.opacity > 0 && (
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundColor: section.background.overlay.color || '#000000',
              opacity: (section.background.overlay.opacity || 0) / 100,
              mixBlendMode: section.background.overlay.blendMode || 'normal',
            }}
          />
        )}
        <div className="relative z-10 w-full">
          <BuilderErrorBoundary title={`Preview section ${section.type}`}>
            <LayoutComponent components={section.components || []} sectionId={section.id} />
            {renderExtraSectionComponents()}
          </BuilderErrorBoundary>
        </div>
      </div>
    );
  }

  // Get the layout component - convert layout ID to component name
  const componentName = layoutIdToComponentName(section.layout);
  const LayoutComponent = getLayoutComponent(componentName);

  const handleSectionClick = (e) => {
    if (isPreviewMode) return;
    const target = e.target;
    const imgEl = target?.closest('img');

    if (imgEl) {
      e.stopPropagation();
      const compEl = imgEl.closest('[data-component-id]');
      if (compEl) {
        const compId = compEl.getAttribute('data-component-id');
        const secId = compEl.getAttribute('data-section-id') || section.id;
        selectComponent(compId, secId);
        setRightPanelOpen(true);
        return;
      }

      let imageKey = imgEl.getAttribute('data-image-key');
      if (!imageKey) {
        const allImgs = Array.from(sectionRef.current.querySelectorAll('img'));
        const idx = allImgs.indexOf(imgEl);
        imageKey = `img_${idx}_${(imgEl.alt || 'img').substring(0, 8).replace(/[^a-zA-Z0-9]/g, '')}`;
        imgEl.setAttribute('data-image-key', imageKey);
      }

      const compId = `sec-img-${section.id}-${imageKey}`;
      const storeState = useBuilderStore.getState();
      const currentSec = storeState.sections.find(s => s.id === section.id);
      const existingComp = (currentSec?.components || []).find(c => c.id === compId || c.props?.imageKey === imageKey);

      if (existingComp) {
        selectComponent(existingComp.id, section.id);
      } else {
        const newImgProps = {
          src: imgEl.src || '',
          alt: imgEl.alt || 'Image',
          imageKey: imageKey,
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '12px',
          opacity: 100,
        };
        storeState.insertComponentAt(section.id, 'image', -1, null, newImgProps);
        setTimeout(() => {
          const updatedSec = useBuilderStore.getState().sections.find(s => s.id === section.id);
          const lastImg = updatedSec?.components?.find(c => c.props?.imageKey === imageKey) || updatedSec?.components?.slice(-1)[0];
          if (lastImg) {
            useBuilderStore.getState().selectComponent(lastImg.id, section.id);
          }
        }, 30);
      }
      setRightPanelOpen(true);
      return;
    }

    e.stopPropagation();
    onClick();
    selectSection(section.id);
  };

  // Helper to render standalone components added dynamically to section root
  function renderExtraSectionComponents() {
    const extraComps = (section.components || []).filter(
      (c) => c.props?.isStandalone || c.isStandalone || c.type === 'icon'
    );
    if (extraComps.length === 0) return null;
    return (
      // data-extra-components-overlay prevents the parent section selector from overriding pointer events
      <div data-extra-components-overlay="true" className="absolute inset-0 z-20" style={{ pointerEvents: 'none' }}>
        {/* includeStandalone=true so overlay renders all standalone components */}
        {renderLayoutComponents(extraComps, section.id, null, true)}
      </div>
    );
  }

  // If no layout component found, render a fallback with the section type
  if (!LayoutComponent) {
    return (
      <div
        ref={sectionRef}
        onClick={handleSectionClick}
        className={`relative cursor-pointer transition-all ${
          isSelected || isSectionSelected ? 'ring-2 ring-indigo-600 ring-offset-2' : 'hover:ring-2 hover:ring-indigo-300'
        }`}
        style={getSectionStyle()}
      >
        <div className="p-8 border-2 border-dashed border-slate-300 rounded-lg text-center">
          <div className="text-sm font-bold text-slate-700">{config?.label || section.type}</div>
          <div className="text-xs text-slate-500 mt-1">Layout not found: {section.layout}</div>
        </div>

        {isSectionSelected && (
          <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
            {config?.label || section.type}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      id={section.id}
      onClick={handleSectionClick}
      onDoubleClick={handleSectionDoubleClick}
      className={`relative cursor-pointer transition-all [&_.select-none:not([data-microdata-support]):not([data-non-editable])]:select-text [&_.pointer-events-none:not(video):not([data-bg-overlay]):not([data-extra-components-overlay])]:pointer-events-auto ${
        isSelected || isSectionSelected ? 'ring-2 ring-indigo-600 ring-offset-2' : 'hover:ring-2 hover:ring-indigo-300'
      }`}
      style={getSectionStyle()}
    >
      {/* Background Video if applicable */}
      {section.background?.type === 'video' && section.background.video?.url && (
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          src={section.background.video.url}
          autoPlay={section.background.video.autoplay ?? true}
          loop={section.background.video.loop ?? true}
          muted={section.background.video.muted ?? true}
          playsInline
        />
      )}
      {/* Background Overlay if configured */}
      {section.background?.overlay && section.background.overlay.opacity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundColor: section.background.overlay.color || '#000000',
            opacity: (section.background.overlay.opacity || 0) / 100,
            mixBlendMode: section.background.overlay.blendMode || 'normal',
          }}
        />
      )}
      <SnapGrid />
      <div className="relative z-10 w-full">
        <BuilderErrorBoundary title={`Section layout (${section.type} / ${section.layout})`}>
          <LayoutComponent components={section.components || []} sectionId={section.id} />
          {renderExtraSectionComponents()}
        </BuilderErrorBoundary>
      </div>

      {/* Section Quick Floating Action Toolbar */}
      {isSectionSelected && (
        <div className="absolute top-2 right-2 z-40 bg-slate-900/90 backdrop-blur-md text-white px-2.5 py-1.5 rounded-xl shadow-2xl flex items-center gap-1.5 border border-slate-700 pointer-events-auto">
          <span className="text-[11px] font-extrabold mr-1 text-indigo-300">{config?.label || section.type}</span>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              selectSection(section.id);
              setRightPanelOpen(true);
            }}
            className="p-1 hover:bg-indigo-600 rounded text-slate-300 hover:text-white transition flex items-center gap-1 text-[10px] font-bold px-2 bg-indigo-500/20"
            title="Configure Background in Inspector"
          >
            <Palette className="h-3 w-3" />
            <span>Background</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const state = useBuilderStore.getState();
              const idx = state.sections.findIndex(s => s.id === section.id);
              if (idx > 0) {
                const newSections = [...state.sections];
                const temp = newSections[idx];
                newSections[idx] = newSections[idx - 1];
                newSections[idx - 1] = temp;
                state.reorderSections(newSections.map((s, i) => ({ ...s, order: i })));
                toast.success('Section moved up', 'Reorder');
              }
            }}
            className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition"
            title="Move Section Up"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const state = useBuilderStore.getState();
              const idx = state.sections.findIndex(s => s.id === section.id);
              if (idx < state.sections.length - 1) {
                const newSections = [...state.sections];
                const temp = newSections[idx];
                newSections[idx] = newSections[idx + 1];
                newSections[idx + 1] = temp;
                state.reorderSections(newSections.map((s, i) => ({ ...s, order: i })));
                toast.success('Section moved down', 'Reorder');
              }
            }}
            className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition"
            title="Move Section Down"
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const state = useBuilderStore.getState();
              state.duplicateSection(section.id);
              toast.success('Section duplicated successfully', 'Duplicate');
            }}
            className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition"
            title="Duplicate Section"
          >
            <Copy className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const state = useBuilderStore.getState();
              state.removeSection(section.id);
              toast.success('Section deleted', 'Delete');
            }}
            className="p-1 hover:bg-red-500/20 rounded text-red-400 hover:text-red-300 transition"
            title="Delete Section"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
