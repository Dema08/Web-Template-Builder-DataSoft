import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Achievements01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Achievements', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '100+', label: 'Awards' },
            { value: '5000+', label: 'Graduates' },
            { value: '50+', label: 'Years' },
            { value: '98%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-extrabold text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}