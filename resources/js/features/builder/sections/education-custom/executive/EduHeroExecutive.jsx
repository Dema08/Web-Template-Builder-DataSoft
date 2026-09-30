import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduHeroExecutive
 * Prestigious corporate training split hero for C-level leadership & executive masterclasses.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduHeroExecutive({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ex-badge', type: 'badge', props: { text: 'EXECUTIVE CORPORATE DEVELOPMENT', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' } },
    { id: 'ex-title', type: 'heading', props: { content: 'Membangun Kapabilitas Kepemimpinan Strategis & Keunggulan Korporasi', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
    { id: 'ex-desc', type: 'paragraph', props: { content: 'Program pelatihan eksekutif tersertifikasi internasional yang dirancang khusus untuk Dewan Direksi, General Manager, dan pemimpin masa depan BUMN serta korporasi multinasional.', fontSize: '17px', color: '#cbd5e1' } },
    { id: 'ex-btn-pri', type: 'button', props: { label: 'Rancang In-House Program ➔', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: '#ffffff', fontWeight: '700' } },
    { id: 'ex-btn-sec', type: 'button', props: { label: 'Jadwal Masterclass 2026', href: '#programs', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' } },
    // Stats
    { id: 'ex-stat1-num', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#38bdf8' } },
    { id: 'ex-stat1-lbl', type: 'paragraph', props: { content: 'Korporasi & BUMN Klien', fontSize: '12px', color: '#94a3b8' } },
    { id: 'ex-stat2-num', type: 'heading', props: { content: '4.92 / 5', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#38bdf8' } },
    { id: 'ex-stat2-lbl', type: 'paragraph', props: { content: 'Skor Kepuasan Peserta Eksekutif', fontSize: '12px', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'ex-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'ex-title');
  const descComps = layoutComponents.filter(c => c.id === 'ex-desc');
  const btnPriComps = layoutComponents.filter(c => c.id === 'ex-btn-pri');
  const btnSecComps = layoutComponents.filter(c => c.id === 'ex-btn-sec');
  const stat1Num = layoutComponents.filter(c => c.id === 'ex-stat1-num');
  const stat1Lbl = layoutComponents.filter(c => c.id === 'ex-stat1-lbl');
  const stat2Num = layoutComponents.filter(c => c.id === 'ex-stat2-num');
  const stat2Lbl = layoutComponents.filter(c => c.id === 'ex-stat2-lbl');

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#070b14] overflow-hidden py-20 lg:py-28">
      {/* Background Cyan Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {renderLayoutComponents(btnPriComps, sectionId)}
              {renderLayoutComponents(btnSecComps, sectionId)}
            </div>

            {/* Metrics */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-[#0e1726] border border-cyan-900/30">
                {renderLayoutComponents(stat1Num, sectionId)}
                {renderLayoutComponents(stat1Lbl, sectionId)}
              </div>
              <div className="p-4 rounded-2xl bg-[#0e1726] border border-cyan-900/30">
                {renderLayoutComponents(stat2Num, sectionId)}
                {renderLayoutComponents(stat2Lbl, sectionId)}
              </div>
              <div className="p-4 rounded-2xl bg-[#0e1726] border border-cyan-900/30 hidden sm:block">
                <div className="text-[28px] font-extrabold text-cyan-400">98%</div>
                <div className="text-xs text-slate-400">Tingkat Kelulusan Ujian Sertifikasi</div>
              </div>
            </div>
          </div>

          {/* Right Executive Classroom Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-700/40 shadow-2xl shadow-cyan-950/80 group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Executive board leadership workshop"
                className="w-full h-[460px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0d1624]/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold">C-Suite Executive Series</div>
                  <div className="text-sm font-bold text-white">Strategic Agility & AI Governance Masterclass</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-cyan-500 text-stone-950 text-xs font-extrabold shrink-0">
                  Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
