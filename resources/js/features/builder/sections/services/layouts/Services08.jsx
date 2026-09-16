import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 08 — SAKURA Centered Floral
 * Mirrors Hero08 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv8-badge', type: 'badge', props: { content: '🌸 Spring Collection 2026', background: '#fce7f3', color: '#be185d' } },
    { id: 'srv8-heading', type: 'heading', props: { content: 'Services where every moment blooms', level: 'h2', fontSize: '58px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'srv8-text', type: 'text', props: { content: 'Bridal styling, floral events, and intimate celebrations curated with love in the city.', fontSize: '17px', color: '#9d7b8c', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'srv8-card-1',
      type: 'card',
      props: { variant: 'service', background: '#fff1f2', borderRadius: '24px', shadow: 'sm', padding: '28px' },
      childrenComponents: [
        { id: 'srv8-c1-icon', type: 'icon', props: { icon: 'FaHeart', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'srv8-c1-title', type: 'heading', props: { content: 'Bridal Styling', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'srv8-c1-desc', type: 'text', props: { content: 'Exquisite floral design and event coordination.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'srv8-card-2',
      type: 'card',
      props: { variant: 'service', background: '#fff1f2', borderRadius: '24px', shadow: 'sm', padding: '28px' },
      childrenComponents: [
        { id: 'srv8-c2-icon', type: 'icon', props: { icon: 'FaSpa', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'srv8-c2-title', type: 'heading', props: { content: 'Floral Spa', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'srv8-c2-desc', type: 'text', props: { content: 'Relaxing botanical treatments for body and soul.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fff1f5] via-white to-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center" style={{ fontFamily: 'Georgia, serif' }}>
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
