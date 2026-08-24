import * as FaIcons from 'react-icons/fa';
import * as LucideIcons from 'lucide-react';

export default function Icon({
  icon = 'FaGlobe',
  name = null,
  size = '24px',
  color = '#4f46e5',
  align = 'center',
  margin = '0',
  padding = '0',
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

  const containerStyle = {
    display: 'flex',
    justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
    margin,
    padding,
  };

  const parsedSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div style={containerStyle} className="inline-flex items-center">
      {IconComponent ? (
        <IconComponent style={{ fontSize: parsedSize, color, width: parsedSize, height: parsedSize }} />
      ) : (
        <span style={{ fontSize: parsedSize, color }}>🌐</span>
      )}
    </div>
  );
}
