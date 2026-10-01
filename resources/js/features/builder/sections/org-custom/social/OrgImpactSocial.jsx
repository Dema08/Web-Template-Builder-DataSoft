import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgImpactSocial
 * Transparent impact & accountability dashboard for NGO — emerald/orange.
 * Fully supports right-inspector selection and property editing for cards, buttons, badges, and texts.
 */
export default function OrgImpactSocial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'imp-badge', type: 'badge', props: { text: '🏆 TRANSPARANSI & AKUNTABILITAS', variant: 'outline', background: 'rgba(16,185,129,0.18)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
    { id: 'imp-title', type: 'heading', props: { content: 'Setiap Rupiah Berubah Menjadi Senyuman & Harapan Nyata', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
    { id: 'imp-desc', type: 'paragraph', props: { content: 'Kami menjunjung tinggi tata kelola nirlaba yang profesional. Laporan keuangan diaudit berkala oleh Kantor Akuntan Publik independen dengan opini Wajar Tanpa Pengecualian (WTP).', fontSize: '16px', color: '#a7f3d0' } },
    
    // KPI Card 1
    {
      id: 'card-i1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #033a2b 0%, #02261c 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'i1-tag', type: 'badge', props: { text: '❤️ PENERIMA MANFAAT', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'i1-num', type: 'heading', props: { content: '150.000+', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'i1-lbl', type: 'paragraph', props: { content: 'Jiwa tersentuh langsung melalui 4 program utama', fontSize: '13px', color: '#34d399' } },
      ]
    },

    // KPI Card 2
    {
      id: 'card-i2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #033a2b 0%, #02261c 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'i2-tag', type: 'badge', props: { text: '💎 PENYALURAN AMANAH', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'i2-num', type: 'heading', props: { content: 'Rp 48,2 Miliar', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'i2-lbl', type: 'paragraph', props: { content: 'Dana amanah masyarakat tersalurkan 92,4% ke program riil', fontSize: '13px', color: '#34d399' } },
      ]
    },

    // KPI Card 3
    {
      id: 'card-i3',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #033a2b 0%, #02261c 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'i3-tag', type: 'badge', props: { text: '🤝 GERAKAN KERELAWANAN', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'i3-num', type: 'heading', props: { content: '12.500', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'i3-lbl', type: 'paragraph', props: { content: 'Relawan terlatih aktif di 34 provinsi Nusantara', fontSize: '13px', color: '#34d399' } },
      ]
    },

    // KPI Card 4
    {
      id: 'card-i4',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #033a2b 0%, #02261c 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'i4-tag', type: 'badge', props: { text: '🏡 WILAYAH JANGKAUAN', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'i4-num', type: 'heading', props: { content: '320 Desa', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'i4-lbl', type: 'paragraph', props: { content: 'Komunitas & desa mandiri binaan berkelanjutan', fontSize: '13px', color: '#34d399' } },
      ]
    },

    // Accountability Banner Card
    {
      id: 'imp-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(90deg, #023124 0%, #044432 50%, #023124 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '1px', borderRadius: '16px', padding: '32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'imp-tag', type: 'badge', props: { text: '✨ LAPORAN TATA KELOLA KEUANGAN 2025', variant: 'outline', background: 'transparent', color: '#fb923c', borderColor: 'transparent' } },
        { id: 'imp-sub', type: 'heading', props: { content: 'Transparansi 100% — Diaudit oleh KAP Independen (Opini WTP)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff' } },
        { id: 'imp-cta-btn', type: 'button', props: { label: 'Unduh Laporan Audit Tahunan 2025 (PDF)', href: '#report', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.8)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'imp-badge');
  const titleC = lc.filter(c => c.id === 'imp-title');
  const descC = lc.filter(c => c.id === 'imp-desc');
  const cardI1 = lc.filter(c => c.id === 'card-i1');
  const cardI2 = lc.filter(c => c.id === 'card-i2');
  const cardI3 = lc.filter(c => c.id === 'card-i3');
  const cardI4 = lc.filter(c => c.id === 'card-i4');
  const bannerCard = lc.filter(c => c.id === 'imp-banner-card');

  return (
    <section className="relative bg-[#011a12] py-20 lg:py-28 overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div>{renderLayoutComponents(cardI1, sectionId)}</div>
          <div>{renderLayoutComponents(cardI2, sectionId)}</div>
          <div>{renderLayoutComponents(cardI3, sectionId)}</div>
          <div>{renderLayoutComponents(cardI4, sectionId)}</div>
        </div>

        {/* Accountability Banner */}
        <div>
          {renderLayoutComponents(bannerCard, sectionId)}
        </div>
      </div>
    </section>
  );
}
