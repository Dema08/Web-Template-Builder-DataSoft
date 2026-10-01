import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopShuSyariah
 * SHU Transparency, ZISWAF Social Fund & DPS Governance.
 * Fully supports right-inspector selection and property editing for all cards, badges, and texts.
 */
export default function KopShuSyariah({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'shu-badge', type: 'badge', props: { text: '📊 TRANSPARANSI SHU & KEPATUHAN SYARIAH', variant: 'outline', background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: 'rgba(234,179,8,0.45)' } },
    { id: 'shu-title', type: 'heading', props: { content: 'Distribusi Sisa Hasil Usaha (SHU) Adil & Audit Terbuka', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em' } },
    { id: 'shu-desc', type: 'paragraph', props: { content: 'Prinsip dari anggota, oleh anggota, untuk anggota dijalankan dengan akuntabilitas laporan keuangan WTP (Wajar Tanpa Pengecualian) setiap tahun.', fontSize: '16px', color: '#a7f3d0' } },

    // Card 1: Pembagian SHU Tepat Waktu
    {
      id: 'card-shu1',
      type: 'card',
      props: { background: '#022c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'shu1-tag', type: 'badge', props: { text: 'BAGI HASIL SHU', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
        { id: 'shu1-title', type: 'heading', props: { content: 'Pembagian SHU Rutin Setiap RAT Tahunan', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'shu1-desc', type: 'paragraph', props: { content: 'SHU dibagikan secara proporsional berdasarkan kontribusi simpanan dan keaktifan transaksi pembiayaan masing-masing anggota.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Card 2: Audit Akuntan Publik WTP
    {
      id: 'card-shu2',
      type: 'card',
      props: { background: '#022c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'shu2-tag', type: 'badge', props: { text: 'AUDIT INDEPENDEN', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'shu2-title', type: 'heading', props: { content: 'Predikat Opini WTP (Wajar Tanpa Pengecualian)', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'shu2-desc', type: 'paragraph', props: { content: 'Laporan keuangan diaudit berkala oleh Kantor Akuntan Publik (KAP) terdaftar OJK dan Kemenkop secara independen.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Card 3: ZISWAF Produktif & Sosial
    {
      id: 'card-shu3',
      type: 'card',
      props: { background: '#022c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'shu3-tag', type: 'badge', props: { text: 'BAITUL MAAL ZISWAF', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
        { id: 'shu3-title', type: 'heading', props: { content: 'Pemberdayaan Dana ZISWAF Produktif', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'shu3-desc', type: 'paragraph', props: { content: 'Penyaluran zakat, infaq, sedekah, dan wakaf untuk beasiswa anak anggota kurang mampu dan modal bergulir mustahik tanpa bunga (Qardhul Hasan).', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Card 4: Pelatihan Kewirausahaan Anggota
    {
      id: 'card-shu4',
      type: 'card',
      props: { background: '#022c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'shu4-tag', type: 'badge', props: { text: 'EDUKASI & CAPACITY BUILDING', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'shu4-title', type: 'heading', props: { content: 'Inkubasi Bisnis & Pelatihan Usaha Mikro', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'shu4-desc', type: 'paragraph', props: { content: 'Fasilitas bimbingan pembukuan digital, sertifikasi halal gratis, dan temu bisnis antar-anggota koperasi setiap triwulan.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // DPS Banner Card
    {
      id: 'dps-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #033a26 0%, #012217 100%)', borderColor: 'rgba(234,179,8,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'dps-badge', type: 'badge', props: { text: '📜 DEWAN PENGAWAS SYARIAH (DPS)', variant: 'solid', background: 'rgba(234,179,8,0.25)', color: '#fde047' } },
        { id: 'dps-title', type: 'heading', props: { content: 'Jaminan Kepatuhan Syariah Sepenuhnya (Sharia Compliance)', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f0fdf4' } },
        { id: 'dps-desc', type: 'paragraph', props: { content: 'Dewan Pengawas Syariah kami memastikan setiap akad, alur perputaran dana simpanan, dan margin pembiayaan bebas dari unsur maysir (judi), gharar (ketidakjelasan), dan riba (bunga terlarang).', fontSize: '14px', color: '#a7f3d0' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'shu-badge');
  const titleC = lc.filter(c => c.id === 'shu-title');
  const descC = lc.filter(c => c.id === 'shu-desc');
  const card1 = lc.filter(c => c.id === 'card-shu1');
  const card2 = lc.filter(c => c.id === 'card-shu2');
  const card3 = lc.filter(c => c.id === 'card-shu3');
  const card4 = lc.filter(c => c.id === 'card-shu4');
  const dpsBanner = lc.filter(c => c.id === 'dps-banner-card');

  return (
    <section id="shu" className="relative bg-[#011810] py-20 lg:py-28 overflow-hidden text-emerald-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
          <div>{renderLayoutComponents(card4, sectionId)}</div>
        </div>

        {/* DPS Banner Card */}
        <div>{renderLayoutComponents(dpsBanner, sectionId)}</div>
      </div>
    </section>
  );
}
