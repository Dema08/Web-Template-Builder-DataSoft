import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopKeanggotaanDompetkita — Keanggotaan KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, text, chip, step card, and accordion title is fully draggable, resizable, and editable.
 */
export default function KopKeanggotaanDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-kg-who-title', type: 'heading', props: { content: 'Siapa yang dapat menjadi anggota?', level: 'h2' } },
    { id: 'dompet-kg-who-lead', type: 'text', props: { content: 'Keanggotaan ditujukan bagi karyawan perusahaan yang sudah terdaftar dan memiliki akun Dompetkita.id serta memenuhi proses penerimaan anggota sesuai AD/ART koperasi.' } },
    { id: 'dompet-kg-who-chip1', type: 'text', props: { content: 'Karyawan perusahaan' } },
    { id: 'dompet-kg-who-chip2', type: 'text', props: { content: 'Akun Dompetkita.id aktif/terdaftar' } },
    { id: 'dompet-kg-who-chip3', type: 'text', props: { content: 'Karyawan perusahaan yang memenuhi ketentuan program' } },
    { id: 'dompet-kg-who-chip4', type: 'text', props: { content: 'Calon anggota yang memenuhi AD/ART' } },
    { id: 'dompet-kg-title', type: 'heading', props: { content: 'Keanggotaan', level: 'h2' } },
    { id: 'dompet-kg-lead', type: 'text', props: { content: 'Syarat utama: calon anggota sudah terdaftar dan memiliki akun Dompetkita.id serta merupakan karyawan perusahaan. Status akun tidak otomatis memberikan keanggotaan; calon anggota tetap harus diterima sesuai AD/ART koperasi.' } },

    // 4 Resizable and Draggable Step Cards
    {
      id: 'dompet-kg-s1-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '23px 20px', width: '100%',
        iconSvg: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="9" y="3" width="14" height="26" rx="4" /><path d="M14 7h4M16 24h.01" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-kg-s1-title', type: 'heading', props: { content: 'Punya akun Dompetkita.id', level: 'h4' } },
        { id: 'dompet-kg-s1-desc', type: 'text', props: { content: 'Daftar dan miliki akun di Dompetkita.id.' } },
      ],
    },
    {
      id: 'dompet-kg-s2-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '23px 20px', width: '100%',
        iconSvg: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="8" width="24" height="18" rx="4" /><path d="M12 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M11 17l4 4 7-8" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-kg-s2-title', type: 'heading', props: { content: 'Verifikasi karyawan', level: 'h4' } },
        { id: 'dompet-kg-s2-desc', type: 'text', props: { content: 'Status akun dan karyawan diverifikasi.' } },
      ],
    },
    {
      id: 'dompet-kg-s3-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '23px 20px', width: '100%',
        iconSvg: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 3h12l5 5v21H8z" /><path d="M20 3v5h5M12 15h9M12 20h9M12 25h5" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-kg-s3-title', type: 'heading', props: { content: 'Setujui AD/ART', level: 'h4' } },
        { id: 'dompet-kg-s3-desc', type: 'text', props: { content: 'Setujui AD/ART serta ketentuan keanggotaan.' } },
      ],
    },
    {
      id: 'dompet-kg-s4-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '23px 20px', width: '100%',
        iconSvg: '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12" /><path d="M16 9v14M12 12.5c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5-1.8 2.5-4 2.5-4 1-4 2.5 1.8 2.5 4 2.5 4-1 4-2.5" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-kg-s4-title', type: 'heading', props: { content: 'Bayar simpanan pokok', level: 'h4' } },
        { id: 'dompet-kg-s4-desc', type: 'text', props: { content: 'Lunasi simpanan pokok sesuai ketentuan.' } },
      ],
    },

    { id: 'dompet-kg-note', type: 'text', props: { content: 'Ketentuan inti: calon anggota wajib memiliki akun Dompetkita.id dan berstatus sebagai karyawan perusahaan. Jika program koperasi mensyaratkan perusahaan mitra Dompetkita, status tersebut juga harus dipenuhi. Akun saja tidak otomatis menjadikan seseorang anggota koperasi.' } },

    {
      id: 'dompet-kg-acc1-card',
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
        contentHtml: '<ul><li>Sudah terdaftar dan memiliki akun di <a href="https://dompetkita.id/" target="_blank" rel="noopener noreferrer">Dompetkita.id</a></li><li>Merupakan karyawan dari perusahaan; status perusahaan harus memenuhi ketentuan program/keanggotaan yang berlaku</li><li>Memenuhi ketentuan kecakapan hukum dan persyaratan keanggotaan dalam AD/ART</li><li>Mengajukan pendaftaran serta melengkapi data yang diperlukan untuk verifikasi status akun dan karyawan</li><li>Menyetujui AD/ART serta ketentuan keanggotaan koperasi</li><li>Melunasi simpanan pokok sesuai ketentuan yang ditetapkan</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-kg-acc1-sum', type: 'heading', props: { content: 'Syarat menjadi anggota', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-kg-acc2-card',
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
        contentHtml: '<ul><li>Mematuhi AD/ART dan keputusan Rapat Anggota</li><li>Menghadiri Rapat Anggota</li><li>Ikut mengawasi organisasi dan usaha koperasi</li><li>Membayar simpanan pokok dan simpanan wajib</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-kg-acc2-sum', type: 'heading', props: { content: 'Kewajiban anggota', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-kg-acc3-card',
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
        contentHtml: '<ul><li>Memberi suara dan pendapat di Rapat Anggota</li><li>Memilih dan dipilih menjadi Pengurus atau Pengawas</li><li>Mendapat pelayanan usaha koperasi</li><li>Mendapat keterangan tentang perkembangan koperasi</li><li>Menerima bagian Sisa Hasil Usaha (SHU)</li><li>Menerima pengembalian simpanan jika keluar</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-kg-acc3-sum', type: 'heading', props: { content: 'Hak anggota', level: 'h4' } },
      ],
    },
    {
      id: 'dompet-kg-acc4-card',
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
        contentHtml: '<ul><li>Status anggota luar biasa hanya berlaku jika diatur dalam AD/ART koperasi</li><li>Kepemilikan akun Dompetkita.id saja tidak otomatis menjadikan seseorang anggota koperasi apabila yang bersangkutan bukan karyawan perusahaan atau belum diterima sebagai anggota</li></ul>',
      },
      childrenComponents: [
        { id: 'dompet-kg-acc4-sum', type: 'heading', props: { content: 'Anggota luar biasa', level: 'h4' } },
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
  const flowCards = lc.filter(c => c.type === 'card' && c.id && c.id.includes('dompet-kg-s'));

  return (
    <div className="dk-root">
      {/* Siapa yang dapat menjadi anggota */}
      <section>
        <div className="wrap">
          <h2>{renderLayoutComponents(getComp('dompet-kg-who-title'), sectionId)}</h2>
          <p className="lead">{renderLayoutComponents(getComp('dompet-kg-who-lead'), sectionId)}</p>
          <ul className="chips">
            <li>{renderLayoutComponents(getComp('dompet-kg-who-chip1'), sectionId)}</li>
            <li>{renderLayoutComponents(getComp('dompet-kg-who-chip2'), sectionId)}</li>
            <li>{renderLayoutComponents(getComp('dompet-kg-who-chip3'), sectionId)}</li>
            <li>{renderLayoutComponents(getComp('dompet-kg-who-chip4'), sectionId)}</li>
          </ul>
        </div>
      </section>

      {/* Keanggotaan */}
      <section id="anggota">
        <div className="wrap">
          <h2>
            {renderLayoutComponents(getComp('dompet-kg-title'), sectionId)}
          </h2>
          <p className="lead">
            {renderLayoutComponents(getComp('dompet-kg-lead'), sectionId)}
          </p>

          <div className="flow">
            {renderLayoutComponents(flowCards, sectionId)}
          </div>

          <div className="two">
            <div>
              <p className="note">
                {renderLayoutComponents(getComp('dompet-kg-note'), sectionId)}
              </p>
              {renderLayoutComponents(getComp('dompet-kg-acc1-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-kg-acc2-card'), sectionId)}
            </div>
            <div>
              {renderLayoutComponents(getComp('dompet-kg-acc3-card'), sectionId)}
              {renderLayoutComponents(getComp('dompet-kg-acc4-card'), sectionId)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
