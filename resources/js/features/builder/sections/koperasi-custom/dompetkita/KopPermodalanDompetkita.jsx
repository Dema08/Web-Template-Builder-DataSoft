import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopPermodalanDompetkita — Permodalan KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopPermodalanDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-pm-title', type: 'heading', props: { content: 'Permodalan', level: 'h2' } },
    { id: 'dompet-pm-lead', type: 'paragraph', props: { content: 'Modal koperasi terdiri dari modal sendiri dan modal pinjaman. Koperasi juga dapat menghimpun modal penyertaan.' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-pm-title');
  const leadC = lc.filter(c => c.id === 'dompet-pm-lead');

  return (
    <div className="dk-root">
      <section id="modal">
        <div className="wrap">
          <div className="head-row">
            <div>
              <h2>
                {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Permodalan'}
              </h2>
              <p className="lead">
                {leadC.length > 0 ? renderLayoutComponents(leadC, sectionId) : 'Modal koperasi terdiri dari modal sendiri dan modal pinjaman. Koperasi juga dapat menghimpun modal penyertaan.'}
              </p>
            </div>
            <svg viewBox="0 0 220 180" role="img" aria-label="Ilustrasi batang modal yang bertumbuh dengan koin">
              <rect x="20" y="150" width="180" height="4" rx="2" className="f-line" />
              <rect x="40" y="110" width="30" height="40" rx="7" className="f-red" opacity=".35" />
              <rect x="95" y="80" width="30" height="70" rx="7" className="f-red" opacity=".6" />
              <rect x="150" y="45" width="30" height="105" rx="7" className="f-red" />
              <path d="M55 98L110 68L165 33" fill="none" className="s-gold" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
              <g className="f-gold">
                <circle cx="55" cy="98" r="12" />
                <circle cx="110" cy="68" r="12" />
                <circle cx="165" cy="33" r="12" />
              </g>
              <g fill="none" className="s-surf" strokeWidth="2" opacity=".7">
                <circle cx="55" cy="98" r="7.5" />
                <circle cx="110" cy="68" r="7.5" />
                <circle cx="165" cy="33" r="7.5" />
              </g>
            </svg>
          </div>
          <div className="two">
            <div>
              <h3 style={{ marginBottom: '10px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>Modal sendiri</h3>
              <details open>
                <summary>Simpanan pokok</summary>
                <ul>
                  <li>Dibayar sekali saat menjadi anggota</li>
                  <li>Jumlahnya sama untuk setiap anggota</li>
                  <li>Tidak bisa diambil selama masih menjadi anggota</li>
                </ul>
              </details>
              <details>
                <summary>Simpanan wajib</summary>
                <ul>
                  <li>Dibayar anggota secara berkala</li>
                  <li>Menjadi dasar jasa simpanan dalam pembagian SHU</li>
                </ul>
              </details>
              <details>
                <summary>Dana cadangan dan hibah tidak terikat</summary>
                <ul>
                  <li>Dana cadangan berasal dari penyisihan SHU, untuk memupuk modal dan menutup kerugian</li>
                  <li>Hibah tidak terikat adalah sumbangan pihak ketiga tanpa kewajiban pengembalian</li>
                </ul>
              </details>
            </div>
            <div>
              <h3 style={{ marginBottom: '10px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>Modal pinjaman dan bantuan</h3>
              <details open>
                <summary>Sumber modal pinjaman</summary>
                <ul>
                  <li>Pinjaman anggota yang memenuhi syarat</li>
                  <li>Pinjaman dari koperasi lain</li>
                  <li>Pinjaman bank dan lembaga keuangan lain</li>
                  <li>Penerbitan surat utang sesuai ketentuan</li>
                </ul>
              </details>
              <details>
                <summary>Bantuan pemerintah</summary>
                <ul>
                  <li>Pemerintah pusat, provinsi, dan kabupaten/kota dapat memberi bantuan modal</li>
                  <li>Dukungan atau bantuan dari pemerintah dan pihak lain dapat diterima sesuai ketentuan yang berlaku serta keputusan koperasi</li>
                </ul>
              </details>
              <details>
                <summary>Kegunaan modal</summary>
                <ul>
                  <li>Biaya pra-organisasi (akta pendirian, administrasi)</li>
                  <li>Membeli barang modal seperti aset tetap</li>
                  <li>Membiayai operasional koperasi</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
