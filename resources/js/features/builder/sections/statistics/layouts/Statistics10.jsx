import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PULSE — Search-First Marketplace — Statistics
 * Search bar + kategori chips + kartu metrik marketplace.
 * Ala marketplace / direktori / e-commerce modern.
 */
export default function Statistics10({ components = [], sectionId = null }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('Semua');

  const defaultComponents = [
    { id: 'stat10-badge', type: 'badge', props: { content: '🔥 12.480 produk terjual hari ini', background: '#fef2f2', color: '#dc2626' } },
    { id: 'stat10-heading', type: 'heading', props: { content: 'Marketplace by the numbers', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat10-text', type: 'text', props: { content: '2 juta produk, 40.000 seller terverifikasi, dan pertumbuhan yang bisa Anda lacak sendiri.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 26px 0' } },
    { id: 'stat10-cta', type: 'button', props: { label: 'Start Selling', href: '#sell', variant: 'ghost', size: 'medium', background: 'transparent', color: '#4f46e5' } },
    {
      id: 'stat10-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat10-c1-value', type: 'heading', props: { content: '2M+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#dc2626', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat10-c1-label', type: 'text', props: { content: 'Produk Aktif', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat10-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat10-c2-value', type: 'heading', props: { content: '40.000', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#dc2626', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat10-c2-label', type: 'text', props: { content: 'Seller Terverifikasi', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat10-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat10-c3-value', type: 'heading', props: { content: '12.480', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#dc2626', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat10-c3-label', type: 'text', props: { content: 'Terjual Hari Ini', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat10-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat10-c4-value', type: 'heading', props: { content: '4,8', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#dc2626', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat10-c4-label', type: 'text', props: { content: 'Rating Pembeli', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div
            className="flex items-center gap-2 bg-slate-100 border-2 border-slate-200 rounded-full pl-5 pr-2 py-2 mt-2 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-slate-400 text-lg select-none">⌕</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              placeholder="Cari statistik: kategori, wilayah, periode…"
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <span className="bg-slate-900 text-white text-sm font-bold rounded-full px-6 py-2.5 select-none">Cari</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
            {['Semua', 'Fashion', 'Elektronik', 'Rumah', 'Kecantikan'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCat(c); }}
                className={`text-xs font-bold rounded-full px-4 py-1.5 border transition-all select-none ${cat === c ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-4">{renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <p className="text-center text-xs text-slate-400 mt-6 select-none pointer-events-none">
          Menampilkan metrik kategori: {cat}{q ? ` • pencarian "${q}"` : ''}
        </p>
      </div>
    </section>
  );
}

