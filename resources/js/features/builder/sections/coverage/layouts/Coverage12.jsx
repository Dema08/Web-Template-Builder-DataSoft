import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLSTICE — Sunset Express Corridor
 * Tampilan full-bleed hangat bernuansa senja dengan fokus pada rute kecepatan tinggi (24 jam) dan jangkauan kargo prioritas.
 * Cocok untuk express delivery, kargo makanan segar, dan logistik perikanan/pertanian.
 */
export default function Coverage12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov12-badge', type: 'badge', props: { content: '⚡ 24-HOUR SUNSET CORRIDOR', background: '#ffedd5', color: '#ea580c' } },
    { id: 'cov12-heading', type: 'heading', props: { content: 'Kecepatan Pengiriman Lintas Koridor Senja', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov12-text', type: 'text', props: { content: 'Jadwal keberangkatan malam hari memastikan paket Anda tiba di kota tujuan keesokan paginya tanpa penundaan.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-amber-500/10 via-white to-orange-500/10" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Overnight Cargo</span>
            <h3 className="text-2xl font-black mt-4">Jalur Darat 24 Jam</h3>
            <p className="text-amber-100 text-sm mt-2">Konektivitas Trans-Jawa & Trans-Sumatera dengan truk berpendingin untuk produk segar.</p>
            <div className="mt-8 text-3xl font-black">99.9%</div>
            <div className="text-xs text-amber-200">On-Time Overnight Arrival</div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-orange-200 shadow-md">
            <span className="text-xs font-black uppercase text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Air Cargo Same-Day</span>
            <h3 className="text-2xl font-black text-slate-900 mt-4">Penerbangan Pagi</h3>
            <p className="text-slate-500 text-sm mt-2">Kargo udara ke kota-kota besar Sumatera, Kalimantan, dan Sulawesi berangkat pukul 05:00 WIB.</p>
            <div className="mt-8 text-3xl font-black text-orange-600">&lt; 8 Jam</div>
            <div className="text-xs text-slate-400">Door-to-Door Lead Time</div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-orange-200 shadow-md">
            <span className="text-xs font-black uppercase text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Dedicated Route</span>
            <h3 className="text-2xl font-black text-slate-900 mt-4">Rute Pabrik Terjadwal</h3>
            <p className="text-slate-500 text-sm mt-2">Armada sewaan eksklusif langsung dari gudang manufaktur ke distributor tanpa perantara.</p>
            <div className="mt-8 text-3xl font-black text-slate-900">Custom SLA</div>
            <div className="text-xs text-slate-400">Sesuai Perjanjian Kontrak</div>
          </div>
        </div>
      </div>
    </section>
  );
}
