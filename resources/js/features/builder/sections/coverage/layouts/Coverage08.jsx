import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SAKURA — Warm Gradient Bento Zones
 * Tata letak bento modern dengan nuansa gradien hangat rose & peach, tipografi ramah, dan klasifikasi zona fleksibel.
 * Cocok untuk e-commerce fulfillment, consumer delivery apps, dan retail brands.
 */
export default function Coverage08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov8-badge', type: 'badge', props: { content: '🌸 JANGKAUAN DISTRIBUSI LENGKAP', background: '#fdf2f8', color: '#db2777' } },
    { id: 'cov8-heading', type: 'heading', props: { content: 'Zona Pengiriman Seluruh Wilayah Indonesia', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1e293b', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov8-text', type: 'text', props: { content: 'Temukan kemudahan pengiriman paket dengan jangkauan merata dan tarif terstandardisasi di setiap pulau.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-rose-50/60 via-white to-pink-50/40" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 p-8 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Zona Utama</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-4">Jawa, Bali, & Kepulauan Riau</h3>
              <p className="text-rose-100 text-sm md:text-base mt-2 max-w-xl">Layanan prioritas kilat dengan 250+ armada berangkat setiap 2 jam dari pusat sortir induk.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-6 text-sm font-semibold">
              <div>⚡ Same-day Delivery</div>
              <div>📦 Drop-off 24 Jam</div>
              <div>📍 180+ Point of Sales</div>
            </div>
          </div>

          <div className="md:col-span-4 p-8 rounded-3xl bg-white border border-rose-100 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-pink-600 bg-pink-50 px-3 py-1 rounded-full">Zona Sumatera</span>
              <h3 className="text-xl font-bold text-slate-900 mt-4">Trans-Sumatera Highway</h3>
              <p className="text-slate-500 text-sm mt-2">Jalur penghubung Lampung hingga Aceh dengan 65 titik hub aktif.</p>
            </div>
            <div className="mt-6 text-xs text-rose-500 font-bold">Estimasi 1-2 Hari Kerja</div>
          </div>

          <div className="md:col-span-6 p-8 rounded-3xl bg-white border border-rose-100 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-pink-600 bg-pink-50 px-3 py-1 rounded-full">Zona Kalimantan</span>
              <h3 className="text-xl font-bold text-slate-900 mt-4">IKN & Koridor Industri Kalimantan</h3>
              <p className="text-slate-500 text-sm mt-2">Pengiriman ekspres langsung ke Balikpapan, Samarinda, Banjarmasin, dan Pontianak.</p>
            </div>
            <div className="mt-6 text-xs text-rose-500 font-bold">Estimasi 2-3 Hari Kerja</div>
          </div>

          <div className="md:col-span-6 p-8 rounded-3xl bg-white border border-rose-100 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-pink-600 bg-pink-50 px-3 py-1 rounded-full">Zona Indonesia Timur</span>
              <h3 className="text-xl font-bold text-slate-900 mt-4">Sulawesi, Maluku, & Papua</h3>
              <p className="text-slate-500 text-sm mt-2">Konektivitas udara harian dan kapal kargo terjadwal ke Makassar, Manado, dan Jayapura.</p>
            </div>
            <div className="mt-6 text-xs text-rose-500 font-bold">Estimasi 2-4 Hari Kerja</div>
          </div>
        </div>
      </div>
    </section>
  );
}
