import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingNavIndustrial
 * Heavy industry & advanced manufacturing holding header — dark titanium theme with amber accents.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingNavIndustrial({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'ind-logo', type: 'heading', props: { content: 'SOVEREIGN INDUSTRIAL', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.08em' } },
    { id: 'nav-i1', type: 'button', props: { label: 'Divisi Industri', href: '#divisions', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-i2', type: 'button', props: { label: 'Kapasitas Pabrik', href: '#scale', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-i3', type: 'button', props: { label: 'Standar K3 & Mutu', href: '#safety', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-i4', type: 'button', props: { label: 'Jaringan Ekspor', href: '#footprint', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-i5', type: 'button', props: { label: 'Tata Kelola', href: '#governance', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-vendor', type: 'button', props: { label: 'Portal Vendor & B2B →', href: '#procurement', variant: 'primary', size: 'small', radius: 'lg', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#020617', fontWeight: '800' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Industrial Safety & ESG Compliance Strip */}
      <div className="bg-slate-950 text-slate-400 px-4 sm:px-6 py-2 text-xs border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 font-semibold">
            <span className="flex items-center gap-2 text-emerald-400 select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SAFETY FIRST: ZERO LTI (LOST TIME INJURY) RECORD 2025
            </span>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <span className="hidden md:inline-block text-slate-500 select-none">12 Mega Fasilitas Manufaktur & Smelter</span>
          </div>
          <div className="flex items-center gap-4 select-none">
            <span className="text-amber-400 font-bold">ISO 9001 • ISO 14001 • ISO 45001 • ISO 55001</span>
            <span className="hidden sm:inline-block text-slate-500">Export ke 42 Negara</span>
          </div>
        </div>
      </div>

      {/* Main Dark Industrial Navbar */}
      <nav className="border-b border-slate-800 px-4 sm:px-6 py-3.5 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/30 select-none">
              S
            </div>
            <div>
              {renderLayoutComponents(logoComps, sectionId)}
              <span className="text-[10px] tracking-[0.2em] font-bold text-amber-500 uppercase select-none block">
                HEAVY INDUSTRY & INFRASTRUCTURE HOLDING
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-800/60 border border-slate-700/50 rounded-xl px-2 py-1">
            {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
              <span className="text-sm text-slate-300 px-4 py-1.5 font-medium select-none">Divisi</span>
            )}
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700"
              aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col gap-2.5 backdrop-blur-md">
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
