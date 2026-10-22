import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFAQDompetkita — Pertanyaan yang Sering Diajukan
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopFAQDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-faq-title', type: 'heading', props: { content: 'Pertanyaan yang sering diajukan', level: 'h2' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-faq-title');

  return (
    <div className="dk-root">
      <section id="faq">
        <div className="wrap">
          <h2>
            {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Pertanyaan yang sering diajukan'}
          </h2>
          <details>
            <summary>Siapa yang dapat menjadi anggota KOPERASI DOMPETKITA BERSAMA?</summary>
            <ul>
              <li>Karyawan perusahaan yang sudah terdaftar dan memiliki akun di <a href="https://dompetkita.id/" target="_blank" rel="noopener noreferrer">Dompetkita.id</a>, memenuhi persyaratan AD/ART, dan telah diterima melalui proses pendaftaran koperasi. Ketentuan perusahaan/program yang relevan juga harus dipenuhi.</li>
            </ul>
          </details>
          <details>
            <summary>Apakah suara anggota berbeda menurut besar simpanan?</summary>
            <ul>
              <li>Tidak. Setiap anggota hanya punya satu suara dan tidak bisa diwakilkan.</li>
            </ul>
          </details>
          <details>
            <summary>Kapan saya menerima SHU?</summary>
            <ul>
              <li>SHU dibagikan setelah disahkan di Rapat Anggota Tahunan. Bagian anggota dihitung dari transaksi usaha dan simpanan wajib.</li>
            </ul>
          </details>
          <details>
            <summary>Bisakah simpanan diambil kembali?</summary>
            <ul>
              <li>Simpanan pokok tidak bisa diambil selama masih anggota. Anggota yang keluar berhak atas pengembalian simpanannya.</li>
            </ul>
          </details>
          <details>
            <summary>Bagaimana jika saya tidak setuju dengan keputusan pengurus?</summary>
            <ul>
              <li>Anda berhak menyampaikan pendapat kepada Pengurus dan Pengawas kapan saja, serta meminta diadakan Rapat Anggota.</li>
            </ul>
          </details>
          <details>
            <summary>Apakah semua pemilik akun Dompetkita otomatis menjadi anggota koperasi?</summary>
            <ul>
              <li>Tidak. Calon anggota harus merupakan karyawan perusahaan, memiliki akun Dompetkita.id, memenuhi ketentuan keanggotaan, dan menyelesaikan proses penerimaan anggota koperasi.</li>
            </ul>
          </details>
        </div>
      </section>
    </div>
  );
}
