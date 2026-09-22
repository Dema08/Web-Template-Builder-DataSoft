import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NEBULA — Dark Glass Space Milestones
 * Lini masa bernuansa galaksi kosmik dengan kartu glassmorphism, node bersinar biru/cyan, dan roadmap teknologi masa depan.
 * Cocok untuk platform deep tech, SaaS modern, dan inovasi web3/AI.
 */
export default function Timeline06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml6-badge', type: 'badge', props: { content: '✦ CELESTIAL TECH ROADMAP', background: '#0e1726', color: '#38bdf8' } },
    { id: 'tml6-heading', type: 'heading', props: { content: 'Evolusi Teknologi & Roadmap Inovasi', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#f8fafc', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml6-text', type: 'text', props: { content: 'Rencana strategis pengembangan kapabilitas komputasi dan arsitektur platform dari masa ke masa.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const roadmap = [
    { phase: 'Q1 — Foundation', title: 'Core Protocol 2.0', status: 'Selesai', desc: 'Peningkatan kecepatan throughput 10x lipat pada backend terdistribusi.' },
    { phase: 'Q2 — Expansion', title: 'Autonomous AI Engine', status: 'Aktif', desc: 'Implementasi model rekomendasi otomatis dengan inferensi sub-50ms.' },
    { phase: 'Q3 — Ecosystem', title: 'Global Multi-Region Cloud', status: 'Dalam Pengerjaan', desc: 'Ekspansi kluster data center ke 12 zona ketersediaan internasional.' },
    { phase: 'Q4 — Horizon', title: 'Quantum Ready Encryption', status: 'Rencana', desc: 'Integrasi protokol kriptografi pasca-kuantum untuk keamanan tingkat tinggi.' },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#030712] overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.12),transparent)]" />
      
      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmap.map((r, i) => (
            <div key={i} className="p-7 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/50 shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">{r.phase}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{r.status}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-2">{r.title}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{r.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-cyan-300/80 font-mono">
                Status: Verified ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
