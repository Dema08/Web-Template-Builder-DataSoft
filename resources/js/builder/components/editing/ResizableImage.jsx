import { Rnd } from 'react-rnd';
import { useBuilderStore } from '../../stores/builderStore';

export default function ResizableImage({
  src = '',
  alt = 'Image',
  width = '100%',
  height = 'auto',
  objectFit = 'cover',
  borderRadius = '0',
  shadow = 'none',
  opacity = 100,
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, updateComponentProps } = useBuilderStore();

  const isSelected = selectedComponentId === componentId;
  const isHovered = hoveredComponent === componentId;

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  const style = {
    objectFit,
    borderRadius,
    opacity: opacity / 100,
  };

  // If not selected and not resizable mode, render normal image
  if (!isSelected) {
    return (
      <img
        id={componentId}
        data-component-id={componentId}
        data-section-id={sectionId}
        src={src}
        alt={alt}
        style={{ ...style, width, height }}
        onMouseEnter={() => setHoveredComponent(componentId)}
        onMouseLeave={() => setHoveredComponent(null)}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${shadowStyles[shadow]} bg-slate-100 transition-all ${
          isHovered ? 'ring-1 ring-indigo-400 ring-offset-1' : ''
        }`}
      />
    );
  }

  // Selected mode - resizable with react-rnd
  return (
    <Rnd
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      size={{
        width: typeof width === 'number' ? width : parseFloat(width) || 300,
        height: typeof height === 'number' ? height : parseFloat(height) || 200,
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        updateComponentProps(sectionId, componentId, {
          width: `${ref.style.width}`,
          height: `${ref.style.height}`,
        });
      }}
      onDragStop={(e, d) => {
        updateComponentProps(sectionId, componentId, {
          position: { x: d.x, y: d.y },
        });
      }}
      bounds="parent"
      onMouseEnter={() => setHoveredComponent(componentId)}
      onMouseLeave={() => setHoveredComponent(null)}
      onClick={(e) => e.stopPropagation()}
      className="ring-2 ring-indigo-600 ring-offset-2"
      resizeHandleStyles={{
        bottomRight: { width: '12px', height: '12px', background: '#4f46e5', borderRadius: '4px' },
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ ...style, width: '100%', height: '100%' }}
        className={`${shadowStyles[shadow]} bg-slate-100 w-full h-full`}
      />
    </Rnd>
  );
}
