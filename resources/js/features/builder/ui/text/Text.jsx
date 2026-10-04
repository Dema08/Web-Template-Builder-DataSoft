import InlineEditableText from '../../components/editing/InlineEditableText';
import { useBuilderStore } from '../../stores/builderStore';
import { getResponsiveFontSize } from '../heading/Heading';

export default function Text({
  content = '',
  fontFamily = 'sans-serif',
  fontSize = '16px',
  fontWeight = '400',
  color = '#000000',
  lineHeight = '1.6',
  letterSpacing = 'normal',
  align = 'left',
  margin = '0',
  padding = '0',
  fontStyle = 'normal',
  textDecoration = 'none',
  textTransform = 'none',
  width = null,
  height = null,
  maxWidth = null,
  componentId = null,
  sectionId = null,
}) {
  const updateComponentProps = useBuilderStore((state) => state.updateComponentProps);

  // Ensure responsive font scaling and prevent overflow on mobile devices
  let computedFontSize = fontSize;
  if (typeof fontSize === 'string' && fontSize.endsWith('px')) {
    const numSize = parseFloat(fontSize);
    if (numSize >= 20) {
      computedFontSize = `clamp(15px, 4vw, ${fontSize})`;
    }
  }

  const responsiveFontSize = getResponsiveFontSize(fontSize);

  const style = {
    fontFamily,
    fontSize: responsiveFontSize,
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
    maxWidth: maxWidth || '100%',
    overflowWrap: 'break-word',
    wordBreak: 'normal',
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
    />
  );
}