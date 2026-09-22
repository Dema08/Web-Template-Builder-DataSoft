import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EMERALD — Eco Shop — Statistics
 * Hijau segar + toggle kategori animasi + kartu metrik natural.
 * Untuk eco brand / organik / skincare natural.
 */
export default function Statistics16({ components = [], sectionId = null }) {
  const [filter, setFilter] = useState('Semua');

  const defaultComponents = [
    { id: 'stat16-badge', type: 'badge', props: { content: '🌿 100% Natural & Vegan', background: '#dcfce7', color: '#15803d' } },
    { id: 'stat16-heading', type: 'heading', props: { content: 'Impact you can measure', level: 'h2', fontSize: '50px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat16-text', type: 'text', props: { content: 'Setiap botol yang terjual tercatat dampaknya — dari kebun petani hingga ke depan pintu Anda.', fontSize: '17px', color: '#4d7c0f', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat16-cta', type: 'button', props: { label: 'Shop Bestsellers →', href: '#shop', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    {
      id: 'stat16-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat16-c1-value', type: 'heading', props: { content: '32.000+', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#15803d', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat16-c1-label', type: 'text', props: { content: 'Pohon Ditanam', fontSize: '13px', fontWeight: '600', color: '#4d7c0f', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat16-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat16-c2-value', type: 'heading', props: { content: '100%', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#15803d', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat16-c2-label', type: 'text', props: { content: 'Bahan Natural', fontSize: '13px', fontWeight: '600', color: '#4d7c0f', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat16-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat16-c3-value', type: 'heading', props: { content: '92%', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#15803d', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat16-c3-label', type: 'text', props: { content: 'Repeat Order', fontSize: '13px', fontWeight: '600', color: '#4d7c0f', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat16-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat16-c4-value', type: 'heading', props: { content: '0kg', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#15803d', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat16-c4-label', type: 'text', props: { content: 'Emisi Plastik', fontSize: '13px', fontWeight: '600', color: '#4d7c0f', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-lime-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div className="flex gap-2 mb-5" onClick={(e) => e.stopPropagation()}>
            {['Semua', 'Serum', 'Minyak', 'Paket'].map((f) => (
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
          <div className="flex flex-wrap gap-3">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
          <p className="text-xs text-emerald-700/70 mt-4 select-none pointer-events-none">Menampilkan dampak kategori: {filter}</p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {renderLayoutComponents(cards, sectionId)}
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 select-none pointer-events-none">
            <span className="text-2xl">🌱</span>
            <div>
              <p className="text-sm font-black">32.000+ pohon</p>
              <p className="text-[11px] text-slate-500">ditanam bersama pelanggan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
