import { useRef, useEffect } from 'react';
import { useBuilderStore } from '../../stores/builderStore';

export default function InlineEditableText({
  value,
  onUpdate,
  style,
  className = '',
  tag = 'span',
}) {
  const ref = useRef(null);
  const { selectComponent } = useBuilderStore();

  useEffect(() => {
    if (ref.current && ref.current.innerText !== value) {
      ref.current.innerText = value;
    }
  }, [value]);

  const handleBlur = () => {
    if (ref.current) {
      const newValue = ref.current.innerText;
      if (newValue !== value) {
        onUpdate(newValue);
      }
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const componentId = e.currentTarget.closest('[data-component-id]')?.getAttribute('data-component-id');
    if (componentId) {
      selectComponent(componentId);
    }
  };

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onClick={handleClick}
      style={style}
      className={`outline-none focus:outline-2 focus:outline-indigo-500 focus:outline-dashed cursor-text ${className}`}
    >
      {value}
    </Tag>
  );
}
