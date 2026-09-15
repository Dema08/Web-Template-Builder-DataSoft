import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * GOLDLEAF — Heritage Craft Story
 * Krem + emas + ornamen klasik + foto boutique.
 * Untuk hotel, perhiasan, brand heritage.
 */
export default function About19({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-19', type: 'badge', props: { content: '✦ SINCE 1987', background: '#fef3c7', color: '#92400e' } },
    { id: 'heading-19', type: 'heading', props: { content: 'Three generations, one standard', level: 'h2', fontSize: '46px', fontWeight: '700', color: '#451a03', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-19', type: 'text', props: { content: 'From a single Balinese workshop to 12 boutiques worldwide — every piece still finished by hand.', fontSize: '16px', color: '#92600e', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-heritage', type: 'button', props: { label: 'Our Heritage', href: '#heritage', variant: 'primary', size: 'medium', radius: 'full', background: '#b45309', color: '#fffbeb' } },
    { id: 'img-19', type: 'image', props: { src: '', alt: 'Boutique', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-white" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-[20px] overflow-hidden border-4 border-amber-200 shadow-[0_28px_60px_-20px_rgba(180,83,9,0.4)] order-2 lg:order-1">
          {renderLayoutComponents(img, sectionId)}
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-amber-500" />
            {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          </div>
          {renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="flex items-center gap-8 mt-8 text-amber-900 select-none pointer-events-none">
            {[['38', 'Years'], ['12', 'Boutiques'], ['40k', 'Patrons']].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="text-3xl font-bold">{v}</p>
                <p className="text-[10px] tracking-[0.3em] uppercase">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
