import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * GOLDLEAF — Heritage Gold
 * Krem + emas + ornamen klasik. Untuk hotel, perhiasan,
 * brand heritage yang timeless.
 */
export default function Hero09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-9', type: 'badge', props: { content: '✦ SINCE 1987', background: '#fef3c7', color: '#92400e' } },
    { id: 'heading-9', type: 'heading', props: { content: 'A legacy cast in gold', level: 'h1', fontSize: '60px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-9', type: 'text', props: { content: 'Three generations of craftsmanship — from heritage boutiques to private collections worldwide.', fontSize: '17px', color: '#92600e', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-visit', type: 'button', props: { label: '✦ Visit Boutique', href: '#visit', variant: 'primary', size: 'large', radius: 'full', background: '#b45309', color: '#fffbeb' } },
    { id: 'btn-story', type: 'button', props: { label: 'Our Heritage', href: '#heritage', variant: 'ghost', size: 'large', background: 'transparent', color: '#92400e' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-white">
      <div className="max-w-4xl mx-auto text-center" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500" />
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500" />
        </div>
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}
        </div>
        <div className="flex items-center justify-center gap-8 mt-10 text-amber-900">
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
