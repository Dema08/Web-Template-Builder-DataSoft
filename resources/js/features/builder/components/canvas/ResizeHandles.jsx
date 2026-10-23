export default function ResizeHandles({ onResizeStart }) {
  const handles = [
    { id: 'nw', cursor: 'nwse-resize', className: '-top-1 -left-1' },
    { id: 'n', cursor: 'ns-resize', className: '-top-1 left-1/2 -translate-x-1/2' },
    { id: 'ne', cursor: 'nesw-resize', className: '-top-1 -right-1' },
    { id: 'e', cursor: 'ew-resize', className: 'top-1/2 -right-1 -translate-y-1/2' },
    { id: 'se', cursor: 'nwse-resize', className: '-bottom-1 -right-1' },
    { id: 's', cursor: 'ns-resize', className: '-bottom-1 left-1/2 -translate-x-1/2' },
    { id: 'sw', cursor: 'nesw-resize', className: '-bottom-1 -left-1' },
    { id: 'w', cursor: 'ew-resize', className: 'top-1/2 -left-1 -translate-y-1/2' },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none z-40"
      data-builder-resize-container="true"
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        margin: 0,
        boxShadow: 'none',
      }}
    >
      {handles.map((h) => (
        <div
          key={h.id}
          data-resize-handle="true"
          onPointerDown={(e) => {
            e.stopPropagation();
            onResizeStart(e, h.id);
          }}
          className={`absolute pointer-events-auto shadow-sm hover:scale-125 transition-transform ${h.className}`}
          style={{
            cursor: h.cursor,
            boxSizing: 'border-box',
            width: '10px',
            height: '10px',
            minWidth: '10px',
            minHeight: '10px',
            maxWidth: '10px',
            maxHeight: '10px',
            padding: 0,
            margin: 0,
            backgroundColor: '#ffffff',
            border: '2px solid #4f46e5',
            borderRadius: '9999px',
          }}
          title={`Resize ${h.id.toUpperCase()}`}
        />
      ))}
    </div>
  );
}
