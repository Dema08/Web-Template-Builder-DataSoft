import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingMetricsCapital
 * Fund deployment metrics and historical performance dashboard.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingMetricsCapital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'met-badge', type: 'badge', props: { content: '📊 TRACK RECORD & FUND PERFORMANCE', variant: 'primary', background: '#022c22', color: '#34d399', size: 'medium' } },
    { id: 'met-title', type: 'heading', props: { content: 'Hasil Kinerja Portofolio & Return Pemodal', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'met-desc', type: 'text', props: { content: 'Konsistensi performa quartile teratas di antara pengelola dana private equity dan venture capital regional.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'm-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'mc1-val', type: 'heading', props: { content: '34.6%', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#34d399', align: 'center', margin: '0 0 8px 0' } },
        { id: 'mc1-lbl', type: 'heading', props: { content: 'Net Annualized IRR', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'mc1-sub', type: 'text', props: { content: 'Konsisten di atas benchmark bursa', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'm-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'mc2-val', type: 'heading', props: { content: '$1.8B+', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#38bdf8', align: 'center', margin: '0 0 8px 0' } },
        { id: 'mc2-lbl', type: 'heading', props: { content: 'Total Capital Returned (DPI)', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'mc2-sub', type: 'text', props: { content: 'Didistribusikan tunai kepada LP', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'm-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'mc3-val', type: 'heading', props: { content: '9 Unicorns', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#a78bfa', align: 'center', margin: '0 0 8px 0' } },
        { id: 'mc3-lbl', type: 'heading', props: { content: 'Valuasi > $1 Miliar', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'mc3-sub', type: 'text', props: { content: 'Tercipta dari portofolio binaan', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'm-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'mc4-val', type: 'heading', props: { content: '100%', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#fbbf24', align: 'center', margin: '0 0 8px 0' } },
        { id: 'mc4-lbl', type: 'heading', props: { content: 'ESG Screening Mandate', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'mc4-sub', type: 'text', props: { content: 'Standar investasi bertanggung jawab', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#060608] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
