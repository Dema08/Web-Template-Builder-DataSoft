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
    <div className="absolute inset-0 pointer-events-none z-40">
      {handles.map((h) => (
        <div
          key={h.id}
          onPointerDown={(e) => {
            e.stopPropagation();
            onResizeStart(e, h.id);
          }}
          className={`absolute w-2.5 h-2.5 bg-white border-2 border-indigo-600 rounded-full pointer-events-auto shadow-sm hover:scale-125 transition-transform ${h.className}`}
          style={{ cursor: h.cursor }}
          title={`Resize ${h.id.toUpperCase()}`}
        />
      ))}
    </div>
  );
}
