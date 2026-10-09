import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopServicesPuskopolda
 * 4 Core Business Units & Services for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopServicesPuskopolda({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'kop-srv-badge', type: 'badge', props: { text: 'UNIT USAHA & LAYANAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-srv-title', type: 'heading', props: { content: 'Portofolio Layanan Unggulan Puskopolda', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },

    // 4 Unit Cards
    {
      id: 'srv1-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'sm' },
      childrenComponents: [
        { id: 's1-icon', type: 'badge', props: { text: '💳 UNIT 1', variant: 'solid', background: '#1e40af', color: '#ffffff', fontSize: '12px', fontWeight: '700' } },
        { id: 's1-title', type: 'heading', props: { content: 'Simpan Pinjam', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a' } },
        { id: 's1-desc', type: 'paragraph', props: { content: '• Simpanan Pokok\n• Simpanan Wajib\n• Simpanan Sukarela\n• Pinjaman Bunga Rendah\n• Pembiayaan Modal Usaha', fontSize: '14px', color: '#475569' } }
      ]
    },
    {
      id: 'srv2-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'sm' },
      childrenComponents: [
        { id: 's2-icon', type: 'badge', props: { text: '🛒 UNIT 2', variant: 'solid', background: '#2563eb', color: '#ffffff', fontSize: '12px', fontWeight: '700' } },
        { id: 's2-title', type: 'heading', props: { content: 'Perdagangan Umum', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a' } },
        { id: 's2-desc', type: 'paragraph', props: { content: '• Sembako Berkualitas\n• Barang Konsumsi Rumah Tangga\n• Perdagangan Umum & Seragam Dinas\n• Pengadaan Bingkisan Hari Raya', fontSize: '14px', color: '#475569' } }
      ]
    },
    {
      id: 'srv3-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'sm' },
      childrenComponents: [
        { id: 's3-icon', type: 'badge', props: { text: '💼 UNIT 3', variant: 'solid', background: '#2563eb', color: '#ffffff', fontSize: '12px', fontWeight: '700' } },
        { id: 's3-title', type: 'heading', props: { content: 'Layanan Jasa & PPOB', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a' } },
        { id: 's3-desc', type: 'paragraph', props: { content: '• Pembayaran Listrik, PDAM & BPJS\n• Pengiriman Berkas & Paket Logistik\n• Fotokopi, Penjilidan & ATK Kantor\n• Administrasi Dokumen Dinas', fontSize: '14px', color: '#475569' } }
      ]
    },
    {
      id: 'srv4-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'sm' },
      childrenComponents: [
        { id: 's4-icon', type: 'badge', props: { text: '🏢 UNIT 4', variant: 'solid', background: '#3b82f6', color: '#ffffff', fontSize: '12px', fontWeight: '700' } },
        { id: 's4-title', type: 'heading', props: { content: 'Unit Usaha Lain', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a' } },
        { id: 's4-desc', type: 'paragraph', props: { content: '• Pengelolaan Kantin & Pujasera\n• Manajemen Perparkiran Terpadu\n• Gerai Retail Kop-Mart Anggota\n• Sinergi Properti Kepolisian', fontSize: '14px', color: '#475569' } }
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-srv-badge');
  const titleC = lc.filter(c => c.id === 'kop-srv-title');
  const srv1 = lc.filter(c => c.id === 'srv1-card');
  const srv2 = lc.filter(c => c.id === 'srv2-card');
  const srv3 = lc.filter(c => c.id === 'srv3-card');
  const srv4 = lc.filter(c => c.id === 'srv4-card');

  return (
    <section id="unit-usaha" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <p className="text-slate-600 text-sm sm:text-base">
            Menyediakan kemudahan transaksi, pasokan sembako terjangkau, dan fasilitas pinjaman berdaya guna bagi anggota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>{renderLayoutComponents(srv1, sectionId)}</div>
          <div>{renderLayoutComponents(srv2, sectionId)}</div>
          <div>{renderLayoutComponents(srv3, sectionId)}</div>
          <div>{renderLayoutComponents(srv4, sectionId)}</div>
        </div>
      </div>
    </section>
  );
}
