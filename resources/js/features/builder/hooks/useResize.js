import { useState, useCallback } from 'react';
import { useBuilderStore } from '../stores/builderStore';

export function useResize(sectionId, componentId, initialPosition = {}) {
  const updateComponentSize = useBuilderStore(state => state.updateComponentSize);

  const startResize = useCallback((e, handleDirection) => {
    e.stopPropagation();
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;

    const startWidth = initialPosition.width || 150;
    const startHeight = initialPosition.height || 60;
    const startPosX = initialPosition.x || 0;
    const startPosY = initialPosition.y || 0;

    const onPointerMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;
      let newX = startPosX;
      let newY = startPosY;

      // Handle directions: nw, n, ne, e, se, s, sw, w
      if (handleDirection.includes('e')) {
        newWidth = Math.max(50, startWidth + deltaX);
      }
      if (handleDirection.includes('s')) {
        newHeight = Math.max(30, startHeight + deltaY);
      }
      if (handleDirection.includes('w')) {
        const potentialWidth = startWidth - deltaX;
        if (potentialWidth >= 50) {
          newWidth = potentialWidth;
          newX = startPosX + deltaX;
        }
      }
      if (handleDirection.includes('n')) {
        const potentialHeight = startHeight - deltaY;
        if (potentialHeight >= 30) {
          newHeight = potentialHeight;
          newY = startPosY + deltaY;
        }
      }

      updateComponentSize(sectionId, componentId, newWidth, newHeight);
      if (newX !== startPosX || newY !== startPosY) {
        useBuilderStore.getState().updateComponentPosition(sectionId, componentId, newX, newY);
      }
    };

    const onPointerUp = (upEvent) => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  }, [sectionId, componentId, initialPosition]);

  return {
    startResize,
  };
}
