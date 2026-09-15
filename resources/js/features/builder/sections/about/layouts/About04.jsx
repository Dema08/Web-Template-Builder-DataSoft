import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EMERALD — Eco Impact Story
 * Hijau segar + kartu dampak + foto produk + badge pohon.
 * Untuk eco brand / organik / skincare natural.
 */
export default function About04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-4', type: 'badge', props: { content: '🌿 Our Impact', background: '#dcfce7', color: '#15803d' } },
    { id: 'heading-4', type: 'heading', props: { content: 'From farm to door, carbon-neutral', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-4', type: 'text', props: { content: 'We partner with 200+ organic farms. Every order plants a tree — 32,000 and counting.', fontSize: '16px', color: '#4d7c0f', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-impact', type: 'button', props: { label: 'Our Sustainability →', href: '#impact', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'img-4', type: 'image', props: { src: '', alt: 'Farm', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-lime-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="grid grid-cols-3 gap-3 mt-8 max-w-md select-none pointer-events-none">
            {[['200+', 'Farms'], ['32k', 'Trees'], ['100%', 'Vegan']].map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-white border border-emerald-100 px-4 py-4 text-center shadow-sm">
                <p className="text-xl font-black text-emerald-700">{v}</p>
                <p className="text-[10px] text-emerald-600 uppercase tracking-widest">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[24px] overflow-hidden border-4 border-white shadow-[0_32px_70px_-20px_rgba(22,163,74,0.45)]">
            {renderLayoutComponents(img, sectionId)}
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 select-none pointer-events-none">
            <span className="text-2xl">🌱</span>
            <div><p className="text-sm font-black">32.000+ pohon</p><p className="text-[11px] text-slate-500">ditanam bersama pelanggan</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
