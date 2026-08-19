import { useBuilderStore } from '../../stores/builderStore';
import { getSectionConfig } from '../../utils/industryConfigs';
import { getComponentConfig } from '../../utils/componentRegistry';

export default function Breadcrumb() {
  const { sections, selectedSectionId, selectedComponentId, selectSection, selectComponent } = useBuilderStore();

  const findComponentInTree = (components, targetId) => {
    if (!Array.isArray(components)) return null;
    for (const c of components) {
      if (c.id === targetId) return c;
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        const found = findComponentInTree(c.childrenComponents, targetId);
        if (found) return found;
      }
    }
    return null;
  };

  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const selectedComponent = selectedSection ? findComponentInTree(selectedSection.components, selectedComponentId) : null;

  const sectionConfig = selectedSection ? getSectionConfig('default', selectedSection.type) : null;
  const componentConfig = selectedComponent ? getComponentConfig(selectedComponent.type) : null;

  return (
    <div className="flex items-center gap-1 text-xs text-slate-500">
      <button
        onClick={() => selectSection(null)}
        className="hover:text-indigo-600 transition"
      >
        Website
      </button>

      {selectedSection && (
        <>
          <span className="text-slate-300">›</span>
          <button
            onClick={() => selectSection(selectedSection.id)}
            className={`hover:text-indigo-600 transition ${selectedSectionId === selectedSection.id && !selectedComponent ? 'text-indigo-600 font-medium' : ''}`}
          >
            {sectionConfig?.label || selectedSection.type}
          </button>
        </>
      )}

      {selectedComponent && (
        <>
          <span className="text-slate-300">›</span>
          <span className="text-indigo-600 font-medium">
            {componentConfig?.label || selectedComponent.type}
          </span>
        </>
      )}
    </div>
  );
}
