import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndNavEco
 * Green FMCG & Sustainable Eco-Manufacturing Navigation Bar.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function IndNavEco({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'eco-nav-logo', type: 'heading', props: { content: 'ECOPLANT NUSANTARA', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '0.04em' } },
    { id: 'eco-nav-badge', type: 'badge', props: { text: '🌱 100% SOLAR POWERED & BPOM GRADE A', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
    { id: 'eco-nav-1', type: 'button', props: { label: 'Katalog Produk', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'eco-nav-2', type: 'button', props: { label: 'Private Label & OEM', href: '#oem', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'eco-nav-3', type: 'button', props: { label: 'Sertifikasi ESG', href: '#esg', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'eco-nav-4', type: 'button', props: { label: 'Fasilitas Cleanroom', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'eco-nav-cta', type: 'button', props: { label: 'Request Sample Kit 🌱', href: '#oem', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'eco-nav-logo');
  const badge = lc.filter(c => c.id === 'eco-nav-badge');
  const nav1 = lc.filter(c => c.id === 'eco-nav-1');
  const nav2 = lc.filter(c => c.id === 'eco-nav-2');
  const nav3 = lc.filter(c => c.id === 'eco-nav-3');
  const nav4 = lc.filter(c => c.id === 'eco-nav-4');
  const cta = lc.filter(c => c.id === 'eco-nav-cta');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#021f15]/95 backdrop-blur-md border-b border-emerald-500/20 text-emerald-50 shadow-xl">
      {/* Top Eco Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 py-1 px-4 text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-emerald-100 font-semibold tracking-wider">
          <span>🌱 NET-ZERO CARBON EMISSION MANUFACTURING PABRIK 2026</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Kapasitas 1.5 Juta Pcs / Hari</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">Tersertifikasi BPOM, Halal & FSSC 22000</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/30 shrink-0">
            🌱
          </div>
          <div>
            <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            <div className="mt-1 hidden sm:block">{renderLayoutComponents(badge, sectionId)}</div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {renderLayoutComponents(nav1, sectionId)}
          {renderLayoutComponents(nav2, sectionId)}
          {renderLayoutComponents(nav3, sectionId)}
          {renderLayoutComponents(nav4, sectionId)}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {renderLayoutComponents(cta, sectionId)}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-200 hover:text-white focus:outline-none transition shadow-sm"
            aria-label="Toggle Menu"
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
            {renderLayoutComponents(nav1, sectionId)}
            {renderLayoutComponents(nav2, sectionId)}
            {renderLayoutComponents(nav3, sectionId)}
            {renderLayoutComponents(nav4, sectionId)}
          </div>
          <div className="pt-2 border-t border-emerald-900/40 [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
            {renderLayoutComponents(cta, sectionId)}
          </div>
        </div>
      )}
    </header>
  );
}
