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
  const { selectedComponentId, selectComponent } = useBuilderStore();

  const isSelected = selectedComponentId === componentId;

  return (
    <div
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      onClick={(e) => {
        e.stopPropagation();
        selectComponent(componentId);
      }}
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
    </div>
  );
}
