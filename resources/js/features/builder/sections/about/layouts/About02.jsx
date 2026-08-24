import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function About02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8' } },
    { id: 'button-1', type: 'button', props: { label: 'Learn More', href: '#', variant: 'primary', size: 'medium', background: '#4f46e5', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-4">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'button' || c.type === 'badge'), sectionId)}
        </div>
        <div className="flex items-center justify-center">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'image'), sectionId)}
        </div>
      </div>
    </section>
  );
}