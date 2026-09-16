import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 17 — VELOCE Sport Full-Bleed
 * Mirrors Hero17 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv17-badge', type: 'badge', props: { content: '🏁 VELOCE GT SERVICES 2026', background: '#fef2f2', color: '#dc2626' } },
    { id: 'srv17-heading', type: 'heading', props: { content: 'High-performance tuning services', level: 'h2', fontSize: '72px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 14px 0' } },
    { id: 'srv17-text', type: 'text', props: { content: '0–100 tuning in 2.8s. 680HP hybrid powertrain support. The fastest engineering garage ever built.', fontSize: '18px', color: '#fecaca', align: 'left', margin: '0 0 26px 0' } },
    {
      id: 'srv17-card-1',
      type: 'card',
      props: { variant: 'service-dark', background: '#111827', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.3)', padding: '24px' },
      childrenComponents: [
        { id: 'srv17-c1-icon', type: 'icon', props: { icon: 'FaCogs', size: '32px', color: '#ef4444', align: 'left' } },
        { id: 'srv17-c1-title', type: 'heading', props: { content: 'Engine Tuning', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'srv17-c1-desc', type: 'text', props: { content: 'Precision ECU remapping and hybrid tuning.', fontSize: '14px', color: '#fecaca', margin: '0' } },
      ],
    },
    {
      id: 'srv17-card-2',
      type: 'card',
      props: { variant: 'service-dark', background: '#111827', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.3)', padding: '24px' },
      childrenComponents: [
        { id: 'srv17-c2-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '32px', color: '#ef4444', align: 'left' } },
        { id: 'srv17-c2-title', type: 'heading', props: { content: 'Track Diagnostics', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'srv17-c2-desc', type: 'text', props: { content: 'Telemetry testing and aerodynamic optimization.', fontSize: '14px', color: '#fecaca', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(239,68,68,0.25),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 py-20">
        <div className="italic">
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex gap-8 mt-8 not-italic">
            {[['2.8s', '0–100'], ['680', 'HP'], ['340', 'km/h']].map(([v, l]) => (
              <div key={l}><p className="text-3xl font-black text-white">{v}</p><p className="text-[11px] tracking-widest text-red-400 uppercase">{l}</p></div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-italic">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
      <div className="relative bg-red-600 text-white text-center text-xs font-black tracking-[0.3em] py-2 select-none">VELOCE GT SERVICES — UNLEASHED</div>
    </section>
  );
}
