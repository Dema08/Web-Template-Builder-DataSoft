import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopHeroDompetkita — Hero & Quick Nav KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopHeroDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-hero-title', type: 'heading', props: { content: 'Koperasi DOMPETKITA BERSAMA.', level: 'h1' } },
    { id: 'dompet-hero-desc', type: 'paragraph', props: { content: 'KOPERASI DOMPETKITA BERSAMA adalah koperasi umum yang menghimpun anggota dari kalangan karyawan perusahaan yang telah memiliki akun Dompetkita.id. Koperasi mengembangkan usaha dan layanan berdasarkan kebutuhan anggota, dengan tata kelola yang transparan, bertanggung jawab, dan berorientasi pada kesejahteraan bersama.' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-hero-title');
  const descC = lc.filter(c => c.id === 'dompet-hero-desc');

  return (
    <div className="dk-root">
      <header className="hero">
        <div className="stripe" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-grid" id="top">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" /> Koperasi untuk tumbuh bersama
              </p>
              <h1>
                {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Koperasi DOMPETKITA BERSAMA.'}
              </h1>
              <p>
                {descC.length > 0 ? renderLayoutComponents(descC, sectionId) : 'KOPERASI DOMPETKITA BERSAMA adalah koperasi umum yang menghimpun anggota dari kalangan karyawan perusahaan yang telah memiliki akun Dompetkita.id. Koperasi mengembangkan usaha dan layanan berdasarkan kebutuhan anggota, dengan tata kelola yang transparan, bertanggung jawab, dan berorientasi pada kesejahteraan bersama.'}
              </p>
              <div className="btns">
                <a className="btn" href="#anggota">
                  Pelajari keanggotaan <span aria-hidden="true">↗</span>
                </a>
                <a className="btn alt" href="#usaha">
                  Jelajahi unit usaha <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <figure className="hero-art">
              <svg viewBox="0 0 480 400" role="img" aria-label="Ilustrasi tiga karyawan terhubung dengan dompet digital di ponsel">
                <circle cx="240" cy="190" r="172" fill="#FFFFFF" fillOpacity=".07" />
                <circle cx="240" cy="190" r="196" fill="none" stroke="#F4B544" strokeOpacity=".55" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" />
                <ellipse cx="240" cy="382" rx="200" ry="8" fill="#FFFFFF" fillOpacity=".1" />
                {/* Ponsel */}
                <rect x="180" y="24" width="120" height="232" rx="24" fill="#0E2C3E" stroke="#FFFFFF" strokeOpacity=".35" strokeWidth="2" />
                <rect x="190" y="46" width="100" height="198" rx="14" fill="#FFFFFF" />
                <rect x="225" y="32" width="30" height="5" rx="2.5" fill="#FFFFFF" fillOpacity=".35" />
                {/* Mini logo inside phone */}
                <g transform="translate(226, 52) scale(0.4375)">
                  <circle cx="32" cy="32" r="30" fill="#123B52" />
                  <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F4B544" strokeWidth="3" strokeDasharray="3.2 2.2" />
                  <circle cx="32" cy="32" r="23" fill="#147D92" />
                  <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
                  <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F4B544" />
                </g>
                <rect x="205" y="92" width="70" height="46" rx="10" fill="#147D92" />
                <rect x="252" y="107" width="30" height="16" rx="8" fill="#F4B544" />
                <circle cx="266" cy="115" r="3" fill="#123B52" />
                <rect x="205" y="154" width="70" height="8" rx="4" fill="#DCE7EC" />
                <rect x="205" y="170" width="46" height="8" rx="4" fill="#DCE7EC" />
                <rect x="205" y="200" width="70" height="22" rx="11" fill="#F4B544" />
                {/* Garis penghubung */}
                <path d="M150 276C150 200 178 170 194 150" fill="none" stroke="#F4B544" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" />
                <path d="M330 276C330 200 302 170 286 150" fill="none" stroke="#F4B544" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" />
                {/* Koin */}
                <g transform="translate(345 92)"><circle r="22" fill="#F4B544" /><circle r="14" fill="none" stroke="#123B52" strokeOpacity=".35" strokeWidth="2" /></g>
                <g transform="translate(130 120)"><circle r="16" fill="#F4B544" /><circle r="10" fill="none" stroke="#123B52" strokeOpacity=".35" strokeWidth="2" /></g>
                <g transform="translate(372 196)"><circle r="12" fill="#F4B544" /><circle r="7" fill="none" stroke="#123B52" strokeOpacity=".35" strokeWidth="2" /></g>
                {/* Orang kiri */}
                <path d="M120 380v-28a30 30 0 0 1 60 0v28z" fill="#36B6C4" />
                <circle cx="150" cy="300" r="20" fill="#F1C7A0" />
                <path d="M130 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#2A2A33" />
                {/* Orang tengah */}
                <path d="M208 380v-38a32 32 0 0 1 64 0v38z" fill="#F4B544" />
                <circle cx="240" cy="288" r="22" fill="#C98F62" />
                <path d="M218 286a22 22 0 0 1 44 0c-10-9-34-9-44 0z" fill="#2A2A33" />
                <path d="M232 322l8 10 8-10" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {/* Orang kanan */}
                <path d="M300 380v-28a30 30 0 0 1 60 0v28z" fill="#2F8878" />
                <circle cx="330" cy="300" r="20" fill="#8D5A3B" />
                <path d="M310 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#2A2A33" />
              </svg>
              <figcaption>KOPERASI DOMPETKITA BERSAMA, Bertumbuh dan Sejahtera Bersama</figcaption>
            </figure>
          </div>
          <div className="nums">
            <div><b>1 orang = 1 suara</b>di Rapat Anggota</div>
            <div><b>5 tahun</b>masa jabatan pengurus</div>
            <div><b>Min. 1×/tahun</b>Rapat Anggota Tahunan</div>
            <div><b>5 bagian</b>pembagian SHU</div>
          </div>
        </div>
      </header>

      {/* Section nav sticky */}
      <nav className="section-nav" aria-label="Navigasi cepat bagian halaman">
        <div className="wrap section-nav-inner">
          <span className="section-nav-label">Jelajahi <span aria-hidden="true">→</span></span>
          <div className="section-nav-links" id="sectionNavLinks">
            <a href="#misi">Tentang</a>
            <a href="#usaha">Unit usaha</a>
            <a href="#anggota">Keanggotaan</a>
            <a href="#modal">Permodalan</a>
            <a href="#rapat">Rapat</a>
            <a href="#shu">SHU</a>
            <a href="#struktur">Organisasi</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
