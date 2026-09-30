import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduHeroBootcamp
 * Energetic cyber-themed split hero for Fullstack & AI Engineering Bootcamp.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduHeroBootcamp({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'bt-badge', type: 'badge', props: { text: 'INTENSIVE CAREER ACCELERATOR', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' } },
    { id: 'bt-title', type: 'heading', props: { content: 'Transformasi Karir Menjadi Software Engineer & AI Specialist dalam 16 Minggu', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
    { id: 'bt-desc', type: 'paragraph', props: { content: 'Belajar langsung dari Tech Lead unicorn & global startup dengan kurikulum berbasis proyek nyata. Dapatkan jaminan koneksi kerja ke 350+ hiring partners.', fontSize: '17px', color: '#cbd5e1' } },
    { id: 'bt-btn-pri', type: 'button', props: { label: 'Daftar Sekarang & Konsultasi ⚡', href: '#pricing', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: '#ffffff', fontWeight: '800' } },
    { id: 'bt-btn-sec', type: 'button', props: { label: 'Unduh Silabus Lengkap (PDF)', href: '#curriculum', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.06)', color: '#ffffff', borderColor: '#818cf8' } },
    // Terminal stats
    { id: 'term-bt-title', type: 'heading', props: { content: 'codesphere-student-v24.ts', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#818cf8' } },
    { id: 'term-bt-stat1', type: 'heading', props: { content: '95.2%', level: 'h3', fontSize: '26px', fontWeight: '800', color: '#34d399' } },
    { id: 'term-bt-stat2', type: 'heading', props: { content: 'Rp 14.5 Jt', level: 'h3', fontSize: '26px', fontWeight: '800', color: '#60a5fa' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'bt-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'bt-title');
  const descComps = layoutComponents.filter(c => c.id === 'bt-desc');
  const btnPriComps = layoutComponents.filter(c => c.id === 'bt-btn-pri');
  const btnSecComps = layoutComponents.filter(c => c.id === 'bt-btn-sec');
  const termTitle = layoutComponents.filter(c => c.id === 'term-bt-title');
  const termStat1 = layoutComponents.filter(c => c.id === 'term-bt-stat1');
  const termStat2 = layoutComponents.filter(c => c.id === 'term-bt-stat2');

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#070311] overflow-hidden py-20 lg:py-28">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

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

            {/* Tech Stack Chips */}
            <div className="pt-8 border-t border-purple-950/80 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="text-purple-400 font-bold uppercase">Tech Stack:</span>
              {['React / Next.js', 'Node.js & Go', 'PostgreSQL', 'Docker / K8s', 'OpenAI APIs', 'Tailwind'].map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-[#13092b] border border-purple-800/40 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Live Code Console Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#0e0722] border border-indigo-500/30 p-6 shadow-2xl shadow-purple-950/80 font-mono text-xs overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-900/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                {renderLayoutComponents(termTitle, sectionId)}
              </div>

              {/* Code snippet lines */}
              <div className="space-y-2 text-slate-300 pb-5">
                <div className="text-purple-400">// Career Transformation Blueprint</div>
                <div><span className="text-indigo-400">const</span> student = <span className="text-amber-300">new</span> Student(&apos;You&apos;);</div>
                <div><span className="text-indigo-400">await</span> student.enrollInBatch(24);</div>
                <div className="text-emerald-400">✔ 16 Weeks Live Mentoring & 4 Production Capstones</div>
                <div className="text-cyan-300">✔ Portfolio Reviewed by Tech Leads</div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-purple-900/40 font-sans">
                <div className="p-3.5 rounded-2xl bg-[#090317] border border-purple-900/40">
                  <div className="text-[11px] text-slate-400 uppercase">Hiring Placement Rate</div>
                  <div className="mt-1">{renderLayoutComponents(termStat1, sectionId)}</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Diterima &lt; 90 Hari</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#090317] border border-purple-900/40">
                  <div className="text-[11px] text-slate-400 uppercase">Rata-Rata Starting Salary</div>
                  <div className="mt-1">{renderLayoutComponents(termStat2, sectionId)}</div>
                  <div className="text-[10px] text-blue-400 mt-0.5">Junior - Mid Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
