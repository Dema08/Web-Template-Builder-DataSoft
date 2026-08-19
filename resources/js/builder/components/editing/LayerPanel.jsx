import { useBuilderStore } from '../../stores/builderStore';
import { getSectionConfig } from '../../utils/industryConfigs';
import { getComponentConfig } from '../../utils/componentRegistry';

export default function LayerPanel() {
  const { sections, selectedSectionId, selectedComponentId, selectSection, selectComponent } = useBuilderStore();

  return (
    <div className="p-4">
      <h2 className="text-sm font-bold text-slate-900 mb-4">Layers</h2>

      <div className="space-y-1">
        {/* Website root */}
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-slate-100">
          <span className="text-xs font-bold text-slate-700">🌐</span>
          <span className="text-xs font-bold text-slate-700">Website</span>
        </div>

        {sections.map((section) => {
          const sectionConfig = getSectionConfig('default', section.type);
          const isSectionSelected = selectedSectionId === section.id;

          return (
            <div key={section.id} className="space-y-0.5">
              <button
                onClick={() => selectSection(section.id)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition ${
                  isSectionSelected ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-50'
                }`}
              >
                <span className="text-xs">📄</span>
                <span className="text-xs font-medium">{sectionConfig?.label || section.type}</span>
              </button>

              {isSectionSelected && section.components.map((component) => {
                const componentConfig = getComponentConfig(component.type);
                const isComponentSelected = selectedComponentId === component.id;

                return (
                  <button
                    key={component.id}
                    onClick={() => selectComponent(component.id, section.id)}
                    className={`w-full flex items-center gap-2 pl-6 pr-2 py-1 rounded-lg transition ${
                      isComponentSelected ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-xs">▸</span>
                    <span className="text-xs">{componentConfig?.label || component.type}</span>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
