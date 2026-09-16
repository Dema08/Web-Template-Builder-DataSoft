import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 16 — EMERALD Eco Shop Vision
 * Mirrors Hero16 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision16({ components = [], sectionId = null }) {
  const [filter, setFilter] = useState('All');

  const defaultComponents = [
    { id: 'v16-badge', type: 'badge', props: { content: '🌿 100% Sustainable & Conscious Vision', background: '#dcfce7', color: '#15803d' } },
    { id: 'v16-heading', type: 'heading', props: { content: 'Nature aligned for a better tomorrow', level: 'h2', fontSize: '54px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 14px 0' } },
    { id: 'v16-text', type: 'text', props: { content: 'Botanical innovation, green growth, and carbon-neutral strategies crafted from ground up.', fontSize: '17px', color: '#4d7c0f', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'v16-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', padding: '20px', borderWidth: '1px', borderColor: '#bbf7d0', shadow: 'sm' },
      childrenComponents: [
        { id: 'v16-c1-title', type: 'heading', props: { content: 'Inovasi Hijau', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#052e16', margin: '0 0 4px 0' } },
        { id: 'v16-c1-desc', type: 'text', props: { content: 'Praktik bisnis yang selaras dengan kelestarian alam.', fontSize: '13px', color: '#4d7c0f', margin: '0' } },
      ],
    },
    { id: 'v16-img', type: 'image', props: { src: '', alt: 'Eco Vision', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '24px' } },
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
            {['All', 'Ecology', 'Energy', 'Impact'].map(f => (
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
          <div className="mt-2">
            {renderLayoutComponents(copy.filter(c => c.type === 'card'), sectionId)}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[24px] overflow-hidden shadow-[0_32px_70px_-20px_rgba(22,163,74,0.45)] border-4 border-white">
            {renderLayoutComponents(img, sectionId)}
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 select-none pointer-events-none">
            <span className="text-2xl">🌱</span>
            <div><p className="text-sm font-black">32.000+ pohon</p><p className="text-[11px] text-slate-500">ditanam untuk visi hijau</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
