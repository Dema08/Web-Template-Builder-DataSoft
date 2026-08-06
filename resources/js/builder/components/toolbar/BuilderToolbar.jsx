import { useBuilderStore } from '../../stores/builderStore';
import {
  ArrowLeft,
  Undo2,
  Redo2,
  Monitor,
  Tablet,
  Smartphone,
  Eye,
  Save,
  Send,
} from 'lucide-react';

export default function BuilderToolbar({ onBack, onSave, onPublish }) {
  const {
    deviceView,
    setDeviceView,
    undo,
    redo,
    historyIndex,
    history,
    togglePreviewMode,
    isPreviewMode,
    status,
    setIsSaving,
    isSaving,
  } = useBuilderStore();

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave?.();
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    setIsSaving(true);
    try {
      await onPublish?.();
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex items-center justify-between w-full">
      {/* Left side - Back and Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-slate-100 rounded-lg transition"
          title="Back"
        >
          <ArrowLeft className="h-5 w-5 text-slate-600" />
        </button>
        <div>
          <h1 className="text-sm font-bold text-slate-900">Template Builder</h1>
          <p className="text-xs text-slate-500">
            Status: <span className="font-bold capitalize">{status}</span>
          </p>
        </div>
      </div>

      {/* Center - Undo/Redo and Device View */}
      <div className="flex items-center gap-2">
        <button
          onClick={undo}
          disabled={historyIndex <= 0}
          className="p-2 hover:bg-slate-100 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          title="Undo"
        >
          <Undo2 className="h-4 w-4 text-slate-600" />
        </button>
        <button
          onClick={redo}
          disabled={historyIndex >= history.length - 1}
          className="p-2 hover:bg-slate-100 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          title="Redo"
        >
          <Redo2 className="h-4 w-4 text-slate-600" />
        </button>

        <div className="w-px h-6 bg-slate-200 mx-2" />

        <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
          <button
            onClick={() => setDeviceView('desktop')}
            className={`p-2 rounded-md transition ${
              deviceView === 'desktop' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'
            }`}
            title="Desktop"
          >
            <Monitor className="h-4 w-4 text-slate-600" />
          </button>
          <button
            onClick={() => setDeviceView('tablet')}
            className={`p-2 rounded-md transition ${
              deviceView === 'tablet' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'
            }`}
            title="Tablet"
          >
            <Tablet className="h-4 w-4 text-slate-600" />
          </button>
          <button
            onClick={() => setDeviceView('mobile')}
            className={`p-2 rounded-md transition ${
              deviceView === 'mobile' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'
            }`}
            title="Mobile"
          >
            <Smartphone className="h-4 w-4 text-slate-600" />
          </button>
        </div>

        <div className="w-px h-6 bg-slate-200 mx-2" />

        <button
          onClick={togglePreviewMode}
          className={`p-2 rounded-lg transition ${
            isPreviewMode ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-slate-100'
          }`}
          title="Preview"
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          <span className="text-sm font-bold">Save Draft</span>
        </button>
        <button
          onClick={handlePublish}
          disabled={isSaving}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          <span className="text-sm font-bold">Publish</span>
        </button>
      </div>
    </div>
  );
}
