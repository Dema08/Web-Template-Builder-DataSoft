import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Fleet02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'fleet02-heading', type: 'heading', props: { content: 'Armada & Fasilitas Transit Modern', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'fleet02-desc', type: 'text', props: { content: 'Armada transportasi multi-modal berteknologi tinggi yang dipasangi GPS real-time untuk menjamin keamanan barang Anda di setiap rute.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'fleet02-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80', alt: 'Logistics Fleet', width: '100%', height: '100%', objectFit: 'cover' } }
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const allHeadings = layoutComponents.filter(c => c.type === 'heading');
  const allTexts = layoutComponents.filter(c => c.type === 'text');
  const imageComp = layoutComponents.find(c => c.type === 'image');

  const titleComp = allHeadings[0];
  const descComp = allTexts[0];

  const technicalSpecs = [
    {
      title: 'GPS Tracking Real-time',
      desc: 'Pemantauan koordinat GPS presisi secara real-time dari panel kontrol Anda 24 jam sehari.',
      icon: '📡',
      color: '#2563eb',
      bg: 'rgba(37,99,235,0.1)',
      badge: 'Terintegrasi Penuh',
    },
    {
      title: 'Temperature Control (Cold Chain)',
      desc: 'Fasilitas pendingin canggih -20°C untuk muatan farmasi, produk segar, dan pangan beku.',
      icon: '❄️',
      color: '#0891b2',
      bg: 'rgba(8,145,178,0.1)',
      badge: 'BPOM Compliant',
    },
    {
      title: 'Monitoring Keamanan 24/7',
      desc: 'Dukungan keamanan terpusat dengan sensor anti-intrusi dan kamera pengawas aktif selama transit.',
      icon: '🛡️',
      color: '#059669',
      bg: 'rgba(5,150,105,0.1)',
      badge: 'ISO 27001',
    },
    {
      title: 'Kapasitas FTL & LTL',
      desc: 'Layanan Full Truckload dan Less Than Truckload untuk menyesuaikan volume pengiriman skala apapun.',
      icon: '⚖️',
      color: '#d97706',
      bg: 'rgba(217,119,6,0.1)',
      badge: 'Fleksibel',
    },
  ];

  return (
    <section className="py-20 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          {titleComp && renderLayoutComponents([titleComp], sectionId)}
          {descComp && (
            <div className="max-w-2xl">
              {renderLayoutComponents([descComp], sectionId)}
            </div>
          )}
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Image with premium frame */}
          <div className="relative group">
            {/* Decorative background frames */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-600/20 to-orange-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-blue-500/20 bg-blue-500/5 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-100 group-hover:shadow-2xl transition-shadow duration-500" style={{ aspectRatio: '4/3' }}>
              {imageComp ? (
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                  {renderLayoutComponents([imageComp], sectionId)}
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-5xl bg-slate-100">🚛</div>
              )}
              {/* Bottom label bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5">
                <p className="text-white font-bold text-sm">Armada Truk Kontainer 40ft</p>
                <p className="text-slate-400 text-xs mt-1">GPS Tracked · Cold Chain Ready · 24/7 Security</p>
              </div>
            </div>

            {/* Corner badge */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/30">
              500+ Armada Aktif
            </div>
          </div>

          {/* Right: Technical Specs */}
          <div className="space-y-4">
            {technicalSpecs.map((spec, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50 hover:shadow-md transition-all duration-300 group cursor-default"
              >
                {/* Icon box */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: spec.bg }}
                >
                  {spec.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-[15px] font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      {spec.title}
                    </h3>
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: spec.bg, color: spec.color }}
                    >
                      {spec.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
