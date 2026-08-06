import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Services02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Services', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'We provide the best services for your business', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">{i}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Service {i}</h3>
              <p className="text-sm text-slate-600">Description of service {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}