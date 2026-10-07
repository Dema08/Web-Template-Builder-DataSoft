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

  // Sensors with optimized mobile touch constraints:
  // - MouseSensor: 5px drag distance for desktop mouse
  // - TouchSensor: 200ms press-and-hold delay + 6px tolerance so normal page scrolling is smooth and uninhibited
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200, // 200ms hold required before drag initiates
        tolerance: 6, // 6px movement tolerance while holding
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Lock mobile page scrolling while a drag is actively underway
  useEffect(() => {
    if (dnd.activeDragItem) {
      const originalTouchAction = document.body.style.touchAction;
      const originalUserSelect = document.body.style.userSelect;

      document.body.style.touchAction = 'none';
      document.body.style.userSelect = 'none';

      const preventTouchMove = (e) => {
        // Prevent background scrolling while dragging an item
        if (e.cancelable) {
          e.preventDefault();
        }
      };

      window.addEventListener('touchmove', preventTouchMove, { passive: false });

      return () => {
        document.body.style.touchAction = originalTouchAction;
        document.body.style.userSelect = originalUserSelect;
        window.removeEventListener('touchmove', preventTouchMove);
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
        autoScroll={{
          threshold: {
            x: 0.1,
            y: 0.15,
          },
          acceleration: 15,
        }}
      >
        {children}

        {/* Global Drag Overlay (Canva-like Floating Preview) */}
        <DragOverlay dropAnimation={{
          duration: 250,
          easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
        }}>
          {dnd.activeDragItem ? (
            <DragOverlayRenderer activeDragItem={dnd.activeDragItem} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </BuilderDndContext.Provider>
  );
}
