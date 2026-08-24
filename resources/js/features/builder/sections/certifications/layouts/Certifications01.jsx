import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Certifications01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cert1-heading',
      type: 'heading',
      props: { content: 'Sertifikasi & Akreditasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'cert1-subtext',
      type: 'text',
      props: { content: 'Diakui dan tersertifikasi oleh lembaga standar mutu nasional dan internasional', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'cert1-card-1',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'cert1-c1-icon', type: 'icon', props: { icon: 'FaMedal', size: '40px', color: '#f59e0b', align: 'center' } },
        { id: 'cert1-c1-title', type: 'heading', props: { content: 'ISO 9001:2015', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
        { id: 'cert1-c1-desc', type: 'text', props: { content: 'Sistem Manajemen Mutu berstandar internasional untuk layanan pendidikan terbaik.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'cert1-card-2',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'cert1-c2-icon', type: 'icon', props: { icon: 'FaLeaf', size: '40px', color: '#10b981', align: 'center' } },
        { id: 'cert1-c2-title', type: 'heading', props: { content: 'ISO 14001:2015', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
        { id: 'cert1-c2-desc', type: 'text', props: { content: 'Sistem Manajemen Lingkungan untuk kampus ramah lingkungan dan berkelanjutan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'cert1-card-3',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'cert1-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '40px', color: '#3b82f6', align: 'center' } },
        { id: 'cert1-c3-title', type: 'heading', props: { content: 'OHSAS 18001', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
        { id: 'cert1-c3-desc', type: 'text', props: { content: 'Standar Kesehatan dan Keselamatan Kerja untuk lingkungan kampus yang aman.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
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