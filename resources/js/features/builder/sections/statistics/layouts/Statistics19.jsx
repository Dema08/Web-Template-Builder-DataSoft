import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIÈRE — Agency Portfolio — Statistics
 * Portfolio agency: angka + marquee klien + kartu karya ringkas.
 * Untuk studio kreatif / freelancer premium.
 */
export default function Statistics19({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat19-badge', type: 'badge', props: { content: '● Available for Q3 2026', background: '#ecfdf5', color: '#059669' } },
    { id: 'stat19-heading', type: 'heading', props: { content: 'Results we can point at', level: 'h2', fontSize: '54px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat19-text', type: 'text', props: { content: 'Strategy, identity & web untuk tim ambisius. 120+ peluncuran, 14 penghargaan internasional.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat19-cta', type: 'button', props: { label: 'See Our Work →', href: '#work', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'stat19-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat19-c1-value', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat19-c1-label', type: 'text', props: { content: 'Peluncuran Brand', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat19-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat19-c2-value', type: 'heading', props: { content: '14', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat19-c2-label', type: 'text', props: { content: 'Penghargaan', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat19-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat19-c3-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat19-c3-label', type: 'text', props: { content: 'Klien Global', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat19-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat19-c4-value', type: 'heading', props: { content: '8', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat19-c4-label', type: 'text', props: { content: 'Tahun Berkarya', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
            <div className="mt-4">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
            {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
            <div className="flex flex-wrap gap-3 mt-1">
              {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {renderLayoutComponents(cards, sectionId)}
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
