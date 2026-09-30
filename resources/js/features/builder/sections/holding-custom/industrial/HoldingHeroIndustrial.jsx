import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingHeroIndustrial
 * Cinematic dark hero for heavy industry holding — deep slate with amber/gold foundry accents.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingHeroIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ind-badge', type: 'badge', props: { content: '⚙️ Fondasi Hilirisasi Industri & Kedaulatan Manufaktur Nasional', variant: 'primary', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'medium' } },
    { id: 'ind-title', type: 'heading', props: { content: 'Membangun Ketahanan Industri Berat Melalui Rekayasa Teknologi Terintegrasi', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', lineHeight: '1.15' } },
    { id: 'ind-desc', type: 'text', props: { content: 'Sovereign Industrial Group Tbk mengoperasikan 12 kawasan industri terpadu, 6 fasilitas smelter ramah lingkungan, manufaktur panel sel surya canggih, dan sistem robotika perakitan otomatis berstandar global.', fontSize: '18px', color: '#94a3b8', align: 'left', lineHeight: '1.7' } },
    { id: 'btn-divs', type: 'button', props: { label: 'Jelajahi Divisi Manufaktur Kami →', href: '#divisions', variant: 'primary', size: 'large', radius: 'xl', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#020617', fontWeight: '800' } },
    { id: 'btn-b2b', type: 'button', props: { label: 'Unduh Industrial Capability Book (PDF)', href: '#procurement', variant: 'outline', size: 'large', radius: 'xl', border: '1px solid #475569', color: '#f8fafc', fontWeight: '600' } },
    {
      id: 'ind-stat-1',
      type: 'card',
      props: { background: 'rgba(15, 23, 42, 0.85)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.3)', padding: '20px' },
      childrenComponents: [
        { id: 'is1-val', type: 'heading', props: { content: '8.4 Juta Ton', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#ffffff' } },
        { id: 'is1-lbl', type: 'text', props: { content: 'Throughput Manufaktur / Tahun', fontSize: '12px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'ind-stat-2',
      type: 'card',
      props: { background: 'rgba(15, 23, 42, 0.85)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.3)', padding: '20px' },
      childrenComponents: [
        { id: 'is2-val', type: 'heading', props: { content: '42.6M Man-Hours', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#4ade80' } },
        { id: 'is2-lbl', type: 'text', props: { content: 'Jam Kerja Aman Zero-Harm', fontSize: '12px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'ind-stat-3',
      type: 'card',
      props: { background: 'rgba(15, 23, 42, 0.85)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.3)', padding: '20px' },
      childrenComponents: [
        { id: 'is3-val', type: 'heading', props: { content: '42 Negara', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fbbf24' } },
        { id: 'is3-lbl', type: 'text', props: { content: 'Tujuan Ekspor Komoditas', fontSize: '12px', color: '#94a3b8' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.type === 'badge');
  const headingComps = layoutComponents.filter(c => c.type === 'heading');
  const textComps = layoutComponents.filter(c => c.type === 'text');
  const buttonComps = layoutComponents.filter(c => c.type === 'button');
  const cardComps = layoutComponents.filter(c => c.type === 'card');
  const imageComps = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="relative py-28 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden text-slate-100">
      {/* Ambient Industrial Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(to right, #f59e0b 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {renderLayoutComponents(badgeComps, sectionId)}
          <div className="mt-6 w-full">{renderLayoutComponents(headingComps, sectionId)}</div>
          <div className="w-full mt-4">{renderLayoutComponents(textComps, sectionId)}</div>

          <div className="flex flex-wrap gap-4 mt-8">
            {renderLayoutComponents(buttonComps, sectionId)}
          </div>

          {/* Key Metrics Cards */}
          {cardComps.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-800 w-full">
              {renderLayoutComponents(cardComps, sectionId)}
            </div>
          )}
        </div>

        {/* Right Visual Industrial Plant */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
            {imageComps.length > 0 ? (
              renderLayoutComponents(imageComps, sectionId)
            ) : (
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=80"
                alt="Sovereign Industrial Smart Plant"
                className="w-full h-[450px] object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="bg-slate-900/90 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-400">SMART FACTORY AUTOMATION 4.0</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full">
                    99.8% OEE Efficiency
                  </span>
                </div>
                <div className="space-y-1 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Kapasitas Smelter Nikel:</span>
                    <span className="text-white font-bold">120.000 MT/Tahun</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sertifikasi Manajemen Aset:</span>
                    <span className="text-amber-400 font-bold">ISO 55001:2014</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
