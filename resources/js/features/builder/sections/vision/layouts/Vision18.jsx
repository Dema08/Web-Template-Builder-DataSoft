import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 18 — SOLSTICE App Vision
 * Mirrors Hero18 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision18({ components = [], sectionId = null }) {
  const [platform, setPlatform] = useState('iOS');

  const defaultComponents = [
    { id: 'v18-badge', type: 'badge', props: { content: '★★★★★ 4.9 — Mobile Ecosystem Vision', background: '#fff7ed', color: '#ea580c' } },
    { id: 'v18-heading', type: 'heading', props: { content: 'Seamless vision in the palm of your hand', level: 'h2', fontSize: '54px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'v18-text', type: 'text', props: { content: 'Connect data, track strategic milestones, and empower your mobile workforce in one powerful application.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'v18-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', padding: '20px', borderWidth: '1px', borderColor: '#fed7aa', shadow: 'sm' },
      childrenComponents: [
        { id: 'v18-c1-title', type: 'heading', props: { content: 'Mobile-First Strategy', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' } },
        { id: 'v18-c1-desc', type: 'text', props: { content: 'Akses penuh ke seluruh metrik bisnis kapanpun.', fontSize: '13px', color: '#64748b', margin: '0' } },
      ],
    },
    { id: 'v18-img', type: 'image', props: { src: '', alt: 'App Vision', width: '280px', height: '560px', objectFit: 'cover', borderRadius: '36px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-rose-50 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
            {['iOS', 'Android'].map(o => (
              <button
                key={o}
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setPlatform(o); }}
                className={`text-xs font-bold rounded-full px-4 py-1.5 transition-all select-none ${platform === o ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}
              >
                {o}
              </button>
            ))}
          </div>
          <div className="mt-2">
            {renderLayoutComponents(copy.filter(c => c.type === 'card'), sectionId)}
          </div>
          <p className="text-xs text-slate-400 mt-4 select-none">Platform aktif: {platform} — Optimized for vision sync</p>
        </div>
        <div className="flex justify-center">
          <div className="relative rounded-[36px] border-[10px] border-slate-900 shadow-[0_40px_80px_-24px_rgba(249,115,22,0.5)] overflow-hidden bg-white rotate-3 hover:rotate-0 transition-transform duration-500">
            {renderLayoutComponents(img, sectionId)}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
