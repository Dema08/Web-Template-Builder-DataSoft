import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Services02({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'srv2-heading',
      type: 'heading',
      props: { content: 'Solusi Layanan Bisnis Terpadu', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'srv2-subtext',
      type: 'text',
      props: { content: 'Dipercaya oleh lebih dari 500+ perusahaan di seluruh Indonesia', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'srv2-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '24px' },
      childrenComponents: [
        { id: 'srv2-c1-icon', type: 'icon', props: { icon: 'FaChartLine', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'srv2-c1-title', type: 'heading', props: { content: 'Strategi Bisnis & Riset', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv2-c1-desc', type: 'text', props: { content: 'Analisis mendalam pasar dan eksekusi strategi pertumbuhan berlanjut.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv2-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '24px' },
      childrenComponents: [
        { id: 'srv2-c2-icon', type: 'icon', props: { icon: 'FaCogs', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'srv2-c2-title', type: 'heading', props: { content: 'Digitalisasi Operasional', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv2-c2-desc', type: 'text', props: { content: 'Otomatisasi proses kerja perusahaan untuk efisiensi maksimal.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv2-card-3',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '24px' },
      childrenComponents: [
        { id: 'srv2-c3-icon', type: 'icon', props: { icon: 'FaUserShield', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'srv2-c3-title', type: 'heading', props: { content: 'Konsultasi Manajemen Risk', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv2-c3-desc', type: 'text', props: { content: 'Pendampingan kepatuhan hukum dan mitigasi risiko operasional.', fontSize: '14px', color: '#64748b', margin: '0' } },
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