import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduMethodologyExecutive
 * 4D Corporate Training Framework (Discover, Design, Deliver, Drive) for Executive Institute.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduMethodologyExecutive({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'mth-badge', type: 'badge', props: { text: 'METODOLOGI KORPORASI TERINTEGRASI', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' } },
    { id: 'mth-title', type: 'heading', props: { content: 'Kerangka Kerja 4D untuk Menghasilkan Dampak Bisnis Nyata (ROI)', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' } },
    { id: 'mth-desc', type: 'paragraph', props: { content: 'Setiap program pelatihan disesuaikan secara khusus (tailor-made) dengan strategi bisnis, budaya organisasi, dan target Key Performance Indicators (KPI) korporasi Anda.', fontSize: '16px', color: '#cbd5e1' } },
    // Step 1
    { id: 's1-title', type: 'heading', props: { content: '1. Discover & Competency Gap Audit', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 's1-desc', type: 'paragraph', props: { content: 'Pemetaan kompetensi kepemimpinan dan asesmen kebutuhan pembelajaran (TNA) berbasis data objektif.', fontSize: '13px', color: '#cbd5e1' } },
    // Step 2
    { id: 's2-title', type: 'heading', props: { content: '2. Design Custom Learning Journey', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 's2-desc', type: 'paragraph', props: { content: 'Penyusunan kurikulum modular, simulasi bisnis gamifikasi, dan studi kasus spesifik industri perusahaan.', fontSize: '13px', color: '#cbd5e1' } },
    // Step 3
    { id: 's3-title', type: 'heading', props: { content: '3. Deliver High-Impact Masterclasses', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 's3-desc', type: 'paragraph', props: { content: 'Fasilitasi interaktif oleh mantan C-level executives dan praktisi industri global berakreditasi.', fontSize: '13px', color: '#cbd5e1' } },
    // Step 4
    { id: 's4-title', type: 'heading', props: { content: '4. Drive Business Impact & Evaluation', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 's4-desc', type: 'paragraph', props: { content: 'Evaluasi Kirkpatrick Level 4 untuk mengukur implementasi di tempat kerja dan pertumbuhan ROI bisnis.', fontSize: '13px', color: '#cbd5e1' } },
    // CTA
    { id: 'mth-cta-btn', type: 'button', props: { label: 'Jadwalkan Konsultasi TNA Korporasi ➔', href: '#contact', variant: 'outline', size: 'medium', radius: 'md', background: 'rgba(14,165,233,0.1)', color: '#38bdf8', borderColor: '#0ea5e9' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'mth-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'mth-title');
  const descComps = layoutComponents.filter(c => c.id === 'mth-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'mth-cta-btn');

  const steps = [
    {
      title: layoutComponents.filter(c => c.id === 's1-title'),
      desc: layoutComponents.filter(c => c.id === 's1-desc')
    },
    {
      title: layoutComponents.filter(c => c.id === 's2-title'),
      desc: layoutComponents.filter(c => c.id === 's2-desc')
    },
    {
      title: layoutComponents.filter(c => c.id === 's3-title'),
      desc: layoutComponents.filter(c => c.id === 's3-desc')
    },
    {
      title: layoutComponents.filter(c => c.id === 's4-title'),
      desc: layoutComponents.filter(c => c.id === 's4-desc')
    }
  ];

  return (
    <section id="methodology" className="relative py-24 sm:py-32 bg-[#060a12] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>

            <div className="space-y-3.5 pt-4">
              {steps.map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0c1422] border border-cyan-950 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-700 flex items-center justify-center font-bold text-cyan-400 text-xs shrink-0 mt-0.5">
                    D{idx + 1}
                  </div>
                  <div className="space-y-1">
                    {renderLayoutComponents(s.title, sectionId)}
                    {renderLayoutComponents(s.desc, sectionId)}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">{renderLayoutComponents(ctaComps, sectionId)}</div>
          </div>

          {/* Right Corporate Impact Metric Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 bg-[#0b1320] border border-cyan-700/30 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  ✦ Business Impact Benchmark
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                  Kirkpatrick L4
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#070d17] border border-slate-800">
                  <div className="text-3xl font-extrabold text-white">340%</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Rata-Rata ROI Pelatihan</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#070d17] border border-slate-800">
                  <div className="text-3xl font-extrabold text-cyan-400">45.000+</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Eksekutif Terlatih</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#070d17] border border-slate-800">
                  <div className="text-3xl font-extrabold text-emerald-400">99.2%</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Rekomendasi HR Director</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#070d17] border border-slate-800">
                  <div className="text-3xl font-extrabold text-blue-400">120+</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Master Facilitators</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
