import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceServicesTech
 * 6 Specialized Enterprise IT & Cloud service pillars for Tech Solutions.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceServicesTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv-tc-badge', type: 'badge', props: { text: 'CAPABILITIES & STACK', variant: 'outline', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' } },
    { id: 'srv-tc-title', type: 'heading', props: { content: 'Layanan Teknologi Berstandar Global untuk Pertumbuhan Skala Besar', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'srv-tc-desc', type: 'paragraph', props: { content: 'Membantu perusahaan bertransformasi melalui arsitektur cloud cerdas, keamanan siber ketat, dan software engineering mutakhir.', fontSize: '16px', color: '#94a3b8', textAlign: 'center' } },
    // Card 1
    { id: 'srv1-tc-title', type: 'heading', props: { content: 'Cloud Infrastructure & DevOps', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'srv1-tc-desc', type: 'paragraph', props: { content: 'Migrasi cloud tanpa downtime, otomatisasi CI/CD, manajemen Kubernetes cluster, dan optimalisasi biaya multi-cloud.', fontSize: '14px', color: '#94a3b8' } },
    // Card 2
    { id: 'srv2-tc-title', type: 'heading', props: { content: 'Custom Enterprise Software', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'srv2-tc-desc', type: 'paragraph', props: { content: 'Pengembangan web & core systems berskala jutaan pengguna dengan arsitektur microservices dan API-first design.', fontSize: '14px', color: '#94a3b8' } },
    // Card 3
    { id: 'srv3-tc-title', type: 'heading', props: { content: 'Cybersecurity & SOC-2 Compliance', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'srv3-tc-desc', type: 'paragraph', props: { content: 'Audit keamanan berkala, penetration testing, implementasi zero-trust network, serta sertifikasi ISO 27001.', fontSize: '14px', color: '#94a3b8' } },
    // Card 4
    { id: 'srv4-tc-title', type: 'heading', props: { content: 'Data Engineering & Real-Time Analytics', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'srv4-tc-desc', type: 'paragraph', props: { content: 'Pembangunan data pipeline berkecepatan tinggi, data warehouse terdistribusi, dan visualisasi dashboard eksekutif.', fontSize: '14px', color: '#94a3b8' } },
    // Card 5
    { id: 'srv5-tc-title', type: 'heading', props: { content: 'AI & Machine Learning Integration', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'srv5-tc-desc', type: 'paragraph', props: { content: 'Implementasi LLM khusus korporasi, otomatisasi cerdas NLP, dan model prediktif untuk optimasi operasional bisnis.', fontSize: '14px', color: '#94a3b8' } },
    // Card 6
    { id: 'srv6-tc-title', type: 'heading', props: { content: '24/7 SRE & Managed IT Support', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'srv6-tc-desc', type: 'paragraph', props: { content: 'Monitoring proaktif round-the-clock, incident response dengan SLA < 15 menit, dan disaster recovery drills.', fontSize: '14px', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'srv-tc-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'srv-tc-title');
  const descComps = layoutComponents.filter(c => c.id === 'srv-tc-desc');

  const services = [
    {
      icon: '☁️',
      code: 'INFRA-01',
      title: layoutComponents.filter(c => c.id === 'srv1-tc-title'),
      desc: layoutComponents.filter(c => c.id === 'srv1-tc-desc'),
      glow: 'hover:border-cyan-500 hover:shadow-cyan-500/10'
    },
    {
      icon: '⚡',
      code: 'DEV-02',
      title: layoutComponents.filter(c => c.id === 'srv2-tc-title'),
      desc: layoutComponents.filter(c => c.id === 'srv2-tc-desc'),
      glow: 'hover:border-blue-500 hover:shadow-blue-500/10'
    },
    {
      icon: '🛡️',
      code: 'SEC-03',
      title: layoutComponents.filter(c => c.id === 'srv3-tc-title'),
      desc: layoutComponents.filter(c => c.id === 'srv3-tc-desc'),
      glow: 'hover:border-emerald-500 hover:shadow-emerald-500/10'
    },
    {
      icon: '📊',
      code: 'DATA-04',
      title: layoutComponents.filter(c => c.id === 'srv4-tc-title'),
      desc: layoutComponents.filter(c => c.id === 'srv4-tc-desc'),
      glow: 'hover:border-indigo-500 hover:shadow-indigo-500/10'
    },
    {
      icon: '🤖',
      code: 'AI-05',
      title: layoutComponents.filter(c => c.id === 'srv5-tc-title'),
      desc: layoutComponents.filter(c => c.id === 'srv5-tc-desc'),
      glow: 'hover:border-purple-500 hover:shadow-purple-500/10'
    },
    {
      icon: '⏱️',
      code: 'SRE-06',
      title: layoutComponents.filter(c => c.id === 'srv6-tc-title'),
      desc: layoutComponents.filter(c => c.id === 'srv6-tc-desc'),
      glow: 'hover:border-amber-500 hover:shadow-amber-500/10'
    }
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#080d1a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 6 Cards 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-2xl bg-[#0d1527]/80 border border-slate-800 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl ${item.glow} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl shadow-inner">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-slate-500 tracking-wider">
                    {item.code}
                  </span>
                </div>
                <div className="space-y-3">
                  {renderLayoutComponents(item.title, sectionId)}
                  {renderLayoutComponents(item.desc, sectionId)}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-mono group-hover:translate-x-1 transition-transform">
                <span>Pelajari Arsitektur</span>
                <span>➔</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
