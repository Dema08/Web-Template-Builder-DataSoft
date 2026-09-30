import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsServicesCorporate
 * Comprehensive multi-modal logistics services grid with checklists and SLA badges.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsServicesCorporate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv-badge', type: 'badge', props: { content: '⚙️ Layanan Multi-Modal Terpadu', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'medium' } },
    { id: 'srv-title', type: 'heading', props: { content: 'Solusi Logistik & Kargo B2B Skala Enterprise', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'srv-desc', type: 'text', props: { content: 'Layanan end-to-end terintegrasi yang disesuaikan dengan volume dan kebutuhan spesifik rantai pasok industri Anda.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'srv-card-1',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 's1-tag', type: 'badge', props: { content: 'Kapasitas Besar', variant: 'primary', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', size: 'small' } },
        { id: 's1-icon', type: 'icon', props: { icon: 'FaTruck', size: '36px', color: '#f97316', align: 'left', margin: '16px 0 12px 0' } },
        { id: 's1-title', type: 'heading', props: { content: 'Full Truckload (FTL) & Dedicated Wingbox', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 's1-desc', type: 'text', props: { content: 'Pengiriman satu armada penuh kapasitas 20 hingga 32 ton dengan rute langsung tanpa transit perantara untuk kecepatan maksimal.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 's1-btn', type: 'button', props: { label: 'Minta Konsultasi Layanan FTL →', href: '#contact', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#f97316', borderColor: '#f97316', fontWeight: '700' } },
      ],
    },
    {
      id: 'srv-card-2',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 's2-tag', type: 'badge', props: { content: 'Lintas Pulau', variant: 'primary', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', size: 'small' } },
        { id: 's2-icon', type: 'icon', props: { icon: 'FaShip', size: '36px', color: '#f97316', align: 'left', margin: '16px 0 12px 0' } },
        { id: 's2-title', type: 'heading', props: { content: 'Intermodal Sea Freight & Ro-Ro Nusantara', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 's2-desc', type: 'text', props: { content: 'Konektivitas kargo laut kontainer (FCL/LCL) dan kapal Ro-Ro terjadwal menghubungkan Jawa ke Kalimantan, Sulawesi, Maluku & Papua.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 's2-btn', type: 'button', props: { label: 'Minta Jadwal & Rute Pelayaran →', href: '#contact', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#f97316', borderColor: '#f97316', fontWeight: '700' } },
      ],
    },
    {
      id: 'srv-card-3',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 's3-tag', type: 'badge', props: { content: 'Suhu Presisi (-25°C)', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 's3-icon', type: 'icon', props: { icon: 'FaSnowflake', size: '36px', color: '#38bdf8', align: 'left', margin: '16px 0 12px 0' } },
        { id: 's3-title', type: 'heading', props: { content: 'Dedicated Cold Chain Logistics (-25°C)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 's3-desc', type: 'text', props: { content: 'Transportasi kargo bersuhu terkontrol presisi menggunakan armada reefer berteknologi telemetri IoT mikroprosesor Thermo King.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 's3-btn', type: 'button', props: { label: 'Konsultasi Armada Cold Chain →', href: '#contact', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#38bdf8', borderColor: '#38bdf8', fontWeight: '700' } },
      ],
    },
    {
      id: 'srv-card-4',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 's4-tag', type: 'badge', props: { content: 'Spesialis Industri & Heavy', variant: 'primary', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', size: 'small' } },
        { id: 's4-icon', type: 'icon', props: { icon: 'FaHardHat', size: '36px', color: '#34d399', align: 'left', margin: '16px 0 12px 0' } },
        { id: 's4-title', type: 'heading', props: { content: 'Project Cargo & Heavy Haulage Transport', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 's4-desc', type: 'text', props: { content: 'Pengangkutan alat berat industri, mesin pabrik, struktur baja, dan kargo over-dimension/over-weight dengan lowbed trailer 80 Ton.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 's4-btn', type: 'button', props: { label: 'Survey Rute Heavy Haulage →', href: '#contact', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#34d399', borderColor: '#34d399', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#08152b] relative">
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
