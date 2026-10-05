import { useBuilderStore } from '../../stores/builderStore';

export default function Badge({
  content = '',
  text = '',
  label = '',
  variant = 'primary',
  size = 'medium',
  background = '',
  color = '',
  borderColor = '',
  border = '',
  radius = 'full',
  fontSize = '',
  fontWeight = '',
  letterSpacing = '',
  textTransform = '',
  padding = '',
  margin = '',
  shadow = 'none',
  width = '',
  height = '',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, selectComponent, isPreviewMode } = useBuilderStore();

  const rawText = text || content || label || 'Badge';

  // Variant acts as fallback when no explicit colors are provided
  const variantBg = {
    primary: 'bg-indigo-600',
    secondary: 'bg-slate-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600',
    outline: 'bg-transparent border border-indigo-500 text-indigo-400',
  };

  const variantText = {
    primary: 'text-white',
    secondary: 'text-white',
    success: 'text-white',
    warning: 'text-white',
    danger: 'text-white',
    outline: 'text-indigo-400',
  };

  const sizeStyles = {
    small: 'px-2.5 py-1 text-xs',
    medium: 'px-3.5 py-1.5 text-sm',
    large: 'px-5 py-2 text-base',
  };

  const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    glow: 'shadow-lg shadow-indigo-500/30',
  };

  // Only use inline colors when the author explicitly set them (layout presets / inspector)
  const hasCustomBg = typeof background === 'string' && background.trim() !== '';
  const hasCustomColor = typeof color === 'string' && color.trim() !== '';
  const isGradientBg = hasCustomBg && (background.includes('gradient') || background.includes('linear-') || background.includes('radial-'));

  const inlineStyle = {
    ...(hasCustomBg ? (isGradientBg ? { background } : { backgroundColor: background }) : {}),
    ...(hasCustomColor ? { color } : {}),
    ...(borderColor ? { borderColor, borderStyle: 'solid', borderWidth: '1px' } : {}),
    ...(border ? { border } : {}),
    ...(fontSize ? { fontSize } : {}),
    ...(fontWeight ? { fontWeight } : {}),
    ...(letterSpacing ? { letterSpacing } : {}),
    ...(textTransform ? { textTransform } : {}),
    ...(padding ? { padding } : {}),
    ...(margin ? { margin } : {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  const isSelected = !isPreviewMode && selectedComponentId === componentId;
  const isHovered = !isPreviewMode && hoveredComponent === componentId;

  const className = `${hasCustomBg ? '' : variantBg[variant] || variantBg.primary} ${
    hasCustomColor ? '' : variantText[variant] || variantText.primary
  } ${sizeStyles[size] || sizeStyles.medium} ${radiusStyles[radius] || radiusStyles.full} ${
    shadowStyles[shadow] || ''
  } font-semibold inline-flex items-center justify-center gap-1.5 max-w-full whitespace-normal break-words text-center cursor-pointer transition-all ${
    isSelected
      ? 'ring-2 ring-indigo-600 ring-offset-2'
      : isHovered
        ? 'ring-1 ring-indigo-400 ring-offset-1'
        : ''
  }`;

  return (
    <span
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      style={inlineStyle}
      onClick={(e) => {
        if (isPreviewMode) return;
        e.stopPropagation();
        selectComponent(componentId, sectionId);
      }}
      onMouseEnter={() => !isPreviewMode && setHoveredComponent(componentId)}
      onMouseLeave={() => !isPreviewMode && setHoveredComponent(null)}
      className={className}
    >
      {rawText}
    </span>
  );
}

