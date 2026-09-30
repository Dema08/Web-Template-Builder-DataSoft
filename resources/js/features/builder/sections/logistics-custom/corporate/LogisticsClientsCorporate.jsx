import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsClientsCorporate
 * Corporate client trust section with industry badges and enterprise partner cards.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsClientsCorporate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'clients-badge', type: 'badge', props: { content: '🏢 Klien Korporasi & Mitra Strategis', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'small' } },
    { id: 'clients-title', type: 'heading', props: { content: 'Dipercaya 500+ Korporasi & Pabrik Manufaktur Nasional', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
    { id: 'clients-desc', type: 'text', props: { content: 'Menjamin kelancaran rantai pasok harian bagi sektor FMCG, Farmasi, Otomotif, Energi & Retail Modern di Indonesia.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 32px 0' } },
    {
      id: 'client-card-1',
      type: 'card',
      props: { variant: 'client', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cl-c1-icon', type: 'icon', props: { icon: 'FaGasPump', size: '28px', color: '#f97316', align: 'center' } },
        { id: 'cl-c1-title', type: 'heading', props: { content: 'PT Pertamina Trans', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'cl-c1-desc', type: 'text', props: { content: 'Energi & Bahan Bakar', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'client-card-2',
      type: 'card',
      props: { variant: 'client', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cl-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '28px', color: '#f97316', align: 'center' } },
        { id: 'cl-c2-title', type: 'heading', props: { content: 'Semen Indonesia', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'cl-c2-desc', type: 'text', props: { content: 'Material Konstruksi', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'client-card-3',
      type: 'card',
      props: { variant: 'client', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cl-c3-icon', type: 'icon', props: { icon: 'FaShoppingCart', size: '28px', color: '#f97316', align: 'center' } },
        { id: 'cl-c3-title', type: 'heading', props: { content: 'Indomaret Logistics', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'cl-c3-desc', type: 'text', props: { content: 'Retail & FMCG', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'client-card-4',
      type: 'card',
      props: { variant: 'client', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cl-c4-icon', type: 'icon', props: { icon: 'FaHeartbeat', size: '28px', color: '#f97316', align: 'center' } },
        { id: 'cl-c4-title', type: 'heading', props: { content: 'FarmaCare Nusantara', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'cl-c4-desc', type: 'text', props: { content: 'Cold Chain Farmasi', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'client-card-5',
      type: 'card',
      props: { variant: 'client', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cl-c5-icon', type: 'icon', props: { icon: 'FaCar', size: '28px', color: '#f97316', align: 'center' } },
        { id: 'cl-c5-title', type: 'heading', props: { content: 'Astra Otoparts', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'cl-c5-desc', type: 'text', props: { content: 'Komponen Otomotif', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'client-card-6',
      type: 'card',
      props: { variant: 'client', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cl-c6-icon', type: 'icon', props: { icon: 'FaShip', size: '28px', color: '#f97316', align: 'center' } },
        { id: 'cl-c6-title', type: 'heading', props: { content: 'Pelindo Logistik Mitra', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '8px 0 2px 0' } },
        { id: 'cl-c6-desc', type: 'text', props: { content: 'Terminal Pelabuhan', fontSize: '11px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#081325] border-y border-slate-800">
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
