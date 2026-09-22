import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NEBULA — Dark Glass Radar Dashboard
 * Jangkauan futuristik bertema luar angkasa dengan glassmorphism, visual radar melingkar, dan monitoring telemetri kota satelit.
 * Cocok untuk platform IoT logistik, enterprise tech fleet, dan smart distribution networks.
 */
export default function Coverage06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov6-badge', type: 'badge', props: { content: '✦ SATELLITE TELEMETRY MAPPING', background: '#0e1726', color: '#38bdf8' } },
    { id: 'cov6-heading', type: 'heading', props: { content: 'Jaringan Logistik Cerdas Terhubung Satelit', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#f8fafc', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov6-text', type: 'text', props: { content: 'Monitoring titik singgah armada dan gudang transit dengan latensi sub-detik di seluruh koordinat Indonesia.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const nodes = [
    { code: 'HUB-JKT', city: 'Jakarta Mega Hub', ping: '12ms', status: 'Optimal', load: '94%' },
    { code: 'HUB-SBY', city: 'Surabaya East Gateway', ping: '18ms', status: 'Optimal', load: '88%' },
    { code: 'HUB-MKS', city: 'Makassar Eastern Port', ping: '24ms', status: 'Optimal', load: '82%' },
    { code: 'HUB-BPN', city: 'Balikpapan Nusantara Hub', ping: '21ms', status: 'Optimal', load: '91%' },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#030712] overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.12),transparent)]" />
      
      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((n, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/50 shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-cyan-400">{n.code}</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {n.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-3">{n.city}</h3>
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs text-slate-400">
                <span>Latency: {n.ping}</span>
                <span className="text-cyan-300 font-bold">Load: {n.load}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
