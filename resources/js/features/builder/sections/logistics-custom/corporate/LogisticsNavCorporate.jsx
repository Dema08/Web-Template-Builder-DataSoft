import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsNavCorporate
 * Dual-tier enterprise navigation for national logistics corporations.
 * Features live fleet telemetry ticker and hotline dispatch.
 */
export default function LogisticsNavCorporate({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'corp-logo', type: 'heading', props: { content: 'TRANSGO', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.08em' } },
    { id: 'nav-1', type: 'button', props: { label: 'Beranda', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-2', type: 'button', props: { label: 'Layanan Logistik', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-3', type: 'button', props: { label: 'Armada & Kapal', href: '#fleet', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-4', type: 'button', props: { label: 'Koridor Rute', href: '#coverage', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-5', type: 'button', props: { label: 'Simulasi Tarif', href: '#calculator', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-track', type: 'button', props: { label: 'Lacak Kiriman →', href: '#tracking', variant: 'primary', size: 'small', radius: 'lg', background: '#f97316', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50 shadow-2xl">
      {/* Top Industrial Safety Ticker */}
      <div className="bg-[#0b192f] border-b border-slate-800 px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 font-bold text-amber-400 select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              1.480+ ARMADA SIAGA NASIONAL
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:inline-block text-slate-400 select-none">SLA Ketepatan Waktu 99.8%</span>
          </div>
          <div className="flex items-center gap-4 font-semibold select-none">
            <span className="text-orange-400">📞 DISPATCH 24/7: 0800-TRANSGO-B2B</span>
            <span className="hidden sm:inline-block text-slate-400">ISO 9001:2015</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="bg-[#0f223d]/95 backdrop-blur-md border-b border-orange-500/20 px-4 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-orange-500/30 select-none">
              T
            </div>
            <div>
              {renderLayoutComponents(logoComps, sectionId)}
              <span className="text-[10px] tracking-[0.25em] font-bold text-orange-400 uppercase select-none block">
                NATIONAL FREIGHT & SUPPLY CHAIN
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-700/60 rounded-xl px-2 py-1">
            {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
              <span className="text-sm text-slate-300 px-4 py-1.5 font-medium select-none">Beranda</span>
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
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-slate-900 border border-slate-700 flex flex-col gap-2.5 animate-fadeIn">
            <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
              {renderLayoutComponents(menuComps, sectionId)}
            </div>
            {ctaComps.length > 0 && (
              <div className="pt-2 border-t border-slate-700 sm:hidden [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
                {renderLayoutComponents(ctaComps, sectionId)}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
