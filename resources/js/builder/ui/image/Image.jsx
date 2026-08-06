import { useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import ResizableImage from '../../components/editing/ResizableImage';

export default function Image({
  src = '',
  alt = 'Image',
  width = '100%',
  height = 'auto',
  objectFit = 'cover',
  borderRadius = '0',
  shadow = 'none',
  opacity = 100,
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, selectComponent, updateComponentProps } = useBuilderStore();
  const fileInputRef = useRef(null);

  const isSelected = selectedComponentId === componentId;

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

  const handleClick = (e) => {
    e.stopPropagation();
    selectComponent(componentId);
    // Trigger file upload when selected image is clicked
    fileInputRef.current?.click();
  };

  return (
    <div
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      onClick={handleClick}
      className={`relative ${isSelected ? 'z-10' : ''}`}
    >
      <ResizableImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        borderRadius={borderRadius}
        shadow={shadow}
        opacity={opacity}
        componentId={componentId}
        sectionId={sectionId}
      />

      {/* Upload overlay on hover/selected */}
      {(isSelected || !src) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded-lg cursor-pointer group">
          <div className="text-center">
            <div className="text-2xl mb-1">📷</div>
            <div className="text-xs text-white font-bold">{src ? 'Replace' : 'Upload'}</div>
          </div>
        </div>
      )}

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