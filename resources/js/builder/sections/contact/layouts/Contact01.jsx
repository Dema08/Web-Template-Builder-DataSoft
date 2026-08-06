import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Contact01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#000000', align: 'center', margin: '0 0 32px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Email: hello@company.com', fontSize: '16px', color: '#64748b', align: 'center' } },
    { id: 'text-2', type: 'text', props: { content: 'Phone: +62 123 456 789', fontSize: '16px', color: '#64748b', align: 'center' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {renderLayoutComponents(layoutComponents, sectionId)}
      </div>
    </section>
  );
}
