import { useState, useRef, useCallback } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useBuilderStore } from '../../stores/builderStore';
import { useBuilderDndContext } from '../../dnd/DndBuilderProvider';
import { useSnapGrid } from '../../hooks/useSnapGrid';
import { useSmartGuides } from '../../hooks/useSmartGuides';
import { useResize } from '../../hooks/useResize';
import SmartGuides from '../canvas/SmartGuides';
import ResizeHandles from '../canvas/ResizeHandles';
import { Lock, Move, Sparkles, Image as ImageIcon, CornerDownRight } from 'lucide-react';
import { toast } from '@store';

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
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    startPosX: 0,
    startPosY: 0,
    width: 0,
    height: 0,
    currentX: 0,
    currentY: 0,
    rafId: null,
  });

  const [isDraggingLocal, setIsDraggingLocal] = useState(false);
  const [lockedSize, setLockedSize] = useState(null);
  const [dragPosition, setDragPosition] = useState(null);

  const isSelected = selectedComponentId === component.id;
  const isHovered = hoveredComponent === component.id;
  const isLocked = !!(component.isLocked || component.position?.locked);
  const isHidden = !!(component.isHidden || component.position?.hidden);
  const isContainer = component.type === 'card';
  const isImageComponent = component.type === 'image' || 'src' in (component.props || {});

  // DnD Droppable registration for nested drops
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

  // DnD Draggable registration for sidebar or structural drag
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

  // Preview Mode
  if (isHidden && isPreviewMode) return null;
  if (isPreviewMode) {
    const isInline = ['text', 'heading', 'button', 'icon', 'badge'].includes(component.type);
    const hasPosition = component.position?.isAbsolute || (component.position?.x !== undefined && component.position?.x !== 0) || (component.position?.y !== undefined && component.position?.y !== 0);
    const wrapperStyle = {
      display: isInline ? 'inline-block' : 'block',
      maxWidth: '100%',
      width: component.position?.width || component.props?.width || (isInline ? 'fit-content' : undefined),
      height: component.position?.height || component.props?.height || undefined,
      position: hasPosition ? 'absolute' : 'relative',
      left: hasPosition ? `${component.position?.x || 0}px` : undefined,
      top: hasPosition ? `${component.position?.y || 0}px` : undefined,
      zIndex: component.position?.zIndex || 1,
      pointerEvents: 'auto',
    };
    return (
      <div id={component.id} style={wrapperStyle} className={isInline ? 'inline-block' : 'block'}>
        {children}
      </div>
    );
  }

  // Hidden in Editor
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
        onClick={(e) => {
          e.stopPropagation();
          selectComponent(component.id, sectionId);
        }}
      >
        <span>[Hidden: {component.type}]</span>
        <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded font-mono">Hidden</span>
      </div>
    );
  }

  // --- SELECTION HANDLER ---
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

  // --- CANVA-STYLE BUTTERY SMOOTH DRAG HANDLER (PRESERVES 100% SIZE) ---
  const handleDragStart = (e) => {
    // 1. Prevent drag when clicking inside inputs, textareas, selects, or contenteditable
    if (e.target && (
      e.target.tagName === 'INPUT' ||
      e.target.tagName === 'TEXTAREA' ||
      e.target.tagName === 'SELECT' ||
      e.target.isContentEditable ||
      e.target.closest('[contenteditable="true"]')
    )) {
      return;
    }

    // 2. Disambiguate child components inside cards / containers
    if (e.target !== e.currentTarget && !e.target.closest('[data-drag-handle]')) {
      const childCompEl = e.target.closest('[data-component-id]');
      if (childCompEl && childCompEl !== e.currentTarget) {
        return;
      }
    }

    if (isLocked || builderMode === 'resize') return;
    e.stopPropagation();

    // Select this component immediately
    selectComponent(component.id, sectionId);

    const el = elementRef.current;
    if (!el) return;

    // Capture pointer
    try {
      el.setPointerCapture(e.pointerId);
    } catch (_err) {}

    // Measure exact bounding rect and parent offsets
    const rect = el.getBoundingClientRect();
    const elWidth = Math.round(rect.width);
    const elHeight = Math.round(rect.height);

    const sectionEl = document.getElementById(sectionId) || el.closest('[data-section-id]') || el.offsetParent || document.body;
    const offsetParent = el.offsetParent || sectionEl;
    const parentRect = offsetParent.getBoundingClientRect();
    const sectionRect = sectionEl.getBoundingClientRect();

    const currentPos = component.position || {};
    const hasExplicitPos = currentPos.isAbsolute || (currentPos.x !== undefined && currentPos.x !== 0) || (currentPos.y !== undefined && currentPos.y !== 0);

    const startPosX = hasExplicitPos ? (currentPos.x || 0) : Math.round(rect.left - parentRect.left);
    const startPosY = hasExplicitPos ? (currentPos.y || 0) : Math.round(rect.top - parentRect.top);

    dragRef.current = {
      isDragging: true,
      hasMoved: false,
      startX: e.clientX,
      startY: e.clientY,
      startPosX,
      startPosY,
      width: elWidth,
      height: elHeight,
      currentX: startPosX,
      currentY: startPosY,
      rafId: null,
    };

    const storeState = useBuilderStore.getState();
    const section = storeState.sections.find(s => s.id === sectionId);
    const allComps = section ? section.components : [];

    // Pointer Move handler running at 60-120fps with direct transform/positioning
    const onPointerMove = (moveEvent) => {
      if (!dragRef.current.isDragging) return;

      const dx = moveEvent.clientX - dragRef.current.startX;
      const dy = moveEvent.clientY - dragRef.current.startY;

      // Distance threshold check: don't enter drag mode for minor jitters < 3px
      if (!dragRef.current.hasMoved && Math.hypot(dx, dy) < 3) {
        return;
      }

      if (!dragRef.current.hasMoved) {
        dragRef.current.hasMoved = true;
        setIsDraggingLocal(true);
        setLockedSize({ width: elWidth, height: elHeight });
        setDragPosition({ x: startPosX, y: startPosY });
      }

      const rawX = Math.round(dragRef.current.startPosX + dx);
      const rawY = Math.round(dragRef.current.startPosY + dy);

      const activeRect = {
        x: rawX,
        y: rawY,
        width: elWidth,
        height: elHeight,
      };

      // Calculate alignment guides
      const guideResult = calculateGuidesAndSnap(component.id, activeRect, allComps, sectionRect, 8, 4);

      let targetX = rawX;
      let targetY = rawY;

      if (guideResult.hasSnapped) {
        targetX = guideResult.snappedPosition.x;
        targetY = guideResult.snappedPosition.y;
      }

      dragRef.current.currentX = targetX;
      dragRef.current.currentY = targetY;

      // Update position smoothly using requestAnimationFrame
      if (dragRef.current.rafId) {
        cancelAnimationFrame(dragRef.current.rafId);
      }

      dragRef.current.rafId = requestAnimationFrame(() => {
        if (el) {
          el.style.left = `${targetX}px`;
          el.style.top = `${targetY}px`;
          el.style.position = 'absolute';
          el.style.width = `${elWidth}px`;
          el.style.height = `${elHeight}px`;
        }
        setDragPosition({ x: targetX, y: targetY });
      });
    };

    // Pointer Up (Drop Commit)
    const onPointerUp = (upEvent) => {
      const wasMoved = dragRef.current.hasMoved;
      dragRef.current.isDragging = false;
      if (dragRef.current.rafId) {
        cancelAnimationFrame(dragRef.current.rafId);
      }

      if (wasMoved) {
        const finalX = dragRef.current.currentX;
        const finalY = dragRef.current.currentY;

        // Apply snap to grid if not aligned to smart guides
        const snapped = snapPosition(finalX, finalY);
        const commitX = Math.abs(finalX - snapped.x) <= 4 ? snapped.x : finalX;
        const commitY = Math.abs(finalY - snapped.y) <= 4 ? snapped.y : finalY;

        const store = useBuilderStore.getState();
        // Preserve exact measured width & height so transitioning to absolute position doesn't collapse layout
        if (dragRef.current.width > 0 && !component.position?.width) {
          store.updateComponentSize(sectionId, component.id, `${dragRef.current.width}px`, `${dragRef.current.height}px`);
        }

        // Commit position to store and record history
        updateComponentPosition(sectionId, component.id, commitX, commitY, undefined, true);
      }

      clearGuides();
      setIsDraggingLocal(false);
      setLockedSize(null);
      setDragPosition(null);

      try {
        el.releasePointerCapture(upEvent.pointerId);
      } catch (_err) {}

      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  const getCursor = () => {
    if (isLocked) return 'default';
    if (isDraggingLocal) return 'grabbing';
    if (builderMode === 'drag') return 'grab';
    if (builderMode === 'resize') return 'default';
    return 'pointer';
  };

  // Drag & drop icon replacement from sidebar
  const handleNativeDrop = (e) => {
    try {
      const rawData = e.dataTransfer.getData('application/json');
      if (!rawData) return;
      const data = JSON.parse(rawData);
      if (data.type === 'icon') {
        e.preventDefault();
        e.stopPropagation();
        const iconName = data.icon || data.payload?.key || data.payload?.id || data.id;
        if (iconName) {
          updateComponentProps(sectionId, component.id, { name: iconName, icon: iconName });
          selectComponent(component.id, sectionId);
          toast.success(`Ikon diubah menjadi "${iconName}"`, 'Icon Updated');
        }
      }
    } catch (_err) {}
  };

  const handleNativeDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const activeDragType = dnd?.activeDragItem?.type;
  const isMediaDragging = activeDragType === 'sidebar-media' || dnd?.activeDragItem?.rawType === 'media';
  const isIconDragging = activeDragType === 'sidebar-icon' || dnd?.activeDragItem?.rawType === 'icon';
  const isComponentDragging = activeDragType === 'sidebar-component' || activeDragType === 'canvas-component' || dnd?.activeDragItem?.rawType === 'component';

  const isInline = ['text', 'heading', 'button', 'icon', 'badge'].includes(component.type);
  const hasPosition = component.position?.isAbsolute || isDraggingLocal || (component.position?.x !== undefined && component.position?.x !== 0) || (component.position?.y !== undefined && component.position?.y !== 0);

  // Exact width and height preserved at 100% scale without shrinking
  const activeWidth = lockedSize 
    ? `${lockedSize.width}px` 
    : (component.position?.width || component.props?.width || (isInline ? 'fit-content' : '100%'));
  const activeHeight = lockedSize 
    ? `${lockedSize.height}px` 
    : (component.position?.height || component.props?.height || undefined);

  const activePosX = isDraggingLocal && dragPosition ? dragPosition.x : (component.position?.x || 0);
  const activePosY = isDraggingLocal && dragPosition ? dragPosition.y : (component.position?.y || 0);

  const wrapperClass = [
    'relative',
    'rounded-sm',
    isDraggingLocal
      ? 'z-50 shadow-2xl ring-2 ring-indigo-500 cursor-grabbing bg-white/95 backdrop-blur-xs'
      : isSelected
        ? 'z-20 ring-2 ring-indigo-600 ring-offset-2 shadow-xs'
        : isHovered && builderMode !== 'select'
          ? 'ring-1 ring-indigo-300 ring-offset-1'
          : '',
    isOver && isContainer && isComponentDragging ? 'ring-2 ring-dashed ring-indigo-500 bg-indigo-500/10' : '',
    isOver && isImageComponent && isMediaDragging ? 'ring-2 ring-emerald-500 ring-offset-2' : '',
    isOver && isIconDragging ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
  ].filter(Boolean).join(' ');

  const wrapperStyle = {
    cursor: getCursor(),
    display: isInline ? 'inline-block' : 'block',
    maxWidth: '100%',
    width: activeWidth,
    height: activeHeight,
    position: hasPosition ? 'absolute' : 'relative',
    left: hasPosition ? `${activePosX}px` : undefined,
    top: hasPosition ? `${activePosY}px` : undefined,
    zIndex: isDraggingLocal ? 999 : (component.position?.zIndex || (isSelected ? 20 : 1)),
    pointerEvents: 'auto',
    transform: 'none', // Ensure 100% scale at all times
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
      onPointerDown={handleDragStart}
      onMouseEnter={() => !isDraggingLocal && setHoveredComponent(component.id)}
      onMouseLeave={() => !isDraggingLocal && setHoveredComponent(null)}
      onDragOver={handleNativeDragOver}
      onDrop={handleNativeDrop}
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

      {/* Icon Replace Drop Indicator */}
      {isOver && isIconDragging && (
        <div className="absolute inset-0 z-30 bg-indigo-600/20 border-2 border-indigo-500 rounded-xl pointer-events-none flex items-center justify-center backdrop-blur-xs">
          <div className="bg-indigo-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span>Drop to apply icon</span>
          </div>
        </div>
      )}

      {/* Smart Guides Rendering when dragging */}
      <SmartGuides guides={guides} />

      {/* Resize Handles */}
      {isSelected && !isLocked && !isDraggingLocal && (
        <ResizeHandles onResizeStart={startResize} />
      )}

      {/* Locked Badge */}
      {isSelected && isLocked && (
        <div
          className="absolute -top-3 -right-3 z-30 bg-amber-500 text-white p-1 rounded-full shadow-md text-xs flex items-center gap-1 font-bold"
          title="Component is locked"
        >
          <Lock className="h-3 w-3" />
        </div>
      )}

      {/* Canva-style Drag Move Handle */}
      {isSelected && !isLocked && (
        <div
          data-drag-handle="true"
          onPointerDown={handleDragStart}
          className="absolute -top-3.5 left-2 z-30 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-2 py-0.5 rounded-md text-[10px] font-extrabold shadow-md cursor-grab active:cursor-grabbing flex items-center gap-1 transition-transform select-none"
          title="Drag to reposition anywhere on the canvas"
        >
          <Move className="h-3 w-3" />
          <span>Move</span>
        </div>
      )}

      {children}
    </div>
  );
}