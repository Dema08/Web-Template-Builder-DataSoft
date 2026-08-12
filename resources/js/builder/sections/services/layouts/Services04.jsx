import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Services04({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'srv4-heading',
      type: 'heading',
      props: { content: 'Layanan Komprehensif Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 12px 0' },
    },
    {
      id: 'srv4-subtext',
      type: 'text',
      props: { content: 'Layanan terintegrasi yang mempercepat transformasi bisnis digital Anda secara efisien', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 48px 0' },
    },
    {
      id: 'srv4-card-1',
      type: 'card',
      props: { variant: 'accent-left', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'srv4-c1-icon', type: 'icon', props: { icon: 'FaCode', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'srv4-c1-title', type: 'heading', props: { content: 'Web Development', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '14px 0 6px 0' } },
        { id: 'srv4-c1-desc', type: 'text', props: { content: 'Pengembangan situs web modern responsif dengan performa tinggi.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv4-card-2',
      type: 'card',
      props: { variant: 'accent-left', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'srv4-c2-icon', type: 'icon', props: { icon: 'FaPaintBrush', size: '32px', color: '#0284c7', align: 'left' } },
        { id: 'srv4-c2-title', type: 'heading', props: { content: 'UI/UX Mobile Design', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '14px 0 6px 0' } },
        { id: 'srv4-c2-desc', type: 'text', props: { content: 'Antarmuka aplikasi yang intuitif, menarik, dan ramah pengguna.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv4-card-3',
      type: 'card',
      props: { variant: 'accent-left', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'srv4-c3-icon', type: 'icon', props: { icon: 'FaChartLine', size: '32px', color: '#16a34a', align: 'left' } },
        { id: 'srv4-c3-title', type: 'heading', props: { content: 'Digital Marketing', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '14px 0 6px 0' } },
        { id: 'srv4-c3-desc', type: 'text', props: { content: 'Pemasaran berorientasi data untuk memaksimalkan ROI bisnis Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv4-card-4',
      type: 'card',
      props: { variant: 'accent-left', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'srv4-c4-icon', type: 'icon', props: { icon: 'FaCloudDownloadAlt', size: '32px', color: '#9333ea', align: 'left' } },
        { id: 'srv4-c4-title', type: 'heading', props: { content: 'Cloud Integration', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '14px 0 6px 0' } },
        { id: 'srv4-c4-desc', type: 'text', props: { content: 'Migrasi cloud yang aman, efisien, dan scalable tanpa gangguan.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col items-start justify-start text-left">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}