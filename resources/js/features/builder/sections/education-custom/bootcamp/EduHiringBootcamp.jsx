import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduHiringBootcamp
 * Hiring partners network and alumni job success stories for Bootcamp.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduHiringBootcamp({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'hir-badge', type: 'badge', props: { text: 'JARINGAN 350+ HIRING PARTNERS', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' } },
    { id: 'hir-title', type: 'heading', props: { content: 'Alumni Kami Bekerja di Perusahaan Teknologi Terdepan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'hir-desc', type: 'paragraph', props: { content: 'Program Career Support mendampingi Anda dari simulasi technical interview, optimasi CV/LinkedIn, hingga negosiasi penawaran gaji.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Alumni 1
    { id: 'al1-quote', type: 'paragraph', props: { content: '"Dari latar belakang lulusan hukum tanpa basic coding sama sekali, setelah 16 minggu di CodeSphere saya diterima sebagai Frontend Engineer di unicorn fintech."', fontSize: '14px', color: '#cbd5e1' } },
    { id: 'al1-name', type: 'heading', props: { content: 'Bagas Aditya', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
    { id: 'al1-role', type: 'paragraph', props: { content: 'Frontend Engineer @ DANA Indonesia (Alumni Batch 18)', fontSize: '12px', color: '#818cf8' } },
    // Alumni 2
    { id: 'al2-quote', type: 'paragraph', props: { content: '"1-on-1 code review dari Tech Lead sangat mengubah cara berpikir arsitektur backend saya. Portofolio capstone-nya membuat recruiter terkesan."', fontSize: '14px', color: '#cbd5e1' } },
    { id: 'al2-name', type: 'heading', props: { content: 'Fauziah Zahra', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
    { id: 'al2-role', type: 'paragraph', props: { content: 'Backend Developer @ Traveloka (Alumni Batch 19)', fontSize: '12px', color: '#818cf8' } },
    // Alumni 3
    { id: 'al3-quote', type: 'paragraph', props: { content: '"Career track AI Engineer di sini sangat up-to-date dengan industri. Saya langsung dipercaya membangun sistem RAG AI di perusahaan logistik."', fontSize: '14px', color: '#cbd5e1' } },
    { id: 'al3-name', type: 'heading', props: { content: 'Rian Firmansyah', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
    { id: 'al3-role', type: 'paragraph', props: { content: 'AI Solutions Engineer @ J&T Express (Alumni Batch 20)', fontSize: '12px', color: '#818cf8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'hir-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'hir-title');
  const descComps = layoutComponents.filter(c => c.id === 'hir-desc');

  const alumni = [
    {
      quote: layoutComponents.filter(c => c.id === 'al1-quote'),
      name: layoutComponents.filter(c => c.id === 'al1-name'),
      role: layoutComponents.filter(c => c.id === 'al1-role'),
    },
    {
      quote: layoutComponents.filter(c => c.id === 'al2-quote'),
      name: layoutComponents.filter(c => c.id === 'al2-name'),
      role: layoutComponents.filter(c => c.id === 'al2-role'),
    },
    {
      quote: layoutComponents.filter(c => c.id === 'al3-quote'),
      name: layoutComponents.filter(c => c.id === 'al3-name'),
      role: layoutComponents.filter(c => c.id === 'al3-role'),
    }
  ];

  return (
    <section id="hiring" className="relative py-24 sm:py-32 bg-[#090416] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* Hiring Partner Logo Strip */}
        <div className="p-6 rounded-2xl bg-[#120726] border border-purple-900/40 flex flex-wrap items-center justify-around gap-6 mb-16 text-slate-400 font-bold font-mono text-sm">
          <span>GO-TO</span>
          <span>TRAVELOKA</span>
          <span>DANA</span>
          <span>SHOPEE</span>
          <span>BLIBLI</span>
          <span>TIKTOK TECH</span>
        </div>

        {/* 3 Alumni Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumni.map((a, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#130829] border border-purple-900/40 shadow-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="text-indigo-400 text-lg">★★★★★</div>
                {renderLayoutComponents(a.quote, sectionId)}
              </div>
              <div className="pt-6 border-t border-purple-900/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  ⚡
                </div>
                <div>
                  {renderLayoutComponents(a.name, sectionId)}
                  {renderLayoutComponents(a.role, sectionId)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
