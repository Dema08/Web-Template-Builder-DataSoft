import { useBuilderStore } from '../../stores/builderStore';

/**
 * Chart UI Component
 * Supports multiple chart types:
 * - 'donut': Circular / donut chart with dynamic percentages, colors, and center text.
 * - 'stacked-bar': Horizontal proportional stacked bar.
 * - 'growth-bar': Vertical multi-bar growth chart with connected line & milestone points.
 */
export default function Chart({
  variant = 'donut',
  // Values / percentages
  val1 = 30,
  val2 = 30,
  val3 = 20,
  val4 = 15,
  val5 = 5,
  // Bar heights for growth chart
  bar1 = 40,
  bar2 = 70,
  bar3 = 105,
  // Colors
  color1 = '#0D9488',
  color2 = '#10B981',
  color3 = '#F59E0B',
  color4 = '#0F2942',
  color5 = '#64748B',
  barColor = '#0D9488',
  accentColor = '#F59E0B',
  baseColor = 'rgba(255,255,255,0.2)',
  // Center text (donut)
  centerTitle = 'SHU',
  centerSubtitle = '5 bagian',
  // Dimensions
  width = '100%',
  height = 'auto',
  componentId = null,
  sectionId = null,
}) {
  const v1 = Number(val1) || 0;
  const v2 = Number(val2) || 0;
  const v3 = Number(val3) || 0;
  const v4 = Number(val4) || 0;
  const v5 = Number(val5) || 0;

  const b1 = Number(bar1) || 40;
  const b2 = Number(bar2) || 70;
  const b3 = Number(bar3) || 105;

  // DONUT CHART
  if (variant === 'donut') {
    // Total should normalize to 100
    const total = v1 + v2 + v3 + v4 + v5 || 100;
    const p1 = (v1 / total) * 100;
    const p2 = (v2 / total) * 100;
    const p3 = (v3 / total) * 100;
    const p4 = (v4 / total) * 100;
    const p5 = (v5 / total) * 100;

    const off1 = 25;
    const off2 = off1 - p1;
    const off3 = off2 - p2;
    const off4 = off3 - p3;
    const off5 = off4 - p4;

    return (
      <div style={{ width: width || '100%', height: height || 'auto', display: 'flex', justifyContent: 'center' }}>
        <svg
          className="donut"
          viewBox="0 0 42 42"
          role="img"
          aria-label={`Diagram donat: ${p1}% - ${p2}% - ${p3}% - ${p4}% - ${p5}%`}
          style={{ width: '100%', maxWidth: '280px', height: 'auto', display: 'block' }}
        >
          <circle cx="21" cy="21" r="15.9155" fill="none" stroke="rgba(220,231,236,0.3)" strokeWidth="6" />
          <g fill="none" strokeWidth="6">
            <circle cx="21" cy="21" r="15.9155" stroke={color1} strokeDasharray={`${Math.max(p1 - 0.6, 0.1)} ${100 - Math.max(p1 - 0.6, 0.1)}`} strokeDashoffset={off1} />
            <circle cx="21" cy="21" r="15.9155" stroke={color2} strokeDasharray={`${Math.max(p2 - 0.6, 0.1)} ${100 - Math.max(p2 - 0.6, 0.1)}`} strokeDashoffset={off2} />
            <circle cx="21" cy="21" r="15.9155" stroke={color3} strokeDasharray={`${Math.max(p3 - 0.6, 0.1)} ${100 - Math.max(p3 - 0.6, 0.1)}`} strokeDashoffset={off3} />
            <circle cx="21" cy="21" r="15.9155" stroke={color4} strokeDasharray={`${Math.max(p4 - 0.6, 0.1)} ${100 - Math.max(p4 - 0.6, 0.1)}`} strokeDashoffset={off4} />
            <circle cx="21" cy="21" r="15.9155" stroke={color5} strokeDasharray={`${Math.max(p5 - 0.6, 0.1)} ${100 - Math.max(p5 - 0.6, 0.1)}`} strokeDashoffset={off5} />
          </g>
          {centerTitle && (
            <text x="21" y="20.6" textAnchor="middle" fontSize="5.2" fontWeight="800" fontFamily='"Bricolage Grotesque",system-ui,sans-serif' fill="#173042">
              {centerTitle}
            </text>
          )}
          {centerSubtitle && (
            <text x="21" y="25.6" textAnchor="middle" fontSize="2.7" fontFamily='"Source Sans 3",system-ui,sans-serif' fill="#627783">
              {centerSubtitle}
            </text>
          )}
        </svg>
      </div>
    );
  }

  // STACKED BAR CHART
  if (variant === 'stacked-bar') {
    return (
      <div
        className="shu"
        role="img"
        aria-label={`Diagram proporsi: ${v1}%, ${v2}%, ${v3}%, ${v4}%, ${v5}%`}
        style={{
          display: 'flex',
          height: '24px',
          borderRadius: '999px',
          overflow: 'hidden',
          marginBottom: '20px',
          width: width || '100%',
        }}
      >
        <span style={{ flex: v1, background: color1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: '700' }}>
          {v1 > 8 ? `${v1}%` : ''}
        </span>
        <span style={{ flex: v2, background: color2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: '700' }}>
          {v2 > 8 ? `${v2}%` : ''}
        </span>
        <span style={{ flex: v3, background: color3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#173042', fontSize: '11px', fontWeight: '700' }}>
          {v3 > 8 ? `${v3}%` : ''}
        </span>
        <span style={{ flex: v4, background: color4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: '700' }}>
          {v4 > 8 ? `${v4}%` : ''}
        </span>
        <span style={{ flex: v5, background: color5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', fontWeight: '700' }}>
          {v5 > 8 ? `${v5}%` : ''}
        </span>
      </div>
    );
  }

  // GROWTH BAR CHART (Permodalan)
  // Baseline is y=150
  const y1 = Math.max(150 - b1, 20);
  const y2 = Math.max(150 - b2, 20);
  const y3 = Math.max(150 - b3, 20);

  const pt1 = y1 - 12;
  const pt2 = y2 - 12;
  const pt3 = y3 - 12;

  return (
    <div style={{ width: width || '220px', height: height || '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        viewBox="0 0 220 180"
        role="img"
        aria-label="Ilustrasi batang modal yang bertumbuh dengan koin"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Baseline */}
        <rect x="20" y="150" width="180" height="4" rx="2" fill="currentColor" opacity=".25" />
        {/* Bars */}
        <rect x="40" y={y1} width="30" height={b1} rx="7" fill={barColor} opacity=".35" />
        <rect x="95" y={y2} width="30" height={b2} rx="7" fill={barColor} opacity=".6" />
        <rect x="150" y={y3} width="30" height={b3} rx="7" fill={barColor} />
        {/* Trend Line */}
        <path d={`M55 ${pt1} L110 ${pt2} L165 ${pt3}`} fill="none" stroke={accentColor} strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
        {/* Gold Point Circles */}
        <g fill={accentColor}>
          <circle cx="55" cy={pt1} r="12" />
          <circle cx="110" cy={pt2} r="12" />
          <circle cx="165" cy={pt3} r="12" />
        </g>
        {/* Inner Ring */}
        <g fill="none" stroke="#FFFFFF" strokeWidth="2" opacity=".7">
          <circle cx="55" cy={pt1} r="7.5" />
          <circle cx="110" cy={pt2} r="7.5" />
          <circle cx="165" cy={pt3} r="7.5" />
        </g>
      </svg>
    </div>
  );
}
