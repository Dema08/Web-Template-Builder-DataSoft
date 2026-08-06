import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Registration01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Admissions', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Apply now for the upcoming academic year', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
            <input type="text" placeholder="Program" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
            <input type="text" placeholder="Phone" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
          </div>
          <button className="w-full mt-4 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}