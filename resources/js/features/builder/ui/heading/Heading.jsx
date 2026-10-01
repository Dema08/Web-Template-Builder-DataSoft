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
  width = null,
  height = null,
  maxWidth = null,
  componentId = null,
  sectionId = null,
}) {
  const { updateComponentProps } = useBuilderStore();

  // Ensure responsive font scaling for large headings on mobile and prevent overflow
  let computedFontSize = fontSize;
  if (typeof fontSize === 'string' && fontSize.endsWith('px')) {
    const numSize = parseFloat(fontSize);
    if (numSize >= 40) {
      computedFontSize = `clamp(24px, 5.5vw, ${fontSize})`;
    } else if (numSize >= 30) {
      computedFontSize = `clamp(20px, 4.5vw, ${fontSize})`;
    }
  }

  const style = {
    fontFamily,
    fontSize: computedFontSize,
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
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    maxWidth: maxWidth || '100%',
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
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