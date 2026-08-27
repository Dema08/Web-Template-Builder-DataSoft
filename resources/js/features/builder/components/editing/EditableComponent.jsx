import { useState, useRef } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useBuilderStore } from '../../stores/builderStore';
import { useBuilderDndContext } from '../../dnd/DndBuilderProvider';
import { Lock, Move, Sparkles, Image as ImageIcon, CornerDownRight } from 'lucide-react';
import DropIndicator from '../../dnd/DropIndicator';

export default function EditableComponent({
  component,
  sectionId,
  parentComponentId = null,
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
    isPreviewMode,
  } = useBuilderStore();

  const dnd = useBuilderDndContext();
  const elementRef = useRef(null);
  const [isDraggingLocal, setIsDraggingLocal] = useState(false);
  const [isResizingLocal, setIsResizingLocal] = useState(false);

  const isSelected = selectedComponentId === component.id;
  const isHovered = hoveredComponent === component.id;
  const isLocked = !!component.isLocked;
  const isHidden = !!component.isHidden;
  const isContainer = component.type === 'card';
  const isImageComponent = component.type === 'image' || 'src' in (component.props || {});

  // DnD Droppable registration for this component
  const { setNodeRef: setDroppableRef, isOver } = useDroppable({
    id: `comp-drop-${component.id}`,
    data: {
      isComponentDropTarget: true,
      componentId: component.id,
      sectionId,
      parentComponentId,
      type: component.type,
      isContainer,
    },
    disabled: isPreviewMode || isLocked,
  });

  // DnD Draggable registration for moving this component
  const {
    attributes: dndAttributes,
    listeners: dndListeners,
    setNodeRef: setDraggableRef,
    isDragging: isDndDragging,
  } = useDraggable({
    id: component.id,
    data: {
      isCanvasComponent: true,
      componentId: component.id,
      sectionId,
      parentComponentId,
      type: component.type,
      props: component.props,
    },
    disabled: isPreviewMode || isLocked || builderMode === 'resize',
  });

  // In Preview Mode, render 100% clean production output without editor UI
  if (isPreviewMode) {
    if (isHidden) return null;
    const isInline = ['text', 'heading', 'button', 'icon', 'badge'].includes(component.type);
    return (
      <div
        id={component.id}
        className="relative"
        style={{
          display: isInline ? 'inline-block' : 'block',
          maxWidth: '100%',
          width: component.props?.width || (isInline ? 'fit-content' : undefined),
          marginLeft: component.props?.marginLeft,
          marginTop: component.props?.marginTop,
        }}
      >
        {children}
      </div>
    );
  }

  // Snap value to 8px grid
  const snapToGrid = (val) => Math.round(val / 8) * 8;

  // --- SELECT HANDLER ---
  const handleClick = (e) => {
    e.stopPropagation();
    selectComponent(component.id, sectionId);
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
    if (builderMode === 'drag') {
      e.stopPropagation();
      e.preventDefault();
    }
    if (isLocked || builderMode !== 'drag') return;

    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);

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

  const getCursor = () => {
    if (isLocked) return 'default';
    if (builderMode === 'drag') return 'grab';
    if (builderMode === 'resize') return 'default';
    return 'pointer';
  };

  const activeDragType = dnd?.activeDragItem?.type;
  const isMediaDragging = activeDragType === 'sidebar-media' || dnd?.activeDragItem?.rawType === 'media';
  const isComponentDragging = activeDragType === 'sidebar-component' || activeDragType === 'canvas-component' || dnd?.activeDragItem?.rawType === 'component';

  const isInline = ['text', 'heading', 'button', 'icon', 'badge'].includes(component.type);

  const wrapperClass = [
    'relative',
    'transition-all duration-150',
    'rounded-sm',
    isSelected ? 'z-20' : '',
    !isSelected && isHovered && builderMode !== 'select' ? 'ring-1 ring-indigo-300 ring-offset-1' : '',
    isHidden ? 'opacity-30 pointer-events-none' : '',
    isDraggingLocal || isDndDragging ? 'opacity-40 scale-95 ring-2 ring-indigo-500 cursor-grabbing' : '',
    isOver && isContainer && isComponentDragging ? 'ring-2 ring-dashed ring-indigo-500 bg-indigo-500/10' : '',
    isOver && isImageComponent && isMediaDragging ? 'ring-2 ring-emerald-500 ring-offset-2' : '',
  ].filter(Boolean).join(' ');

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
      ref={(node) => {
        elementRef.current = node;
        setDroppableRef(node);
        setDraggableRef(node);
      }}
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
      {/* Container Drop Indicator (e.g. Card receiving child components) */}
      {isOver && isContainer && isComponentDragging && (
        <div className="absolute inset-0 z-30 border-2 border-dashed border-indigo-500 bg-indigo-50/20 rounded-xl pointer-events-none flex items-center justify-center">
          <div className="bg-indigo-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce">
            <CornerDownRight className="h-3 w-3" />
            <span>Drop inside Card container</span>
          </div>
        </div>
      )}

      {/* Image Replace Drop Indicator */}
      {isOver && isImageComponent && isMediaDragging && (
        <div className="absolute inset-0 z-30 bg-emerald-600/20 border-2 border-emerald-500 rounded-xl pointer-events-none flex items-center justify-center backdrop-blur-xs">
          <div className="bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
            <ImageIcon className="h-3.5 w-3.5" />
            <span>Drop to replace image</span>
          </div>
        </div>
      )}

      {/* Locked Badge (amber) */}
      {isSelected && isLocked && (
        <div
          className="absolute -top-3 -right-3 z-30 bg-amber-500 text-white p-1 rounded-full shadow-md text-xs flex items-center gap-1 font-bold"
          title="Component is locked"
        >
          <Lock className="h-3 w-3" />
        </div>
      )}

      {/* Canva-style Drag Handle (shown when component is selected & not locked) */}
      {isSelected && !isLocked && (
        <div
          {...dndAttributes}
          {...dndListeners}
          className="absolute -top-3 left-2 z-30 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-2 py-0.5 rounded-md text-[10px] font-extrabold shadow-md cursor-grab active:cursor-grabbing flex items-center gap-1 transition-transform hover:scale-105"
          title="Click & drag to reorder or move component"
        >
          <Move className="h-3 w-3" />
          <span>Move</span>
        </div>
      )}

      {/* Interactive Resize Handles (shown in Resize Mode when selected & not locked) */}
      {isSelected && builderMode === 'resize' && !isLocked && (
        <>
          <div
            onMouseDown={(e) => handleResizeStart(e, 'se')}
            className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-indigo-600 border-2 border-white rounded-sm z-40 cursor-se-resize shadow-md hover:scale-125 transition-transform"
            title="Drag to resize width & height (Snap 8px)"
          />
          <div
            onMouseDown={(e) => handleResizeStart(e, 'e')}
            className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-5 bg-indigo-600 border-2 border-white rounded-sm z-40 cursor-e-resize shadow-md hover:scale-125 transition-transform"
            title="Drag to resize width (Snap 8px)"
          />
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