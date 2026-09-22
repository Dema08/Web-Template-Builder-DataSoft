import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TRANSGO — Logistics Split — Statistics
 * Split kiri teks + kanan kartu metrik oranye, plus strip angka.
 * Untuk logistik / ekspedisi / supply chain.
 */
export default function Statistics03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat3-badge', type: 'badge', props: { content: '🚚 500+ Armada Aktif', background: '#fff7ed', color: '#ea580c' } },
    { id: 'stat3-heading', type: 'heading', props: { content: 'Metrik yang menggerakkan bisnis Anda', level: 'h2', fontSize: '46px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'stat3-text', type: 'text', props: { content: 'Tracking real-time di darat, laut, dan udara. Setiap paket terukur, setiap rute teroptimasi.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 26px 0' } },
    { id: 'stat3-cta', type: 'button', props: { label: 'Request a Quote →', href: '#contact', variant: 'primary', size: 'medium', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    {
      id: 'stat3-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 24px' },
      childrenComponents: [
        { id: 'stat3-c1-value', type: 'heading', props: { content: '99,8%', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ea580c', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat3-c1-label', type: 'text', props: { content: 'On-time Delivery', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat3-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 24px' },
      childrenComponents: [
        { id: 'stat3-c2-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ea580c', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat3-c2-label', type: 'text', props: { content: 'Kota Terjangkau', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat3-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 24px' },
      childrenComponents: [
        { id: 'stat3-c3-value', type: 'heading', props: { content: '12.480', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ea580c', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat3-c3-label', type: 'text', props: { content: 'Paket / Hari', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat3-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 24px' },
      childrenComponents: [
        { id: 'stat3-c4-value', type: 'heading', props: { content: '24/7', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ea580c', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat3-c4-label', type: 'text', props: { content: 'Support Operasional', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}</div>
          <div className="flex flex-wrap gap-3 mt-1">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
          <div className="flex items-center gap-6 mt-8 select-none pointer-events-none">
            <div><p className="text-2xl font-black text-slate-900">99,8%</p><p className="text-xs text-slate-500">On-time</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">50+</p><p className="text-xs text-slate-500">Kota</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">24/7</p><p className="text-xs text-slate-500">Support</p></div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderLayoutComponents(cards, sectionId)}
          </div>
          <div className="absolute -top-4 -right-3 bg-slate-900 text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 select-none pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Live Tracking</p>
              <p className="text-sm font-bold">12.480 paket hari ini</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
