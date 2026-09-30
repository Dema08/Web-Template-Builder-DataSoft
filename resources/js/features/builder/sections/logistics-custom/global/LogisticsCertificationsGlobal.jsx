import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsCertificationsGlobal
 * Prestigious international accreditations (IATA, FIATA, AEO, ISO 9001, WHO-GDP).
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsCertificationsGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cert-badge', type: 'badge', props: { content: '🏆 ACCREDITATIONS & COMPLIANCE', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'cert-title', type: 'heading', props: { content: 'Kepatuhan & Sertifikasi Badan Internasional', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cert-desc', type: 'text', props: { content: 'Standar audit global yang menjamin legalitas, keamanan kargo, dan akurasi kepabeanan di seluruh pelabuhan dunia.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'gcert-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '20px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gcr1-i', type: 'icon', props: { icon: 'FaPlaneDeparture', size: '32px', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
        { id: 'gcr1-t', type: 'heading', props: { content: 'IATA Cargo Agent', level: 'h3', fontSize: '16px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'gcr1-d', type: 'text', props: { content: 'Certified Cargo Agent No. 12-4-9988 dengan akses alokasi ruang kargo udara langsung ke maskapai global.', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'gcert-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '20px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gcr2-i', type: 'icon', props: { icon: 'FaGlobeAmericas', size: '32px', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
        { id: 'gcr2-t', type: 'heading', props: { content: 'FIATA Member', level: 'h3', fontSize: '16px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'gcr2-d', type: 'text', props: { content: 'Federasi Internasional Asosiasi Forwarder Kargo untuk standar dokumen Bill of Lading terpercaya di 150 negara.', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'gcert-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '20px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gcr3-i', type: 'icon', props: { icon: 'FaShieldAlt', size: '32px', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
        { id: 'gcr3-t', type: 'heading', props: { content: 'AEO Certified', level: 'h3', fontSize: '16px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'gcr3-d', type: 'text', props: { content: 'Authorized Economic Operator oleh Direktorat Jenderal Bea Cukai untuk percepatan jalur hijau bebas periksa fisik.', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'gcert-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '20px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gcr4-i', type: 'icon', props: { icon: 'FaMedkit', size: '32px', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
        { id: 'gcr4-t', type: 'heading', props: { content: 'WHO-GDP Pharma', level: 'h3', fontSize: '16px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'gcr4-d', type: 'text', props: { content: 'Good Distribution Practice untuk penanganan produk farmasi, vaksin, dan alat kesehatan bersuhu terkontrol.', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0a0807] text-white relative border-b border-[#292524]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
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
