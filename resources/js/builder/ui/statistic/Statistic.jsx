import { useBuilderStore } from '../../stores/builderStore';

export default function Statistic({
  value = '100+',
  label = 'Statistic',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, selectComponent } = useBuilderStore();

  const isSelected = selectedComponentId === componentId;
  const isHovered = hoveredComponent === componentId;

  return (
    <div
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      onClick={(e) => {
        e.stopPropagation();
        selectComponent(componentId);
      }}
      onMouseEnter={() => setHoveredComponent(componentId)}
      onMouseLeave={() => setHoveredComponent(null)}
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
