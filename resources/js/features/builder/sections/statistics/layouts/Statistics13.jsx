import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KIOSO — Playful Food — Statistics
 * Pastel ceria + kartu menu + badge promo + emoji. Untuk F&B / kids.
 */
export default function Statistics13({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat13-badge', type: 'badge', props: { content: '🎉 Promo: Buy 1 Get 1 Weekend!', background: '#fce7f3', color: '#db2777' } },
    { id: 'stat13-heading', type: 'heading', props: { content: 'Angka yang bikin lapar!', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat13-text', type: 'text', props: { content: 'Fresh burger, creamy shake & crispy fries — dikirim panas dalam 20 menit ke depan pintu.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat13-cta', type: 'button', props: { label: 'Order Now 🍔', href: '#order', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    {
      id: 'stat13-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '28px', shadow: 'none', borderWidth: '3px', borderColor: '#0f172a', hoverEffect: 'scale', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat13-c1-value', type: 'heading', props: { content: '12.000+', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat13-c1-label', type: 'text', props: { content: 'Happy Kids', fontSize: '13px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat13-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '28px', shadow: 'none', borderWidth: '3px', borderColor: '#0f172a', hoverEffect: 'scale', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat13-c2-value', type: 'heading', props: { content: '1,5M', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat13-c2-label', type: 'text', props: { content: 'Burger Terjual', fontSize: '13px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat13-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '28px', shadow: 'none', borderWidth: '3px', borderColor: '#0f172a', hoverEffect: 'scale', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat13-c3-value', type: 'heading', props: { content: '20', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat13-c3-label', type: 'text', props: { content: 'Menit Delivery', fontSize: '13px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat13-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '28px', shadow: 'none', borderWidth: '3px', borderColor: '#0f172a', hoverEffect: 'scale', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat13-c4-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat13-c4-label', type: 'text', props: { content: 'Rating ★★★★★', fontSize: '13px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-16 px-6 bg-[#fef9c3] overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-white border-[3px] border-slate-900 rounded-[28px] p-7 shadow-[8px_8px_0_#0f172a] -rotate-1">
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
          <div className="flex items-center gap-2 mt-5 select-none pointer-events-none">
            <div className="flex -space-x-2">
              {['🧒', '👧', '👦'].map((e, i) => (
                <span key={i} className="w-9 h-9 rounded-full bg-amber-100 border-2 border-slate-900 flex items-center justify-center text-lg">{e}</span>
              ))}
            </div>
            <p className="text-xs font-bold">12.000+ happy kids ★★★★★</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 rotate-1">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
