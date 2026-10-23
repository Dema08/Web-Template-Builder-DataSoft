import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFooterDompetkita — CTA, Footer, & Scroll Controls
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, text, button, and footer note is fully editable in Right Inspector & Canvas.
 */
export default function KopFooterDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'dompet-footer-logo-img',
      type: 'image',
      props: {
        alt: 'Logo Koperasi Dompetkita Bersama',
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        objectFit: 'contain',
        svgContent: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="30" fill="#0F2942" /><circle cx="32" cy="32" r="28.5" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="3.2 2.2" /><circle cx="32" cy="32" r="23" fill="#0D9488" /><path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" /><path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E2E8F0" /><path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E2E8F0" /><path d="M20 50.5h24" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" /><path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F59E0B" /></svg>`,
      }
    },
    { id: 'dompet-cta-title', type: 'heading', props: { content: 'Mari bangun kesejahteraan karyawan bersama.', level: 'h2' } },
    { id: 'dompet-cta-desc', type: 'text', props: { content: 'Pastikan Anda sudah memiliki akun Dompetkita.id dan merupakan karyawan perusahaan yang memenuhi ketentuan keanggotaan. Selanjutnya, ajukan pendaftaran koperasi dan lengkapi persyaratan sesuai AD/ART.' } },
    { id: 'dompet-cta-btn', type: 'button', props: { label: 'Lihat syarat keanggotaan', href: '#anggota', variant: 'primary', background: '#F59E0B', color: '#0F172A', fontWeight: '700' } },
    { id: 'dompet-ft-desc', type: 'text', props: { content: 'KOPERASI DOMPETKITA BERSAMA. Informasi ini merupakan gambaran umum; ketentuan resmi mengikuti AD/ART koperasi.' } },
  ];

  const mergedComponents = defaultComponents.map(def => {
    const existing = components.find(c => c.id === def.id);
    return existing ? { ...def, ...existing, props: { ...def.props, ...(existing.props || {}) } } : def;
  });
  const extraComponents = components.filter(c => !defaultComponents.some(def => def.id === c.id));
  const lc = [...mergedComponents, ...extraComponents];
  const getComp = id => lc.filter(c => c.id === id);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="dk-root">
      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <h2>
            {renderLayoutComponents(getComp('dompet-cta-title'), sectionId)}
          </h2>
          <p>
            {renderLayoutComponents(getComp('dompet-cta-desc'), sectionId)}
          </p>
          {renderLayoutComponents(getComp('dompet-cta-btn'), sectionId)}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap flex items-start gap-3.5">
          <div className="shrink-0 flex-none">
            {renderLayoutComponents(getComp('dompet-footer-logo-img'), sectionId)}
          </div>
          <span className="flex-1 min-w-0 block">
            {renderLayoutComponents(getComp('dompet-ft-desc'), sectionId)}
          </span>
        </div>
      </footer>

      {/* Floating Scroll Controls */}
      <div className="scroll-controls" role="group" aria-label="Navigasi halaman">
        <button className="scroll-control" type="button" id="scrollToTop" aria-label="Scroll ke atas" title="Ke atas" onClick={scrollToTop}>
          <span aria-hidden="true">↑</span>
        </button>
        <button className="scroll-control" type="button" id="scrollToBottom" aria-label="Scroll ke bawah" title="Ke bawah" onClick={scrollToBottom}>
          <span aria-hidden="true">↓</span>
        </button>
      </div>
    </div>
  );
}
