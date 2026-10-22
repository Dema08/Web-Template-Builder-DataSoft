import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopStrukturDompetkita — Struktur Organisasi, Tata Kelola, Tugas, & Kerja Sama
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, text, node, and accordion header is fully editable in Right Inspector & Canvas.
 */
export default function KopStrukturDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-str-title', type: 'heading', props: { content: 'Struktur organisasi', level: 'h2' } },
    { id: 'dompet-str-lead', type: 'text', props: { content: 'Pengurus dipilih oleh anggota melalui Rapat Anggota. Pengurus dan Pengawas menjalankan amanah sesuai AD/ART, dengan masa jabatan dan persyaratan yang ditetapkan koperasi.' } },
    { id: 'dompet-str-node-rapat', type: 'heading', props: { content: 'Rapat Anggota', level: 'h4' } },
    { id: 'dompet-str-node-rapat-desc', type: 'text', props: { content: 'Kekuasaan tertinggi koperasi' } },
    { id: 'dompet-str-node-pengawas', type: 'heading', props: { content: 'Badan Pengawas', level: 'h4' } },
    { id: 'dompet-str-node-pengawas-desc', type: 'text', props: { content: 'Pengawasan dan nasihat' } },
    { id: 'dompet-str-node-ketua', type: 'heading', props: { content: 'Ketua', level: 'h4' } },
    { id: 'dompet-str-node-ketua-desc', type: 'text', props: { content: 'Memimpin pengurus koperasi' } },
    { id: 'dompet-str-node-wakil', type: 'heading', props: { content: 'Wakil Ketua', level: 'h4' } },
    { id: 'dompet-str-trust-title', type: 'heading', props: { content: 'Cara kami menjaga kepercayaan', level: 'h2' } },
    { id: 'dompet-str-trust-lead', type: 'text', props: { content: 'Koperasi bersifat terbuka. Anggota dapat mengetahui, memantau, dan mengevaluasi pengelolaan usaha koperasi.' } },
    {
      id: 'dompet-str-trust-shield',
      type: 'image',
      props: {
        alt: 'Ilustrasi Perisai Pengawasan',
        width: '220px',
        height: '180px',
        objectFit: 'contain',
        svgContent: '<svg viewBox="0 0 220 180" role="img" aria-label="Ilustrasi perisai dengan tanda centang dan kaca pembesar"><rect x="14" y="96" width="42" height="54" rx="8" class="f-surf s-line" stroke-width="2" /><g class="s-line" stroke-width="3" stroke-linecap="round"><path d="M23 112h24M23 122h24M23 132h14" /></g><path d="M110 16L172 38V90C172 128 146 150 110 164 74 150 48 128 48 90V38z" class="f-red" /><path d="M82 90l20 20 38-40" fill="none" class="s-surf" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" /><circle cx="168" cy="128" r="20" class="f-surf s-gold" stroke-width="8" /><path d="M183 143l18 18" class="s-gold" stroke-width="9" stroke-linecap="round" /></svg>',
      },
    },

    {
      id: 'dompet-str-trust-acc1-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: true,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Diadakan paling sedikit setahun sekali, paling lambat 6 bulan setelah tahun buku berakhir</li><li>Pengurus dan Pengawas mempertanggungjawabkan kinerja, laporan keuangan, dan pembagian SHU</li><li>Undangan beserta bahan rapat dikirim sebelum rapat dilaksanakan</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-trust-acc1', type: 'heading', props: { content: 'Rapat Anggota Tahunan', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-trust-acc2-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Pengawas memeriksa pembukuan, dokumen, dan pelaksanaan usaha</li><li>Pengurus membuat laporan keuangan dan perkembangan unit usaha setiap bulan</li><li>Kerja sama dengan pihak ketiga dibahas di Rapat Anggota</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-trust-acc2', type: 'heading', props: { content: 'Pengawasan dan laporan', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-trust-acc3-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Pengurus dilarang mengambil keuntungan pribadi di luar penghasilan yang sah</li><li>Pelanggaran dikenai sanksi administratif, pemberhentian, atau proses hukum</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-trust-acc3', type: 'heading', props: { content: 'Larangan dan sanksi', level: 'h4' } },
      ],
    },

    { id: 'dompet-str-tugas-title', type: 'heading', props: { content: 'Tugas dan tanggung jawab', level: 'h2' } },
    { id: 'dompet-str-tugas-lead', type: 'text', props: { content: 'Setiap peran punya uraian tugas tertulis agar tidak tumpang tindih.' } },
    {
      id: 'dompet-str-role-ketua-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: true,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Memimpin organisasi, rapat pengurus, dan RAT</li><li>Menjaga koperasi berjalan sesuai visi dan AD/ART</li><li>Menetapkan kelayakan pinjaman bersama pengurus</li><li>Mewakili koperasi ke pihak luar dan menandatangani perjanjian kerja sama</li><li>Melaporkan keuangan tiap bulan kepada Pengawas dan setahun sekali di Rapat Anggota</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-role-ketua', type: 'heading', props: { content: 'Ketua', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-role-wk-anggota-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Mengelola data, kartu anggota, dan simpanan anggota</li><li>Memastikan hanya anggota aktif yang memenuhi AD/ART memiliki hak suara di RAT</li><li>Menampung saran dan keluhan anggota, mendorong penyelesaian lewat musyawarah</li><li>Menyusun kaderisasi dan edukasi perkoperasian, termasuk melibatkan pemuda</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-role-wk-anggota', type: 'heading', props: { content: 'Wakil Ketua Bidang Anggota', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-role-wk-usaha-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Menyusun rencana bisnis berdasarkan kebutuhan anggota, peluang pasar, dan studi kelayakan</li><li>Mengawasi operasional unit usaha dan pelaksanaan SOP</li><li>Mengevaluasi untung-rugi, memberi masukan penutupan usaha yang tidak sehat</li><li>Menjalin kemitraan dengan perusahaan, UMKM, koperasi lain, lembaga keuangan, dan platform digital</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-role-wk-usaha', type: 'heading', props: { content: 'Wakil Ketua Bidang Usaha', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-role-sekretaris-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Menyimpan dokumen resmi: AD/ART, SK pendirian, legalitas, perizinan</li><li>Membuat notulen rapat dan mengelola surat menyurat</li><li>Menyusun laporan tahunan non-keuangan bersama Ketua</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-role-sekretaris', type: 'heading', props: { content: 'Sekretaris', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-role-bendahara-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Mencatat semua uang masuk dan keluar dengan bukti sah</li><li>Menyusun laporan keuangan harian, bulanan, dan tahunan, serta neraca dan laba/rugi</li><li>Menyusun anggaran dan memastikan pengeluaran tidak melebihi anggaran</li><li>Tidak mencampur uang koperasi dengan uang pribadi, bersedia diaudit</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-role-bendahara', type: 'heading', props: { content: 'Bendahara', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-role-pengawas-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: true,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Mengawasi kebijakan dan jalannya pengurusan koperasi</li><li>Memberi nasihat, saran, atau teguran bila ada penyimpangan</li><li>Memeriksa pembukuan, dokumen, dan pelaksanaan usaha</li><li>Melakukan audit investigatif atas perintah Rapat Anggota</li><li>Memberi persetujuan atas pinjaman modal dan kerja sama tertentu</li><li>Menyampaikan laporan pengawasan tahunan kepada Rapat Anggota</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-role-pengawas', type: 'heading', props: { content: 'Badan Pengawas', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-role-manajer-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Menyusun program kerja dan laporan kinerja unit usaha</li><li>Mengelola dan mengendalikan unit usaha di bawah wewenangnya</li><li>Memberi informasi usaha kepada pihak berkepentingan</li><li>Diangkat dengan perjanjian kerja, disetujui Rapat Anggota</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-role-manajer', type: 'heading', props: { content: 'Pengelola / manajer unit usaha', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-role-karyawan-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Menjalankan tugas sesuai SOP dan keputusan pengurus</li><li>Melayani konsumen dan membantu pengecekan barang dagangan</li><li>Menjaga kerahasiaan data dan nama baik koperasi</li><li>Bertanggung jawab kepada manajer unit usaha</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-role-karyawan', type: 'heading', props: { content: 'Pegawai / karyawan', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-role-syarat-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Pengurus dan Pengawas dipilih dari anggota, masa jabatan 5 tahun, boleh dipilih kembali</li><li>Pengurus dan Pengawas harus memenuhi persyaratan yang ditetapkan dalam peraturan perundang-undangan serta AD/ART koperasi</li><li>Minimal 5 Pengurus (jumlah ganjil); Pengawas minimal 1 ketua dan 2 anggota</li><li>Pengganti antarwaktu dipilih Rapat Anggota paling lambat 1 bulan sejak kekosongan</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-role-syarat', type: 'heading', props: { content: 'Syarat dan masa jabatan', level: 'h4' } },
      ],
    },
    { id: 'dompet-str-ks-title', type: 'heading', props: { content: 'Kerja sama, pembubaran, dan sanksi', level: 'h2' } },

    {
      id: 'dompet-str-ks-acc1-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: true,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Dibahas dulu di Rapat Anggota dan dikonsultasikan dengan Pengawas</li><li>Jangka waktu maksimum 10 tahun, dapat diperpanjang</li><li>Naskah perjanjian memuat: subjek, kerja sama, jangka waktu, hak dan kewajiban, pendanaan, keadaan memaksa, pengalihan aset, dan penyelesaian perselisihan</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-ks-acc1', type: 'heading', props: { content: 'Kerja sama dengan pihak ketiga', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-ks-acc2-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Membeli, menjual, atau mengagunkan barang tidak bergerak</li><li>Meminjam atau meminjamkan uang atas nama koperasi</li><li>Menanam kekayaan di usaha lain</li><li>Menjadi penjamin utang pihak lain</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-ks-acc2', type: 'heading', props: { content: 'Tindakan yang perlu persetujuan Rapat Anggota', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-ks-acc3-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Atas keputusan Rapat Anggota atau karena jangka waktu berakhir</li><li>Pemerintah dapat membubarkan koperasi yang tidak beraktivitas 2 tahun berturut-turut atau tidak menggelar rapat anggota 3 tahun berturut-turut</li><li>Jika koperasi tak mampu membayar pihak ketiga, anggota hanya menanggung sebatas simpanan yang dimiliki</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-ks-acc3', type: 'heading', props: { content: 'Pembubaran', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-ks-acc4-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: true,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Terlambat 1 kali: surat teguran tertulis</li><li>Terlambat 2 kali berturut-turut: teguran tertulis, ditembuskan ke pihak pengawasan terkait</li><li>Tidak melaksanakan 2 kali atau lebih berturut-turut: surat peringatan dan rencana pembubaran</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-ks-acc4', type: 'heading', props: { content: 'Sanksi bila RAT tidak dilaksanakan', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-ks-acc5-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Sanksi administratif, pemberhentian, atau proses hukum</li><li>Anggota dapat dikenai teguran, pembatasan hak suara, atau pembatalan status anggota</li><li>Anggota yang diberhentikan berhak membela diri di Rapat Anggota</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-ks-acc5', type: 'heading', props: { content: 'Sanksi bagi pengurus, pengawas, pengelola, anggota', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-str-ks-acc6-card',
      type: 'card',
      props: {
        variant: 'accordion',
        collapsible: true,
        defaultOpen: false,
        background: '#FFFFFF',
        borderColor: '#E2E8F0',
        borderWidth: '1px',
        borderRadius: '14px',
        margin: '0px 0px 10px 0px',
        padding: '0px',
        width: '100%',
        shadow: 'none',
        contentHtml: '<ul><li>Kerugian ditutup dengan dana cadangan atas keputusan Rapat Anggota</li><li>Jika tidak cukup, defisit dibebankan ke hasil usaha tahun buku berikutnya</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-str-ks-acc6', type: 'heading', props: { content: 'Defisit usaha', level: 'h4' } },
      ],
    },
  ];

  const mergedComponents = defaultComponents.map(def => {
    const existing = components.find(c => c.id === def.id);
    if (existing) return existing;
    if (def.type === 'card' && Array.isArray(def.childrenComponents)) {
      const mergedChildren = def.childrenComponents.map(child => {
        const userChild = components.find(c => c.id === child.id);
        return userChild ? { ...child, props: { ...child.props, ...userChild.props } } : child;
      });
      return { ...def, childrenComponents: mergedChildren };
    }
    return def;
  });
  const childIds = new Set(
    mergedComponents
      .filter(c => c.type === 'card' && Array.isArray(c.childrenComponents))
      .flatMap(c => c.childrenComponents.map(ch => ch.id))
  );
  const extraComponents = components.filter(
    c => !defaultComponents.some(def => def.id === c.id) && !childIds.has(c.id)
  );
  const lc = [...mergedComponents, ...extraComponents];
  const getComp = id => lc.filter(c => c.id === id);

  return (
    <div className="dk-root">
      {/* Struktur Organisasi */}
      <section id="struktur">
        <div className="wrap">
          <h2>
            {renderLayoutComponents(getComp('dompet-str-title'), sectionId)}
          </h2>
          <p className="lead">
            {renderLayoutComponents(getComp('dompet-str-lead'), sectionId)}
          </p>

          <div className="org" tabIndex={0} role="region" aria-label="Bagan struktur organisasi KOPERASI DOMPETKITA BERSAMA, dapat digeser horizontal">
            <ul className="org-tree">
              <li>
                <div className="node top">
                  {renderLayoutComponents(getComp('dompet-str-node-rapat'), sectionId)}
                  <small>{renderLayoutComponents(getComp('dompet-str-node-rapat-desc'), sectionId)}</small>
                </div>
                <ul>
                  <li>
                    <div className="node w">
                      {renderLayoutComponents(getComp('dompet-str-node-pengawas'), sectionId)}
                      <small>{renderLayoutComponents(getComp('dompet-str-node-pengawas-desc'), sectionId)}</small>
                    </div>
                  </li>
                  <li>
                    <div className="node k">
                      {renderLayoutComponents(getComp('dompet-str-node-ketua'), sectionId)}
                      <small>{renderLayoutComponents(getComp('dompet-str-node-ketua-desc'), sectionId)}</small>
                    </div>
                    <ul>
                      <li>
                        <div className="node k">{renderLayoutComponents(getComp('dompet-str-node-wakil'), sectionId)}</div>
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
              <h2>{renderLayoutComponents(getComp('dompet-str-trust-title'), sectionId)}</h2>
              <p className="lead">{renderLayoutComponents(getComp('dompet-str-trust-lead'), sectionId)}</p>
            </div>
            {renderLayoutComponents(getComp('dompet-str-trust-shield'), sectionId)}
          </div>
          {renderLayoutComponents(getComp('dompet-str-trust-acc1-card'), sectionId)}
          {renderLayoutComponents(getComp('dompet-str-trust-acc2-card'), sectionId)}
          {renderLayoutComponents(getComp('dompet-str-trust-acc3-card'), sectionId)}
        </div>
      </section>

      {/* Tugas dan tanggung jawab */}
      <section id="tugas">
        <div className="wrap">
          <h2>{renderLayoutComponents(getComp('dompet-str-tugas-title'), sectionId)}</h2>
          <p className="lead">{renderLayoutComponents(getComp('dompet-str-tugas-lead'), sectionId)}</p>
          <div className="two">
            <div>
              {renderLayoutComponents(getComp('dompet-str-role-ketua-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-role-wk-anggota-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-role-wk-usaha-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-role-sekretaris-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-role-bendahara-card'), sectionId)}
            </div>
            <div>
              {renderLayoutComponents(getComp('dompet-str-role-pengawas-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-role-manajer-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-role-karyawan-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-role-syarat-card'), sectionId)}
            </div>
          </div>
        </div>
      </section>

      {/* Kerja sama, pembubaran, dan sanksi */}
      <section id="kerjasama">
        <div className="wrap">
          <h2>{renderLayoutComponents(getComp('dompet-str-ks-title'), sectionId)}</h2>
          <div className="two">
            <div>
              {renderLayoutComponents(getComp('dompet-str-ks-acc1-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-ks-acc2-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-ks-acc3-card'), sectionId)}
            </div>
            <div>
              {renderLayoutComponents(getComp('dompet-str-ks-acc4-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-ks-acc5-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-str-ks-acc6-card'), sectionId)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
