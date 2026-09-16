import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 10 — PULSE Search-First Marketplace
 * Mirrors Hero10 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision10({ components = [], sectionId = null }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const defaultComponents = [
    { id: 'v10-badge', type: 'badge', props: { content: '🔥 12.480 Visi Terwujud Hari Ini', background: '#fef2f2', color: '#dc2626' } },
    { id: 'v10-heading', type: 'heading', props: { content: 'Search any strategic vision, fast', level: 'h2', fontSize: '56px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v10-text', type: 'text', props: { content: 'Explore 2M+ strategic blueprints from 40,000 visionary leaders across Indonesia.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 26px 0' } },
    {
      id: 'v10-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', padding: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0' },
      childrenComponents: [
        { id: 'v10-c1-title', type: 'heading', props: { content: 'Direktori Terkurasi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
        { id: 'v10-c1-desc', type: 'text', props: { content: 'Blueprint tervalidasi untuk percepatan pertumbuhan bisnis.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'v10-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', padding: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0' },
      childrenComponents: [
        { id: 'v10-c2-title', type: 'heading', props: { content: 'Kolaborasi Instan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
        { id: 'v10-c2-desc', type: 'text', props: { content: 'Hubungkan tim Anda dengan pakar industri terbaik.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-4">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div
          className="flex items-center gap-2 bg-slate-100 border-2 border-slate-200 rounded-full pl-5 pr-2 py-2 mt-2 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all max-w-2xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-slate-400 text-lg select-none">⌕</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Search blueprints, strategies, growth roadmaps…"
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <span className="bg-slate-900 text-white text-sm font-bold rounded-full px-6 py-2.5 select-none">Search</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
          {['All', 'Strategy', 'Technology', 'Growth', 'Leadership'].map(c => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
