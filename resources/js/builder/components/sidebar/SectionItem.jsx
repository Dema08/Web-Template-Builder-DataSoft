import { useState } from 'react';
import { getLayoutsForSection, getDefaultLayout } from '../../utils/layoutRegistry';
import { useBuilderStore } from '../../stores/builderStore';
import SectionLayoutModal from '../sections/SectionLayoutModal';

export default function SectionItem({ sectionConfig, isAdded }) {
  const [showLayoutModal, setShowLayoutModal] = useState(false);
  const { addSection } = useBuilderStore();

  const handleAddSection = (layoutId) => {
    addSection(sectionConfig.type, layoutId);
    setShowLayoutModal(false);
  };

  return (
    <>
      <button
        onClick={() => !isAdded && setShowLayoutModal(true)}
        disabled={isAdded}
        className={`w-full flex items-center gap-3 p-3 rounded-xl border transition ${
          isAdded
            ? 'bg-slate-50 border-slate-200 opacity-50 cursor-not-allowed'
            : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-sm'
        }`}
      >
        <div className={`p-2 rounded-lg ${isAdded ? 'bg-slate-200' : 'bg-indigo-50'}`}>
          <div className={`h-4 w-4 ${isAdded ? 'text-slate-400' : 'text-indigo-600'}`}>
            {isAdded ? '✓' : '+'}
          </div>
        </div>
        <div className="flex-1 text-left">
          <div className="text-xs font-bold text-slate-900">{sectionConfig.label}</div>
          <div className="text-[10px] text-slate-500">{sectionConfig.type}</div>
        </div>
      </button>

      {showLayoutModal && (
        <SectionLayoutModal
          sectionType={sectionConfig.type}
          onSelect={handleAddSection}
          onClose={() => setShowLayoutModal(false)}
        />
      )}
    </>
  );
}
