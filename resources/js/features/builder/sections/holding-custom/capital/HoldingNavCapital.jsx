import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingNavCapital
 * High-finance venture capital & private equity holding header with live IRR ticker and LP login.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingNavCapital({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'cap-logo', type: 'heading', props: { content: 'VANGUARD APEX', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.12em' } },
    { id: 'nav-c1', type: 'button', props: { label: 'Fund Overview', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#d1d5db' } },
    { id: 'nav-c2', type: 'button', props: { label: 'Unicorn Portfolio', href: '#portfolio', variant: 'ghost', size: 'small', background: 'transparent', color: '#d1d5db' } },
    { id: 'nav-c3', type: 'button', props: { label: 'Investment Thesis', href: '#thesis', variant: 'ghost', size: 'small', background: 'transparent', color: '#d1d5db' } },
    { id: 'nav-c4', type: 'button', props: { label: 'Partners & Team', href: '#partners', variant: 'ghost', size: 'small', background: 'transparent', color: '#d1d5db' } },
    { id: 'nav-c5', type: 'button', props: { label: 'LP Network', href: '#syndicate', variant: 'ghost', size: 'small', background: 'transparent', color: '#d1d5db' } },
    { id: 'cta-pitch', type: 'button', props: { label: 'Submit Pitch Deck →', href: '#inquiry', variant: 'primary', size: 'small', radius: 'full', background: '#10b981', color: '#042f2e', fontWeight: '800' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50 shadow-2xl">
      {/* Top Fund Telemetry Ticker */}
      <div className="bg-[#050505] border-b border-emerald-950 px-4 sm:px-6 py-2 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 font-bold text-emerald-400 select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              FUND IV ACTIVE: $1.2B DEPLOYMENT STAGE
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <span className="hidden md:inline-block text-slate-400 select-none">Historic Net MOIC: 3.8x | 18 IPOs/Exits</span>
          </div>
          <div className="flex items-center gap-4 font-semibold select-none">
            <span className="text-cyan-400">LP PORTAL LOGIN 🔒</span>
            <span className="hidden sm:inline-block text-slate-400">Singapore • Jakarta • Silicon Valley</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="bg-[#09090b]/95 backdrop-blur-md border-b border-emerald-500/20 px-4 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20 select-none">
              V
            </div>
            <div>
              {renderLayoutComponents(logoComps, sectionId)}
              <span className="text-[10px] tracking-[0.25em] font-bold text-emerald-400 uppercase select-none block">
                VENTURE & PRIVATE EQUITY HOLDING
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1">
            {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
              <span className="text-sm text-slate-300 px-4 py-1.5 font-medium select-none">Portfolio</span>
            )}
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700"
              aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col gap-2.5 animate-fadeIn">
            <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
              {renderLayoutComponents(menuComps, sectionId)}
            </div>
            {ctaComps.length > 0 && (
              <div className="pt-2 border-t border-slate-800 sm:hidden [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
                {renderLayoutComponents(ctaComps, sectionId)}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
