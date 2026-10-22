import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFAQDompetkita — Pertanyaan yang Sering Diajukan
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, question, and answer is fully editable in Right Inspector & Canvas.
 */
export default function KopFAQDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-faq-title', type: 'heading', props: { content: 'Pertanyaan yang sering diajukan', level: 'h2' } },

    {
      id: 'dompet-faq-c1-card',
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
      },
      childrenComponents: [
        { id: 'dompet-faq-q1', type: 'heading', props: { content: 'Siapa yang dapat menjadi anggota KOPERASI DOMPETKITA BERSAMA?', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#0F172A' } },
        { id: 'dompet-faq-a1', type: 'text', props: { content: 'Karyawan perusahaan yang sudah terdaftar dan memiliki akun di Dompetkita.id, memenuhi persyaratan AD/ART, dan telah diterima melalui proses pendaftaran koperasi. Ketentuan perusahaan/program yang relevan juga harus dipenuhi.', fontSize: '15.5px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-faq-c2-card',
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
      },
      childrenComponents: [
        { id: 'dompet-faq-q2', type: 'heading', props: { content: 'Apakah suara anggota berbeda menurut besar simpanan?', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#0F172A' } },
        { id: 'dompet-faq-a2', type: 'text', props: { content: 'Tidak. Setiap anggota hanya punya satu suara dan tidak bisa diwakilkan.', fontSize: '15.5px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-faq-c3-card',
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
      },
      childrenComponents: [
        { id: 'dompet-faq-q3', type: 'heading', props: { content: 'Kapan saya menerima SHU?', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#0F172A' } },
        { id: 'dompet-faq-a3', type: 'text', props: { content: 'SHU dibagikan setelah disahkan di Rapat Anggota Tahunan. Bagian anggota dihitung dari transaksi usaha dan simpanan wajib.', fontSize: '15.5px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-faq-c4-card',
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
      },
      childrenComponents: [
        { id: 'dompet-faq-q4', type: 'heading', props: { content: 'Bisakah simpanan diambil kembali?', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#0F172A' } },
        { id: 'dompet-faq-a4', type: 'text', props: { content: 'Simpanan pokok tidak bisa diambil selama masih anggota. Anggota yang keluar berhak atas pengembalian simpanannya.', fontSize: '15.5px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-faq-c5-card',
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
      },
      childrenComponents: [
        { id: 'dompet-faq-q5', type: 'heading', props: { content: 'Bagaimana jika saya tidak setuju dengan keputusan pengurus?', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#0F172A' } },
        { id: 'dompet-faq-a5', type: 'text', props: { content: 'Anda berhak menyampaikan pendapat kepada Pengurus dan Pengawas kapan saja, serta meminta diadakan Rapat Anggota.', fontSize: '15.5px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-faq-c6-card',
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
      },
      childrenComponents: [
        { id: 'dompet-faq-q6', type: 'heading', props: { content: 'Apakah semua pemilik akun Dompetkita otomatis menjadi anggota koperasi?', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#0F172A' } },
        { id: 'dompet-faq-a6', type: 'text', props: { content: 'Tidak. Calon anggota harus merupakan karyawan perusahaan, memiliki akun Dompetkita.id, memenuhi ketentuan keanggotaan, dan menyelesaikan proses penerimaan anggota koperasi.', fontSize: '15.5px', color: '#475569' } },
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
  const faqCards = lc.filter(c => c.type === 'card' || (c.id && c.id.includes('faq-c') && c.id.includes('card')));

  return (
    <div className="dk-root">
      <section id="faq">
        <div className="wrap">
          <h2>
            {renderLayoutComponents(getComp('dompet-faq-title'), sectionId)}
          </h2>

          <div className="faq-list">
            {renderLayoutComponents(faqCards, sectionId)}
          </div>
        </div>
      </section>
    </div>
  );
}
