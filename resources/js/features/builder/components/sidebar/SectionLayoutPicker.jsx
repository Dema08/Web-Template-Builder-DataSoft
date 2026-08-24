import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getLayoutsForSection } from '../../utils/layoutRegistry';
import LayoutPreview from './LayoutPreview';
import { X, Check, Plus } from 'lucide-react';

export default function SectionLayoutPicker({ sectionType, onClose }) {
  const { addSection } = useBuilderStore();
  const [selectedLayout, setSelectedLayout] = useState(null);
  const layouts = getLayoutsForSection(sectionType);

  const handleAdd = () => {
    if (selectedLayout) {
      addSection(sectionType, selectedLayout);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] flex flex-col shadow-2xl border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 capitalize">{sectionType}</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Choose a layout style for your {sectionType} section
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Layout Grid */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {layouts.map((layout) => {
              const isSelected = selectedLayout === layout.id;
              return (
                <button
                  key={layout.id}
                  onClick={() => setSelectedLayout(layout.id)}
                  className={`group relative rounded-xl border-2 overflow-hidden transition-all text-left ${
                    isSelected
                      ? 'border-indigo-600 ring-2 ring-indigo-600/20'
                      : 'border-slate-200 hover:border-indigo-300 hover:shadow-md'
                  }`}
                >
                  {/* Preview */}
                  <div className="relative">
                    <LayoutPreview layoutId={layout.id} height="h-32" />
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <div className="px-3 py-2 bg-white border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-800">{layout.name}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl">
          <div className="text-xs text-slate-500">
            {selectedLayout ? (
              <span className="font-medium text-indigo-600">
                Selected: {layouts.find(l => l.id === selectedLayout)?.name}
              </span>
            ) : (
              'Select a layout to continue'
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-lg transition"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              disabled={!selectedLayout}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition flex items-center gap-1.5 ${
                selectedLayout
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Plus className="h-4 w-4" />
              Add Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}