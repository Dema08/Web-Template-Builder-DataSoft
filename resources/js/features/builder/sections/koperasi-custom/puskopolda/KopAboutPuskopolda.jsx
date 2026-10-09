import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopAboutPuskopolda
 * Profile, History Timeline, Vision, Mission, and 6 Core Values for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopAboutPuskopolda({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'kop-about-badge', type: 'badge', props: { text: 'TENTANG KAMI', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-about-title', type: 'heading', props: { content: 'Membangun Masa Depan Sejahtera Bersama Koperasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
    { id: 'kop-about-profile', type: 'paragraph', props: { content: 'Pusat Koperasi Kepolisian Daerah merupakan wadah koperasi yang berperan dalam mendukung peningkatan kesejahteraan anggota melalui pengelolaan usaha yang profesional, transparan, dan berorientasi pada pelayanan.', fontSize: '16px', color: '#475569' } },

    // Vision & Mission Cards
    {
      id: 'kop-vision-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'sm' },
      childrenComponents: [
        { id: 'v-badge', type: 'badge', props: { text: 'VISI UTAMA', variant: 'solid', background: '#1e40af', color: '#ffffff' } },
        { id: 'v-title', type: 'heading', props: { content: 'Visi Puskopolda', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a' } },
        { id: 'v-desc', type: 'paragraph', props: { content: 'Menjadi koperasi yang profesional, modern, dan terpercaya dalam mendukung kesejahteraan anggota Polri dan masyarakat.', fontSize: '15px', color: '#1e40af', fontWeight: '600' } }
      ]
    },
    {
      id: 'kop-mission-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'sm' },
      childrenComponents: [
        { id: 'm-badge', type: 'badge', props: { text: 'MISI STRATEGIS', variant: 'solid', background: '#2563eb', color: '#ffffff' } },
        { id: 'm-title', type: 'heading', props: { content: 'Misi Puskopolda', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a' } },
        { id: 'm-desc', type: 'paragraph', props: { content: '1. Mengembangkan usaha koperasi yang profesional dan berkelanjutan.\n2. Meningkatkan pelayanan kepada anggota.\n3. Meningkatkan partisipasi anggota dalam kegiatan koperasi.\n4. Mengembangkan SDM koperasi yang kompeten.', fontSize: '14px', color: '#475569' } }
      ]
    },

    // 6 Values Cards
    {
      id: 'val1-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '12px', padding: '20px' },
      childrenComponents: [
        { id: 'val1-icon', type: 'badge', props: { text: '🛡️ Integritas', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '12px', fontWeight: '700' } },
        { id: 'val1-title', type: 'heading', props: { content: 'Integritas', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a' } },
        { id: 'val1-desc', type: 'paragraph', props: { content: 'Jujur dan konsisten dalam memegang amanah perkoperasian.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'val2-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '12px', padding: '20px' },
      childrenComponents: [
        { id: 'val2-icon', type: 'badge', props: { text: '⚡ Profesionalisme', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '12px', fontWeight: '700' } },
        { id: 'val2-title', type: 'heading', props: { content: 'Profesionalisme', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a' } },
        { id: 'val2-desc', type: 'paragraph', props: { content: 'Kompeten dan bertanggung jawab atas pengelolaan bisnis.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'val3-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '12px', padding: '20px' },
      childrenComponents: [
        { id: 'val3-icon', type: 'badge', props: { text: '🤝 Kebersamaan', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '12px', fontWeight: '700' } },
        { id: 'val3-title', type: 'heading', props: { content: 'Kebersamaan', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a' } },
        { id: 'val3-desc', type: 'paragraph', props: { content: 'Gotong royong sebagai ruh utama peningkatan kesejahteraan.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'val4-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '12px', padding: '20px' },
      childrenComponents: [
        { id: 'val4-icon', type: 'badge', props: { text: '🔍 Transparansi', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '12px', fontWeight: '700' } },
        { id: 'val4-title', type: 'heading', props: { content: 'Transparansi', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a' } },
        { id: 'val4-desc', type: 'paragraph', props: { content: 'Terbuka dan akuntabel dalam pelaporan keuangan.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'val5-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '12px', padding: '20px' },
      childrenComponents: [
        { id: 'val5-icon', type: 'badge', props: { text: '📋 Akuntabilitas', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '12px', fontWeight: '700' } },
        { id: 'val5-title', type: 'heading', props: { content: 'Akuntabilitas', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a' } },
        { id: 'val5-desc', type: 'paragraph', props: { content: 'Dapat dipertanggungjawabkan kepada seluruh anggota dan hukum.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'val6-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '12px', padding: '20px' },
      childrenComponents: [
        { id: 'val6-icon', type: 'badge', props: { text: '🌟 Pelayanan', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '12px', fontWeight: '700' } },
        { id: 'val6-title', type: 'heading', props: { content: 'Pelayanan', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a' } },
        { id: 'val6-desc', type: 'paragraph', props: { content: 'Mengutamakan kemudahan, keramahan, dan kepuasan anggota.', fontSize: '13px', color: '#475569' } }
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-about-badge');
  const titleC = lc.filter(c => c.id === 'kop-about-title');
  const profileC = lc.filter(c => c.id === 'kop-about-profile');
  const visionC = lc.filter(c => c.id === 'kop-vision-card');
  const missionC = lc.filter(c => c.id === 'kop-mission-card');
  const val1 = lc.filter(c => c.id === 'val1-card');
  const val2 = lc.filter(c => c.id === 'val2-card');
  const val3 = lc.filter(c => c.id === 'val3-card');
  const val4 = lc.filter(c => c.id === 'val4-card');
  const val5 = lc.filter(c => c.id === 'val5-card');
  const val6 = lc.filter(c => c.id === 'val6-card');

  const timelineSteps = [
    { year: '1998', title: 'Berdiri', desc: 'Berdiri dengan nama Koperasi Kepolisian untuk kesejahteraan anggota.' },
    { year: '2005', title: 'Transformasi', desc: 'Berganti nama menjadi Puskopolda dengan reorganisasi menyeluruh.' },
    { year: '2010', title: 'Simpan Pinjam', desc: 'Pembukaan unit usaha Simpan Pinjam dengan bunga bersahabat.' },
    { year: '2015', title: 'Ekspansi Perdagangan', desc: 'Ekspansi ke perdagangan umum & penyediaan sembako grosir.' },
    { year: '2020', title: 'Digitalisasi', desc: 'Digitalisasi layanan administrasi dan pelaporan keuangan.' },
    { year: '2026', title: '2.500+ Anggota', desc: 'Terus berkembang dengan 2.500+ anggota aktif dan 12 unit kerja.' },
  ];

  return (
    <section id="tentang" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header & Profile */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed text-slate-600 text-base lg:text-lg">{renderLayoutComponents(profileC, sectionId)}</div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>{renderLayoutComponents(visionC, sectionId)}</div>
          <div>{renderLayoutComponents(missionC, sectionId)}</div>
        </div>

        {/* History Timeline */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              PERJALANAN KAMI
            </span>
            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mt-2">
              Sejarah Perkembangan Puskopolda
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-blue-100 rounded-xl p-5 shadow-xs relative">
                <div className="text-2xl font-black text-[#1e40af]">{step.year}</div>
                <div className="text-base font-bold text-slate-900 mt-1">{step.title}</div>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Core Values */}
        <div className="bg-[#dbeafe] rounded-2xl p-8 lg:p-10 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold px-3 py-1 bg-white text-blue-800 rounded-full shadow-xs">
              NILAI-NILAI UTAMA
            </span>
            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mt-2">
              6 Pilar Nilai Puskopolda
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>{renderLayoutComponents(val1, sectionId)}</div>
            <div>{renderLayoutComponents(val2, sectionId)}</div>
            <div>{renderLayoutComponents(val3, sectionId)}</div>
            <div>{renderLayoutComponents(val4, sectionId)}</div>
            <div>{renderLayoutComponents(val5, sectionId)}</div>
            <div>{renderLayoutComponents(val6, sectionId)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
