import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 08 — SAKURA Centered Floral
 * Mirrors Hero08 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v8-badge', type: 'badge', props: { content: '🌸 Spring Vision 2026', background: '#fce7f3', color: '#be185d' } },
    { id: 'v8-heading', type: 'heading', props: { content: 'Where every strategic vision blooms', level: 'h2', fontSize: '58px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v8-text', type: 'text', props: { content: 'Elegant growth, harmonious ecosystems, and artistic execution crafted with care in the heart of the industry.', fontSize: '17px', color: '#9d7b8c', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'v8-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', padding: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fbcfe8' },
      childrenComponents: [
        { id: 'v8-c1-title', type: 'heading', props: { content: 'Harmoni Kreatif', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 6px 0' } },
        { id: 'v8-c1-desc', type: 'text', props: { content: 'Menyelaraskan keindahan estetika dengan ketajaman bisnis.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'v8-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', padding: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fbcfe8' },
      childrenComponents: [
        { id: 'v8-c2-title', type: 'heading', props: { content: 'Pertumbuhan Organik', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 6px 0' } },
        { id: 'v8-c2-desc', type: 'text', props: { content: 'Berkembang secara berkelanjutan dan penuh makna.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0' } },
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
      <div className="max-w-3xl mx-auto text-center" style={{ fontFamily: 'Georgia, serif' }}>
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
      </div>
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderLayoutComponents(cards, sectionId)}
      </div>
    </section>
  );
}
