import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLSTICE — App Download
 * Fokus unduhan aplikasi: phone mockup + tombol store + rating.
 * Untuk mobile apps / fintech / edtech.
 */
export default function Hero18({ components = [], sectionId = null }) {
  const [os, setOs] = useState('iOS');

  const defaultComponents = [
    { id: 'badge-18', type: 'badge', props: { content: '★★★★★ 4.9 — 2M+ downloads', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-18', type: 'heading', props: { content: 'Banking that fits in your pocket', level: 'h1', fontSize: '54px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-18', type: 'text', props: { content: 'Send money, save smarter, and track every rupiah — all in one beautiful app.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-ios', type: 'button', props: { label: ' App Store', href: '#ios', variant: 'primary', size: 'large', radius: 'lg', background: '#0f172a', color: '#ffffff' } },
    { id: 'btn-android', type: 'button', props: { label: '▶ Google Play', href: '#android', variant: 'outline', size: 'large', radius: 'lg', background: '#0f172a', color: '#0f172a' } },
    { id: 'img-18', type: 'image', props: { src: '', alt: 'App', width: '280px', height: '560px', objectFit: 'cover', borderRadius: '36px' } },
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
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOs(o); }}
                className={`text-xs font-bold rounded-full px-4 py-1.5 transition-all select-none ${os === o ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}
              >
                {o}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <p className="text-xs text-slate-400 mt-4 select-none">Menampilkan tombol untuk: {os} — Free, no credit card</p>
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
