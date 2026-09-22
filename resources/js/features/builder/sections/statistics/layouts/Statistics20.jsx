import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AETHER — Ultra Premium Finale — Statistics
 * Penutup koleksi: aurora + glass + progress bar + mega metrics.
 * Statistik paling mewah dari 20 variasi.
 */
export default function Statistics20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat20-badge', type: 'badge', props: { content: '✦ AETHER 4.2 — NOW LIVE', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'stat20-heading', type: 'heading', props: { content: 'One platform. Infinite scale.', level: 'h2', fontSize: '60px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat20-text', type: 'text', props: { content: 'The operating system for ambitious teams — angka yang tumbuh bersama skala bisnis Anda.', fontSize: '18px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat20-cta', type: 'button', props: { label: 'Start Trial ✦', href: '#trial', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    {
      id: 'stat20-card-1',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat20-c1-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat20-c1-label', type: 'text', props: { content: 'Edge Regions', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat20-card-2',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat20-c2-value', type: 'heading', props: { content: '200+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat20-c2-label', type: 'text', props: { content: 'Integrations', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat20-card-3',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat20-c3-value', type: 'heading', props: { content: '99,99%', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat20-c3-label', type: 'text', props: { content: 'Uptime Platform', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat20-card-4',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat20-c4-value', type: 'heading', props: { content: '12.000', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat20-c4-label', type: 'text', props: { content: 'Tim Aktif', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto text-center">
        {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
        <div className="mt-6">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-1">
          {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="max-w-2xl mx-auto mt-8 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300" />
        </div>
        <div className="grid grid-cols-3 gap-3 mt-12 max-w-2xl mx-auto">
          {[
            ['⚡', 'Edge Global', '40 regions'],
            ['🛡', 'Enterprise', 'SOC2 ready'],
            ['◈', 'Integrations', '200+ apps'],
          ].map(([icon, t, d]) => (
            <div key={t} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-5 hover:bg-white/10 transition select-none pointer-events-none">
              <p className="text-2xl">{icon}</p>
              <p className="text-sm font-bold text-white mt-2">{t}</p>
              <p className="text-[11px] text-slate-400">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

