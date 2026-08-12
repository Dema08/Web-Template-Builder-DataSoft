import { create } from 'zustand';
import { createEmptySection, createEmptyComponent } from '../types';
import { getDefaultLayout } from '../utils/layoutRegistry';
import { getLayoutDefaults } from '../utils/layoutDefaults';

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
  history: [[]],
  historyIndex: 0,
  isPreviewMode: false,
  isSaving: false,
  builderMode: 'select', // 'select' | 'drag' | 'resize'
  isLeftPanelOpen: true,
  isRightPanelOpen: true,

  // Actions
  setBuilderMode: (builderMode) => set({ builderMode }),
  toggleLeftPanel: () => set(state => ({ isLeftPanelOpen: !state.isLeftPanelOpen })),
  toggleRightPanel: () => set(state => ({ isRightPanelOpen: !state.isRightPanelOpen })),
  setLeftPanelOpen: (isOpen) => set({ isLeftPanelOpen: isOpen }),
  setRightPanelOpen: (isOpen) => set({ isRightPanelOpen: isOpen }),

  toggleLockComponent: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();
    const updateInTree = (comps) => comps.map(c => {
      if (c.id === componentId) return { ...c, isLocked: !c.isLocked };
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

  toggleLockSection: (sectionId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();
    const newSections = sections.map(s =>
      s.id === sectionId ? { ...s, isLocked: !s.isLocked } : s
    );
    set({ sections: newSections });
  },

  toggleVisibilityComponent: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();
    const updateInTree = (comps) => comps.map(c => {
      if (c.id === componentId) return { ...c, isHidden: !c.isHidden };
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
  setIndustry: (industryId, industrySlug, industryName) => {
    set({ industryId, industrySlug, industryName, sections: [], selectedSectionId: null, selectedComponentId: null, selectedProperty: null, selectedLayers: [] });
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

  loadSections: (sectionsData) => {
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

    const loadedSections = sectionsData.map((section, index) => {
      // If section has no components defined, fall back to layoutDefaults
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
        isLocked: section.isLocked || false,
        isHidden: section.isHidden || false,
      };
    });

    set({
      sections: loadedSections,
      history: [JSON.parse(JSON.stringify(loadedSections))],
      historyIndex: 0,
      selectedSectionId: null,
      selectedComponentId: null,
    });
  },

  addSection: (sectionType, layout = null) => {
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

    set({ sections: [...sections, newSection], selectedSectionId: newSection.id, selectedComponentId: null });
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
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newComponent = createEmptyComponent(componentType);

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return {
          ...s,
          components: [...s.components, newComponent],
        };
      }
      return s;
    });

    set({ sections: newSections, selectedComponentId: newComponent.id });
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

  updateComponentPosition: (sectionId, componentId, position, deviceView = null) => {
    const { sections } = get();
    const device = deviceView || get().deviceView;

    const updateInTree = (comps) => comps.map(c => {
      if (c.id === componentId) {
        const deviceOverrides = { ...(c.deviceOverrides || {}) };
        const currentDevice = deviceOverrides[device] || {};
        deviceOverrides[device] = { ...currentDevice, ...position };
        return { ...c, position: { ...c.position, ...position }, deviceOverrides };
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

  selectComponent: (componentId) => {
    set({ selectedComponentId: componentId, selectedProperty: null });
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
    const component = section?.components?.find(c => c.id === componentId);
    if (component) {
      set({ clipboard: { ...component, id: null } });
    }
  },

  pasteComponent: (sectionId) => {
    const { sections, clipboard, saveToHistory } = get();
    if (!clipboard) return;
    saveToHistory();

    const newComponent = {
      ...clipboard,
      id: `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return {
          ...s,
          components: [...s.components, newComponent],
        };
      }
      return s;
    });

    set({ sections: newSections, selectedComponentId: newComponent.id });
  },

  duplicateComponent: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const section = sections.find(s => s.id === sectionId);
    const component = section?.components?.find(c => c.id === componentId);
    if (!component) return;

    const newComponent = {
      ...component,
      id: `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return {
          ...s,
          components: [...s.components, newComponent],
        };
      }
      return s;
    });

    set({ sections: newSections, selectedComponentId: newComponent.id });
  },

  duplicateSection: (sectionId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const newSection = {
      ...section,
      id: `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      order: sections.length,
      components: section.components.map(c => ({
        ...c,
        id: `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      })),
    };

    set({ sections: [...sections, newSection], selectedSectionId: newSection.id });
  },

  bringForward: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        const index = s.components.findIndex(c => c.id === componentId);
        if (index < s.components.length - 1) {
          const newComponents = [...s.components];
          [newComponents[index], newComponents[index + 1]] = [newComponents[index + 1], newComponents[index]];
          return { ...s, components: newComponents };
        }
      }
      return s;
    });

    set({ sections: newSections });
  },

  sendBackward: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        const index = s.components.findIndex(c => c.id === componentId);
        if (index > 0) {
          const newComponents = [...s.components];
          [newComponents[index], newComponents[index - 1]] = [newComponents[index - 1], newComponents[index]];
          return { ...s, components: newComponents };
        }
      }
      return s;
    });

    set({ sections: newSections });
  },

  bringToFront: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        const index = s.components.findIndex(c => c.id === componentId);
        if (index < s.components.length - 1) {
          const newComponents = [...s.components];
          const [component] = newComponents.splice(index, 1);
          newComponents.push(component);
          return { ...s, components: newComponents };
        }
      }
      return s;
    });

    set({ sections: newSections });
  },

  sendToBack: (sectionId, componentId) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        const index = s.components.findIndex(c => c.id === componentId);
        if (index > 0) {
          const newComponents = [...s.components];
          const [component] = newComponents.splice(index, 1);
          newComponents.unshift(component);
          return { ...s, components: newComponents };
        }
      }
      return s;
    });

    set({ sections: newSections });
  },

  // Multi-select support
  toggleComponentSelection: (componentId) => {
    const { selectedLayers } = get();
    if (selectedLayers.includes(componentId)) {
      set({ selectedLayers: selectedLayers.filter(id => id !== componentId) });
    } else {
      set({ selectedLayers: [...selectedLayers, componentId] });
    }
  },

  clearSelection: () => {
    set({ selectedLayers: [], selectedComponentId: null, selectedSectionId: null });
  },

  groupSelectedComponents: (sectionId) => {
    const { sections, selectedLayers, saveToHistory } = get();
    if (selectedLayers.length < 2) return;
    saveToHistory();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        const selectedIds = new Set(selectedLayers);
        const selectedComponents = s.components.filter(c => selectedIds.has(c.id));
        const remainingComponents = s.components.filter(c => !selectedIds.has(c.id));

        const group = {
          id: `group-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          type: 'group',
          props: {},
          position: { x: 0, y: 0, width: null, height: null, rotation: 0, scale: 1, zIndex: 10 },
          children: selectedComponents,
        };

        return { ...s, components: [...remainingComponents, group] };
      }
      return s;
    });

    set({ sections: newSections, selectedLayers: [] });
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
