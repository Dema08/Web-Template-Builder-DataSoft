export default function Testimonial({
  quote = 'This product has completely transformed the way our team works. Absolutely phenomenal!',
  author = 'Sarah Johnson',
  role = 'CEO, TechCorp',
  avatar = '',
  rating = 5,
  variant = 'card',
  background = '#ffffff',
  color = '#1e293b',
  accentColor = '#4f46e5',
  borderRadius = '12px',
  padding = '24px',
  margin = '0',
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  const variantStyles = {
    card: {
      background,
      borderRadius,
      padding,
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    },
    minimal: {
      background: 'transparent',
      borderLeft: `3px solid ${accentColor}`,
      paddingLeft: '20px',
      margin,
    },
    dark: {
      background: '#0f172a',
      borderRadius,
      padding,
      color: '#f1f5f9',
    },
  };

  const containerStyle = { margin, ...(variantStyles[variant] || variantStyles.card) };
  const textColor = variant === 'dark' ? '#f1f5f9' : color;
  const subTextColor = variant === 'dark' ? '#94a3b8' : '#64748b';

  return (
    <div style={containerStyle}>
      {/* Rating Stars */}
      {rating > 0 && (
        <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
          {stars.map((filled, i) => (
            <span key={i} style={{ fontSize: '16px', color: filled ? '#f59e0b' : '#e2e8f0' }}>
              ★
            </span>
          ))}
        </div>
      )}

      {/* Quote */}
      <p style={{
        fontSize: '15px',
        lineHeight: '1.7',
        color: textColor,
        fontStyle: 'italic',
        margin: '0 0 16px 0',
      }}>
        "{quote}"
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: avatar ? 'transparent' : accentColor,
          overflow: 'hidden',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: '700',
          fontSize: '16px',
        }}>
          {avatar ? (
            <img src={avatar} alt={author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            author?.charAt(0) || 'A'
          )}
        </div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '14px', color: textColor }}>{author}</div>
          {role && <div style={{ fontSize: '12px', color: subTextColor }}>{role}</div>}
        </div>
      </div>
    </div>
  );
}
