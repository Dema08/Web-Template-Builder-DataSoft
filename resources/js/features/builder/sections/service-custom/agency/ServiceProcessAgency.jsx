import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceProcessAgency
 * Interactive 4-step creative workflow process for Agency.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceProcessAgency({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'proc-badge', type: 'badge', props: { text: 'BAGAIMANA KAMI BEKERJA', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#a78bfa', borderColor: '#7c3aed' } },
    { id: 'proc-title', type: 'heading', props: { content: 'Proses Kreatif yang Terstruktur & Berdampak', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'proc-desc', type: 'paragraph', props: { content: 'Dari riset mendalam hingga peluncuran tanpa celah, metode kami menjamin hasil yang melampaui ekspektasi bisnis Anda.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Step 1
    { id: 'proc-step1-num', type: 'badge', props: { text: '01', variant: 'solid', background: '#7c3aed', color: '#ffffff' } },
    { id: 'proc-step1-title', type: 'heading', props: { content: 'Discovery & Research', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'proc-step1-desc', type: 'paragraph', props: { content: 'Menganalisis lanskap pasar, persona audiens, kompetitor, serta tujuan objektif bisnis secara mendalam.', fontSize: '14px', color: '#94a3b8' } },
    // Step 2
    { id: 'proc-step2-num', type: 'badge', props: { text: '02', variant: 'solid', background: '#ec4899', color: '#ffffff' } },
    { id: 'proc-step2-title', type: 'heading', props: { content: 'Concept & Strategy', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'proc-step2-desc', type: 'paragraph', props: { content: 'Merumuskan arah visual, moodboard, user journey, arsitektur informasi, serta positioning yang unik.', fontSize: '14px', color: '#94a3b8' } },
    // Step 3
    { id: 'proc-step3-num', type: 'badge', props: { text: '03', variant: 'solid', background: '#06b6d4', color: '#042f2e' } },
    { id: 'proc-step3-title', type: 'heading', props: { content: 'Design & Development', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'proc-step3-desc', type: 'paragraph', props: { content: 'Eksekusi desain pixel-perfect, prototyping interaktif, serta coding performa tinggi dengan teknologi modern.', fontSize: '14px', color: '#94a3b8' } },
    // Step 4
    { id: 'proc-step4-num', type: 'badge', props: { text: '04', variant: 'solid', background: '#10b981', color: '#022c22' } },
    { id: 'proc-step4-title', type: 'heading', props: { content: 'Launch & Optimization', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'proc-step4-desc', type: 'paragraph', props: { content: 'Pengujian menyeluruh (QA), deployment produksi, tracking analytics, dan evaluasi performa berkelanjutan.', fontSize: '14px', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'proc-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'proc-title');
  const descComps = layoutComponents.filter(c => c.id === 'proc-desc');

  const steps = [
    {
      num: layoutComponents.filter(c => c.id === 'proc-step1-num'),
      title: layoutComponents.filter(c => c.id === 'proc-step1-title'),
      desc: layoutComponents.filter(c => c.id === 'proc-step1-desc'),
      borderColor: 'border-violet-500/40',
      glow: 'group-hover:border-violet-500'
    },
    {
      num: layoutComponents.filter(c => c.id === 'proc-step2-num'),
      title: layoutComponents.filter(c => c.id === 'proc-step2-title'),
      desc: layoutComponents.filter(c => c.id === 'proc-step2-desc'),
      borderColor: 'border-pink-500/40',
      glow: 'group-hover:border-pink-500'
    },
    {
      num: layoutComponents.filter(c => c.id === 'proc-step3-num'),
      title: layoutComponents.filter(c => c.id === 'proc-step3-title'),
      desc: layoutComponents.filter(c => c.id === 'proc-step3-desc'),
      borderColor: 'border-cyan-500/40',
      glow: 'group-hover:border-cyan-500'
    },
    {
      num: layoutComponents.filter(c => c.id === 'proc-step4-num'),
      title: layoutComponents.filter(c => c.id === 'proc-step4-title'),
      desc: layoutComponents.filter(c => c.id === 'proc-step4-desc'),
      borderColor: 'border-emerald-500/40',
      glow: 'group-hover:border-emerald-500'
    }
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#090414] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group relative p-7 rounded-3xl bg-white/[0.03] border ${step.borderColor} ${step.glow} backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.06] flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {renderLayoutComponents(step.num, sectionId)}
                  <span className="text-white/20 text-xs font-mono font-bold tracking-widest uppercase">
                    TAHAP {idx + 1}
                  </span>
                </div>
                <div className="space-y-3">
                  {renderLayoutComponents(step.title, sectionId)}
                  {renderLayoutComponents(step.desc, sectionId)}
                </div>
              </div>

              {/* Progress connector visual line */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-violet-400/70 font-mono">
                <span>Phase {idx + 1}/4</span>
                <span>Ready ➔</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
