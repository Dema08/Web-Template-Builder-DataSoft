import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AETHER — Ultra Premium Finale Story
 * Penutup koleksi: aurora + glass + kartu nilai + progress.
 * About paling mewah dari 20 variasi.
 */
export default function About20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-20', type: 'badge', props: { content: '✦ THE AETHER STORY', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'heading-20', type: 'heading', props: { content: 'The OS for ambitious teams', level: 'h2', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-20', type: 'text', props: { content: 'Founded 2021. Today Aether runs the operations of 8,000 companies — one platform, infinite scale.', fontSize: '16px', color: '#a5b4fc', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-journey', type: 'button', props: { label: 'Our Journey ✦', href: '#journey', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'img-20', type: 'image', props: { src: '', alt: 'HQ', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="grid grid-cols-3 gap-3 mt-8 select-none pointer-events-none">
            {[['8k', 'Companies'], ['$120M', 'Raised'], ['2021', 'Founded']].map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-4 py-4 text-center">
                <p className="text-xl font-black text-white">{v}</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[20px] overflow-hidden border border-white/15 shadow-[0_32px_80px_-20px_rgba(99,102,241,0.5)]">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
