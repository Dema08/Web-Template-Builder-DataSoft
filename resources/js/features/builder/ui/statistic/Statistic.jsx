import { useBuilderStore } from '../../stores/builderStore';

export default function Statistic({
  value = '100+',
  label = 'Statistic',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, selectComponent, isPreviewMode } = useBuilderStore();

  const isSelected = !isPreviewMode && selectedComponentId === componentId;
  const isHovered = !isPreviewMode && hoveredComponent === componentId;

  return (
    <div
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      onClick={(e) => {
        if (isPreviewMode) return;
        e.stopPropagation();
        selectComponent(componentId, sectionId);
      }}
      onMouseEnter={() => !isPreviewMode && setHoveredComponent(componentId)}
      onMouseLeave={() => !isPreviewMode && setHoveredComponent(null)}
      className={`text-center p-2 rounded-lg transition-all ${
        isSelected
          ? 'ring-2 ring-indigo-600 ring-offset-2'
          : isHovered
            ? 'ring-1 ring-indigo-400 ring-offset-1'
            : ''
      }`}
    >
      <div className="text-4xl font-bold text-indigo-600 mb-2">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
