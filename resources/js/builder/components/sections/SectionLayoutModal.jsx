import { useState } from 'react';
import { getLayoutsForSection } from '../../utils/layoutRegistry';

export default function SectionLayoutModal({ sectionType, onSelect, onClose }) {
  const layouts = getLayoutsForSection(sectionType);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 shadow-2xl border border-slate-100">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <h3 className="text-base font-extrabold text-slate-900">Choose {sectionType.charAt(0).toUpperCase() + sectionType.slice(1)} Layout</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[60vh] overflow-y-auto">
          {layouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => onSelect(layout.id)}
              className="group relative aspect-video bg-slate-100 rounded-xl border-2 border-slate-200 hover:border-indigo-300 hover:shadow-md transition overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-400 group-hover:text-indigo-600 transition">
                    {layout.name}
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-slate-900/80 to-transparent">
                <p className="text-[10px] font-bold text-white text-center">{layout.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
