import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IRIS — Gradient Mesh Story
 * Mesh warna-warni + kartu kaca + foto tim.
 * Untuk agency kreatif / portfolio / AI produktivitas.
 */
export default function About12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-12', type: 'badge', props: { content: '✦ The Iris Story', background: '#ffffff', color: '#7c3aed' } },
    { id: 'heading-12', type: 'heading', props: { content: 'Rough ideas, polished in seconds', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-12', type: 'text', props: { content: 'We started Iris to kill blank-canvas anxiety. Today 40,000 designers turn napkin sketches into interfaces daily.', fontSize: '16px', color: '#ddd6fe', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-manifesto', type: 'button', props: { label: 'Read Manifesto ✦', href: '#manifesto', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    { id: 'img-12', type: 'image', props: { src: '', alt: 'Team', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#1e1b4b]">
      <div className="pointer-events-none absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-fuchsia-500/50 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-400/40 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block rounded-full bg-white/15 backdrop-blur border border-white/25 px-1 py-1">
            {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          </div>
          <div className="mt-5">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="rounded-[20px] overflow-hidden border border-white/25 shadow-2xl">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
