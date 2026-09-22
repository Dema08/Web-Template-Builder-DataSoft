import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NOIR — Full Dark Interactive Network Map
 * Tampilan jangkauan gelap mewah dengan peta jaringan rute vektor interaktif, garis transit beranimasi, dan aksen emas.
 * Cocok untuk logistik enterprise, express cargo nasional, dan jaringan transportasi kelas premier.
 */
export default function Coverage02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov02-badge', type: 'badge', props: { content: '✦ PREMIER DISTRIBUTION NETWORK', background: '#1c1917', color: '#e7c873' } },
    { id: 'cov02-heading', type: 'heading', props: { content: 'Jangkauan Distribusi Nasional Berstandar Tinggi', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#fafaf9', align: 'left', margin: '0 0 14px 0' } },
    { id: 'cov02-desc', type: 'text', props: { content: 'Infrastruktur rute logistik multi-modal yang menghubungkan hub metropolitan ke seluruh penjuru kepulauan dengan kepastian jadwal tanpa jeda.', fontSize: '16px', color: '#a8a29e', align: 'left', margin: '0 0 32px 0' } },
    {
      id: 'cov02-card-1', type: 'card', props: { variant: 'default', background: '#141210', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#292524', hoverEffect: 'lift', padding: '18px' },
      childrenComponents: [
        { id: 'cov02-c1-val', type: 'heading', props: { content: '514+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#e7c873', margin: '0 0 4px 0' } },
        { id: 'cov02-c1-lbl', type: 'text', props: { content: 'Kota & Kabupaten Terjangkau', fontSize: '13px', fontWeight: '600', color: '#a8a29e', margin: '0' } }
      ]
    },
    {
      id: 'cov02-card-2', type: 'card', props: { variant: 'default', background: '#141210', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#292524', hoverEffect: 'lift', padding: '18px' },
      childrenComponents: [
        { id: 'cov02-c2-val', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#38bdf8', margin: '0 0 4px 0' } },
        { id: 'cov02-c2-lbl', type: 'text', props: { content: 'Hub Logistik & Fulfillment', fontSize: '13px', fontWeight: '600', color: '#a8a29e', margin: '0' } }
      ]
    },
    {
      id: 'cov02-card-3', type: 'card', props: { variant: 'default', background: '#141210', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#292524', hoverEffect: 'lift', padding: '18px' },
      childrenComponents: [
        { id: 'cov02-c3-val', type: 'heading', props: { content: '99.8%', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#4ade80', margin: '0 0 4px 0' } },
        { id: 'cov02-c3-lbl', type: 'text', props: { content: 'Akurasi Waktu Tiba (SLA)', fontSize: '13px', fontWeight: '600', color: '#a8a29e', margin: '0' } }
      ]
    }
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComp = layoutComponents.filter(c => c.type === 'badge');
  const titleComp = layoutComponents.find(c => c.id === 'cov02-heading') || layoutComponents.find(c => c.type === 'heading');
  const descComp = layoutComponents.find(c => c.id === 'cov02-desc') || layoutComponents.find(c => c.type === 'text');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  // City nodes for the map
  const cities = [
    { x: 115, y: 170, name: 'Medan', isHub: false, color: '#e7c873', labelAnchor: 'right' },
    { x: 330, y: 335, name: 'Jakarta (HQ)', isHub: true, color: '#e7c873', labelAnchor: 'right' },
    { x: 465, y: 355, name: 'Surabaya', isHub: false, color: '#e7c873', labelAnchor: 'right' },
    { x: 490, y: 195, name: 'Balikpapan (IKN)', isHub: true, color: '#38bdf8', labelAnchor: 'right' },
    { x: 620, y: 240, name: 'Makassar', isHub: false, color: '#e7c873', labelAnchor: 'left' },
    { x: 700, y: 160, name: 'Manado', isHub: false, color: '#38bdf8', labelAnchor: 'left' },
    { x: 750, y: 320, name: 'Jayapura', isHub: false, color: '#4ade80', labelAnchor: 'left' },
  ];

  // Routes: [from, to] indices
  const routes = [
    { from: 0, to: 1, color: '#e7c873', type: 'express' },
    { from: 1, to: 2, color: '#e7c873', type: 'regular' },
    { from: 1, to: 3, color: '#38bdf8', type: 'regular' },
    { from: 2, to: 4, color: '#e7c873', type: 'express' },
    { from: 3, to: 4, color: '#38bdf8', type: 'regular' },
    { from: 3, to: 5, color: '#38bdf8', type: 'fast' },
    { from: 4, to: 5, color: '#38bdf8', type: 'fast' },
    { from: 4, to: 6, color: '#4ade80', type: 'fast' },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#0c0a09] overflow-hidden" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Noir Ambient Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,162,39,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Header + Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              {badgeComp.length > 0 && <div className="mb-4">{renderLayoutComponents(badgeComp, sectionId)}</div>}
              {titleComp && renderLayoutComponents([titleComp], sectionId)}
              <div className="flex items-center gap-3 my-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
                <div className="w-2 h-2 rotate-45 bg-[#c9a227]" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
              </div>
              {descComp && (
                <div style={{ fontFamily: 'Inter, sans-serif' }}>
                  {renderLayoutComponents([descComp], sectionId)}
                </div>
              )}
            </div>

            {/* Stat Cards */}
            <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              {renderLayoutComponents(cardComponents, sectionId)}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 pt-2 font-sans">
              {[
                { color: '#e7c873', label: 'Jalur Utama Tol Darat', dash: false },
                { color: '#38bdf8', label: 'Tol Laut Nusantara', dash: true },
                { color: '#4ade80', label: 'Air Express Kargo', dash: true },
              ].map((leg, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#a8a29e] font-medium">
                  <svg width="24" height="6">
                    <line x1="0" y1="3" x2="24" y2="3" stroke={leg.color} strokeWidth="2" strokeDasharray={leg.dash ? '4 3' : '0'} />
                  </svg>
                  {leg.label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Interactive SVG Network Map */}
          <div className="lg:col-span-8 relative">
            <div className="relative bg-[#141210] rounded-2xl border border-[#292524] overflow-hidden shadow-2xl" style={{ minHeight: '400px' }}>

              {/* Grid backdrop */}
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #c9a227 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(201,162,39,0.08),transparent)] pointer-events-none" />

              <svg className="w-full h-auto relative z-10" viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Peta jaringan rute distribusi">
                {/* Route Lines */}
                {routes.map((route, idx) => {
                  const from = cities[route.from];
                  const to = cities[route.to];
                  const midX = (from.x + to.x) / 2;
                  const midY = (from.y + to.y) / 2 - 30;
                  return (
                    <g key={idx}>
                      <path d={`M${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`} stroke={route.color} strokeWidth="1.5" strokeDasharray={route.type !== 'regular' ? '6 4' : '0'} opacity="0.6" />
                      <circle r="3.5" fill={route.color} opacity="0.9">
                        <animateMotion dur={`${3.5 + idx * 0.7}s`} repeatCount="indefinite" path={`M${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`} />
                      </circle>
                    </g>
                  );
                })}

                {/* City Nodes */}
                {cities.map((city, idx) => {
                  const r = city.isHub ? 7 : 4.5;
                  const pulseR = city.isHub ? 16 : 11;
                  const labelX = city.labelAnchor === 'right' ? city.x + r + 8 : city.x - r - 8;
                  const anchor = city.labelAnchor === 'right' ? 'start' : 'end';
                  return (
                    <g key={idx} transform={`translate(${city.x}, ${city.y})`}>
                      <circle r={pulseR} fill={city.color} fillOpacity="0.12">
                        <animate attributeName="r" values={`${pulseR - 2};${pulseR + 3};${pulseR - 2}`} dur="3s" repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" values="0.12;0.05;0.12" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle r={r} fill={city.color} />
                      {city.isHub && <circle r={r + 2} fill="none" stroke="#fafaf9" strokeWidth="1.5" opacity="0.8" />}
                      <text x={labelX - city.x} y="4" fill={city.isHub ? '#fafaf9' : '#a8a29e'} fontSize={city.isHub ? '12' : '10'} fontWeight={city.isHub ? 'bold' : '600'} textAnchor={anchor} fontFamily="Inter, sans-serif">
                        {city.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0c0a09]/90 backdrop-blur-sm border-t border-[#292524] px-6 py-3.5 flex items-center justify-between" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-[#a8a29e] text-xs font-medium">Jaringan Rute Aktif Nasional & Hub Sentral</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                  <span className="text-[#4ade80] text-xs font-bold">100% Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
