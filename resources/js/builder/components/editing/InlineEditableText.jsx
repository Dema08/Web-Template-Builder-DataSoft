import { useRef, useEffect, useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';

export default function InlineEditableText({
  value,
  onUpdate,
  style,
  className = '',
  tag = 'span',
}) {
  const ref = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const { selectComponent, isPreviewMode } = useBuilderStore();

  useEffect(() => {
    if (ref.current && ref.current.innerText !== value && !isEditing) {
      ref.current.innerText = value;
    }
  }, [value, isEditing]);

  const Tag = tag;

  if (isPreviewMode) {
    return (
      <Tag style={style} className={className}>
        {value}
      </Tag>
    );
  }

  const handleBlur = () => {
    setIsEditing(false);
    if (ref.current) {
      const newValue = ref.current.innerText;
      if (newValue !== value) {
        onUpdate(newValue);
      }
    }
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsEditing(true);
    // Focus and select all text
    setTimeout(() => {
      if (ref.current) {
        ref.current.focus();
        const range = document.createRange();
        range.selectNodeContents(ref.current);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }, 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      ref.current?.blur();
    }
    if (e.key === 'Escape') {
      // Revert to original value
      if (ref.current) {
        ref.current.innerText = value;
      }
      ref.current?.blur();
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const componentId = e.currentTarget.closest('[data-component-id]')?.getAttribute('data-component-id');
    if (componentId) {
      selectComponent(componentId);
    }
  };

  return (
    <Tag
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      style={style}
      className={`outline-none focus:outline-2 focus:outline-indigo-500 focus:outline-dashed cursor-text ${className}`}
    >
      {value}
    </Tag>
  );
}