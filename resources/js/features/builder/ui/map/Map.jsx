export default function MapComponent({
  embedUrl = '',
  address = 'Jakarta, Indonesia',
  height = '300px',
  borderRadius = '8px',
  margin = '0',
  showLabel = true,
}) {
  const googleMapsUrl = embedUrl ||
    `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div style={{ margin }}>
      <div style={{
        borderRadius,
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        background: '#f1f5f9',
      }}>
        <iframe
          src={googleMapsUrl}
          width="100%"
          height={height}
          style={{ border: 'none', display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={address || 'Map Location'}
        />
      </div>
      {showLabel && address && (
        <div style={{
          marginTop: '8px',
          fontSize: '13px',
          color: '#64748b',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <span>📍</span>
          <span>{address}</span>
        </div>
      )}
    </div>
  );
}
