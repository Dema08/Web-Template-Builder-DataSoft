import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 03 — Transgo Logistics Split
 */
export default function Mission03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-3', type: 'badge', props: { content: '🎯 Misi Utama Kami', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-3', type: 'heading', props: { content: 'Menghubungkan setiap sudut nusantara dengan cepat', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-3', type: 'text', props: { content: 'Memastikan efisiensi rantai pasok nasional melalui teknologi canggih, armada handal, dan pelayanan sepenuh hati.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-quote', type: 'button', props: { label: 'Pelajari Layanan →', href: '#services', variant: 'primary', size: 'large', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'img-3', type: 'image', props: { src: '', alt: 'Mission', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '24px' } },
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
        </div>
        <div className="relative">
          <div className="rounded-[24px] overflow-hidden border border-orange-100 shadow-[0_32px_70px_-20px_rgba(249,115,22,0.4)] bg-white">
            {renderLayoutComponents(img, sectionId)}
          </div>
          <div className="absolute -top-4 -right-3 bg-slate-900 text-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5 select-none pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div><p className="text-[10px] text-slate-400 uppercase tracking-widest">Misi Aktif</p><p className="text-sm font-bold">100% On-Track</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
