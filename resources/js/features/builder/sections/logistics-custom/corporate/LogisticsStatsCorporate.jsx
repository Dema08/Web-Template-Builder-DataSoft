import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsStatsCorporate
 * Operational scale and capacity metrics dashboard for enterprise logistics.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsStatsCorporate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stats-badge', type: 'badge', props: { content: '📊 Skala & Kinerja Operasional', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'medium' } },
    { id: 'stats-title', type: 'heading', props: { content: 'Infrastruktur Logistik Berkapasitas Raksasa', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'stats-desc', type: 'text', props: { content: 'Data operasional nyata yang membuktikan kesiapan dan reliabilitas distribusi TransGo di seluruh Indonesia.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'stat-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'st-c1-val', type: 'heading', props: { content: '1.480+', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#f97316', align: 'center', margin: '0 0 8px 0' } },
        { id: 'st-c1-lbl', type: 'heading', props: { content: 'Armada Berat & Kapal', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'st-c1-sub', type: 'text', props: { content: 'Wingbox, Tronton, Reefer, Ro-Ro', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'st-c2-val', type: 'heading', props: { content: '48 Hub', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#fbbf24', align: 'center', margin: '0 0 8px 0' } },
        { id: 'st-c2-lbl', type: 'heading', props: { content: 'Pusat Distribusi Strategis', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'st-c2-sub', type: 'text', props: { content: 'Tersebar di 38 Provinsi Indonesia', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'st-c3-val', type: 'heading', props: { content: '3.8 Juta', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#34d399', align: 'center', margin: '0 0 8px 0' } },
        { id: 'st-c3-lbl', type: 'heading', props: { content: 'Tonase Kargo Tahunan', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'st-c3-sub', type: 'text', props: { content: 'Muatan B2B FMCG, Industri & Energi', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'st-c4-val', type: 'heading', props: { content: '99.82%', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#38bdf8', align: 'center', margin: '0 0 8px 0' } },
        { id: 'st-c4-lbl', type: 'heading', props: { content: 'Ketepatan Waktu (SLA)', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'st-c4-sub', type: 'text', props: { content: 'Terverifikasi Digital Real-Time', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#0a192f] relative overflow-hidden">
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
