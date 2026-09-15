import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NEBULA — Glass Space + Stats
 * Luar angkasa: orb animasi + kartu statistik kaca + CTA ungu.
 * Untuk AI / web3 / gaming.
 */
export default function Hero06({ components = [], sectionId = null }) {
  const [launches] = useState('128.400');

  const defaultComponents = [
    { id: 'badge-6', type: 'badge', props: { content: '● MAINNET LIVE', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'heading-6', type: 'heading', props: { content: 'Enter the Nebula of play', level: 'h1', fontSize: '58px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-6', type: 'text', props: { content: '128,400 explorers already inside. Missions, rewards, and a universe that never sleeps.', fontSize: '17px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-launch', type: 'button', props: { label: 'Launch App ✦', href: '#app', variant: 'primary', size: 'large', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    { id: 'btn-explore', type: 'button', props: { label: 'Explore Missions', href: '#missions', variant: 'outline', size: 'large', radius: 'full', background: '#8b5cf6', color: '#c4b5fd' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-cyan-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-4xl mx-auto text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-5">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10 max-w-xl mx-auto">
          {[['Explorers', launches], ['Missions', '3.200+'], ['Rewards', '$4.2M']].map(([l, v]) => (
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
