import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NOIR — Full Dark Cinematic Split
 * Tampilan armada gelap mewah dengan aksen emas, showcase gambar sinematik, dan kartu spesifikasi teknis presisi.
 * Cocok untuk logistik premium, fleet VIP, dan transportasi berstandar tinggi.
 */
export default function Fleet02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'fleet02-badge', type: 'badge', props: { content: '✦ PREMIER FLEET & LOGISTICS EXCELLENCE', background: '#1c1917', color: '#e7c873' } },
    { id: 'fleet02-heading', type: 'heading', props: { content: 'Armada Eksklusif Berstandar Tertinggi', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 16px 0' } },
    { id: 'fleet02-desc', type: 'text', props: { content: 'Infrastruktur armada multi-modal mutakhir dengan kendali telemetri presisi tinggi dan pemantauan sensor real-time 24 jam sehari.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 40px 0' } },
    { id: 'fleet02-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80', alt: 'Noir Logistics Fleet', width: '100%', height: '100%', objectFit: 'cover' } },
    {
      id: 'fleet02-card-1', type: 'card', props: { variant: 'feature', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', shadow: 'none', hoverEffect: 'lift', padding: '20px' },
      childrenComponents: [
        { id: 'fleet02-c1-t', type: 'heading', props: { content: 'GPS Tracking & Telemetri Real-Time', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#fafaf9', margin: '0 0 6px 0' } },
        { id: 'fleet02-c1-d', type: 'text', props: { content: 'Pemantauan koordinat satelit presisi milimeter dan transmisi data telemetri mesin langsung ke dashboard pusat 24/7.', fontSize: '14px', color: '#a8a29e', margin: '0' } },
      ]
    },
    {
      id: 'fleet02-card-2', type: 'card', props: { variant: 'feature', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', shadow: 'none', hoverEffect: 'lift', padding: '20px' },
      childrenComponents: [
        { id: 'fleet02-c2-t', type: 'heading', props: { content: 'Active Cold-Chain System (-25°C)', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#fafaf9', margin: '0 0 6px 0' } },
        { id: 'fleet02-c2-d', type: 'text', props: { content: 'Kontrol suhu mikro-prosesor terisolasi untuk kargo farmasi, bioteknologi, dan produk bernilai tinggi.', fontSize: '14px', color: '#a8a29e', margin: '0' } },
      ]
    },
    {
      id: 'fleet02-card-3', type: 'card', props: { variant: 'feature', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', shadow: 'none', hoverEffect: 'lift', padding: '20px' },
      childrenComponents: [
        { id: 'fleet02-c3-t', type: 'heading', props: { content: 'Protokol Keamanan Berlapis 24/7', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#fafaf9', margin: '0 0 6px 0' } },
        { id: 'fleet02-c3-d', type: 'text', props: { content: 'Sensor anti-manipulasi kargo, segel digital RFID terenkripsi, dan pendampingan personel pengamanan terlatih.', fontSize: '14px', color: '#a8a29e', margin: '0' } },
      ]
    },
    {
      id: 'fleet02-card-4', type: 'card', props: { variant: 'feature', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', shadow: 'none', hoverEffect: 'lift', padding: '20px' },
      childrenComponents: [
        { id: 'fleet02-c4-t', type: 'heading', props: { content: 'Kapasitas FTL & Dedicated Route', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#fafaf9', margin: '0 0 6px 0' } },
        { id: 'fleet02-c4-d', type: 'text', props: { content: 'Fleksibilitas rute khusus tanpa transit perantara untuk menjamin estimasi waktu tiba dengan akurasi 99.9%.', fontSize: '14px', color: '#a8a29e', margin: '0' } },
      ]
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComp = layoutComponents.filter(c => c.type === 'badge');
  const titleComp = layoutComponents.find(c => c.id === 'fleet02-heading') || layoutComponents.find(c => c.type === 'heading');
  const descComp = layoutComponents.find(c => c.id === 'fleet02-desc') || layoutComponents.find(c => c.type === 'text');
  const imageComp = layoutComponents.find(c => c.type === 'image');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-28 px-6 bg-[#0c0a09] overflow-hidden" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Noir Gold Glow Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,162,39,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-3">
          {badgeComp.length > 0 && renderLayoutComponents(badgeComp, sectionId)}
          <div className="w-full">
            {titleComp && renderLayoutComponents([titleComp], sectionId)}
          </div>
          <div className="flex items-center gap-3 my-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
            <div className="w-2 h-2 rotate-45 bg-[#c9a227]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
          </div>
          {descComp && (
            <div className="max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              {renderLayoutComponents([descComp], sectionId)}
            </div>
          )}
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Image with Noir Luxury Frame */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#c9a227]/30 via-stone-800 to-[#c9a227]/30 blur-lg opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative overflow-hidden rounded-2xl border border-[#292524] bg-[#141210] shadow-2xl" style={{ aspectRatio: '4/3' }}>
              {imageComp ? (
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                  {renderLayoutComponents([imageComp], sectionId)}
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-5xl bg-[#141210]">🚛</div>
              )}
              {/* Bottom Noir Gradient Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/80 to-transparent p-6">
                <p className="text-[#fafaf9] font-bold text-base tracking-wide">Heavy Duty Prime Fleet Series</p>
                <p className="text-[#a8a29e] text-xs mt-1 font-sans">Cold-Chain Enabled · Telemetry GPS · High-Security Seals</p>
              </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute -top-3 -right-3 bg-[#c9a227] text-[#0c0a09] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg font-sans">
              ★ 500+ Active Fleet
            </div>
          </div>

          {/* Right: Technical Specs */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            {renderLayoutComponents(cardComponents, sectionId)}
          </div>
        </div>
      </div>
    </section>
  );
}
