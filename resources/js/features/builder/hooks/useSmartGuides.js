import { useState, useCallback } from 'react';
import { detectAlignments } from '../utils/alignmentUtils';

export function useSmartGuides() {
  const [guides, setGuides] = useState([]);

  const calculateGuidesAndSnap = useCallback((activeComponentId, activeRect, allComponents, sectionRect, tolerance = 8, snapThreshold = 3) => {
    // Flatten all other components in tree
    const extractRects = (comps, rects = []) => {
      for (const c of comps) {
        if (c.id !== activeComponentId) {
          const el = document.getElementById(c.id) || document.querySelector(`[data-component-id="${c.id}"]`);
          let posX = c.position?.x || 0;
          let posY = c.position?.y || 0;
          let width = 120;
          let height = 40;

          if (el) {
            width = el.offsetWidth || width;
            height = el.offsetHeight || height;
            if (!c.position?.isAbsolute && !posX && !posY && sectionRect) {
              const r = el.getBoundingClientRect();
              posX = Math.round(r.left - sectionRect.left);
              posY = Math.round(r.top - sectionRect.top);
            }
          }

          rects.push({ id: c.id, x: posX, y: posY, width, height });
        }
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          extractRects(c.childrenComponents, rects);
        }
      }
      return rects;
    };

    const otherRects = extractRects(allComponents || []);
    const result = detectAlignments(activeRect, otherRects, sectionRect, tolerance, snapThreshold);

    setGuides(result.guides || []);
    return {
      guides: result.guides || [],
      snappedPosition: result.snappedPosition || { x: activeRect.x, y: activeRect.y },
      hasSnapped: result.hasSnapped || false,
    };
  }, []);

  const clearGuides = useCallback(() => {
    setGuides([]);
  }, []);

  return {
    guides,
    calculateGuidesAndSnap,
    clearGuides,
  };
}
