import { useDraggable } from '@dnd-kit/core';

/**
 * DraggableSidebarItem
 * Makes any sidebar element draggable with both @dnd-kit and HTML5 native fallback.
 *
 * @param {Object} props
 * @param {string} props.id - Unique identifier (e.g. "sidebar-section-hero")
 * @param {'section' | 'layout' | 'component' | 'media' | 'icon'} props.type - Item category
 * @param {Object} props.data - Metadata payload (e.g. { id: 'hero', name: 'Hero' })
 * @param {string} [props.title] - Human-readable label for drag overlay
 * @param {string} [props.preview] - Image URL for media overlay
 * @param {React.ReactNode} props.children
 * @param {string} [props.className='']
 * @param {boolean} [props.disabled=false]
 */
export default function DraggableSidebarItem({
  id,
  type,
  data,
  title,
  preview,
  children,
  className = '',
  disabled = false,
  ...rest
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `sidebar-${type}-${id || (data && data.id) || Math.random().toString(36).substr(2, 6)}`,
    data: {
      isSidebarItem: true,
      sidebarType: type,
      payload: data,
      title: title || (data && (data.label || data.name || data.id)),
      preview: preview || (data && data.url),
    },
    disabled,
  });

  const handleNativeDragStart = (e) => {
    try {
      e.dataTransfer.setData(
        'application/json',
        JSON.stringify({
          type,
          id: id || data?.id,
          payload: data,
          title: title || data?.label || data?.name,
          url: preview || data?.url,
        })
      );
      e.dataTransfer.effectAllowed = 'copy';
    } catch (_err) {
      // Ignored
    }
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      draggable={!disabled}
      onDragStart={handleNativeDragStart}
      className={`touch-none select-none transition-all duration-150 ${
        isDragging ? 'opacity-40 scale-95 ring-2 ring-indigo-400 rounded-xl' : 'cursor-grab active:cursor-grabbing'
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
