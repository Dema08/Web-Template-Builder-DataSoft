import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NEBULA — Glass Space Story
 * Luar angkasa: orb animasi + kartu kaca + misi.
 * Untuk AI / web3 / gaming.
 */
export default function About10({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-10', type: 'badge', props: { content: '● OUR UNIVERSE', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'heading-10', type: 'heading', props: { content: 'A universe built by explorers', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-10', type: 'text', props: { content: '128,400 explorers. One shared universe of missions, guilds, and rewards that never sleep.', fontSize: '16px', color: '#a5b4fc', align: 'center', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-join', type: 'button', props: { label: 'Join Universe ✦', href: '#join', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-cyan-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-3xl mx-auto text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-1">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-3 gap-3 mt-10 select-none pointer-events-none">
          {[['Explorers', '128.400'], ['Missions', '3.200+'], ['Rewards', '$4.2M']].map(([l, v]) => (
            <div key={l} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-4 py-5">
              <p className="text-xl font-black text-white">{v}</p>
              <p className="text-[11px] text-violet-300 uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
