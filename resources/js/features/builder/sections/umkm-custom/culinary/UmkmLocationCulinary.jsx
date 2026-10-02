import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmLocationCulinary
 * Location map, opening hours, amenities (WiFi, Musholla, Parking), and WhatsApp reservation box.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmLocationCulinary({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'loc-badge', type: 'badge', props: { text: 'KUNJUNGI KEDAI KAMI', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' } },
    { id: 'loc-title', type: 'heading', props: { content: 'Temukan Suasana Hangat & Nyaman di Kopi Karsa', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fef3c7' } },
    { id: 'loc-desc', type: 'paragraph', props: { content: 'Tersedia area indoor ber-AC bebas asap rokok, outdoor garden yang rindang, stopkontak di setiap meja, dan WiFi berkecepatan tinggi.', fontSize: '16px', color: '#fed7aa' } },
    // Address & Hours
    { id: 'loc-addr-title', type: 'heading', props: { content: 'Alamat & Titik Temu', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'loc-addr-desc', type: 'paragraph', props: { content: 'Jl. Prawirotaman No. 42, Brontokusuman, Mergangsan, Kota Yogyakarta, D.I. Yogyakarta 55153', fontSize: '14px', color: '#fed7aa' } },
    { id: 'loc-hrs-title', type: 'heading', props: { content: 'Jam Operasional Kedai', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'loc-hrs-desc', type: 'paragraph', props: { content: 'Senin - Minggu: 07.00 - 23.00 WIB (Dapur tutup pukul 22.00 WIB)', fontSize: '14px', color: '#fed7aa' } },
    // Buttons
    { id: 'loc-btn-wa', type: 'button', props: { label: 'Reservasi Meja / WhatsApp 💬', href: '#order', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
    { id: 'loc-btn-map', type: 'button', props: { label: 'Buka di Google Maps 📍', href: '#location', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(217,119,6,0.1)', color: '#fef3c7', borderColor: '#d97706' } },
    // Image
    { id: 'loc-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', alt: 'Cozy coffee shop atmosphere', width: '100%', height: '460px', objectFit: 'cover', borderRadius: '24px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'loc-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'loc-title');
  const descComps = layoutComponents.filter(c => c.id === 'loc-desc');
  const addrTitle = layoutComponents.filter(c => c.id === 'loc-addr-title');
  const addrDesc = layoutComponents.filter(c => c.id === 'loc-addr-desc');
  const hrsTitle = layoutComponents.filter(c => c.id === 'loc-hrs-title');
  const hrsDesc = layoutComponents.filter(c => c.id === 'loc-hrs-desc');
  const btnWa = layoutComponents.filter(c => c.id === 'loc-btn-wa');
  const btnMap = layoutComponents.filter(c => c.id === 'loc-btn-map');
  const imgComps = layoutComponents.filter(c => c.id === 'loc-img' || c.type === 'image');

  return (
    <section id="location" className="relative py-24 sm:py-32 bg-[#180e08] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Info & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>

            <div className="space-y-6 pt-4">
              <div className="p-5 rounded-2xl bg-[#23150d] border border-amber-900/30 flex items-start gap-4">
                <div className="text-2xl shrink-0">📍</div>
                <div className="space-y-1">
                  {renderLayoutComponents(addrTitle, sectionId)}
                  {renderLayoutComponents(addrDesc, sectionId)}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#23150d] border border-amber-900/30 flex items-start gap-4">
                <div className="text-2xl shrink-0">⏰</div>
                <div className="space-y-1">
                  {renderLayoutComponents(hrsTitle, sectionId)}
                  {renderLayoutComponents(hrsDesc, sectionId)}
                </div>
              </div>
            </div>

            {/* Amenities Chips */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-amber-200">
              {['⚡ Fast WiFi (100Mbps)', '🔌 Stopkontak Setiap Meja', '🕌 Musholla Nyaman', '🅿️ Parkir Mobil & Motor Luas', '❄️ Indoor AC Bebas Asap'].map((am, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-amber-950/80 border border-amber-800/40">
                  {am}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              {renderLayoutComponents(btnWa, sectionId)}
              {renderLayoutComponents(btnMap, sectionId)}
            </div>
          </div>

          {/* Right: Ambient Cafe Atmosphere Photo Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-700/40 shadow-2xl shadow-amber-950/80">
              {imgComps.length > 0 ? (
                renderLayoutComponents(imgComps, sectionId)
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Cozy coffee shop atmosphere"
                  className="w-full h-[460px] object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#180e08] via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#1d120a]/90 backdrop-blur-md border border-amber-600/30 flex items-center justify-between pointer-events-none">
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Status Meja Saat Ini</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    Buka • Tersedia Tempat Duduk Indoor & Outdoor
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
