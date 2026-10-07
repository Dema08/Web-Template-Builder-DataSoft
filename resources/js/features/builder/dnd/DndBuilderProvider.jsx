import React, { createContext, useContext, useEffect } from 'react';
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCenter,
  pointerWithin,
  rectIntersection,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useBuilderDnd } from './useBuilderDnd';
import DragOverlayRenderer from './DragOverlayRenderer';

const BuilderDndContext = createContext(null);

export function useBuilderDndContext() {
  return useContext(BuilderDndContext);
}

/**
 * Custom collision detection strategy that prioritizes:
 * 1. Pointer within drop targets (highest precision for nested drops)
 * 2. Rect intersection (fallback for general areas)
 * 3. Closest center (for sortable lists)
 */
function customCollisionDetection(args) {
  const pointerCollisions = pointerWithin(args);
  if (pointerCollisions.length > 0) {
    return pointerCollisions;
  }

  const rectCollisions = rectIntersection(args);
  if (rectCollisions.length > 0) {
    return rectCollisions;
  }

  return closestCenter(args);
}

export default function DndBuilderProvider({ children }) {
  const dnd = useBuilderDnd();

  // Sensors with ultra-fluid Canva-like touch constraints:
  // - MouseSensor: 4px drag distance for desktop mouse
  // - TouchSensor: 100ms hold delay + 8px tolerance for immediate, fluid drag on mobile without accidental triggers
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 4,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100, // Fast 100ms response like Canva
        tolerance: 8, // 8px tolerance before cancelling hold
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // 100% Mobile Page & Viewport Scroll Lock while Drag is Active
  useEffect(() => {
    if (dnd.activeDragItem) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      const originalUserSelect = document.body.style.userSelect;
      const originalOverscroll = document.body.style.overscrollBehavior;

      document.body.classList.add('builder-dragging-active');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.overscrollBehavior = 'none';
      document.body.style.userSelect = 'none';

      const preventTouchMove = (e) => {
        if (e.cancelable) {
          e.preventDefault();
        }
      };

      // Intercept and prevent any native touch gestures during active drag
      window.addEventListener('touchmove', preventTouchMove, { passive: false, capture: true });
      window.addEventListener('wheel', preventTouchMove, { passive: false, capture: true });

      return () => {
        document.body.classList.remove('builder-dragging-active');
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.touchAction = originalTouchAction;
        document.body.style.overscrollBehavior = originalOverscroll;
        document.body.style.userSelect = originalUserSelect;
        window.removeEventListener('touchmove', preventTouchMove, { capture: true });
        window.removeEventListener('wheel', preventTouchMove, { capture: true });
      };
    }
  }, [dnd.activeDragItem]);

  return (
    <BuilderDndContext.Provider value={dnd}>
      <DndContext
        sensors={sensors}
        collisionDetection={customCollisionDetection}
        onDragStart={dnd.handleDragStart}
        onDragOver={dnd.handleDragOver}
        onDragEnd={dnd.handleDragEnd}
        onDragCancel={dnd.handleDragCancel}
        autoScroll={false}
      >
        {children}

        {/* Global Canva-like Floating Drag Overlay */}
        <DragOverlay
          dropAnimation={{
            duration: 200,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="canva-drag-overlay"
        >
          {dnd.activeDragItem ? (
            <DragOverlayRenderer activeDragItem={dnd.activeDragItem} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </BuilderDndContext.Provider>
  );
}

