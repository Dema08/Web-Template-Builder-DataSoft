import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 03 — VELOCE Split Image Right
 * Mirrors Hero03 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v3-badge', type: 'badge', props: { content: '🚚 500+ Armada & Visi Logistik', background: '#fff7ed', color: '#ea580c' } },
    { id: 'v3-heading', type: 'heading', props: { content: 'Visi Logistik Masa Depan Indonesia', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'v3-text', type: 'text', props: { content: 'Menghubungkan Nusantara melalui jaringan rantai pasok terpadu dengan ketepatan waktu dan efisiensi tanpa tanding.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 26px 0' } },
    {
      id: 'v3-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'v3-c1-icon', type: 'icon', props: { icon: 'FaShippingFast', size: '32px', color: '#f97316', align: 'left' } },
        { id: 'v3-c1-title', type: 'heading', props: { content: 'Kecepatan & Ketepatan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'v3-c1-desc', type: 'text', props: { content: 'Sistem pengiriman real-time dengan jaminan keandalan tinggi.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    { id: 'v3-img', type: 'image', props: { src: '', alt: 'Logistics Vision', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
            {renderLayoutComponents(left.filter(c => c.type === 'card'), sectionId)}
          </div>
          <div className="flex items-center gap-6 mt-8">
            <div><p className="text-2xl font-black text-slate-900">99.8%</p><p className="text-xs text-slate-500">On-time Rate</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">50+</p><p className="text-xs text-slate-500">Kota Utama</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">24/7</p><p className="text-xs text-slate-500">Live Support</p></div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[24px] overflow-hidden border border-orange-100 shadow-[0_32px_70px_-20px_rgba(249,115,22,0.4)] bg-white">
            {renderLayoutComponents(img, sectionId)}
          </div>
          <div className="absolute -top-4 -right-3 bg-slate-900 text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 select-none pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div><p className="text-[10px] text-slate-400 uppercase tracking-widest">Vision Network</p><p className="text-sm font-bold">12.480 Rute Aktif</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
