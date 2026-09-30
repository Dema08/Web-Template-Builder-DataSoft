import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsAboutGlobal
 * Global Forwarder Heritage & Corporate Infrastructure Overview.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsAboutGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ab-badge', type: 'badge', props: { content: '🌍 30+ TAHUN KEUNGGULAN GLOBAL', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'ab-title', type: 'heading', props: { content: 'Arsitek Solusi Rantai Pasok Lintas Benua & Kargo Udara Presisi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fafaf9', align: 'left', margin: '0 0 16px 0' } },
    { id: 'ab-desc', type: 'text', props: { content: 'Nexus Global Forwarding didirikan untuk menjembatani perdagangan internasional Indonesia dengan pasar global melalui keahlian regulasi kepabeanan, alokasi ruang kargo udara khusus, dan fasilitas pergudangan berikat terakreditasi.', fontSize: '16px', color: '#a8a29e', align: 'left', lineHeight: '1.8', margin: '0 0 28px 0' } },
    { id: 'ab-btn', type: 'button', props: { label: 'Unduh Company Profile & Sertifikasi →', href: '#inquiry', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#0c0a09', fontWeight: '700' } },
    {
      id: 'ab-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '20px', borderWidth: '1px', borderColor: '#292524', padding: '20px' },
      childrenComponents: [
        { id: 'abc1-t', type: 'heading', props: { content: '100% Kepatuhan Regulasi', level: 'h4', fontSize: '15px', fontWeight: '800', color: '#e7c873', margin: '0 0 4px 0' } },
        { id: 'abc1-d', type: 'text', props: { content: 'Didukung oleh tim pialang kepabeanan bersertifikasi PPJK & AEO di setiap pelabuhan internasional.', fontSize: '12px', color: '#a8a29e', margin: '0' } },
      ],
    },
    {
      id: 'ab-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '20px', borderWidth: '1px', borderColor: '#292524', padding: '20px' },
      childrenComponents: [
        { id: 'abc2-t', type: 'heading', props: { content: 'Kendali Kontrol Real-Time 24/7', level: 'h4', fontSize: '15px', fontWeight: '800', color: '#e7c873', margin: '0 0 4px 0' } },
        { id: 'abc2-d', type: 'text', props: { content: 'Pusat komando telematika global memantau pergerakan kargo bernilai tinggi secara nonstop.', fontSize: '12px', color: '#a8a29e', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const leftComps = layoutComponents.filter(c => c.type !== 'card' && c.type !== 'image');
  const cardComps = layoutComponents.filter(c => c.type === 'card');
  const imgComps = layoutComponents.filter(c => c.type === 'image');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-[#0c0a09] text-white relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy */}
        <div className="lg:col-span-6">
          {renderLayoutComponents(leftComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(leftComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(leftComps.filter(c => c.type === 'text'), sectionId)}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {renderLayoutComponents(cardComps, sectionId)}
          </div>

          <div>{renderLayoutComponents(leftComps.filter(c => c.type === 'button'), sectionId)}</div>
        </div>

        {/* Right Visual Image */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden border border-[#292524] shadow-2xl">
            {imgComps.length > 0 ? (
              renderLayoutComponents(imgComps, sectionId)
            ) : (
              <img
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1000&auto=format&fit=crop&q=80"
                alt="Nexus Global Aviation & Freight"
                className="w-full h-[460px] object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#141210]/90 border border-[#292524] backdrop-blur-md">
              <p className="text-xs font-bold text-[#e7c873]">NEXUS AVIATION FREIGHT OPERATIONS</p>
              <p className="text-xs text-[#a8a29e] mt-0.5">Boeing 777F Charter Loading at CGK Air Cargo Terminal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
