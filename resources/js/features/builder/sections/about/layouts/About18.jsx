import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLSTICE — Fintech App Story
 * Phone mockup + toggle OS + rating + CTA store.
 * Untuk mobile apps / fintech / edtech.
 */
export default function About18({ components = [], sectionId = null }) {
  const [os, setOs] = useState('iOS');
  const defaultComponents = [
    { id: 'badge-18', type: 'badge', props: { content: '★★★★★ 4.9 — Our Journey', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-18', type: 'heading', props: { content: '2 million pockets and counting', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-18', type: 'text', props: { content: 'Solstice began in 2021 with one question: why is banking so hard? Five years later the answer fits in your pocket.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-app', type: 'button', props: { label: 'Get the App', href: '#download', variant: 'primary', size: 'medium', radius: 'lg', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-18', type: 'image', props: { src: '', alt: 'App', width: '280px', height: '520px', objectFit: 'cover', borderRadius: '36px' } },
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
              <button key={o} type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOs(o); }}
                className={`text-xs font-bold rounded-full px-4 py-1.5 transition-all select-none ${os === o ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                {o}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <p className="text-xs text-slate-400 mt-3 select-none pointer-events-none">Cerita versi: {os} — Free, no credit card</p>
        </div>
        <div className="flex justify-center">
          <div className="relative rounded-[36px] border-[10px] border-slate-900 shadow-[0_40px_80px_-24px_rgba(249,115,22,0.5)] overflow-hidden bg-white rotate-3">
            {renderLayoutComponents(img, sectionId)}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
