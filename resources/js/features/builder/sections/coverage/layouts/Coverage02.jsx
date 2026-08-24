import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Coverage02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov02-heading', type: 'heading', props: { content: 'Jangkauan Distribusi Nasional', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'cov02-desc', type: 'text', props: { content: 'Jaringan logistik multi-modal kami menghubungkan pulau-pulau utama di Indonesia dengan kepastian jadwal pengiriman.', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 32px 0' } }
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const allHeadings = layoutComponents.filter(c => c.type === 'heading');
  const allTexts = layoutComponents.filter(c => c.type === 'text');

  const titleComp = allHeadings[0];
  const descComp = allTexts[0];

  const stats = [
    { value: '50+', label: 'Kota Jangkauan', icon: '📍', color: '#2563eb', bg: 'rgba(37,99,235,0.08)' },
    { value: '15+', label: 'Hub Logistik Utama', icon: '🏭', color: '#059669', bg: 'rgba(5,150,105,0.08)' },
    { value: '250+', label: 'Rute Pengiriman Aktif', icon: '🛣️', color: '#d97706', bg: 'rgba(217,119,6,0.08)' },
  ];

  // City nodes for the map
  const cities = [
    { x: 115, y: 170, name: 'Medan', isHub: false, color: '#f97316', labelAnchor: 'right' },
    { x: 330, y: 335, name: 'Jakarta (HQ)', isHub: true, color: '#2563eb', labelAnchor: 'right' },
    { x: 465, y: 355, name: 'Surabaya', isHub: false, color: '#2563eb', labelAnchor: 'right' },
    { x: 490, y: 195, name: 'Balikpapan', isHub: false, color: '#2563eb', labelAnchor: 'right' },
    { x: 620, y: 240, name: 'Makassar', isHub: false, color: '#f97316', labelAnchor: 'left' },
    { x: 700, y: 160, name: 'Manado', isHub: false, color: '#0891b2', labelAnchor: 'left' },
  ];

  // Routes: [from, to] indices
  const routes = [
    { from: 0, to: 1, color: '#f97316', type: 'express' },
    { from: 1, to: 2, color: '#2563eb', type: 'regular' },
    { from: 1, to: 3, color: '#2563eb', type: 'regular' },
    { from: 2, to: 4, color: '#f97316', type: 'express' },
    { from: 3, to: 4, color: '#2563eb', type: 'regular' },
    { from: 3, to: 5, color: '#0891b2', type: 'fast' },
    { from: 4, to: 5, color: '#0891b2', type: 'fast' },
  ];

  return (
    <section className="py-20 bg-slate-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT: Header + Stats */}
          <div className="lg:col-span-4 space-y-6">
            {/* Title + Description */}
            <div>
              {titleComp && renderLayoutComponents([titleComp], sectionId)}
              {descComp && renderLayoutComponents([descComp], sectionId)}
            </div>

            {/* Stat Cards */}
            <div className="space-y-3">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: stat.bg }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div
                      className="text-2xl font-extrabold leading-none"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { color: '#2563eb', label: 'Jalur Reguler', dash: false },
                { color: '#f97316', label: 'Jalur Ekspres', dash: true },
                { color: '#0891b2', label: 'Jalur Cepat (Udara)', dash: true },
              ].map((leg, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <svg width="28" height="6">
                    <line
                      x1="0" y1="3" x2="28" y2="3"
                      stroke={leg.color}
                      strokeWidth="2"
                      strokeDasharray={leg.dash ? '4 3' : '0'}
                    />
                  </svg>
                  {leg.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Interactive SVG Network Map */}
          <div className="lg:col-span-8 relative">
            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl" style={{ minHeight: '380px' }}>

              {/* Grid backdrop */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #64748b 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(37,99,235,0.12),transparent)] pointer-events-none" />

              <svg
                className="w-full h-auto relative z-10"
                viewBox="0 0 800 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Peta jaringan distribusi nasional"
              >
                {/* Route Lines */}
                {routes.map((route, idx) => {
                  const from = cities[route.from];
                  const to = cities[route.to];
                  // Quadratic bezier control point
                  const midX = (from.x + to.x) / 2;
                  const midY = (from.y + to.y) / 2 - 30;
                  return (
                    <g key={idx}>
                      <path
                        d={`M${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                        stroke={route.color}
                        strokeWidth="1.5"
                        strokeDasharray={route.type !== 'regular' ? '6 4' : '0'}
                        opacity="0.7"
                      />
                      {/* Animated pulse circle on route */}
                      <circle r="3.5" fill={route.color} opacity="0.9">
                        <animateMotion
                          dur={`${3.5 + idx * 0.7}s`}
                          repeatCount="indefinite"
                          path={`M${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                        />
                      </circle>
                    </g>
                  );
                })}

                {/* City Nodes */}
                {cities.map((city, idx) => {
                  const r = city.isHub ? 8 : 5;
                  const pulseR = city.isHub ? 18 : 13;
                  const labelX = city.labelAnchor === 'right' ? city.x + r + 8 : city.x - r - 8;
                  const anchor = city.labelAnchor === 'right' ? 'start' : 'end';
                  return (
                    <g key={idx} transform={`translate(${city.x}, ${city.y})`}>
                      <circle r={pulseR} fill={city.color} fillOpacity="0.12">
                        <animate attributeName="r" values={`${pulseR - 2};${pulseR + 3};${pulseR - 2}`} dur="3s" repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" values="0.12;0.06;0.12" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle r={r} fill={city.color} />
                      {city.isHub && (
                        <circle r={r} fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
                      )}
                      <text
                        x={labelX - city.x}
                        y="4"
                        fill={city.isHub ? '#ffffff' : '#cbd5e1'}
                        fontSize={city.isHub ? '12' : '10.5'}
                        fontWeight={city.isHub ? 'bold' : '600'}
                        textAnchor={anchor}
                        fontFamily="Inter, sans-serif"
                      >
                        {city.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur-sm border-t border-slate-800/60 px-5 py-3 flex items-center justify-between">
                <p className="text-slate-400 text-xs font-medium">Jaringan Rute Pengiriman Aktif Indonesia</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">Live Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
