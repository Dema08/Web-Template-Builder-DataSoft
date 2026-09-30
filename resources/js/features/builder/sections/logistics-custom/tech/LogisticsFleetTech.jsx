import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsFleetTech
 * Urban delivery fleet: Electric Motorcycles, Smart Blindvans, and Insulated Cargo Bikes.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsFleetTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tflt-badge', type: 'badge', props: { content: '⚡ ARMADA ECO-FRIENDLY & IOT', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'medium' } },
    { id: 'tflt-title', type: 'heading', props: { content: 'Armada Pengiriman Modern Berkelanjutan', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tflt-desc', type: 'text', props: { content: '100% armada motor listrik perkotaan yang minim emisi karbon, gesit menembus kemacetan, dan dilengkapi boks termo-isolasi.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'tf-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tf1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80', alt: 'Motor Listrik EV Cargo', borderRadius: '16px', height: '190px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'tf1-badge', type: 'badge', props: { content: '0% Emisi Karbon (EV)', variant: 'primary', background: '#ecfdf5', color: '#059669', size: 'small' } },
        { id: 'tf1-title', type: 'heading', props: { content: 'Motor Listrik EV Smart Carrier', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'tf1-desc', type: 'text', props: { content: 'Boks thermal kapasitas 100 Liter / 30 kg dengan sensor IoT suhu dan GPS live telemetry.', fontSize: '13px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'tf1-btn', type: 'button', props: { label: 'Pesan Armada EV →', href: '#pricing', variant: 'primary', size: 'small', radius: 'full', background: '#0284c7', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'tf-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tf2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?w=800&auto=format&fit=crop&q=80', alt: 'Blindvan Express Urban', borderRadius: '16px', height: '190px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'tf2-badge', type: 'badge', props: { content: 'Kapasitas 850 kg / 4 CBM', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'small' } },
        { id: 'tf2-title', type: 'heading', props: { content: 'Blindvan High-Roof Urban Hub', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'tf2-desc', type: 'text', props: { content: 'Solusi pickup borongan seller skala menengah, muatan fashion, elektronik, dan kargo berat perkotaan.', fontSize: '13px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'tf2-btn', type: 'button', props: { label: 'Pesan Blindvan →', href: '#pricing', variant: 'primary', size: 'small', radius: 'full', background: '#0284c7', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'tf-card-3',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tf3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&auto=format&fit=crop&q=80', alt: 'Chilled EV Box', borderRadius: '16px', height: '190px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'tf3-badge', type: 'badge', props: { content: 'Suhu 0°C s/d 4°C Fresh', variant: 'primary', background: '#fef3c7', color: '#d97706', size: 'small' } },
        { id: 'tf3-title', type: 'heading', props: { content: 'Chilled EV Cooler Box Food & Cake', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'tf3-desc', type: 'text', props: { content: 'Pengantaran khusus kue, makanan beku, salad & minuman dingin tetap segar sampai di tangan pelanggan.', fontSize: '13px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'tf3-btn', type: 'button', props: { label: 'Pesan Chilled Box →', href: '#pricing', variant: 'primary', size: 'small', radius: 'full', background: '#d97706', color: '#ffffff', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="fleet" className="py-24 px-4 sm:px-6 bg-slate-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
