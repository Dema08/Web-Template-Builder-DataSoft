import { useEffect, useRef, useState } from 'react';

export default function Counter({
  value = 1250,
  suffix = '+',
  prefix = '',
  label = 'Happy Customers',
  duration = 2000,
  color = '#4f46e5',
  fontSize = '48px',
  labelFontSize = '16px',
  fontWeight = '900',
  align = 'center',
  margin = '0',
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const target = Number(value);
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} style={{ textAlign: align, margin }}>
      <div style={{ fontSize, fontWeight, color, lineHeight: 1.1, fontVariantNumeric: 'tabular-nums' }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      {label && (
        <div style={{ fontSize: labelFontSize, color: '#64748b', marginTop: '6px', fontWeight: '500' }}>
          {label}
        </div>
      )}
    </div>
  );
}
