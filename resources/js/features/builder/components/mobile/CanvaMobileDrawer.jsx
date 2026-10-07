import React, { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import LeftPanel from '../sidebar/LeftPanel';
import RightInspector from '../property-panel/RightInspector';
import LayerPanel from '../layers/LayerPanel';
import MediaPanel from '../sidebar/MediaPanel';
import IconPanel from '../sidebar/IconPanel';
import UploadsPanel from '../sidebar/UploadsPanel';
import DraggableSidebarItem from '../../dnd/DraggableSidebarItem';
import { getLayoutsForSection } from '../../engine/layoutRegistry';
import { toast } from '@store';
import {
  X,
  Plus,
  Layout,
  Component,
  Layers,
  Image as ImageIcon,
  Type,
  Upload,
  Palette,
  FileText,
  Trash2,
  Check,
  Sparkles,
  Search,
  Grid,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';

export default function CanvaMobileDrawer() {
  const {
    mobileDrawerTab,
    closeMobileDrawer,
    openMobileDrawer,
    sections,
    pages,
    currentPageId,
    switchPage,
    addSubPage,
    deletePage,
    addSection,
    addComponent,
    selectedSectionId,
    selectedComponentId,
  } = useBuilderStore();

  const [newPageName, setNewPageName] = useState('');
  const [showAddPageInput, setShowAddPageInput] = useState(false);

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

  const selectedSection = sections.find((s) => s.id === selectedSectionId);
  const selectedComponent = selectedSection
    ? findComponentInTree(selectedSection.components, selectedComponentId)
    : null;

  if (!mobileDrawerTab) return null;

  const handleCreateSubPage = (e) => {
    e.preventDefault();
    if (!newPageName.trim()) {
      toast.error('Nama subhalaman tidak boleh kosong', 'Galat');
      return;
    }
    addSubPage(newPageName.trim());
    setNewPageName('');
    setShowAddPageInput(false);
    toast.success('Subhalaman baru berhasil dibuat!', 'Halaman Baru');
  };

  const renderDrawerBody = () => {
    switch (mobileDrawerTab) {
      case 'inspector':
      case 'styles':
        return (
          <div className="flex-1 overflow-y-auto pb-8">
            <RightInspector />
          </div>
        );

      case 'layers':
        return (
          <div className="flex-1 overflow-y-auto pb-8">
            <LayerPanel />
          </div>
        );

      case 'pages':
        return (
          <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">Manajemen Halaman</h3>
                <p className="text-xs text-slate-500">Pilih atau buat subhalaman baru untuk template ini</p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddPageInput(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-xs active:scale-95 transition"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>+ Subhalaman</span>
              </button>
            </div>

            {showAddPageInput && (
              <form onSubmit={handleCreateSubPage} className="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-2xl space-y-2">
                <label className="text-xs font-bold text-indigo-900">Nama Subhalaman Baru</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newPageName}
                    onChange={(e) => setNewPageName(e.target.value)}
                    placeholder="Contoh: Tentang Kami / Kontak"
                    className="flex-1 px-3 py-2 bg-white border border-indigo-200 rounded-xl text-xs font-bold text-slate-800"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-indigo-600 text-white rounded-xl text-xs font-extrabold"
                  >
                    Simpan
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddPageInput(false)}
                    className="px-2.5 py-2 bg-slate-200 text-slate-600 rounded-xl text-xs font-bold"
                  >
                    Batal
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-2">
              {/* Landing Page */}
              <div
                onClick={() => {
                  switchPage('landing');
                  closeMobileDrawer();
                }}
                className={`flex items-center justify-between p-3.5 rounded-2xl border transition cursor-pointer ${
                  currentPageId === 'landing'
                    ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-500/20 shadow-xs'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold ${
                    currentPageId === 'landing' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    🏠
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">Halaman Landing (Utama)</h4>
                    <p className="text-[10px] text-slate-500">Halaman beranda website default</p>
                  </div>
                </div>
                {currentPageId === 'landing' && (
                  <span className="text-xs font-extrabold text-indigo-600 flex items-center gap-1">
                    <Check className="h-4 w-4" />
                    <span>Aktif</span>
                  </span>
                )}
              </div>

              {/* Subpages */}
              {Object.values(pages || {}).map((p) => {
                const isCurrent = currentPageId === p.id;
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      switchPage(p.id);
                      closeMobileDrawer();
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition cursor-pointer ${
                      isCurrent
                        ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-500/20 shadow-xs'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold ${
                        isCurrent ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        📄
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-slate-900">{p.name}</h4>
                        <p className="text-[10px] text-slate-500 font-mono">/{p.slug || p.id}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {isCurrent ? (
                        <span className="text-xs font-extrabold text-indigo-600 flex items-center gap-1 mr-2">
                          <Check className="h-4 w-4" />
                          <span>Aktif</span>
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            switchPage(p.id);
                            closeMobileDrawer();
                          }}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 rounded-lg text-xs font-bold transition"
                        >
                          Buka
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(`Hapus subhalaman "${p.name}"?`)) {
                            deletePage(p.id);
                            toast.success(`Halaman "${p.name}" dihapus`, 'Dihapus');
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition"
                        title="Hapus Halaman"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'add':
      case 'components':
      case 'sections':
      case 'layouts':
      case 'media':
      case 'icons':
      case 'uploads':
      default:
        return (
          <div className="flex-1 overflow-y-auto pb-8">
            <LeftPanel />
          </div>
        );
    }
  };

  const getDrawerTitle = () => {
    switch (mobileDrawerTab) {
      case 'inspector':
      case 'styles':
        return selectedComponent ? 'Edit Properti Komponen' : 'Edit Section Background';
      case 'layers':
        return 'Struktur & Lapisan (Layers)';
      case 'pages':
        return 'Halaman & Subhalaman';
      case 'layouts':
        return 'Pilih Layout Bagian';
      case 'add':
      case 'components':
      case 'sections':
      default:
        return 'Tambah Elemen & Bagian';
    }
  };

  return (
    <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={closeMobileDrawer}
      />

      {/* Canva Bottom Sheet Container */}
      <div className="relative z-10 w-full max-h-[85vh] bg-white rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200 border-t border-slate-100">
        {/* Drag Pill Handle */}
        <div className="pt-2.5 pb-1 flex justify-center shrink-0">
          <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
        </div>

        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <h3 className="text-sm font-extrabold text-slate-900">{getDrawerTitle()}</h3>
          </div>
          <button
            onClick={closeMobileDrawer}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Drawer Tabs Bar */}
        <div className="flex items-center gap-1 px-3 py-2 border-b border-slate-100 overflow-x-auto ds-scrollbar-thin bg-slate-50/70 shrink-0">
          {[
            { id: 'add', label: 'Tambah', icon: Plus },
            { id: 'layouts', label: 'Layouts', icon: Layout },
            { id: 'layers', label: 'Lapisan', icon: Layers },
            { id: 'pages', label: 'Halaman', icon: FileText },
            { id: 'inspector', label: 'Gaya / Properti', icon: Palette },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive =
              mobileDrawerTab === tab.id ||
              (tab.id === 'add' && ['components', 'sections', 'media', 'icons', 'uploads'].includes(mobileDrawerTab));
            return (
              <button
                key={tab.id}
                onClick={() => openMobileDrawer(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Drawer Content */}
        {renderDrawerBody()}
      </div>
    </div>
  );
}
