import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Map01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden" style={{ height: '400px' }}>
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <div className="text-lg font-bold text-slate-700">Map Location</div>
              <div className="text-sm text-slate-500">123 Main Street, City</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}