import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TERMINAL — Developer Fleet Monitor
 * Tampilan ala terminal CLI: window dots + live tracking data + specs.
 * Untuk sistem manajemen armada berbasis teknologi.
 */
export default function Fleet07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt7-heading', type: 'heading', props: { content: 'Fleet Management System', level: 'h2', fontSize: '44px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'flt7-text', type: 'text', props: { content: 'Pantau posisi, kecepatan, dan status setiap armada secara real-time dari satu dashboard terpusat.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 24px 0' } },
    { id: 'flt7-btn1', type: 'button', props: { label: '▸ Akses Dashboard', href: '#dashboard', variant: 'primary', size: 'large', radius: 'md', background: '#22c55e', color: '#052e16' } },
    { id: 'flt7-btn2', type: 'button', props: { label: 'Lihat Demo', href: '#demo', variant: 'ghost', size: 'large', background: 'transparent', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');

  return (
    <section className="py-20 px-6 bg-[#0d1117]" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-green-400 text-sm mb-3 select-none">$ fleet-monitor --live --all-units</p>
          {renderLayoutComponents(heading, sectionId)}
          {renderLayoutComponents(text, sectionId)}
          <div className="flex flex-wrap gap-3 mt-2">
            {renderLayoutComponents(buttons, sectionId)}
          </div>
          <div className="flex items-center gap-4 mt-6 text-xs text-slate-500">
            <span className="select-none">✓ GPS Realtime</span>
            <span className="select-none">✓ Cold Chain Sensor</span>
            <span className="select-none">✓ 24/7 Monitoring</span>
          </div>
        </div>
        <div className="rounded-2xl border border-green-500/20 bg-black/60 overflow-hidden shadow-[0_0_60px_-20px_rgba(34,197,94,0.4)]">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse" />
            <span className="ml-2 text-xs text-slate-500 select-none">fleet-monitor — live</span>
          </div>
          <div className="p-5 text-sm leading-7">
            <p className="text-slate-500 select-none"># Unit aktif saat ini</p>
            <p><span className="text-green-400">✓</span> <span className="text-slate-200">TRK-001</span> <span className="text-cyan-300">Surabaya → Jakarta</span> <span className="text-green-400">85 km/h</span></p>
            <p><span className="text-green-400">✓</span> <span className="text-slate-200">TRK-045</span> <span className="text-cyan-300">Bandung → Semarang</span> <span className="text-green-400">72 km/h</span></p>
            <p><span className="text-yellow-400">◉</span> <span className="text-slate-200">COLD-012</span> <span className="text-cyan-300">Jakarta → Bali</span> <span className="text-yellow-400">-18°C</span></p>
            <p><span className="text-green-400">✓</span> <span className="text-slate-200">SHIP-003</span> <span className="text-cyan-300">Tj. Priok → Makassar</span> <span className="text-green-400">ETA 14h</span></p>
            <p className="text-slate-500 mt-2 select-none">→ 432 unit aktif · 0 insiden · <span className="text-green-400">sistem normal</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
