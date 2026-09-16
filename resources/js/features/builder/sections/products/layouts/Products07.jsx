import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TERMINAL — Developer Command Products
 * Gelap dev-tools + kartu API pricing ala SaaS.
 */
export default function Products07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod7-badge', type: 'badge', props: { content: '$ npm i @datasoft/sdk', background: '#052e16', color: '#4ade80' } },
    { id: 'prod7-heading', type: 'heading', props: { content: 'API & Paket Developer', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod7-text', type: 'text', props: { content: '40.000 tim deploy di atas infrastruktur kami.', fontSize: '15px', color: '#94a3b8', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod7-cta', type: 'button', props: { label: '▸ Deploy Now', href: '#deploy', variant: 'primary', size: 'medium', radius: 'md', background: '#22c55e', color: '#052e16' } },
    {
      id: 'prod7-card-1', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod7-c1-title', type: 'heading', props: { content: '~/hobby', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#4ade80', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c1-price', type: 'heading', props: { content: '$0 /mo', level: 'h4', fontSize: '22px', fontWeight: '800', color: '#e2e8f0', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c1-desc', type: 'text', props: { content: '100k requests, community support.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod7-c1-btn', type: 'button', props: { label: '$ init hobby', href: '#hobby', variant: 'ghost', size: 'small', background: 'transparent', color: '#4ade80' } },
      ],
    },
    {
      id: 'prod7-card-2', type: 'card',
      props: { variant: 'product', background: '#052e16', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#22c55e', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod7-c2-title', type: 'heading', props: { content: '~/pro ★', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#4ade80', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c2-price', type: 'heading', props: { content: '$29 /mo', level: 'h4', fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c2-desc', type: 'text', props: { content: '10M requests, edge global, SLA 99.9%.', fontSize: '13px', color: '#bbf7d0', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod7-c2-btn', type: 'button', props: { label: '$ init pro', href: '#pro', variant: 'primary', size: 'small', radius: 'md', background: '#22c55e', color: '#052e16' } },
      ],
    },
    {
      id: 'prod7-card-3', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod7-c3-title', type: 'heading', props: { content: '~/enterprise', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#4ade80', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c3-price', type: 'heading', props: { content: 'Custom', level: 'h4', fontSize: '22px', fontWeight: '800', color: '#e2e8f0', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c3-desc', type: 'text', props: { content: 'VPC, SOC2, dedicated support.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod7-c3-btn', type: 'button', props: { label: '$ contact sales', href: '#sales', variant: 'ghost', size: 'small', background: 'transparent', color: '#4ade80' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-[#020617] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-1.5 mb-6 select-none pointer-events-none"><span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" /><span className="ml-2 text-xs text-slate-500">datasoft — plans.sh</span></div>
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}
        {renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
