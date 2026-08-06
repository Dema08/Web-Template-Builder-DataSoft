export const DeviceView = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

export const BuilderStatus = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
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
});

export const createEmptyComponent = (componentType) => ({
  id: generateComponentId(),
  type: componentType,
  props: {},
});
