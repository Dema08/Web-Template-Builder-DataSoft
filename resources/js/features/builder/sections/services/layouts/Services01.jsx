import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Services01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'srv1-badge',
      type: 'badge',
      props: { content: 'LAYANAN UNGGULAN', color: '#4f46e5', background: '#eef2ff' },
    },
    {
      id: 'srv1-heading',
      type: 'heading',
      props: { content: 'Layanan Profesional & Terintegrasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'srv1-subtext',
      type: 'text',
      props: { content: 'Solusi lengkap berstandar tinggi yang disesuaikan dengan kebutuhan bisnis Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'srv1-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'srv1-c1-icon', type: 'icon', props: { icon: 'FaTruck', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'srv1-c1-title', type: 'heading', props: { content: 'Pengiriman & Logistik', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'srv1-c1-desc', type: 'text', props: { content: 'Armada pengiriman siap melayani pengiriman darat, laut, dan udara secara tepat waktu.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'srv1-c1-btn', type: 'button', props: { label: 'Pelajari Selengkapnya →', variant: 'outline', color: '#4f46e5' } },
      ],
    },
    {
      id: 'srv1-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'srv1-c2-icon', type: 'icon', props: { icon: 'FaWarehouse', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'srv1-c2-title', type: 'heading', props: { content: 'Manajemen Pergudangan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'srv1-c2-desc', type: 'text', props: { content: 'Fasilitas gudang modern berpendingin dan terintegrasi sistem inventori otomatis.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'srv1-c2-btn', type: 'button', props: { label: 'Pelajari Selengkapnya →', variant: 'outline', color: '#4f46e5' } },
      ],
    },
    {
      id: 'srv1-card-3',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'srv1-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'srv1-c3-title', type: 'heading', props: { content: 'Jaminan & Asuransi Cargo', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'srv1-c3-desc', type: 'text', props: { content: 'Perlindungan penuh 100% untuk kargo Anda selama proses pengiriman.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'srv1-c3-btn', type: 'button', props: { label: 'Pelajari Selengkapnya →', variant: 'outline', color: '#4f46e5' } },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}
