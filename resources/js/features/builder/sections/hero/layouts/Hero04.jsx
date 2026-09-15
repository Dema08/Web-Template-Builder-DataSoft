import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PAPERCUT — Brutalist Statement
 * Neo-brutalism: kuning + border tebal + shadow kotak keras.
 * Berani, playful, ala Awwwards.
 */
export default function Hero04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-4', type: 'badge', props: { content: '★ PORTFOLIO 2026', background: '#000000', color: '#facc15' } },
    { id: 'heading-4', type: 'heading', props: { content: 'WE MAKE LOUD WEBSITES', level: 'h1', fontSize: '64px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-4', type: 'text', props: { content: 'Studio desain anti-template. Kami bikin web yang berisik, berani, dan tidak terlupakan.', fontSize: '17px', color: '#000000', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-hire', type: 'button', props: { label: 'HIRE US ★', href: '#hire', variant: 'primary', size: 'large', radius: 'none', background: '#000000', color: '#facc15' } },
    { id: 'btn-work', type: 'button', props: { label: 'SEE WORK', href: '#work', variant: 'outline', size: 'large', radius: 'none', background: '#000000', color: '#000000' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');

  return (
    <section className="py-20 px-6 bg-[#facc15] border-b-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-block border-[3px] border-black rounded-xl bg-white px-3 py-1 shadow-[4px_4px_0_#000] -rotate-1">
            {renderLayoutComponents(badge, sectionId)}
          </div>
          <div className="mt-5 bg-white border-[3px] border-black rounded-2xl p-6 shadow-[8px_8px_0_#000] rotate-[0.5deg]">
            {renderLayoutComponents(heading, sectionId)}
            {renderLayoutComponents(text, sectionId)}
            <div className="flex flex-wrap gap-3 mt-2">
              {renderLayoutComponents(buttons, sectionId)}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[['120+', 'Projects'], ['14', 'Awards'], ['8yr', 'Studio'], ['∞', 'Ideas']].map(([v, l]) => (
            <div key={l} className="bg-white border-[3px] border-black rounded-2xl p-5 shadow-[5px_5px_0_#000] text-center hover:rotate-2 transition-transform">
              <p className="text-3xl font-black">{v}</p>
              <p className="text-xs font-bold uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
