import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Gallery02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Gallery', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="aspect-square bg-slate-100 rounded-lg overflow-hidden hover:opacity-90 transition cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <span className="text-slate-500 font-bold">Image {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}