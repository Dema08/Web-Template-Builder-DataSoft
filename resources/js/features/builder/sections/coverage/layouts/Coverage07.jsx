import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TERMINAL — Developer Geo Node Monitor
 * Tampilan konsol developer monospace dengan output CLI, status server logistik, dan metrik node pengiriman real-time.
 * Cocok untuk platform API logistik, SaaS integrasi kurir, dan layanan tech-first.
 */
export default function Coverage07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov7-badge', type: 'badge', props: { content: 'SYS.GEO_DISTRIBUTION_v4', background: '#022c22', color: '#4ade80' } },
    { id: 'cov7-heading', type: 'heading', props: { content: 'Logistik Terbuka Berbasis Jaringan API', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#f0fdf4', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cov7-text', type: 'text', props: { content: 'Akses langsung ratusan titik distribusi regional melalui RESTful endpoint dengan SLA ketersediaan 99.99%.', fontSize: '15px', color: '#86efac', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  return (
    <section className="py-24 px-6 bg-[#021f17] font-mono text-emerald-400" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3 font-sans">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full font-mono">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full font-sans">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-[#01140e] border border-emerald-500/30 overflow-hidden shadow-2xl">
          <div className="bg-[#032a1e] px-4 py-3 border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-emerald-300 ml-2 font-bold">terminal@datasoft-coverage:~$</span>
            </div>
            <span className="text-xs text-emerald-400 font-semibold">ALL NODES ONLINE</span>
          </div>

          <div className="p-6 space-y-4 text-xs md:text-sm">
            <p className="text-emerald-500">$ curl https://api.logistics.datasoft/v1/coverage/clusters</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#02241a] border border-emerald-500/20">
                <span className="text-emerald-300 font-bold block mb-1">[CLUSTER-JAVA-BALI]</span>
                <p className="text-stone-400 text-xs">Nodes: 142 Active Hubs</p>
                <p className="text-emerald-400 text-xs">Latency: 14ms (Direct)</p>
                <p className="text-stone-400 text-xs">Capacity: 45,000 req/day</p>
              </div>
              <div className="p-4 rounded-lg bg-[#02241a] border border-emerald-500/20">
                <span className="text-emerald-300 font-bold block mb-1">[CLUSTER-SUMATERA]</span>
                <p className="text-stone-400 text-xs">Nodes: 86 Active Hubs</p>
                <p className="text-emerald-400 text-xs">Latency: 28ms (Direct)</p>
                <p className="text-stone-400 text-xs">Capacity: 28,000 req/day</p>
              </div>
              <div className="p-4 rounded-lg bg-[#02241a] border border-emerald-500/20">
                <span className="text-emerald-300 font-bold block mb-1">[CLUSTER-EASTERN]</span>
                <p className="text-stone-400 text-xs">Nodes: 94 Active Hubs</p>
                <p className="text-emerald-400 text-xs">Latency: 35ms (Direct)</p>
                <p className="text-stone-400 text-xs">Capacity: 22,000 req/day</p>
              </div>
            </div>
            <p className="text-emerald-300 pt-2 font-semibold">✓ 322/322 Distribution Points Responding (Status 200 OK)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
