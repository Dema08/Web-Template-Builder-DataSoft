import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNavDigital
 * Modern FinTech & Digital Savings-Loans Cooperative Navigation Bar.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function KopNavDigital({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'kop-nav-logo', type: 'heading', props: { content: 'KOPERASI SIMPAN PINJAM DIGITAL', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.04em' } },
    { id: 'kop-nav-badge', type: 'badge', props: { text: '🏛️ DIAWASI KEMENKOP UKM RI • TERDAFTAR RESMI', variant: 'outline', background: 'rgba(37,99,235,0.2)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.45)' } },
    { id: 'kop-nav-1', type: 'button', props: { label: 'Simpanan Digital', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#bfdbfe' } },
    { id: 'kop-nav-2', type: 'button', props: { label: 'Pinjaman Modal Usaha', href: '#loan-calc', variant: 'ghost', size: 'small', background: 'transparent', color: '#bfdbfe' } },
    { id: 'kop-nav-3', type: 'button', props: { label: 'Kalkulator SHU', href: '#loan-calc', variant: 'ghost', size: 'small', background: 'transparent', color: '#bfdbfe' } },
    { id: 'kop-nav-4', type: 'button', props: { label: 'Laporan Keuangan', href: '#governance', variant: 'ghost', size: 'small', background: 'transparent', color: '#bfdbfe' } },
    { id: 'kop-nav-cta', type: 'button', props: { label: 'Buka Rekening Anggota ✨', href: '#register', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.type === 'heading' || c.type === 'image' || c.id === 'kop-nav-logo');
  const badge = lc.filter(c => c.type === 'badge' || c.id === 'kop-nav-badge');
  const menuComps = lc.filter(c => c.type === 'button' && !String(c.id || '').includes('cta'));
  const ctaComps = lc.filter(c => c.type === 'button' && String(c.id || '').includes('cta'));

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050b1a]/95 backdrop-blur-md border-b border-blue-600/30 text-white shadow-2xl">
      {/* Security & Regulator Top Strip */}
      <div className="bg-[#020612] border-b border-blue-900/50 py-1 px-4 text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-blue-300">
          <span>🔒 ENKRIPSI 256-BIT TINGKAT PERBANKAN</span>
          <span className="hidden sm:inline text-blue-700">|</span>
          <span className="hidden sm:inline text-slate-300">Sertifikasi ISO 27001</span>
          <span className="hidden md:inline text-blue-700">|</span>
          <span className="hidden md:inline text-emerald-400">Total Aset Kelolaan: Rp 280+ Miliar</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30 shrink-0">
            🏛️
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
            className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-200 hover:text-white focus:outline-none transition shadow-sm cursor-pointer"
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
        <div className="lg:hidden border-t border-blue-900/40 bg-[#050b1a]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badge.length > 0 && (
            <div className="pb-3 border-b border-blue-900/50">
              {renderLayoutComponents(badge, sectionId)}
            </div>
          )}
          <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
          {ctaComps.length > 0 && (
            <div className="pt-2 border-t border-blue-900/40 [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
