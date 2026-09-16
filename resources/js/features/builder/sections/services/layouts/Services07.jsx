import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 07 — TERMINAL Developer Command
 * Mirrors Hero07 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv7-heading', type: 'heading', props: { content: 'Execute services with one command', level: 'h2', fontSize: '48px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'srv7-text', type: 'text', props: { content: 'CLI integrations, edge APIs, and automated deployments built for high-performance engineering teams.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'srv7-card-1',
      type: 'card',
      props: { variant: 'service-terminal', background: '#090d16', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#1e293b', padding: '24px' },
      childrenComponents: [
        { id: 'srv7-c1-icon', type: 'icon', props: { icon: 'FaTerminal', size: '32px', color: '#4ade80', align: 'left' } },
        { id: 'srv7-c1-title', type: 'heading', props: { content: 'CLI Integration', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#f8fafc', margin: '12px 0 6px 0' } },
        { id: 'srv7-c1-desc', type: 'text', props: { content: 'Manage services directly from your terminal shell.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'srv7-card-2',
      type: 'card',
      props: { variant: 'service-terminal', background: '#090d16', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#1e293b', padding: '24px' },
      childrenComponents: [
        { id: 'srv7-c2-icon', type: 'icon', props: { icon: 'FaCode', size: '32px', color: '#4ade80', align: 'left' } },
        { id: 'srv7-c2-title', type: 'heading', props: { content: 'REST & GraphQL API', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#f8fafc', margin: '12px 0 6px 0' } },
        { id: 'srv7-c2-desc', type: 'text', props: { content: 'Fully documented endpoints with blazing response times.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-[#0d1117]" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-green-400 text-sm mb-3 select-none">$ datasoft services --list</p>
          {renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}
          {renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}
          <div className="flex items-center gap-4 mt-6 text-xs text-slate-500">
            <span className="select-none">✓ 99.99% uptime</span>
            <span className="select-none">✓ SOC2</span>
            <span className="select-none">✓ 40+ regions</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
