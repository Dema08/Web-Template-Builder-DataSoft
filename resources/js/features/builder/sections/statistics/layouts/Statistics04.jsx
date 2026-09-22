import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PAPERCUT — Brutalist Statement — Statistics
 * Neo-brutalism: kuning + border tebal + shadow kotak keras + rotasi hover.
 * Berani, playful, ala Awwwards.
 */
export default function Statistics04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat4-badge', type: 'badge', props: { content: '★ SCORECARD 2026', background: '#000000', color: '#facc15' } },
    { id: 'stat4-heading', type: 'heading', props: { content: 'THE NUMBERS ARE LOUD', level: 'h2', fontSize: '56px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat4-text', type: 'text', props: { content: 'Studio desain anti-template. Angka kami tempel di dinding supaya tidak bisa dibohongi.', fontSize: '17px', color: '#000000', align: 'left', margin: '0 0 26px 0' } },
    { id: 'stat4-cta', type: 'button', props: { label: 'HIRE US ★', href: '#hire', variant: 'primary', size: 'medium', radius: 'none', background: '#000000', color: '#facc15' } },
    {
      id: 'stat4-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'scale', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat4-c1-value', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat4-c1-label', type: 'text', props: { content: 'Projects', fontSize: '12px', fontWeight: '700', color: '#000000', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat4-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'scale', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat4-c2-value', type: 'heading', props: { content: '14', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat4-c2-label', type: 'text', props: { content: 'Awards', fontSize: '12px', fontWeight: '700', color: '#000000', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat4-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'scale', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat4-c3-value', type: 'heading', props: { content: '8yr', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat4-c3-label', type: 'text', props: { content: 'Studio', fontSize: '12px', fontWeight: '700', color: '#000000', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat4-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'scale', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat4-c4-value', type: 'heading', props: { content: '∞', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat4-c4-label', type: 'text', props: { content: 'Ideas', fontSize: '12px', fontWeight: '700', color: '#000000', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-[#facc15] border-b-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-block border-[3px] border-black rounded-xl bg-white px-3 py-1 shadow-[4px_4px_0_#000] -rotate-1">
            {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          </div>
          <div className="mt-5 bg-white border-[3px] border-black rounded-2xl p-6 shadow-[8px_8px_0_#000] rotate-[0.5deg]">
            {renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}
            {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
            <div className="flex flex-wrap gap-3 mt-1">
              {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
