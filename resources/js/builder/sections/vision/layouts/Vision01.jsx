import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Vision01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-1', type: 'badge', props: { content: 'Our Vision', variant: 'primary', size: 'medium' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Our Vision', level: 'h2', fontSize: '36px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'To be the leading company in our industry, delivering innovative solutions that transform the way people live and work.', fontSize: '18px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {renderLayoutComponents(layoutComponents, sectionId)}
      </div>
    </section>
  );
}