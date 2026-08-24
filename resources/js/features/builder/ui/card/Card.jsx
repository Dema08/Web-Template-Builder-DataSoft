import { renderLayoutComponents } from '../../utils/layoutRenderer.jsx';

export default function Card({
  childrenComponents = [],
  variant = 'service',
  background = '#ffffff',
  borderRadius = '16px',
  borderWidth = '1px',
  borderColor = '#e2e8f0',
  shadow = 'md',
  padding = '24px',
  hoverEffect = 'lift',
  width = '100%',
  height = 'auto',
  componentId = null,
  sectionId = null,
  children = null,
}) {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const hoverClasses = {
    none: '',
    lift: 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300',
    scale: 'hover:scale-[1.02] transition-transform duration-300',
    glow: 'hover:shadow-indigo-500/20 hover:shadow-2xl transition-all duration-300',
  };

  const style = {
    backgroundColor: background,
    borderRadius,
    borderWidth,
    borderColor,
    borderStyle: borderWidth && borderWidth !== '0px' && borderWidth !== '0' ? 'solid' : 'none',
    padding,
    width,
    height,
  };

  return (
    <div
      className={`relative flex flex-col ${shadowClasses[shadow] || ''} ${hoverClasses[hoverEffect] || ''}`}
      style={style}
    >
      {/* If sub-components are provided, render them as editable components */}
      {Array.isArray(childrenComponents) && childrenComponents.length > 0
        ? renderLayoutComponents(childrenComponents, sectionId)
        : children}
    </div>
  );
}
