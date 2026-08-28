import { useBuilderStore } from '../../stores/builderStore';
import LayerItem from './LayerItem';
import { Layers, Sparkles } from 'lucide-react';

export default function LayerPanel() {
  const { sections, selectedSectionId } = useBuilderStore();

  const activeSection = sections.find(s => s.id === selectedSectionId) || sections[0];

  if (!activeSection) {
    return (
      <div className="p-6 text-center text-slate-400 text-xs">
        <Layers className="h-8 w-8 mx-auto mb-2 opacity-40" />
        <p>No active section found</p>
      </div>
    );
  }

  const components = activeSection.components || [];

  return (
    <div className="flex flex-col h-full bg-slate-50/50 border-l border-slate-200">
      <div className="px-4 py-3.5 border-b border-slate-200 bg-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-indigo-600" />
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Layer Panel</h3>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase">
          {activeSection.type}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {components.length === 0 ? (
          <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-xl bg-white/50">
            <Sparkles className="h-6 w-6 text-slate-300 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-600">No components in section</p>
            <p className="text-[11px] text-slate-400 mt-1">Add components from sidebar or drag assets here</p>
          </div>
        ) : (
          components.map((component, index) => (
            <LayerItem
              key={component.id}
              component={component}
              sectionId={activeSection.id}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
}
