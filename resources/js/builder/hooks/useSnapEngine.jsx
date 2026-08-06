import { useState, useCallback, useRef } from 'react';

const SNAP_THRESHOLD = 5;

/**
 * Snap Engine
 * Provides snap guidelines when dragging/resizing components on the canvas.
 * 
 * Usage:
 * const { guidelines, snapToGuidelines } = useSnapEngine(canvasRef);
 */
export function useSnapEngine(canvasRef) {
  const [guidelines, setGuidelines] = useState([]);
  const [snapOffset, setSnapOffset] = useState({ x: 0, y: 0 });

  const clearGuidelines = useCallback(() => {
    setGuidelines([]);
    setSnapOffset({ x: 0, y: 0 });
  }, []);

  /**
   * Computes guidelines for a component and adjusts position to snap.
   * @param {Object} position - Current position {x, y}
   * @param {Object} size - Current size {width, height}
   * @param {Array} otherElements - Other elements with {x, y, width, height, id}
   * @returns {{ position: {x, y}, guidelines: Array }}
   */
  const snapToGuidelines = useCallback((position, size, otherElements = []) => {
    const newGuidelines = [];
    let newX = position.x;
    let newY = position.y;
    const offset = { x: 0, y: 0 };

    const left = position.x;
    const right = position.x + size.width;
    const centerX = position.x + size.width / 2;
    const top = position.y;
    const bottom = position.y + size.height;
    const centerY = position.y + size.height / 2;

    for (const el of otherElements) {
      const elLeft = el.x;
      const elRight = el.x + el.width;
      const elCenterX = el.x + el.width / 2;
      const elTop = el.y;
      const elBottom = el.y + el.height;
      const elCenterY = el.y + el.height / 2;

      // Vertical alignment - left edge
      if (Math.abs(left - elLeft) < SNAP_THRESHOLD) {
        newX = elLeft;
        newGuidelines.push({ orientation: 'vertical', position: elLeft });
        offset.x = elLeft - left;
      }
      // Vertical alignment - right edge
      else if (Math.abs(right - elRight) < SNAP_THRESHOLD) {
        newX = elRight - size.width;
        newGuidelines.push({ orientation: 'vertical', position: elRight });
        offset.x = elRight - right;
      }
      // Vertical alignment - center
      else if (Math.abs(centerX - elCenterX) < SNAP_THRESHOLD) {
        newX = elCenterX - size.width / 2;
        newGuidelines.push({ orientation: 'vertical', position: elCenterX });
        offset.x = elCenterX - centerX;
      }

      // Horizontal alignment - top edge
      if (Math.abs(top - elTop) < SNAP_THRESHOLD) {
        newY = elTop;
        newGuidelines.push({ orientation: 'horizontal', position: elTop });
        offset.y = elTop - top;
      }
      // Horizontal alignment - bottom edge
      else if (Math.abs(bottom - elBottom) < SNAP_THRESHOLD) {
        newY = elBottom - size.height;
        newGuidelines.push({ orientation: 'horizontal', position: elBottom });
        offset.y = elBottom - bottom;
      }
      // Horizontal alignment - center
      else if (Math.abs(centerY - elCenterY) < SNAP_THRESHOLD) {
        newY = elCenterY - size.height / 2;
        newGuidelines.push({ orientation: 'horizontal', position: elCenterY });
        offset.y = elCenterY - centerY;
      }
    }

    // Canvas center guidelines
    if (canvasRef.current) {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const canvasCenterX = canvasRect.width / 2;
      const canvasCenterY = canvasRect.height / 2;

      if (Math.abs(centerX - canvasCenterX) < SNAP_THRESHOLD * 2) {
        newX = canvasCenterX - size.width / 2;
        newGuidelines.push({ orientation: 'vertical', position: canvasCenterX });
      }
      if (Math.abs(centerY - canvasCenterY) < SNAP_THRESHOLD * 2) {
        newY = canvasCenterY - size.height / 2;
        newGuidelines.push({ orientation: 'horizontal', position: canvasCenterY });
      }
    }

    setGuidelines(newGuidelines);
    setSnapOffset(offset);

    return { position: { x: newX, y: newY }, guidelines: newGuidelines };
  }, [canvasRef]);

  return {
    guidelines,
    snapOffset,
    snapToGuidelines,
    clearGuidelines,
  };
}

/**
 * SnapGuidelines Component
 * Renders visual guide lines on the canvas.
 */
export const SnapGuidelines = ({ guidelines, canvasWidth }) => {
  if (!guidelines || guidelines.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {guidelines.map((guide, i) => (
        guide.orientation === 'vertical' ? (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-purple-500"
            style={{ left: guide.position, boxShadow: '0 0 4px rgba(168, 85, 247, 0.8)' }}
          />
        ) : (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-purple-500"
            style={{ top: guide.position, boxShadow: '0 0 4px rgba(168, 85, 247, 0.8)' }}
          />
        )
      ))}
    </div>
  );
};