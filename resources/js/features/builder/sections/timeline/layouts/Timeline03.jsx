import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Dark Cinematic Speed Stages
 * Lini masa berkecepatan tinggi dengan aksen oranye menyala, tahapan eksekusi kilat, dan indikator progres.
 * Cocok untuk peluncuran produk cepat, sprint pengembangan agile, dan layanan prioritas.
 */
export default function Timeline03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml3-badge', type: 'badge', props: { content: '⚡ RAPID EXECUTION SPRINT', background: '#1c1917', color: '#f97316' } },
    { id: 'tml3-heading', type: 'heading', props: { content: 'Tahapan Akselerasi Dari Konsep Ke Pasar', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#fafaf9', margin: '0 0 16px 0' } },
    { id: 'tml3-text', type: 'text', props: { content: 'Kerangka kerja berkecepatan tinggi yang memangkas waktu peluncuran dari hitungan bulan menjadi minggu.', fontSize: '16px', color: '#a8a29e', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const stages = [
    { phase: '01', title: 'Discovery & Sprint Scope', duration: 'Minggu 1-2', desc: 'Pemetaan sasaran bisnis, riset pengguna kilat, dan perumusan MVP.' },
    { phase: '02', title: 'Rapid Prototype & UX', duration: 'Minggu 3-4', desc: 'Pembuatan prototipe interaktif dan validasi desain bersama stakeholder.' },
    { phase: '03', title: 'Engineering & QA Build', duration: 'Minggu 5-7', desc: 'Pengembangan kode modular, integrasi API, dan uji performa otomatis.' },
    { phase: '04', title: 'Global Launch & Scale', duration: 'Minggu 8+', desc: 'Deploy produksi, pemantauan analitik live, dan iterasi berkala.' },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#09090b] overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="pointer-events-none absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((s, i) => (
            <div key={i} className="p-7 rounded-2xl bg-[#141418] border border-stone-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-orange-500">{s.phase}</span>
                  <span className="text-xs font-bold text-stone-400 bg-stone-900 border border-stone-800 px-2.5 py-1 rounded">{s.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-4 group-hover:text-orange-400 transition-colors">{s.title}</h3>
                <p className="text-sm text-stone-400 mt-2 leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center gap-2 text-xs text-orange-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span>On-Track SLA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
