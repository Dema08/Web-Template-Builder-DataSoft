import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingNavConglomerate
 * Prestigious multi-industry conglomerate header with live stock ticker, governance menu, and investor CTA.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingNavConglomerate({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'cong-logo', type: 'heading', props: { content: 'NUSANTARA HOLDINGS', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.1em' } },
    { id: 'nav-1', type: 'button', props: { label: 'Tentang Grup', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-2', type: 'button', props: { label: 'Pilar Portofolio', href: '#portfolio', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-3', type: 'button', props: { label: 'Keberlanjutan ESG', href: '#esg', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-4', type: 'button', props: { label: 'Dewan Pimpinan', href: '#leadership', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-5', type: 'button', props: { label: 'Laporan Keuangan', href: '#financials', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-ir', type: 'button', props: { label: 'Investor Relations →', href: '#investor', variant: 'primary', size: 'small', radius: 'lg', background: '#d97706', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50 shadow-2xl">
      {/* Top Conglomerate Stock & Governance Ticker */}
      <div className="bg-[#051329] border-b border-slate-800 px-4 sm:px-6 py-2 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 font-bold text-amber-400 select-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              IDX: NUSH Rp 4.280 (+2.4%)
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <span className="hidden md:inline-block text-slate-400 select-none">Market Cap: IDR 142.8 Triliun</span>
          </div>
          <div className="flex items-center gap-4 font-semibold select-none">
            <span className="text-amber-400">RUPS TAHUNAN & PUBLIC EXPOSE 2026</span>
            <span className="hidden sm:inline-block text-slate-400">ESG Rating: AAA (MSCI)</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="bg-[#091b33]/95 backdrop-blur-md border-b border-amber-500/20 px-4 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20 select-none">
              N
            </div>
            <div>
              {renderLayoutComponents(logoComps, sectionId)}
              <span className="text-[10px] tracking-[0.22em] font-bold text-amber-400 uppercase select-none block">
                STRATEGIC DIVERSIFIED GROUP
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
            {renderLayoutComponents(ctaComps, sectionId)}
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-slate-900 border border-slate-700 flex flex-col gap-2 animate-fadeIn">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
        )}
      </nav>
    </header>
  );
}
