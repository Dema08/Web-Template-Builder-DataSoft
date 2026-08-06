import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function About03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {renderLayoutComponents(layoutComponents, sectionId)}
      </div>
    </section>
  );
}