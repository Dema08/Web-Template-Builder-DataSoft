import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TRANSGO — Fleet Heritage Story
 * Split logistik + foto armada + kartu live tracking.
 * Untuk logistik / ekspedisi / cargo.
 */
export default function About17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-17', type: 'badge', props: { content: '🚚 Since 2010 — 500+ Armada', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-17', type: 'heading', props: { content: 'From one truck to national network', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-17', type: 'text', props: { content: 'What began with a single Jakarta–Bandung route now covers 50+ cities with land, sea, and air freight.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-network', type: 'button', props: { label: 'Our Network →', href: '#network', variant: 'primary', size: 'medium', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'img-17', type: 'image', props: { src: '', alt: 'Fleet', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="flex items-center gap-6 mt-8 select-none pointer-events-none">
            <div><p className="text-2xl font-black text-slate-900">99.8%</p><p className="text-xs text-slate-500">On-time</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">50+</p><p className="text-xs text-slate-500">Kota</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">15yr</p><p className="text-xs text-slate-500">Beroperasi</p></div>
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
