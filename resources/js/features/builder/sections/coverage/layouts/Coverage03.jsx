import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Dark Cinematic Route Hub
 * Tampilan jangkauan gelap berkecepatan tinggi dengan aksen oranye menyala, jalur ekspres lintas pulau, dan kartu rute utama.
 * Cocok untuk kurir kilat, express cargo overnight, dan rute logistik prioritas.
 */
export default function Coverage03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov3-badge', type: 'badge', props: { content: '⚡ 24H EXPRESS CORRIDOR', background: '#1c1917', color: '#f97316' } },
    { id: 'cov3-heading', type: 'heading', props: { content: 'Jalur Ekspres Logistik Antar Kota & Pulau', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#fafaf9', margin: '0 0 16px 0' } },
    { id: 'cov3-text', type: 'text', props: { content: 'Koneksi rute ekspres non-stop menghubungkan pusat manufaktur ke gerbang distribusi utama tanpa hambatan.', fontSize: '16px', color: '#a8a29e', margin: '0 0 32px 0' } },
    { id: 'cov3-btn', type: 'button', props: { label: 'Lihat Seluruh Rute Transit →', href: '#routes', variant: 'primary', background: '#f97316', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');

  const corridors = [
    { name: 'Koridor Megapolitan Jawa', duration: '< 18 Jam', hubs: 'Jakarta - Bandung - Semarang - Surabaya', tag: 'High Speed' },
    { name: 'Tol Trans-Sumatera Express', duration: '< 36 Jam', hubs: 'Bakauheni - Palembang - Pekanbaru - Medan', tag: 'Non-Stop' },
    { name: 'Jalur Maritim Makassar Gate', duration: '< 48 Jam', hubs: 'Surabaya - Makassar - Balikpapan', tag: 'Tol Laut' },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#09090b] overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="pointer-events-none absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info */}
        <div className="lg:col-span-5 space-y-6">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
          {buttons.length > 0 && <div>{renderLayoutComponents(buttons, sectionId)}</div>}
        </div>

        {/* Right Corridor Cards */}
        <div className="lg:col-span-7 space-y-4">
          {corridors.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#141418] border border-stone-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">{c.tag}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{c.name}</h3>
                </div>
                <p className="text-sm text-stone-400 mt-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {c.hubs}
                </p>
              </div>
              <div className="text-left md:text-right border-t md:border-t-0 pt-3 md:pt-0 border-stone-800">
                <span className="text-2xl font-black text-white">{c.duration}</span>
                <p className="text-xs text-stone-500 font-medium">Estimasi Transit</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
