import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useBuilderStore } from '../../stores/builderStore';
import SectionRenderer from '../sections/SectionRenderer';

function SortableSection({ section, isSelected, onSelect }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: section.id,
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
      {...attributes}
      {...listeners}
      className={`cursor-grab active:cursor-grabbing relative ${isSelected ? 'z-10' : ''}`}
    >
      <SectionRenderer
        section={section}
        isSelected={isSelected}
        onClick={() => onSelect(section.id)}
      />
    </div>
  );
}

export default function SectionCanvas() {
  const { sections, selectedSectionId, reorderSections, selectSection } = useBuilderStore();
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

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={sections.map(s => s.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4 pb-20">
          {sections.map((section) => (
            <SortableSection
              key={section.id}
              section={section}
              isSelected={selectedSectionId === section.id}
              onSelect={selectSection}
            />
          ))}

          {sections.length === 0 && (
            <div className="p-16 border-2 border-dashed border-slate-300 rounded-2xl text-center">
              <div className="text-lg font-bold text-slate-400 mb-2">Empty Canvas</div>
              <div className="text-sm text-slate-400">
                Select a section from the left panel to build your website
              </div>
            </div>
          )}
        </div>
      </SortableContext>
    </DndContext>
  );
}
