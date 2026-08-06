import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Teachers01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Faculty', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['Dr. John Doe', 'Prof. Jane Smith', 'Dr. Michael Brown', 'Prof. Sarah Wilson'].map((teacher, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition text-center">
              <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{teacher}</h3>
              <p className="text-xs text-slate-500">Department Head</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}