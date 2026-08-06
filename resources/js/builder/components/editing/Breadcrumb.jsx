import { useBuilderStore } from '../../stores/builderStore';
import { getSectionConfig } from '../../utils/industryConfigs';
import { getComponentConfig } from '../../utils/componentRegistry';

export default function Breadcrumb() {
  const { sections, selectedSectionId, selectedComponentId, selectSection, selectComponent } = useBuilderStore();

  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const selectedComponent = selectedSection?.components?.find(c => c.id === selectedComponentId);

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
