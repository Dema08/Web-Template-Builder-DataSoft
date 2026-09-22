import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ORION — Split Strategy & Execution Milestones
 * Tata letak split: Sisi kiri berisi visi strategis & statistik penyelesaian, sisi kanan berisi daftar milestone kronologis.
 * Cocok untuk tinjauan proyek dewan direksi, proposal investasi, dan manajemen proyek korporat.
 */
export default function Timeline19({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml19-badge', type: 'badge', props: { content: 'STRATEGIC EXECUTION TRACK', background: '#f0fdf4', color: '#16a34a' } },
    { id: 'tml19-heading', type: 'heading', props: { content: 'Kerangka Kerja Eksekusi & Capaian Proyek', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', margin: '0 0 16px 0' } },
    { id: 'tml19-text', type: 'text', props: { content: 'Pemantauan berkala setiap inisiatif strategis untuk menjamin kepatuhan anggaran dan ketepatan waktu.', fontSize: '16px', color: '#64748b', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const milestones = [
    { stage: 'Tahap 1', name: 'Studi Kelayakan & Perizinan', status: 'Selesai 100%', progress: '100%' },
    { stage: 'Tahap 2', name: 'Konstruksi & Pengadaan Infrastruktur', status: 'Selesai 100%', progress: '100%' },
    { stage: 'Tahap 3', name: 'Uji Coba Sistem & Audit Keamanan', status: 'Sedang Berjalan (85%)', progress: '85%' },
    { stage: 'Tahap 4', name: 'Operasional Penuh & Handover', status: 'Target Q4 2026', progress: '30%' },
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
          {milestones.map((m, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500 transition-colors flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded">{m.stage}</span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">{m.name}</h3>
                </div>
                <span className="text-xs font-bold text-slate-600">{m.status}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: m.progress }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
