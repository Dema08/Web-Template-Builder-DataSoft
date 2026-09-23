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
  video: {
    type: 'video',
    label: 'Video',
    icon: 'Video',
    category: 'media',
    editable: true,
    draggable: true,
    resizable: true,
    props: {
      src: { type: 'string', label: 'Video URL', default: '' },
      youtubeId: { type: 'string', label: 'YouTube Video ID', default: '' },
      poster: { type: 'string', label: 'Poster Image URL', default: '' },
      height: { type: 'string', label: 'Height', default: '240px' },
      autoPlay: { type: 'boolean', label: 'Auto Play', default: false },
      muted: { type: 'boolean', label: 'Muted', default: true },
      loop: { type: 'boolean', label: 'Loop', default: false },
      controls: { type: 'boolean', label: 'Show Controls', default: true },
      borderRadius: { type: 'string', label: 'Border Radius', default: '8px' },
      margin: { type: 'string', label: 'Margin', default: '0' },
    },
  },

  accordion: {
    type: 'accordion',
    label: 'Accordion',
    icon: 'HelpCircle',
    category: 'interactive',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      allowMultiple: { type: 'boolean', label: 'Allow Multiple Open', default: false },
      variant: { type: 'select', label: 'Variant', default: 'default', options: ['default', 'filled', 'minimal'] },
      gap: { type: 'string', label: 'Gap', default: '8px' },
      borderRadius: { type: 'string', label: 'Border Radius', default: '8px' },
      margin: { type: 'string', label: 'Margin', default: '0' },
    },
  },

  gallery: {
    type: 'gallery',
    label: 'Gallery',
    icon: 'Grid',
    category: 'media',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      columns: { type: 'select', label: 'Columns', default: 3, options: [1, 2, 3, 4, 5, 6] },
      gap: { type: 'string', label: 'Gap', default: '12px' },
      borderRadius: { type: 'string', label: 'Border Radius', default: '8px' },
      aspectRatio: { type: 'select', label: 'Aspect Ratio', default: '1/1', options: ['1/1', '4/3', '16/9', '3/2', '2/3'] },
      margin: { type: 'string', label: 'Margin', default: '0' },
    },
  },

  map: {
    type: 'map',
    label: 'Map',
    icon: 'MapPin',
    category: 'content',
    editable: true,
    draggable: true,
    resizable: true,
    props: {
      address: { type: 'string', label: 'Location Address', default: 'Jakarta, Indonesia' },
      embedUrl: { type: 'string', label: 'Custom Embed URL', default: '' },
      height: { type: 'string', label: 'Height', default: '300px' },
      borderRadius: { type: 'string', label: 'Border Radius', default: '8px' },
      showLabel: { type: 'boolean', label: 'Show Address Label', default: true },
      margin: { type: 'string', label: 'Margin', default: '0' },
    },
  },

  form: {
    type: 'form',
    label: 'Form',
    icon: 'FormInput',
    category: 'interactive',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      submitLabel: { type: 'string', label: 'Submit Button Label', default: 'Send Message' },
      submitBackground: { type: 'color', label: 'Submit Button Color', default: '#4f46e5' },
      submitColor: { type: 'color', label: 'Submit Text Color', default: '#ffffff' },
      borderRadius: { type: 'string', label: 'Button Radius', default: '8px' },
      gap: { type: 'string', label: 'Field Gap', default: '14px' },
      margin: { type: 'string', label: 'Margin', default: '0' },
    },
  },

  counter: {
    type: 'counter',
    label: 'Counter',
    icon: 'Calculator',
    category: 'data',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      value: { type: 'string', label: 'Number Value', default: '1250' },
      suffix: { type: 'string', label: 'Suffix', default: '+' },
      prefix: { type: 'string', label: 'Prefix', default: '' },
      label: { type: 'string', label: 'Label', default: 'Happy Customers' },
      duration: { type: 'string', label: 'Animation Duration (ms)', default: '2000' },
      color: { type: 'color', label: 'Number Color', default: '#4f46e5' },
      fontSize: { type: 'string', label: 'Font Size', default: '48px' },
      fontWeight: { type: 'select', label: 'Font Weight', default: '900', options: ['400', '500', '600', '700', '800', '900'] },
      align: { type: 'select', label: 'Alignment', default: 'center', options: ['left', 'center', 'right'] },
      margin: { type: 'string', label: 'Margin', default: '0' },
    },
  },

  progress: {
    type: 'progress',
    label: 'Progress',
    icon: 'BarChart2',
    category: 'data',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      label: { type: 'string', label: 'Label', default: 'Progress' },
      value: { type: 'string', label: 'Value (0-100)', default: '75' },
      max: { type: 'string', label: 'Max Value', default: '100' },
      showValue: { type: 'boolean', label: 'Show Percentage', default: true },
      color: { type: 'color', label: 'Bar Color', default: '#4f46e5' },
      trackColor: { type: 'color', label: 'Track Color', default: '#e2e8f0' },
      height: { type: 'string', label: 'Bar Height', default: '10px' },
      borderRadius: { type: 'string', label: 'Border Radius', default: '999px' },
      variant: { type: 'select', label: 'Variant', default: 'default', options: ['default', 'gradient', 'success', 'warning', 'danger'] },
      margin: { type: 'string', label: 'Margin', default: '0' },
    },
  },

  testimonial: {
    type: 'testimonial',
    label: 'Testimonial',
    icon: 'MessageSquare',
    category: 'content',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      quote: { type: 'string', label: 'Quote', default: 'This product has completely transformed the way our team works. Absolutely phenomenal!' },
      author: { type: 'string', label: 'Author Name', default: 'Sarah Johnson' },
      role: { type: 'string', label: 'Author Role', default: 'CEO, TechCorp' },
      avatar: { type: 'string', label: 'Avatar URL', default: '' },
      rating: { type: 'select', label: 'Star Rating', default: 5, options: [0, 1, 2, 3, 4, 5] },
      variant: { type: 'select', label: 'Variant', default: 'card', options: ['card', 'minimal', 'dark'] },
      background: { type: 'color', label: 'Background', default: '#ffffff' },
      accentColor: { type: 'color', label: 'Accent Color', default: '#4f46e5' },
      borderRadius: { type: 'string', label: 'Border Radius', default: '12px' },
      margin: { type: 'string', label: 'Margin', default: '0' },
    },
  },

  'faq-item': {
    type: 'faq-item',
    label: 'FAQ Item',
    icon: 'HelpCircle',
    category: 'content',
    editable: true,
    draggable: true,
    resizable: false,
    props: {
      question: { type: 'string', label: 'Question', default: 'What is your return policy?' },
      answer: { type: 'string', label: 'Answer', default: 'We offer a 30-day money-back guarantee for all purchases.' },
      isOpen: { type: 'boolean', label: 'Show Answer', default: false },
      accentColor: { type: 'color', label: 'Accent Color', default: '#4f46e5' },
      borderRadius: { type: 'string', label: 'Border Radius', default: '8px' },
      margin: { type: 'string', label: 'Margin', default: '0' },
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
