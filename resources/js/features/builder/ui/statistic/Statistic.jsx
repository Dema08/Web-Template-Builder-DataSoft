import { useBuilderStore } from '../../stores/builderStore';

export default function Statistic({
  value = '100+',
  label = 'Statistic',
  background = '',
  color = '#4f46e5',
  labelColor = '#64748b',
  fontSize = '',
  padding = '',
  margin = '',
  borderRadius = '',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, selectComponent, isPreviewMode } = useBuilderStore();

  const isSelected = !isPreviewMode && selectedComponentId === componentId;
  const isHovered = !isPreviewMode && hoveredComponent === componentId;

  const style = {
    ...(background ? { backgroundColor: background } : {}),
    ...(padding ? { padding } : {}),
    ...(margin ? { margin } : {}),
    ...(borderRadius ? { borderRadius } : {}),
  };

  return (
    <div
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      style={style}
      onClick={(e) => {
        if (isPreviewMode) return;
        e.stopPropagation();
        selectComponent(componentId, sectionId);
      }}
      onMouseEnter={() => !isPreviewMode && setHoveredComponent(componentId)}
      onMouseLeave={() => !isPreviewMode && setHoveredComponent(null)}
      className={`text-center transition-all cursor-pointer ${
        isSelected
          ? 'ring-2 ring-indigo-600 ring-offset-2'
          : isHovered
            ? 'ring-1 ring-indigo-400 ring-offset-1'
            : ''
      }`}
    >
      <div className="font-extrabold mb-1" style={{ color: color || '#4f46e5', fontSize: fontSize || '36px' }}>{value}</div>
      <div className="text-sm font-semibold" style={{ color: labelColor || '#64748b' }}>{label}</div>
    </div>
  );
}
