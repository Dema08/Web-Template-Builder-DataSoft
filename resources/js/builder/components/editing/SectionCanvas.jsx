import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useBuilderStore } from '../../stores/builderStore';
import SectionRenderer from '../sections/SectionRenderer';
import { toast } from '@store';
import { GripVertical } from 'lucide-react';

function SortableSection({ section, isSelected, onSelect }) {
  const { builderMode } = useBuilderStore();
  const isDragMode = builderMode === 'drag';

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: section.id,
    disabled: !isDragMode || !!section.isLocked, // Disable dnd-kit sortable unless explicitly in Drag mode & not locked
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    position: 'relative',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      id={section.id}
      data-section-id={section.id}
      className={`relative group/section ${isSelected ? 'z-10' : ''}`}
    >
      {/* Section Drag Bar (shown when in Drag mode) */}
      {isDragMode && !section.isLocked && (
        <div
          {...attributes}
          {...listeners}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 bg-indigo-600 text-white px-3 py-0.5 rounded-full text-xs font-bold shadow-md cursor-grab active:cursor-grabbing flex items-center gap-1 hover:bg-indigo-700 transition"
          title="Drag to reorder section"
        >
          <GripVertical className="h-3.5 w-3.5" />
          <span>Move Section ({section.type})</span>
        </div>
      )}

      <SectionRenderer
        section={section}
        isSelected={isSelected}
        onClick={() => onSelect(section.id)}
      />
    </div>
  );
}

export default function SectionCanvas() {
  const { sections, selectedSectionId, reorderSections, selectSection, addSection, addComponent, builderMode } = useBuilderStore();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex(s => s.id === active.id);
    const newIndex = sections.findIndex(s => s.id === over.id);

    const newSections = [...sections];
    const [movedSection] = newSections.splice(oldIndex, 1);
    newSections.splice(newIndex, 0, movedSection);

    // Update order
    const reordered = newSections.map((s, i) => ({ ...s, order: i }));
    reorderSections(reordered);
  };

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
          addComponent(targetSecId, data.id);
          toast.success(`Added ${data.id} component to canvas`, 'Component Dropped');
        } else {
          toast.info('Please add a section first', 'Notice');
        }
      } else if (data.type === 'section') {
        addSection(data.id);
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
        addSection(secType, data.id);
        toast.success(`Added ${data.id} layout to canvas`, 'Layout Dropped');
      }
    } catch (err) {
      // Ignore non-json drop events
    }
  };

  return (
    <div
      onDragOver={handleDragOverCanvas}
      onDrop={handleDropOnCanvas}
      className="min-h-full"
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sections.map(s => s.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="pb-20 min-h-[400px]">
            {sections.map((section) => (
              <SortableSection
                key={section.id}
                section={section}
                isSelected={selectedSectionId === section.id}
                onSelect={selectSection}
              />
            ))}

            {sections.length === 0 && (
              <div className="p-16 border-2 border-dashed border-slate-300 rounded-2xl text-center bg-slate-50/50">
                <div className="text-lg font-bold text-slate-500 mb-2">Empty Canvas</div>
                <div className="text-sm text-slate-400">
                  Drag & drop or click sections from the left panel to build your website
                </div>
              </div>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}