import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsStatsGlobal
 * Prestige global metrics dashboard with champagne gold accents.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsStatsGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat-badge', type: 'badge', props: { content: '🌐 GLOBAL BENCHMARK & CAPACITY', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'stat-title', type: 'heading', props: { content: 'Skala Jaringan Logistik Antar Benua', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 12px 0' } },
    { id: 'stat-desc', type: 'text', props: { content: 'Kapasitas angkut masif yang menghubungkan 5 benua dengan kepatuhan standar kepabeanan dan keamanan internasional.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'gstat-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gs-c1-val', type: 'heading', props: { content: '140+', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#e7c873', align: 'center', margin: '0 0 8px 0' } },
        { id: 'gs-c1-lbl', type: 'heading', props: { content: 'Destinasi Negara', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'gs-c1-sub', type: 'text', props: { content: 'Hub Asia, Eropa, Amerika, & Timteng', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'gstat-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gs-c2-val', type: 'heading', props: { content: '850.000', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#38bdf8', align: 'center', margin: '0 0 8px 0' } },
        { id: 'gs-c2-lbl', type: 'heading', props: { content: 'TEUs Peti Kemas Laut', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'gs-c2-sub', type: 'text', props: { content: 'Volume Kontainer FCL/LCL Tahunan', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'gstat-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gs-c3-val', type: 'heading', props: { content: '120.000 Ton', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#4ade80', align: 'center', margin: '0 0 8px 0' } },
        { id: 'gs-c3-lbl', type: 'heading', props: { content: 'Tonase Air Cargo', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'gs-c3-sub', type: 'text', props: { content: 'Boeing 777F & Scheduled Line', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'gstat-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gs-c4-val', type: 'heading', props: { content: '99.94%', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#f59e0b', align: 'center', margin: '0 0 8px 0' } },
        { id: 'gs-c4-lbl', type: 'heading', props: { content: 'Green Lane Customs Pass', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'gs-c4-sub', type: 'text', props: { content: 'Akreditasi AEO & Keamanan IATA', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#0a0807] relative border-y border-[#292524]">
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
