import { renderLayoutComponents } from '../../engine/layoutRenderer.jsx';

export default function Card({
  childrenComponents = [],
  variant = 'service',
  background = '#ffffff',
  backgroundGradient = '',
  borderRadius = '16px',
  borderWidth = '1px',
  borderStyle = 'solid',
  borderColor = '#e2e8f0',
  shadow = 'md',
  padding = '24px',
  margin = '0px',
  hoverEffect = 'lift',
  width = '100%',
  height = 'auto',
  minHeight = 'auto',
  maxWidth = 'none',
  opacity = 100,
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  gap = '0px',
  overflow = 'hidden',
  componentId = null,
  sectionId = null,
  children = null,
}) {
  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  const hoverClasses = {
    none: '',
    lift: 'hover:-translate-y-2 hover:shadow-2xl transition-all duration-300',
    scale: 'hover:scale-[1.03] hover:shadow-xl transition-all duration-300',
    glow: 'hover:shadow-indigo-500/30 hover:shadow-2xl hover:border-indigo-400 transition-all duration-300',
    border: 'hover:border-indigo-600 transition-all duration-300',
  };

  const hasBorder = borderWidth && borderWidth !== '0px' && borderWidth !== '0';

  const style = {
    backgroundColor: background || '#ffffff',
    ...(backgroundGradient ? { background: backgroundGradient } : {}),
    borderRadius: borderRadius || '16px',
    borderWidth: hasBorder ? borderWidth : '0px',
    borderColor: hasBorder ? (borderColor || '#e2e8f0') : 'transparent',
    borderStyle: hasBorder ? (borderStyle || 'solid') : 'none',
    padding: padding || '24px',
    margin: margin || '0px',
    width: width || '100%',
    height: height || 'auto',
    minHeight: minHeight || 'auto',
    maxWidth: maxWidth || 'none',
    opacity: typeof opacity === 'number' ? opacity / 100 : (parseInt(opacity) / 100 || 1),
    alignItems: alignItems || 'stretch',
    justifyContent: justifyContent || 'flex-start',
    gap: gap || '0px',
    overflow: overflow || 'hidden',
  };

  return (
    <div
      className={`relative flex flex-col ${shadowClasses[shadow] || ''} ${hoverClasses[hoverEffect] || ''}`}
      style={style}
    >
      {/* If sub-components are provided, render them as editable components */}
      {Array.isArray(childrenComponents) && childrenComponents.length > 0
        ? renderLayoutComponents(childrenComponents, sectionId, componentId)
        : children}
    </div>
  );
}

