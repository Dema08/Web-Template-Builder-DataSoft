import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNavPuskopolda
 * Official Navigation Bar for Pusat Koperasi Kepolisian Daerah (PUSKOPOLDA).
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopNavPuskopolda({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'puskopolda-nav-logo', type: 'heading', props: { content: 'PUSKOPOLDA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#1e40af', letterSpacing: '0.06em' } },
    { id: 'puskopolda-nav-badge', type: 'badge', props: { text: 'PUSAT KOPERASI KEPOLISIAN DAERAH', variant: 'outline', background: '#dbeafe', color: '#1e40af', borderColor: '#bfdbfe' } },
    { id: 'puskopolda-nav-1', type: 'button', props: { label: 'Beranda', href: '#beranda', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
    { id: 'puskopolda-nav-2', type: 'button', props: { label: 'Tentang Kami', href: '#tentang', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
    { id: 'puskopolda-nav-3', type: 'button', props: { label: 'Struktur', href: '#struktur', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
    { id: 'puskopolda-nav-4', type: 'button', props: { label: 'Unit Usaha', href: '#unit-usaha', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
    { id: 'puskopolda-nav-5', type: 'button', props: { label: 'Keanggotaan', href: '#keanggotaan', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
    { id: 'puskopolda-nav-6', type: 'button', props: { label: 'Berita', href: '#berita', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
    { id: 'puskopolda-nav-7', type: 'button', props: { label: 'Dokumen', href: '#dokumen', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
    { id: 'puskopolda-nav-cta', type: 'button', props: { label: 'Daftar Anggota 👮‍♂️', href: '#keanggotaan', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'puskopolda-nav-logo' || (c.type === 'heading' && !String(c.id || '').includes('nav-')));
  const badge = lc.filter(c => c.id === 'puskopolda-nav-badge' || c.type === 'badge');
  const menuComps = lc.filter(c => c.type === 'button' && !String(c.id || '').includes('cta'));
  const ctaComps = lc.filter(c => c.type === 'button' && String(c.id || '').includes('cta'));

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm">
      {/* Top Notice Bar */}
      <div className="bg-[#1e40af] py-1.5 px-4 text-center text-white">
        <div className="flex items-center justify-center gap-4 text-xs font-medium tracking-wide">
          <span>🏛️ BADAN HUKUM NO. 1234/BH/XIV/1998</span>
          <span className="hidden sm:inline text-blue-300">|</span>
          <span className="hidden sm:inline text-blue-100">NIK: 1234567890123456</span>
          <span className="hidden md:inline text-blue-300">|</span>
          <span className="hidden md:inline text-blue-100">Melayani 2.500+ Anggota Korps</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-500/20 shrink-0">
            🛡️
          </div>
          <div>
            <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            <div className="mt-1 hidden sm:block">{renderLayoutComponents(badge, sectionId)}</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 font-medium text-sm text-slate-700">
          {renderLayoutComponents(menuComps, sectionId)}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 focus:outline-none transition cursor-pointer"
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

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl space-y-3">
          {badge.length > 0 && (
            <div className="pb-3 border-b border-slate-100">
              {renderLayoutComponents(badge, sectionId)}
            </div>
          )}
          <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
          {ctaComps.length > 0 && (
            <div className="pt-2 border-t border-slate-100 [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
