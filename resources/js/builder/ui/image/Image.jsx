import { useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';

export default function Image({
  src = '',
  alt = 'Image',
  width = '100%',
  height = 'auto',
  objectFit = 'cover',
  objectPosition = 'center',
  borderRadius = '0',
  shadow = 'none',
  opacity = 100,
  borderWidth = '0',
  borderColor = '#e5e7eb',
  componentId = null,
  sectionId = null,
}) {
  const { updateComponentProps } = useBuilderStore();
  const fileInputRef = useRef(null);

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const style = {
    objectFit,
    objectPosition,
    borderRadius,
    opacity: opacity / 100,
    width,
    height,
    borderWidth,
    borderColor,
    borderStyle: borderWidth && borderWidth !== '0' ? 'solid' : 'none',
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file || !sectionId || !componentId) return;

    // Read as data URL for immediate preview
    const reader = new FileReader();
    reader.onload = (event) => {
      updateComponentProps(sectionId, componentId, { src: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        style={style}
        className={`${shadowStyles[shadow]} bg-slate-100 transition-all`}
      />

      {/* Upload overlay on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="text-center">
          <div className="text-2xl mb-1">📷</div>
          <div className="text-xs text-white font-bold">{src ? 'Replace' : 'Upload'}</div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
}