import { useBuilderStore } from '../../stores/builderStore';
import { Undo2, Redo2 } from 'lucide-react';

export default function StatusBar() {
  const { sections, selectedSectionId, historyIndex, history, undo, redo, isSaving, status } = useBuilderStore();

  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const totalSections = sections.length;
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  return (
    <div className="flex items-center justify-between w-full px-4">
      <div className="flex items-center gap-4">
        <span className="text-slate-400">
          Sections: <span className="text-white font-bold">{totalSections}</span>
        </span>
        {selectedSection && (
          <span className="text-slate-400">
            Selected: <span className="text-indigo-400 font-bold">{selectedSection.type}</span>
          </span>
        )}
        <span className="text-slate-400">
          Status: <span className="text-white font-bold capitalize">{status}</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        {isSaving && (
          <span className="text-xs text-slate-400">Saving...</span>
        )}
        <button
          onClick={undo}
          disabled={!canUndo}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
          title="Undo (Ctrl+Z)"
        >
          <Undo2 className="h-4 w-4" />
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
          title="Redo (Ctrl+Shift+Z)"
        >
          <Redo2 className="h-4 w-4" />
        </button>
        <span className="text-slate-400">
          History: <span className="text-white font-bold">{historyIndex + 1}/{history.length}</span>
        </span>
      </div>
    </div>
  );
}
