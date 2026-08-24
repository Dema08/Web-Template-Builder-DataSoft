import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Coverage01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cov1-heading',
      type: 'heading',
      props: { content: 'Jangkauan Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'cov1-subtext',
      type: 'text',
      props: { content: 'Melayani pengiriman ke seluruh wilayah Indonesia dan berbagai kota di Asia Tenggara', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'cov1-card-1',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cov1-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cov1-c1-title', type: 'heading', props: { content: 'Jawa & Bali', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'cov1-c1-desc', type: 'text', props: { content: 'Layanan ekspres ke 200+ kota dan kabupaten se-pulau Jawa dan Bali.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'cov1-card-2',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cov1-c2-icon', type: 'icon', props: { icon: 'FaGlobe', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cov1-c2-title', type: 'heading', props: { content: 'Sumatera & Kalimantan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'cov1-c2-desc', type: 'text', props: { content: 'Jaringan logistik menyeluruh ke seluruh penjuru Sumatera dan Kalimantan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'cov1-card-3',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cov1-c3-icon', type: 'icon', props: { icon: 'FaGlobeAsia', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cov1-c3-title', type: 'heading', props: { content: 'Indonesia Timur', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
        { id: 'cov1-c3-desc', type: 'text', props: { content: 'Pengiriman ke Sulawesi, Maluku, NTT, NTB, Papua dan sekitarnya.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}