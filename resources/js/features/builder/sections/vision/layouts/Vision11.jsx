import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 11 — IRIS Gradient Mesh Playground
 * Mirrors Hero11 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v11-badge', type: 'badge', props: { content: '✦ New: Iris AI Vision Canvas', background: '#ffffff', color: '#7c3aed' } },
    { id: 'v11-heading', type: 'heading', props: { content: 'Design vision at the speed of thought', level: 'h2', fontSize: '60px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v11-text', type: 'text', props: { content: 'Iris turns rough strategic concepts into polished visual layouts — colors, type, and frameworks in seconds.', fontSize: '18px', color: '#ddd6fe', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'v11-card-1',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)' },
      childrenComponents: [
        { id: 'v11-c1-title', type: 'heading', props: { content: 'Generative Layouts', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' } },
        { id: 'v11-c1-desc', type: 'text', props: { content: 'Instant AI-powered transformation of brand frameworks.', fontSize: '14px', color: '#ddd6fe', margin: '0' } },
      ],
    },
    {
      id: 'v11-card-2',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)' },
      childrenComponents: [
        { id: 'v11-c2-title', type: 'heading', props: { content: 'Seamless Synergy', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' } },
        { id: 'v11-c2-desc', type: 'text', props: { content: 'Unified color palettes and typography across teams.', fontSize: '14px', color: '#ddd6fe', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#1e1b4b]">
      <div className="pointer-events-none absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-fuchsia-500/50 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-400/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-400/30 blur-3xl" />
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-block rounded-full bg-white/15 backdrop-blur border border-white/25 px-1 py-1">
          {renderLayoutComponents(badge, sectionId)}
        </div>
        <div className="mt-6">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          {['#f0abfc', '#67e8f9', '#fcd34d', '#a5b4fc'].map((c, i) => (
            <span key={i} className="w-8 h-8 rounded-full border-2 border-white/60 -ml-3 first:ml-0" style={{ background: c }} />
          ))}
          <span className="ml-2 text-xs text-violet-200 select-none">Joined by 40,000 vision designers</span>
        </div>
      </div>
    </section>
  );
}
