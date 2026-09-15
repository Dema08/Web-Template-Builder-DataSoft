import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PULSE — Marketplace Stats Story
 * Search pill + kategori + kartu metrik + foto seller.
 * Untuk marketplace / direktori / e-commerce.
 */
export default function About16({ components = [], sectionId = null }) {
  const [cat, setCat] = useState('All');
  const defaultComponents = [
    { id: 'badge-16', type: 'badge', props: { content: '🔥 Our Scale', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-16', type: 'heading', props: { content: 'Powering 40,000 sellers', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-16', type: 'text', props: { content: 'From garage stalls to national brands — Pulse gives every seller same-day logistics and instant payouts.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-sellers', type: 'button', props: { label: 'Seller Stories →', href: '#sellers', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-16', type: 'image', props: { src: '', alt: 'Sellers', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-[20px] overflow-hidden shadow-xl border border-slate-100 order-2 lg:order-1">
          {renderLayoutComponents(img, sectionId)}
        </div>
        <div className="order-1 lg:order-2">
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
            {['All', 'Fashion', 'Electronics', 'Home'].map(c => (
              <button key={c} type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCat(c); }}
                className={`text-xs font-bold rounded-full px-4 py-1.5 border transition-all select-none ${cat === c ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <p className="text-xs text-slate-400 mt-3 select-none pointer-events-none">Menampilkan kisah kategori: {cat}</p>
        </div>
      </div>
    </section>
  );
}
