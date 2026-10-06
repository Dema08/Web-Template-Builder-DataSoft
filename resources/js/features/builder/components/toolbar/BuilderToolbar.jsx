import { useState, useEffect } from 'react';
import { useBuilderStore, broadcastBuilderState } from '../../stores/builderStore';
import { toast } from '@store';
import {
  ArrowLeft,
  Undo2,
  Redo2,
  Monitor,
  Tablet,
  Smartphone,
  Eye,
  ExternalLink,
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
  Grid,
  Plus,
  BookmarkPlus,
} from 'lucide-react';

export default function BuilderToolbar({ onBack, onSave, onPublish, onUpdate, isEditing, isEditingUserTemplate, onSaveAsTemplate, onSaveDraft, isSaving: propIsSaving, isPublishing, isSavingDraft, activeDraftTemplateName, lastAutoSaveTime }) {
  const [showDeviceMenu, setShowDeviceMenu] = useState(false);
  const [showZoomMenu, setShowZoomMenu] = useState(false);
  const {
    templateId,
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
    isSaving: storeIsSaving,
    builderMode,
    setBuilderMode,
    snapEnabled,
    toggleSnap,
    selectedLayers,
    groupComponents,
    ungroupComponents,
    selectedSectionId,
    sections,
    pages,
    currentPageId,
    switchPage,
    addSubPage,
    isLeftPanelOpen,
    isRightPanelOpen,
    toggleLeftPanel,
    toggleRightPanel,
  } = useBuilderStore();

  const isSaving = Boolean(propIsSaving || storeIsSaving);

  const [showPageMenu, setShowPageMenu] = useState(false);
  const [showNewPageModal, setShowNewPageModal] = useState(false);
  const [newPageNameInput, setNewPageNameInput] = useState('');
  const [autoSaveLabel, setAutoSaveLabel] = useState('');

  // Perbarui label auto-save setiap saat
  useEffect(() => {
    if (!lastAutoSaveTime) return;
    const update = () => {
      const secs = Math.round((Date.now() - lastAutoSaveTime.getTime()) / 1000);
      if (secs < 60) setAutoSaveLabel(`Tersimpan ${secs}d yang lalu`);
      else setAutoSaveLabel(`Tersimpan ${Math.round(secs / 60)} mnt lalu`);
    };
    update();
    const id = setInterval(update, 5000);
    return () => clearInterval(id);
  }, [lastAutoSaveTime]);

  const handleOpenPreview = () => {
    const currentState = useBuilderStore.getState();
    const { sections, landingSections, pages, currentPageId, templateName, industryName, industrySlug, status, templateId, deviceView } = currentState;

    const activeLanding = currentPageId === 'landing' ? sections : (landingSections || sections);
    const activePages = { ...pages };
    if (currentPageId !== 'landing' && activePages[currentPageId]) {
      activePages[currentPageId] = { ...activePages[currentPageId], sections };
    }

    if (!activeLanding || activeLanding.length === 0) {
      toast.error('Kanvas kosong. Tambahkan bagian atau muat template sebelum pratinjau.', 'Galat Pratinjau');
      return;
    }

    const activeViewport = ['desktop', 'tablet', 'mobile'].includes(deviceView) ? deviceView : 'desktop';

    // Save snapshot to localStorage for instant new tab preview (ikutkan deviceView agar preview dibuka sesuai mode kanvas aktif)
    const payload = {
      sections: activeLanding,
      pages: activePages,
      templateName: templateName || 'Untitled Template',
      industryName,
      industrySlug,
      status,
      templateId,
      deviceView: activeViewport,
      viewport: activeViewport,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem('template_builder_preview_data', JSON.stringify(payload));
    } catch (e) {
      console.warn('Failed to write preview payload to localStorage', e);
    }

    broadcastBuilderState({ ...currentState, sections: activeLanding, pages: activePages, deviceView: activeViewport });

    // Open clean, full live website preview in a new tab (bawa ?viewport agar tab preview langsung pakai frame mobile/tablet)
    const basePreviewUrl = templateId
      ? `/admin/templates/builder/${templateId}/preview`
      : '/preview/template';
    const previewUrl = `${basePreviewUrl}?viewport=${activeViewport}`;

    window.open(previewUrl, '_blank');
    toast.success(`Pratinjau website live dibuka di tab baru (${activeViewport})`, 'Mode Pratinjau');
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave?.();
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdate = async () => {
    setIsSaving(true);
    try {
      if (onUpdate) {
        await onUpdate();
      } else {
        await onSave?.();
      }
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
          title="Kembali ke template"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Left Sidebar Toggle Button */}
        <button
          onClick={toggleLeftPanel}
          className={`p-2 rounded-lg transition flex items-center gap-1 font-bold ${
            isLeftPanelOpen ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-100 text-slate-600'
          }`}
          title="Buka/tutup panel navigasi & lapisan komponen"
        >
          <PanelLeft className="h-4 w-4" />
          <span className="hidden xl:inline text-[11px]">Layers</span>
        </button>

        <div className="hidden sm:block">
          <h1 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Builder Template</h1>
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
            title="Mode Pilih — Edit teks & seleksi aman"
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
            title="Mode Seret — Pindah posisi bagian & komponen"
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
            title="Mode Ukuran — Ubah lebar & tinggi"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Resize</span>
          </button>
        </div>

        {/* Snap to Grid Toggle Button */}
        <button
          onClick={toggleSnap}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-extrabold transition border ${
            snapEnabled
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-xs'
              : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
          }`}
          title={snapEnabled ? 'Snap ke Grid (10px) AKTIF' : 'Snap ke Grid MATI'}
        >
          <Grid className={`h-3.5 w-3.5 ${snapEnabled ? 'text-indigo-600 animate-pulse' : 'text-slate-400'}`} />
          <span className="hidden sm:inline">Snap: {snapEnabled ? '10px' : 'Off'}</span>
        </button>

        {/* Group / Ungroup Buttons when multi-selected */}
        {selectedLayers && selectedLayers.length >= 2 && (
          <button
            onClick={() => {
              const secId = selectedSectionId || (sections.length > 0 ? sections[0].id : null);
              if (secId) groupComponents(secId, selectedLayers);
            }}
            className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-sm hover:bg-indigo-700 transition"
            title="Kelompokkan komponen terpilih"
          >
            <span>Kelompok ({selectedLayers.length})</span>
          </button>
        )}

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
                  Tampilan Perangkat
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
                    handleOpenPreview();
                    setShowDeviceMenu(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 shrink-0 text-indigo-600" />
                    <span>Pratinjau di Tab Baru ({deviceView})</span>
                  </div>
                  <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-extrabold">TAB BARU</span>
                </button>
              </div>
            </>
          )}
        </div>

        <div className="w-px h-5 bg-slate-200 mx-0.5" />

        {/* Page Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowPageMenu(!showPageMenu);
              setShowDeviceMenu(false);
              setShowZoomMenu(false);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50/80 hover:bg-indigo-100 rounded-xl transition border border-indigo-200 text-indigo-700 font-extrabold shadow-xs"
            title="Beralih antara Halaman Landing dan Subhalaman untuk diedit di kanvas"
          >
            <span className="text-xs">
              {currentPageId === 'landing' ? 'Landing Page' : (pages[currentPageId]?.name || 'Subpage')}
            </span>
            <ChevronDown className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
          </button>

          {showPageMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowPageMenu(false)} />
              <div className="absolute top-full mt-1.5 left-0 bg-white border border-slate-200/90 rounded-2xl shadow-2xl py-1.5 z-50 min-w-[200px]">
                <div className="px-3 py-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Halaman dan Subhalaman
                </div>
                <button
                  onClick={() => {
                    switchPage('landing');
                    setShowPageMenu(false);
                    toast.success('Beralih ke Halaman Landing', 'Page');
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition ${
                    currentPageId === 'landing' ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>Halaman Landing (Utama)</span>
                  {currentPageId === 'landing' && <Check className="h-3.5 w-3.5 text-indigo-600" />}
                </button>

                {Object.values(pages).map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      switchPage(p.id);
                      setShowPageMenu(false);
                      toast.success('Halaman diganti', 'Page');
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition ${
                      currentPageId === p.id ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{p.name}</span>
                    {currentPageId === p.id && <Check className="h-3.5 w-3.5 text-indigo-600" />}
                  </button>
                ))}

                <div className="border-t border-slate-100 my-1" />
                <button
                  onClick={() => {
                    setShowPageMenu(false);
                    setShowNewPageModal(true);
                  }}
                  className="w-full flex items-center gap-1.5 px-3 py-2 text-xs font-extrabold text-indigo-600 hover:bg-indigo-50 transition"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>+ Buat Subhalaman Baru</span>
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
        {/* Pratinjau Langsung Mode Button */}
        <button
          onClick={handleOpenPreview}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition font-extrabold border border-indigo-200/80 text-xs shadow-2xs hover:shadow-xs"
          title="Buka pratinjau live website profesional di tab baru"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Mode Pratinjau</span>
        </button>

        {/* Right Inspector Toggle Button */}
        <button
          onClick={toggleRightPanel}
          className={`p-2 rounded-lg transition flex items-center gap-1 font-bold ${
            isRightPanelOpen ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-100 text-slate-600'
          }`}
          title="Buka/tutup panel properti & inspektor"
        >
          <PanelRight className="h-4 w-4" />
          <span className="hidden xl:inline text-[11px]">Inspector</span>
        </button>

        {/* Save Draft button */}
        <button
          onClick={onSaveDraft}
          disabled={isSavingDraft || isSaving}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200/80 rounded-lg transition font-bold disabled:opacity-50 text-xs"
          title={activeDraftTemplateName ? `Update draft: ${activeDraftTemplateName}` : 'Simpan sebagai draft ke Template Saya'}
        >
          <Save className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">
            {isSavingDraft ? 'Menyimpan...' : 'Save Draft'}
          </span>
        </button>

        {/* Auto-save indicator pill */}
        {activeDraftTemplateName && !isEditingUserTemplate && (
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200/60 rounded-lg text-[10px] font-semibold text-emerald-700 max-w-[180px] truncate" title={`Draft: ${activeDraftTemplateName} • ${autoSaveLabel}`}>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className="truncate">{autoSaveLabel || `Draft: ${activeDraftTemplateName}`}</span>
          </div>
        )}

        {onSaveAsTemplate && (
          <button
            onClick={onSaveAsTemplate}
            disabled={isSaving}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 rounded-lg transition font-extrabold disabled:opacity-50 text-xs shadow-2xs hover:shadow-xs cursor-pointer"
            title="Simpan sebagai template baru (Private/Publik)"
          >
            <BookmarkPlus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Simpan sebagai Template</span>
          </button>
        )}

        {(isEditing !== undefined ? isEditing : !!templateId) ? (
          <button
            onClick={handleUpdate}
            disabled={isSaving}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition font-extrabold shadow-xs shadow-indigo-600/20 disabled:opacity-50 text-xs"
            title="Simpan perubahan & konfirmasi publish template"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Perbarui</span>
          </button>
        ) : (
          <button
            onClick={handlePublish}
            disabled={isSaving}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition font-extrabold shadow-xs shadow-indigo-600/20 disabled:opacity-50 text-xs"
            title="Publish template baru"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Publikasikan</span>
          </button>
        )}
      </div>

      {/* New Subpage Modal */}
      {showNewPageModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900">Buat Subhalaman Baru</h3>
            <p className="text-xs text-slate-500">
              Buat halaman baru terpisah dari landing page (misal: Detail Produk, Kontak Lengkap, dll).
            </p>
            <input
              type="text"
              placeholder="Nama Halaman (e.g. Portfolio Detail)"
              value={newPageNameInput}
              onChange={(e) => setNewPageNameInput(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowNewPageModal(false)}
                className="px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!newPageNameInput.trim()) {
                    toast.error('Nama halaman wajib diisi', 'Galat');
                    return;
                  }
                  addSubPage(newPageNameInput.trim());
                  setNewPageNameInput('');
                  setShowNewPageModal(false);
                  toast.success('Halaman baru berhasil dibuat dan dimuat di canvas!', 'Berhasil');
                }}
                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-extrabold shadow-sm"
              >
                Buat & Edit di Canvas
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}