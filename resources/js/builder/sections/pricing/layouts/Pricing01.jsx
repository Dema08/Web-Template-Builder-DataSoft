import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Pricing01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Pricing Plans', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  const plans = [
    { name: 'Basic', price: '$9', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Pro', price: '$29', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'], popular: true },
    { name: 'Enterprise', price: '$99', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`p-8 rounded-2xl border transition hover:shadow-lg ${
              plan.popular 
                ? 'bg-indigo-600 border-indigo-600 text-white' 
                : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
              <div className={`text-4xl font-extrabold mb-6 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                {plan.price}
                <span className={`text-sm font-normal ${plan.popular ? 'text-indigo-200' : 'text-slate-500'}`}>/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className={`text-sm flex items-center gap-2 ${
                    plan.popular ? 'text-indigo-100' : 'text-slate-600'
                  }`}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full px-4 py-3 rounded-lg font-bold transition ${
                plan.popular 
                  ? 'bg-white text-indigo-600 hover:bg-indigo-50' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}