import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TRANSGO — Nationwide Highway Freight Map
 * Layout industrial bernuansa kuning/amber dengan fokus pada jalur angkutan berat darat dan rute logistik manufaktur.
 * Cocok untuk ekspedisi truk tronton, kargo berat (heavy cargo), dan suplai pabrik.
 */
export default function Coverage17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov17-badge', type: 'badge', props: { content: 'TRANSGO HIGHWAY NETWORK', background: '#fef3c7', color: '#d97706' } },
    { id: 'cov17-heading', type: 'heading', props: { content: 'Rute Angkutan Beban Berat Trans-Tol Nusantara', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov17-text', type: 'text', props: { content: 'Jaringan jalur jalan tol dan jalan nasional terdedikasi untuk armada truk wingbox, container 40ft, dan muatan proyek s/d 50 ton.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  return (
    <section className="py-24 px-6 bg-amber-500/5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border-2 border-amber-300 shadow-lg">
            <span className="text-2xl font-black text-amber-600">1.167 KM</span>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Jalur Tol Trans-Jawa</h3>
            <p className="text-sm text-slate-600 mt-1">Merak - Jakarta - Semarang - Surabaya - Probolinggo dengan 12 rest area khusus armada berat.</p>
          </div>

          <div className="p-7 rounded-2xl bg-white border-2 border-amber-300 shadow-lg">
            <span className="text-2xl font-black text-amber-600">2.048 KM</span>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Jalur Tol Trans-Sumatera</h3>
            <p className="text-sm text-slate-600 mt-1">Bakauheni - Palembang - Pekanbaru terhubung non-stop untuk kargo komoditas & industri.</p>
          </div>

          <div className="p-7 rounded-2xl bg-white border-2 border-amber-300 shadow-lg">
            <span className="text-2xl font-black text-amber-600">500+ Hub</span>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Jaringan Pool & Workshop</h3>
            <p className="text-sm text-slate-600 mt-1">Layanan darurat teknis 24 jam di sepanjang rute utama untuk kelancaran armada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
