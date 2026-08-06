import { useBuilderStore } from '../../stores/builderStore';
import InlineEditableText from '../../components/editing/InlineEditableText';

export default function Heading({
  content = 'Heading',
  level = 'h1',
  fontFamily = 'sans-serif',
  fontSize = '32px',
  fontWeight = '700',
  color = '#000000',
  align = 'left',
  margin = '0',
  padding = '0',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, updateComponentProps } = useBuilderStore();

  const style = {
    fontFamily,
    fontSize,
    fontWeight,
    color,
    textAlign: align,
    margin,
    padding,
  };

  const isSelected = selectedComponentId === componentId;
  const isHovered = hoveredComponent === componentId;

  const handleUpdate = (newContent) => {
    if (sectionId && componentId) {
      updateComponentProps(sectionId, componentId, { content: newContent });
    }
  };

  return (
    <span
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      onMouseEnter={() => setHoveredComponent(componentId)}
      onMouseLeave={() => setHoveredComponent(null)}
      className={`relative inline-block transition-all ${
        isSelected
          ? 'ring-2 ring-indigo-600 ring-offset-1'
          : isHovered
            ? 'ring-1 ring-indigo-400 ring-offset-1'
            : ''
      }`}
    >
      <InlineEditableText
        value={content}
        onUpdate={handleUpdate}
        style={style}
        tag={level}
      />
    </span>
  );
}
