import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Hero09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'hero09-badge', type: 'badge', props: { content: '🚚 Jaringan Nasional & Internasional', variant: 'primary', size: 'medium' } },
    { id: 'hero09-title', type: 'heading', props: { content: 'Moving Businesses Forward, Across Indonesia.', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', lineHeight: '1.15', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
    { id: 'hero09-desc', type: 'text', props: { content: 'Penyedia solusi rantai pasok terintegrasi untuk korporasi B2B. Armada darat, laut, udara modern dengan sistem pelacakan real-time.', fontSize: '18px', color: '#94a3b8', align: 'left', lineHeight: '1.7', margin: '0 0 36px 0' } },
    { id: 'hero09-btn1', type: 'button', props: { label: 'Request a Quote →', href: '#contact', variant: 'primary', size: 'large', background: '#f97316', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700', radius: 'lg' } },
    { id: 'hero09-btn2', type: 'button', props: { label: 'Track Shipment', href: '#tracking', variant: 'outline', size: 'large', background: 'transparent', color: '#ffffff', shadow: 'none', fontSize: '16px', fontWeight: '700', radius: 'lg' } },
    { id: 'hero09-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80', alt: 'Cargo Ship Logistics', width: '100%', height: '100%', objectFit: 'cover' } }
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  // Smart component matching by type and position
  const allHeadings = layoutComponents.filter(c => c.type === 'heading');
  const allTexts = layoutComponents.filter(c => c.type === 'text');
  const allButtons = layoutComponents.filter(c => c.type === 'button');
  const allBadges = layoutComponents.filter(c => c.type === 'badge');
  const imageComp = layoutComponents.find(c => c.type === 'image');

  const badgeComp = allBadges[0];
  const titleComp = allHeadings[0];
  const descComp = allTexts[0];
  const primaryButton = allButtons[0];
  const secondaryButton = allButtons[1];

  // Stat cards baked into the design
  const stats = [
    { icon: '🚚', label: 'Active Fleet', value: '500+ Armada' },
    { icon: '⏱️', label: 'On-Time Rate', value: '99.8% Tepat Waktu' },
    { icon: '📍', label: 'Kota Terjangkau', value: '50+ Kota' },
  ];

  return (
    <section className="relative w-full bg-slate-950 text-white overflow-hidden" style={{ minHeight: '600px' }}>

      {/* Ambient background gradients */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_30%_-20%,rgba(37,99,235,0.15),transparent)]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_60%_60%_at_80%_120%,rgba(249,115,22,0.08),transparent)]" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text Content */}
          <div className="flex flex-col gap-5">

            {/* Badge */}
            {badgeComp && (
              <div className="flex">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold">
                  {badgeComp.props?.content || '🚚 Jaringan Nasional & Internasional'}
                </div>
              </div>
            )}

            {/* Title */}
            {titleComp && (
              <div className="w-full">
                {renderLayoutComponents([titleComp], sectionId)}
              </div>
            )}

            {/* Description */}
            {descComp && (
              <div className="w-full max-w-xl">
                {renderLayoutComponents([descComp], sectionId)}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              {primaryButton && renderLayoutComponents([primaryButton], sectionId)}
              {secondaryButton && renderLayoutComponents([secondaryButton], sectionId)}
            </div>

            {/* Mini Divider */}
            <div className="h-px w-16 bg-slate-700 mt-2" />

            {/* Trust Stats Row */}
            <div className="flex flex-wrap items-center gap-6">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-base shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium leading-none mb-0.5">{s.label}</div>
                    <div className="text-sm font-bold text-slate-200 leading-none">{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image + overlay cards */}
          <div className="relative flex items-center justify-center">
            {/* Main image card */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800/80 shadow-[0_32px_80px_rgba(0,0,0,0.6)] bg-slate-900" style={{ aspectRatio: '4/3' }}>
              {imageComp ? (
                <div className="absolute inset-0">
                  {renderLayoutComponents([imageComp], sectionId)}
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <span className="text-slate-600 text-4xl">🚢</span>
                </div>
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />
              {/* Corner accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-blue-600" />
            </div>

            {/* Floating Card: Fleet Count */}
            <div className="absolute -top-4 -right-4 z-10 bg-slate-900/95 backdrop-blur-lg border border-slate-700/60 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 select-none pointer-events-none">
              <div className="w-9 h-9 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 text-lg">
                🚚
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Active Fleet</div>
                <div className="text-base font-bold text-slate-100">500+ Trucks</div>
              </div>
            </div>

            {/* Floating Card: On-Time Rate */}
            <div className="absolute -bottom-4 -left-4 z-10 bg-slate-900/95 backdrop-blur-lg border border-slate-700/60 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 select-none pointer-events-none">
              <div className="w-9 h-9 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-lg">
                ⏱️
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">On-Time Rate</div>
                <div className="text-base font-bold text-slate-100">99.8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
