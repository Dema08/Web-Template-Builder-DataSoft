import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PAPERCUT — Brutalist Manifesto
 * Neo-brutalism kuning + border tebal + shadow kotak.
 * Berani, playful, ala Awwwards.
 */
export default function About08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-8', type: 'badge', props: { content: '★ MANIFESTO', background: '#000000', color: '#facc15' } },
    { id: 'heading-8', type: 'heading', props: { content: 'TEMPLATES ARE BORING', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-8', type: 'text', props: { content: 'We are a 12-person studio making loud websites since 2019. No themes, no shortcuts — only original work.', fontSize: '16px', color: '#000000', align: 'left', lineHeight: '1.7', margin: '0 0 24px 0' } },
    { id: 'cta-manifesto', type: 'button', props: { label: 'READ MANIFESTO ★', href: '#manifesto', variant: 'primary', size: 'medium', radius: 'none', background: '#000000', color: '#facc15' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return (
    <section className="py-20 px-6 bg-[#facc15] border-y-4 border-black">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
        <div className="bg-white border-[3px] border-black rounded-2xl p-8 shadow-[8px_8px_0_#000] rotate-[0.5deg]">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="grid grid-cols-2 gap-4 select-none pointer-events-none">
          {[['12', 'Humans'], ['90+', 'Launches'], ['6yr', 'Loud'], ['0', 'Templates']].map(([v, l]) => (
            <div key={l} className="bg-white border-[3px] border-black rounded-2xl p-5 shadow-[5px_5px_0_#000] text-center">
              <p className="text-3xl font-black">{v}</p>
              <p className="text-xs font-bold uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
