import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduTracksBootcamp
 * 4 High-demand Career Tracks for tech bootcamp students.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduTracksBootcamp({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'trk-badge', type: 'badge', props: { text: 'PILIHAN JALUR KARIR 2026', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' } },
    { id: 'trk-title', type: 'heading', props: { content: 'Jalur Karir dengan Permintaan Talenta Tertinggi di Industri', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'trk-desc', type: 'paragraph', props: { content: 'Dirancang dari nol hingga siap kerja (Zero to Hero) bersama mentor praktisi industri top tech companies.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Track 1
    { id: 't1-title', type: 'heading', props: { content: 'Fullstack Web & Cloud Architecture', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 't1-desc', type: 'paragraph', props: { content: 'Menguasai ekosistem React, Next.js, Node.js/Go, database SQL/NoSQL, microservices, dan deployment AWS.', fontSize: '14px', color: '#cbd5e1' } },
    { id: 't1-tag', type: 'badge', props: { text: '16 Minggu • Full-Time / Part-Time', variant: 'solid', background: '#4f46e5', color: '#ffffff' } },
    // Track 2
    { id: 't2-title', type: 'heading', props: { content: 'Applied AI & LLM Systems Engineer', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 't2-desc', type: 'paragraph', props: { content: 'Membangun aplikasi cerdas dengan Large Language Models (LLM), LangChain, RAG architecture, dan vector database.', fontSize: '14px', color: '#cbd5e1' } },
    { id: 't2-tag', type: 'badge', props: { text: '16 Minggu • Paling Banyak Dicari', variant: 'solid', background: '#a855f7', color: '#ffffff' } },
    // Track 3
    { id: 't3-title', type: 'heading', props: { content: 'Data Science & Machine Learning Specialist', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 't3-desc', type: 'paragraph', props: { content: 'Eksplorasi big data, visualisasi analitik eksekutif, predictive modeling, algoritma klasifikasi, dan pipeline MLOps.', fontSize: '14px', color: '#cbd5e1' } },
    { id: 't3-tag', type: 'badge', props: { text: '16 Minggu • Industri Fintech & E-commerce', variant: 'solid', background: '#06b6d4', color: '#042f2e' } },
    // Track 4
    { id: 't4-title', type: 'heading', props: { content: 'DevOps & Cloud Infrastructure Engineering', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 't4-desc', type: 'paragraph', props: { content: 'Otomasi CI/CD pipelines, container orchestration Kubernetes, Terraform IaC, dan monitoring Prometheus.', fontSize: '14px', color: '#cbd5e1' } },
    { id: 't4-tag', type: 'badge', props: { text: '16 Minggu • High Salary Potential', variant: 'solid', background: '#ec4899', color: '#ffffff' } },
    // CTA
    { id: 'trk-cta-btn', type: 'button', props: { label: 'Konsultasi Tes Bakat Coding Gratis ➔', href: '#pricing', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'trk-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'trk-title');
  const descComps = layoutComponents.filter(c => c.id === 'trk-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'trk-cta-btn');

  const tracks = [
    {
      icon: '⚡',
      title: layoutComponents.filter(c => c.id === 't1-title'),
      desc: layoutComponents.filter(c => c.id === 't1-desc'),
      tag: layoutComponents.filter(c => c.id === 't1-tag'),
      border: 'border-indigo-500/30'
    },
    {
      icon: '🤖',
      title: layoutComponents.filter(c => c.id === 't2-title'),
      desc: layoutComponents.filter(c => c.id === 't2-desc'),
      tag: layoutComponents.filter(c => c.id === 't2-tag'),
      border: 'border-purple-500/30'
    },
    {
      icon: '📊',
      title: layoutComponents.filter(c => c.id === 't3-title'),
      desc: layoutComponents.filter(c => c.id === 't3-desc'),
      tag: layoutComponents.filter(c => c.id === 't3-tag'),
      border: 'border-cyan-500/30'
    },
    {
      icon: '🚀',
      title: layoutComponents.filter(c => c.id === 't4-title'),
      desc: layoutComponents.filter(c => c.id === 't4-desc'),
      tag: layoutComponents.filter(c => c.id === 't4-tag'),
      border: 'border-pink-500/30'
    }
  ];

  return (
    <section id="tracks" className="relative py-24 sm:py-32 bg-[#090416] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((t, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-[#120826] border ${t.border} hover:bg-[#180a33] transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-2xl">
                    {t.icon}
                  </div>
                  <div className="inline-flex">{renderLayoutComponents(t.tag, sectionId)}</div>
                </div>
                <div className="space-y-3">
                  {renderLayoutComponents(t.title, sectionId)}
                  {renderLayoutComponents(t.desc, sectionId)}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-purple-900/40 flex items-center justify-between text-xs font-bold text-indigo-400">
                <span>Pelajari Silabus Track</span>
                <span>Lihat Detail ➔</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
