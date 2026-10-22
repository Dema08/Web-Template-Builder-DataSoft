import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopUnitUsahaDompetkita — Unit Usaha KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, text, chip, and unit card is fully draggable, resizable, and editable in Right Inspector & Canvas.
 */
export default function KopUnitUsahaDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-uu-title', type: 'heading', props: { content: 'Unit usaha', level: 'h2' } },
    { id: 'dompet-uu-lead', type: 'text', props: { content: 'Unit usaha koperasi umum dikembangkan berdasarkan kebutuhan anggota, peluang pasar, kelayakan usaha, dan keputusan Rapat Anggota. Koperasi merupakan badan usaha tersendiri; kegiatan dan manfaatnya mengikuti AD/ART, perizinan, serta perjanjian yang relevan. Dompetkita.id menjadi salah satu persyaratan akun bagi calon anggota sesuai ketentuan keanggotaan koperasi.' } },
    { id: 'dompet-uu-chip1', type: 'text', props: { content: 'Usaha utama: dikembangkan sesuai kebutuhan anggota dan hasil keputusan Rapat Anggota' } },
    { id: 'dompet-uu-chip2', type: 'text', props: { content: 'Pilihan usaha tambahan: sesuai kelayakan, ketentuan, dan perizinan' } },

    // 6 Resizable and Draggable Unit Cards
    {
      id: 'dompet-uu1-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 20h32l-4 18H12z" /><path d="M16 20l6-10M32 20l-6-10" /><path d="M19 27v5M24 27v5M29 27v5" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-uu1-title', type: 'heading', props: { content: 'Perdagangan & pangan', level: 'h3' } },
        { id: 'dompet-uu1-desc', type: 'text', props: { content: 'Penyediaan dan perdagangan bahan pangan, produk pertanian, kebutuhan pokok, serta perlengkapan usaha sesuai peluang pasar.' } },
      ],
    },
    {
      id: 'dompet-uu2-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M20 8c7 0 12 11 12 19a12 12 0 0 1-24 0c0-8 5-19 12-19z" /><path d="M33 22c5 0 8 7 8 12a8 8 0 0 1-14 5" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-uu2-title', type: 'heading', props: { content: 'Peternakan', level: 'h3' } },
        { id: 'dompet-uu2-desc', type: 'text', props: { content: 'Budi daya ayam ras petelur.' } },
      ],
    },
    {
      id: 'dompet-uu3-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="9" width="30" height="30" rx="9" /><path d="M24 16v16M16 24h16" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-uu3-title', type: 'heading', props: { content: 'Kesehatan', level: 'h3' } },
        { id: 'dompet-uu3-desc', type: 'text', props: { content: 'Layanan kesehatan dan perdagangan eceran produk kesehatan sesuai perizinan yang berlaku.' } },
      ],
    },
    {
      id: 'dompet-uu4-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 21L24 8l18 13v19H6z" /><path d="M16 40V28h16v12M16 34h16" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-uu4-title', type: 'heading', props: { content: 'Logistik & gudang', level: 'h3' } },
        { id: 'dompet-uu4-desc', type: 'text', props: { content: 'Pergudangan, penyimpanan barang, dan layanan distribusi.' } },
      ],
    },
    {
      id: 'dompet-uu5-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="6" /><circle cx="24" cy="24" r="14" strokeWidth="5" strokeDasharray="4.4 4.4" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-uu5-title', type: 'heading', props: { content: 'Jasa', level: 'h3' } },
        { id: 'dompet-uu5-desc', type: 'text', props: { content: 'Pembayaran, reparasi alat elektronik, dan penyelenggaraan acara khusus.' } },
      ],
    },
    {
      id: 'dompet-uu6-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 15c0-3 6-5 14-5s14 2 14 5-6 5-14 5-14-2-14-5z" /><path d="M10 15v8c0 3 6 5 14 5s14-2 14-5v-8M10 23v8c0 3 6 5 14 5s14-2 14-5v-8" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-uu6-title', type: 'heading', props: { content: 'Simpan pinjam', level: 'h3' } },
        { id: 'dompet-uu6-desc', type: 'text', props: { content: 'Layanan simpan pinjam bagi anggota sesuai ketentuan, perizinan, dan kemampuan koperasi.' } },
      ],
    },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const getComp = id => lc.filter(c => c.id === id);
  const unitCards = lc.filter(c => c.type === 'card' || (c.id && c.id.includes('uu') && c.id.includes('card')));

  return (
    <div className="dk-root">
      <section id="usaha">
        <div className="wrap">
          <h2>
            {renderLayoutComponents(getComp('dompet-uu-title'), sectionId)}
          </h2>
          <p className="lead">
            {renderLayoutComponents(getComp('dompet-uu-lead'), sectionId)}
          </p>

          <ul className="chips" style={{ marginBottom: '28px' }}>
            <li className="main">{renderLayoutComponents(getComp('dompet-uu-chip1'), sectionId)}</li>
            <li>{renderLayoutComponents(getComp('dompet-uu-chip2'), sectionId)}</li>
          </ul>

          <div className="units">
            {renderLayoutComponents(unitCards, sectionId)}
          </div>
        </div>
      </section>
    </div>
  );
}
