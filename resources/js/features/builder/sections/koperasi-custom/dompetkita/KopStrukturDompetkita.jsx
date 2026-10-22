import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopStrukturDompetkita — Struktur Organisasi, Tata Kelola, Tugas, & Kerja Sama
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopStrukturDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-str-title', type: 'heading', props: { content: 'Struktur organisasi', level: 'h2' } },
    { id: 'dompet-str-lead', type: 'paragraph', props: { content: 'Pengurus dipilih oleh anggota melalui Rapat Anggota. Pengurus dan Pengawas menjalankan amanah sesuai AD/ART, dengan masa jabatan dan persyaratan yang ditetapkan koperasi.' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-str-title');
  const leadC = lc.filter(c => c.id === 'dompet-str-lead');

  return (
    <div className="dk-root">
      {/* Struktur Organisasi */}
      <section id="struktur">
        <div className="wrap">
          <h2>
            {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Struktur organisasi'}
          </h2>
          <p className="lead">
            {leadC.length > 0 ? renderLayoutComponents(leadC, sectionId) : 'Pengurus dipilih oleh anggota melalui Rapat Anggota. Pengurus dan Pengawas menjalankan amanah sesuai AD/ART, dengan masa jabatan dan persyaratan yang ditetapkan koperasi.'}
          </p>

          <div className="org" tabIndex={0} role="region" aria-label="Bagan struktur organisasi KOPERASI DOMPETKITA BERSAMA, dapat digeser horizontal">
            <ul className="org-tree">
              <li>
                <div className="node top">
                  Rapat Anggota
                  <small>Kekuasaan tertinggi koperasi</small>
                </div>
                <ul>
                  <li>
                    <div className="node w">
                      Badan Pengawas
                      <small>Pengawasan dan nasihat</small>
                    </div>
                  </li>
                  <li>
                    <div className="node k">
                      Ketua
                      <small>Memimpin pengurus koperasi</small>
                    </div>
                    <ul>
                      <li>
                        <div className="node k">Wakil Ketua</div>
                        <ul>
                          <li><div className="node subtle">Bidang Usaha</div></li>
                          <li><div className="node subtle">Bidang Anggota</div></li>
                        </ul>
                      </li>
                      <li>
                        <div className="node subtle">Sekretaris</div>
                      </li>
                      <li>
                        <div className="node subtle">Bendahara</div>
                      </li>
                      <li>
                        <div className="node subtle">Pengelola Unit Usaha</div>
                        <ul>
                          <li><div className="node subtle">Unit Usaha 1</div></li>
                          <li><div className="node subtle">Unit Usaha 2</div></li>
                          <li><div className="node subtle">Unit Usaha 3</div></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cara kami menjaga kepercayaan */}
      <section>
        <div className="wrap">
          <div className="head-row">
            <div>
              <h2>Cara kami menjaga kepercayaan</h2>
              <p className="lead">Koperasi bersifat terbuka. Anggota dapat mengetahui, memantau, dan mengevaluasi pengelolaan usaha koperasi.</p>
            </div>
            <svg viewBox="0 0 220 180" role="img" aria-label="Ilustrasi perisai dengan tanda centang dan kaca pembesar">
              <rect x="14" y="96" width="42" height="54" rx="8" className="f-surf s-line" strokeWidth="2" />
              <g className="s-line" strokeWidth="3" strokeLinecap="round">
                <path d="M23 112h24M23 122h24M23 132h14" />
              </g>
              <path d="M110 16L172 38V90C172 128 146 150 110 164 74 150 48 128 48 90V38z" className="f-red" />
              <path d="M82 90l20 20 38-40" fill="none" className="s-surf" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="168" cy="128" r="20" className="f-surf s-gold" strokeWidth="8" />
              <path d="M183 143l18 18" className="s-gold" strokeWidth="9" strokeLinecap="round" />
            </svg>
          </div>
          <details open>
            <summary>Rapat Anggota Tahunan</summary>
            <ul>
              <li>Diadakan paling sedikit setahun sekali, paling lambat 6 bulan setelah tahun buku berakhir</li>
              <li>Pengurus dan Pengawas mempertanggungjawabkan kinerja, laporan keuangan, dan pembagian SHU</li>
              <li>Undangan beserta bahan rapat dikirim sebelum rapat dilaksanakan</li>
            </ul>
          </details>
          <details>
            <summary>Pengawasan dan laporan</summary>
            <ul>
              <li>Pengawas memeriksa pembukuan, dokumen, dan pelaksanaan usaha</li>
              <li>Pengurus membuat laporan keuangan dan perkembangan unit usaha setiap bulan</li>
              <li>Kerja sama dengan pihak ketiga dibahas di Rapat Anggota</li>
            </ul>
          </details>
          <details>
            <summary>Larangan dan sanksi</summary>
            <ul>
              <li>Pengurus dilarang mengambil keuntungan pribadi di luar penghasilan yang sah</li>
              <li>Pelanggaran dikenai sanksi administratif, pemberhentian, atau proses hukum</li>
            </ul>
          </details>
        </div>
      </section>

      {/* Tugas dan tanggung jawab */}
      <section id="tugas">
        <div className="wrap">
          <h2>Tugas dan tanggung jawab</h2>
          <p className="lead">Setiap peran punya uraian tugas tertulis agar tidak tumpang tindih.</p>
          <div className="two">
            <div>
              <details open>
                <summary>Ketua</summary>
                <ul>
                  <li>Memimpin organisasi, rapat pengurus, dan RAT</li>
                  <li>Menjaga koperasi berjalan sesuai visi dan AD/ART</li>
                  <li>Menetapkan kelayakan pinjaman bersama pengurus</li>
                  <li>Mewakili koperasi ke pihak luar dan menandatangani perjanjian kerja sama</li>
                  <li>Melaporkan keuangan tiap bulan kepada Pengawas dan setahun sekali di Rapat Anggota</li>
                </ul>
              </details>
              <details>
                <summary>Wakil Ketua Bidang Anggota</summary>
                <ul>
                  <li>Mengelola data, kartu anggota, dan simpanan anggota</li>
                  <li>Memastikan hanya anggota aktif yang memenuhi AD/ART memiliki hak suara di RAT</li>
                  <li>Menampung saran dan keluhan anggota, mendorong penyelesaian lewat musyawarah</li>
                  <li>Menyusun kaderisasi dan edukasi perkoperasian, termasuk melibatkan pemuda</li>
                </ul>
              </details>
              <details>
                <summary>Wakil Ketua Bidang Usaha</summary>
                <ul>
                  <li>Menyusun rencana bisnis berdasarkan kebutuhan anggota, peluang pasar, dan studi kelayakan</li>
                  <li>Mengawasi operasional unit usaha dan pelaksanaan SOP</li>
                  <li>Mengevaluasi untung-rugi, memberi masukan penutupan usaha yang tidak sehat</li>
                  <li>Menjalin kemitraan dengan perusahaan, UMKM, koperasi lain, lembaga keuangan, dan platform digital</li>
                </ul>
              </details>
              <details>
                <summary>Sekretaris</summary>
                <ul>
                  <li>Menyimpan dokumen resmi: AD/ART, SK pendirian, legalitas, perizinan</li>
                  <li>Membuat notulen rapat dan mengelola surat menyurat</li>
                  <li>Menyusun laporan tahunan non-keuangan bersama Ketua</li>
                </ul>
              </details>
              <details>
                <summary>Bendahara</summary>
                <ul>
                  <li>Mencatat semua uang masuk dan keluar dengan bukti sah</li>
                  <li>Menyusun laporan keuangan harian, bulanan, dan tahunan, serta neraca dan laba/rugi</li>
                  <li>Menyusun anggaran dan memastikan pengeluaran tidak melebihi anggaran</li>
                  <li>Tidak mencampur uang koperasi dengan uang pribadi, bersedia diaudit</li>
                </ul>
              </details>
            </div>
            <div>
              <details open>
                <summary>Badan Pengawas</summary>
                <ul>
                  <li>Mengawasi kebijakan dan jalannya pengurusan koperasi</li>
                  <li>Memberi nasihat, saran, atau teguran bila ada penyimpangan</li>
                  <li>Memeriksa pembukuan, dokumen, dan pelaksanaan usaha</li>
                  <li>Melakukan audit investigatif atas perintah Rapat Anggota</li>
                  <li>Memberi persetujuan atas pinjaman modal dan kerja sama tertentu</li>
                  <li>Menyampaikan laporan pengawasan tahunan kepada Rapat Anggota</li>
                </ul>
              </details>
              <details>
                <summary>Pengelola / manajer unit usaha</summary>
                <ul>
                  <li>Menyusun program kerja dan laporan kinerja unit usaha</li>
                  <li>Mengelola dan mengendalikan unit usaha di bawah wewenangnya</li>
                  <li>Memberi informasi usaha kepada pihak berkepentingan</li>
                  <li>Diangkat dengan perjanjian kerja, disetujui Rapat Anggota</li>
                </ul>
              </details>
              <details>
                <summary>Pegawai / karyawan</summary>
                <ul>
                  <li>Menjalankan tugas sesuai SOP dan keputusan pengurus</li>
                  <li>Melayani konsumen dan membantu pengecekan barang dagangan</li>
                  <li>Menjaga kerahasiaan data dan nama baik koperasi</li>
                  <li>Bertanggung jawab kepada manajer unit usaha</li>
                </ul>
              </details>
              <details>
                <summary>Syarat dan masa jabatan</summary>
                <ul>
                  <li>Pengurus dan Pengawas dipilih dari anggota, masa jabatan 5 tahun, boleh dipilih kembali</li>
                  <li>Pengurus dan Pengawas harus memenuhi persyaratan yang ditetapkan dalam peraturan perundang-undangan serta AD/ART koperasi</li>
                  <li>Minimal 5 Pengurus (jumlah ganjil); Pengawas minimal 1 ketua dan 2 anggota</li>
                  <li>Pengganti antarwaktu dipilih Rapat Anggota paling lambat 1 bulan sejak kekosongan</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Kerja sama, pembubaran, dan sanksi */}
      <section id="kerjasama">
        <div className="wrap">
          <h2>Kerja sama, pembubaran, dan sanksi</h2>
          <div className="two">
            <div>
              <details open>
                <summary>Kerja sama dengan pihak ketiga</summary>
                <ul>
                  <li>Dibahas dulu di Rapat Anggota dan dikonsultasikan dengan Pengawas</li>
                  <li>Jangka waktu maksimum 10 tahun, dapat diperpanjang</li>
                  <li>Naskah perjanjian memuat: subjek, kerja sama, jangka waktu, hak dan kewajiban, pendanaan, keadaan memaksa, pengalihan aset, dan penyelesaian perselisihan</li>
                </ul>
              </details>
              <details>
                <summary>Tindakan yang perlu persetujuan Rapat Anggota</summary>
                <ul>
                  <li>Membeli, menjual, atau mengagunkan barang tidak bergerak</li>
                  <li>Meminjam atau meminjamkan uang atas nama koperasi</li>
                  <li>Menanam kekayaan di usaha lain</li>
                  <li>Menjadi penjamin utang pihak lain</li>
                </ul>
              </details>
              <details>
                <summary>Pembubaran</summary>
                <ul>
                  <li>Atas keputusan Rapat Anggota atau karena jangka waktu berakhir</li>
                  <li>Pemerintah dapat membubarkan koperasi yang tidak beraktivitas 2 tahun berturut-turut atau tidak menggelar rapat anggota 3 tahun berturut-turut</li>
                  <li>Jika koperasi tak mampu membayar pihak ketiga, anggota hanya menanggung sebatas simpanan yang dimiliki</li>
                </ul>
              </details>
            </div>
            <div>
              <details open>
                <summary>Sanksi bila RAT tidak dilaksanakan</summary>
                <ul>
                  <li>Terlambat 1 kali: surat teguran tertulis</li>
                  <li>Terlambat 2 kali berturut-turut: teguran tertulis, ditembuskan ke pihak pengawasan terkait</li>
                  <li>Tidak melaksanakan 2 kali atau lebih berturut-turut: surat peringatan dan rencana pembubaran</li>
                </ul>
              </details>
              <details>
                <summary>Sanksi bagi pengurus, pengawas, pengelola, anggota</summary>
                <ul>
                  <li>Sanksi administratif, pemberhentian, atau proses hukum</li>
                  <li>Anggota dapat dikenai teguran, pembatasan hak suara, atau pembatalan status anggota</li>
                  <li>Anggota yang diberhentikan berhak membela diri di Rapat Anggota</li>
                </ul>
              </details>
              <details>
                <summary>Defisit usaha</summary>
                <ul>
                  <li>Kerugian ditutup dengan dana cadangan atas keputusan Rapat Anggota</li>
                  <li>Jika tidak cukup, defisit dibebankan ke hasil usaha tahun buku berikutnya</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
