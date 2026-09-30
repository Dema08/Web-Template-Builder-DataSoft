import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceStatsTech
 * Performance and Infrastructure Metrics grid for Tech Solutions.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceStatsTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat-tc-badge', type: 'badge', props: { text: 'RELIABILITY BENCHMARKS', variant: 'outline', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' } },
    { id: 'stat-tc-title', type: 'heading', props: { content: 'Performa dan Skalabilitas yang Terbukti di Lapangan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'stat-tc-desc', type: 'paragraph', props: { content: 'Metrik nyata dari infrastruktur yang kami kelola untuk korporasi lintas industri.', fontSize: '16px', color: '#94a3b8', textAlign: 'center' } },
    // Stat 1
    { id: 'st1-val', type: 'heading', props: { content: '99.99%', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#22d3ee' } },
    { id: 'st1-lbl', type: 'paragraph', props: { content: 'Uptime SLA Terjamin', fontSize: '15px', color: '#ffffff', fontWeight: '600' } },
    { id: 'st1-sub', type: 'paragraph', props: { content: 'Multi-region failover aktif', fontSize: '13px', color: '#64748b' } },
    // Stat 2
    { id: 'st2-val', type: 'heading', props: { content: '500M+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#60a5fa' } },
    { id: 'st2-lbl', type: 'paragraph', props: { content: 'API Requests / Hari', fontSize: '15px', color: '#ffffff', fontWeight: '600' } },
    { id: 'st2-sub', type: 'paragraph', props: { content: 'Throughput konsisten tanpa lonjakan latensi', fontSize: '13px', color: '#64748b' } },
    // Stat 3
    { id: 'st3-val', type: 'heading', props: { content: '< 15ms', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#34d399' } },
    { id: 'st3-lbl', type: 'paragraph', props: { content: 'Rata-Rata Respon Server', fontSize: '15px', color: '#ffffff', fontWeight: '600' } },
    { id: 'st3-sub', type: 'paragraph', props: { content: 'Edge cache teroptimasi', fontSize: '13px', color: '#64748b' } },
    // Stat 4
    { id: 'st4-val', type: 'heading', props: { content: '150+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#a78bfa' } },
    { id: 'st4-lbl', type: 'paragraph', props: { content: 'Enterprise Deployments', level: 'h4', fontSize: '15px', color: '#ffffff', fontWeight: '600' } },
    { id: 'st4-sub', type: 'paragraph', props: { content: 'Fintech, Retail, Telco, Healthcare', fontSize: '13px', color: '#64748b' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'stat-tc-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'stat-tc-title');
  const descComps = layoutComponents.filter(c => c.id === 'stat-tc-desc');

  const stats = [
    {
      val: layoutComponents.filter(c => c.id === 'st1-val'),
      lbl: layoutComponents.filter(c => c.id === 'st1-lbl'),
      sub: layoutComponents.filter(c => c.id === 'st1-sub'),
      border: 'border-cyan-500/30'
    },
    {
      val: layoutComponents.filter(c => c.id === 'st2-val'),
      lbl: layoutComponents.filter(c => c.id === 'st2-lbl'),
      sub: layoutComponents.filter(c => c.id === 'st2-sub'),
      border: 'border-blue-500/30'
    },
    {
      val: layoutComponents.filter(c => c.id === 'st3-val'),
      lbl: layoutComponents.filter(c => c.id === 'st3-lbl'),
      sub: layoutComponents.filter(c => c.id === 'st3-sub'),
      border: 'border-emerald-500/30'
    },
    {
      val: layoutComponents.filter(c => c.id === 'st4-val'),
      lbl: layoutComponents.filter(c => c.id === 'st4-lbl'),
      sub: layoutComponents.filter(c => c.id === 'st4-sub'),
      border: 'border-purple-500/30'
    }
  ];

  return (
    <section id="stats" className="relative py-20 sm:py-28 bg-[#070b16] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl bg-[#0b1224] border ${st.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center space-y-2 font-mono`}
            >
              {renderLayoutComponents(st.val, sectionId)}
              {renderLayoutComponents(st.lbl, sectionId)}
              {renderLayoutComponents(st.sub, sectionId)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
