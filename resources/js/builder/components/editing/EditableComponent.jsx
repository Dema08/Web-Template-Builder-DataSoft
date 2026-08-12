import { useState, useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { Lock, Move } from 'lucide-react';

export default function EditableComponent({
  component,
  sectionId,
  children,
}) {
  const {
    selectedComponentId,
    hoveredComponent,
    builderMode = 'select',
    setHoveredComponent,
    selectComponent,
    updateComponentProps,
    updateComponentPosition,
  } = useBuilderStore();

  const elementRef = useRef(null);
  const [isDraggingLocal, setIsDraggingLocal] = useState(false);
  const [isResizingLocal, setIsResizingLocal] = useState(false);

  const isSelected = selectedComponentId === component.id;
  const isHovered = hoveredComponent === component.id;
  const isLocked = !!component.isLocked;
  const isHidden = !!component.isHidden;

  // Snap value to 8px grid
  const snapToGrid = (val) => Math.round(val / 8) * 8;

  // --- SELECT HANDLER ---
  const handleClick = (e) => {
    e.stopPropagation();
    selectComponent(component.id);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
  };

  // --- INTERACTIVE MOUSE RESIZE HANDLER ---
  const handleResizeStart = (e, direction) => {
    if (isLocked || builderMode !== 'resize') return;
    e.stopPropagation();
    e.preventDefault();

    const element = elementRef.current;
    if (!element) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const rect = element.getBoundingClientRect();
    const startWidth = rect.width;
    const startHeight = rect.height;

    setIsResizingLocal(true);

    const onMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;

      if (direction.includes('e') || direction.includes('se')) {
        newWidth = Math.max(32, snapToGrid(startWidth + deltaX));
      }
      if (direction.includes('s') || direction.includes('se')) {
        newHeight = Math.max(24, snapToGrid(startHeight + deltaY));
      }

      // Update component width & height props dynamically
      const updatedProps = {};
      if (direction.includes('e') || direction.includes('se')) {
        updatedProps.width = `${newWidth}px`;
      }
      if (direction.includes('s') || direction.includes('se')) {
        updatedProps.height = `${newHeight}px`;
      }

      updateComponentProps(sectionId, component.id, updatedProps);
    };

    const onMouseUp = () => {
      setIsResizingLocal(false);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // --- INTERACTIVE POINTER DRAG POSITION HANDLER ---
  const handleDragStart = (e) => {
    // Always stop propagation in drag mode so the section click doesn't fire
    if (builderMode === 'drag') {
      e.stopPropagation();
      e.preventDefault();
    }
    if (isLocked || builderMode !== 'drag') return;

    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId); // lock pointer to this element during drag

    const startX = e.clientX;
    const startY = e.clientY;

    const currentPos = component.position || { x: 0, y: 0 };
    const startPosX = currentPos.x || 0;
    const startPosY = currentPos.y || 0;

    const currentMarginLeft = parseInt(component.props?.marginLeft || '0', 10);
    const currentMarginTop = parseInt(component.props?.marginTop || '0', 10);

    setIsDraggingLocal(true);

    const onPointerMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      const newMarginLeft = snapToGrid(currentMarginLeft + deltaX);
      const newMarginTop = snapToGrid(currentMarginTop + deltaY);
      const newPosX = snapToGrid(startPosX + deltaX);
      const newPosY = snapToGrid(startPosY + deltaY);

      updateComponentPosition(sectionId, component.id, { x: newPosX, y: newPosY });
      updateComponentProps(sectionId, component.id, {
        marginLeft: `${newMarginLeft}px`,
        marginTop: `${newMarginTop}px`,
      });
    };

    const onPointerUp = () => {
      setIsDraggingLocal(false);
      el.releasePointerCapture(e.pointerId);
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerup', onPointerUp);
    };

    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerup', onPointerUp);
  };

  // Determine cursor dynamically
  const getCursor = () => {
    if (isLocked) return 'default';
    if (builderMode === 'drag') return 'grab';
    if (builderMode === 'resize') return 'default';
    return 'pointer';
  };

  const wrapperClass = [
    'relative',
    'transition-colors',
    'rounded-sm',
    isSelected ? 'z-20' : '',
    !isSelected && isHovered && builderMode !== 'select' ? 'ring-1 ring-indigo-300 ring-offset-1' : '',
    isHidden ? 'opacity-30 pointer-events-none' : '',
    isDraggingLocal ? 'opacity-70 cursor-grabbing' : '',
  ].filter(Boolean).join(' ');

  const isInline = ['text', 'heading', 'button', 'icon', 'badge'].includes(component.type);

  const wrapperStyle = {
    cursor: getCursor(),
    display: isInline ? 'inline-block' : 'block',
    maxWidth: '100%',
    width: component.props?.width ? component.props.width : (isInline ? 'fit-content' : undefined),
    ...(isSelected
      ? {
          outline: '2px solid #4f46e5',
          outlineOffset: '2px',
          boxShadow: '0 0 0 4px rgba(79, 70, 229, 0.15)',
        }
      : {}),
  };

  return (
    <div
      ref={elementRef}
      id={component.id}
      data-component-id={component.id}
      data-section-id={sectionId}
      className={wrapperClass}
      style={wrapperStyle}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onPointerDown={builderMode === 'drag' ? handleDragStart : undefined}
      onMouseEnter={() => setHoveredComponent(component.id)}
      onMouseLeave={() => setHoveredComponent(null)}
    >
      {/* Locked Badge (amber) */}
      {isSelected && isLocked && (
        <div
          className="absolute -top-3 -right-3 z-30 bg-amber-500 text-white p-1 rounded-full shadow-md text-xs flex items-center gap-1 font-bold"
          title="Component is locked"
        >
          <Lock className="h-3 w-3" />
        </div>
      )}

      {/* Drag Move Handle Indicator (shown in Drag Mode when selected & not locked) */}
      {isSelected && builderMode === 'drag' && !isLocked && (
        <div
          onPointerDown={handleDragStart}
          className="absolute -top-3 left-2 z-30 bg-indigo-600 text-white px-2 py-0.5 rounded-md text-[10px] font-extrabold shadow-md cursor-grab active:cursor-grabbing flex items-center gap-1"
          title="Click & drag to move component"
        >
          <Move className="h-3 w-3" />
          <span>Drag Move</span>
        </div>
      )}

      {/* Interactive Resize Handles (shown in Resize Mode when selected & not locked) */}
      {isSelected && builderMode === 'resize' && !isLocked && (
        <>
          {/* Bottom-Right Handle */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 'se')}
            className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-indigo-600 border-2 border-white rounded-sm z-40 cursor-se-resize shadow-md hover:scale-125 transition-transform"
            title="Drag to resize width & height (Snap 8px)"
          />
          {/* Right Edge Handle */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 'e')}
            className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-5 bg-indigo-600 border-2 border-white rounded-sm z-40 cursor-e-resize shadow-md hover:scale-125 transition-transform"
            title="Drag to resize width (Snap 8px)"
          />
          {/* Bottom Edge Handle */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 's')}
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-3 bg-indigo-600 border-2 border-white rounded-sm z-40 cursor-s-resize shadow-md hover:scale-125 transition-transform"
            title="Drag to resize height (Snap 8px)"
          />
        </>
      )}

      {children}
    </div>
  );
}