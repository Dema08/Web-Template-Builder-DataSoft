import { useState, useRef } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useBuilderStore } from '../../stores/builderStore';
import { useBuilderDndContext } from '../../dnd/DndBuilderProvider';
import { useSnapGrid } from '../../hooks/useSnapGrid';
import { useSmartGuides } from '../../hooks/useSmartGuides';
import { useResize } from '../../hooks/useResize';
import SmartGuides from '../canvas/SmartGuides';
import ResizeHandles from '../canvas/ResizeHandles';
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
  const { snapPosition } = useSnapGrid();
  const { guides, calculateGuidesAndSnap, clearGuides } = useSmartGuides();
  const { startResize } = useResize(sectionId, component.id, component.position);
  const elementRef = useRef(null);
  const [isDraggingLocal, setIsDraggingLocal] = useState(false);
  const [isResizingLocal, setIsResizingLocal] = useState(false);

  const isSelected = selectedComponentId === component.id;
  const isHovered = hoveredComponent === component.id;
  const isLocked = !!(component.isLocked || component.position?.locked);
  const isHidden = !!(component.isHidden || component.position?.hidden);
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

  // In Preview Mode or if hidden, handle visibility
  if (isHidden && isPreviewMode) return null;
  if (isHidden) {
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
        className="relative opacity-30 border border-dashed border-slate-400 p-2 my-1 rounded text-xs text-slate-500 flex items-center justify-between"
        style={{
          position: (component.position?.x !== 0 || component.position?.y !== 0) ? 'absolute' : 'relative',
          left: component.position?.x ? `${component.position.x}px` : undefined,
          top: component.position?.y ? `${component.position.y}px` : undefined,
          zIndex: component.position?.zIndex || 1,
        }}
        onClick={handleClick}
      >
        <span>[Hidden: {component.type}]</span>
        <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded font-mono">Hidden</span>
      </div>
    );
  }

  // Snap value to 8px grid
  const snapToGrid = (val) => Math.round(val / 8) * 8;

  // --- SELECT HANDLER ---
  const handleClick = (e) => {
    e.stopPropagation();
    if (e.shiftKey) {
      useBuilderStore.getState().toggleComponentSelection(component.id);
    } else {
      selectComponent(component.id, sectionId);
    }
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

    const storeState = useBuilderStore.getState();
    const section = storeState.sections.find(s => s.id === sectionId);
    const allComps = section ? section.components : [];

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

      const activeRect = {
        x: component.position?.x || 0,
        y: component.position?.y || 0,
        width: newWidth,
        height: newHeight,
      };

      const guideResult = calculateGuidesAndSnap(component.id, activeRect, allComps, 5);

      if (guideResult.hasSnapped) {
        // If right/bottom edge snapped or similar, adjust width/height accordingly based on alignment guides
        for (const g of guideResult.guides) {
          if (g.label === 'right') {
            const otherCompX = g.position; // approximation or reference
            newWidth = Math.max(32, otherCompX - (component.position?.x || 0));
          } else if (g.label === 'bottom') {
            const otherCompY = g.position;
            newHeight = Math.max(24, otherCompY - (component.position?.y || 0));
          }
        }
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
      clearGuides();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // --- INTERACTIVE POINTER DRAG POSITION HANDLER ---
  const handleDragStart = (e) => {
    // If clicking on a child element (e.g. text/button inside Card) and not the move handle or empty container area, stop propagation or return
    if (e.target !== e.currentTarget && !e.target.closest('[data-drag-handle]')) {
      // Check if it's a child component being dragged directly
      if (e.target.closest('[data-component-id]') && e.target.closest('[data-component-id]') !== e.currentTarget) {
        return;
      }
    }

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

    setIsDraggingLocal(true);

    const storeState = useBuilderStore.getState();
    const section = storeState.sections.find(s => s.id === sectionId);
    const allComps = section ? section.components : [];
    const sectionEl = document.getElementById(sectionId);
    const sectionRect = sectionEl ? {
      x: sectionEl.offsetLeft || 0,
      y: sectionEl.offsetTop || 0,
      width: sectionEl.offsetWidth || 800,
      height: sectionEl.offsetHeight || 600,
    } : { x: 0, y: 0, width: 800, height: 600 };

    const onPointerMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      const rawX = startPosX + deltaX;
      const rawY = startPosY + deltaY;

      const activeRect = {
        x: rawX,
        y: rawY,
        width: el.offsetWidth || 120,
        height: el.offsetHeight || 40,
      };

      // Calculate guides for visual rendering only without forcing position jump during drag
      calculateGuidesAndSnap(component.id, activeRect, allComps, sectionRect, 8, 3);

      // Follow cursor precisely without forcing snap during drag movement
      updateComponentPosition(sectionId, component.id, rawX, rawY);
    };

    const onPointerUp = (upEvent) => {
      setIsDraggingLocal(false);

      // Apply snap on drop if close enough to an alignment guide (<= 3px) or snap to grid
      const finalRawX = startPosX + (upEvent.clientX - startX);
      const finalRawY = startPosY + (upEvent.clientY - startY);

      const activeRect = {
        x: finalRawX,
        y: finalRawY,
        width: el.offsetWidth || 120,
        height: el.offsetHeight || 40,
      };

      const finalCheck = calculateGuidesAndSnap(component.id, activeRect, allComps, sectionRect, 8, 3);

      let finalX = finalRawX;
      let finalY = finalRawY;

      if (finalCheck.hasSnapped) {
        finalX = finalCheck.snappedPosition.x;
        finalY = finalCheck.snappedPosition.y;
      } else {
        const snapped = snapPosition(finalRawX, finalRawY);
        finalX = snapped.x;
        finalY = snapped.y;
      }

      updateComponentPosition(sectionId, component.id, finalX, finalY);
      clearGuides();

      el.releasePointerCapture(upEvent.pointerId);
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
    position: (component.position?.x !== 0 || component.position?.y !== 0) ? 'absolute' : 'relative',
    left: component.position?.x ? `${component.position.x}px` : undefined,
    top: component.position?.y ? `${component.position.y}px` : undefined,
    zIndex: component.position?.zIndex || 1,
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

      {/* Smart Guides Rendering when dragging */}
      <SmartGuides guides={guides} />

      {/* STEP D: Resize Handles */}
      {isSelected && !isLocked && (
        <ResizeHandles onResizeStart={startResize} />
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