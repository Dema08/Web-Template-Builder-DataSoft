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
      background: {
        type: 'color',
        label: 'Background Color',
        default: '',
      },
      color: {
        type: 'color',
        label: 'Text Color',
        default: '',
      },
      fontSize: {
        type: 'string',
        label: 'Font Size',
        default: '',
      },
      fontWeight: {
        type: 'select',
        label: 'Font Weight',
        default: '600',
        options: ['400', '500', '600', '700', '800'],
      },
      padding: {
        type: 'string',
        label: 'Padding',
        default: '',
      },
      margin: {
        type: 'string',
        label: 'Margin',
        default: '',
      },
      radius: {
        type: 'select',
        label: 'Border Radius',
        default: 'full',
        options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      },
      shadow: {
        type: 'select',
        label: 'Shadow Effect',
        default: 'none',
        options: ['none', 'sm', 'md', 'lg', 'glow'],
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
      background: {
        type: 'color',
        label: 'Background Color',
        default: '',
      },
      color: {
        type: 'color',
        label: 'Value Text Color',
        default: '#4f46e5',
      },
      labelColor: {
        type: 'color',
        label: 'Label Text Color',
        default: '#64748b',
      },
      fontSize: {
        type: 'string',
        label: 'Value Font Size',
        default: '36px',
      },
      padding: {
        type: 'string',
        label: 'Padding',
        default: '16px',
      },
      margin: {
        type: 'string',
        label: 'Margin',
        default: '0px',
      },
      borderRadius: {
        type: 'string',
        label: 'Border Radius',
        default: '12px',
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

  icon: {
    type: 'icon',
    label: 'Icon',
    icon: 'Type',
    category: 'media',
    editable: true,
    draggable: true,
    resizable: true,
    props: {
      icon: {
        type: 'string',
        label: 'Icon Name',
        default: 'FaGlobe',
      },
      size: {
        type: 'string',
        label: 'Size',
        default: '32px',
      },
      color: {
        type: 'color',
        label: 'Icon Color',
        default: '#4f46e5',
      },
      background: {
        type: 'color',
        label: 'Background Color',
        default: '',
      },
      borderRadius: {
        type: 'string',
        label: 'Border Radius',
        default: '',
      },
      padding: {
        type: 'string',
        label: 'Padding',
        default: '0',
      },
      margin: {
        type: 'string',
        label: 'Margin',
        default: '0',
      },
      align: {
        type: 'select',
        label: 'Alignment',
        default: 'center',
        options: ['left', 'center', 'right'],
      },
    },
  },

  card: {
    type: 'card',
    label: 'Card',
    icon: 'Layout',
    category: 'container',
    editable: true,
    draggable: true,
    resizable: true,
    props: {
      variant: {
        type: 'select',
        label: 'Card Variant',
        default: 'service',
        options: ['service', 'feature', 'team', 'testimonial', 'pricing', 'product', 'default'],
      },
      background: {
        type: 'color',
        label: 'Background Color',
        default: '#ffffff',
      },
      backgroundGradient: {
        type: 'string',
        label: 'Background Gradient (CSS)',
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
      minHeight: {
        type: 'string',
        label: 'Min Height',
        default: 'auto',
      },
      maxWidth: {
        type: 'string',
        label: 'Max Width',
        default: 'none',
      },
      padding: {
        type: 'string',
        label: 'Padding',
        default: '24px',
      },
      margin: {
        type: 'string',
        label: 'Margin',
        default: '0px',
      },
      borderRadius: {
        type: 'string',
        label: 'Border Radius',
        default: '16px',
      },
      borderWidth: {
        type: 'string',
        label: 'Border Width',
        default: '1px',
      },
      borderStyle: {
        type: 'select',
        label: 'Border Style',
        default: 'solid',
        options: ['solid', 'dashed', 'dotted', 'none'],
      },
      borderColor: {
        type: 'color',
        label: 'Border Color',
        default: '#e2e8f0',
      },
      shadow: {
        type: 'select',
        label: 'Shadow Effect',
        default: 'md',
        options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
      },
      hoverEffect: {
        type: 'select',
        label: 'Hover Animation',
        default: 'lift',
        options: ['none', 'lift', 'scale', 'glow', 'border'],
      },
      opacity: {
        type: 'range',
        label: 'Opacity',
        default: 100,
        min: 0,
        max: 100,
      },
      alignItems: {
        type: 'select',
        label: 'Align Items',
        default: 'stretch',
        options: ['stretch', 'flex-start', 'center', 'flex-end'],
      },
      justifyContent: {
        type: 'select',
        label: 'Justify Content',
        default: 'flex-start',
        options: ['flex-start', 'center', 'flex-end', 'space-between'],
      },
      gap: {
        type: 'string',
        label: 'Content Gap',
        default: '0px',
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
