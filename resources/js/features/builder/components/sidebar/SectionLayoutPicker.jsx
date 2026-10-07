import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useBuilderStore } from '../../stores/builderStore';
import { getLayoutsForSection } from '../../engine/layoutRegistry';
import LayoutPreview from './LayoutPreview';
import { toast } from '@store';
import { X, Check, Plus, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SectionLayoutPicker({ sectionType, onClose }) {
  const { addSection, insertSectionAt, targetInsertionIndex, setTargetInsertionIndex } = useBuilderStore();
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const layouts = getLayoutsForSection(sectionType);

  const handleAdd = (layoutIdToAdd = null) => {
    const layoutId = layoutIdToAdd || selectedLayout;
    if (!layoutId || isSubmitting) return;

    setIsSubmitting(true);
    let newSectionId = null;

    try {
      if (typeof targetInsertionIndex === 'number' && targetInsertionIndex >= 0) {
        newSectionId = insertSectionAt(sectionType, layoutId, targetInsertionIndex);
        const pos = targetInsertionIndex + 1;
        setTargetInsertionIndex(null);
        toast.success(`Bagian ${sectionType} (${layoutId}) berhasil disisipkan pada posisi ${pos}!`, 'Bagian Ditambahkan');
      } else {
        newSectionId = addSection(sectionType, layoutId);
        toast.success(`Bagian ${sectionType} (${layoutId}) berhasil ditambahkan ke kanvas!`, 'Bagian Ditambahkan');
      }

      // Smooth scroll & highlight newly created section on canvas
      setTimeout(() => {
        if (newSectionId) {
          const el = document.getElementById(newSectionId) || document.querySelector(`[data-section-id="${newSectionId}"]`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('ring-4', 'ring-indigo-500', 'ring-offset-4', 'transition-all', 'duration-500');
            setTimeout(() => {
              el.classList.remove('ring-4', 'ring-indigo-500', 'ring-offset-4');
            }, 1200);
          }
        }
      }, 100);

      // Close modal immediately
      onClose();
    } catch (err) {
      console.error('Error adding section layout:', err);
      toast.error('Gagal menambahkan bagian. Silakan coba lagi.', 'Galat');
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 capitalize">
                Pilih Layout {sectionType}
              </h3>
              <p className="text-xs text-slate-500">
                Pilih variasi tata letak yang sesuai untuk bagian {sectionType} Anda
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition active:scale-95"
            title="Tutup (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Layout Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 ds-scrollbar-thin bg-slate-100/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {layouts.map((layout) => {
              const isSelected = selectedLayout === layout.id;
              return (
                <div
                  key={layout.id}
                  onClick={() => setSelectedLayout(layout.id)}
                  onDoubleClick={() => handleAdd(layout.id)}
                  className={`group relative rounded-2xl border-2 overflow-hidden transition-all text-left cursor-pointer active:scale-98 bg-white ${
                    isSelected
                      ? 'border-indigo-600 ring-4 ring-indigo-600/20 shadow-lg'
                      : 'border-slate-200 hover:border-indigo-400 hover:shadow-md'
                  }`}
                >
                  {/* Preview */}
                  <div className="relative">
                    <LayoutPreview layoutId={layout.id} height="h-32" />
                    
                    {/* Selected Badge */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shadow-md animate-in zoom-in-75 duration-150">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                    )}

                    {/* Quick 1-Click Add Button on Hover */}
                    <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAdd(layout.id);
                        }}
                        className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-extrabold shadow-lg flex items-center gap-1.5 transition-all transform scale-95 hover:scale-105 active:scale-95"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Pilih & Sisipkan</span>
                      </button>
                    </div>
                  </div>

                  {/* Label Footer */}
                  <div className="px-3.5 py-2.5 bg-white border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-extrabold text-slate-800 truncate max-w-[170px]">{layout.name}</div>
                    <span className="text-[10px] text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition">
                      Pilih
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-t border-slate-100 bg-white">
          <div className="text-xs text-slate-500">
            {selectedLayout ? (
              <span className="font-bold text-indigo-600 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>Terpilih: {layouts.find(l => l.id === selectedLayout)?.name}</span>
              </span>
            ) : (
              'Klik layout atau klik ganda untuk langsung menyisipkan'
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition active:scale-95"
            >
              Batal
            </button>
            <button
              onClick={() => handleAdd()}
              disabled={!selectedLayout || isSubmitting}
              className={`px-4 sm:px-5 py-2 text-xs font-extrabold rounded-xl transition flex items-center gap-1.5 shadow-sm active:scale-95 ${
                selectedLayout && !isSubmitting
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-indigo-600/25 cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Plus className="h-4 w-4" />
              <span>{isSubmitting ? 'Menambahkan...' : 'Tambahkan Bagian'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}