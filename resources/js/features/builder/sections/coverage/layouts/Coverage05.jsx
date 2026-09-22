import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERENITY — Minimal Clean Area Grid
 * Desain jangkauan super bersih, tata letak seimbang dengan kartu minimalis, badge wilayah elegan, dan tipografi rapi.
 * Cocok untuk SaaS logistik modern, brand clean premium, dan korporat transparan.
 */
export default function Coverage05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov5-badge', type: 'badge', props: { content: 'Jangkauan Layanan', background: '#f1f5f9', color: '#475569' } },
    { id: 'cov5-heading', type: 'heading', props: { content: 'Menghubungkan Titik Distribusi Tanpa Hambatan', level: 'h2', fontSize: '38px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cov5-text', type: 'text', props: { content: 'Kami membangun jaringan distribusi yang konsisten, transparan, dan terukur di setiap provinsi.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const regions = [
    { name: 'Metropolitan Jabodetabek', count: '100% Kecamatan Terlayani', leadTime: 'Same-Day Priority' },
    { name: 'Pulau Jawa & Madura', count: '118 Kota & Kabupaten', leadTime: '1-2 Hari Kerja' },
    { name: 'Kepulauan Bali & Nusa Tenggara', count: '32 Titik Distribusi', leadTime: '2-3 Hari Kerja' },
    { name: 'Pulau Sumatera', count: '154 Kota & Kabupaten', leadTime: '2-3 Hari Kerja' },
    { name: 'Pulau Kalimantan', count: '56 Titik Distribusi', leadTime: '2-4 Hari Kerja' },
    { name: 'Sulawesi & Indonesia Timur', count: '78 Titik Distribusi', leadTime: '3-5 Hari Kerja' },
  ];

  return (
    <section className="py-24 px-6 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((r, i) => (
            <div key={i} className="p-7 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{r.leadTime}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-4">{r.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{r.count}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                <span>Status: Aktif 24/7</span>
                <span className="font-semibold text-slate-700">GPS Tracked</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
