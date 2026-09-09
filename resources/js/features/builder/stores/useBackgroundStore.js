import { create } from 'zustand';

export const defaultBackgroundConfig = {
  type: 'none',
  color: { hex: '#ffffff', opacity: 100 },
  gradient: { type: 'linear', angle: 90, stops: [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }] },
  image: { url: '', position: 'center', size: 'cover', repeat: 'no-repeat', attachment: 'scroll' },
  video: { url: '', autoplay: true, loop: true, muted: true },
  overlay: { color: '#000000', opacity: 0, blendMode: 'normal' },
  filters: { blur: 0, brightness: 100, contrast: 100, grayscale: 0, sepia: 0, saturate: 100 },
  animation: { enabled: false, type: 'none', duration: 5000 },
};

const mergeConfig = (existing) => {
  if (!existing || typeof existing !== 'object') {
    return JSON.parse(JSON.stringify(defaultBackgroundConfig));
  }
  return {
    ...defaultBackgroundConfig,
    ...existing,
    color: { ...defaultBackgroundConfig.color, ...(existing.color || {}) },
    gradient: {
      ...defaultBackgroundConfig.gradient,
      ...(existing.gradient || {}),
      stops: existing.gradient?.stops && existing.gradient.stops.length >= 2
        ? existing.gradient.stops
        : defaultBackgroundConfig.gradient.stops,
    },
    image: { ...defaultBackgroundConfig.image, ...(existing.image || {}) },
    video: { ...defaultBackgroundConfig.video, ...(existing.video || {}) },
    overlay: { ...defaultBackgroundConfig.overlay, ...(existing.overlay || {}) },
    filters: { ...defaultBackgroundConfig.filters, ...(existing.filters || {}) },
    animation: { ...defaultBackgroundConfig.animation, ...(existing.animation || {}) },
  };
};

export const useBackgroundStore = create((set, get) => ({
  backgrounds: {}, // Map of sectionId -> backgroundConfig
  backgroundConfig: JSON.parse(JSON.stringify(defaultBackgroundConfig)),
  currentSection: null,
  isOpen: false,

  openEditor: (sectionId, existingConfig = null) => set((state) => ({
    currentSection: sectionId,
    isOpen: true,
    backgroundConfig: mergeConfig(existingConfig || state.backgrounds[sectionId]),
  })),

  closeEditor: () => set({ isOpen: false, currentSection: null }),

  updateConfig: (updater) => set((state) => {
    const updated = typeof updater === 'function' ? updater(state.backgroundConfig) : { ...state.backgroundConfig, ...updater };
    return {
      backgroundConfig: mergeConfig(updated),
    };
  }),

  setBackground: (sectionId, config) => set((state) => ({
    backgrounds: { ...state.backgrounds, [sectionId]: config }
  })),

  resetConfig: () => set({
    backgroundConfig: JSON.parse(JSON.stringify(defaultBackgroundConfig))
  })
}));

