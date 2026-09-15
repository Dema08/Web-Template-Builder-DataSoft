import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIÈRE — Agency Portfolio
 * Portfolio agency: headline + marquee klien + grid karya mini.
 * Untuk studio kreatif / freelancer premium.
 */
export default function Hero19({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-19', type: 'badge', props: { content: '● Available for Q3 2026', background: '#ecfdf5', color: '#059669' } },
    { id: 'heading-19', type: 'heading', props: { content: 'We craft brands people remember', level: 'h1', fontSize: '58px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-19', type: 'text', props: { content: 'Strategy, identity & web for ambitious teams. 120+ launches, 14 international awards.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-work', type: 'button', props: { label: 'See Our Work →', href: '#work', variant: 'primary', size: 'large', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-19', type: 'image', props: { src: '', alt: 'Work', width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
            <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
            {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
            <div className="flex flex-wrap gap-3 mt-2">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          </div>
          <div className="rounded-[20px] overflow-hidden shadow-xl border border-slate-100">
            {renderLayoutComponents(img, sectionId)}
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-full bg-slate-100 border border-slate-200 py-2.5 select-none pointer-events-none">
          <div className="flex gap-8 whitespace-nowrap animate-pulse text-xs font-black tracking-[0.25em] text-slate-500 justify-center">
            <span>NIKE</span><span>•</span><span>SPOTIFY</span><span>•</span><span>TOKOPEDIA</span><span>•</span><span>GOJEK</span><span>•</span><span>AWWWARDS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
