import { getUIComponent } from './componentMapper';
import EditableComponent from '../components/editing/EditableComponent';

// Helper to render components within a layout with section context
export const renderLayoutComponents = (components, sectionId) => {
  return components.map((component) => {
    const Component = getUIComponent(component.type);
    if (!Component) return null;
    return (
      <EditableComponent
        key={component.id}
        component={component}
        sectionId={sectionId}
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