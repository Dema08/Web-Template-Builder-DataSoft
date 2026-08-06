import { useBuilderStore } from '../../stores/builderStore';

export default function Button({
  label = 'Button',
  href = '#',
  variant = 'primary',
  size = 'medium',
  radius = 'md',
  background = '#4f46e5',
  color = '#ffffff',
  shadow = 'md',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, selectComponent } = useBuilderStore();

  const baseStyles = 'font-bold transition-all inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    ghost: 'text-indigo-600 hover:bg-indigo-50',
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  };

  const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  const isSelected = selectedComponentId === componentId;
  const isHovered = hoveredComponent === componentId;

  const className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${radiusStyles[radius]} ${shadowStyles[shadow]} ${
    isSelected
      ? 'ring-2 ring-indigo-600 ring-offset-2'
      : isHovered
        ? 'ring-1 ring-indigo-400 ring-offset-1'
        : ''
  }`;

  return (
    <a
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        selectComponent(componentId);
      }}
      onMouseEnter={() => setHoveredComponent(componentId)}
      onMouseLeave={() => setHoveredComponent(null)}
      className={className}
      style={{
        backgroundColor: variant === 'primary' || variant === 'secondary' ? background : 'transparent',
        color: variant === 'primary' || variant === 'secondary' ? color : background,
      }}
    >
      {label}
    </a>
  );
}
