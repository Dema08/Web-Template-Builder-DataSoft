import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AETHER — Ultra Premium Visionary Finale
 * Mahakarya penutup lini masa kosmik gelap indigo dengan pilar masa depan multi-dekade dan visual celestial spektakuler.
 * Cocok untuk konglomerat global, holding visioner, dan deklarasi visi jangka panjang.
 */
export default function Timeline20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml20-badge', type: 'badge', props: { content: '✦ AETHER VISIONARY CENTURY ROADMAP', background: '#1e1b4b', color: '#818cf8' } },
    { id: 'tml20-heading', type: 'heading', props: { content: 'Jejak Masa Lalu Menuju Warisan Masa Depan', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#fafaf9', align: 'center', margin: '0 0 16px 0' } },
    { id: 'tml20-text', type: 'text', props: { content: 'Merangkai fondasi sejarah yang kokoh dengan visi transformatif melintasi berbagai dekade ke depan.', fontSize: '17px', color: '#cbd5e1', align: 'center', margin: '0 0 48px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const eras = [
    { era: 'ERA 1 — GENESIS', years: '2015 - 2018', title: 'Fondasi Inovasi', desc: 'Membangun arsitektur teknologi inti dan prinsip keunggulan tanpa kompromi.' },
    { era: 'ERA 2 — EXPANSION', years: '2019 - 2022', title: 'Skalabilitas Nasional', desc: 'Melayani jutaan pengguna dengan keandalan operasional tingkat tinggi 99.99%.' },
    { era: 'ERA 3 — INTELLIGENCE', years: '2023 - 2026', title: 'Ekosistem AI Otonom', desc: 'Mentransformasi seluruh rantai nilai menjadi sistem cerdas swakelola.' },
    { era: 'ERA 4 — HORIZON', years: '2027+', title: 'Dampak Peradaban', desc: 'Menciptakan solusi masa depan yang memberdayakan generasi berikutnya.' },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#09090b] overflow-hidden text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Ambient Celestial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-500/30 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eras.map((e, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-indigo-500/50 shadow-2xl transition-all duration-300 group">
              <span className="text-xs font-mono font-bold text-indigo-400 block mb-1">{e.era}</span>
              <span className="text-xs text-slate-400 block mb-4">{e.years}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{e.title}</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900/90 to-purple-950/80 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Ingin Menjadi Bagian Dari Babak Selanjutnya?</h3>
            <p className="text-slate-400 text-sm mt-1">Mari berkolaborasi membangun ekosistem masa depan bersama para pemimpin industri terdepan.</p>
          </div>
          <a href="#contact" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all whitespace-nowrap">
            Mulai Kolaborasi →
          </a>
        </div>
      </div>
    </section>
  );
}
