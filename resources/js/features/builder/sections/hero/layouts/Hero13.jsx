import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KIOSO — Playful Food Hero
 * Pastel ceria + kartu menu + badge promo. Untuk F&B / kids.
 */
export default function Hero13({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-13', type: 'badge', props: { content: '🎉 Promo: Buy 1 Get 1 Weekend!', background: '#fce7f3', color: '#db2777' } },
    { id: 'heading-13', type: 'heading', props: { content: 'Yummy food, happy tummy!', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-13', type: 'text', props: { content: 'Fresh burgers, creamy shakes & crispy fries — delivered hot in 20 minutes.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-order', type: 'button', props: { label: 'Order Now 🍔', href: '#order', variant: 'primary', size: 'large', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'img-13', type: 'image', props: { src: '', alt: 'Food', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '32px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-16 px-6 bg-[#fef9c3]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-white border-[3px] border-slate-900 rounded-[28px] p-7 shadow-[8px_8px_0_#0f172a] -rotate-1">
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="flex items-center gap-2 mt-5">
            <div className="flex -space-x-2">
              {['🧒', '👧', '👦'].map((e, i) => (
                <span key={i} className="w-9 h-9 rounded-full bg-amber-100 border-2 border-slate-900 flex items-center justify-center text-lg">{e}</span>
              ))}
            </div>
            <p className="text-xs font-bold select-none">12,000+ happy kids ★★★★★</p>
          </div>
        </div>
        <div className="border-[3px] border-slate-900 rounded-[32px] overflow-hidden shadow-[8px_8px_0_#0f172a] rotate-1 bg-white">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
