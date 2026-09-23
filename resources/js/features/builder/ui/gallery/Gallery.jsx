export default function Gallery({
  images = [],
  columns = 3,
  gap = '12px',
  borderRadius = '8px',
  margin = '0',
  aspectRatio = '1/1',
}) {
  const defaultImages = images.length > 0 ? images : [
    { id: 'g1', src: '', alt: 'Gallery Image 1' },
    { id: 'g2', src: '', alt: 'Gallery Image 2' },
    { id: 'g3', src: '', alt: 'Gallery Image 3' },
    { id: 'g4', src: '', alt: 'Gallery Image 4' },
    { id: 'g5', src: '', alt: 'Gallery Image 5' },
    { id: 'g6', src: '', alt: 'Gallery Image 6' },
  ];

  const placeholderColors = ['#ddd6fe', '#bfdbfe', '#bbf7d0', '#fde68a', '#fecaca', '#e0e7ff'];

  return (
    <div style={{ margin }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
      }}>
        {defaultImages.map((img, idx) => (
          <div
            key={img.id || idx}
            style={{
              borderRadius,
              overflow: 'hidden',
              aspectRatio,
              background: placeholderColors[idx % placeholderColors.length],
              position: 'relative',
            }}
          >
            {img.src ? (
              <img
                src={img.src}
                alt={img.alt || ''}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: '#6366f1',
                opacity: 0.6,
              }}>
                🖼️
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
