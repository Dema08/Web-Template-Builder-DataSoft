import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Achievements01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'ach1-heading',
      type: 'heading',
      props: { content: 'Pencapaian Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'ach1-subtext',
      type: 'text',
      props: { content: 'Angka yang berbicara tentang komitmen dan dedikasi kami dalam dunia pendidikan', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'ach1-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'ach1-c1-value', type: 'heading', props: { content: '100+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'ach1-c1-label', type: 'text', props: { content: 'Penghargaan Nasional', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'ach1-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'ach1-c2-value', type: 'heading', props: { content: '5.000+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'ach1-c2-label', type: 'text', props: { content: 'Alumni Sukses', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'ach1-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'ach1-c3-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'ach1-c3-label', type: 'text', props: { content: 'Tahun Berpengalaman', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'ach1-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'ach1-c4-value', type: 'heading', props: { content: '98%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'ach1-c4-label', type: 'text', props: { content: 'Tingkat Keberhasilan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
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