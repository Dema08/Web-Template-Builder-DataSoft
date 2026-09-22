import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MONOCLE — Editorial Delivery Spec Matrix
 * Tata letak tabel editorial bergaya monokrom dengan tipografi serif klasik, data rincian matriks wilayah, dan SLA resmi.
 * Cocok untuk logistik legal, regulasi perkapalan, dan laporan tahunan operasional.
 */
export default function Coverage13({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov13-badge', type: 'badge', props: { content: 'TABEL MATRIKS JANGKAUAN 2026', background: '#f1f5f9', color: '#334155' } },
    { id: 'cov13-heading', type: 'heading', props: { content: 'Matriks Jangkauan & Estimasi Waktu Transit', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cov13-text', type: 'text', props: { content: 'Daftar resmi spesifikasi rute reguler dan ekspres yang berlaku di seluruh jaringan operasional.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const matrix = [
    { zone: 'Jabodetabek & Banten', regular: '24 Jam', express: 'Same-Day', hub: 'Jakarta Central Hub', mode: 'Armada Darat' },
    { zone: 'Jawa Barat & Tengah', regular: '1-2 Hari', express: '24 Jam', hub: 'Bandung & Semarang', mode: 'Truk Tronton' },
    { zone: 'Jawa Timur & Bali', regular: '2 Hari', express: '24 Jam', hub: 'Surabaya Gateway', mode: 'Truk & Feri' },
    { zone: 'Sumatera Koridor Utama', regular: '2-3 Hari', express: '1-2 Hari', hub: 'Medan & Palembang', mode: 'Darat & Udara' },
    { zone: 'Kalimantan & IKN', regular: '3-4 Hari', express: '2 Hari', hub: 'Balikpapan Hub', mode: 'Tol Laut & Air' },
    { zone: 'Sulawesi & Maluku', regular: '3-5 Hari', express: '2 Hari', hub: 'Makassar Port', mode: 'Kapal Kargo' },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3 font-sans">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full font-serif">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full font-sans">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-sm font-sans">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 border-b border-slate-300 text-xs font-bold uppercase text-slate-700">
              <tr>
                <th className="p-4">Zona Pengiriman</th>
                <th className="p-4">Reguler SLA</th>
                <th className="p-4">Express SLA</th>
                <th className="p-4">Hub Sentral</th>
                <th className="p-4">Moda Transportasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {matrix.map((m, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900">{m.zone}</td>
                  <td className="p-4">{m.regular}</td>
                  <td className="p-4 font-bold text-indigo-600">{m.express}</td>
                  <td className="p-4">{m.hub}</td>
                  <td className="p-4 text-xs font-semibold text-slate-500">{m.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
