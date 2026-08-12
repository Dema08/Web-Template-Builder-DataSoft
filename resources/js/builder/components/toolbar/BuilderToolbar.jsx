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
  MousePointer,
  Move,
  Maximize2,
  PanelLeft,
  PanelRight,
  ChevronDown,
  Check,
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
    builderMode,
    setBuilderMode,
    isLeftPanelOpen,
    isRightPanelOpen,
    toggleLeftPanel,
    toggleRightPanel,
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
    <div className="flex items-center justify-between w-full gap-2 text-xs">
      {/* Left side - Back, Panel Toggles and Title */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onBack}
          className="p-2 hover:bg-slate-100 rounded-lg transition text-slate-600 hover:text-slate-900"
          title="Back to templates"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Left Sidebar Toggle Button */}
        <button
          onClick={toggleLeftPanel}
          className={`p-2 rounded-lg transition flex items-center gap-1 font-bold ${
            isLeftPanelOpen ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-100 text-slate-600'
          }`}
          title="Toggle Navigation & Component Layers Panel"
        >
          <PanelLeft className="h-4 w-4" />
          <span className="hidden xl:inline text-[11px]">Layers</span>
        </button>

        <div className="hidden sm:block">
          <h1 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Template Builder</h1>
          <p className="text-[10px] text-slate-500 leading-none">
            Status: <span className="font-bold capitalize">{status}</span>
          </p>
        </div>
      </div>

      {/* Center - Undo/Redo, Mode Switcher and Device View */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        <div className="flex items-center">
          <button
            onClick={undo}
            disabled={historyIndex <= 0}
            className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
            title="Undo (Ctrl+Z)"
          >
            <Undo2 className="h-4 w-4 text-slate-600" />
          </button>
          <button
            onClick={redo}
            disabled={historyIndex >= history.length - 1}
            className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
            title="Redo (Ctrl+Shift+Z)"
          >
            <Redo2 className="h-4 w-4 text-slate-600" />
          </button>
        </div>

        <div className="w-px h-5 bg-slate-200 mx-0.5" />

        {/* Builder Modes Switcher */}
        <div className="flex items-center bg-slate-100 p-0.5 sm:p-1 rounded-xl gap-0.5 border border-slate-200/80">
          <button
            onClick={() => setBuilderMode('select')}
            className={`flex items-center gap-1 px-2 py-1 text-xs font-extrabold rounded-lg transition ${
              builderMode === 'select'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
            title="Select Mode — Safe text editing & selection"
          >
            <MousePointer className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Select</span>
          </button>
          <button
            onClick={() => setBuilderMode('drag')}
            className={`flex items-center gap-1 px-2 py-1 text-xs font-extrabold rounded-lg transition ${
              builderMode === 'drag'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
            title="Drag Mode — Move section & component position"
          >
            <Move className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Drag</span>
          </button>
          <button
            onClick={() => setBuilderMode('resize')}
            className={`flex items-center gap-1 px-2 py-1 text-xs font-extrabold rounded-lg transition ${
              builderMode === 'resize'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
            title="Resize Mode — Resize width & height handles"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Resize</span>
          </button>
        </div>

        <div className="w-px h-5 bg-slate-200 mx-0.5" />

        {/* Device View Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowDeviceMenu(!showDeviceMenu);
              setShowZoomMenu(false);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition border border-slate-200 text-slate-700 font-bold shadow-xs focus:ring-2 focus:ring-indigo-500/20"
            title="Pilih Tampilan Desktop, Tablet, atau Mobile"
          >
            {devices.find(d => d.id === deviceView)?.icon && (
              <>
                {(() => {
                  const Icon = devices.find(d => d.id === deviceView).icon;
                  return <Icon className="h-4 w-4 text-indigo-600 shrink-0" />;
                })()}
              </>
            )}
            <span className="text-xs capitalize">{deviceView}</span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400 shrink-0" />
          </button>

          {showDeviceMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowDeviceMenu(false)}
              />
              <div className="absolute top-full mt-1.5 left-0 bg-white border border-slate-200/90 rounded-2xl shadow-2xl py-1.5 z-50 min-w-[170px] ds-animate-scale-in">
                <div className="px-3 py-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Device Viewport
                </div>
                {devices.map(device => (
                  <button
                    key={device.id}
                    onClick={() => {
                      setDeviceView(device.id);
                      setShowDeviceMenu(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition ${
                      deviceView === device.id ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <device.icon className="h-4 w-4 shrink-0 text-slate-500" />
                      <span>{device.label}</span>
                    </div>
                    {deviceView === device.id && <Check className="h-3.5 w-3.5 text-indigo-600" />}
                  </button>
                ))}
                <div className="border-t border-slate-100 my-1" />
                <button
                  onClick={() => {
                    togglePreviewMode();
                    setShowDeviceMenu(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition ${
                    isPreviewMode ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 shrink-0 text-slate-500" />
                    <span>Preview Mode</span>
                  </div>
                  {isPreviewMode && <Check className="h-3.5 w-3.5 text-indigo-600" />}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Zoom Dropdown (hidden on small mobile) */}
        <div className="relative hidden md:block">
          <button
            onClick={() => {
              setShowZoomMenu(!showZoomMenu);
              setShowDeviceMenu(false);
            }}
            className="flex items-center gap-1 px-2 py-1.5 hover:bg-slate-100 rounded-lg transition text-slate-600"
          >
            <ZoomIn className="h-4 w-4" />
            <span className="text-xs font-bold">100%</span>
          </button>

          {showZoomMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowZoomMenu(false)}
              />
              <div className="absolute top-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-30 min-w-[100px]">
                {zoomLevels.map(level => (
                  <button
                    key={level}
                    onClick={() => {
                      setShowZoomMenu(false);
                    }}
                    className="w-full px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 transition text-left font-bold"
                  >
                    {level}%
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right side - Right Panel Toggle & Save / Publish */}
      <div className="flex items-center gap-1.5 shrink-0">
        {/* Right Inspector Toggle Button */}
        <button
          onClick={toggleRightPanel}
          className={`p-2 rounded-lg transition flex items-center gap-1 font-bold ${
            isRightPanelOpen ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-100 text-slate-600'
          }`}
          title="Toggle Properties & Inspector Panel"
        >
          <PanelRight className="h-4 w-4" />
          <span className="hidden xl:inline text-[11px]">Inspector</span>
        </button>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition font-bold disabled:opacity-50 text-xs"
        >
          <Save className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Save Draft</span>
        </button>
        <button
          onClick={handlePublish}
          disabled={isSaving}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition font-extrabold shadow-xs shadow-indigo-600/20 disabled:opacity-50 text-xs"
        >
          <Send className="h-3.5 w-3.5" />
          <span>Publish</span>
        </button>
      </div>
    </div>
  );
}