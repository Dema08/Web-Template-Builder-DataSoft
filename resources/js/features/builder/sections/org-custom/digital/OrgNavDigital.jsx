import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgNavDigital
 * Tech-forward cyber navbar for digital community — deep purple / cyan neon.
 * Fully supports right-inspector selection and property editing.
 */
export default function OrgNavDigital({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'dig-logo', type: 'heading', props: { content: 'KOMUNITAS INOVASI DIGITAL', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '0.04em' } },
    { id: 'nav-dig1', type: 'button', props: { label: 'Komunitas', href: '#community', variant: 'ghost', size: 'small', background: 'transparent', color: '#67e8f9' } },
    { id: 'nav-dig2', type: 'button', props: { label: 'Workshop & Bootcamp', href: '#events', variant: 'ghost', size: 'small', background: 'transparent', color: '#67e8f9' } },
    { id: 'nav-dig3', type: 'button', props: { label: 'Proyek Kolaborasi', href: '#projects', variant: 'ghost', size: 'small', background: 'transparent', color: '#67e8f9' } },
    { id: 'nav-dig4', type: 'button', props: { label: 'Blog & Insight', href: '#blog', variant: 'ghost', size: 'small', background: 'transparent', color: '#67e8f9' } },
    { id: 'cta-dig', type: 'button', props: { label: 'Join Community ⚡', href: '#join', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50 w-full bg-[#040411]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-950/40">
      {/* Cyber Top Hackathon Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0d0d2b] via-[#15153f] to-[#0d0d2b] border-b border-cyan-500/20 px-4 py-1.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs gap-2">
          <div className="flex items-center gap-2 text-cyan-300 font-semibold">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/40 text-[10px] font-black text-cyan-300 animate-pulse">
              LIVE
            </span>
            <span>HACKATHON NASIONAL 2026: TOTAL PRIZE POOL RP 500 JUTA</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-indigo-300">
            <span>⚡ 28.000+ Active Builders</span>
            <span className="text-indigo-700">|</span>
            <span className="text-cyan-400 font-medium">Discord 24/7 Community Active</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/30">
            <div className="w-full h-full bg-[#07071c] rounded-[10px] flex items-center justify-center text-cyan-300 font-black text-lg">
              ⚡
            </div>
          </div>
          <div className="flex flex-col">
            <div className="leading-tight">{renderLayoutComponents(logoComps, sectionId)}</div>
            <span className="text-[10px] text-cyan-400/80 font-bold tracking-widest uppercase">TECH & DEVELOPER NETWORK</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0b0b24] border border-cyan-500/20 shadow-inner">
          {renderLayoutComponents(menuComps, sectionId)}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
          <button
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-all cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-[#090920] border-t border-cyan-500/20 space-y-3">
          <div className="flex flex-col gap-2">{renderLayoutComponents(menuComps, sectionId)}</div>
          <div className="pt-2 border-t border-indigo-900">{renderLayoutComponents(ctaComps, sectionId)}</div>
        </div>
      )}
    </header>
  );
}
