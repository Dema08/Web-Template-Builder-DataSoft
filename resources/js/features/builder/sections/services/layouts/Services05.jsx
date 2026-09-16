import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 05 — SERENITY Minimal Zen
 * Mirrors Hero05 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv5-heading', type: 'heading', props: { content: 'Breathe. Quiet sanctuary services.', level: 'h2', fontSize: '50px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'srv5-text', type: 'text', props: { content: 'Slow mornings, mindful wellness rituals, and bespoke therapies crafted for stillness in Ubud.', fontSize: '17px', color: '#78716c', align: 'center', margin: '0 0 30px 0' } },
    {
      id: 'srv5-card-1',
      type: 'card',
      props: { variant: 'service-zen', background: '#fafaf9', borderRadius: '16px', shadow: 'sm', padding: '24px' },
      childrenComponents: [
        { id: 'srv5-c1-icon', type: 'icon', props: { icon: 'FaLeaf', size: '32px', color: '#78716c', align: 'center' } },
        { id: 'srv5-c1-title', type: 'heading', props: { content: 'Mindful Meditation', level: 'h3', fontSize: '18px', fontWeight: '500', color: '#1c1917', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'srv5-c1-desc', type: 'text', props: { content: 'Guided stillness sessions for inner peace.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'srv5-card-2',
      type: 'card',
      props: { variant: 'service-zen', background: '#fafaf9', borderRadius: '16px', shadow: 'sm', padding: '24px' },
      childrenComponents: [
        { id: 'srv5-c2-icon', type: 'icon', props: { icon: 'FaSpa', size: '32px', color: '#78716c', align: 'center' } },
        { id: 'srv5-c2-title', type: 'heading', props: { content: 'Holistic Spa', level: 'h3', fontSize: '18px', fontWeight: '500', color: '#1c1917', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'srv5-c2-desc', type: 'text', props: { content: 'Natural botanical therapies and massage rituals.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-28 px-6 bg-[#faf9f7]">
      <div className="max-w-4xl mx-auto text-center" style={{ fontFamily: 'Georgia, serif' }}>
        <p className="text-[11px] tracking-[0.5em] text-stone-400 mb-6 select-none">U B U D — S E R E N I T Y</p>
        {renderLayoutComponents(heading, sectionId)}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="w-12 h-px bg-stone-300" />
          <div className="w-1.5 h-1.5 rotate-45 bg-stone-400" />
          <div className="w-12 h-px bg-stone-300" />
        </div>
        {renderLayoutComponents(text, sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
