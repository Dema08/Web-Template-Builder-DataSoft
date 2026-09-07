export function detectSectionAlignment(activeRect, sectionRect, tolerance = 8, snapThreshold = 3) {
  const guides = [];
  let snappedX = activeRect.x;
  let snappedY = activeRect.y;
  let hasSnappedX = false;
  let hasSnappedY = false;

  if (!sectionRect) return { guides, snappedPosition: { x: snappedX, y: snappedY }, hasSnapped: false };

  const secLeft = sectionRect.x || 0;
  const secCenterX = secLeft + (sectionRect.width || 800) / 2;
  const secRight = secLeft + (sectionRect.width || 800);

  const secTop = sectionRect.y || 0;
  const secCenterY = secTop + (sectionRect.height || 600) / 2;
  const secBottom = secTop + (sectionRect.height || 600);

  const activeLeft = activeRect.x;
  const activeCenterX = activeRect.x + activeRect.width / 2;
  const activeRight = activeRect.x + activeRect.width;

  const activeTop = activeRect.y;
  const activeCenterY = activeRect.y + activeRect.height / 2;
  const activeBottom = activeRect.y + activeRect.height;

  // Section Center X
  const diffSecCenterX = Math.abs(activeCenterX - secCenterX);
  if (!hasSnappedX && diffSecCenterX <= tolerance) {
    guides.push({ type: 'section-center', subtype: 'vertical', position: secCenterX, label: 'section-center-x', distance: diffSecCenterX });
    if (diffSecCenterX <= snapThreshold) {
      snappedX = secCenterX - activeRect.width / 2;
      hasSnappedX = true;
    }
  }

  // Section Left Edge
  const diffSecLeft = Math.abs(activeLeft - secLeft);
  if (!hasSnappedX && diffSecLeft <= tolerance) {
    guides.push({ type: 'section-edge', subtype: 'vertical', position: secLeft, label: 'section-left', distance: diffSecLeft });
    if (diffSecLeft <= snapThreshold) {
      snappedX = secLeft;
      hasSnappedX = true;
    }
  }

  // Section Right Edge
  const diffSecRight = Math.abs(activeRight - secRight);
  if (!hasSnappedX && diffSecRight <= tolerance) {
    guides.push({ type: 'section-edge', subtype: 'vertical', position: secRight, label: 'section-right', distance: diffSecRight });
    if (diffSecRight <= snapThreshold) {
      snappedX = secRight - activeRect.width;
      hasSnappedX = true;
    }
  }

  // Section Center Y
  const diffSecCenterY = Math.abs(activeCenterY - secCenterY);
  if (!hasSnappedY && diffSecCenterY <= tolerance) {
    guides.push({ type: 'section-center', subtype: 'horizontal', position: secCenterY, label: 'section-center-y', distance: diffSecCenterY });
    if (diffSecCenterY <= snapThreshold) {
      snappedY = secCenterY - activeRect.height / 2;
      hasSnappedY = true;
    }
  }

  // Section Top Edge
  const diffSecTop = Math.abs(activeTop - secTop);
  if (!hasSnappedY && diffSecTop <= tolerance) {
    guides.push({ type: 'section-edge', subtype: 'horizontal', position: secTop, label: 'section-top', distance: diffSecTop });
    if (diffSecTop <= snapThreshold) {
      snappedY = secTop;
      hasSnappedY = true;
    }
  }

  // Section Bottom Edge
  const diffSecBottom = Math.abs(activeBottom - secBottom);
  if (!hasSnappedY && diffSecBottom <= tolerance) {
    guides.push({ type: 'section-edge', subtype: 'horizontal', position: secBottom, label: 'section-bottom', distance: diffSecBottom });
    if (diffSecBottom <= snapThreshold) {
      snappedY = secBottom - activeRect.height;
      hasSnappedY = true;
    }
  }

  return {
    guides,
    snappedPosition: { x: snappedX, y: snappedY },
    hasSnapped: hasSnappedX || hasSnappedY,
  };
}

export function detectComponentAlignments(activeRect, otherRects, tolerance = 8, snapThreshold = 3) {
  const guides = [];
  let snappedX = activeRect.x;
  let snappedY = activeRect.y;
  let hasSnappedX = false;
  let hasSnappedY = false;

  const activeLeft = activeRect.x;
  const activeCenterX = activeRect.x + activeRect.width / 2;
  const activeRight = activeRect.x + activeRect.width;

  const activeTop = activeRect.y;
  const activeCenterY = activeRect.y + activeRect.height / 2;
  const activeBottom = activeRect.y + activeRect.height;

  for (const other of otherRects) {
    const otherLeft = other.x;
    const otherCenterX = other.x + other.width / 2;
    const otherRight = other.x + other.width;

    const otherTop = other.y;
    const otherCenterY = other.y + other.height / 2;
    const otherBottom = other.y + other.height;

    // Left to Left
    const diffLeft = Math.abs(activeLeft - otherLeft);
    if (!hasSnappedX && diffLeft <= tolerance) {
      guides.push({ type: 'component-alignment', subtype: 'vertical', position: otherLeft, label: 'left', distance: diffLeft });
      if (diffLeft <= snapThreshold) {
        snappedX = otherLeft;
        hasSnappedX = true;
      }
    }
    // Center to Center X
    const diffCenterX = Math.abs(activeCenterX - otherCenterX);
    if (!hasSnappedX && diffCenterX <= tolerance) {
      guides.push({ type: 'component-alignment', subtype: 'vertical', position: otherCenterX, label: 'centerX', distance: diffCenterX });
      if (diffCenterX <= snapThreshold) {
        snappedX = otherCenterX - activeRect.width / 2;
        hasSnappedX = true;
      }
    }
    // Right to Right
    const diffRight = Math.abs(activeRight - otherRight);
    if (!hasSnappedX && diffRight <= tolerance) {
      guides.push({ type: 'component-alignment', subtype: 'vertical', position: otherRight, label: 'right', distance: diffRight });
      if (diffRight <= snapThreshold) {
        snappedX = otherRight - activeRect.width;
        hasSnappedX = true;
      }
    }

    // Top to Top
    const diffTop = Math.abs(activeTop - otherTop);
    if (!hasSnappedY && diffTop <= tolerance) {
      guides.push({ type: 'component-alignment', subtype: 'horizontal', position: otherTop, label: 'top', distance: diffTop });
      if (diffTop <= snapThreshold) {
        snappedY = otherTop;
        hasSnappedY = true;
      }
    }
    // Center to Center Y
    const diffCenterY = Math.abs(activeCenterY - otherCenterY);
    if (!hasSnappedY && diffCenterY <= tolerance) {
      guides.push({ type: 'component-alignment', subtype: 'horizontal', position: otherCenterY, label: 'centerY', distance: diffCenterY });
      if (diffCenterY <= snapThreshold) {
        snappedY = otherCenterY - activeRect.height / 2;
        hasSnappedY = true;
      }
    }
    // Bottom to Bottom
    const diffBottom = Math.abs(activeBottom - otherBottom);
    if (!hasSnappedY && diffBottom <= tolerance) {
      guides.push({ type: 'component-alignment', subtype: 'horizontal', position: otherBottom, label: 'bottom', distance: diffBottom });
      if (diffBottom <= snapThreshold) {
        snappedY = otherBottom - activeRect.height;
        hasSnappedY = true;
      }
    }

    // Equal Width
    const diffWidth = Math.abs(activeRect.width - other.width);
    if (diffWidth <= 3) {
      guides.push({ type: 'size', subtype: 'width', value: other.width, label: 'equal-width', distance: diffWidth });
    }

    // Equal Height
    const diffHeight = Math.abs(activeRect.height - other.height);
    if (diffHeight <= 3) {
      guides.push({ type: 'size', subtype: 'height', value: other.height, label: 'equal-height', distance: diffHeight });
    }
  }

  return {
    guides,
    snappedPosition: { x: snappedX, y: snappedY },
    hasSnapped: hasSnappedX || hasSnappedY,
  };
}

export function detectEqualSpacing(activeRect, otherRects, tolerance = 6) {
  const guides = [];
  if (otherRects.length < 2) return guides;

  // Sort other rects by X and Y
  const sortedByX = [...otherRects].sort((a, b) => a.x - b.x);
  const sortedByY = [...otherRects].sort((a, b) => a.y - b.y);

  // Check horizontal spacing gaps
  for (let i = 0; i < sortedByX.length - 1; i++) {
    const c1 = sortedByX[i];
    const c2 = sortedByX[i + 1];
    const gap = c2.x - (c1.x + c1.width);

    if (gap > 5) {
      const activeGap1 = activeRect.x - (c1.x + c1.width);
      const activeGap2 = c2.x - (activeRect.x + activeRect.width);

      if (Math.abs(activeGap1 - gap) <= tolerance) {
        guides.push({ type: 'spacing', subtype: 'horizontal', position: c1.x + c1.width + gap / 2, label: 'equal-spacing-h', distance: Math.abs(activeGap1 - gap) });
      } else if (Math.abs(activeGap2 - gap) <= tolerance) {
        guides.push({ type: 'spacing', subtype: 'horizontal', position: activeRect.x + activeRect.width + gap / 2, label: 'equal-spacing-h', distance: Math.abs(activeGap2 - gap) });
      }
    }
  }

  // Check vertical spacing gaps
  for (let i = 0; i < sortedByY.length - 1; i++) {
    const c1 = sortedByY[i];
    const c2 = sortedByY[i + 1];
    const gap = c2.y - (c1.y + c1.height);

    if (gap > 5) {
      const activeGap1 = activeRect.y - (c1.y + c1.height);
      const activeGap2 = c2.y - (activeRect.y + activeRect.height);

      if (Math.abs(activeGap1 - gap) <= tolerance) {
        guides.push({ type: 'spacing', subtype: 'vertical', position: c1.y + c1.height + gap / 2, label: 'equal-spacing-v', distance: Math.abs(activeGap1 - gap) });
      } else if (Math.abs(activeGap2 - gap) <= tolerance) {
        guides.push({ type: 'spacing', subtype: 'vertical', position: activeRect.y + activeRect.height + gap / 2, label: 'equal-spacing-v', distance: Math.abs(activeGap2 - gap) });
      }
    }
  }

  return guides;
}

export function rankAndLimitGuides(guides, maxCount = 6) {
  // Sort by distance (closest first)
  const sorted = [...guides].sort((a, b) => (a.distance || 0) - (b.distance || 0));
  
  // Deduplicate by label/position
  const seen = new Set();
  const filtered = [];

  for (const g of sorted) {
    const key = `${g.type}-${g.subtype}-${g.position || g.value || g.label}`;
    if (!seen.has(key)) {
      seen.add(key);
      filtered.push(g);
    }
  }

  return filtered.slice(0, maxCount);
}

export function detectAlignments(activeRect, otherRects, sectionRect, tolerance = 8, snapThreshold = 3) {
  const sectionResult = detectSectionAlignment(activeRect, sectionRect, tolerance, snapThreshold);
  const componentResult = detectComponentAlignments(activeRect, otherRects, tolerance, snapThreshold);
  const spacingGuides = detectEqualSpacing(activeRect, otherRects, 6);

  const allGuides = [
    ...sectionResult.guides,
    ...componentResult.guides,
    ...spacingGuides,
  ];

  const rankedGuides = rankAndLimitGuides(allGuides, 6);

  // Determine final snapped position prioritizing section or component snap
  let finalSnappedX = activeRect.x;
  let finalSnappedY = activeRect.y;
  let hasSnapped = false;

  if (sectionResult.hasSnapped) {
    finalSnappedX = sectionResult.snappedPosition.x;
    finalSnappedY = sectionResult.snappedPosition.y;
    hasSnapped = true;
  } else if (componentResult.hasSnapped) {
    finalSnappedX = componentResult.snappedPosition.x;
    finalSnappedY = componentResult.snappedPosition.y;
    hasSnapped = true;
  }

  return {
    guides: rankedGuides,
    snappedPosition: {
      x: hasSnapped ? finalSnappedX : activeRect.x,
      y: hasSnapped ? finalSnappedY : activeRect.y,
    },
    hasSnapped,
  };
}
