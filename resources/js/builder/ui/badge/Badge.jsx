import { useBuilderStore } from '../../stores/builderStore';

export default function Badge({
  content = 'Badge',
  variant = 'primary',
  size = 'medium',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, selectComponent } = useBuilderStore();

  const variantStyles = {
    primary: 'bg-indigo-600 text-white',
    secondary: 'bg-slate-600 text-white',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-white',
    danger: 'bg-red-600 text-white',
  };

  const sizeStyles = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-1.5 text-base',
  };

  const isSelected = selectedComponentId === componentId;
  const isHovered = hoveredComponent === componentId;

  const className = `${variantStyles[variant]} ${sizeStyles[size]} rounded-full font-medium inline-block ${
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
      onClick={(e) => {
        e.stopPropagation();
        selectComponent(componentId);
      }}
      onMouseEnter={() => setHoveredComponent(componentId)}
      onMouseLeave={() => setHoveredComponent(null)}
      className={className}
    >
      {content}
    </span>
  );
}
