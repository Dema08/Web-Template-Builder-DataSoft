import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 15 — MONOCLE Editorial Magazine
 * Mirrors Hero15 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv15-badge', type: 'badge', props: { content: 'EDITORIAL SERVICES — AUTUMN 2026', background: '#1c1917', color: '#fafaf9' } },
    { id: 'srv15-heading', type: 'heading', props: { content: 'Curated editorial & publishing services', level: 'h2', fontSize: '64px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'srv15-text', type: 'text', props: { content: 'Inside the studios, kitchens, and workshops of a generation choosing craft over scale.', fontSize: '18px', color: '#57534e', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'srv15-card-1',
      type: 'card',
      props: { variant: 'service', background: '#f5f5f4', borderRadius: '8px', shadow: 'none', borderWidth: '1px', borderColor: '#d6d3d1', padding: '24px' },
      childrenComponents: [
        { id: 'srv15-c1-icon', type: 'icon', props: { icon: 'FaNewspaper', size: '32px', color: '#1c1917', align: 'left' } },
        { id: 'srv15-c1-title', type: 'heading', props: { content: 'News Curation', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1c1917', margin: '12px 0 6px 0' } },
        { id: 'srv15-c1-desc', type: 'text', props: { content: 'Investigative reports and editorial pieces.', fontSize: '14px', color: '#57534e', margin: '0' } },
      ],
    },
    {
      id: 'srv15-card-2',
      type: 'card',
      props: { variant: 'service', background: '#f5f5f4', borderRadius: '8px', shadow: 'none', borderWidth: '1px', borderColor: '#d6d3d1', padding: '24px' },
      childrenComponents: [
        { id: 'srv15-c2-icon', type: 'icon', props: { icon: 'FaPenNib', size: '32px', color: '#1c1917', align: 'left' } },
        { id: 'srv15-c2-title', type: 'heading', props: { content: 'Opinion Columns', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1c1917', margin: '12px 0 6px 0' } },
        { id: 'srv15-c2-desc', type: 'text', props: { content: 'In-depth analytical essays by top columnists.', fontSize: '14px', color: '#57534e', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-14 px-6 bg-[#faf9f6] border-b-2 border-stone-900">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center" style={{ fontFamily: 'Georgia, serif' }}>
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-4 select-none">By Editorial Team — 12 min read</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
