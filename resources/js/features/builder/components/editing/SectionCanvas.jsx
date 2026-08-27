import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useBuilderStore } from '../../stores/builderStore';
import SectionRenderer from '../sections/SectionRenderer';
import { toast } from '@store';
import { GripVertical, Plus, Sparkles, Layers } from 'lucide-react';
import DropIndicator from '../../dnd/DropIndicator';
import { useBuilderDndContext } from '../../dnd/DndBuilderProvider';

/**
 * SectionInsertionZone
 * Visible between sections when dragging a section/layout from sidebar or canvas
 */
function SectionInsertionZone({ index }) {
  const dnd = useBuilderDndContext();
  const activeDragItem = dnd?.activeDragItem;
  
  const isSectionDragging = 
    activeDragItem?.type === 'sidebar-section' || 
    activeDragItem?.type === 'sidebar-layout' || 
    activeDragItem?.type === 'canvas-section' ||
    activeDragItem?.rawType === 'section' ||
    activeDragItem?.rawType === 'layout';

  const { setNodeRef, isOver } = useDroppable({
    id: `dropzone-section-${index}`,
    data: {
      isSectionDropZone: true,
      index,
    },
    disabled: !isSectionDragging,
  });

  if (!isSectionDragging) return null;

  return (
    <div
      ref={setNodeRef}
      className={`transition-all duration-200 py-1.5 px-4 ${
        isOver ? 'scale-100 opacity-100 py-3' : 'opacity-40 hover:opacity-100'
      }`}
    >
      <DropIndicator active={isOver} label={`Drop Section at Position ${index + 1}`} />
    </div>
  );
}

/**
 * SortableSection
 * Wraps individual sections on canvas with sortable behavior, Canva-style grip handle, and drop zones.
 */
function SortableSection({ section, index, isSelected, onSelect }) {
  const { builderMode, isPreviewMode } = useBuilderStore();
  const dnd = useBuilderDndContext();
  const isDragMode = !isPreviewMode && builderMode === 'drag';

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: section.id,
    data: {
      isSection: true,
      section,
      index,
    },
    disabled: isPreviewMode || !!section.isLocked,
  });

  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: section.id,
    data: {
      isSectionTarget: true,
      sectionId: section.id,
      index,
    },
    disabled: isPreviewMode,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.35 : 1,
    position: 'relative',
  };

  const isComponentOrMediaDragging = 
    dnd?.activeDragItem?.type === 'sidebar-component' ||
    dnd?.activeDragItem?.type === 'sidebar-media' ||
    dnd?.activeDragItem?.type === 'sidebar-icon';

  return (
    <div className="relative group/section-wrapper">
      {/* Top Insertion Zone */}
      <SectionInsertionZone index={index} />

      <div
        ref={(node) => {
          setNodeRef(node);
          setDroppableRef(node);
        }}
        style={style}
        id={section.id}
        data-section-id={section.id}
        className={`relative group/section transition-all duration-150 ${
          isSelected && !isPreviewMode ? 'ring-2 ring-indigo-600 ring-offset-2 z-10' : ''
        } ${
          isOver && isComponentOrMediaDragging ? 'ring-2 ring-dashed ring-indigo-500 bg-indigo-50/10' : ''
        }`}
      >
        {/* Canva-style Section Move Handle Bar */}
        {!isPreviewMode && !section.isLocked && (
          <div
            {...attributes}
            {...listeners}
            className={`absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 px-3 py-1 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-full text-[11px] font-extrabold shadow-lg shadow-indigo-600/30 cursor-grab active:cursor-grabbing flex items-center gap-1.5 transition-all duration-200 ${
              isDragMode || isSelected ? 'opacity-100 scale-100' : 'opacity-0 group-hover/section:opacity-100 scale-95 hover:scale-100'
            }`}
            title="Click & Drag to reorder section position"
          >
            <GripVertical className="h-3.5 w-3.5 text-indigo-200" />
            <span>{section.type.toUpperCase()} ({section.layout})</span>
          </div>
        )}

        {/* Section Hover Overlay Outline Indicator during asset drag */}
        {isOver && isComponentOrMediaDragging && (
          <div className="absolute inset-0 border-2 border-dashed border-indigo-500 bg-indigo-500/5 rounded-xl pointer-events-none z-20 flex items-center justify-center">
            <div className="bg-indigo-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 animate-bounce">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Drop inside this section</span>
            </div>
          </div>
        )}

        <SectionRenderer
          section={section}
          isSelected={!isPreviewMode && isSelected}
          onClick={() => !isPreviewMode && onSelect(section.id)}
        />
      </div>
    </div>
  );
}

export default function SectionCanvas() {
  const {
    sections,
    selectedSectionId,
    selectSection,
    insertSectionAt,
    insertComponentAt,
    updateComponentProps,
    isPreviewMode,
  } = useBuilderStore();

  const dnd = useBuilderDndContext();

  // HTML5 Native Drop Fallback Handler
  const handleDragOverCanvas = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDropOnCanvas = (e) => {
    e.preventDefault();
    try {
      const rawData = e.dataTransfer.getData('application/json');
      if (!rawData) return;

      const data = JSON.parse(rawData);
      if (!data || !data.type) return;

      if (data.type === 'component') {
        const targetSecId = selectedSectionId || (sections.length > 0 ? sections[0].id : null);
        if (targetSecId) {
          insertComponentAt(targetSecId, data.id, -1);
          toast.success(`Added ${data.id} component to canvas`, 'Component Dropped');
        } else {
          insertSectionAt('hero', null, 0);
          setTimeout(() => {
            const firstSec = useBuilderStore.getState().sections[0];
            if (firstSec) insertComponentAt(firstSec.id, data.id, 0);
          }, 20);
          toast.success(`Added ${data.id} component`, 'Component Dropped');
        }
      } else if (data.type === 'section') {
        insertSectionAt(data.id, null, sections.length);
        toast.success(`Added ${data.id} section to canvas`, 'Section Dropped');
      } else if (data.type === 'layout') {
        const layoutToSection = {
          'navbar': 'navbar',
          'hero': 'hero',
          'about': 'about',
          'services': 'services',
          'gallery': 'gallery',
          'contact': 'contact',
          'footer': 'footer',
        };
        const secType = layoutToSection[data.id] || 'hero';
        insertSectionAt(secType, data.id, sections.length);
        toast.success(`Added ${data.id} layout to canvas`, 'Layout Dropped');
      } else if (data.type === 'media') {
        const targetSecId = selectedSectionId || (sections.length > 0 ? sections[0].id : null);
        if (targetSecId) {
          insertComponentAt(targetSecId, 'image', -1, null, { src: data.url, alt: data.title || 'Image' });
          toast.success('Image component added to canvas', 'Image Dropped');
        }
      }
    } catch (_err) {
      // Ignored
    }
  };

  return (
    <div
      onDragOver={handleDragOverCanvas}
      onDrop={handleDropOnCanvas}
      className="min-h-full transition-colors"
    >
      <SortableContext
        items={sections.map(s => s.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="pb-24 min-h-[500px]">
          {sections.map((section, index) => (
            <SortableSection
              key={section.id}
              section={section}
              index={index}
              isSelected={selectedSectionId === section.id}
              onSelect={selectSection}
            />
          ))}

          {/* Bottom Insertion Zone for appending at the end */}
          {sections.length > 0 && (
            <SectionInsertionZone index={sections.length} />
          )}

          {/* Empty Canvas Placeholder with Droppable Zone */}
          {sections.length === 0 && !isPreviewMode && (
            <div className="p-16 border-2 border-dashed border-slate-300 rounded-3xl text-center bg-slate-50/70 max-w-xl mx-auto my-12 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-xs">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="text-base font-extrabold text-slate-800 mb-1">Canvas is Empty</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-5">
                Drag and drop sections or components from the sidebar, or pick a starter template to start building.
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-100">
                <Plus className="h-4 w-4" />
                <span>Drag items from the left panel onto here</span>
              </div>
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}