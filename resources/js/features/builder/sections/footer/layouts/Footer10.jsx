import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NEBULA — Glassmorphism Space Footer
 * Orb gradient animasi + kartu kaca + status live.
 * Untuk AI / web3 / gaming.
 */
export default function Footer10({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-10', type: 'heading', props: { content: 'NEBULA ✦', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-10', type: 'text', props: { content: 'Missions, rewards & a universe that never sleeps.', fontSize: '14px', color: '#a5b4fc', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-missions', type: 'button', props: { label: 'Missions', href: '#missions', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'link-rewards', type: 'button', props: { label: 'Rewards', href: '#rewards', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'link-guild', type: 'button', props: { label: 'Guild', href: '#guild', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'cta-launch', type: 'button', props: { label: 'Launch App ✦', href: '#app', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    { id: 'social-10', type: 'social', props: { platforms: ['twitter', 'discord', 'youtube'], size: 'medium' } },
    { id: 'copy-10', type: 'text', props: { content: '© 2026 Nebula Universe. 128.400 explorers inside.', fontSize: '12px', color: '#6d6fa8', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const socialComps = layoutComponents.filter(c => c.type === 'social');
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="relative bg-slate-950 px-6 pt-14 pb-8 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
            <div className="mt-1 flex items-center gap-2 select-none pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-bold text-emerald-300">MAINNET LIVE</span>
            </div>
            <div className="mt-3">{renderLayoutComponents(socialComps, sectionId)}</div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-violet-300 mb-3 select-none">UNIVERSE</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-violet-200 cursor-default select-none">Missions</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-violet-300 mb-3 select-none">STATS</p>
            <div className="flex flex-col gap-2">
              {[['128.400', 'Explorers'], ['3.200+', 'Missions']].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-white/5 border border-white/10 backdrop-blur px-3 py-2">
                  <p className="text-sm font-black text-white">{v}</p>
                  <p className="text-[10px] text-violet-300 uppercase tracking-widest">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-violet-300 select-none">ENTER</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-slate-500 cursor-default select-none">© 2026 Nebula.</span>)}
        </div>
      </div>
    </footer>
  );
}
