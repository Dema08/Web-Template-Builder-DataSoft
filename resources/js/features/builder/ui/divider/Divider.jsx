import { useBuilderStore } from '../../stores/builderStore';

export default function Divider({
  thickness = '1px',
  color = '#e5e7eb',
  margin = '16px 0',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, selectComponent } = useBuilderStore();

  const isSelected = selectedComponentId === componentId;
  const isHovered = hoveredComponent === componentId;

  const style = {
    borderTop: `${thickness} solid ${color}`,
    margin,
  };

  return (
    <div
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      onClick={(e) => {
        e.stopPropagation();
        selectComponent(componentId, sectionId);
      }}
      onMouseEnter={() => setHoveredComponent(componentId)}
      onMouseLeave={() => setHoveredComponent(null)}
      className={`transition-all ${
        isSelected
          ? 'ring-2 ring-indigo-600 ring-offset-2'
          : isHovered
            ? 'ring-1 ring-indigo-400 ring-offset-1'
            : ''
      }`}
    >
      <hr style={style} />
    </div>
  );
}
