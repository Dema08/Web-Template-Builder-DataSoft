import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KIOSO — Playful Kitchen Story
 * Pastel ceria + kartu nilai + foto dapur + counter.
 * Untuk F&B / kids.
 */
export default function About13({ components = [], sectionId = null }) {
  const [loves, setLoves] = useState(12480);
  const defaultComponents = [
    { id: 'badge-13', type: 'badge', props: { content: '🎉 Our Kitchen', background: '#fce7f3', color: '#db2777' } },
    { id: 'heading-13', type: 'heading', props: { content: 'Serious about silly-good food', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-13', type: 'text', props: { content: 'No frozen patties, no shortcuts. Just fresh buns baked hourly and shakes churned to order.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-menu', type: 'button', props: { label: 'See Menu 🍔', href: '#menu', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'img-13', type: 'image', props: { src: '', alt: 'Kitchen', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '28px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="py-16 px-6 bg-[#fef9c3]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white border-[3px] border-slate-900 rounded-[28px] p-8 shadow-[8px_8px_0_#0f172a] -rotate-1">
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="inline-flex items-center gap-2 mt-5 bg-amber-100 border-2 border-slate-900 rounded-full px-4 py-1.5 cursor-pointer select-none" onClick={(e) => { e.stopPropagation(); setLoves(v => v + 1); }}>
            <span className="text-sm font-black">❤ {loves.toLocaleString('id-ID')} foodies love us</span>
          </div>
        </div>
        <div className="border-[3px] border-slate-900 rounded-[28px] overflow-hidden shadow-[8px_8px_0_#0f172a] rotate-1 bg-white">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
