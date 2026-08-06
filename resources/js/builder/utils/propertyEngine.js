// Property Engine
// Registry-based property system for all components
// Each component type reads its own property registry

import { COMPONENT_REGISTRY } from './componentRegistry';

// Common property groups
export const PROPERTY_GROUPS = {
  content: {
    id: 'content',
    label: 'Content',
    icon: 'Type',
  },
  typography: {
    id: 'typography',
    label: 'Typography',
    icon: 'Font',
  },
  color: {
    id: 'color',
    label: 'Color',
    icon: 'Palette',
  },
  spacing: {
    id: 'spacing',
    label: 'Spacing',
    icon: 'Square',
  },
  animation: {
    id: 'animation',
    label: 'Animation',
    icon: 'Play',
  },
  shadow: {
    id: 'shadow',
    label: 'Shadow',
    icon: 'Sun',
  },
  transform: {
    id: 'transform',
    label: 'Transform',
    icon: 'Move',
  },
  border: {
    id: 'border',
    label: 'Border',
    icon: 'Frame',
  },
  size: {
    id: 'size',
    label: 'Size',
    icon: 'Maximize',
  },
  position: {
    id: 'position',
    label: 'Position',
    icon: 'Move',
  },
};

// Extended property definitions per component type
// These augment COMPONENT_REGISTRY with visual builder properties
export const PROPERTY_ENGINE = {
  heading: {
    groups: ['content', 'typography', 'color', 'spacing', 'animation', 'shadow', 'transform'],
    props: {
      ...COMPONENT_REGISTRY.heading.props,
      lineHeight: { type: 'string', label: 'Line Height', default: '1.5' },
      letterSpacing: { type: 'string', label: 'Letter Spacing', default: 'normal' },
      textTransform: {
        type: 'select',
        label: 'Text Transform',
        default: 'none',
        options: ['none', 'uppercase', 'lowercase', 'capitalize'],
      },
    },
  },

  text: {
    groups: ['content', 'typography', 'color', 'spacing', 'animation', 'shadow', 'transform'],
    props: COMPONENT_REGISTRY.text.props,
  },

  button: {
    groups: ['content', 'color', 'spacing', 'border', 'shadow', 'animation', 'transform', 'position'],
    props: {
      ...COMPONENT_REGISTRY.button.props,
      padding: { type: 'string', label: 'Padding', default: '0' },
      hoverBackground: { type: 'color', label: 'Hover Background', default: '#4338ca' },
      hoverColor: { type: 'color', label: 'Hover Text Color', default: '#ffffff' },
      icon: { type: 'string', label: 'Icon Name', default: '' },
    },
  },

  image: {
    groups: ['content', 'size', 'color', 'spacing', 'border', 'shadow', 'animation', 'transform', 'position'],
    props: {
      ...COMPONENT_REGISTRY.image.props,
      position: { type: 'string', label: 'Position', default: 'static' },
      border: { type: 'string', label: 'Border', default: 'none' },
    },
  },

  badge: {
    groups: ['content', 'color', 'spacing', 'animation', 'transform'],
    props: COMPONENT_REGISTRY.badge.props,
  },

  statistic: {
    groups: ['content', 'color', 'spacing', 'animation', 'transform'],
    props: COMPONENT_REGISTRY.statistic.props,
  },

  divider: {
    groups: ['content', 'color', 'spacing', 'animation', 'transform'],
    props: COMPONENT_REGISTRY.divider.props,
  },

  social: {
    groups: ['content', 'color', 'spacing', 'animation', 'transform'],
    props: COMPONENT_REGISTRY.social.props,
  },
};

// Get full property config for a component type
export const getPropertyConfig = (componentType) => {
  return PROPERTY_ENGINE[componentType] || null;
};

// Get all property keys for a component type
export const getPropertyKeys = (componentType) => {
  const config = getPropertyConfig(componentType);
  return config ? Object.keys(config.props) : [];
};

// Get the default values for a component type
export const getPropertyDefaults = (componentType) => {
  const config = getPropertyConfig(componentType);
  if (!config) return {};

  const defaults = {};
  Object.entries(config.props).forEach(([key, prop]) => {
    defaults[key] = prop.default;
  });
  return defaults;
};

// Get group info
export const getPropertyGroup = (group) => {
  const groupInfo = PROPERTY_GROUPS[group];
  return groupInfo || { id: group, label: group.charAt(0).toUpperCase() + group.slice(1), icon: 'Type' };
};