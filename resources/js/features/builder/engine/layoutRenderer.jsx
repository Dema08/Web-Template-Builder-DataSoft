import { getUIComponent } from './componentMapper';
import EditableComponent from '../components/editing/EditableComponent';

// Check if a component is standalone (added via sidebar, rendered in canvas overlay)
const isStandaloneComponent = (component) =>
  !!(component?.props?.isStandalone || component?.isStandalone);

// Helper to render components within a layout with section context.
// By default, EXCLUDES standalone components (they are rendered in the canvas overlay, not layout slots)
// Pass includeStandalone=true to render all regardless (used by the canvas overlay renderer).
export const renderLayoutComponents = (components, sectionId, parentComponentId = null, includeStandalone = false) => {
  const safeComponents = Array.isArray(components) ? components : [];
  return safeComponents
    .filter(component => includeStandalone || !isStandaloneComponent(component))
    .map((component) => {
      const Component = getUIComponent(component.type);
      if (!Component) return null;
      return (
        <EditableComponent
          key={component.id}
          component={component}
          sectionId={sectionId}
          parentComponentId={parentComponentId}
        >
          <Component
            {...component.props}
            childrenComponents={component.childrenComponents || []}
            componentId={component.id}
            sectionId={sectionId}
          />
        </EditableComponent>
      );
    });
};