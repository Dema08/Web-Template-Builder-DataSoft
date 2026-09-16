import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 06 — NEBULA Glass Space + Stats
 * Mirrors Hero06 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv6-badge', type: 'badge', props: { content: '● NEBULA PORTAL LIVE', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'srv6-heading', type: 'heading', props: { content: 'Explore Nebula service sectors', level: 'h2', fontSize: '58px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'srv6-text', type: 'text', props: { content: '128,400 explorers using our digital portals. Missions, rewards, and orbital cloud solutions.', fontSize: '17px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'srv6-card-1',
      type: 'card',
      props: { variant: 'service-glass', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', padding: '28px' },
      childrenComponents: [
        { id: 'srv6-c1-icon', type: 'icon', props: { icon: 'FaRocket', size: '36px', color: '#a5b4fc', align: 'left' } },
        { id: 'srv6-c1-title', type: 'heading', props: { content: 'Orbital Launch', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 8px 0' } },
        { id: 'srv6-c1-desc', type: 'text', props: { content: 'High-speed deployment across global edge clusters.', fontSize: '14px', color: '#c4b5fd', margin: '0' } },
      ],
    },
    {
      id: 'srv6-card-2',
      type: 'card',
      props: { variant: 'service-glass', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', padding: '28px' },
      childrenComponents: [
        { id: 'srv6-c2-icon', type: 'icon', props: { icon: 'FaSatellite', size: '36px', color: '#a5b4fc', align: 'left' } },
        { id: 'srv6-c2-title', type: 'heading', props: { content: 'Telemetry Radar', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 8px 0' } },
        { id: 'srv6-c2-desc', type: 'text', props: { content: 'Real-time monitoring and threat prevention systems.', fontSize: '14px', color: '#c4b5fd', margin: '0' } },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10 max-w-xl mx-auto">
          {[['Explorers', '128.4k'], ['Missions', '3.2k+'], ['Uptime', '99.99%']].map(([l, v]) => (
            <div key={l} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-4 py-4 text-center">
              <p className="text-xl font-black text-white">{v}</p>
              <p className="text-[11px] text-violet-300 uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
