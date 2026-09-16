import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 05 — SERENITY Minimal Zen
 * Mirrors Hero05 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v5-heading', type: 'heading', props: { content: 'Breathe. The future is clear.', level: 'h2', fontSize: '60px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v5-text', type: 'text', props: { content: 'A mindful approach to growth — slow progress, deep roots, and a vision crafted for stillness and longevity.', fontSize: '17px', color: '#78716c', align: 'center', margin: '0 0 30px 0' } },
    {
      id: 'v5-card-1',
      type: 'card',
      props: { variant: 'service', background: '#f5f4f0', borderRadius: '16px', padding: '24px', borderWidth: '1px', borderColor: '#e7e5e4' },
      childrenComponents: [
        { id: 'v5-c1-title', type: 'heading', props: { content: 'Mindful Strategy', level: 'h3', fontSize: '18px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 8px 0' } },
        { id: 'v5-c1-desc', type: 'text', props: { content: 'Thoughtful execution with absolute clarity.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'v5-card-2',
      type: 'card',
      props: { variant: 'service', background: '#f5f4f0', borderRadius: '16px', padding: '24px', borderWidth: '1px', borderColor: '#e7e5e4' },
      childrenComponents: [
        { id: 'v5-c2-title', type: 'heading', props: { content: 'Sustainable Growth', level: 'h3', fontSize: '18px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 8px 0' } },
        { id: 'v5-c2-desc', type: 'text', props: { content: 'Building enduring value across generations.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0' } },
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
        <p className="text-[11px] tracking-[0.5em] text-stone-400 mb-6 select-none">V I S I O N — Z E N</p>
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
