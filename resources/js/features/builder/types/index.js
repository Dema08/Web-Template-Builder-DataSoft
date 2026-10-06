export const DeviceView = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

export const BuilderStatus = {
  DRAFT: 'draft',
  PUBLISHED: 'dipublikasikan',
  ARCHIVED: 'archived',
};

export const generateSectionId = () => `section-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const generateComponentId = () => `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const createEmptySection = (type, layout, order) => ({
  id: generateSectionId(),
  type,
  layout,
  components: [],
  order,
  background: null,
  styles: {},
  isLocked: false,
  isHidden: false,
});

export const createEmptyComponent = (componentType, index = 0) => ({
  id: generateComponentId(),
  type: componentType,
  props: {},
  // Position properties for visual builder
  position: {
    x: 30,
    y: 30 + index * 15,
    isAbsolute: true,
    width: null,
    height: null,
    rotation: 0,
    scale: 1,
    zIndex: 10 + index,
    locked: false,
    hidden: false,
    groupId: null,
  },
});