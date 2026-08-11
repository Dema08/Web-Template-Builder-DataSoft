import InlineEditableText from '../../components/editing/InlineEditableText';
import { useBuilderStore } from '../../stores/builderStore';

export default function Text({
  content = '',
  fontFamily = 'sans-serif',
  fontSize = '16px',
  fontWeight = '400',
  color = '#000000',
  lineHeight = '1.5',
  letterSpacing = 'normal',
  align = 'left',
  margin = '0',
  padding = '0',
  fontStyle = 'normal',
  textDecoration = 'none',
  textTransform = 'none',
  componentId = null,
  sectionId = null,
}) {
  const { updateComponentProps } = useBuilderStore();

  const style = {
    fontFamily,
    fontSize,
    fontWeight,
    color,
    lineHeight,
    letterSpacing,
    textAlign: align,
    margin,
    padding,
    fontStyle,
    textDecoration,
    textTransform,
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
    />
  );
}