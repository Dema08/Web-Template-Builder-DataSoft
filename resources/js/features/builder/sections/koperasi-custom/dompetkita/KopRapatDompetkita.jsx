import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopRapatDompetkita — Rapat Anggota: Kuorum dan Keputusan
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopRapatDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-rapat-title', type: 'heading', props: { content: 'Rapat Anggota: kuorum dan keputusan', level: 'h2' } },
    { id: 'dompet-rapat-lead', type: 'paragraph', props: { content: 'Rapat Anggota adalah kekuasaan tertinggi. Keputusan diambil dengan musyawarah mufakat. Jika tidak tercapai, diputuskan dengan suara terbanyak: disetujui lebih dari setengah anggota yang hadir. Suara tidak bisa diwakilkan.' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-rapat-title');
  const leadC = lc.filter(c => c.id === 'dompet-rapat-lead');

  return (
    <div className="dk-root">
      <section id="rapat">
        <div className="wrap">
          <h2>
            {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Rapat Anggota: kuorum dan keputusan'}
          </h2>
          <p className="lead">
            {leadC.length > 0 ? renderLayoutComponents(leadC, sectionId) : 'Rapat Anggota adalah kekuasaan tertinggi. Keputusan diambil dengan musyawarah mufakat. Jika tidak tercapai, diputuskan dengan suara terbanyak: disetujui lebih dari setengah anggota yang hadir. Suara tidak bisa diwakilkan.'}
          </p>

          <div className="tw" role="region" tabIndex={0} aria-label="Tabel kuorum dan keputusan Rapat Anggota, geser horizontal bila diperlukan">
            <table>
              <thead>
                <tr>
                  <th>Jenis keputusan</th>
                  <th>Kehadiran minimal</th>
                  <th>Persetujuan minimal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rapat Anggota biasa (kuorum pertama)</td>
                  <td>Lebih dari 1/2 anggota terdaftar</td>
                  <td>Lebih dari 1/2 yang hadir</td>
                </tr>
                <tr>
                  <td>Rapat Anggota kedua (jika kuorum gagal)</td>
                  <td>Sedikitnya 1/3 anggota terdaftar</td>
                  <td>Lebih dari 1/2 yang hadir</td>
                </tr>
                <tr>
                  <td>Ubah Anggaran Dasar, penggabungan, peleburan (RALB)</td>
                  <td>Sedikitnya 3/4 anggota</td>
                  <td>Sedikitnya 3/4 yang hadir</td>
                </tr>
                <tr>
                  <td>Pembubaran koperasi</td>
                  <td>Sedikitnya 3/4 anggota</td>
                  <td>Sedikitnya 2/3 yang hadir</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            Usul pembubaran atau penyelenggaraan rapat oleh anggota memerlukan dukungan sedikitnya 1/5 jumlah anggota. Rapat kedua diadakan paling lambat 30 hari setelah rapat pertama, dengan undangan paling lambat 14 hari sebelumnya.
          </p>

          <div className="two" style={{ marginTop: '36px' }}>
            <div>
              <h3 style={{ marginBottom: '10px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>Wewenang Rapat Anggota</h3>
              <ul className="misi">
                <li>Menetapkan dan mengubah AD, ART, dan peraturan khusus</li>
                <li>Memilih, mengangkat, dan memberhentikan Pengurus dan Pengawas</li>
                <li>Menetapkan rencana kerja, anggaran, dan mengesahkan laporan keuangan</li>
                <li>Mengesahkan pertanggungjawaban Pengurus dan Pengawas</li>
                <li>Menetapkan pembagian SHU</li>
                <li>Memutuskan penggabungan, peleburan, kepailitan, dan pembubaran</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '10px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>Bentuk rapat</h3>
              <details open>
                <summary>Rapat Anggota Tahunan (RAT)</summary>
                <ul>
                  <li>Paling lambat 6 bulan setelah tahun buku berakhir</li>
                  <li>Membahas laporan jalannya koperasi, neraca, perhitungan hasil usaha, dan SHU</li>
                  <li>Pimpinan rapat dipilih dari anggota, bukan Pengurus</li>
                </ul>
              </details>
              <details>
                <summary>Rapat Anggota Luar Biasa (RALB)</summary>
                <ul>
                  <li>Untuk keputusan mendesak</li>
                  <li>Contoh: menjual atau menjaminkan aset lebih dari 25% total aset, atau menerima hibah lebih dari 25% aset</li>
                </ul>
              </details>
              <details>
                <summary>Rapat kelompok, tertulis, dan daring</summary>
                <ul>
                  <li>Sistem kelompok dapat dipakai bila anggota lebih dari 500 orang</li>
                  <li>Rapat tertulis: anggota diberi waktu 14 hari untuk menjawab</li>
                  <li>Rapat daring wajib memungkinkan semua peserta saling melihat dan mendengar</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
