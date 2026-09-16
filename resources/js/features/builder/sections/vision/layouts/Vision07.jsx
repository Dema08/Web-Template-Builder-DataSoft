import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 07 — TERMINAL Developer Command
 * Mirrors Hero07 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v7-heading', type: 'heading', props: { content: 'Execute vision to production in one command', level: 'h2', fontSize: '48px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'v7-text', type: 'text', props: { content: 'Automated deployment pipelines, instant strategic iterations, and enterprise observability built-in.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'v7-card-1',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(0,0,0,0.4)', borderRadius: '16px', padding: '20px', borderWidth: '1px', borderColor: 'rgba(34,197,94,0.2)' },
      childrenComponents: [
        { id: 'v7-c1-title', type: 'heading', props: { content: 'Modular Architecture', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#22c55e', margin: '0 0 4px 0' } },
        { id: 'v7-c1-desc', type: 'text', props: { content: 'Clean decoupled services ready for rapid scaling.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'v7-card-2',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(0,0,0,0.4)', borderRadius: '16px', padding: '20px', borderWidth: '1px', borderColor: 'rgba(34,197,94,0.2)' },
      childrenComponents: [
        { id: 'v7-c2-title', type: 'heading', props: { content: 'Zero Downtime', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#22c55e', margin: '0 0 4px 0' } },
        { id: 'v7-c2-desc', type: 'text', props: { content: 'Continuous updates without disrupting operations.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');

  return (
    <section className="py-20 px-6 bg-[#0d1117]" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-green-400 text-sm mb-3 select-none">$ datasoft vision --compile</p>
          {renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {renderLayoutComponents(copy.filter(c => c.type === 'card'), sectionId)}
          </div>
          <div className="flex items-center gap-4 mt-6 text-xs text-slate-500">
            <span className="select-none">✓ 99.99% strategic uptime</span>
            <span className="select-none">✓ SOC2 compliant</span>
          </div>
        </div>
        <div className="rounded-2xl border border-green-500/20 bg-black/60 overflow-hidden shadow-[0_0_60px_-20px_rgba(34,197,94,0.5)]">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse" />
            <span className="ml-2 text-xs text-slate-500 select-none">vision-terminal — zsh</span>
          </div>
          <div className="p-5 text-sm leading-7">
            <p className="text-slate-500 select-none"># initialize core vision</p>
            <p><span className="text-green-400">$</span> <span className="text-slate-200">datasoft vision --execute</span></p>
            <p className="text-slate-500">→ Analyzing strategy… <span className="text-green-400">✓ done in 3s</span></p>
            <p className="text-slate-500">→ Deploying global roadmap… <span className="text-green-400">✓ active</span></p>
            <p><span className="text-green-400">✓</span> <span className="text-cyan-300">https://vision.datasoft.id</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
