import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 19 — LUMIÈRE Agency Portfolio Vision
 * Mirrors Hero19 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision19({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v19-badge', type: 'badge', props: { content: '● Available for Q3 2026 Vision Projects', background: '#ecfdf5', color: '#059669' } },
    { id: 'v19-heading', type: 'heading', props: { content: 'We craft visionary brands people remember', level: 'h2', fontSize: '58px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'v19-text', type: 'text', props: { content: 'Strategy, identity & web for ambitious teams. 120+ launches, 14 international awards.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'v19-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', padding: '20px', borderWidth: '1px', borderColor: '#a7f3d0', shadow: 'sm' },
      childrenComponents: [
        { id: 'v19-c1-title', type: 'heading', props: { content: 'Strategic Branding', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' } },
        { id: 'v19-c1-desc', type: 'text', props: { content: 'Membangun identitas kuat yang membekas di benak audiens.', fontSize: '13px', color: '#64748b', margin: '0' } },
      ],
    },
    { id: 'v19-img', type: 'image', props: { src: '', alt: 'Agency Vision', width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' } },
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
            <div className="mt-2">
              {renderLayoutComponents(copy.filter(c => c.type === 'card'), sectionId)}
            </div>
          </div>
          <div className="rounded-[20px] overflow-hidden shadow-xl border border-slate-100">
            {renderLayoutComponents(img, sectionId)}
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-full bg-slate-100 border border-slate-200 py-2.5 select-none pointer-events-none">
          <div className="flex gap-8 whitespace-nowrap animate-pulse text-xs font-black tracking-[0.25em] text-slate-500 justify-center">
            <span>VISION</span><span>•</span><span>STRATEGY</span><span>•</span><span>BRANDING</span><span>•</span><span>SCALE</span><span>•</span><span>AWWWARDS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
