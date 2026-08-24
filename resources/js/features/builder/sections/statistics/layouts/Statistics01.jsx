import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Statistics01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'stat1-heading',
      type: 'heading',
      props: { content: 'Statistik & Pencapaian', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'stat1-subtext',
      type: 'text',
      props: { content: 'Angka yang mencerminkan kepercayaan dan keunggulan layanan kami selama bertahun-tahun', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'stat1-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat1-c1-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat1-c1-label', type: 'text', props: { content: 'Negara Jangkauan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat1-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat1-c2-value', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat1-c2-label', type: 'text', props: { content: 'Klien Terpercaya', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat1-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat1-c3-value', type: 'heading', props: { content: '10K+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat1-c3-label', type: 'text', props: { content: 'Pengiriman Selesai', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat1-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat1-c4-value', type: 'heading', props: { content: '99%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat1-c4-label', type: 'text', props: { content: 'Tingkat Kepuasan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-indigo-50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}