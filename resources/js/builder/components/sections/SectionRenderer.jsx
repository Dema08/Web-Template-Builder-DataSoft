import { useBuilderStore } from '../../stores/builderStore';
import { getSectionConfig } from '../../utils/industryConfigs';
import { getLayoutComponent } from '../../utils/layoutComponentMapper';
import { getUIComponent } from '../../utils/componentMapper';
import EditableComponent from '../editing/EditableComponent';

// Convert layout ID like "hero-01" to component name "Hero01"
const layoutIdToComponentName = (layoutId) => {
  if (!layoutId) return null;
  return layoutId
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

export default function SectionRenderer({ section, isSelected, onClick }) {
  const config = getSectionConfig('default', section.type);
  const { selectedSectionId, selectSection, selectComponent, isPreviewMode } = useBuilderStore();

  const isSectionSelected = !isPreviewMode && (selectedSectionId === section.id || isSelected);

  // In Preview Mode, hide section if marked hidden, and render clean section output
  if (isPreviewMode) {
    if (section.isHidden) return null;
    const componentName = layoutIdToComponentName(section.layout);
    const LayoutComponent = getLayoutComponent(componentName);

    if (!LayoutComponent) return null;

    return (
      <div id={section.id} className="relative w-full">
        <LayoutComponent components={section.components} sectionId={section.id} />
      </div>
    );
  }

  // Get the layout component - convert layout ID to component name
  const componentName = layoutIdToComponentName(section.layout);
  const LayoutComponent = getLayoutComponent(componentName);

  const handleSectionClick = (e) => {
    e.stopPropagation();
    onClick();
    selectSection(section.id);
  };

  const handleComponentClick = (e, componentId) => {
    e.stopPropagation();
    selectComponent(componentId, section.id);
  };

  const renderComponent = (component) => {
    const Component = getUIComponent(component.type);
    if (!Component) return null;
    return (
      <EditableComponent
        key={component.id}
        component={component}
        sectionId={section.id}
      >
        <Component
          {...component.props}
          componentId={component.id}
          sectionId={section.id}
        />
      </EditableComponent>
    );
  };

  // If no layout component found, render a fallback with the section type
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