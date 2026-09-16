import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 13 — KIOSO Playful Food Services
 * Mirrors Hero13 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services13({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv13-badge', type: 'badge', props: { content: '🎉 Promo: Buy 1 Get 1 Weekend!', background: '#fce7f3', color: '#db2777' } },
    { id: 'srv13-heading', type: 'heading', props: { content: 'Yummy food services & happy tummy!', level: 'h2', fontSize: '56px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'srv13-text', type: 'text', props: { content: 'Fresh burgers, creamy shakes & crispy fries delivered hot in 20 minutes.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'srv13-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv13-c1-icon', type: 'icon', props: { icon: 'FaHamburger', size: '32px', color: '#ec4899', align: 'center' } },
        { id: 'srv13-c1-title', type: 'heading', props: { content: 'Burger Premium', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'srv13-c1-desc', type: 'text', props: { content: 'Juicy beef with melted cheese.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'srv13-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv13-c2-icon', type: 'icon', props: { icon: 'FaIceCream', size: '32px', color: '#ec4899', align: 'center' } },
        { id: 'srv13-c2-title', type: 'heading', props: { content: 'Milkshake & Dessert', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'srv13-c2-desc', type: 'text', props: { content: 'Sweet refreshing cold drinks.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-16 px-6 bg-[#fef9c3]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-white border-[3px] border-slate-900 rounded-[28px] p-7 shadow-[8px_8px_0_#0f172a] -rotate-1">
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex items-center gap-2 mt-5">
            <div className="flex -space-x-2">
              {['🧒', '👧', '👦'].map((e, i) => (
                <span key={i} className="w-9 h-9 rounded-full bg-amber-100 border-2 border-slate-900 flex items-center justify-center text-lg">{e}</span>
              ))}
            </div>
            <p className="text-xs font-bold select-none">12,000+ happy kids ★★★★★</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
