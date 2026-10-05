import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNavAgri
 * Agricultural & Production Producers Cooperative Navigation Bar.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function KopNavAgri({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'agri-nav-logo', type: 'heading', props: { content: 'KOPERASI TANI NUSANTARA', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#fef3c7', letterSpacing: '0.04em' } },
    { id: 'agri-nav-badge', type: 'badge', props: { text: '🌾 KOPERASI PRODUSEN & AGRIBISNIS TERPADU', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.45)' } },
    { id: 'agri-nav-1', type: 'button', props: { label: 'Program Kemitraan', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#fde68a' } },
    { id: 'agri-nav-2', type: 'button', props: { label: 'Cold Storage & Logistik', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#fde68a' } },
    { id: 'agri-nav-3', type: 'button', props: { label: 'Katalog Komoditas Ekspor', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#fde68a' } },
    { id: 'agri-nav-4', type: 'button', props: { label: 'Dampak Petani', href: '#impact', variant: 'ghost', size: 'small', background: 'transparent', color: '#fde68a' } },
    { id: 'agri-nav-cta', type: 'button', props: { label: 'Gabung Mitra Tani 🌾', href: '#partner', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'agri-nav-logo');
  const badge = lc.filter(c => c.id === 'agri-nav-badge');
  const nav1 = lc.filter(c => c.id === 'agri-nav-1');
  const nav2 = lc.filter(c => c.id === 'agri-nav-2');
  const nav3 = lc.filter(c => c.id === 'agri-nav-3');
  const nav4 = lc.filter(c => c.id === 'agri-nav-4');
  const cta = lc.filter(c => c.id === 'agri-nav-cta');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1c1206]/95 backdrop-blur-md border-b border-amber-600/30 text-amber-50 shadow-xl">
      {/* Top Commodity Trade status bar */}
      <div className="bg-[#120b03] border-b border-amber-800/40 py-1 px-4 text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-amber-300">
          <span>🌾 SERAP PANEN HARGA WAJAR & OFF-TAKER EKSPOR TERJAMIN</span>
          <span className="hidden sm:inline text-amber-700">|</span>
          <span className="hidden sm:inline text-amber-100">12.000 Hektar Lahan Binaan</span>
          <span className="hidden md:inline text-amber-700">|</span>
          <span className="hidden md:inline text-yellow-400">Distribusi 350+ Ton Komoditas / Hari</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/25 shrink-0">
            🌾
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
            className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-800/60 text-amber-200 hover:text-white focus:outline-none transition shadow-sm"
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
        <div className="lg:hidden border-t border-amber-900/40 bg-[#1c1206]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badge.length > 0 && (
            <div className="pb-3 border-b border-amber-900/50">
              {renderLayoutComponents(badge, sectionId)}
            </div>
          )}
          <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
            {renderLayoutComponents(nav1, sectionId)}
            {renderLayoutComponents(nav2, sectionId)}
            {renderLayoutComponents(nav3, sectionId)}
            {renderLayoutComponents(nav4, sectionId)}
          </div>
          <div className="pt-2 border-t border-amber-900/40 [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
            {renderLayoutComponents(cta, sectionId)}
          </div>
        </div>
      )}
    </header>
  );
}
