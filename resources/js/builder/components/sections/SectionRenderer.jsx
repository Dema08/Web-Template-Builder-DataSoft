import { useBuilderStore } from '../../stores/builderStore';
import { getSectionConfig } from '../../utils/industryConfigs';
import { getLayoutComponent } from '../../utils/layoutComponentMapper';
import { getUIComponent } from '../../utils/componentMapper';

export default function SectionRenderer({ section, isSelected, onClick }) {
  const config = getSectionConfig('default', section.type);
  const { selectedSectionId, selectSection, selectComponent } = useBuilderStore();

  const isSectionSelected = selectedSectionId === section.id;

  // Get the layout component
  const LayoutComponent = getLayoutComponent(section.layout);

  const handleSectionClick = (e) => {
    e.stopPropagation();
    onClick();
    selectSection(section.id);
  };

  const handleComponentClick = (e, componentId) => {
    e.stopPropagation();
    selectComponent(componentId);
  };

  const renderComponent = (component) => {
    const Component = getUIComponent(component.type);
    if (!Component) return null;
    return <Component key={component.id} {...component.props} />;
  };

  if (!LayoutComponent) {
    return (
      <div
        onClick={handleSectionClick}
        className={`relative cursor-pointer transition-all ${
          isSelected || isSectionSelected ? 'ring-2 ring-indigo-600 ring-offset-2' : 'hover:ring-2 hover:ring-indigo-300'
        }`}
      >
        <div className="p-8 border-2 border-dashed border-slate-300 rounded-lg text-center">
          <div className="text-sm font-bold text-slate-700">{config?.label || section.type}</div>
          <div className="text-xs text-slate-500 mt-1">Layout not found: {section.layout}</div>
        </div>

        {isSectionSelected && (
          <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
            {config?.label || section.type}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={handleSectionClick}
      className={`relative cursor-pointer transition-all ${
        isSelected || isSectionSelected ? 'ring-2 ring-indigo-600 ring-offset-2' : 'hover:ring-2 hover:ring-indigo-300'
      }`}
    >
      <LayoutComponent components={section.components} sectionId={section.id} />

      {isSectionSelected && (
        <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
          {config?.label || section.type}
        </div>
      )}
    </div>
  );
}
