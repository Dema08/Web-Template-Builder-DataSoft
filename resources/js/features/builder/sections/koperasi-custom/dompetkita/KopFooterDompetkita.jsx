import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFooterDompetkita — CTA, Footer, & Scroll Controls
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopFooterDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-cta-title', type: 'heading', props: { content: 'Mari bangun kesejahteraan karyawan bersama.', level: 'h2' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaTitleC = lc.filter(c => c.id === 'dompet-cta-title');

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
            {ctaTitleC.length > 0 ? renderLayoutComponents(ctaTitleC, sectionId) : 'Mari bangun kesejahteraan karyawan bersama.'}
          </h2>
          <p>Pastikan Anda sudah memiliki akun Dompetkita.id dan merupakan karyawan perusahaan yang memenuhi ketentuan keanggotaan. Selanjutnya, ajukan pendaftaran koperasi dan lengkapi persyaratan sesuai AD/ART.</p>
          <a className="btn" href="#anggota">
            Lihat syarat keanggotaan
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap">
          <svg className="logo" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="30" fill="#123B52" />
            <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F4B544" strokeWidth="3" strokeDasharray="3.2 2.2" />
            <circle cx="32" cy="32" r="23" fill="#147D92" />
            <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
            <path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E5F5F7" />
            <path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E5F5F7" />
            <path d="M20 50.5h24" stroke="#F4B544" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F4B544" />
          </svg>
          <span>KOPERASI DOMPETKITA BERSAMA. Informasi ini merupakan gambaran umum; ketentuan resmi mengikuti AD/ART koperasi.</span>
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
