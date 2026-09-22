import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ORION — Split Hub & Warehouses List
 * Tampilan split dengan daftar warehouse fulfillment center dan peta fasilitas penyimpanan modern bersertifikat.
 * Cocok untuk warehousing, 3PL logistics, dan manajemen inventori omnichannel.
 */
export default function Coverage19({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov19-badge', type: 'badge', props: { content: 'FULFILLMENT & WAREHOUSE NETWORK', background: '#f0fdf4', color: '#16a34a' } },
    { id: 'cov19-heading', type: 'heading', props: { content: 'Jaringan Gudang & Pusat Sortir Otomatis', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', margin: '0 0 16px 0' } },
    { id: 'cov19-text', type: 'text', props: { content: 'Fasilitas fulfillment center modern dengan kontrol suhu, sistem racking otomatis, dan integrasi API inventori.', fontSize: '16px', color: '#64748b', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const warehouses = [
    { name: 'Mega Fulfillment Jakarta Timur', area: '45.000 m²', spec: 'Suhu Kamar & Cold Storage (-20°C)' },
    { name: 'Central Distribution Hub Surabaya', area: '32.000 m²', spec: 'Cross-Docking & Racking Otomatis' },
    { name: 'Regional Hub Medan Kualanamu', area: '18.000 m²', spec: 'Akses Langsung Bandara & Pelabuhan' },
    { name: 'Balikpapan Nusantara Gateway Hub', area: '22.000 m²', spec: 'Pusat Distribusi IKN & Kalimantan' },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {warehouses.map((w, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{w.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{w.spec}</p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-base font-black text-emerald-600">{w.area}</span>
                <span className="text-xs text-slate-400 block">Luas Fasilitas</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
