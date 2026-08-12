import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Clients01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cli1-heading',
      type: 'heading',
      props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'cli1-subtext',
      type: 'text',
      props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'cli1-card-1',
      type: 'card',
      props: { variant: 'default', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli1-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cli1-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
      ],
    },
    {
      id: 'cli1-card-2',
      type: 'card',
      props: { variant: 'default', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli1-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cli1-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
      ],
    },
    {
      id: 'cli1-card-3',
      type: 'card',
      props: { variant: 'default', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli1-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cli1-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
      ],
    },
    {
      id: 'cli1-card-4',
      type: 'card',
      props: { variant: 'default', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli1-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cli1-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}