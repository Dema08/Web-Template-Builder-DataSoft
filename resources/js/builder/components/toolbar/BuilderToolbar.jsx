import { useState } from 'react';
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
  ZoomIn,
  ZoomOut,
  Maximize,
} from 'lucide-react';

export default function BuilderToolbar({ onBack, onSave, onPublish }) {
  const [showDeviceMenu, setShowDeviceMenu] = useState(false);
  const [showZoomMenu, setShowZoomMenu] = useState(false);
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

  const devices = [
    { id: 'desktop', label: 'Desktop', icon: Monitor },
    { id: 'tablet', label: 'Tablet', icon: Tablet },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  const zoomLevels = [50, 75, 100, 125];

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
      <div className="flex items-center gap-1">
        <button
          onClick={undo}
          disabled={historyIndex <= 0}
          className="p-2 hover:bg-slate-100 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          title="Undo (Ctrl+Z)"
        >
          <Undo2 className="h-4 w-4 text-slate-600" />
        </button>
        <button
          onClick={redo}
          disabled={historyIndex >= history.length - 1}
          className="p-2 hover:bg-slate-100 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          title="Redo (Ctrl+Shift+Z)"
        >
          <Redo2 className="h-4 w-4 text-slate-600" />
        </button>

        <div className="w-px h-6 bg-slate-200 mx-2" />

        {/* Device View Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowDeviceMenu(!showDeviceMenu);
              setShowZoomMenu(false);
            }}
            className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-lg transition"
          >
            {devices.find(d => d.id === deviceView)?.icon && (
              <>
                {(() => {
                  const Icon = devices.find(d => d.id === deviceView).icon;
                  return <Icon className="h-4 w-4 text-slate-600" />;
                })()}
              </>
            )}
            <span className="text-sm font-bold text-slate-700 capitalize">{deviceView}</span>
          </button>

          {showDeviceMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowDeviceMenu(false)}
              />
              <div className="absolute top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-20 min-w-[160px]">
                {devices.map(device => (
                  <button
                    key={device.id}
                    onClick={() => {
                      setDeviceView(device.id);
                      setShowDeviceMenu(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 transition ${
                      deviceView === device.id ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700'
                    }`}
                  >
                    <device.icon className="h-4 w-4" />
                    <span className="font-bold">{device.label}</span>
                  </button>
                ))}
                <div className="border-t border-slate-200 my-1" />
                <button
                  onClick={() => {
                    togglePreviewMode();
                    setShowDeviceMenu(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50 transition ${
                    isPreviewMode ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700'
                  }`}
                >
                  <Eye className="h-4 w-4" />
                  <span className="font-bold">Preview</span>
                </button>
              </div>
            </>
          )}
        </div>

        <div className="w-px h-6 bg-slate-200 mx-2" />

        {/* Zoom Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowZoomMenu(!showZoomMenu);
              setShowDeviceMenu(false);
            }}
            className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-lg transition"
          >
            <ZoomIn className="h-4 w-4 text-slate-600" />
            <span className="text-sm font-bold text-slate-700">100%</span>
          </button>

          {showZoomMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowZoomMenu(false)}
              />
              <div className="absolute top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-20 min-w-[120px]">
                {zoomLevels.map(level => (
                  <button
                    key={level}
                    onClick={() => {
                      // Handle zoom change
                      setShowZoomMenu(false);
                    }}
                    className="w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition text-left font-bold"
                  >
                    {level}%
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
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