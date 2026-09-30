import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsServicesGlobal
 * International air, ocean freight, customs clearance, and cold chain services.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsServicesGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv-badge', type: 'badge', props: { content: '✈️ WORLDWIDE FREIGHT SPECIALTIES', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'srv-title', type: 'heading', props: { content: 'Layanan Forwarding & Logistik Lintas Benua', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 12px 0' } },
    { id: 'srv-desc', type: 'text', props: { content: 'Solusi logistik kargo presisi tinggi untuk muatan berharga, komponen otomotif, farmasi, dan kargo berukuran khusus.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'gs-card-1',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'g1-icon', type: 'icon', props: { icon: 'FaPlane', size: '36px', color: '#e7c873', align: 'left', margin: '0 0 14px 0' } },
        { id: 'g1-title', type: 'heading', props: { content: 'International Air Charter & Express Cargo', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#fafaf9', margin: '0 0 8px 0' } },
        { id: 'g1-desc', type: 'text', props: { content: 'Penerbangan kargo khusus (Charter Flight Boeing 777F) dan alokasi ruang kargo terjadwal ke 120+ bandara internasional dalam 24-48 jam.', fontSize: '14px', color: '#a8a29e', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'g1-btn', type: 'button', props: { label: 'Explore Air Charter Solutions →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#e7c873', borderColor: '#e7c873', fontWeight: '700' } },
      ],
    },
    {
      id: 'gs-card-2',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'g2-icon', type: 'icon', props: { icon: 'FaShip', size: '36px', color: '#e7c873', align: 'left', margin: '0 0 14px 0' } },
        { id: 'g2-title', type: 'heading', props: { content: 'Ocean Container Freight (FCL & LCL)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#fafaf9', margin: '0 0 8px 0' } },
        { id: 'g2-desc', type: 'text', props: { content: 'Pengiriman kontainer penuh (FCL) dan konsolidasi kargo parsial (LCL) ke pelabuhan utama Asia, Eropa, dan Amerika Serikat dengan B/L elektronik.', fontSize: '14px', color: '#a8a29e', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'g2-btn', type: 'button', props: { label: 'View Ocean Schedules & Rates →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#e7c873', borderColor: '#e7c873', fontWeight: '700' } },
      ],
    },
    {
      id: 'gs-card-3',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'g3-icon', type: 'icon', props: { icon: 'FaPassport', size: '36px', color: '#e7c873', align: 'left', margin: '0 0 14px 0' } },
        { id: 'g3-title', type: 'heading', props: { content: 'Customs Clearance & Duty Green Lane', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#fafaf9', margin: '0 0 8px 0' } },
        { id: 'g3-desc', type: 'text', props: { content: 'Layanan kepabeanan resmi terakreditasi Authorized Economic Operator (AEO) untuk percepatan arus impor/ekspor bebas hambatan.', fontSize: '14px', color: '#a8a29e', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'g3-btn', type: 'button', props: { label: 'Consult Customs Brokerage →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#e7c873', borderColor: '#e7c873', fontWeight: '700' } },
      ],
    },
    {
      id: 'gs-card-4',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'g4-icon', type: 'icon', props: { icon: 'FaWarehouse', size: '36px', color: '#e7c873', align: 'left', margin: '0 0 14px 0' } },
        { id: 'g4-title', type: 'heading', props: { content: 'Global Bonded Warehousing & Cold Storage', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#fafaf9', margin: '0 0 8px 0' } },
        { id: 'g4-desc', type: 'text', props: { content: 'Pusat gudang berikat 45.000 m² bebas bea transit dengan ruang pendingin suhu presisi (-25°C s/d +15°C) standar WHO-GDP.', fontSize: '14px', color: '#a8a29e', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'g4-btn', type: 'button', props: { label: 'Explore Bonded Facilities →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#e7c873', borderColor: '#e7c873', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#0c0a09] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
