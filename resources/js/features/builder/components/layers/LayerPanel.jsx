import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import LayerItem from './LayerItem';
import { Layers, Sparkles, ChevronDown, ChevronRight, Layout, Trash2, Copy } from 'lucide-react';
import { getSectionConfig } from '../../utils/industryConfigs';

export default function LayerPanel() {
  const { sections, selectedSectionId, selectSection, duplicateSection, removeSection } = useBuilderStore();
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleSectionCollapse = (sectionId, e) => {
    e.stopPropagation();
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleSectionClick = (sectionId) => {
    selectSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50/50 border-r border-slate-200">
      {/* Layer Panel Header */}
      <div className="px-4 py-3.5 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">Layers</h3>
            <p className="text-[10px] text-slate-400 font-medium">Page & Section Tree</p>
          </div>
        </div>
        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
          {sections.length} {sections.length === 1 ? 'Section' : 'Sections'}
        </span>
      </div>

      {/* Layer Tree List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {sections.length === 0 ? (
          <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-white/50 my-4">
            <Sparkles className="h-6 w-6 text-indigo-400 mx-auto mb-2 animate-bounce" />
            <p className="text-xs font-bold text-slate-700">No sections on page</p>
            <p className="text-[11px] text-slate-400 mt-1">Add a section from the left sidebar to see layers</p>
          </div>
        ) : (
          sections.map((section, sIdx) => {
            const config = getSectionConfig('default', section.type);
            const isSectionSelected = selectedSectionId === section.id;
            const isCollapsed = !!collapsedSections[section.id];
            const components = section.components || [];

            return (
              <div key={section.id} className="space-y-1.5">
                {/* Section Header Card */}
                <div
                  onClick={() => handleSectionClick(section.id)}
                  className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    isSectionSelected
                      ? 'bg-slate-900 text-white border-slate-800 shadow-md ring-2 ring-indigo-500/30'
                      : 'bg-white border-slate-200/90 text-slate-800 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <button
                      onClick={(e) => toggleSectionCollapse(section.id, e)}
                      className={`p-0.5 rounded hover:bg-white/20 transition ${isSectionSelected ? 'text-white' : 'text-slate-400'}`}
                    >
                      {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                        isSectionSelected ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'
                      }`}
                    >
                      <Layout className="h-3.5 w-3.5" />
                    </div>

                    <div className="flex items-center gap-1.5 min-w-0 truncate">
                      <span className="text-[11px] font-extrabold uppercase truncate">
                        {sIdx + 1}. {config?.label || section.type}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                          isSectionSelected ? 'bg-slate-800 text-indigo-300' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {section.layout}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSectionSelected ? 'bg-indigo-500/30 text-indigo-200' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {components.length}
                    </span>

                    {/* Quick Section Actions on Hover */}
                    <div className="hidden group-hover:flex items-center gap-0.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => duplicateSection(section.id)}
                        className={`p-1 rounded transition ${isSectionSelected ? 'hover:bg-slate-800 text-white' : 'hover:bg-slate-100 text-slate-500'}`}
                        title="Duplicate Section"
                      >
                        <Copy className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => removeSection(section.id)}
                        className="p-1 rounded hover:bg-rose-100 text-slate-400 hover:text-rose-600 transition"
                        title="Delete Section"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Component List inside Section */}
                {!isCollapsed && (
                  <div className="pl-2 space-y-1 border-l-2 border-slate-200 ml-3">
                    {components.length === 0 ? (
                      <div className="p-3 text-center text-[11px] text-slate-400 italic">No components in section</div>
                    ) : (
                      components.map((component) => (
                        <LayerItem
                          key={component.id}
                          component={component}
                          sectionId={section.id}
                          depth={0}
                        />
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
