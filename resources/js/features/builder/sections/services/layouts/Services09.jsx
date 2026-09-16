import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 09 — GOLDLEAF Heritage Gold
 * Mirrors Hero09 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv9-badge', type: 'badge', props: { content: '✦ HERITAGE SERVICES 1987', background: '#fef3c7', color: '#92400e' } },
    { id: 'srv9-heading', type: 'heading', props: { content: 'A legacy of craftsmanship services', level: 'h2', fontSize: '60px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 16px 0' } },
    { id: 'srv9-text', type: 'text', props: { content: 'Three generations of expertise — from bespoke heritage jewelry to private collection curation worldwide.', fontSize: '17px', color: '#92600e', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'srv9-card-1',
      type: 'card',
      props: { variant: 'service', background: '#fffbeb', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fde68a', padding: '28px' },
      childrenComponents: [
        { id: 'srv9-c1-icon', type: 'icon', props: { icon: 'FaGem', size: '32px', color: '#b45309', align: 'center' } },
        { id: 'srv9-c1-title', type: 'heading', props: { content: 'Bespoke Jewelry', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#451a03', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'srv9-c1-desc', type: 'text', props: { content: 'Custom-crafted gold and diamond heirlooms.', fontSize: '14px', color: '#92600e', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'srv9-card-2',
      type: 'card',
      props: { variant: 'service', background: '#fffbeb', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fde68a', padding: '28px' },
      childrenComponents: [
        { id: 'srv9-c2-icon', type: 'icon', props: { icon: 'FaAward', size: '32px', color: '#b45309', align: 'center' } },
        { id: 'srv9-c2-title', type: 'heading', props: { content: 'Authentication', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#451a03', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'srv9-c2-desc', type: 'text', props: { content: 'Certified appraisals and purity verification.', fontSize: '14px', color: '#92600e', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-white">
      <div className="max-w-5xl mx-auto text-center" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500" />
          {renderLayoutComponents(badge, sectionId)}
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500" />
        </div>
        {renderLayoutComponents(heading, sectionId)}
        {renderLayoutComponents(text, sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="flex items-center justify-center gap-8 mt-12 text-amber-900">
          {[['38', 'Years'], ['12', 'Boutiques'], ['40k', 'Patrons']].map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="text-3xl font-bold">{v}</p>
              <p className="text-[11px] tracking-[0.3em] uppercase">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
