import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Timeline01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Journey', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  const milestones = [
    { year: '2015', title: 'Founded', description: 'Company was established' },
    { year: '2018', title: 'Expansion', description: 'Expanded to new markets' },
    { year: '2021', title: 'Innovation', description: 'Launched new products' },
    { year: '2024', title: 'Leadership', description: 'Industry leader' },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-200 h-full" />
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="text-sm font-bold text-indigo-600 mb-1">{milestone.year}</div>
                    <div className="text-base font-bold text-slate-900 mb-1">{milestone.title}</div>
                    <div className="text-sm text-slate-600">{milestone.description}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}