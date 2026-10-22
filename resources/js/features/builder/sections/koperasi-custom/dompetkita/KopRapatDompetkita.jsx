import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopRapatDompetkita — Rapat Anggota: Kuorum dan Keputusan
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, text, note, subtitle, and accordion header is fully editable in Right Inspector & Canvas.
 */
export default function KopRapatDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-rapat-title', type: 'heading', props: { content: 'Rapat Anggota: kuorum dan keputusan', level: 'h2' } },
    { id: 'dompet-rapat-lead', type: 'text', props: { content: 'Rapat Anggota adalah kekuasaan tertinggi. Keputusan diambil dengan musyawarah mufakat. Jika tidak tercapai, diputuskan dengan suara terbanyak: disetujui lebih dari setengah anggota yang hadir. Suara tidak bisa diwakilkan.' } },
    { id: 'dompet-rapat-note', type: 'text', props: { content: 'Usul pembubaran atau penyelenggaraan rapat oleh anggota memerlukan dukungan sedikitnya 1/5 jumlah anggota. Rapat kedua diadakan paling lambat 30 hari setelah rapat pertama, dengan undangan paling lambat 14 hari sebelumnya.' } },
    { id: 'dompet-rapat-wewenang-title', type: 'heading', props: { content: 'Wewenang Rapat Anggota', level: 'h3' } },
    { id: 'dompet-rapat-bentuk-title', type: 'heading', props: { content: 'Bentuk rapat', level: 'h3' } },

    {
      id: 'dompet-rapat-acc1-card',
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
        contentHtml: '<ul><li>Paling lambat 6 bulan setelah tahun buku berakhir</li><li>Membahas laporan jalannya koperasi, neraca, perhitungan hasil usaha, dan SHU</li><li>Pimpinan rapat dipilih dari anggota, bukan Pengurus</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-rapat-acc1-sum', type: 'heading', props: { content: 'Rapat Anggota Tahunan (RAT)', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-rapat-acc2-card',
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
        contentHtml: '<ul><li>Untuk keputusan mendesak</li><li>Contoh: menjual atau menjaminkan aset lebih dari 25% total aset, atau menerima hibah lebih dari 25% aset</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-rapat-acc2-sum', type: 'heading', props: { content: 'Rapat Anggota Luar Biasa (RALB)', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-rapat-acc3-card',
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
        contentHtml: '<ul><li>Sistem kelompok dapat dipakai bila anggota lebih dari 500 orang</li><li>Rapat tertulis: anggota diberi waktu 14 hari untuk menjawab</li><li>Rapat daring wajib memungkinkan semua peserta saling melihat dan mendengar</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-rapat-acc3-sum', type: 'heading', props: { content: 'Rapat kelompok, tertulis, dan daring', level: 'h4' } },
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
      <section id="rapat">
        <div className="wrap">
          <h2>
            {renderLayoutComponents(getComp('dompet-rapat-title'), sectionId)}
          </h2>
          <p className="lead">
            {renderLayoutComponents(getComp('dompet-rapat-lead'), sectionId)}
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
            {renderLayoutComponents(getComp('dompet-rapat-note'), sectionId)}
          </p>

          <div className="two" style={{ marginTop: '36px' }}>
            <div>
              <h3 style={{ marginBottom: '10px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>
                {renderLayoutComponents(getComp('dompet-rapat-wewenang-title'), sectionId)}
              </h3>
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
              <h3 style={{ marginBottom: '10px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>
                {renderLayoutComponents(getComp('dompet-rapat-bentuk-title'), sectionId)}
              </h3>
              {renderLayoutComponents(getComp('dompet-rapat-acc1-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-rapat-acc2-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-rapat-acc3-card'), sectionId)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
