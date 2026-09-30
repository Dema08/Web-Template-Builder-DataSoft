import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduCurriculumBootcamp
 * Project-based learning methodology & Capstone Portfolio showcase for Bootcamp.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduCurriculumBootcamp({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cur-badge', type: 'badge', props: { text: 'METODOLOGI PROJECT-BASED', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' } },
    { id: 'cur-title', type: 'heading', props: { content: 'Belajar Bukan Menghafal, Tapi Membangun Produk Nyata', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' } },
    { id: 'cur-desc', type: 'paragraph', props: { content: 'Di CodeSphere, Anda menulis lebih dari 15.000 baris kode nyata, menyelesaikan pull request harian di GitHub, dan mendeploy 4 proyek skala produksi yang siap dipamerkan ke recruiter.', fontSize: '16px', color: '#cbd5e1' } },
    // Step 1
    { id: 'cs1-title', type: 'heading', props: { content: 'Live Interactive Coding & Deep Fundamentals', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'cs1-desc', type: 'paragraph', props: { content: 'Fondasi logika algoritma, struktur data efisien, dan clean architecture standar enterprise.', fontSize: '13px', color: '#94a3b8' } },
    // Step 2
    { id: 'cs2-title', type: 'heading', props: { content: '1-on-1 Code Review dari Senior Tech Lead', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'cs2-desc', type: 'paragraph', props: { content: 'Setiap baris kode Anda diulas langsung untuk memastikan best practice, security, dan readability.', fontSize: '13px', color: '#94a3b8' } },
    // Step 3
    { id: 'cs3-title', type: 'heading', props: { content: 'Real-World Production Capstone Project', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'cs3-desc', type: 'paragraph', props: { content: 'Membangun aplikasi fullstack kompleks dengan live database, payment gateway, dan deployment CI/CD.', fontSize: '13px', color: '#94a3b8' } },
    // CTA
    { id: 'cur-cta-btn', type: 'button', props: { label: 'Lihat Contoh Portofolio Alumni ➔', href: '#hiring', variant: 'outline', size: 'medium', radius: 'full', background: 'rgba(99,102,241,0.1)', color: '#818cf8', borderColor: '#6366f1' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'cur-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'cur-title');
  const descComps = layoutComponents.filter(c => c.id === 'cur-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'cur-cta-btn');

  const steps = [
    {
      num: '01',
      title: layoutComponents.filter(c => c.id === 'cs1-title'),
      desc: layoutComponents.filter(c => c.id === 'cs1-desc')
    },
    {
      num: '02',
      title: layoutComponents.filter(c => c.id === 'cs2-title'),
      desc: layoutComponents.filter(c => c.id === 'cs2-desc')
    },
    {
      num: '03',
      title: layoutComponents.filter(c => c.id === 'cs3-title'),
      desc: layoutComponents.filter(c => c.id === 'cs3-desc')
    }
  ];

  return (
    <section id="curriculum" className="relative py-24 sm:py-32 bg-[#06020e] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>

            <div className="space-y-4 pt-4">
              {steps.map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#110724] border border-purple-900/40 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-700 flex items-center justify-center font-mono font-bold text-indigo-400 text-xs shrink-0 mt-0.5">
                    {s.num}
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

          {/* Right Capstone Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 bg-[#120829] border border-purple-600/30 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
                <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                  ✦ Capstone Showcase Preview
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                  Production Ready
                </span>
              </div>

              {/* Capstone Card */}
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-[#0b0318] border border-indigo-500/30">
                  <div className="text-slate-400 text-[11px]">PROJECT #4 (FINAL CAPSTONE)</div>
                  <div className="text-white font-bold text-base font-sans mt-1">Multi-Tenant AI Agentic SaaS Platform</div>
                  <div className="text-indigo-400 mt-2">Next.js 15 • tRPC • PostgreSQL • Prisma • LangChain • Stripe Webhooks</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-[#0b0318] border border-purple-900/40">
                    <div className="text-slate-400 text-[10px]">PULL REQUESTS</div>
                    <div className="text-xl font-bold text-white mt-0.5 font-sans">140+ Reviewed</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b0318] border border-purple-900/40">
                    <div className="text-slate-400 text-[10px]">TEST COVERAGE</div>
                    <div className="text-xl font-bold text-emerald-400 mt-0.5 font-sans">92% Unit & E2E</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
