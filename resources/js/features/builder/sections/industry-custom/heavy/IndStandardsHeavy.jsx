import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndStandardsHeavy
 * Industrial standards, ISO compliance, and quality control lab verification.
 * Fully supports right-inspector selection and property editing for all cards, badges, and texts.
 */
export default function IndStandardsHeavy({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'std-badge', type: 'badge', props: { text: '🏅 SERTIFIKASI MUTU & KESELAMATAN INTERNASIONAL', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
    { id: 'std-title', type: 'heading', props: { content: 'Standar Mutu Berlapis & Sistem Quality Control Ketat', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'std-desc', type: 'paragraph', props: { content: 'Setiap komponen melewati pengujian ultrasonik, spektrometri material, dan CMM (Coordinate Measuring Machine) sebelum dikirim ke klien.', fontSize: '16px', color: '#cbd5e1' } },

    // Standard 1: ISO 9001:2015
    {
      id: 'card-std1',
      type: 'card',
      props: { background: '#0e1320', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'std1-tag', type: 'badge', props: { text: 'QUALITY SYSTEM', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
        { id: 'std1-title', type: 'heading', props: { content: 'ISO 9001:2015 Quality Management', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'std1-desc', type: 'paragraph', props: { content: 'Sistem manajemen mutu terakreditasi internasional yang menjamin ketelitian pengerjaan dan ketertelusuran nomor seri material.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Standard 2: ASME Boiler & Pressure Vessel
    {
      id: 'card-std2',
      type: 'card',
      props: { background: '#0e1320', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'std2-tag', type: 'badge', props: { text: 'U & S STAMP', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
        { id: 'std2-title', type: 'heading', props: { content: 'ASME Section VIII Div 1 & 2', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'std2-desc', type: 'paragraph', props: { content: 'Sertifikasi bejana tekan dan tangki bertekanan tinggi untuk proyek migas, petrokimia, dan pembangkit listrik tenaga uap.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Standard 3: ISO 14001:2015 Green Plant
    {
      id: 'card-std3',
      type: 'card',
      props: { background: '#0e1320', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'std3-tag', type: 'badge', props: { text: 'ENVIRONMENTAL', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'std3-title', type: 'heading', props: { content: 'ISO 14001:2015 Environmental', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'std3-desc', type: 'paragraph', props: { content: 'Pengelolaan limbah industri, filter emisi udara, dan pemulihan cairan pendingin CNC dengan sistem zero-liquid discharge.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Standard 4: ISO 45001:2018 Safety
    {
      id: 'card-std4',
      type: 'card',
      props: { background: '#0e1320', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'std4-tag', type: 'badge', props: { text: 'ZERO ACCIDENT', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
        { id: 'std4-title', type: 'heading', props: { content: 'ISO 45001:2018 K3 Keselamatan Kerja', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'std4-desc', type: 'paragraph', props: { content: 'Penerapan protokol keselamatan kerja ketat dengan pencapaian 5.000.000+ jam kerja bebas kecelakaan fatal (Zero LTI).', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Testing Lab Verification Banner Card
    {
      id: 'lab-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #182033 0%, #0d1322 100%)', borderColor: 'rgba(245,158,11,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'lab-badge', type: 'badge', props: { text: '🔬 IN-HOUSE QUALITY ASSURANCE LABORATORY', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fbbf24' } },
        { id: 'lab-title', type: 'heading', props: { content: 'Laboratorium Pengujian Material & CMM Zeiss 3D Inspection', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f8fafc' } },
        { id: 'lab-desc', type: 'paragraph', props: { content: 'Setiap pesanan dilengkapi dengan Mill Test Certificate (MTC) 3.1, Laporan Inspeksi Dimensi CMM Zeiss, Ultrasonic Testing (UT), Magnetic Particle Inspection (MPI), dan uji tarik material hidrolik.', fontSize: '14px', color: '#cbd5e1' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'std-badge');
  const titleC = lc.filter(c => c.id === 'std-title');
  const descC = lc.filter(c => c.id === 'std-desc');
  const cardStd1 = lc.filter(c => c.id === 'card-std1');
  const cardStd2 = lc.filter(c => c.id === 'card-std2');
  const cardStd3 = lc.filter(c => c.id === 'card-std3');
  const cardStd4 = lc.filter(c => c.id === 'card-std4');
  const labBanner = lc.filter(c => c.id === 'lab-banner-card');

  return (
    <section id="standards" className="relative bg-[#07090e] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>{renderLayoutComponents(cardStd1, sectionId)}</div>
          <div>{renderLayoutComponents(cardStd2, sectionId)}</div>
          <div>{renderLayoutComponents(cardStd3, sectionId)}</div>
          <div>{renderLayoutComponents(cardStd4, sectionId)}</div>
        </div>

        {/* Lab Testing Banner Card */}
        <div>{renderLayoutComponents(labBanner, sectionId)}</div>
      </div>
    </section>
  );
}
