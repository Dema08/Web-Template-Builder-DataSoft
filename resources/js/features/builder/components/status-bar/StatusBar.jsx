import { useBuilderStore } from '../../stores/builderStore';
import { Undo2, Redo2, History, Save, CheckCircle } from 'lucide-react';

export default function StatusBar() {
  const { sections, selectedSectionId, selectedComponentId, historyIndex, history, isSaving, status } = useBuilderStore();

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

  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const totalSections = sections.length;
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  const selectedComponent = selectedSection ? findComponentInTree(selectedSection.components, selectedComponentId) : null;
  const selectedComponentType = selectedComponent?.type;

  return (
    <div className="flex items-center justify-between w-full px-4">
      <div className="flex items-center gap-4">
        <span className="text-slate-400">
          History: <span className="text-white font-bold">{historyIndex + 1}/{history.length}</span>
        </span>
        <span className="text-slate-600">|</span>
        {isSaving ? (
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <Save className="h-3 w-3 animate-pulse" />
            Auto Saving...
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-xs text-emerald-400">
            <CheckCircle className="h-3 w-3" />
            Saved
          </span>
        )}
        <span className="text-slate-600">|</span>
        <span className="text-slate-400">
          Status: <span className="text-white font-bold capitalize">{status}</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        {selectedComponentType && (
          <>
            <span className="text-slate-400">
              Selected: <span className="text-indigo-400 font-bold">{selectedComponentType}</span>
            </span>
            <span className="text-slate-600">|</span>
          </>
        )}
        {selectedSection && (
          <span className="text-slate-400">
            Section: <span className="text-white font-bold">{selectedSection.type}</span>
          </span>
        )}
        <span className="text-slate-600">|</span>
        <span className="text-slate-400">
          Sections: <span className="text-white font-bold">{totalSections}</span>
        </span>
      </div>
    </div>
  );
}