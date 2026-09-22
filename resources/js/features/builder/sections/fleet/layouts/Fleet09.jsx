import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SUMMIT — Navy Blue Corporate Split
 * Biru navy korporat: split teks kiri + image kanan + floating badge.
 * Untuk perusahaan logistik formal dan profesional.
 */
export default function Fleet09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt9-badge', type: 'badge', props: { content: '🌐 Jaringan Nasional', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'flt9-heading', type: 'heading', props: { content: 'Infrastruktur Armada Terpadu Skala Nasional', level: 'h2', fontSize: '46px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'flt9-text', type: 'text', props: { content: 'Dengan jaringan logistik yang tersebar di 100+ titik di seluruh Indonesia, setiap muatan ditangani dengan presisi dan keamanan penuh.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 26px 0' } },
    { id: 'flt9-btn1', type: 'button', props: { label: 'Minta Penawaran →', href: '#quote', variant: 'primary', size: 'large', radius: 'lg', background: '#1d4ed8', color: '#ffffff' } },
    { id: 'flt9-btn2', type: 'button', props: { label: 'Lacak Kiriman', href: '#tracking', variant: 'outline', size: 'large', radius: 'lg', background: 'transparent', color: '#1d4ed8' } },
    { id: 'flt9-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&auto=format&fit=crop&q=80', alt: 'Fleet Logistics', width: '100%', height: '100%', objectFit: 'cover' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(badge, sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
          <div className="flex flex-wrap gap-3 mt-2">{renderLayoutComponents(buttons, sectionId)}</div>
          <div className="flex items-center gap-8 mt-10">
            {[['99.8%', 'On-time'], ['500+', 'Armada'], ['24/7', 'Support']].map(([v, l]) => (
              <div key={l}>
                <p className="text-2xl font-black text-blue-700">{v}</p>
                <p className="text-xs text-slate-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-[0_32px_80px_-20px_rgba(29,78,216,0.3)] bg-white" style={{ aspectRatio: '4/3' }}>
            {img.length > 0 ? (
              <div className="absolute inset-0">{renderLayoutComponents(img, sectionId)}</div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-7xl bg-blue-50">🚛</div>
            )}
          </div>
          <div className="absolute -top-4 -right-3 bg-blue-700 text-white rounded-2xl px-4 py-3 shadow-xl shadow-blue-700/30 flex items-center gap-2.5 select-none pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
            <div>
              <p className="text-[10px] text-blue-200 uppercase tracking-widest">Fleet Online</p>
              <p className="text-sm font-bold">432 Unit Aktif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
