import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceHeroTech
 * Split hero for Tech Solutions — futuristic dark terminal console with live architecture stats.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceHeroTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tech-badge', type: 'badge', props: { text: 'ENTERPRISE TECH & CLOUD ARCHITECTURE', variant: 'outline', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' } },
    { id: 'tech-title', type: 'heading', props: { content: 'Membangun Infrastruktur Digital Tangguh Skala Enterprise', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
    { id: 'tech-desc', type: 'paragraph', props: { content: 'Kami merancang, mengamankan, dan menskalakan ekosistem cloud, microservices, dan software kustom untuk perusahaan modern dengan standar keandalan 99.99%.', fontSize: '17px', color: '#94a3b8' } },
    { id: 'tech-btn-pri', type: 'button', props: { label: 'Konsultasi Solusi IT ⚡', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #06b6d4, #2563eb)', color: '#ffffff', fontWeight: '700' } },
    { id: 'tech-btn-sec', type: 'button', props: { label: 'Dokumentasi & Arsitektur', href: '#solutions', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' } },
    // Terminal items
    { id: 'term-title', type: 'heading', props: { content: 'Cluster Topology v4.8 (Production)', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#22d3ee' } },
    { id: 'term-metric1', type: 'heading', props: { content: '99.99%', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff' } },
    { id: 'term-metric2', type: 'heading', props: { content: '< 15ms', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'tech-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'tech-title');
  const descComps = layoutComponents.filter(c => c.id === 'tech-desc');
  const btnPriComps = layoutComponents.filter(c => c.id === 'tech-btn-pri');
  const btnSecComps = layoutComponents.filter(c => c.id === 'tech-btn-sec');
  const termTitleComps = layoutComponents.filter(c => c.id === 'term-title');
  const termMetric1Comps = layoutComponents.filter(c => c.id === 'term-metric1');
  const termMetric2Comps = layoutComponents.filter(c => c.id === 'term-metric2');

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#060a14] overflow-hidden py-20 lg:py-28">
      {/* Background Matrix/Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hero Content */}
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
            <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="text-slate-500 font-bold uppercase tracking-wider">Tech Core:</span>
              {['Kubernetes', 'AWS & GCP', 'Microservices', 'PostgreSQL', 'Golang / Node', 'Terraform'].map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/60 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Architecture Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0b1329] border border-cyan-500/30 p-6 shadow-2xl shadow-cyan-950/60 overflow-hidden font-mono text-xs">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                {renderLayoutComponents(termTitleComps, sectionId)}
              </div>

              {/* Console Log lines */}
              <div className="space-y-2 text-slate-400 pb-5">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>✔</span>
                  <span>[auth-cluster] SSL Mutual TLS Handshake: VERIFIED</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300">
                  <span>✔</span>
                  <span>[k8s-ingress] Multi-region failover ready (Jakarta / SG)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>ℹ</span>
                  <span>[database] Replication lag: 0.2ms (Zero data loss)</span>
                </div>
              </div>

              {/* Live Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-[#070c1a] border border-slate-800">
                  <div className="text-[11px] text-slate-500 uppercase">SLA Uptime</div>
                  <div className="mt-1">{renderLayoutComponents(termMetric1Comps, sectionId)}</div>
                  <div className="text-[10px] text-emerald-400 mt-1">High Availability</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#070c1a] border border-slate-800">
                  <div className="text-[11px] text-slate-500 uppercase">Avg Latency</div>
                  <div className="mt-1">{renderLayoutComponents(termMetric2Comps, sectionId)}</div>
                  <div className="text-[10px] text-cyan-400 mt-1">Edge CDN Tuned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
