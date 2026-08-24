import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Team01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'team1-heading',
      type: 'heading',
      props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'team1-subtext',
      type: 'text',
      props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'team1-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team1-c1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team1-c1-name', type: 'heading', props: { content: 'Budi Santoso, M.B.A', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team1-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#4f46e5', align: 'center', margin: '0 0 16px 0' } },
      ],
    },
    {
      id: 'team1-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team1-c2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team1-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team1-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#4f46e5', align: 'center', margin: '0 0 16px 0' } },
      ],
    },
    {
      id: 'team1-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team1-c3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team1-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team1-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#4f46e5', align: 'center', margin: '0 0 16px 0' } },
      ],
    },
    {
      id: 'team1-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team1-c4-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team1-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team1-c4-role', type: 'text', props: { content: 'VP Marketing & Sales', fontSize: '14px', color: '#4f46e5', align: 'center', margin: '0 0 16px 0' } },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}