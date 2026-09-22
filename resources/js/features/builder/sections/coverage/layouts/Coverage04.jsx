import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PAPERCUT — Neo-Brutalist Geo Coverage
 * Gaya brutalist modern dengan border hitam tebal, drop-shadow kotak tegas, warna kontras tinggi, dan badge wilayah terstruktur.
 * Untuk brand berkarakter tegas, modern startup logistik, dan layanan berani tampil beda.
 */
export default function Coverage04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov4-badge', type: 'badge', props: { content: '★ 38 PROVINSI TERKONEKSI', background: '#fef08a', color: '#000000' } },
    { id: 'cov4-heading', type: 'heading', props: { content: 'KAPASITAS JANGKAUAN LOGISTIK', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cov4-text', type: 'text', props: { content: 'Distribusi barang tanpa kompromi. Rute darat, laut, dan udara aktif setiap hari di seluruh pelosok Indonesia.', fontSize: '16px', color: '#1e293b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const zones = [
    { zone: 'ZONA 1 — BARAT', cities: 'Sumatera & Kepulauan Riau', hubs: '24 Hub Transit', time: '1-2 Hari', bg: '#fef08a' },
    { zone: 'ZONA 2 — SENTRAL', cities: 'Jawa, Bali, NTB, NTT', hubs: '65 Hub Transit', time: 'Same-Day / 24H', bg: '#bbf7d0' },
    { zone: 'ZONA 3 — UTARA', cities: 'Kalimantan & IKN Nusantara', hubs: '18 Hub Transit', time: '2-3 Hari', bg: '#fed7aa' },
    { zone: 'ZONA 4 — TIMUR', cities: 'Sulawesi, Maluku, Papua', hubs: '22 Hub Transit', time: '2-4 Hari', bg: '#bae6fd' },
  ];

  return (
    <section className="py-24 px-6 bg-[#fffbeb] border-y-4 border-black" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((z, i) => (
            <div key={i} className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000000] transition-all duration-150 flex flex-col justify-between">
              <div>
                <span className="inline-block font-black text-xs px-3 py-1 border-2 border-black mb-4 uppercase" style={{ backgroundColor: z.bg }}>
                  {z.zone}
                </span>
                <h3 className="text-xl font-black text-black">{z.cities}</h3>
                <p className="text-sm font-bold text-stone-600 mt-2">{z.hubs}</p>
              </div>
              <div className="mt-8 pt-4 border-t-2 border-black flex justify-between items-center">
                <span className="text-xs font-black uppercase text-stone-500">Estimasi</span>
                <span className="text-sm font-black text-black">{z.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
