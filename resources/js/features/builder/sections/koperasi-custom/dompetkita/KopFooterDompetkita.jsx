import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFooterDompetkita — CTA Banner & Footer Disclaimer
 * Fully responsive for Mobile, Tablet, and Desktop.
 */
export default function KopFooterDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-ft-name', type: 'heading', props: { content: 'KOPERASI DOMPETKITA BERSAMA.', level: 'h3', fontSize: '14.5px', fontWeight: '700', color: '#173042' } },
    { id: 'dompet-ft-desc', type: 'paragraph', props: { content: 'Informasi ini merupakan gambaran umum; ketentuan resmi mengikuti AD/ART koperasi.', fontSize: '13.5px', color: '#627783' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const nameC = lc.filter(c => c.id === 'dompet-ft-name');
  const descC = lc.filter(c => c.id === 'dompet-ft-desc');

  return (
    <div className="font-['Source_Sans_3',system-ui,sans-serif]">
      {/* ── CTA ── */}
      <section className="py-12 sm:py-20 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0c5362 0%,#147D92 60%,#20788b 100%)', color: '#fff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-['Bricolage_Grotesque',system-ui,sans-serif] text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
            Mari bangun kesejahteraan karyawan bersama.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#E5F5F7] max-w-2xl mx-auto mb-6 sm:mb-8">
            Pastikan Anda sudah memiliki akun Dompetkita.id dan merupakan karyawan perusahaan yang memenuhi ketentuan keanggotaan. Selanjutnya, ajukan pendaftaran koperasi dan lengkapi persyaratan sesuai AD/ART.
          </p>
          <a
            href="#anggota"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-sm sm:text-base text-[#123B52] bg-[#F4B544] hover:bg-[#eab308] transition shadow-md no-underline w-full sm:w-auto"
          >
            Lihat syarat keanggotaan ↗
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-[#DCE7EC] py-6 sm:py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5">
          {/* Logo SVG */}
          <svg width="32" height="32" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
            <circle cx="32" cy="32" r="30" fill="#123B52" />
            <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F4B544" strokeWidth="3" strokeDasharray="3.2 2.2" />
            <circle cx="32" cy="32" r="23" fill="#147D92" />
            <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
            <path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E5F5F7" />
            <path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E5F5F7" />
            <path d="M20 50.5h24" stroke="#F4B544" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F4B544" />
          </svg>
          <div className="text-xs sm:text-sm text-[#627783] leading-relaxed">
            <span className="font-['Bricolage_Grotesque',system-ui,sans-serif] font-bold text-[#173042]">
              {renderLayoutComponents(nameC, sectionId)}
            </span>{' '}
            {renderLayoutComponents(descC, sectionId)}
          </div>
        </div>
      </footer>
    </div>
  );
}
