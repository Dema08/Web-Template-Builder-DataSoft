import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Split Image Right
 * Split klasik: teks kiri + visual kanan dengan floating cards.
 * Cocok untuk produk / logistik / e-commerce.
 */
export default function Hero03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-3', type: 'badge', props: { content: '🚚 500+ Armada Aktif', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-3', type: 'heading', props: { content: 'Moving businesses forward, across Indonesia', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-3', type: 'text', props: { content: 'Armada darat, laut, dan udara dengan tracking real-time. On-time rate 99.8% ke 50+ kota.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-quote', type: 'button', props: { label: 'Request a Quote →', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'btn-track', type: 'button', props: { label: 'Track Shipment', href: '#tracking', variant: 'outline', size: 'large', radius: 'lg', background: '#f97316', color: '#f97316' } },
    { id: 'img-3', type: 'image', props: { src: '', alt: 'Fleet', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
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
          <div className="flex flex-wrap gap-3 mt-2">{renderLayoutComponents(left.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="flex items-center gap-6 mt-8">
            <div><p className="text-2xl font-black text-slate-900">99.8%</p><p className="text-xs text-slate-500">On-time</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">50+</p><p className="text-xs text-slate-500">Kota</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">24/7</p><p className="text-xs text-slate-500">Support</p></div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[24px] overflow-hidden border border-orange-100 shadow-[0_32px_70px_-20px_rgba(249,115,22,0.4)] bg-white">
            {renderLayoutComponents(img, sectionId)}
          </div>
          <div className="absolute -top-4 -right-3 bg-slate-900 text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 select-none pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div><p className="text-[10px] text-slate-400 uppercase tracking-widest">Live Tracking</p><p className="text-sm font-bold">12.480 paket hari ini</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
