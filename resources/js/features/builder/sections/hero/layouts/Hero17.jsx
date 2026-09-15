import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Sport Full-Bleed
 * Merah sporty + headline italic + strip statistik.
 * Untuk otomotif / sport / eSports.
 */
export default function Hero17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-17', type: 'badge', props: { content: '🏁 NEW GT SERIES 2026', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-17', type: 'heading', props: { content: 'Born to outrun', level: 'h1', fontSize: '72px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-17', type: 'text', props: { content: '0–100 in 2.8s. 680HP hybrid powertrain. The fastest Veloce ever built.', fontSize: '18px', color: '#fecaca', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-test', type: 'button', props: { label: 'Book Test Drive →', href: '#test', variant: 'primary', size: 'large', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    { id: 'img-17', type: 'image', props: { src: '', alt: 'Car', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '16px' } },
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
          <div className="flex flex-wrap gap-3 mt-2">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="flex gap-8 mt-8 not-italic">
            {[['2.8s', '0–100'], ['680', 'HP'], ['340', 'km/h']].map(([v, l]) => (
              <div key={l}><p className="text-3xl font-black text-white">{v}</p><p className="text-[11px] tracking-widest text-red-400 uppercase">{l}</p></div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-red-500/30 shadow-[0_0_80px_-20px_rgba(239,68,68,0.6)] -skew-x-2">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
      <div className="relative bg-red-600 text-white text-center text-xs font-black tracking-[0.3em] py-2 select-none">VELOCE GT — UNLEASHED</div>
    </section>
  );
}
