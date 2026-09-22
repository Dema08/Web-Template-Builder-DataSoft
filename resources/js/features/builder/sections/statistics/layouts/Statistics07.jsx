import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TERMINAL — Developer Command — Statistics
 * Ala terminal: window dots + prompt + metrik monospace hijau.
 * Untuk API / cloud / dev-tools SaaS.
 */
export default function Statistics07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat7-badge', type: 'badge', props: { content: '$ datasoft metrics --live', background: '#052e16', color: '#4ade80' } },
    { id: 'stat7-heading', type: 'heading', props: { content: 'Observability you can trust', level: 'h2', fontSize: '46px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat7-text', type: 'text', props: { content: 'Edge deploys, instant rollbacks, dan metrik real-time. Developer ship 10x lebih cepat di Datasoft Cloud.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat7-cta', type: 'button', props: { label: '▸ Read Docs', href: '#docs', variant: 'primary', size: 'medium', radius: 'md', background: '#22c55e', color: '#052e16' } },
    {
      id: 'stat7-card-1',
      type: 'card',
      props: { variant: 'stat-dark', background: '#0f172a', borderRadius: '12px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'border', padding: '24px 20px' },
      childrenComponents: [
        { id: 'stat7-c1-value', type: 'heading', props: { content: '99,99%', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#22c55e', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat7-c1-label', type: 'text', props: { content: 'uptime // SLA', fontSize: '13px', color: '#94a3b8', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat7-card-2',
      type: 'card',
      props: { variant: 'stat-dark', background: '#0f172a', borderRadius: '12px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'border', padding: '24px 20px' },
      childrenComponents: [
        { id: 'stat7-c2-value', type: 'heading', props: { content: '8s', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#22c55e', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat7-c2-label', type: 'text', props: { content: 'deploy // build time', fontSize: '13px', color: '#94a3b8', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat7-card-3',
      type: 'card',
      props: { variant: 'stat-dark', background: '#0f172a', borderRadius: '12px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'border', padding: '24px 20px' },
      childrenComponents: [
        { id: 'stat7-c3-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#22c55e', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat7-c3-label', type: 'text', props: { content: 'regions // edge nodes', fontSize: '13px', color: '#94a3b8', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat7-card-4',
      type: 'card',
      props: { variant: 'stat-dark', background: '#0f172a', borderRadius: '12px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'border', padding: '24px 20px' },
      childrenComponents: [
        { id: 'stat7-c4-value', type: 'heading', props: { content: '10x', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#22c55e', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat7-c4-label', type: 'text', props: { content: 'faster // ship velocity', fontSize: '13px', color: '#94a3b8', align: 'left', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-[#0d1117]" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div>
            <p className="text-green-400 text-sm mb-3 select-none pointer-events-none">$ datasoft stats --production</p>
            {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
            <div className="mt-3">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
            {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
            <div className="flex flex-wrap gap-3 mt-1">
              {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
            </div>
            <div className="flex items-center gap-4 mt-6 text-xs text-slate-500 select-none pointer-events-none">
              <span>✓ 99.99% uptime</span>
              <span>✓ SOC2</span>
              <span>✓ 40+ regions</span>
            </div>
          </div>
          <div className="rounded-2xl border border-green-500/20 bg-black/60 overflow-hidden shadow-[0_0_60px_-20px_rgba(34,197,94,0.5)]">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse" />
              <span className="ml-2 text-xs text-slate-500 select-none">metrics — zsh</span>
            </div>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderLayoutComponents(cards, sectionId)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
