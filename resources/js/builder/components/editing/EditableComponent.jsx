import { Rnd } from 'react-rnd';
import { useBuilderStore } from '../../stores/builderStore';
import { getComponentConfig } from '../../utils/componentRegistry';

export default function EditableComponent({
  component,
  sectionId,
  children,
}) {
  const {
    selectedComponentId,
    hoveredComponent,
    setHoveredComponent,
    selectComponent,
    updateComponentPosition,
  } = useBuilderStore();

  const isSelected = selectedComponentId === component.id;
  const isHovered = hoveredComponent === component.id;
  const config = getComponentConfig(component.type);
  const isResizable = config?.resizable !== false;

  const position = component.position || { x: 0, y: 0, width: null, height: null, rotation: 0, scale: 1, zIndex: 1 };

  // Only use Rnd when component has explicit position/size set
  const hasExplicitPosition = position.x !== 0 || position.y !== 0 || position.width || position.height;

  const handleClick = (e) => {
    e.stopPropagation();
    selectComponent(component.id);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
  };

  const handleDragStop = (e, d) => {
    updateComponentPosition(sectionId, component.id, { x: d.x, y: d.y });
  };

  const handleResizeStop = (e, direction, ref, delta, pos) => {
    updateComponentPosition(sectionId, component.id, {
      width: ref.style.width,
      height: ref.style.height,
      x: pos.x,
      y: pos.y,
    });
  };

  const baseStyle = {
    zIndex: position.zIndex || 1,
    transform: `rotate(${position.rotation || 0}deg) scale(${position.scale || 1})`,
  };

  // If not selected, render as normal with selection on click
  if (!isSelected) {
    return (
      <div
        id={component.id}
        data-component-id={component.id}
        data-section-id={sectionId}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={() => setHoveredComponent(component.id)}
        onMouseLeave={() => setHoveredComponent(null)}
        className={`relative transition-all ${
          isHovered ? 'ring-1 ring-indigo-400 ring-offset-1' : ''
        }`}
        style={baseStyle}
      >
        {children}
      </div>
    );
  }

  // Selected but no explicit position - show selection ring only
  if (!hasExplicitPosition) {
    return (
      <div
        id={component.id}
        data-component-id={component.id}
        data-section-id={sectionId}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={() => setHoveredComponent(component.id)}
        onMouseLeave={() => setHoveredComponent(null)}
        className="relative ring-2 ring-indigo-600 ring-offset-2 cursor-move"
        style={baseStyle}
      >
        {children}
      </div>
    );
  }

  // Selected with explicit position - draggable and resizable
  return (
    <Rnd
      id={component.id}
      data-component-id={component.id}
      data-section-id={sectionId}
      size={{
        width: position.width ? parseFloat(position.width) : undefined,
        height: position.height ? parseFloat(position.height) : undefined,
      }}
      position={{ x: position.x || 0, y: position.y || 0 }}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      bounds="parent"
      enableResizing={isResizable}
      onMouseEnter={() => setHoveredComponent(component.id)}
      onMouseLeave={() => setHoveredComponent(null)}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={baseStyle}
      className="ring-2 ring-indigo-600 ring-offset-2"
      resizeHandleStyles={{
        topLeft: { width: '10px', height: '10px', background: '#4f46e5', borderRadius: '2px' },
        top: { width: '10px', height: '10px', background: '#4f46e5', borderRadius: '2px' },
        topRight: { width: '10px', height: '10px', background: '#4f46e5', borderRadius: '2px' },
        left: { width: '10px', height: '10px', background: '#4f46e5', borderRadius: '2px' },
        right: { width: '10px', height: '10px', background: '#4f46e5', borderRadius: '2px' },
        bottomLeft: { width: '10px', height: '10px', background: '#4f46e5', borderRadius: '2px' },
        bottom: { width: '10px', height: '10px', background: '#4f46e5', borderRadius: '2px' },
        bottomRight: { width: '10px', height: '10px', background: '#4f46e5', borderRadius: '2px' },
      }}
    >
      {children}
    </Rnd>
  );
}