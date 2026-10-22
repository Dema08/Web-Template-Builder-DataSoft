import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopKeanggotaanDompetkita — Keanggotaan KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopKeanggotaanDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-mem-title', type: 'heading', props: { content: 'Keanggotaan', level: 'h2' } },
    { id: 'dompet-mem-lead', type: 'paragraph', props: { content: 'Syarat utama: calon anggota sudah terdaftar dan memiliki akun Dompetkita.id serta merupakan karyawan perusahaan. Status akun tidak otomatis memberikan keanggotaan; calon anggota tetap harus diterima sesuai AD/ART koperasi.' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-mem-title');
  const leadC = lc.filter(c => c.id === 'dompet-mem-lead');

  return (
    <div className="dk-root">
      {/* Siapa yang dapat menjadi anggota */}
      <section>
        <div className="wrap">
          <h2>Siapa yang dapat menjadi anggota?</h2>
          <p className="lead">Keanggotaan ditujukan bagi karyawan perusahaan yang sudah terdaftar dan memiliki akun Dompetkita.id serta memenuhi proses penerimaan anggota sesuai AD/ART koperasi.</p>
          <ul className="chips">
            <li>Karyawan perusahaan</li>
            <li>Akun Dompetkita.id aktif/terdaftar</li>
            <li>Karyawan perusahaan yang memenuhi ketentuan program</li>
            <li>Calon anggota yang memenuhi AD/ART</li>
          </ul>
        </div>
      </section>

      {/* Keanggotaan */}
      <section id="anggota">
        <div className="wrap">
          <h2>
            {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Keanggotaan'}
          </h2>
          <p className="lead">
            {leadC.length > 0 ? renderLayoutComponents(leadC, sectionId) : 'Syarat utama: calon anggota sudah terdaftar dan memiliki akun Dompetkita.id serta merupakan karyawan perusahaan. Status akun tidak otomatis memberikan keanggotaan; calon anggota tetap harus diterima sesuai AD/ART koperasi.'}
          </p>
          <ol className="flow">
            <li>
              <span className="ico">
                <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="9" y="3" width="14" height="26" rx="4" /><path d="M14 7h4M16 24h.01" /></svg>
              </span>
              <b>Punya akun Dompetkita.id</b>
              <p>Daftar dan miliki akun di Dompetkita.id.</p>
            </li>
            <li>
              <span className="ico">
                <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="8" width="24" height="18" rx="4" /><path d="M12 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M11 17l4 4 7-8" /></svg>
              </span>
              <b>Verifikasi karyawan</b>
              <p>Status akun dan karyawan diverifikasi.</p>
            </li>
            <li>
              <span className="ico">
                <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 3h12l5 5v21H8z" /><path d="M20 3v5h5M12 15h9M12 20h9M12 25h5" /></svg>
              </span>
              <b>Setujui AD/ART</b>
              <p>Setujui AD/ART serta ketentuan keanggotaan.</p>
            </li>
            <li>
              <span className="ico">
                <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12" /><path d="M16 9v14M12 12.5c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5-1.8 2.5-4 2.5-4 1-4 2.5 1.8 2.5 4 2.5 4-1 4-2.5" /></svg>
              </span>
              <b>Bayar simpanan pokok</b>
              <p>Lunasi simpanan pokok sesuai ketentuan.</p>
            </li>
          </ol>
          <div className="two">
            <div>
              <p className="note">
                Ketentuan inti: calon anggota wajib memiliki akun Dompetkita.id dan berstatus sebagai karyawan perusahaan. Jika program koperasi mensyaratkan perusahaan mitra Dompetkita, status tersebut juga harus dipenuhi. Akun saja tidak otomatis menjadikan seseorang anggota koperasi.
              </p>
              <details open>
                <summary>Syarat menjadi anggota</summary>
                <ul>
                  <li>Sudah terdaftar dan memiliki akun di <a href="https://dompetkita.id/" target="_blank" rel="noopener noreferrer">Dompetkita.id</a></li>
                  <li>Merupakan karyawan dari perusahaan; status perusahaan harus memenuhi ketentuan program/keanggotaan yang berlaku</li>
                  <li>Memenuhi ketentuan kecakapan hukum dan persyaratan keanggotaan dalam AD/ART</li>
                  <li>Mengajukan pendaftaran serta melengkapi data yang diperlukan untuk verifikasi status akun dan karyawan</li>
                  <li>Menyetujui AD/ART serta ketentuan keanggotaan koperasi</li>
                  <li>Melunasi simpanan pokok sesuai ketentuan yang ditetapkan</li>
                </ul>
              </details>
              <details>
                <summary>Kewajiban anggota</summary>
                <ul>
                  <li>Mematuhi AD/ART dan keputusan Rapat Anggota</li>
                  <li>Menghadiri Rapat Anggota</li>
                  <li>Ikut mengawasi organisasi dan usaha koperasi</li>
                  <li>Membayar simpanan pokok dan simpanan wajib</li>
                </ul>
              </details>
            </div>
            <div>
              <details open>
                <summary>Hak anggota</summary>
                <ul>
                  <li>Memberi suara dan pendapat di Rapat Anggota</li>
                  <li>Memilih dan dipilih menjadi Pengurus atau Pengawas</li>
                  <li>Mendapat pelayanan usaha koperasi</li>
                  <li>Mendapat keterangan tentang perkembangan koperasi</li>
                  <li>Menerima bagian Sisa Hasil Usaha (SHU)</li>
                  <li>Menerima pengembalian simpanan jika keluar</li>
                </ul>
              </details>
              <details>
                <summary>Anggota luar biasa</summary>
                <ul>
                  <li>Status anggota luar biasa hanya berlaku jika diatur dalam AD/ART koperasi</li>
                  <li>Kepemilikan akun Dompetkita.id saja tidak otomatis menjadikan seseorang anggota koperasi apabila yang bersangkutan bukan karyawan perusahaan atau belum diterima sebagai anggota</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
