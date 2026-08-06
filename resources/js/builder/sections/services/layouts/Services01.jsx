import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Services01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Services', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#000000', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {renderLayoutComponents(layoutComponents, sectionId)}
      </div>
    </section>
  );
}
