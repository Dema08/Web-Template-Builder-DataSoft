import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopUnitUsahaDompetkita — Unit Usaha KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopUnitUsahaDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-uu-title', type: 'heading', props: { content: 'Unit usaha', level: 'h2' } },
    { id: 'dompet-uu-lead', type: 'paragraph', props: { content: 'Unit usaha koperasi umum dikembangkan berdasarkan kebutuhan anggota, peluang pasar, kelayakan usaha, dan keputusan Rapat Anggota. Koperasi merupakan badan usaha tersendiri; kegiatan dan manfaatnya mengikuti AD/ART, perizinan, serta perjanjian yang relevan. Dompetkita.id menjadi salah satu persyaratan akun bagi calon anggota sesuai ketentuan keanggotaan koperasi.' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-uu-title');
  const leadC = lc.filter(c => c.id === 'dompet-uu-lead');

  return (
    <div className="dk-root">
      <section id="usaha">
        <div className="wrap">
          <h2>
            {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Unit usaha'}
          </h2>
          <p className="lead">
            {leadC.length > 0 ? renderLayoutComponents(leadC, sectionId) : 'Unit usaha koperasi umum dikembangkan berdasarkan kebutuhan anggota, peluang pasar, kelayakan usaha, dan keputusan Rapat Anggota. Koperasi merupakan badan usaha tersendiri; kegiatan dan manfaatnya mengikuti AD/ART, perizinan, serta perjanjian yang relevan. Dompetkita.id menjadi salah satu persyaratan akun bagi calon anggota sesuai ketentuan keanggotaan koperasi.'}
          </p>

          <ul className="chips" style={{ marginBottom: '28px' }}>
            <li className="main">Usaha utama: dikembangkan sesuai kebutuhan anggota dan hasil keputusan Rapat Anggota</li>
            <li>Pilihan usaha tambahan: sesuai kelayakan, ketentuan, dan perizinan</li>
          </ul>

          <div className="units">
            <div>
              <span className="ico">
                <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 20h32l-4 18H12z" /><path d="M16 20l6-10M32 20l-6-10" /><path d="M19 27v5M24 27v5M29 27v5" /></svg>
              </span>
              <h3>Perdagangan &amp; pangan</h3>
              <p>Penyediaan dan perdagangan bahan pangan, produk pertanian, kebutuhan pokok, serta perlengkapan usaha sesuai peluang pasar.</p>
            </div>
            <div>
              <span className="ico">
                <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M20 8c7 0 12 11 12 19a12 12 0 0 1-24 0c0-8 5-19 12-19z" /><path d="M33 22c5 0 8 7 8 12a8 8 0 0 1-14 5" /></svg>
              </span>
              <h3>Peternakan</h3>
              <p>Budi daya ayam ras petelur.</p>
            </div>
            <div>
              <span className="ico">
                <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="9" width="30" height="30" rx="9" /><path d="M24 16v16M16 24h16" /></svg>
              </span>
              <h3>Kesehatan</h3>
              <p>Layanan kesehatan dan perdagangan eceran produk kesehatan sesuai perizinan yang berlaku.</p>
            </div>
            <div>
              <span className="ico">
                <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 21L24 8l18 13v19H6z" /><path d="M16 40V28h16v12M16 34h16" /></svg>
              </span>
              <h3>Logistik &amp; gudang</h3>
              <p>Pergudangan, penyimpanan barang, dan layanan distribusi.</p>
            </div>
            <div>
              <span className="ico">
                <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="6" /><circle cx="24" cy="24" r="14" strokeWidth="5" strokeDasharray="4.4 4.4" /></svg>
              </span>
              <h3>Jasa</h3>
              <p>Pembayaran, reparasi alat elektronik, dan penyelenggaraan acara khusus.</p>
            </div>
            <div>
              <span className="ico">
                <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 15c0-3 6-5 14-5s14 2 14 5-6 5-14 5-14-2-14-5z" /><path d="M10 15v8c0 3 6 5 14 5s14-2 14-5v-8M10 23v8c0 3 6 5 14 5s14-2 14-5v-8" /></svg>
              </span>
              <h3>Simpan pinjam</h3>
              <p>Layanan simpan pinjam bagi anggota sesuai ketentuan, perizinan, dan kemampuan koperasi.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
