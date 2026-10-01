import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopSecurityDigital
 * FinTech Security Standards, ISO 27001 Certification & Digital Regulatory Compliance.
 * Fully supports right-inspector selection and property editing for cards, badges, and texts.
 */
export default function KopSecurityDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'sec-badge', type: 'badge', props: { text: '🔒 KEAMANAN DIGITAL BERSTANDAR BANK INTERNASIONAL', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
    { id: 'sec-title', type: 'heading', props: { content: 'Perlindungan Saldo Dana & Data Privasi Anggota Terjamin', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'sec-desc', type: 'paragraph', props: { content: 'Infrastruktur cloud berstandar industri dengan enkripsi multi-layer, otentikasi dua faktor (2FA), dan audit kepatuhan siber berkala.', fontSize: '16px', color: '#cbd5e1' } },

    // Card 1: Enkripsi AES-256
    {
      id: 'card-sec1',
      type: 'card',
      props: { background: '#041d2a', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sec1-tag', type: 'badge', props: { text: 'END-TO-END ENCRYPTION', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'sec1-title', type: 'heading', props: { content: 'Enkripsi Data 256-Bit SSL & Tokenisasi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sec1-desc', type: 'paragraph', props: { content: 'Setiap transmisi data transaksi perbankan dan data identitas anggota dilindungi algoritma enkripsi tingkat perbankan komersial.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Card 2: Biometrik Face Recognition
    {
      id: 'card-sec2',
      type: 'card',
      props: { background: '#041d2a', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sec2-tag', type: 'badge', props: { text: 'BIOMETRIC AUTH', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'sec2-title', type: 'heading', props: { content: 'Biometrik Face Recognition & Fingerprint', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sec2-desc', type: 'paragraph', props: { content: 'Login instan dan verifikasi transaksi sensitif menggunakan sensor sidik jari atau pemindai wajah yang anti-spoofing.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Card 3: Sertifikasi ISO 27001
    {
      id: 'card-sec3',
      type: 'card',
      props: { background: '#041d2a', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sec3-tag', type: 'badge', props: { text: 'ISO 27001 CERTIFIED', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
        { id: 'sec3-title', type: 'heading', props: { content: 'Manajemen Keamanan Informasi ISO 27001', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sec3-desc', type: 'paragraph', props: { content: 'Sertifikasi internasional tata kelola keamanan data digital yang menjamin kerahasiaan dan integritas data simpan pinjam.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Card 4: Legalitas Kemenkop & OJK
    {
      id: 'card-sec4',
      type: 'card',
      props: { background: '#041d2a', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sec4-tag', type: 'badge', props: { text: 'REGULASI RESMI', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'sec4-title', type: 'heading', props: { content: 'Terdaftar Resmi Kemenkop & Diawasi Satgas Koperasi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sec4-desc', type: 'paragraph', props: { content: 'Beroperasi sesuai regulasi UU Perkoperasian Indonesia dengan audit kepatuhan dan pelaporan keuangan berkala kepada kementerian terkait.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Core Banking Banner
    {
      id: 'core-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #093149 0%, #041a27 100%)', borderColor: 'rgba(6,182,212,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'core-badge', type: 'badge', props: { text: '☁️ CLOUD NATIVE MICROSERVICES CORE BANKING', variant: 'solid', background: 'rgba(6,182,212,0.25)', color: '#67e8f9' } },
        { id: 'core-title', type: 'heading', props: { content: 'Infrastruktur Server Multi-Data Center dengan SLA Uptime 99.98%', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f8fafc' } },
        { id: 'core-desc', type: 'paragraph', props: { content: 'Sistem komputasi awan terdistribusi dengan auto-scaling otomatis, memastikan akses transaksi anggota tetap lancar tanpa gangguan bahkan saat lonjakan hari gajian.', fontSize: '14px', color: '#cbd5e1' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'sec-badge');
  const titleC = lc.filter(c => c.id === 'sec-title');
  const descC = lc.filter(c => c.id === 'sec-desc');
  const card1 = lc.filter(c => c.id === 'card-sec1');
  const card2 = lc.filter(c => c.id === 'card-sec2');
  const card3 = lc.filter(c => c.id === 'card-sec3');
  const card4 = lc.filter(c => c.id === 'card-sec4');
  const coreBanner = lc.filter(c => c.id === 'core-banner-card');

  return (
    <section id="security" className="relative bg-[#020d14] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 4 Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
          <div>{renderLayoutComponents(card4, sectionId)}</div>
        </div>

        {/* Core Banking Banner */}
        <div>{renderLayoutComponents(coreBanner, sectionId)}</div>
      </div>
    </section>
  );
}
