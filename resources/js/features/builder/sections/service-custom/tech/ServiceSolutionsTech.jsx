import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceSolutionsTech
 * Solution Architecture Deep-Dive layout with visual blueprint comparison for Tech Solutions.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceSolutionsTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'sol-tc-badge', type: 'badge', props: { text: 'ENTERPRISE CAPABILITY', variant: 'outline', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' } },
    { id: 'sol-tc-title', type: 'heading', props: { content: 'Arsitektur Terdistribusi Berkecepatan Tinggi & Skalabel', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' } },
    { id: 'sol-tc-desc', type: 'paragraph', props: { content: 'Kami membangun fondasi teknologi yang mampu menangani jutaan transaksi simultan tanpa penurunan performa dengan toleransi kesalahan tingkat tinggi.', fontSize: '16px', color: '#94a3b8' } },
    // Feat 1
    { id: 'sol1-title', type: 'heading', props: { content: 'Zero-Downtime Multi-Region Failover', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'sol1-desc', type: 'paragraph', props: { content: 'Infrastruktur aktif-aktif lintas data center geografis untuk ketahanan bisnis mutlak.', fontSize: '14px', color: '#94a3b8' } },
    // Feat 2
    { id: 'sol2-title', type: 'heading', props: { content: 'Automated CI/CD & GitOps Workflow', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'sol2-desc', type: 'paragraph', props: { content: 'Deployment otomatis dengan canary release, automated rollback, dan keamanan kontainer terintegrasi.', fontSize: '14px', color: '#94a3b8' } },
    // Feat 3
    { id: 'sol3-title', type: 'heading', props: { content: 'End-to-End Zero Trust Security', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'sol3-desc', type: 'paragraph', props: { content: 'Enkripsi data at-rest & in-transit (AES-256), SSO IAM kustom, dan audit logging otomatis.', fontSize: '14px', color: '#94a3b8' } },
    // CTA Button
    { id: 'sol-cta-btn', type: 'button', props: { label: 'Unduh Whitepaper Arsitektur ➔', href: '#contact', variant: 'outline', size: 'medium', radius: 'lg', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'sol-tc-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'sol-tc-title');
  const descComps = layoutComponents.filter(c => c.id === 'sol-tc-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'sol-cta-btn');

  const features = [
    {
      num: '01',
      title: layoutComponents.filter(c => c.id === 'sol1-title'),
      desc: layoutComponents.filter(c => c.id === 'sol1-desc')
    },
    {
      num: '02',
      title: layoutComponents.filter(c => c.id === 'sol2-title'),
      desc: layoutComponents.filter(c => c.id === 'sol2-desc')
    },
    {
      num: '03',
      title: layoutComponents.filter(c => c.id === 'sol3-title'),
      desc: layoutComponents.filter(c => c.id === 'sol3-desc')
    }
  ];

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-[#050811] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Feature Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>

            {/* List */}
            <div className="space-y-6 pt-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs shrink-0 mt-0.5">
                    {item.num}
                  </div>
                  <div className="space-y-1">
                    {renderLayoutComponents(item.title, sectionId)}
                    {renderLayoutComponents(item.desc, sectionId)}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">{renderLayoutComponents(ctaComps, sectionId)}</div>
          </div>

          {/* Right Architecture Topology Diagram Graphic */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 bg-[#091124] border border-cyan-500/20 shadow-2xl shadow-cyan-950/50 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  ✦ High-Throughput Cluster Architecture
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  HEALTHY
                </span>
              </div>

              {/* Topology Layers */}
              <div className="space-y-4 font-mono text-xs">
                {/* Layer 1: Edge */}
                <div className="p-4 rounded-xl bg-[#0e1b38] border border-cyan-500/30">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider">Layer 1: Global Edge CDN & WAF</div>
                  <div className="text-white font-bold mt-1 flex items-center justify-between">
                    <span>Cloudflare Enterprise / Anycast DNS</span>
                    <span className="text-cyan-400 text-[11px]">DDoS Protection (100Tbps+)</span>
                  </div>
                </div>

                <div className="text-center text-cyan-500/60 text-xs">↓ gRPC / HTTPS ↓</div>

                {/* Layer 2: Ingress & Microservices */}
                <div className="p-4 rounded-xl bg-[#0e1b38] border border-blue-500/30">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider">Layer 2: Kubernetes Compute Cluster</div>
                  <div className="text-white font-bold mt-1 flex items-center justify-between">
                    <span>Auto-scaling Pods (HPA) • Istio Service Mesh</span>
                    <span className="text-blue-400 text-[11px]">Dynamic Node Scale</span>
                  </div>
                </div>

                <div className="text-center text-cyan-500/60 text-xs">↓ Async Queues & Read-Replicas ↓</div>

                {/* Layer 3: Distributed Storage */}
                <div className="p-4 rounded-xl bg-[#0e1b38] border border-emerald-500/30">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider">Layer 3: Distributed Persistence</div>
                  <div className="text-white font-bold mt-1 flex items-center justify-between">
                    <span>PostgreSQL Cluster + Redis Cache + S3 Vault</span>
                    <span className="text-emerald-400 text-[11px]">Encrypted AES-256</span>
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
