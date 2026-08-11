// Component Registry
// Defines all available UI components and their properties

export const COMPONENT_REGISTRY = {
  text: {
    type: 'text',
    label: 'Text',
    icon: 'Type',
    category: 'text',
    editable: true,
    draggable: true,
    resizable: true,
    props: {
      content: {
        type: 'string',
        label: 'Content',
        default: '',
      },
      fontFamily: {
        type: 'select',
        label: 'Font Family',
        default: 'sans-serif',
        options: ['sans-serif', 'serif', 'monospace'],
      },
      fontSize: {
        type: 'string',
        label: 'Font Size',
        default: '16px',
      },
      fontWeight: {
        type: 'select',
        label: 'Font Weight',
        default: '400',
        options: ['300', '400', '500', '600', '700', '800'],
      },
      color: {
        type: 'color',
        label: 'Color',
        default: '#000000',
      },
      lineHeight: {
        type: 'string',
        label: 'Line Height',
        default: '1.5',
      },
      letterSpacing: {
        type: 'string',
        label: 'Letter Spacing',
        default: 'normal',
      },
      align: {
        type: 'select',
        label: 'Alignment',
        default: 'left',
        options: ['left', 'center', 'right', 'justify'],
      },
      margin: {
        type: 'string',
        label: 'Margin',
        default: '0',
      },
      padding: {
        type: 'string',
        label: 'Padding',
        default: '0',
      },
    },
  },

  heading: {
    type: 'heading',
    label: 'Heading',
    icon: 'Heading',
    category: 'text',
    editable: true,
    draggable: true,
    resizable: true,
    props: {
      content: {
        type: 'string',
        label: 'Content',
        default: 'Heading',
      },
      level: {
        type: 'select',
        label: 'Level',
        default: 'h1',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      fontFamily: {
        type: 'select',
        label: 'Font Family',
        default: 'sans-serif',
        options: ['sans-serif', 'serif', 'monospace'],
      },
      fontSize: {
        type: 'string',
        label: 'Font Size',
        default: '32px',
      },
      fontWeight: {
        type: 'select',
        label: 'Font Weight',
        default: '700',
        options: ['400', '500', '600', '700', '800'],
      },
      color: {
        type: 'color',
        label: 'Color',
        default: '#000000',
      },
      align: {
        type: 'select',
        label: 'Alignment',
        default: 'left',
        options: ['left', 'center', 'right'],
      },
      margin: {
        type: 'string',
        label: 'Margin',
        default: '0',
      },
      padding: {
        type: 'string',
        label: 'Padding',
        default: '0',
      },
    },
  },

  button: {
    type: 'button',
    label: 'Button',
    icon: 'MousePointer',
    category: 'interactive',
    editable: true,
    draggable: true,
    resizable: true,
    props: {
      label: {
        type: 'string',
        label: 'Label',
        default: 'Button',
      },
      href: {
        type: 'string',
        label: 'Link',
        default: '#',
      },
      variant: {
        type: 'select',
        label: 'Variant',
        default: 'primary',
        options: ['primary', 'secondary', 'outline', 'ghost'],
      },
      size: {
        type: 'select',
        label: 'Size',
        default: 'medium',
        options: ['small', 'medium', 'large'],
      },
      radius: {
        type: 'select',
        label: 'Radius',
        default: 'md',
        options: ['none', 'sm', 'md', 'lg', 'full'],
      },
      background: {
        type: 'color',
        label: 'Background',
        default: '#4f46e5',
      },
      color: {
        type: 'color',
        label: 'Text Color',
        default: '#ffffff',
      },
      shadow: {
        type: 'select',
        label: 'Shadow',
        default: 'md',
        options: ['none', 'sm', 'md', 'lg'],
      },
    },
  },

  image: {
    type: 'image',
    label: 'Image',
    icon: 'Image',
    category: 'media',
    editable: true,
    draggable: true,
    resizable: true,
    props: {
      src: {
        type: 'string',
        label: 'Image URL',
        default: '',
      },
      alt: {
        type: 'string',
        label: 'Alt Text',
        default: '',
      },
      width: {
        type: 'string',
        label: 'Width',
        default: '100%',
      },
      height: {
        type: 'string',
        label: 'Height',
        default: 'auto',
      },
      objectFit: {
        type: 'select',
        label: 'Object Fit',
        default: 'cover',
        options: ['cover', 'contain', 'fill', 'none'],
      },
      borderRadius: {
        type: 'string',
        label: 'Border Radius',
        default: '0',
      },
      shadow: {
        type: 'select',
        label: 'Shadow',
        default: 'none',
        options: ['none', 'sm', 'md', 'lg'],
      },
      opacity: {
        type: 'range',
        label: 'Opacity',
        default: 100,
        min: 0,
        max: 100,
      },
    },
  },

  badge: {
    type: 'badge',
    label: 'Badge',
    icon: 'Tag',
    category: 'display',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      content: {
        type: 'string',
        label: 'Content',
        default: 'Badge',
      },
      variant: {
        type: 'select',
        label: 'Variant',
        default: 'primary',
        options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      },
      size: {
        type: 'select',
        label: 'Size',
        default: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
  },

  statistic: {
    type: 'statistic',
    label: 'Statistic',
    icon: 'BarChart',
    category: 'display',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      value: {
        type: 'string',
        label: 'Value',
        default: '100+',
      },
      label: {
        type: 'string',
        label: 'Label',
        default: 'Statistic',
      },
    },
  },

  divider: {
    type: 'divider',
    label: 'Divider',
    icon: 'Minus',
    category: 'layout',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      thickness: {
        type: 'select',
        label: 'Thickness',
        default: '1px',
        options: ['1px', '2px', '3px', '4px'],
      },
      color: {
        type: 'color',
        label: 'Color',
        default: '#e5e7eb',
      },
      margin: {
        type: 'string',
        label: 'Margin',
        default: '16px 0',
      },
    },
  },

  social: {
    type: 'social',
    label: 'Social Links',
    icon: 'Share2',
    category: 'interactive',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      platforms: {
        type: 'array',
        label: 'Platforms',
        default: ['facebook', 'twitter', 'linkedin'],
      },
      size: {
        type: 'select',
        label: 'Size',
        default: 'medium',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export const getComponentConfig = (componentType) => {
  return COMPONENT_REGISTRY[componentType] || null;
};

export const getComponentCategories = () => {
  const categories = new Set();
  Object.values(COMPONENT_REGISTRY).forEach(comp => {
    categories.add(comp.category);
  });
  return Array.from(categories);
};
