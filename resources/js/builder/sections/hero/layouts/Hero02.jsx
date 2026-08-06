import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Hero02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#000000', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '18px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'medium', background: '#4f46e5', color: '#ffffff' } },
    { id: 'image-1', type: 'image', props: { src: '', alt: 'Hero Image', width: '100%', height: '400px', objectFit: 'cover' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4">
          {renderLayoutComponents(layoutComponents.filter(c => c.type !== 'image'), sectionId)}
        </div>
        <div className="bg-slate-100 rounded-xl">
          {layoutComponents.find(c => c.type === 'image') && renderLayoutComponents([layoutComponents.find(c => c.type === 'image')], sectionId)}
        </div>
      </div>
    </section>
  );
}
