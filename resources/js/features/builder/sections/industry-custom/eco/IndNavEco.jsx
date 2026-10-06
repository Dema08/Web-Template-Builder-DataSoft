import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndNavEco
 * Sustainable Industry & Green Technology Navigation Bar.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function IndNavEco({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'eco-nav-logo', type: 'heading', props: { content: 'ECOTECH NUSANTARA', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#ecfdf5', letterSpacing: '0.04em' } },
    { id: 'eco-nav-badge', type: 'badge', props: { text: '🌿 SERTIFIKASI NET-ZERO EMISSION 2026', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
    { id: 'eco-nav-1', type: 'button', props: { label: 'Solusi Karbon', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'eco-nav-2', type: 'button', props: { label: 'Teknologi Sirkular', href: '#tech', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'eco-nav-3', type: 'button', props: { label: 'Audit ESG & Dampak', href: '#impact', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'eco-nav-4', type: 'button', props: { label: 'Riset & Sertifikasi', href: '#specs', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'eco-nav-cta', type: 'button', props: { label: 'Konsultasi Green Hub 🌿', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.type === 'heading' || c.type === 'image' || c.id === 'eco-nav-logo');
  const badge = lc.filter(c => c.type === 'badge' || c.id === 'eco-nav-badge');
  const menuComps = lc.filter(c => c.type === 'button' && !String(c.id || '').includes('cta'));
  const ctaComps = lc.filter(c => c.type === 'button' && String(c.id || '').includes('cta'));

  return (
    <header className="sticky top-0 z-50 w-full bg-[#021f15]/95 backdrop-blur-md border-b border-emerald-600/30 text-emerald-50 shadow-xl">
      {/* Top ESG Status ticker */}
      <div className="bg-[#01140e] border-b border-emerald-900/60 py-1 px-4 text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-emerald-400">
          <span>🌱 100% RECYCLABLE & LOW-CARBON PROCESS GUARANTEE</span>
          <span className="hidden sm:inline text-emerald-700">|</span>
          <span className="hidden sm:inline text-emerald-300">ISO 14001 & ISO 50001 Certified</span>
          <span className="hidden md:inline text-emerald-700">|</span>
          <span className="hidden md:inline text-teal-300">Offset 48.000 Ton CO2 / Tahun</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/25 shrink-0">
            🌱
          </div>
          <div>
            <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            <div className="mt-1 hidden sm:block">{renderLayoutComponents(badge, sectionId)}</div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {renderLayoutComponents(menuComps, sectionId)}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-200 hover:text-white focus:outline-none transition shadow-sm cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-emerald-900/40 bg-[#021f15]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badge.length > 0 && (
            <div className="pb-3 border-b border-emerald-900/50">
              {renderLayoutComponents(badge, sectionId)}
            </div>
          )}
          <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
          {ctaComps.length > 0 && (
            <div className="pt-2 border-t border-emerald-900/40 [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
