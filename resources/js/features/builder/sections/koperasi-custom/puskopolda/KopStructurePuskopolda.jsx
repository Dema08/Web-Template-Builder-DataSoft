import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopStructurePuskopolda
 * Organizational Chart, Executive Board, Supervisory Board, and Division Units for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopStructurePuskopolda({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'kop-org-badge', type: 'badge', props: { text: 'STRUKTUR ORGANISASI', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-org-title', type: 'heading', props: { content: 'Susunan Pengurus & Dewan Pengawas Periode 2024–2029', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },

    // Executives
    {
      id: 'exec1-card',
      type: 'card',
      props: { background: '#f8fafc', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '14px', padding: '20px', shadow: 'sm', textAlign: 'center' },
      childrenComponents: [
        { id: 'ex1-badge', type: 'badge', props: { text: 'KETUA', variant: 'solid', background: '#1e40af', color: '#ffffff', fontSize: '11px', fontWeight: '700' } },
        { id: 'ex1-name', type: 'heading', props: { content: 'Ir. Budi Santoso, M.M.', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'ex1-role', type: 'paragraph', props: { content: 'Periode 2024–2029', fontSize: '13px', color: '#2563eb', fontWeight: '600' } }
      ]
    },
    {
      id: 'exec2-card',
      type: 'card',
      props: { background: '#f8fafc', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '14px', padding: '20px', shadow: 'sm', textAlign: 'center' },
      childrenComponents: [
        { id: 'ex2-badge', type: 'badge', props: { text: 'WAKIL KETUA', variant: 'solid', background: '#2563eb', color: '#ffffff', fontSize: '11px', fontWeight: '700' } },
        { id: 'ex2-name', type: 'heading', props: { content: 'AKBP (Purn) Suryanto, S.H.', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'ex2-role', type: 'paragraph', props: { content: 'Periode 2024–2029', fontSize: '13px', color: '#2563eb', fontWeight: '600' } }
      ]
    },
    {
      id: 'exec3-card',
      type: 'card',
      props: { background: '#f8fafc', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '14px', padding: '20px', shadow: 'sm', textAlign: 'center' },
      childrenComponents: [
        { id: 'ex3-badge', type: 'badge', props: { text: 'SEKRETARIS', variant: 'solid', background: '#2563eb', color: '#ffffff', fontSize: '11px', fontWeight: '700' } },
        { id: 'ex3-name', type: 'heading', props: { content: 'Kompol (Purn) Dewi Lestari, S.E.', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'ex3-role', type: 'paragraph', props: { content: 'Periode 2024–2029', fontSize: '13px', color: '#2563eb', fontWeight: '600' } }
      ]
    },
    {
      id: 'exec4-card',
      type: 'card',
      props: { background: '#f8fafc', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '14px', padding: '20px', shadow: 'sm', textAlign: 'center' },
      childrenComponents: [
        { id: 'ex4-badge', type: 'badge', props: { text: 'BENDAHARA', variant: 'solid', background: '#2563eb', color: '#ffffff', fontSize: '11px', fontWeight: '700' } },
        { id: 'ex4-name', type: 'heading', props: { content: 'AKP (Purn) Rina Wati, S.Ak.', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'ex4-role', type: 'paragraph', props: { content: 'Periode 2024–2029', fontSize: '13px', color: '#2563eb', fontWeight: '600' } }
      ]
    },

    // Supervisors
    {
      id: 'sup1-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '14px', padding: '20px', shadow: 'sm', textAlign: 'center' },
      childrenComponents: [
        { id: 's1-badge', type: 'badge', props: { text: 'KETUA PENGAWAS', variant: 'solid', background: '#1e40af', color: '#ffffff', fontSize: '11px', fontWeight: '700' } },
        { id: 's1-name', type: 'heading', props: { content: 'Kombes (Purn) Ahmad Fauzi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 's1-desc', type: 'paragraph', props: { content: 'Ketua Dewan Pengawas', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'sup2-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '14px', padding: '20px', shadow: 'sm', textAlign: 'center' },
      childrenComponents: [
        { id: 's2-badge', type: 'badge', props: { text: 'ANGGOTA PENGAWAS', variant: 'solid', background: '#2563eb', color: '#ffffff', fontSize: '11px', fontWeight: '700' } },
        { id: 's2-name', type: 'heading', props: { content: 'AKP (Purn) Sri Handayani', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 's2-desc', type: 'paragraph', props: { content: 'Anggota Dewan Pengawas', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'sup3-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '14px', padding: '20px', shadow: 'sm', textAlign: 'center' },
      childrenComponents: [
        { id: 's3-badge', type: 'badge', props: { text: 'ANGGOTA PENGAWAS', variant: 'solid', background: '#2563eb', color: '#ffffff', fontSize: '11px', fontWeight: '700' } },
        { id: 's3-name', type: 'heading', props: { content: 'Ipda (Purn) Bambang Wijaya', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 's3-desc', type: 'paragraph', props: { content: 'Anggota Dewan Pengawas', fontSize: '13px', color: '#475569' } }
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-org-badge');
  const titleC = lc.filter(c => c.id === 'kop-org-title');
  const ex1 = lc.filter(c => c.id === 'exec1-card');
  const ex2 = lc.filter(c => c.id === 'exec2-card');
  const ex3 = lc.filter(c => c.id === 'exec3-card');
  const ex4 = lc.filter(c => c.id === 'exec4-card');
  const sup1 = lc.filter(c => c.id === 'sup1-card');
  const sup2 = lc.filter(c => c.id === 'sup2-card');
  const sup3 = lc.filter(c => c.id === 'sup3-card');

  const divisions = [
    { title: 'Bidang Simpan Pinjam', desc: 'Pengelolaan simpanan anggota dan penyaluran fasilitas pinjaman bunga rendah.' },
    { title: 'Bidang Perdagangan', desc: 'Pengadaan sembako dan distribusi barang konsumsi toko primer kepolisian.' },
    { title: 'Bidang Jasa', desc: 'Layanan pembayaran utilitas PPOB, kemitraan logistik, dan administrasi ATK.' },
    { title: 'Bidang Humas & Keanggotaan', desc: 'Pendaftaran anggota baru, penerbitan KTA, dan pelayanan pengaduan.' },
  ];

  return (
    <section id="struktur" className="py-20 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <p className="text-slate-600 text-sm sm:text-base">
            Kepengurusan yang amanah, transparan, dan berorientasi pada pelayanan optimal untuk seluruh anggota.
          </p>
        </div>

        {/* Diagram Card */}
        <div className="bg-white border border-blue-200 rounded-2xl p-6 lg:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-[#1e40af] text-center mb-6">
            Bagan Struktur Organisasi
          </h3>
          <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-6 overflow-x-auto text-center font-mono text-xs sm:text-sm text-blue-900 whitespace-pre">
{`                     ┌────────────────────────┐
                     │       K E T U A        │
                     │ Ir. Budi Santoso, M.M. │
                     └───────────┬────────────┘
                                 │
           ┌─────────────────────┴─────────────────────┐
           │                                           │
┌──────────────────────┐                   ┌──────────────────────┐
│     WAKIL KETUA      │                   │    DEWAN PENGAWAS    │
│ AKBP (P) Suryanto, SH│                   │Kombes (P) Ahmad Fauzi│
└──────────┬───────────┘                   └──────────────────────┘
           │
     ┌─────┴───────────────────────────────────┐
     │                     │                   │
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  SEKRETARIS  │    │  BENDAHARA   │    │ BIDANG/UNIT  │
│Kompol (P)Dewi│    │ AKP (P) Rina │    │ Operasional  │
└──────────────┘    └──────────────┘    └──────────────┘`}
          </div>
        </div>

        {/* Executive Board 4 Cards */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
            Dewan Pengurus
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>{renderLayoutComponents(ex1, sectionId)}</div>
            <div>{renderLayoutComponents(ex2, sectionId)}</div>
            <div>{renderLayoutComponents(ex3, sectionId)}</div>
            <div>{renderLayoutComponents(ex4, sectionId)}</div>
          </div>
        </div>

        {/* Supervisory Board 3 Cards */}
        <div className="bg-[#dbeafe] rounded-2xl p-8 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900">
              Dewan Pengawas Independen
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Melakukan pengawasan berkala atas kepatuhan hukum dan kinerja keuangan koperasi.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>{renderLayoutComponents(sup1, sectionId)}</div>
            <div>{renderLayoutComponents(sup2, sectionId)}</div>
            <div>{renderLayoutComponents(sup3, sectionId)}</div>
          </div>
        </div>

        {/* 4 Division Units */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
            Bidang / Unit Kerja
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((div, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                  Divisi {idx + 1}
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-3">{div.title}</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{div.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
