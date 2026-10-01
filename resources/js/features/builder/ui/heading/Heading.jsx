import InlineEditableText from '../../components/editing/InlineEditableText';
import { useBuilderStore } from '../../stores/builderStore';

export function getResponsiveFontSize(fontSize) {
  if (!fontSize) return fontSize;
  if (typeof fontSize === 'string' && fontSize.includes('clamp')) {
    return fontSize;
  }
  let numericSize = null;
  if (typeof fontSize === 'number') {
    numericSize = fontSize;
  } else if (typeof fontSize === 'string' && fontSize.endsWith('px')) {
    numericSize = parseFloat(fontSize);
  }
  
  if (numericSize !== null && !isNaN(numericSize) && numericSize >= 20) {
    const minSize = Math.max(16, Math.round(numericSize * 0.55));
    const preferredVw = (numericSize / 16).toFixed(2);
    return `clamp(${minSize}px, ${preferredVw}vw + 6px, ${numericSize}px)`;
  }
  return fontSize;
}

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
  lineHeight = '1.3',
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
  const responsiveFontSize = getResponsiveFontSize(fontSize);

  const style = {
    fontFamily,
    fontSize: responsiveFontSize,
    fontWeight,
    color,
    textAlign: align,
    margin,
    padding,
    lineHeight: lineHeight || '1.3',
    letterSpacing,
    textTransform,
    textDecoration,
    fontStyle,
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
      tag={level}
    />
  );
}