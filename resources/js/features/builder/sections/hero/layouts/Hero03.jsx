import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Hero03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e2e8f0', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#4f46e5', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {renderLayoutComponents(layoutComponents, sectionId)}
      </div>
    </section>
  );
}
