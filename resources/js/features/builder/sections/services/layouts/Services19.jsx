import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 19 — LUMIÈRE Agency Portfolio
 * Mirrors Hero19 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services19({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv19-badge', type: 'badge', props: { content: '● Available for Q3 2026', background: '#ecfdf5', color: '#059669' } },
    { id: 'srv19-heading', type: 'heading', props: { content: 'We craft brand services people remember', level: 'h2', fontSize: '58px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'srv19-text', type: 'text', props: { content: 'Strategy, identity & web services for ambitious teams. 120+ launches, 14 international awards.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'srv19-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '24px' },
      childrenComponents: [
        { id: 'srv19-c1-icon', type: 'icon', props: { icon: 'FaLightbulb', size: '32px', color: '#059669', align: 'left' } },
        { id: 'srv19-c1-title', type: 'heading', props: { content: 'Brand Strategy', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv19-c1-desc', type: 'text', props: { content: 'Positioning and identity frameworks that stand out.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv19-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '24px' },
      childrenComponents: [
        { id: 'srv19-c2-icon', type: 'icon', props: { icon: 'FaLaptopCode', size: '32px', color: '#059669', align: 'left' } },
        { id: 'srv19-c2-title', type: 'heading', props: { content: 'Web Experience', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv19-c2-desc', type: 'text', props: { content: 'Immersive digital storytelling and web apps.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
            <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
            {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {renderLayoutComponents(cards, sectionId)}
          </div>
        </div>
        <div className="mt-12 overflow-hidden rounded-full bg-slate-100 border border-slate-200 py-2.5 select-none pointer-events-none">
          <div className="flex gap-8 whitespace-nowrap animate-pulse text-xs font-black tracking-[0.25em] text-slate-500 justify-center">
            <span>NIKE</span><span>•</span><span>SPOTIFY</span><span>•</span><span>TOKOPEDIA</span><span>•</span><span>GOJEK</span><span>•</span><span>AWWWARDS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
