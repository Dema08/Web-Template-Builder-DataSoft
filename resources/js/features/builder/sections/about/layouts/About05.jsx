import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Sporty Garage Story
 * Merah sporty + strip spek + foto miring.
 * Untuk otomotif / sport / eSports.
 */
export default function About05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-5', type: 'badge', props: { content: '🏁 Since 2015 — Racing DNA', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-5', type: 'heading', props: { content: 'Built in the garage, proven on track', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-5', type: 'text', props: { content: 'Veloce started with 3 mechanics and one obsession: speed. Today we ship championship machines worldwide.', fontSize: '16px', color: '#fecaca', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-garage', type: 'button', props: { label: 'Tour the Garage →', href: '#garage', variant: 'primary', size: 'medium', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    { id: 'img-5', type: 'image', props: { src: '', alt: 'Garage', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '16px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(239,68,68,0.22),transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 py-20 italic">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1 not-italic">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="flex gap-8 mt-8 not-italic select-none pointer-events-none">
            {[['11', 'Titles'], ['68', 'Wins'], ['2015', 'Founded']].map(([v, l]) => (
              <div key={l}><p className="text-3xl font-black text-white">{v}</p><p className="text-[11px] tracking-widest text-red-400 uppercase">{l}</p></div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-red-500/30 shadow-[0_0_80px_-20px_rgba(239,68,68,0.6)] -skew-x-2 not-italic">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
