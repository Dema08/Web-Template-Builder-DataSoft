import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Products01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Products', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Product A', 'Product B', 'Product C'].map((product, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <div className="aspect-[4/3] bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-400 font-bold">📦</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{product}</h3>
              <p className="text-sm text-slate-600 mb-4">High quality {product.toLowerCase()}</p>
              <button className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}