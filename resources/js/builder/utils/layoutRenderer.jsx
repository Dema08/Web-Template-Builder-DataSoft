import { getUIComponent } from './componentMapper';

// Helper to render components within a layout with section context
export const renderLayoutComponents = (components, sectionId) => {
  return components.map((component) => {
    const Component = getUIComponent(component.type);
    if (!Component) return null;
    return (
      <Component
        key={component.id}
        {...component.props}
        componentId={component.id}
        sectionId={sectionId}
      />
    );
  });
};
