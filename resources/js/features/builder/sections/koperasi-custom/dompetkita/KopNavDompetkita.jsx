import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNavDompetkita — Navigasi KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Fully editable in Right Inspector & Canvas.
 */
export default function KopNavDompetkita({ components = [], sectionId = null }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const defaultComponents = [
    {
      id: 'dompet-nav-logo-img',
      type: 'image',
      props: {
        alt: 'Logo Koperasi',
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        objectFit: 'contain',
        svgContent: '<svg viewBox="0 0 64 64" role="img" aria-label="Logo koperasi"><circle cx="32" cy="32" r="30" fill="#0F2942" /><circle cx="32" cy="32" r="28.5" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3.2 2.2" /><circle cx="32" cy="32" r="23" fill="#0D9488" /><path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" /><path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E2E8F0" /><path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E2E8F0" /><path d="M20 50.5h24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" /><path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F59E0B" /></svg>',
      },
    },
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

  const mergedComponents = defaultComponents.map(def => {
    const existing = components.find(c => c.id === def.id);
    return existing || def;
  });
  const extraComponents = components.filter(c => !defaultComponents.some(def => def.id === c.id));
  const lc = [...mergedComponents, ...extraComponents];
  const getComp = id => lc.filter(c => c.id === id);
  const logoC = lc.filter(c => c.id === 'dompet-nav-logo' || (c.type === 'heading' && c.id && c.id.includes('nav-logo')));
  const menuButtons = lc.filter(c => c.type === 'button');

  return (
    <div className="dk-root">
      <header className="hero" style={{ overflow: 'visible' }}>
        <div className="wrap" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <nav>
            <div className="brand">
              {renderLayoutComponents(getComp('dompet-nav-logo-img'), sectionId)}
              <b>
                {renderLayoutComponents(logoC, sectionId)}
              </b>
            </div>
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
              {menuButtons.length > 0 ? (
                renderLayoutComponents(menuButtons, sectionId)
              ) : (
                defaultComponents.filter(c => c.type === 'button').map(btn => (
                  <a key={btn.id} href={btn.props.href} onClick={() => setMenuOpen(false)}>
                    {btn.props.label}
                  </a>
                ))
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
