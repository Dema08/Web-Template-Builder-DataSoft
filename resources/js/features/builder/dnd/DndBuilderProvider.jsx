import React, { createContext, useContext } from 'react';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
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
  // 1. First check if pointer is directly inside a drop zone
  const pointerCollisions = pointerWithin(args);
  if (pointerCollisions.length > 0) {
    return pointerCollisions;
  }

  // 2. Fall back to rect intersection
  const rectCollisions = rectIntersection(args);
  if (rectCollisions.length > 0) {
    return rectCollisions;
  }

  // 3. Fall back to closest center
  return closestCenter(args);
}

export default function DndBuilderProvider({ children }) {
  const dnd = useBuilderDnd();

  // Sensors with constraint to prevent accidental drag on normal clicks
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // 5px movement required to initiate drag
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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
