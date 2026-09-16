import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 17 — VELOCE Sport Full-Bleed Vision
 * Mirrors Hero17 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v17-badge', type: 'badge', props: { content: '🏁 PERFORMANCE VISION 2026', background: '#fef2f2', color: '#dc2626' } },
    { id: 'v17-heading', type: 'heading', props: { content: 'Born to outrun the competition', level: 'h2', fontSize: '72px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 14px 0' } },
    { id: 'v17-text', type: 'text', props: { content: 'Maximum velocity execution. Unmatched agility and high-performance strategic powertrain.', fontSize: '18px', color: '#fecaca', align: 'left', margin: '0 0 26px 0' } },
    {
      id: 'v17-card-1',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(239,68,68,0.1)', borderRadius: '16px', padding: '20px', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.3)' },
      childrenComponents: [
        { id: 'v17-c1-title', type: 'heading', props: { content: 'Akselerasi Maksimal', level: 'h3', fontSize: '16px', fontWeight: '800', color: '#ffffff', margin: '0 0 4px 0' } },
        { id: 'v17-c1-desc', type: 'text', props: { content: 'Pertumbuhan eksponensial dengan eksekusi kilat.', fontSize: '13px', color: '#fecaca', margin: '0' } },
      ],
    },
    { id: 'v17-img', type: 'image', props: { src: '', alt: 'Sport Vision', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '16px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(239,68,68,0.25),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 py-20">
        <div className="italic">
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="mt-2 not-italic">
            {renderLayoutComponents(copy.filter(c => c.type === 'card'), sectionId)}
          </div>
          <div className="flex gap-8 mt-8 not-italic">
            {[['2.8s', 'Agility'], ['680', 'Power'], ['340', 'Scale']].map(([v, l]) => (
              <div key={l}><p className="text-3xl font-black text-white">{v}</p><p className="text-[11px] tracking-widest text-red-400 uppercase">{l}</p></div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-red-500/30 shadow-[0_0_80px_-20px_rgba(239,68,68,0.6)] -skew-x-2">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
      <div className="relative bg-red-600 text-white text-center text-xs font-black tracking-[0.3em] py-2 select-none">VELOCE VISION — UNLEASHED</div>
    </section>
  );
}
