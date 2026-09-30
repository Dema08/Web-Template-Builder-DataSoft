import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsFleetCorporate
 * Interactive fleet showcase with technical payload specifications and telemetry info.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsFleetCorporate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt-badge', type: 'badge', props: { content: '🚛 Standar Armada OEM & Perawatan Rutin', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'medium' } },
    { id: 'flt-title', type: 'heading', props: { content: 'Spesifikasi Armada Kargo Berat & Kapal Logistik', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'flt-desc', type: 'text', props: { content: 'Seluruh armada dilengkapi teknologi GPS Tracker Dual-SIM, sensor bahan bakar presisi, dan kamera dashboard monitoring.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'fleet-card-1',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fl-c1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80', alt: 'Truk Tronton Wingbox', borderRadius: '16px', height: '200px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'fl-c1-badge', type: 'badge', props: { content: 'Kapasitas 32 Ton / 60 CBM', variant: 'primary', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', size: 'small' } },
        { id: 'fl-c1-title', type: 'heading', props: { content: 'Truk Tronton Wingbox 40ft', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'fl-c1-desc', type: 'text', props: { content: 'Heavy overland linehaul untuk rute Trans Jawa & Trans Sumatera non-stop dengan segel smart electronic lock.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'fl-c1-btn', type: 'button', props: { label: 'Sewa Dedicated Unit →', href: '#contact', variant: 'primary', size: 'small', radius: 'lg', background: '#f97316', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'fleet-card-2',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fl-c2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80', alt: 'Trailer Container 40ft', borderRadius: '16px', height: '200px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'fl-c2-badge', type: 'badge', props: { content: 'Kapasitas 36 Ton / Triple Axle', variant: 'primary', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', size: 'small' } },
        { id: 'fl-c2-title', type: 'heading', props: { content: 'Trailer Container 40ft & 20ft Flatbed', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'fl-c2-desc', type: 'text', props: { content: 'Konektivitas pelabuhan utama untuk ekspor-impor peti kemas, baja berat, dan material pabrikasi industri.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'fl-c2-btn', type: 'button', props: { label: 'Sewa Dedicated Unit →', href: '#contact', variant: 'primary', size: 'small', radius: 'lg', background: '#f97316', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'fleet-card-3',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fl-c3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&auto=format&fit=crop&q=80', alt: 'Reefer Truck Thermo King', borderRadius: '16px', height: '200px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'fl-c3-badge', type: 'badge', props: { content: 'Suhu -25°C s/d +20°C Presisi', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'fl-c3-title', type: 'heading', props: { content: 'Reefer Truck Thermo King IoT', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'fl-c3-desc', type: 'text', props: { content: 'Armada bersuhu terkontrol untuk vaksin, farmasi, daging beku, dan dairy food dengan perekam telemetri continuous.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'fl-c3-btn', type: 'button', props: { label: 'Sewa Dedicated Unit →', href: '#contact', variant: 'primary', size: 'small', radius: 'lg', background: '#38bdf8', color: '#041628', fontWeight: '700' } },
      ],
    },
    {
      id: 'fleet-card-4',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fl-c4-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&auto=format&fit=crop&q=80', alt: 'Kapal Kargo Ro-Ro Nusantara', borderRadius: '16px', height: '200px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'fl-c4-badge', type: 'badge', props: { content: 'DWT 12.000 Ton / 240 TEUs', variant: 'primary', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', size: 'small' } },
        { id: 'fl-c4-title', type: 'heading', props: { content: 'Kapal Kargo Ro-Ro & Intermodal Vessel', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'fl-c4-desc', type: 'text', props: { content: 'Armada pelayaran kontainer terjadwal menghubungkan hub Tanjung Priok dan Tanjung Perak ke pulau-pulau besar.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'fl-c4-btn', type: 'button', props: { label: 'Sewa Dedicated Unit →', href: '#contact', variant: 'primary', size: 'small', radius: 'lg', background: '#34d399', color: '#041628', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="fleet" className="py-24 px-4 sm:px-6 bg-[#071324] relative">
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
