import * as FaIcons from 'react-icons/fa';
import * as LucideIcons from 'lucide-react';

export default function Icon({
  icon = 'FaGlobe',
  name = null,
  size = '24px',
  color = '#4f46e5',
  background = '',
  borderRadius = '',
  align = 'center',
  margin = '0',
  padding = '0',
  width = null,
  height = null,
  componentId = null,
  sectionId = null,
}) {
  const iconName = name || icon || 'FaGlobe';

  // Try FaIcons first, then LucideIcons
  let IconComponent = FaIcons[iconName] || LucideIcons[iconName];

  if (!IconComponent) {
    // Try matching without prefix or with Fa prefix
    const faKey = iconName.startsWith('Fa') ? iconName : `Fa${iconName}`;
    IconComponent = FaIcons[faKey] || LucideIcons[iconName] || FaIcons.FaGlobe;
  }

  let effectiveSize = size;
  if (width && width !== 'fit-content' && width !== 'auto') {
    effectiveSize = width;
  } else if (height && height !== 'fit-content' && height !== 'auto') {
    effectiveSize = height;
  }

  const parsedSize = typeof effectiveSize === 'number' ? `${effectiveSize}px` : effectiveSize;

  const containerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
    width: width || undefined,
    height: height || undefined,
    margin,
    padding,
    ...(background ? { backgroundColor: background } : {}),
    ...(borderRadius ? { borderRadius } : {}),
  };

  return (
    <div style={containerStyle} className="inline-flex items-center justify-center">
      {IconComponent ? (
        <IconComponent style={{ fontSize: parsedSize, color, width: parsedSize, height: parsedSize }} />
      ) : (
        <span style={{ fontSize: parsedSize, color }}>🌐</span>
      )}
    </div>
  );
}

