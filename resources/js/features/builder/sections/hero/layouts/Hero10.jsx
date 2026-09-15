import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PULSE — Search-First Marketplace
 * Search bar raksasa + kategori chips + CTA. Ala marketplace
 * / direktori / e-commerce modern.
 */
export default function Hero10({ components = [], sectionId = null }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const defaultComponents = [
    { id: 'badge-10', type: 'badge', props: { content: '🔥 12.480 produk terjual hari ini', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-10', type: 'heading', props: { content: 'Find anything, fast', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-10', type: 'text', props: { content: 'Search 2M+ products from 40,000 trusted sellers across Indonesia.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 26px 0' } },
    { id: 'btn-sell', type: 'button', props: { label: 'Start Selling', href: '#sell', variant: 'ghost', size: 'medium', background: 'transparent', color: '#4f46e5' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
        <div
          className="flex items-center gap-2 bg-slate-100 border-2 border-slate-200 rounded-full pl-5 pr-2 py-2 mt-2 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-slate-400 text-lg select-none">⌕</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Search sneakers, laptops, furniture…"
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <span className="bg-slate-900 text-white text-sm font-bold rounded-full px-6 py-2.5 select-none">Search</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
          {['All', 'Fashion', 'Electronics', 'Home', 'Beauty'].map(c => (
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
        <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
      </div>
    </section>
  );
}
