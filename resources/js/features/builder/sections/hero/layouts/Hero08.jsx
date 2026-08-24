import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Hero08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'left', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#ffffff', color: '#4f46e5' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-28 px-6 bg-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,_#ffffff_0%,_transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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