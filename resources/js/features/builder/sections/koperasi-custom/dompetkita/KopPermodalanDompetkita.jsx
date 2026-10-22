import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopPermodalanDompetkita — Permodalan KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, text, growth chart, and accordion is fully draggable, resizable, and editable.
 */
export default function KopPermodalanDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-pm-title', type: 'heading', props: { content: 'Permodalan', level: 'h2' } },
    { id: 'dompet-pm-lead', type: 'text', props: { content: 'Modal koperasi terdiri dari modal sendiri dan modal pinjaman. Koperasi juga dapat menghimpun modal penyertaan.' } },
    {
      id: 'dompet-pm-chart',
      type: 'chart',
      props: {
        variant: 'growth-bar',
        bar1: 40,
        bar2: 70,
        bar3: 105,
        barColor: '#0D9488',
        accentColor: '#F59E0B',
        width: '220px',
        height: '180px',
      },
    },
    { id: 'dompet-pm-sub1', type: 'heading', props: { content: 'Modal sendiri', level: 'h3' } },
    { id: 'dompet-pm-sub2', type: 'heading', props: { content: 'Modal pinjaman dan bantuan', level: 'h3' } },

    {
      id: 'dompet-pm-acc1-card',
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
        contentHtml: '<ul><li>Dibayar sekali saat menjadi anggota</li><li>Jumlahnya sama untuk setiap anggota</li><li>Tidak bisa diambil selama masih menjadi anggota</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-pm-acc1-sum', type: 'heading', props: { content: 'Simpanan pokok', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-pm-acc2-card',
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
        contentHtml: '<ul><li>Dibayar anggota secara berkala</li><li>Menjadi dasar jasa simpanan dalam pembagian SHU</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-pm-acc2-sum', type: 'heading', props: { content: 'Simpanan wajib', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-pm-acc3-card',
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
        contentHtml: '<ul><li>Dana cadangan berasal dari penyisihan SHU, untuk memupuk modal dan menutup kerugian</li><li>Hibah tidak terikat adalah sumbangan pihak ketiga tanpa kewajiban pengembalian</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-pm-acc3-sum', type: 'heading', props: { content: 'Dana cadangan dan hibah tidak terikat', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-pm-acc4-card',
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
        contentHtml: '<ul><li>Pinjaman anggota yang memenuhi syarat</li><li>Pinjaman dari koperasi lain</li><li>Pinjaman bank dan lembaga keuangan lain</li><li>Penerbitan surat utang sesuai ketentuan</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-pm-acc4-sum', type: 'heading', props: { content: 'Sumber modal pinjaman', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-pm-acc5-card',
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
        contentHtml: '<ul><li>Pemerintah pusat, provinsi, dan kabupaten/kota dapat memberi bantuan modal</li><li>Dukungan atau bantuan dari pemerintah dan pihak lain dapat diterima sesuai ketentuan yang berlaku serta keputusan koperasi</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-pm-acc5-sum', type: 'heading', props: { content: 'Bantuan pemerintah', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-pm-acc6-card',
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
        contentHtml: '<ul><li>Biaya pra-organisasi (akta pendirian, administrasi)</li><li>Membeli barang modal seperti aset tetap</li><li>Membiayai operasional koperasi</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-pm-acc6-sum', type: 'heading', props: { content: 'Kegunaan modal', level: 'h4' } },
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
      <section id="modal">
        <div className="wrap">
          <div className="head-row">
            <div>
              <h2>
                {renderLayoutComponents(getComp('dompet-pm-title'), sectionId)}
              </h2>
              <p className="lead">
                {renderLayoutComponents(getComp('dompet-pm-lead'), sectionId)}
              </p>
            </div>
            {renderLayoutComponents(getComp('dompet-pm-chart'), sectionId)}
          </div>
          <div className="two">
            <div>
              <h3 style={{ marginBottom: '10px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>
                {renderLayoutComponents(getComp('dompet-pm-sub1'), sectionId)}
              </h3>
              {renderLayoutComponents(getComp('dompet-pm-acc1-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-pm-acc2-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-pm-acc3-card'), sectionId)}
            </div>
            <div>
              <h3 style={{ marginBottom: '10px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>
                {renderLayoutComponents(getComp('dompet-pm-sub2'), sectionId)}
              </h3>
              {renderLayoutComponents(getComp('dompet-pm-acc4-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-pm-acc5-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-pm-acc6-card'), sectionId)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
