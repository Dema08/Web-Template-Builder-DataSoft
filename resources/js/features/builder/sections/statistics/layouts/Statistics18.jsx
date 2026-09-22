import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLSTICE — App Download — Statistics
 * Fokus unduhan aplikasi: toggle platform + kartu rating store.
 * Untuk mobile apps / fintech / edtech.
 */
export default function Statistics18({ components = [], sectionId = null }) {
  const [os, setOs] = useState('iOS');

  const defaultComponents = [
    { id: 'stat18-badge', type: 'badge', props: { content: '★★★★★ 4,9 — 2M+ downloads', background: '#fff7ed', color: '#ea580c' } },
    { id: 'stat18-heading', type: 'heading', props: { content: 'Traction that fits in your pocket', level: 'h2', fontSize: '50px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat18-text', type: 'text', props: { content: 'Kirim uang, menabung lebih pintar, dan pantau setiap rupiah — semuanya dari satu aplikasi.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat18-cta', type: 'button', props: { label: 'Unduh Sekarang →', href: '#download', variant: 'primary', size: 'medium', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    {
      id: 'stat18-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat18-c1-value', type: 'heading', props: { content: '2M+', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ea580c', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat18-c1-label', type: 'text', props: { content: 'Total Downloads', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat18-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat18-c2-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ea580c', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat18-c2-label', type: 'text', props: { content: 'Rating Store', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat18-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat18-c3-value', type: 'heading', props: { content: '1,2M', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ea580c', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat18-c3-label', type: 'text', props: { content: 'Pengguna Aktif', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat18-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat18-c4-value', type: 'heading', props: { content: '99,9%', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ea580c', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat18-c4-label', type: 'text', props: { content: 'Uptime Transaksi', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-rose-50 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div className="flex gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
            {['iOS', 'Android'].map((o) => (
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
          <div className="flex flex-wrap gap-3">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
          <p className="text-xs text-slate-400 mt-4 select-none pointer-events-none">
            Metrik {os} — data diperbarui setiap 24 jam
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="grid grid-cols-2 gap-4 rotate-3 hover:rotate-0 transition-transform duration-500">
            {renderLayoutComponents(cards, sectionId)}
          </div>
        </div>
      </div>
    </section>
  );
}
