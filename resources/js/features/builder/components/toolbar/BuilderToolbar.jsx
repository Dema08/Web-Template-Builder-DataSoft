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
  MoreHorizontal,
  FileText,
} from 'lucide-react';

export default function BuilderToolbar({
  onBack,
  onSave,
  onPublish,
  onUpdate,
  isEditing,
  isEditingUserTemplate,
  onSaveAsTemplate,
  onSaveDraft,
  isSaving: propIsSaving,
  isPublishing,
  isSavingDraft,
  activeDraftTemplateName,
  lastAutoSaveTime,
}) {
  const [showDeviceMenu, setShowDeviceMenu] = useState(false);
  const [showZoomMenu, setShowZoomMenu] = useState(false);
  const [showMobileActionMenu, setShowMobileActionMenu] = useState(false);
  const [showLaptopMoreMenu, setShowLaptopMoreMenu] = useState(false);
  const [showPageMenu, setShowPageMenu] = useState(false);
  const [showNewPageModal, setShowNewPageModal] = useState(false);
  const [newPageNameInput, setNewPageNameInput] = useState('');
  const [autoSaveLabel, setAutoSaveLabel] = useState('');

  const {
    templateId,
    deviceView,
    setDeviceView,
    undo,
    redo,
    historyIndex,
    history,
    status,
    setIsSaving,
    isSaving: storeIsSaving,
    builderMode,
    setBuilderMode,
    snapEnabled,
    toggleSnap,
    selectedLayers,
    groupComponents,
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

  // Update label auto-save periodically
  useEffect(() => {
    if (!lastAutoSaveTime) return;
    const update = () => {
      const secs = Math.round((Date.now() - lastAutoSaveTime.getTime()) / 1000);
      if (secs < 60) setAutoSaveLabel(`${secs}d lalu`);
      else setAutoSaveLabel(`${Math.round(secs / 60)}m lalu`);
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

    const basePreviewUrl = templateId
      ? `/admin/templates/builder/${templateId}/preview`
      : '/preview/template';
    const previewUrl = `${basePreviewUrl}?viewport=${activeViewport}`;

    window.open(previewUrl, '_blank');
    toast.success(`Pratinjau website live dibuka di tab baru (${activeViewport})`, 'Mode Pratinjau');
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
    <div className="flex items-center justify-between w-full gap-1 sm:gap-2 text-xs select-none min-w-0">
      {/* ─── LEFT GROUP: Back, Layers Toggle & Title ─── */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 min-w-0">
        <button
          onClick={onBack}
          className="p-1.5 hover:bg-slate-100 rounded-xl transition text-slate-600 hover:text-slate-900 active:scale-95 shrink-0"
          title="Kembali ke daftar template"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
        </button>

        {/* Left Sidebar Toggle (Desktop/Laptop >= 1024px) */}
        <button
          onClick={toggleLeftPanel}
          className={`hidden lg:flex p-1.5 rounded-xl transition items-center gap-1 font-bold shrink-0 ${
            isLeftPanelOpen ? 'bg-indigo-50 text-indigo-600 shadow-2xs' : 'hover:bg-slate-100 text-slate-600'
          }`}
          title="Buka/tutup panel navigasi & layers komponen"
        >
          <PanelLeft className="h-4 w-4 shrink-0" />
          <span className="hidden 2xl:inline text-[11px]">Layers</span>
        </button>

        {/* Title & Status */}
        <div className="hidden md:flex flex-col justify-center shrink-0 min-w-0">
          <div className="flex items-center gap-1.5">
            <h1 className="text-xs font-extrabold text-slate-900 leading-tight truncate max-w-[90px] lg:max-w-[120px] 2xl:max-w-none">
              Builder
            </h1>
            <span className="hidden lg:inline-block px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-extrabold rounded-md uppercase shrink-0">
              {status}
            </span>
          </div>
          {activeDraftTemplateName && (
            <p className="hidden xl:block text-[9px] text-slate-400 leading-none truncate max-w-[100px]">
              {activeDraftTemplateName}
            </p>
          )}
        </div>
      </div>

      {/* ─── CENTER GROUP: Undo/Redo, Mode Switcher, Viewport & Page ─── */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        {/* Undo / Redo */}
        <div className="flex items-center bg-slate-100 border border-slate-200/80 rounded-xl p-0.5 shadow-2xs shrink-0">
          <button
            onClick={undo}
            disabled={historyIndex <= 0}
            className="p-1 hover:bg-white rounded-lg transition disabled:opacity-30 disabled:cursor-not-allowed active:scale-90 text-slate-700"
            title="Undo (Ctrl+Z)"
          >
            <Undo2 className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={redo}
            disabled={historyIndex >= history.length - 1}
            className="p-1 hover:bg-white rounded-lg transition disabled:opacity-30 disabled:cursor-not-allowed active:scale-90 text-slate-700"
            title="Redo (Ctrl+Shift+Z)"
          >
            <Redo2 className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Builder Modes Switcher (Select / Drag / Resize) - Compact icons on laptops, text on 2xl */}
        <div className="hidden lg:flex items-center bg-slate-100 p-0.5 rounded-xl gap-0.5 border border-slate-200/80 shadow-2xs shrink-0">
          <button
            onClick={() => setBuilderMode('select')}
            className={`flex items-center gap-1 px-1.5 py-1 text-xs font-extrabold rounded-lg transition ${
              builderMode === 'select'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
            title="Mode Pilih — Edit teks & seleksi"
          >
            <MousePointer className="h-3.5 w-3.5" />
            <span className="hidden 2xl:inline">Select</span>
          </button>
          <button
            onClick={() => setBuilderMode('drag')}
            className={`flex items-center gap-1 px-1.5 py-1 text-xs font-extrabold rounded-lg transition ${
              builderMode === 'drag'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
            title="Mode Seret — Pindah posisi komponen"
          >
            <Move className="h-3.5 w-3.5" />
            <span className="hidden 2xl:inline">Drag</span>
          </button>
          <button
            onClick={() => setBuilderMode('resize')}
            className={`flex items-center gap-1 px-1.5 py-1 text-xs font-extrabold rounded-lg transition ${
              builderMode === 'resize'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
            title="Mode Ukuran — Ubah lebar & tinggi"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span className="hidden 2xl:inline">Resize</span>
          </button>
        </div>

        {/* Snap to Grid Toggle Button (Icon on xl, Text on 2xl) */}
        <button
          onClick={toggleSnap}
          className={`hidden xl:flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-extrabold transition border shrink-0 ${
            snapEnabled
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-2xs'
              : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
          }`}
          title={snapEnabled ? 'Snap ke Grid (10px) AKTIF' : 'Snap ke Grid MATI'}
        >
          <Grid className={`h-3.5 w-3.5 ${snapEnabled ? 'text-indigo-600' : 'text-slate-400'}`} />
          <span className="hidden 2xl:inline">Snap: {snapEnabled ? '10px' : 'Off'}</span>
        </button>

        {/* Group / Ungroup Buttons when multi-selected */}
        {selectedLayers && selectedLayers.length >= 2 && (
          <button
            onClick={() => {
              const secId = selectedSectionId || (sections.length > 0 ? sections[0].id : null);
              if (secId) groupComponents(secId, selectedLayers);
            }}
            className="flex items-center gap-1 px-2 py-1 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-sm hover:bg-indigo-700 transition shrink-0"
            title="Kelompokkan komponen terpilih"
          >
            <span>Grup ({selectedLayers.length})</span>
          </button>
        )}

        <div className="hidden sm:block w-px h-4 bg-slate-200 mx-0.5 shrink-0" />

        {/* Device View Dropdown (Icon-first compact pill on laptops) */}
        <div className="relative shrink-0">
          <button
            onClick={() => {
              setShowDeviceMenu(!showDeviceMenu);
              setShowZoomMenu(false);
              setShowPageMenu(false);
              setShowLaptopMoreMenu(false);
            }}
            className="flex items-center gap-1 px-2 py-1.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition border border-slate-200 text-slate-700 font-bold shadow-2xs focus:ring-2 focus:ring-indigo-500/20 shrink-0"
            title="Pilih Tampilan Desktop, Tablet, atau Mobile"
          >
            {devices.find(d => d.id === deviceView)?.icon && (
              <>
                {(() => {
                  const Icon = devices.find(d => d.id === deviceView).icon;
                  return <Icon className="h-3.5 w-3.5 text-indigo-600 shrink-0" />;
                })()}
              </>
            )}
            <span className="hidden 2xl:inline text-xs capitalize">{deviceView}</span>
            <ChevronDown className="h-3 w-3 text-slate-400 shrink-0" />
          </button>

          {showDeviceMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowDeviceMenu(false)} />
              <div className="absolute top-full mt-1.5 left-0 bg-white border border-slate-200/90 rounded-2xl shadow-2xl py-1.5 z-50 min-w-[170px] animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Tampilan Kanvas
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
                    <span>Pratinjau Tab Baru ({deviceView})</span>
                  </div>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Page Switcher Dropdown (Responsive: Truncated on small laptops) */}
        <div className="relative hidden sm:block shrink-0">
          <button
            onClick={() => {
              setShowPageMenu(!showPageMenu);
              setShowDeviceMenu(false);
              setShowZoomMenu(false);
              setShowLaptopMoreMenu(false);
            }}
            className="flex items-center gap-1 px-2 py-1.5 bg-indigo-50/80 hover:bg-indigo-100 rounded-xl transition border border-indigo-200 text-indigo-700 font-extrabold shadow-2xs shrink-0"
            title="Beralih antara Landing Page dan Subhalaman"
          >
            <FileText className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
            <span className="text-xs truncate max-w-[65px] md:max-w-[85px] 2xl:max-w-[140px]">
              {currentPageId === 'landing' ? 'Landing' : (pages[currentPageId]?.name || 'Subpage')}
            </span>
            <ChevronDown className="h-3 w-3 text-indigo-500 shrink-0" />
          </button>

          {showPageMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowPageMenu(false)} />
              <div className="absolute top-full mt-1.5 left-0 bg-white border border-slate-200/90 rounded-2xl shadow-2xl py-1.5 z-50 min-w-[200px] animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Halaman Website
                </div>
                <button
                  onClick={() => {
                    switchPage('landing');
                    setShowPageMenu(false);
                    toast.success('Beralih ke Halaman Landing', 'Halaman');
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition ${
                    currentPageId === 'landing' ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>Landing Page (Utama)</span>
                  {currentPageId === 'landing' && <Check className="h-3.5 w-3.5 text-indigo-600" />}
                </button>

                {Object.values(pages).map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      switchPage(p.id);
                      setShowPageMenu(false);
                      toast.success(`Beralih ke ${p.name}`, 'Halaman');
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold transition ${
                      currentPageId === p.id ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="truncate">{p.name}</span>
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
      </div>

      {/* ─── RIGHT GROUP: Preview, Inspector, Save & Publish ─── */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        {/* Live Preview Mode Button (Icon on laptop, text on 2xl) */}
        <button
          onClick={handleOpenPreview}
          className="hidden md:flex items-center gap-1 p-1.5 2xl:px-2.5 2xl:py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl transition font-extrabold border border-indigo-200/80 text-xs shadow-2xs active:scale-95 shrink-0"
          title="Buka pratinjau live website di tab baru"
        >
          <ExternalLink className="h-3.5 w-3.5 shrink-0" />
          <span className="hidden 2xl:inline">Pratinjau</span>
        </button>

        {/* Right Inspector Toggle Button (Desktop/Laptop >= 1024px) */}
        <button
          onClick={toggleRightPanel}
          className={`hidden lg:flex p-1.5 2xl:px-2 2xl:py-1.5 rounded-xl transition items-center gap-1 font-bold shrink-0 ${
            isRightPanelOpen ? 'bg-indigo-50 text-indigo-600 shadow-2xs' : 'hover:bg-slate-100 text-slate-600'
          }`}
          title="Buka/tutup panel properti & inspektor"
        >
          <PanelRight className="h-4 w-4 shrink-0" />
          <span className="hidden 2xl:inline text-[11px]">Inspector</span>
        </button>

        {/* Quick Save Draft Button (Icon on laptop, text on 2xl) */}
        <button
          onClick={onSaveDraft}
          disabled={isSavingDraft || isSaving}
          className="hidden lg:flex items-center gap-1 p-1.5 2xl:px-2.5 2xl:py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200/80 rounded-xl transition font-bold disabled:opacity-50 text-xs active:scale-95 shadow-2xs shrink-0"
          title={activeDraftTemplateName ? `Update draft: ${activeDraftTemplateName}` : 'Simpan sebagai draft ke Template Saya'}
        >
          <Save className="h-3.5 w-3.5 shrink-0" />
          <span className="hidden 2xl:inline">
            {isSavingDraft ? 'Menyimpan...' : 'Save Draft'}
          </span>
        </button>

        {/* Laptop Overflow Menu (Holds Save as Template, Preview, Draft) */}
        <div className="relative hidden md:block 2xl:hidden shrink-0">
          <button
            onClick={() => {
              setShowLaptopMoreMenu(!showLaptopMoreMenu);
              setShowDeviceMenu(false);
              setShowPageMenu(false);
            }}
            className="p-1.5 hover:bg-slate-100 rounded-xl transition text-slate-600 hover:text-slate-900 border border-slate-200/70 shrink-0"
            title="Menu lainnya"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>

          {showLaptopMoreMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowLaptopMoreMenu(false)} />
              <div className="absolute right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-2xl py-1.5 z-50 min-w-[200px] animate-in fade-in zoom-in-95 duration-100">
                <button
                  type="button"
                  onClick={() => {
                    setShowLaptopMoreMenu(false);
                    handleOpenPreview();
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                  <ExternalLink className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span>Pratinjau di Tab Baru</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowLaptopMoreMenu(false);
                    onSaveDraft?.();
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition"
                >
                  <Save className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Simpan sebagai Draft</span>
                </button>

                {onSaveAsTemplate && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowLaptopMoreMenu(false);
                      onSaveAsTemplate?.();
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                  >
                    <BookmarkPlus className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Simpan Template Baru</span>
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Save as Template Button on 2xl */}
        {onSaveAsTemplate && (
          <button
            onClick={onSaveAsTemplate}
            disabled={isSaving}
            className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 rounded-xl transition font-extrabold disabled:opacity-50 text-xs shadow-2xs active:scale-95 cursor-pointer shrink-0"
            title="Simpan sebagai template baru (Private/Publik)"
          >
            <BookmarkPlus className="h-3.5 w-3.5 shrink-0" />
            <span>Simpan Template</span>
          </button>
        )}

        {/* ─── PRIMARY ACTION BUTTON (Publikasikan / Perbarui) — NEVER CLIPPED! ─── */}
        <div className="hidden sm:block shrink-0">
          {(isEditing !== undefined ? isEditing : !!templateId) ? (
            <button
              onClick={handleUpdate}
              disabled={isSaving}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl transition font-extrabold shadow-sm shadow-indigo-600/25 disabled:opacity-50 text-xs active:scale-95 shrink-0"
              title="Simpan perubahan & perbarui template"
            >
              <Send className="h-3.5 w-3.5 shrink-0" />
              <span>Perbarui</span>
            </button>
          ) : (
            <button
              onClick={handlePublish}
              disabled={isSaving}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl transition font-extrabold shadow-sm shadow-indigo-600/25 disabled:opacity-50 text-xs active:scale-95 shrink-0"
              title="Publikasikan website"
            >
              <Send className="h-3.5 w-3.5 shrink-0" />
              <span>Publikasikan</span>
            </button>
          )}
        </div>

        {/* ─── MOBILE COMPACT ACTION MENU (< 640px) ─── */}
        <div className="relative sm:hidden shrink-0">
          <button
            onClick={() => setShowMobileActionMenu(!showMobileActionMenu)}
            disabled={isSaving || isSavingDraft}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 active:from-indigo-700 active:to-indigo-800 text-white rounded-xl font-extrabold text-xs shadow-xs shrink-0"
          >
            <span>{isSaving ? 'Menyimpan...' : 'Simpan'}</span>
            <ChevronDown className="h-3 w-3" />
          </button>

          {showMobileActionMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowMobileActionMenu(false)} />
              <div className="absolute right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-2xl py-1.5 z-50 min-w-[210px] animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3 py-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Menu Tindakan
                </div>

                {/* Live Preview on Mobile */}
                <button
                  type="button"
                  onClick={() => {
                    setShowMobileActionMenu(false);
                    handleOpenPreview();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition text-left"
                >
                  <ExternalLink className="h-4 w-4 text-indigo-600 shrink-0" />
                  <div>
                    <div className="text-slate-900">Pratinjau Live</div>
                    <div className="text-[10px] text-slate-400 font-normal">Buka pratinjau di tab baru</div>
                  </div>
                </button>

                {/* Save Draft */}
                <button
                  type="button"
                  onClick={() => {
                    setShowMobileActionMenu(false);
                    onSaveDraft?.();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition text-left"
                >
                  <Save className="h-4 w-4 text-amber-600 shrink-0" />
                  <div>
                    <div className="text-slate-900">Simpan Draft</div>
                    <div className="text-[10px] text-slate-400 font-normal">Simpan ke template draft saya</div>
                  </div>
                </button>

                {/* Save as Template */}
                {onSaveAsTemplate && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowMobileActionMenu(false);
                      onSaveAsTemplate?.();
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition text-left"
                  >
                    <BookmarkPlus className="h-4 w-4 text-emerald-600 shrink-0" />
                    <div>
                      <div className="text-slate-900">Simpan Template Baru</div>
                      <div className="text-[10px] text-slate-400 font-normal">Buat template baru (Private/Publik)</div>
                    </div>
                  </button>
                )}

                <div className="border-t border-slate-100 my-1" />

                {/* Publish / Update */}
                <button
                  type="button"
                  onClick={() => {
                    setShowMobileActionMenu(false);
                    if (isEditing !== undefined ? isEditing : !!templateId) {
                      handleUpdate();
                    } else {
                      handlePublish();
                    }
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-50 transition text-left"
                >
                  <Send className="h-4 w-4 text-indigo-600 shrink-0" />
                  <div>
                    <div className="text-indigo-900 font-extrabold">
                      {(isEditing !== undefined ? isEditing : !!templateId) ? 'Perbarui Website' : 'Publikasikan Website'}
                    </div>
                    <div className="text-[10px] text-indigo-600 font-normal">Publish ke domain / subdomain</div>
                  </div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ─── NEW SUBPAGE MODAL ─── */}
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
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
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