import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNavSyariah
 * Islamic Sharia Savings & Financing Cooperative (KSPPS / BMT) navigation bar.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function KopNavSyariah({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'syariah-nav-logo', type: 'heading', props: { content: 'KSPPS BMT AMANAH NUSANTARA', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '0.04em' } },
    { id: 'syariah-nav-badge', type: 'badge', props: { text: '⚖️ DIAWASI DEWAN PENGAWAS SYARIAH & KEMENKOP', variant: 'outline', background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: 'rgba(234,179,8,0.45)' } },
    { id: 'syariah-nav-1', type: 'button', props: { label: 'Simpanan Syariah', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'syariah-nav-2', type: 'button', props: { label: 'Pembiayaan Usaha', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'syariah-nav-3', type: 'button', props: { label: 'Laporan SHU & Zakat', href: '#shu', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'syariah-nav-4', type: 'button', props: { label: 'Kantor Cabang', href: '#register', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'syariah-nav-cta', type: 'button', props: { label: 'Portal Anggota 🕌', href: '#register', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #059669, #047857)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'syariah-nav-logo');
  const badge = lc.filter(c => c.id === 'syariah-nav-badge');
  const nav1 = lc.filter(c => c.id === 'syariah-nav-1');
  const nav2 = lc.filter(c => c.id === 'syariah-nav-2');
  const nav3 = lc.filter(c => c.id === 'syariah-nav-3');
  const nav4 = lc.filter(c => c.id === 'syariah-nav-4');
  const cta = lc.filter(c => c.id === 'syariah-nav-cta');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#022417]/95 backdrop-blur-md border-b border-emerald-600/30 text-emerald-50 shadow-xl">
      {/* Top Sharia trust bar */}
      <div className="bg-gradient-to-r from-emerald-900 via-[#033b26] to-emerald-950 py-1 px-4 text-center border-b border-emerald-700/30">
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-emerald-200 font-semibold tracking-wider">
          <span>🕌 AKAD MUDHARABAH & MURABAHAH BEBAS RIBA</span>
          <span className="hidden sm:inline text-emerald-500">|</span>
          <span className="hidden sm:inline">Aset Kelolaan Rp 180+ Miliar</span>
          <span className="hidden md:inline text-emerald-500">|</span>
          <span className="hidden md:inline text-amber-300">Nisbah Bagi Hasil Kompetitif & Berkah</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Cert Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20 shrink-0">
            🕌
          </div>
          <div>
            <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            <div className="mt-1 hidden sm:block">{renderLayoutComponents(badge, sectionId)}</div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {renderLayoutComponents(nav1, sectionId)}
          {renderLayoutComponents(nav2, sectionId)}
          {renderLayoutComponents(nav3, sectionId)}
          {renderLayoutComponents(nav4, sectionId)}
        </nav>

        {/* Desktop CTA Button */}
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
        <div className="lg:hidden border-t border-emerald-900/40 bg-[#022417]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
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
