import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 06 — Nebula Glass Space Stats
 */
export default function Mission06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-6', type: 'badge', props: { content: '✦ INTERSTELLAR MISSION', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'heading-6', type: 'heading', props: { content: 'Mapping the infinite cosmos of play', level: 'h2', fontSize: '50px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-6', type: 'text', props: { content: 'Our mission is to build decentralized universes where every explorer can stake claim to their destiny.', fontSize: '17px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-launch', type: 'button', props: { label: 'Join Mission ✦', href: '#join', variant: 'primary', size: 'large', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-6 w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="flex gap-4 mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-3 gap-6 mt-16 w-full max-w-3xl">
          {[['128K+', 'Explorers'], ['99.9%', 'Uptime'], ['0 gas', 'On Testnet']].map(([n, l]) => (
            <div key={l} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-center">
              <p className="text-3xl font-black text-white">{n}</p>
              <p className="text-xs text-purple-300 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
