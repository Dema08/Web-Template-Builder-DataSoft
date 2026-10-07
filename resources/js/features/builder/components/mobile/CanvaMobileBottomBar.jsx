import React from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import {
  Plus,
  Layout,
  Layers,
  FileText,
  Palette,
  Eye,
  Copy,
  Trash2,
  ChevronUp,
  ChevronDown,
  Lock,
  Unlock,
  EyeOff,
  SlidersHorizontal,
  X,
  Sparkles,
  Image as ImageIcon,
  Type,
  ExternalLink,
} from 'lucide-react';
import { toast } from '@store';

export default function CanvaMobileBottomBar() {
  const {
    sections,
    selectedSectionId,
    selectedComponentId,
    selectSection,
    selectComponent,
    duplicateSection,
    duplicateComponent,
    removeSection,
    removeComponent,
    moveSectionUp,
    moveSectionDown,
    moveComponentUp,
    moveComponentDown,
    toggleLockSection,
    toggleLockComponent,
    toggleVisibilitySection,
    toggleVisibilityComponent,
    mobileDrawerTab,
    openMobileDrawer,
    closeMobileDrawer,
    isPreviewMode,
    currentPageId,
    pages,
    deviceView,
    templateName,
    industryName,
    industrySlug,
    status,
    templateId,
    landingSections,
  } = useBuilderStore();

  if (isPreviewMode) return null;

  const selectedSection = sections.find((s) => s.id === selectedSectionId);

  const findComponentInTree = (comps, targetId) => {
    if (!Array.isArray(comps) || !targetId) return null;
    for (const c of comps) {
      if (c.id === targetId) return c;
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        const found = findComponentInTree(c.childrenComponents, targetId);
        if (found) return found;
      }
    }
    return null;
  };

  const selectedComponent = selectedSection
    ? findComponentInTree(selectedSection.components, selectedComponentId)
    : null;

  const hasSelection = !!(selectedComponent || selectedSection);

  const handleOpenPreview = () => {
    const currentState = useBuilderStore.getState();
    const activeLanding = currentPageId === 'landing' ? sections : (landingSections || sections);
    const activePages = { ...pages };
    if (currentPageId !== 'landing' && activePages[currentPageId]) {
      activePages[currentPageId] = { ...activePages[currentPageId], sections };
    }

    if (!activeLanding || activeLanding.length === 0) {
      toast.error('Kanvas kosong. Tambahkan bagian terlebih dahulu.', 'Pratinjau');
      return;
    }

    const activeViewport = ['desktop', 'tablet', 'mobile'].includes(deviceView) ? deviceView : 'mobile';
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
    } catch (_) {}

    const basePreviewUrl = templateId
      ? `/admin/templates/builder/${templateId}/preview`
      : '/preview/template';
    window.open(`${basePreviewUrl}?viewport=${activeViewport}`, '_blank');
    toast.success('Pratinjau dibuka di tab baru!', 'Pratinjau');
  };

  const handleDeselect = () => {
    selectSection(null);
  };

  const isSecLocked = !!selectedSection?.isLocked;
  const isSecHidden = !!selectedSection?.isHidden;
  const isCompLocked = !!selectedComponent?.isLocked;
  const isCompHidden = !!selectedComponent?.isHidden;

  const isImageOrIconComp =
    selectedComponent?.type === 'image' ||
    selectedComponent?.type === 'icon' ||
    selectedComponent?.type === 'video' ||
    'src' in (selectedComponent?.props || {});

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] select-none">
      {/* ─── CONTEXTUAL ELEMENT / SECTION BAR (When active selection exists) ─── */}
      {hasSelection ? (
        <div className="flex flex-col">
          {/* Active Target Banner */}
          <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold">
            <div className="flex items-center gap-1.5 truncate">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shrink-0"></span>
              <span className="text-slate-300">Terpilih:</span>
              <span className="text-white truncate font-extrabold capitalize">
                {selectedComponent
                  ? `${selectedComponent.type} (${selectedComponent.props?.label || selectedComponent.props?.text || 'Elemen'})`
                  : `${selectedSection?.type} Section (${selectedSection?.layout})`}
              </span>
            </div>
            <button
              onClick={handleDeselect}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-1 text-[10px]"
              title="Batalkan pilihan"
            >
              <span>Selesai</span>
              <X className="h-3 w-3" />
            </button>
          </div>

          {/* Action Chips Strip (Horizontal Scrollable Canva Bar) */}
          <div className="flex items-center gap-2 px-3 py-2 overflow-x-auto ds-scrollbar-thin bg-white">
            {/* 1. Edit / Inspector */}
            <button
              onClick={() => openMobileDrawer('inspector')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shrink-0 shadow-xs active:scale-95 transition"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>{selectedComponent ? 'Edit Properti' : 'Edit Background'}</span>
            </button>

            {/* 2. Duplicate */}
            <button
              onClick={() => {
                if (selectedComponent && selectedSectionId) {
                  duplicateComponent(selectedSectionId, selectedComponent.id);
                  toast.success('Komponen diduplikat!', 'Duplikat');
                } else if (selectedSectionId) {
                  duplicateSection(selectedSectionId);
                  toast.success('Bagian diduplikat!', 'Duplikat');
                }
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold shrink-0 active:scale-95 transition"
            >
              <Copy className="h-3.5 w-3.5 text-slate-600" />
              <span>Duplikat</span>
            </button>

            {/* 3. Move Up */}
            <button
              onClick={() => {
                if (selectedComponent && selectedSectionId) {
                  moveComponentUp(selectedSectionId, selectedComponent.id);
                  toast.success('Posisi komponen digeser naik', 'Reorder');
                } else if (selectedSectionId) {
                  moveSectionUp(selectedSectionId);
                  toast.success('Posisi bagian digeser naik', 'Reorder');
                }
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold shrink-0 active:scale-95 transition"
              title="Geser Naik"
            >
              <ChevronUp className="h-4 w-4 text-indigo-600" />
              <span>Naik</span>
            </button>

            {/* 4. Move Down */}
            <button
              onClick={() => {
                if (selectedComponent && selectedSectionId) {
                  moveComponentDown(selectedSectionId, selectedComponent.id);
                  toast.success('Posisi komponen digeser turun', 'Reorder');
                } else if (selectedSectionId) {
                  moveSectionDown(selectedSectionId);
                  toast.success('Posisi bagian digeser turun', 'Reorder');
                }
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold shrink-0 active:scale-95 transition"
              title="Geser Turun"
            >
              <ChevronDown className="h-4 w-4 text-indigo-600" />
              <span>Turun</span>
            </button>

            {/* 5. Replace Media if image/icon */}
            {isImageOrIconComp && (
              <button
                onClick={() => openMobileDrawer(selectedComponent?.type === 'icon' ? 'icons' : 'media')}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl text-xs font-bold shrink-0 active:scale-95 transition"
              >
                <ImageIcon className="h-3.5 w-3.5 text-amber-600" />
                <span>Ganti Media</span>
              </button>
            )}

            {/* 6. Add component inside section if section is selected */}
            {!selectedComponent && selectedSection && (
              <button
                onClick={() => openMobileDrawer('components')}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold shrink-0 active:scale-95 transition"
              >
                <Plus className="h-3.5 w-3.5 text-emerald-600" />
                <span>+ Komponen</span>
              </button>
            )}

            {/* 7. Lock / Unlock */}
            <button
              onClick={() => {
                if (selectedComponent && selectedSectionId) {
                  toggleLockComponent(selectedSectionId, selectedComponent.id);
                } else if (selectedSectionId) {
                  toggleLockSection(selectedSectionId);
                }
              }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold shrink-0 active:scale-95 transition ${
                (selectedComponent ? isCompLocked : isSecLocked)
                  ? 'bg-amber-100 text-amber-900'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {(selectedComponent ? isCompLocked : isSecLocked) ? (
                <>
                  <Lock className="h-3.5 w-3.5 text-amber-700" />
                  <span>Terkunci</span>
                </>
              ) : (
                <>
                  <Unlock className="h-3.5 w-3.5 text-slate-500" />
                  <span>Kunci</span>
                </>
              )}
            </button>

            {/* 8. Visibility Toggle */}
            <button
              onClick={() => {
                if (selectedComponent && selectedSectionId) {
                  toggleVisibilityComponent(selectedSectionId, selectedComponent.id);
                } else if (selectedSectionId) {
                  toggleVisibilitySection(selectedSectionId);
                }
              }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold shrink-0 active:scale-95 transition ${
                (selectedComponent ? isCompHidden : isSecHidden)
                  ? 'bg-amber-100 text-amber-900'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {(selectedComponent ? isCompHidden : isSecHidden) ? (
                <>
                  <EyeOff className="h-3.5 w-3.5 text-amber-700" />
                  <span>Tersembunyi</span>
                </>
              ) : (
                <>
                  <Eye className="h-3.5 w-3.5 text-slate-500" />
                  <span>Sembunyikan</span>
                </>
              )}
            </button>

            {/* 9. Delete */}
            <button
              onClick={() => {
                if (selectedComponent && selectedSectionId) {
                  if (isCompLocked) {
                    toast.error('Buka kunci komponen sebelum menghapus!', 'Terkunci');
                    return;
                  }
                  removeComponent(selectedSectionId, selectedComponent.id);
                  toast.success('Komponen dihapus', 'Dihapus');
                } else if (selectedSectionId) {
                  if (isSecLocked) {
                    toast.error('Buka kunci bagian sebelum menghapus!', 'Terkunci');
                    return;
                  }
                  removeSection(selectedSectionId);
                  toast.success('Bagian dihapus', 'Dihapus');
                }
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-xl text-xs font-bold shrink-0 active:scale-95 transition"
            >
              <Trash2 className="h-3.5 w-3.5 text-rose-600" />
              <span>Hapus</span>
            </button>
          </div>
        </div>
      ) : (
        /* ─── DEFAULT CANVA NAVIGATION BAR (When nothing is selected) ─── */
        <div className="flex items-center justify-around px-2 py-1.5">
          {/* Main CANVA + TAMBAH BUTTON */}
          <button
            onClick={() => openMobileDrawer('add')}
            className="flex flex-col items-center justify-center -mt-4 group active:scale-95 transition"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-700 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition">
              <Plus className="h-6 w-6 stroke-[2.5]" />
            </div>
            <span className="text-[10px] font-extrabold text-indigo-700 mt-1">Tambah</span>
          </button>

          {/* Layouts */}
          <button
            onClick={() => openMobileDrawer('layouts')}
            className={`flex flex-col items-center justify-center p-1 rounded-xl transition ${
              mobileDrawerTab === 'layouts' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layout className="h-4 w-4" />
            <span className="text-[10px] font-bold mt-0.5">Layouts</span>
          </button>

          {/* Lapisan / Layers */}
          <button
            onClick={() => openMobileDrawer('layers')}
            className={`flex flex-col items-center justify-center p-1 rounded-xl transition ${
              mobileDrawerTab === 'layers' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span className="text-[10px] font-bold mt-0.5">Lapisan</span>
          </button>

          {/* Halaman / Pages */}
          <button
            onClick={() => openMobileDrawer('pages')}
            className={`flex flex-col items-center justify-center p-1 rounded-xl transition ${
              mobileDrawerTab === 'pages' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span className="text-[10px] font-bold mt-0.5">
              {currentPageId === 'landing' ? 'Landing' : 'Subpage'}
            </span>
          </button>

          {/* Inspektor / Desain */}
          <button
            onClick={() => openMobileDrawer('inspector')}
            className={`flex flex-col items-center justify-center p-1 rounded-xl transition ${
              mobileDrawerTab === 'inspector' ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Palette className="h-4 w-4" />
            <span className="text-[10px] font-bold mt-0.5">Gaya</span>
          </button>

          {/* Pratinjau Live */}
          <button
            onClick={handleOpenPreview}
            className="flex flex-col items-center justify-center p-1 rounded-xl text-indigo-700 hover:text-indigo-900 transition"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="text-[10px] font-bold mt-0.5">Pratinjau</span>
          </button>
        </div>
      )}
    </div>
  );
}
