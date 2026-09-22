import { create } from 'zustand';
import { createEmptySection, createEmptyComponent } from '../types';
import { getDefaultLayout } from '../engine/layoutRegistry';
import { getLayoutDefaults } from '../engine/layoutDefaults';

// Helper: Find component recursively in tree by ID
const findComponentInTree = (comps, targetId) => {
  if (!Array.isArray(comps)) return null;
  for (const c of comps) {
    if (c.id === targetId) return c;
    if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
      const found = findComponentInTree(c.childrenComponents, targetId);
      if (found) return found;
    }
  }
  return null;
};

// Helper: Deep clone a component and assign fresh unique IDs to it & ALL nested childrenComponents
const cloneComponentWithNewIds = (comp) => {
  if (!comp) return null;
  const cloned = JSON.parse(JSON.stringify(comp));
  cloned.id = `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  if (Array.isArray(cloned.childrenComponents) && cloned.childrenComponents.length > 0) {
    cloned.childrenComponents = cloned.childrenComponents.map(child => cloneComponentWithNewIds(child));
  }

  return cloned;
};

export const useBuilderStore = create((set, get) => ({
  // Initial state
  status: 'draft',
  deviceView: 'desktop',
  selectedSectionId: null,
  selectedComponentId: null,
  selectedProperty: null,
  hoveredComponent: null,
  clipboard: null,
  selectedLayers: [],
  industryId: null,
  industrySlug: null,
  industryName: null,
  templateId: null,
  templateName: '',
  sections: [],
  landingSections: [],
  pages: {}, // { [pageId]: { id, name, slug, sections: [] } }
  currentPageId: 'landing', // 'landing' or page id
  currentPreviewPageId: 'landing', // for preview mode page switching
  history: [[]],
  historyIndex: 0,
  isPreviewMode: false,
  isSaving: false,
  builderMode: 'select', // 'select' | 'drag' | 'resize'
  isLeftPanelOpen: true,
  isRightPanelOpen: true,
  snapEnabled: true, // STEP B: Snap to Grid state

  // Actions
  setBuilderMode: (builderMode) => set({ builderMode }),
  toggleSnap: () => set(state => ({ snapEnabled: !state.snapEnabled })),
  setSnapEnabled: (snapEnabled) => set({ snapEnabled }),
  toggleLeftPanel: () => set(state => ({ isLeftPanelOpen: !state.isLeftPanelOpen })),
  toggleRightPanel: () => set(state => ({ isRightPanelOpen: !state.isRightPanelOpen })),
  setLeftPanelOpen: (isOpen) => set({ isLeftPanelOpen: isOpen }),
  setRightPanelOpen: (isOpen) => set({ isRightPanelOpen: isOpen }),

  toggleLockComponent: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();
    const updateInTree = (comps) => comps.map(c => {
      if (c.id === componentId) {
        const currentLocked = c.position?.locked ?? c.isLocked ?? false;
        return {
          ...c,
          isLocked: !currentLocked,
          position: { ...c.position, locked: !currentLocked }
        };
      }
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        return { ...c, childrenComponents: updateInTree(c.childrenComponents) };
      }
      return c;
    });

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: updateInTree(s.components) };
      }
      return s;
    });
    set({ sections: newSections });
  },

  toggleVisibilityComponent: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();
    const updateInTree = (comps) => comps.map(c => {
      if (c.id === componentId) {
        const currentHidden = c.position?.hidden ?? c.isHidden ?? false;
        return {
          ...c,
          isHidden: !currentHidden,
          position: { ...c.position, hidden: !currentHidden }
        };
      }
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        return { ...c, childrenComponents: updateInTree(c.childrenComponents) };
      }
      return c;
    });

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: updateInTree(s.components) };
      }
      return s;
    });
    set({ sections: newSections });
  },

  toggleVisibilitySection: (sectionId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();
    const newSections = sections.map(s =>
      s.id === sectionId ? { ...s, isHidden: !s.isHidden } : s
    );
    set({ sections: newSections });
  },
  setIndustry: (industryId, industrySlug, industryName, clearSections = false) => {
    set(state => ({
      industryId,
      industrySlug,
      industryName,
      sections: clearSections ? [] : state.sections,
      selectedSectionId: null,
      selectedComponentId: null,
      selectedProperty: null,
      selectedLayers: []
    }));
  },

  setTemplateId: (templateId) => {
    set({ templateId });
  },

  setTemplateName: (templateName) => {
    set({ templateName });
  },

  // Helper: recursively normalize a component tree node (preserves childrenComponents)
  _normalizeComponent: (c, idx = 0) => {
    const normalized = {
      id: c.id || `comp-${Date.now()}-${idx}-${Math.random().toString(36).substr(2, 9)}`,
      type: c.type,
      props: c.props || {},
      position: c.position || { x: 0, y: 0, width: null, height: null, rotation: 0, scale: 1, zIndex: 1 },
      isLocked: c.isLocked || false,
      isHidden: c.isHidden || false,
    };
    if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
      normalized.childrenComponents = c.childrenComponents.map((child, ci) =>
        get()._normalizeComponent(child, ci)
      );
    }
    return normalized;
  },

  // Serialize the CURRENT canvas into the draft_json shape the backend expects.
  serializeDraftJson: () => {
    const { sections, landingSections, pages, currentPageId } = get();
    // Sync current active sections back to correct store bucket first
    const activeLanding = currentPageId === 'landing' ? sections : landingSections;
    const activePages = { ...pages };
    if (currentPageId !== 'landing' && activePages[currentPageId]) {
      activePages[currentPageId] = { ...activePages[currentPageId], sections };
    }

    return {
      sections: (activeLanding || []).map(s => ({
        id: s.id,
        type: s.type,
        layout: s.layout,
        styles: s.styles || {},
        background: s.background || null,
        isLocked: s.isLocked || false,
        isHidden: s.isHidden || false,
        components: s.components,
      })),
      pages: activePages,
    };
  },

  loadSections: (sectionsData, pagesData = {}) => {
    const normalizeComponent = (c, idx = 0) => {
      const normalized = {
        id: c.id || `comp-${Date.now()}-${idx}-${Math.random().toString(36).substr(2, 9)}`,
        type: c.type,
        props: c.props || {},
        position: c.position || { x: 0, y: 0, width: null, height: null, rotation: 0, scale: 1, zIndex: 1 },
        isLocked: c.isLocked || false,
        isHidden: c.isHidden || false,
      };
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        normalized.childrenComponents = c.childrenComponents.map((child, ci) =>
          normalizeComponent(child, ci)
        );
      }
      return normalized;
    };

    const processSections = (secList) => (secList || []).map((section, index) => {
      let components = section.components || [];
      if (components.length === 0 && section.layout) {
        components = getLayoutDefaults(section.layout);
      }

      return {
        id: section.id || `section-${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}`,
        type: section.type,
        layout: section.layout,
        components: components.map((c, ci) => normalizeComponent(c, ci)),
        order: index,
        styles: section.styles || {},
        background: section.background || null,
        isLocked: section.isLocked || false,
        isHidden: section.isHidden || false,
      };
    });

    const loadedLanding = processSections(sectionsData);
    const loadedPages = {};
    if (pagesData && typeof pagesData === 'object') {
      Object.entries(pagesData).forEach(([pid, pval]) => {
        loadedPages[pid] = {
          id: pval.id || pid,
          name: pval.name || 'Sub Page',
          slug: pval.slug || pid,
          sections: processSections(pval.sections || []),
        };
      });
    }

    set({
      landingSections: loadedLanding,
      sections: loadedLanding,
      pages: loadedPages,
      currentPageId: 'landing',
      currentPreviewPageId: 'landing',
      history: [JSON.parse(JSON.stringify(loadedLanding))],
      historyIndex: 0,
      selectedSectionId: null,
      selectedComponentId: null,
    });
  },

  switchPreviewPage: (pageId) => {
    set({ currentPreviewPageId: pageId });
  },

  // Multi-page management actions
  addSubPage: (name, slug) => {
    const { sections, landingSections, pages, currentPageId } = get();
    // Save current active sections first
    const activeLanding = currentPageId === 'landing' ? sections : landingSections;
    const activePages = { ...pages };
    if (currentPageId !== 'landing' && activePages[currentPageId]) {
      activePages[currentPageId] = { ...activePages[currentPageId], sections };
    }

    const pageId = `page-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;
    const pageSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Default initial section for new subpage (hero or content section)
    const defaultSec = createEmptySection('hero', getDefaultLayout('hero'), 0);
    const defaultComps = getLayoutDefaults('hero');
    if (defaultComps.length > 0) {
      defaultSec.components = defaultComps.map((c, ci) => ({
        ...c,
        id: `comp-${Date.now()}-${ci}-${Math.random().toString(36).substr(2, 6)}`
      }));
    }

    activePages[pageId] = {
      id: pageId,
      name: name || 'New Page',
      slug: pageSlug,
      sections: [defaultSec],
    };

    set({
      landingSections: activeLanding,
      pages: activePages,
      currentPageId: pageId,
      sections: [defaultSec],
      history: [JSON.parse(JSON.stringify([defaultSec]))],
      historyIndex: 0,
      selectedSectionId: defaultSec.id,
      selectedComponentId: null,
    });

    return pageId;
  },

  switchPage: (targetPageId) => {
    const { sections, landingSections, pages, currentPageId } = get();
    if (targetPageId === currentPageId) return;

    // Save current sections to current bucket
    const activeLanding = currentPageId === 'landing' ? sections : landingSections;
    const activePages = { ...pages };
    if (currentPageId === 'landing') {
      // landingSections updated
    } else if (activePages[currentPageId]) {
      activePages[currentPageId] = { ...activePages[currentPageId], sections };
    }

    let targetSections = [];
    if (targetPageId === 'landing') {
      targetSections = activeLanding;
    } else if (activePages[targetPageId]) {
      targetSections = activePages[targetPageId].sections || [];
    }

    set({
      landingSections: activeLanding,
      pages: activePages,
      currentPageId: targetPageId,
      sections: targetSections,
      history: [JSON.parse(JSON.stringify(targetSections))],
      historyIndex: 0,
      selectedSectionId: targetSections[0]?.id || null,
      selectedComponentId: null,
    });
  },

  deletePage: (pageId) => {
    const { pages, currentPageId } = get();
    const newPages = { ...pages };
    delete newPages[pageId];

    if (currentPageId === pageId) {
      // Switch back to landing page
      get().switchPage('landing');
    } else {
      set({ pages: newPages });
    }
  },

  addSection: (sectionType, layout = null) => {
    get().insertSectionAt(sectionType, layout, -1);
  },

  insertSectionAt: (sectionType, layout = null, targetIndex = -1) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const sectionLayout = layout || getDefaultLayout(sectionType);
    const newSection = createEmptySection(sectionType, sectionLayout, sections.length);

    // Seed section with default components from layout defaults registry (preserving childrenComponents)
    const normalizeComponent = (c, idx = 0) => {
      const normalized = {
        id: c.id || `comp-${Date.now()}-${idx}-${Math.random().toString(36).substr(2, 9)}`,
        type: c.type,
        props: c.props || {},
        position: c.position || { x: 0, y: 0, width: null, height: null, rotation: 0, scale: 1, zIndex: 1 },
        isLocked: false,
        isHidden: false,
      };
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        normalized.childrenComponents = c.childrenComponents.map((child, ci) =>
          normalizeComponent(child, ci)
        );
      }
      return normalized;
    };

    const defaultComponents = getLayoutDefaults(sectionLayout);
    if (defaultComponents.length > 0) {
      newSection.components = defaultComponents.map((c, ci) => normalizeComponent(c, ci));
    }

    const newSections = [...sections];
    if (targetIndex >= 0 && targetIndex <= newSections.length) {
      newSections.splice(targetIndex, 0, newSection);
    } else {
      newSections.push(newSection);
    }

    // Recalculate order indices
    const updatedSections = newSections.map((s, i) => ({ ...s, order: i }));

    set({ sections: updatedSections, selectedSectionId: newSection.id, selectedComponentId: null });
  },

  removeSection: (sectionId) => {
    const { sections, selectedSectionId, saveToHistory } = get();
    saveToHistory();

    const newSections = sections
      .filter(s => s.id !== sectionId)
      .map((s, i) => ({ ...s, order: i }));

    set({
      sections: newSections,
      selectedSectionId: selectedSectionId === sectionId ? null : selectedSectionId,
      selectedComponentId: null,
    });
  },

  changeSectionLayout: (sectionId, newLayout) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newSections = sections.map(s =>
      s.id === sectionId ? { ...s, layout: newLayout } : s
    );

    set({ sections: newSections });
  },

  reorderSections: (newSections) => {
    const { saveToHistory } = get();
    saveToHistory();
    set({ sections: newSections });
  },

  selectSection: (sectionId) => {
    set({ selectedSectionId: sectionId, selectedComponentId: null, selectedProperty: null, selectedLayers: [sectionId] });
  },

  addComponent: (sectionId, componentType) => {
    get().insertComponentAt(sectionId, componentType, -1);
  },

  insertComponentAt: (sectionId, componentType, targetIndex = -1, parentComponentId = null, initialProps = null) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newComponent = createEmptyComponent(componentType);
    if (initialProps) {
      newComponent.props = { ...newComponent.props, ...initialProps };
    }

    const insertIntoTree = (comps) => {
      if (parentComponentId) {
        return comps.map(c => {
          if (c.id === parentComponentId) {
            const currentChildren = Array.isArray(c.childrenComponents) ? [...c.childrenComponents] : [];
            if (targetIndex >= 0 && targetIndex <= currentChildren.length) {
              currentChildren.splice(targetIndex, 0, newComponent);
            } else {
              currentChildren.push(newComponent);
            }
            return { ...c, childrenComponents: currentChildren };
          }
          if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
            return { ...c, childrenComponents: insertIntoTree(c.childrenComponents) };
          }
          return c;
        });
      } else {
        const copy = [...comps];
        if (targetIndex >= 0 && targetIndex <= copy.length) {
          copy.splice(targetIndex, 0, newComponent);
        } else {
          copy.push(newComponent);
        }
        return copy;
      }
    };

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return {
          ...s,
          components: insertIntoTree(s.components || []),
        };
      }
      return s;
    });

    set({ sections: newSections, selectedComponentId: newComponent.id, selectedSectionId: sectionId });
  },

  moveComponent: (sourceSectionId, targetSectionId, componentId, targetIndex = -1, targetParentCompId = null) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    // 1. Find and extract the component from the source section
    let extractedComponent = null;

    const extractFromTree = (comps) => {
      const remaining = [];
      for (const c of comps) {
        if (c.id === componentId) {
          extractedComponent = c;
        } else {
          let updatedChild = c;
          if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
            updatedChild = { ...c, childrenComponents: extractFromTree(c.childrenComponents) };
          }
          remaining.push(updatedChild);
        }
      }
      return remaining;
    };

    const sectionsWithoutComp = sections.map(s => {
      if (s.id === sourceSectionId) {
        return { ...s, components: extractFromTree(s.components || []) };
      }
      return s;
    });

    if (!extractedComponent) return; // Component not found

    // 2. Insert into target section at targetIndex or inside targetParentCompId
    const insertIntoTree = (comps) => {
      if (targetParentCompId) {
        return comps.map(c => {
          if (c.id === targetParentCompId) {
            const currentChildren = Array.isArray(c.childrenComponents) ? [...c.childrenComponents] : [];
            if (targetIndex >= 0 && targetIndex <= currentChildren.length) {
              currentChildren.splice(targetIndex, 0, extractedComponent);
            } else {
              currentChildren.push(extractedComponent);
            }
            return { ...c, childrenComponents: currentChildren };
          }
          if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
            return { ...c, childrenComponents: insertIntoTree(c.childrenComponents) };
          }
          return c;
        });
      } else {
        const copy = [...comps];
        if (targetIndex >= 0 && targetIndex <= copy.length) {
          copy.splice(targetIndex, 0, extractedComponent);
        } else {
          copy.push(extractedComponent);
        }
        return copy;
      }
    };

    const newSections = sectionsWithoutComp.map(s => {
      if (s.id === targetSectionId) {
        return {
          ...s,
          components: insertIntoTree(s.components || []),
        };
      }
      return s;
    });

    set({ sections: newSections, selectedComponentId: extractedComponent.id, selectedSectionId: targetSectionId });
  },

  removeComponent: (sectionId, componentId) => {
    const { sections, selectedComponentId, saveToHistory } = get();

    // Refuse to remove a locked component (definitive guard)
    const findInTree = (comps) => {
      for (const c of comps) {
        if (c.id === componentId) return c;
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          const found = findInTree(c.childrenComponents);
          if (found) return found;
        }
      }
      return null;
    };
    const targetSection = sections.find(s => s.id === sectionId);
    const targetComponent = targetSection ? findInTree(targetSection.components || []) : null;
    if (targetComponent?.isLocked) return; // 🔒 cannot delete locked component

    saveToHistory();

    const removeFromTree = (comps) => comps
      .filter(c => c.id !== componentId)
      .map(c => {
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          return { ...c, childrenComponents: removeFromTree(c.childrenComponents) };
        }
        return c;
      });

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: removeFromTree(s.components) };
      }
      return s;
    });

    set({
      sections: newSections,
      selectedComponentId: selectedComponentId === componentId ? null : selectedComponentId,
    });
  },

  updateComponentPosition: (sectionId, componentId, x, y, zIndex) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const updateInTree = (comps) => comps.map(c => {
      if (c.id === componentId) {
        return {
          ...c,
          position: {
            ...c.position,
            ...(x !== undefined ? { x } : {}),
            ...(y !== undefined ? { y } : {}),
            ...(zIndex !== undefined ? { zIndex } : {}),
          }
        };
      }
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        return { ...c, childrenComponents: updateInTree(c.childrenComponents) };
      }
      return c;
    });

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: updateInTree(s.components) };
      }
      return s;
    });

    set({ sections: newSections });
  },

  updateComponentSize: (sectionId, componentId, width, height) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const updateInTree = (comps) => comps.map(c => {
      if (c.id === componentId) {
        return {
          ...c,
          position: {
            ...c.position,
            ...(width !== undefined ? { width } : {}),
            ...(height !== undefined ? { height } : {}),
          }
        };
      }
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        return { ...c, childrenComponents: updateInTree(c.childrenComponents) };
      }
      return c;
    });

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: updateInTree(s.components) };
      }
      return s;
    });

    set({ sections: newSections });
  },

  updateComponentProps: (sectionId, componentId, props, deviceView = null) => {
    const { sections } = get();

    const updateInTree = (comps) => comps.map(c => {
      if (c.id === componentId) {
        return { ...c, props: { ...c.props, ...props } };
      }
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        return { ...c, childrenComponents: updateInTree(c.childrenComponents) };
      }
      return c;
    });

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: updateInTree(s.components) };
      }
      return s;
    });

    set({ sections: newSections });
  },

  reorderComponents: (sectionId, newComponents) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: newComponents };
      }
      return s;
    });

    set({ sections: newSections });
  },

  updateSectionStyles: (sectionId, styles) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, styles: { ...(s.styles || {}), ...styles } };
      }
      return s;
    });

    set({ sections: newSections });
  },

  updateSectionBackground: (sectionId, background) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, background };
      }
      return s;
    });

    set({ sections: newSections });
  },

  // Select a component within a section. Sets both selectedSectionId and
  // selectedComponentId so that Property Panel / inspector components can
  // correctly locate the selected component via the section → component tree.
  selectComponent: (componentId, sectionId) => {
    set((state) => ({
      selectedComponentId: componentId,
      selectedSectionId: sectionId !== undefined ? sectionId : state.selectedSectionId,
      selectedProperty: null,
    }));
  },

  setHoveredComponent: (componentId) => {
    set({ hoveredComponent: componentId });
  },

  setSelectedProperty: (property) => {
    set({ selectedProperty: property });
  },

  copyComponent: (sectionId, componentId) => {
    const { sections } = get();
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const targetComp = findComponentInTree(section.components, componentId);
    if (targetComp) {
      set({ clipboard: JSON.parse(JSON.stringify(targetComp)) });
    }
  },

  pasteComponent: (sectionId, targetParentComponentId = null) => {
    const { sections, clipboard, saveToHistory } = get();
    if (!clipboard) return;
    saveToHistory();

    const newComponent = cloneComponentWithNewIds(clipboard);

    const insertIntoTree = (comps) => {
      if (targetParentComponentId) {
        return comps.map(c => {
          if (c.id === targetParentComponentId) {
            const currentChildren = Array.isArray(c.childrenComponents) ? [...c.childrenComponents] : [];
            currentChildren.push(newComponent);
            return { ...c, childrenComponents: currentChildren };
          }
          if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
            return { ...c, childrenComponents: insertIntoTree(c.childrenComponents) };
          }
          return c;
        });
      } else {
        return [...comps, newComponent];
      }
    };

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return {
          ...s,
          components: insertIntoTree(s.components || []),
        };
      }
      return s;
    });

    set({ sections: newSections, selectedComponentId: newComponent.id, selectedSectionId: sectionId });
  },

  duplicateComponent: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const targetComp = findComponentInTree(section.components, componentId);
    if (!targetComp) return;

    const newComponent = cloneComponentWithNewIds(targetComp);

    const insertAfterInTree = (comps) => {
      let result = [];
      for (const c of comps) {
        let updatedC = c;
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          updatedC = { ...c, childrenComponents: insertAfterInTree(c.childrenComponents) };
        }
        result.push(updatedC);
        if (c.id === componentId) {
          result.push(newComponent);
        }
      }
      return result;
    };

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return {
          ...s,
          components: insertAfterInTree(s.components || []),
        };
      }
      return s;
    });

    set({ sections: newSections, selectedComponentId: newComponent.id, selectedSectionId: sectionId });
  },

  duplicateSection: (sectionId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const clonedSection = JSON.parse(JSON.stringify(section));
    clonedSection.id = `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    clonedSection.order = sections.length;
    clonedSection.components = (clonedSection.components || []).map(c => cloneComponentWithNewIds(c));

    const sectionIndex = sections.findIndex(s => s.id === sectionId);
    const newSections = [...sections];
    newSections.splice(sectionIndex + 1, 0, clonedSection);

    const reordered = newSections.map((s, i) => ({ ...s, order: i }));

    set({ sections: reordered, selectedSectionId: clonedSection.id });
  },

  bringForward: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const reorderInTree = (comps) => {
      const idx = comps.findIndex(c => c.id === componentId);
      if (idx !== -1 && idx < comps.length - 1) {
        const copy = [...comps];
        [copy[idx], copy[idx + 1]] = [copy[idx + 1], copy[idx]];
        return copy;
      }
      return comps.map(c => {
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          return { ...c, childrenComponents: reorderInTree(c.childrenComponents) };
        }
        return c;
      });
    };

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: reorderInTree(s.components || []) };
      }
      return s;
    });

    set({ sections: newSections });
  },

  sendBackward: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const reorderInTree = (comps) => {
      const idx = comps.findIndex(c => c.id === componentId);
      if (idx > 0) {
        const copy = [...comps];
        [copy[idx], copy[idx - 1]] = [copy[idx - 1], copy[idx]];
        return copy;
      }
      return comps.map(c => {
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          return { ...c, childrenComponents: reorderInTree(c.childrenComponents) };
        }
        return c;
      });
    };

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: reorderInTree(s.components || []) };
      }
      return s;
    });

    set({ sections: newSections });
  },

  bringToFront: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const reorderInTree = (comps) => {
      const idx = comps.findIndex(c => c.id === componentId);
      if (idx !== -1 && idx < comps.length - 1) {
        const copy = [...comps];
        const [target] = copy.splice(idx, 1);
        copy.push(target);
        return copy;
      }
      return comps.map(c => {
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          return { ...c, childrenComponents: reorderInTree(c.childrenComponents) };
        }
        return c;
      });
    };

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: reorderInTree(s.components || []) };
      }
      return s;
    });

    set({ sections: newSections });
  },

  sendToBack: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const reorderInTree = (comps) => {
      const idx = comps.findIndex(c => c.id === componentId);
      if (idx > 0) {
        const copy = [...comps];
        const [target] = copy.splice(idx, 1);
        copy.unshift(target);
        return copy;
      }
      return comps.map(c => {
        if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
          return { ...c, childrenComponents: reorderInTree(c.childrenComponents) };
        }
        return c;
      });
    };

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: reorderInTree(s.components || []) };
      }
      return s;
    });

    set({ sections: newSections });
  },

  groupComponents: (sectionId, componentIds) => {
    const { sections, saveToHistory } = get();
    if (!Array.isArray(componentIds) || componentIds.length < 2) return;
    saveToHistory();

    const groupId = `group-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const updateInTree = (comps) => comps.map(c => {
      let updated = c;
      if (componentIds.includes(c.id)) {
        updated = {
          ...c,
          position: { ...c.position, groupId }
        };
      }
      if (Array.isArray(updated.childrenComponents) && updated.childrenComponents.length > 0) {
        updated.childrenComponents = updateInTree(updated.childrenComponents);
      }
      return updated;
    });

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: updateInTree(s.components) };
      }
      return s;
    });

    set({ sections: newSections, selectedLayers: [] });
  },

  ungroupComponents: (sectionId, groupId) => {
    const { sections, saveToHistory } = get();
    if (!groupId) return;
    saveToHistory();

    const updateInTree = (comps) => comps.map(c => {
      let updated = c;
      if (c.position?.groupId === groupId) {
        const newPos = { ...c.position };
        delete newPos.groupId;
        updated = { ...c, position: newPos };
      }
      if (Array.isArray(updated.childrenComponents) && updated.childrenComponents.length > 0) {
        updated.childrenComponents = updateInTree(updated.childrenComponents);
      }
      return updated;
    });

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, components: updateInTree(s.components) };
      }
      return s;
    });

    set({ sections: newSections });
  },

  multiSelectComponents: (sectionId, componentIds) => {
    set({ selectedLayers: componentIds, selectedSectionId: sectionId });
  },

  undo: () => {
    const { history, historyIndex, sections } = get();
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      set({
        historyIndex: newIndex,
        sections: JSON.parse(JSON.stringify(history[newIndex])),
        selectedSectionId: null,
        selectedComponentId: null,
        selectedProperty: null,
      });
    }
  },

  redo: () => {
    const { history, historyIndex, sections } = get();
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      set({
        historyIndex: newIndex,
        sections: JSON.parse(JSON.stringify(history[newIndex])),
        selectedSectionId: null,
        selectedComponentId: null,
        selectedProperty: null,
      });
    }
  },

  saveToHistory: () => {
    const { sections, history, historyIndex } = get();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(sections)));

    if (newHistory.length > 50) {
      newHistory.shift();
    }

    set({
      history: newHistory,
      historyIndex: newHistory.length - 1,
    });
  },

  setDeviceView: (deviceView) => {
    set({ deviceView });
  },

  togglePreviewMode: () => {
    set(state => ({ isPreviewMode: !state.isPreviewMode }));
  },

  setIsPreviewMode: (isPreviewMode) => {
    set({ isPreviewMode });
  },

  setStatus: (status) => {
    set({ status });
  },

  setIsSaving: (isSaving) => {
    set({ isSaving });
  },

  resetBuilder: () => {
    set({
      status: 'draft',
      deviceView: 'desktop',
      selectedSectionId: null,
      selectedComponentId: null,
      selectedProperty: null,
      hoveredComponent: null,
      clipboard: null,
      selectedLayers: [],
      industryId: null,
      industrySlug: null,
      industryName: null,
      templateId: null,
      templateName: '',
      sections: [],
      history: [[]],
      historyIndex: 0,
      isPreviewMode: false,
      isSaving: false,
      builderMode: 'select',
      isLeftPanelOpen: true,
      isRightPanelOpen: true,
    });
  },
}));

// Realtime sync broadcast channel for Builder -> Preview tab
let broadcastChannel = null;
if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
  try {
    broadcastChannel = new BroadcastChannel('datasoft_builder_sync');
  } catch (e) {
    console.error('BroadcastChannel initialization error:', e);
  }
}

export const broadcastBuilderState = (state) => {
  const payload = {
    sections: state.sections,
    pages: state.pages,
    templateName: state.templateName,
    industryName: state.industryName,
    industrySlug: state.industrySlug,
    status: state.status,
    templateId: state.templateId,
    timestamp: Date.now(),
  };

  try {
    localStorage.setItem('template_builder_preview_data', JSON.stringify(payload));
  } catch (e) {
    // Ignore quota errors
  }

  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage(payload);
    } catch (err) {
      console.warn('BroadcastChannel error:', err);
    }
  }
};

// Automatically broadcast on store changes
useBuilderStore.subscribe((state, previousState) => {
  if (
    state.sections !== previousState.sections ||
    state.pages !== previousState.pages ||
    state.templateName !== previousState.templateName ||
    state.status !== previousState.status
  ) {
    broadcastBuilderState(state);
  }
});
