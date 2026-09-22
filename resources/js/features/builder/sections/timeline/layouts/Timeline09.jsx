import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SUMMIT — Navy Corporate Horizon
 * Lini masa korporat bernuansa biru navy tegas dengan tahapan implementasi tata kelola dan ekspansi konglomerasi.
 * Cocok untuk holding company, BUMN, dan laporan tata kelola perusahaan (GCG).
 */
export default function Timeline09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml9-badge', type: 'badge', props: { content: 'STRATEGIC CORPORATE ROADMAP', background: '#1e293b', color: '#38bdf8' } },
    { id: 'tml9-heading', type: 'heading', props: { content: 'Tahapan Transformasi Strategis Korporasi', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml9-text', type: 'text', props: { content: 'Peta jalan pertumbuhan multi-tahun untuk memperkuat posisi pasar dan menciptakan nilai tambah berkelanjutan.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const corporatePhases = [
    { year: 'Fase I (2024)', title: 'Penguatan Fundamental & Governance', kpi: 'Efisiensi Biaya +25%', desc: 'Restrukturisasi unit bisnis inti dan standarisasi proses tata kelola terpadu.' },
    { year: 'Fase II (2025)', title: 'Digitalisasi Operasional & AI', kpi: 'Otomasi Proses 80%', desc: 'Integrasi platform analitik data terpusat di seluruh anak perusahaan.' },
    { year: 'Fase III (2026)', title: 'Ekspansi Pasar Regional & Akuisisi', kpi: 'Pertumbuhan Revenue +40%', desc: 'Penetrasi ke pasar regional Asia Tenggara melalui kemitraan strategis.' },
  ];

  return (
    <section className="py-24 px-6 bg-[#0f172a]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="space-y-4">
          {corporatePhases.map((p, i) => (
            <div key={i} className="p-7 rounded-2xl bg-[#1e293b] border border-slate-700/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-sky-500/50 transition-colors">
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-400 uppercase">{p.year}</span>
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </div>
              <div className="border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-700">
                <span className="text-xs text-slate-400 block">Target KPI</span>
                <span className="text-emerald-400 font-bold text-base">{p.kpi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
