import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNavDompetkita — Navigasi KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopNavDompetkita({ components = [], sectionId = null }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const defaultComponents = [
    { id: 'dompet-nav-logo', type: 'heading', props: { content: 'KOPERASI DOMPETKITA BERSAMA', level: 'h2', fontSize: '15px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.03em' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logoC = lc.filter(c => c.id === 'dompet-nav-logo' || c.type === 'heading');

  const links = [
    { label: 'Visi', href: '#misi' },
    { label: 'Lambang', href: '#lambang' },
    { label: 'Usaha', href: '#usaha' },
    { label: 'Modal', href: '#modal' },
    { label: 'Anggota', href: '#anggota' },
    { label: 'Rapat', href: '#rapat' },
    { label: 'SHU', href: '#shu' },
    { label: 'Struktur', href: '#struktur' },
    { label: 'Tugas', href: '#tugas' },
    { label: 'Kerja sama', href: '#kerjasama' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="dk-root">
      <header className="hero" style={{ overflow: 'visible' }}>
        <div className="wrap" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <nav>
            <a className="brand" href="#top" aria-label="KOPERASI DOMPETKITA BERSAMA – beranda">
              <svg className="logo" viewBox="0 0 64 64" role="img" aria-label="Logo koperasi">
                <circle cx="32" cy="32" r="30" fill="#123B52" />
                <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F4B544" strokeWidth="3" strokeDasharray="3.2 2.2" />
                <circle cx="32" cy="32" r="23" fill="#147D92" />
                <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
                <path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E5F5F7" />
                <path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E5F5F7" />
                <path d="M20 50.5h24" stroke="#F4B544" strokeWidth="2" strokeLinecap="round" />
                <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F4B544" />
              </svg>
              <b>
                {logoC.length > 0 ? renderLayoutComponents(logoC, sectionId) : 'KOPERASI DOMPETKITA BERSAMA'}
              </b>
            </a>
            <button
              className="menu-btn"
              type="button"
              id="menuBtn"
              aria-expanded={menuOpen}
              aria-controls="navLinks"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>{' '}
              <span className="menu-label">{menuOpen ? 'Tutup' : 'Menu'}</span>
            </button>
            <div className={`links ${menuOpen ? 'open' : ''}`} id="navLinks">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
