import InlineEditableText from '../../components/editing/InlineEditableText';
import { useBuilderStore } from '../../stores/builderStore';

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
  lineHeight = '1.5',
  letterSpacing = 'normal',
  textTransform = 'none',
  textDecoration = 'none',
  fontStyle = 'normal',
  componentId = null,
  sectionId = null,
}) {
  const { updateComponentProps } = useBuilderStore();

  const style = {
    fontFamily,
    fontSize,
    fontWeight,
    color,
    textAlign: align,
    margin,
    padding,
    lineHeight,
    letterSpacing,
    textTransform,
    textDecoration,
    fontStyle,
  };

  const handleUpdate = (newContent) => {
    if (sectionId && componentId) {
      updateComponentProps(sectionId, componentId, { content: newContent });
    }
  };

  return (
    <InlineEditableText
      value={content}
      onUpdate={handleUpdate}
      style={style}
      tag={level}
    />
  );
}