import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NEBULA — Glass Space Stats — Statistics
 * Luar angkasa: orb animasi + kartu statistik kaca + CTA ungu.
 * Untuk AI / web3 / gaming.
 */
export default function Statistics06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat6-badge', type: 'badge', props: { content: '● MAINNET LIVE', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'stat6-heading', type: 'heading', props: { content: 'The universe by the numbers', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat6-text', type: 'text', props: { content: '128.400 explorer sudah di dalam. Misi, reward, dan semesta yang tidak pernah tidur.', fontSize: '17px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat6-cta', type: 'button', props: { label: 'Launch App ✦', href: '#app', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    {
      id: 'stat6-card-1',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.25)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat6-c1-value', type: 'heading', props: { content: '128.400', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat6-c1-label', type: 'text', props: { content: 'Explorers', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat6-card-2',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.25)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat6-c2-value', type: 'heading', props: { content: '3.200+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat6-c2-label', type: 'text', props: { content: 'Missions', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat6-card-3',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.25)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat6-c3-value', type: 'heading', props: { content: '$4.2M', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat6-c3-label', type: 'text', props: { content: 'Rewards Paid', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat6-card-4',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.25)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat6-c4-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat6-c4-label', type: 'text', props: { content: 'Regions Online', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-cyan-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto text-center">
        {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
        <div className="mt-5">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-1">
          {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="flex items-center justify-center gap-3 mt-8 select-none pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-violet-300 uppercase tracking-widest">Mainnet status: all systems nominal</span>
        </div>
      </div>
    </section>
  );
}
