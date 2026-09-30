import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingSyndicateCapital
 * Institutional LP & Global Co-Investor Syndicate Network.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingSyndicateCapital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'syn-badge', type: 'badge', props: { content: '🌐 GLOBAL LP & CO-INVESTOR NETWORK', variant: 'primary', background: '#022c22', color: '#34d399', size: 'small' } },
    { id: 'syn-title', type: 'heading', props: { content: 'Didukung oleh Institusi Pengelola Dana Terkemuka Dunia', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
    { id: 'syn-desc', type: 'text', props: { content: 'Sindikasi co-investasi aktif bersama Sovereign Wealth Funds, Institutional Endowments, dan Global Tech Giants.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 32px 0' } },
    {
      id: 'syn-card-1',
      type: 'card',
      props: { variant: 'client', background: '#09090b', borderRadius: '16px', borderWidth: '1px', borderColor: '#27272a', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc1-icon', type: 'icon', props: { icon: 'FaUniversity', size: '28px', color: '#34d399', align: 'center' } },
        { id: 'sc1-title', type: 'heading', props: { content: 'Temasek Holdings Co-Invest', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'sc1-desc', type: 'text', props: { content: 'Sovereign Wealth Fund', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'syn-card-2',
      type: 'card',
      props: { variant: 'client', background: '#09090b', borderRadius: '16px', borderWidth: '1px', borderColor: '#27272a', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc2-icon', type: 'icon', props: { icon: 'FaBuilding', size: '28px', color: '#34d399', align: 'center' } },
        { id: 'sc2-title', type: 'heading', props: { content: 'Sequoia Capital Global', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'sc2-desc', type: 'text', props: { content: 'Tier-1 Venture Syndicate', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'syn-card-3',
      type: 'card',
      props: { variant: 'client', background: '#09090b', borderRadius: '16px', borderWidth: '1px', borderColor: '#27272a', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc3-icon', type: 'icon', props: { icon: 'FaGlobe', size: '28px', color: '#34d399', align: 'center' } },
        { id: 'sc3-title', type: 'heading', props: { content: 'SoftBank Vision Fund', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'sc3-desc', type: 'text', props: { content: 'Late-Stage Growth LP', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'syn-card-4',
      type: 'card',
      props: { variant: 'client', background: '#09090b', borderRadius: '16px', borderWidth: '1px', borderColor: '#27272a', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc4-icon', type: 'icon', props: { icon: 'FaChartPie', size: '28px', color: '#34d399', align: 'center' } },
        { id: 'sc4-title', type: 'heading', props: { content: 'GIC Private Equity', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'sc4-desc', type: 'text', props: { content: 'Institutional LP Partner', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'syn-card-5',
      type: 'card',
      props: { variant: 'client', background: '#09090b', borderRadius: '16px', borderWidth: '1px', borderColor: '#27272a', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc5-icon', type: 'icon', props: { icon: 'FaLandmark', size: '28px', color: '#34d399', align: 'center' } },
        { id: 'sc5-title', type: 'heading', props: { content: 'Indonesia Investment Authority (INA)', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'sc5-desc', type: 'text', props: { content: 'National Strategic SWF', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'syn-card-6',
      type: 'card',
      props: { variant: 'client', background: '#09090b', borderRadius: '16px', borderWidth: '1px', borderColor: '#27272a', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc6-icon', type: 'icon', props: { icon: 'FaGem', size: '28px', color: '#34d399', align: 'center' } },
        { id: 'sc6-title', type: 'heading', props: { content: 'European Tech Investment Bank', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'sc6-desc', type: 'text', props: { content: 'Cross-Border Strategic LP', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="syndicate" className="py-16 px-4 sm:px-6 bg-[#060608] border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-2">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
