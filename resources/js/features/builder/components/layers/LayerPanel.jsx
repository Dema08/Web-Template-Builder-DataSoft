import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import LayerItem from './LayerItem';
import { Layers, Sparkles, Folder, ChevronDown, ChevronRight, Ungroup } from 'lucide-react';

export default function LayerPanel() {
  const { sections, selectedSectionId, ungroupComponents } = useBuilderStore();
  const [expandedGroups, setExpandedGroups] = useState({});

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

  // Group components by groupId
  const groupsMap = {};
  const ungrouped = [];

  components.forEach((c, index) => {
    const groupId = c.position?.groupId;
    if (groupId) {
      if (!groupsMap[groupId]) groupsMap[groupId] = [];
      groupsMap[groupId].push({ component: c, originalIndex: index });
    } else {
      ungrouped.push({ component: c, originalIndex: index });
    }
  });

  const toggleGroupExpand = (groupId) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

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
          <>
            {/* Render Groups First */}
            {Object.entries(groupsMap).map(([groupId, items], gIdx) => {
              const isExpanded = expandedGroups[groupId] !== false;
              return (
                <div key={groupId} className="border border-indigo-100 bg-indigo-50/30 rounded-xl p-1.5 space-y-1">
                  <div className="flex items-center justify-between px-2 py-1 text-xs font-bold text-indigo-950">
                    <button
                      onClick={() => toggleGroupExpand(groupId)}
                      className="flex items-center gap-1.5 hover:text-indigo-600 transition"
                    >
                      {isExpanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                      <Folder className="h-3.5 w-3.5 text-indigo-600" />
                      <span>Group {gIdx + 1} ({items.length})</span>
                    </button>
                    <button
                      onClick={() => ungroupComponents(activeSection.id, groupId)}
                      className="p-1 rounded hover:bg-indigo-100 text-indigo-600 transition"
                      title="Ungroup components"
                    >
                      <Ungroup className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-3 space-y-1 border-l-2 border-indigo-200 ml-2">
                      {items.map(({ component, originalIndex }) => (
                        <LayerItem
                          key={component.id}
                          component={component}
                          sectionId={activeSection.id}
                          index={originalIndex}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Render Ungrouped Components */}
            {ungrouped.map(({ component, originalIndex }) => (
              <LayerItem
                key={component.id}
                component={component}
                sectionId={activeSection.id}
                index={originalIndex}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
