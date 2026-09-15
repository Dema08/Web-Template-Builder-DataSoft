import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NEBULA — Glassmorphism Space
 * Navbar kaca blur dengan orb gradient + badge notifikasi animasi.
 * Cocok untuk AI / web3 / gaming futuristik.
 */
export default function Navbar10({ components = [], sectionId = null }) {
  const [notif, setNotif] = useState(3);

  const defaultComponents = [
    { id: 'logo-10', type: 'heading', props: { content: 'NEBULA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.2em' } },
    { id: 'nav-explore', type: 'button', props: { label: 'Explore', href: '#explore', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'nav-missions', type: 'button', props: { label: 'Missions', href: '#missions', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'nav-community', type: 'button', props: { label: 'Community', href: '#community', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'cta-launch', type: 'button', props: { label: 'Launch App', href: '#app', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <div className="px-4 sm:px-6 pt-4">
      <nav className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl border border-violet-400/30 bg-slate-950/60 backdrop-blur-2xl px-5 py-3 shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)]">
        <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full bg-violet-600/40 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-cyan-500/30 blur-3xl animate-pulse" />
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-violet-500/50 select-none" />
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setNotif(0); }}
                className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center animate-bounce select-none"
                title="Clear notifications"
              >
                {notif}
              </button>
            </div>
            {renderLayoutComponents(logoComps, sectionId)}
          </div>
          <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-1.5 py-1">
            {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
              <span className="text-sm font-semibold text-violet-200 px-4 py-1.5 cursor-default select-none">Explore</span>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/30 rounded-full px-2.5 py-1 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> MAINNET LIVE
            </span>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
      </nav>
    </div>
  );
}
