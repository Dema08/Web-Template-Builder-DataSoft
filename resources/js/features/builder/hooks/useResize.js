import { useCallback, useRef } from 'react';
import { useBuilderStore } from '../stores/builderStore';

export function useResize(sectionId, componentId, initialPosition = {}) {
  const resizeRef = useRef({
    isResizing: false,
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    startPosX: 0,
    startPosY: 0,
    direction: '',
    currentWidth: 0,
    currentHeight: 0,
    currentX: 0,
    currentY: 0,
    rafId: null,
  });

  const startResize = useCallback((e, handleDirection) => {
    e.stopPropagation();
    e.preventDefault();

    const el = document.getElementById(componentId) || document.querySelector(`[data-component-id="${componentId}"]`);
    const rect = el ? el.getBoundingClientRect() : null;

    const elWidth = rect ? Math.round(rect.width) : (parseInt(initialPosition?.width) || 150);
    const elHeight = rect ? Math.round(rect.height) : (parseInt(initialPosition?.height) || 60);

    const sectionEl = document.getElementById(sectionId) || el?.closest('[data-section-id]') || el?.offsetParent || document.body;
    const offsetParent = el?.offsetParent || sectionEl;
    const parentRect = offsetParent ? offsetParent.getBoundingClientRect() : { left: 0, top: 0 };

    const hasExplicitPos = initialPosition?.isAbsolute || (initialPosition?.x !== undefined && initialPosition?.x !== 0) || (initialPosition?.y !== undefined && initialPosition?.y !== 0);
    const startPosX = hasExplicitPos ? (initialPosition?.x || 0) : (rect ? Math.round(rect.left - parentRect.left) : 0);
    const startPosY = hasExplicitPos ? (initialPosition?.y || 0) : (rect ? Math.round(rect.top - parentRect.top) : 0);

    const targetEl = e.currentTarget || e.target;
    try {
      targetEl.setPointerCapture(e.pointerId);
    } catch (_err) {}

    const aspectRatio = elWidth / (elHeight || 1);

    resizeRef.current = {
      isResizing: true,
      startX: e.clientX,
      startY: e.clientY,
      startWidth: elWidth,
      startHeight: elHeight,
      startPosX,
      startPosY,
      direction: handleDirection,
      currentWidth: elWidth,
      currentHeight: elHeight,
      currentX: startPosX,
      currentY: startPosY,
      rafId: null,
      aspectRatio,
      targetEl,
      pointerId: e.pointerId,
    };

    const onPointerMove = (moveEvent) => {
      if (!resizeRef.current.isResizing) return;

      const { startX, startY, startWidth, startHeight, startPosX, startPosY, direction, aspectRatio: ratio } = resizeRef.current;
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;
      let newX = startPosX;
      let newY = startPosY;

      // Handle horizontal sizing
      if (direction.includes('e')) {
        newWidth = Math.max(16, Math.round(startWidth + dx));
      } else if (direction.includes('w')) {
        const potentialWidth = Math.round(startWidth - dx);
        if (potentialWidth >= 16) {
          newWidth = potentialWidth;
          newX = Math.round(startPosX + dx);
        }
      }

      // Handle vertical sizing
      if (direction.includes('s')) {
        newHeight = Math.max(16, Math.round(startHeight + dy));
      } else if (direction.includes('n')) {
        const potentialHeight = Math.round(startHeight - dy);
        if (potentialHeight >= 16) {
          newHeight = potentialHeight;
          newY = Math.round(startPosY + dy);
        }
      }

      // Proportional resizing when Shift is held down (Canva style)
      if (moveEvent.shiftKey && (direction === 'se' || direction === 'ne' || direction === 'sw' || direction === 'nw')) {
        if (Math.abs(dx) > Math.abs(dy)) {
          newHeight = Math.max(16, Math.round(newWidth / ratio));
        } else {
          newWidth = Math.max(16, Math.round(newHeight * ratio));
        }
      }

      resizeRef.current.currentWidth = newWidth;
      resizeRef.current.currentHeight = newHeight;
      resizeRef.current.currentX = newX;
      resizeRef.current.currentY = newY;

      // Fluid direct DOM update via RAF
      if (resizeRef.current.rafId) {
        cancelAnimationFrame(resizeRef.current.rafId);
      }

      resizeRef.current.rafId = requestAnimationFrame(() => {
        if (el) {
          el.style.width = `${newWidth}px`;
          el.style.height = `${newHeight}px`;
          if (newX !== startPosX || hasExplicitPos) {
            el.style.left = `${newX}px`;
          }
          if (newY !== startPosY || hasExplicitPos) {
            el.style.top = `${newY}px`;
          }
        }
      });
    };

    const onPointerUp = (upEvent) => {
      resizeRef.current.isResizing = false;
      if (resizeRef.current.rafId) {
        cancelAnimationFrame(resizeRef.current.rafId);
      }

      const { currentWidth, currentHeight, currentX, currentY, startPosX, startPosY, targetEl: tEl } = resizeRef.current;

      try {
        if (tEl && upEvent?.pointerId) {
          tEl.releasePointerCapture(upEvent.pointerId);
        }
      } catch (_err) {}

      const widthStr = `${currentWidth}px`;
      const heightStr = `${currentHeight}px`;

      const store = useBuilderStore.getState();
      store.updateComponentSize(sectionId, componentId, widthStr, heightStr);
      store.updateComponentProps(sectionId, componentId, { width: widthStr, height: heightStr });

      if (currentX !== startPosX || currentY !== startPosY) {
        store.updateComponentPosition(sectionId, componentId, currentX, currentY, undefined, true);
      }

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
