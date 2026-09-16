import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

export default function Fleet02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'fleet02-heading', type: 'heading', props: { content: 'Armada & Fasilitas Transit Modern', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'fleet02-desc', type: 'text', props: { content: 'Armada transportasi multi-modal berteknologi tinggi yang dipasangi GPS real-time untuk menjamin keamanan barang Anda di setiap rute.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'fleet02-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80', alt: 'Logistics Fleet', width: '100%', height: '100%', objectFit: 'cover' } },
    {
      id: 'fleet02-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', borderWidth: '1px', borderColor: '#f1f5f9', shadow: 'sm', hoverEffect: 'lift', padding: '20px' },
      childrenComponents: [
        { id: 'fleet02-c1-t', type: 'heading', props: { content: 'GPS Tracking Real-time', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' } },
        { id: 'fleet02-c1-d', type: 'text', props: { content: 'Pemantauan koordinat GPS presisi secara real-time dari panel kontrol Anda 24 jam sehari.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
    {
      id: 'fleet02-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', borderWidth: '1px', borderColor: '#f1f5f9', shadow: 'sm', hoverEffect: 'lift', padding: '20px' },
      childrenComponents: [
        { id: 'fleet02-c2-t', type: 'heading', props: { content: 'Temperature Control (Cold Chain)', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' } },
        { id: 'fleet02-c2-d', type: 'text', props: { content: 'Fasilitas pendingin canggih -20°C untuk muatan farmasi, produk segar, dan pangan beku.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
    {
      id: 'fleet02-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', borderWidth: '1px', borderColor: '#f1f5f9', shadow: 'sm', hoverEffect: 'lift', padding: '20px' },
      childrenComponents: [
        { id: 'fleet02-c3-t', type: 'heading', props: { content: 'Monitoring Keamanan 24/7', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' } },
        { id: 'fleet02-c3-d', type: 'text', props: { content: 'Dukungan keamanan terpusat dengan sensor anti-intrusi dan kamera pengawas aktif selama transit.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
    {
      id: 'fleet02-card-4', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', borderWidth: '1px', borderColor: '#f1f5f9', shadow: 'sm', hoverEffect: 'lift', padding: '20px' },
      childrenComponents: [
        { id: 'fleet02-c4-t', type: 'heading', props: { content: 'Kapasitas FTL & LTL', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' } },
        { id: 'fleet02-c4-d', type: 'text', props: { content: 'Layanan Full Truckload dan Less Than Truckload untuk menyesuaikan volume pengiriman skala apapun.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const titleComp = layoutComponents.find(c => c.id === 'fleet02-heading') || layoutComponents.find(c => c.type === 'heading');
  const descComp = layoutComponents.find(c => c.id === 'fleet02-desc') || layoutComponents.find(c => c.type === 'text');
  const imageComp = layoutComponents.find(c => c.type === 'image');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

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
            {renderLayoutComponents(cardComponents, sectionId)}
          </div>
        </div>
      </div>
    </section>
  );
}
