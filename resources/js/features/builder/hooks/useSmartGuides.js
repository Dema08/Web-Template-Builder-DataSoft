import { useState, useCallback } from 'react';
import { detectAlignments } from '../utils/alignmentUtils';

export function useSmartGuides() {
  const [guides, setGuides] = useState([]);

  const calculateGuidesAndSnap = useCallback((activeComponentId, activeRect, allComponents, sectionRect, tolerance = 8, snapThreshold = 3) => {
    // Flatten all other components in tree
    const extractRects = (comps, rects = []) => {
      for (const c of comps) {
        if (c.id !== activeComponentId) {
          const posX = c.position?.x || 0;
          const posY = c.position?.y || 0;
          const width = 120;
          const height = 40;
          rects.push({ id: c.id, x: posX, y: posY, width, height });
        }
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          extractRects(c.childrenComponents, rects);
        }
      }
      return rects;
    };

    const otherRects = extractRects(allComponents);
    const result = detectAlignments(activeRect, otherRects, sectionRect, tolerance, snapThreshold);

    setGuides(result.guides);
    return {
      guides: result.guides,
      snappedPosition: result.snappedPosition,
      hasSnapped: result.hasSnapped,
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
