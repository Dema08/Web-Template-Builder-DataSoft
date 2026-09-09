import { useEffect, useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getSectionConfig } from '../../utils/industryConfigs';
import { getLayoutComponent } from '../../engine/layoutComponentMapper';
import { getUIComponent } from '../../engine/componentMapper';
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

  // Compute background style
  const getSectionStyle = () => {
    const bg = section.background;
    let style = { position: 'relative', minHeight: '120px' };
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
          </BuilderErrorBoundary>
        </div>
      </div>
    );
  }

  // Get the layout component - convert layout ID to component name
  const componentName = layoutIdToComponentName(section.layout);
  const LayoutComponent = getLayoutComponent(componentName);

  const handleSectionClick = (e) => {
    e.stopPropagation();
    onClick();
    selectSection(section.id);
  };

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
      onClick={handleSectionClick}
      className={`relative cursor-pointer transition-all overflow-hidden ${
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
              const duplicated = JSON.parse(JSON.stringify(section));
              duplicated.id = `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
              const idx = state.sections.findIndex(s => s.id === section.id);
              state.insertSectionAt(duplicated.type, duplicated.layout, idx + 1);
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
