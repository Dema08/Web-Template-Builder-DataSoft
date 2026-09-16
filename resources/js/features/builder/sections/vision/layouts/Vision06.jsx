import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 06 — NEBULA Glass Space + Stats
 * Mirrors Hero06 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v6-badge', type: 'badge', props: { content: '● COSMIC VISION 2026', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'v6-heading', type: 'heading', props: { content: 'Enter the Nebula of infinite vision', level: 'h2', fontSize: '58px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v6-text', type: 'text', props: { content: '128,400 visionaries already aligned. Missions, ecosystems, and a future that never stops expanding.', fontSize: '17px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'v6-card-1',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)' },
      childrenComponents: [
        { id: 'v6-c1-title', type: 'heading', props: { content: 'Quantum Scalability', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' } },
        { id: 'v6-c1-desc', type: 'text', props: { content: 'Decentralized architecture designed for planetary scale.', fontSize: '14px', color: '#c4b5fd', margin: '0' } },
      ],
    },
    {
      id: 'v6-card-2',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)' },
      childrenComponents: [
        { id: 'v6-c2-title', type: 'heading', props: { content: 'Autonomous Ecosystems', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' } },
        { id: 'v6-c2-desc', type: 'text', props: { content: 'Self-sustaining networks powered by next-gen AI.', fontSize: '14px', color: '#c4b5fd', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-cyan-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-5xl mx-auto text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10 max-w-xl mx-auto">
          {[['Visionaries', '128.4k'], ['Ecosystems', '3.2k+'], ['Impact', '$4.2B']].map(([l, v]) => (
            <div key={l} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-4 py-4">
              <p className="text-xl font-black text-white">{v}</p>
              <p className="text-[11px] text-violet-300 uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
