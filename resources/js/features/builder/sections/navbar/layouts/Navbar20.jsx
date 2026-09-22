import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AETHER — Ultra Premium Finale
 * Mahakarya: aurora background animasi + glass nav + progress scroll
 * + mega menu hover + CTA shimmer. Penutup koleksi 20 navbar.
 */
export default function Navbar20({ components = [], sectionId = null }) {
  const [mega, setMega] = useState(false);
  const [progress] = useState(32);

  const defaultComponents = [
    { id: 'logo-20', type: 'heading', props: { content: 'AETHER', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.25em' } },
    { id: 'nav-platform', type: 'button', props: { label: 'Platform', href: '#platform', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-solutions', type: 'button', props: { label: 'Solutions', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-enterprise', type: 'button', props: { label: 'Enterprise', href: '#enterprise', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Trial ✦', href: '#trial', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  const hasImageLogo = logoComps.some(c => c.type === 'image');

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 overflow-hidden">
        <div className="absolute -top-16 left-1/4 w-96 h-96 rounded-full bg-indigo-500/25 blur-3xl animate-pulse" />
        <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />
      </div>
      <nav
        className="sticky top-0 z-50 px-4 sm:px-6 pt-4"
        onMouseLeave={() => setMega(false)}
      >
        <div className="max-w-6xl mx-auto rounded-2xl border border-white/15 bg-slate-950/70 backdrop-blur-2xl px-5 py-3 shadow-[0_24px_70px_-20px_rgba(99,102,241,0.55)]">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 shrink-0">
              {!hasImageLogo && (
                <div className="relative w-9 h-9 shrink-0">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-cyan-300 animate-spin select-none" style={{ animationDuration: '6s' }} />
                  <div className="absolute inset-[3px] rounded-[9px] bg-slate-950 flex items-center justify-center text-white text-sm font-black select-none">Æ</div>
                </div>
              )}
              {renderLayoutComponents(logoComps, sectionId)}
            </div>
            <div className="hidden lg:flex items-center gap-1" onMouseEnter={() => setMega(true)}>
              {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
                <span className="text-sm font-semibold text-slate-200 px-4 py-2 cursor-default select-none">Platform</span>
              )}
              <span className="text-[9px] font-black tracking-widest text-cyan-300 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-2 py-0.5 ml-1 select-none">NEW</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:block text-[11px] font-semibold text-slate-400 select-none">v4.2</span>
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
          </div>
          <div className={`overflow-hidden transition-all duration-500 ${mega ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-3 gap-2 pb-1" onClick={(e) => e.stopPropagation()}>
              {[
                ['⚡', 'Performance', 'Edge global 99.99%'],
                ['🛡', 'Security', 'SOC2 + ISO 27001'],
                ['◈', 'Integrations', '200+ apps siap'],
              ].map(([icon, title, desc]) => (
                <div key={title} className="rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition select-none">
                  <p className="text-lg">{icon}</p>
                  <p className="text-xs font-bold text-white mt-1">{title}</p>
                  <p className="text-[10px] text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-2 h-[3px] rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </nav>
    </div>
  );
}
