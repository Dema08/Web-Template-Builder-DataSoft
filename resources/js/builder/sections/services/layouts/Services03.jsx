import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Services03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Services', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-indigo-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-6 bg-white/10 backdrop-blur rounded-xl border border-white/20 hover:bg-white/20 transition">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <span className="text-indigo-700 font-bold text-lg">{i}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Service {i}</h3>
              <p className="text-sm text-indigo-100">Description of service {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}