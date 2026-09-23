export default function Progress({
  value = 75,
  max = 100,
  label = 'Progress',
  showValue = true,
  color = '#4f46e5',
  trackColor = '#e2e8f0',
  height = '10px',
  borderRadius = '999px',
  margin = '0',
  labelFontSize = '13px',
  variant = 'default',
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const gradientColors = {
    default: color,
    gradient: `linear-gradient(90deg, #6366f1, #8b5cf6)`,
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
  };

  const barColor = variant === 'gradient' ? undefined : (gradientColors[variant] || color);
  const barBg = variant === 'gradient' ? gradientColors.gradient : barColor;

  return (
    <div style={{ margin }}>
      {(label || showValue) && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '6px',
        }}>
          {label && (
            <span style={{ fontSize: labelFontSize, fontWeight: '600', color: '#374151' }}>
              {label}
            </span>
          )}
          {showValue && (
            <span style={{ fontSize: labelFontSize, fontWeight: '700', color: barColor || '#4f46e5' }}>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div style={{
        width: '100%',
        height,
        background: trackColor,
        borderRadius,
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${percentage}%`,
          background: barBg,
          borderRadius,
          transition: 'width 0.8s ease',
        }} />
      </div>
    </div>
  );
}
