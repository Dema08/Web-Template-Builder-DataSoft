import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNavDompetkita — Header & Navigation Layer
 * Responsive: Clean mobile hamburger & dropdown, full desktop navbar.
 */
export default function KopNavDompetkita({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'dompet-nav-logo', type: 'heading', props: { content: 'KOPERASI DOMPETKITA BERSAMA', level: 'h2', fontSize: '15px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.03em' } },
    { id: 'dompet-nav-1', type: 'button', props: { label: 'Visi', href: '#misi', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-2', type: 'button', props: { label: 'Lambang', href: '#lambang', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-3', type: 'button', props: { label: 'Usaha', href: '#usaha', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-4', type: 'button', props: { label: 'Modal', href: '#modal', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-5', type: 'button', props: { label: 'Anggota', href: '#anggota', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-6', type: 'button', props: { label: 'Rapat', href: '#rapat', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-7', type: 'button', props: { label: 'SHU', href: '#shu', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-8', type: 'button', props: { label: 'Struktur', href: '#struktur', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-9', type: 'button', props: { label: 'Tugas', href: '#tugas', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-10', type: 'button', props: { label: 'Kerja sama', href: '#kerjasama', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
    { id: 'dompet-nav-11', type: 'button', props: { label: 'FAQ', href: '#faq', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logoC = lc.filter(c => c.id === 'dompet-nav-logo' || c.type === 'heading');
  const menuC = lc.filter(c => c.type === 'button');

  const navLinks = [
    { label: 'Visi', href: '#misi' }, { label: 'Lambang', href: '#lambang' },
    { label: 'Usaha', href: '#usaha' }, { label: 'Modal', href: '#modal' },
    { label: 'Anggota', href: '#anggota' }, { label: 'Rapat', href: '#rapat' },
    { label: 'SHU', href: '#shu' }, { label: 'Struktur', href: '#struktur' },
    { label: 'Tugas', href: '#tugas' }, { label: 'Kerja sama', href: '#kerjasama' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="relative w-full z-30" style={{ background: '#123B52', borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center gap-3 py-3 sm:py-4 w-full">
          {/* Brand */}
          <a
            href="#top"
            aria-label="KOPERASI DOMPETKITA BERSAMA – beranda"
            className="flex items-center gap-2.5 text-white no-underline min-w-0 shrink"
          >
            <svg width="36" height="36" viewBox="0 0 64 64" role="img" aria-label="Logo koperasi" className="shrink-0">
              <circle cx="32" cy="32" r="30" fill="#123B52" />
              <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F4B544" strokeWidth="3" strokeDasharray="3.2 2.2" />
              <circle cx="32" cy="32" r="23" fill="#147D92" />
              <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
              <path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E5F5F7" />
              <path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E5F5F7" />
              <path d="M20 50.5h24" stroke="#F4B544" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F4B544" />
            </svg>
            <div className="font-['Bricolage_Grotesque',system-ui,sans-serif] font-extrabold text-[12px] sm:text-[14px] text-white tracking-[0.02em] leading-tight overflow-hidden">
              {renderLayoutComponents(logoC, sectionId)}
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden xl:flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold justify-end">
            {renderLayoutComponents(menuC, sectionId)}
          </div>

          {/* Mobile toggle button */}
          <button
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            aria-expanded={mobileOpen}
            className="xl:hidden inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full px-3 py-1.5 text-xs font-semibold cursor-pointer shrink-0 transition"
          >
            <span aria-hidden="true">{mobileOpen ? '✕' : '☰'}</span>
            <span>{mobileOpen ? 'Tutup' : 'Menu'}</span>
          </button>
        </nav>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="xl:hidden p-3 border border-white/20 rounded-2xl bg-[#0c2b40] grid grid-cols-2 gap-2 my-2.5 shadow-lg">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-xs sm:text-sm text-white no-underline font-semibold hover:bg-white/10 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
