import { create } from 'zustand';
import { createEmptySection, createEmptyComponent } from '../types';
import { getDefaultLayout } from '../utils/layoutRegistry';

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

  // Actions
  setIndustry: (industryId, industrySlug, industryName) => {
    set({ industryId, industrySlug, industryName, sections: [], selectedSectionId: null, selectedComponentId: null, selectedProperty: null, selectedLayers: [] });
  },

  setTemplateId: (templateId) => {
    set({ templateId });
  },

  setTemplateName: (templateName) => {
    set({ templateName });
  },

  addSection: (sectionType, layout = null) => {
    const { sections, saveToHistory } = get();
    saveToHistory();

    const sectionLayout = layout || getDefaultLayout(sectionType);
    const newSection = createEmptySection(sectionType, sectionLayout, sections.length);

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
    saveToHistory();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return {
          ...s,
          components: s.components.filter(c => c.id !== componentId),
        };
      }
      return s;
    });

    set({
      sections: newSections,
      selectedComponentId: selectedComponentId === componentId ? null : selectedComponentId,
    });
  },

  updateComponentProps: (sectionId, componentId, props) => {
    const { sections } = get();

    const newSections = sections.map(s => {
      if (s.id === sectionId) {
        return {
          ...s,
          components: s.components.map(c =>
            c.id === componentId ? { ...c, props: { ...c.props, ...props } } : c
          ),
        };
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
    });
  },
}));
