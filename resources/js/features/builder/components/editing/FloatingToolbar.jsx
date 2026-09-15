import { useEffect, useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';

export default function FloatingToolbar() {
  const {
    sections,
    selectedSectionId,
    selectedComponentId,
    toggleLockComponent,
    isPreviewMode,
  } = useBuilderStore();
  const [position, setPosition] = useState(null);

  const selectedSection = sections.find(s => s.id === selectedSectionId);

  const findComponentInTree = (components, targetId) => {
    if (!Array.isArray(components)) return null;
    for (const c of components) {
      if (c.id === targetId) return c;
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        const found = findComponentInTree(c.childrenComponents, targetId);
        if (found) return found;
      }
    }
    return null;
  };

  const selectedComponent = selectedSection ? findComponentInTree(selectedSection.components, selectedComponentId) : null;

  useEffect(() => {
    if (selectedComponent) {
      const element = document.getElementById(selectedComponent.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        setPosition({
          top: rect.top - 40,
          left: rect.left + rect.width / 2,
        });
      }
    }
  }, [selectedComponentId, selectedComponent?.props]);

  if (isPreviewMode || !selectedComponent || !position) return null;

  const isLocked = !!selectedComponent?.isLocked;

  const toolbarStyle = {
    position: 'fixed',
    top: position.top,
    left: position.left,
    transform: 'translateX(-50%)',
    zIndex: 100,
  };

  return (
    <div
      style={toolbarStyle}
      className="bg-white border border-slate-200 rounded-xl shadow-lg px-2.5 py-1.5 flex items-center gap-1.5"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Lock / Unlock Toggle Button */}
      <button
        onClick={() => toggleLockComponent(selectedSectionId, selectedComponentId)}
        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
          isLocked ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
        title={isLocked ? 'Unlock Component' : 'Lock Component'}
      >
        <span>{isLocked ? '🔒 Locked' : '🔓 Unlock'}</span>
      </button>
    </div>
  );
}
