import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Fleet01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'flt1-heading',
      type: 'heading',
      props: { content: 'Armada & Fasilitas Transportasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'flt1-subtext',
      type: 'text',
      props: { content: 'Armada angkutan darat, laut, dan udara siap melayani kebutuhan pengiriman barang', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'flt1-card-1',
      type: 'card',
      props: { variant: 'service', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'flt1-c1-icon', type: 'icon', props: { icon: 'FaTruck', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'flt1-c1-title', type: 'heading', props: { content: 'Truk Tronton & Container', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 6px 0' } },
        { id: 'flt1-c1-desc', type: 'text', props: { content: 'Armada angkutan berat antar kota dan pulau berfasilitas GPS tracking realtime.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'flt1-card-2',
      type: 'card',
      props: { variant: 'service', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'flt1-c2-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'flt1-c2-title', type: 'heading', props: { content: 'Kapal Cargo Kargo', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 6px 0' } },
        { id: 'flt1-c2-desc', type: 'text', props: { content: 'Layanan kontainer laut efisien untuk muatan besar ke pelabuhan Nusantara.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'flt1-card-3',
      type: 'card',
      props: { variant: 'service', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'flt1-c3-icon', type: 'icon', props: { icon: 'FaPlane', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'flt1-c3-title', type: 'heading', props: { content: 'Air Cargo Express', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 6px 0' } },
        { id: 'flt1-c3-desc', type: 'text', props: { content: 'Pengiriman kilat udara sampai di hari yang sama ke kota-kota besar.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-white">
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