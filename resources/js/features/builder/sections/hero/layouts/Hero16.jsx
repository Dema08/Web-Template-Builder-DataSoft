import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EMERALD — Eco Shop Hero
 * Hijau segar + kartu produk + toggle kategori animasi.
 * Untuk eco brand / organik / skincare natural.
 */
export default function Hero16({ components = [], sectionId = null }) {
  const [filter, setFilter] = useState('All');

  const defaultComponents = [
    { id: 'badge-16', type: 'badge', props: { content: '🌿 100% Natural & Vegan', background: '#dcfce7', color: '#15803d' } },
    { id: 'heading-16', type: 'heading', props: { content: 'Nature, bottled for your skin', level: 'h1', fontSize: '54px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-16', type: 'text', props: { content: 'Serum, oils & rituals crafted from botanicals — carbon-neutral from farm to door.', fontSize: '17px', color: '#4d7c0f', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-shop', type: 'button', props: { label: 'Shop Bestsellers →', href: '#shop', variant: 'primary', size: 'large', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'img-16', type: 'image', props: { src: '', alt: 'Product', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '24px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-lime-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex gap-2 mb-5" onClick={(e) => e.stopPropagation()}>
            {['All', 'Serum', 'Oils', 'Sets'].map(f => (
              <button
                key={f}
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setFilter(f); }}
                className={`text-xs font-bold rounded-full px-4 py-1.5 transition-all select-none ${filter === f ? 'bg-emerald-600 text-white shadow' : 'bg-white text-emerald-700 border border-emerald-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="relative">
          <div className="rounded-[24px] overflow-hidden shadow-[0_32px_70px_-20px_rgba(22,163,74,0.45)] border-4 border-white">
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
