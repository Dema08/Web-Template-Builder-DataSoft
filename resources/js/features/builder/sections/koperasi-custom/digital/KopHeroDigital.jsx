import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopHeroDigital
 * Digital Fintech Cooperative SuperApp Hero with mobile app showcase & fast KPI cards.
 * Fully supports right-inspector selection and property editing for all cards, images, badges, buttons, and texts.
 */
export default function KopHeroDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dig-badge', type: 'badge', props: { text: '⚡ KOPERASI BERBASIS DIGITAL & FINTECH SUPERAPP', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
    { id: 'dig-title', type: 'heading', props: { content: 'Kelola Simpanan, Pinjaman & Dividen SHU Langsung dari Smartphone', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
    { id: 'dig-desc', type: 'paragraph', props: { content: 'Koperasi modern tanpa antrean kantor cabang. Pendaftaran e-KYC 3 menit, pinjaman usaha modal kerja disetujui instan berbasis AI, dan pembayaran QRIS bebas biaya.', fontSize: '17px', color: '#cbd5e1' } },
    { id: 'dig-btn1', type: 'button', props: { label: 'Download SuperApp Gratis 📲', href: '#download', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #06b6d4, #059669)', color: '#ffffff', fontWeight: '700' } },
    { id: 'dig-btn2', type: 'button', props: { label: 'Lihat Fitur Tabungan Digital', href: '#features', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(6,27,38,0.7)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },

    // 4 Digital FinTech KPI Stat Cards
    {
      id: 'dig-stat1-card',
      type: 'card',
      props: { background: '#051d29', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dig-stat1-num', type: 'heading', props: { content: '5 Menit', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
        { id: 'dig-stat1-lbl', type: 'paragraph', props: { content: 'Pencairan Pinjaman Kilat AI', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'dig-stat2-card',
      type: 'card',
      props: { background: '#051d29', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dig-stat2-num', type: 'heading', props: { content: 'Rp 0,-', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#34d399' } },
        { id: 'dig-stat2-lbl', type: 'paragraph', props: { content: 'Biaya Admin Transfer & QRIS', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'dig-stat3-card',
      type: 'card',
      props: { background: '#051d29', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dig-stat3-num', type: 'heading', props: { content: '50.000+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
        { id: 'dig-stat3-lbl', type: 'paragraph', props: { content: 'Pengguna SuperApp Aktif', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'dig-stat4-card',
      type: 'card',
      props: { background: '#051d29', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dig-stat4-num', type: 'heading', props: { content: '9.8% p.a.', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#a78bfa' } },
        { id: 'dig-stat4-lbl', type: 'paragraph', props: { content: 'Estimasi Dividen SHU / Tahun', fontSize: '12px', color: '#94a3b8' } },
      ]
    },

    // Smartphone App Showcase Card
    {
      id: 'dig-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #072737 0%, #03141f 100%)', borderColor: 'rgba(6,182,212,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'dig-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&auto=format&fit=crop&q=80',
            alt: 'Digital Cooperative Mobile App Dashboard',
            borderRadius: '14px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'dig-card-badge', type: 'badge', props: { text: '📱 SUPERAPP V3.4 · ANDROID & IOS READY', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'dig-card-title', type: 'heading', props: { content: 'Satu Aplikasi untuk Seluruh Kebutuhan Finansial Anggota', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'dig-card-desc', type: 'paragraph', props: { content: 'Fitur auto-debet simpanan wajib, simulasi pinjaman instan, tarik tunai tanpa kartu di ribuan ATM mitra, dan voting RAT online secara transparan.', fontSize: '13px', color: '#cbd5e1' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'dig-badge');
  const titleC = lc.filter(c => c.id === 'dig-title');
  const descC = lc.filter(c => c.id === 'dig-desc');
  const btn1C = lc.filter(c => c.id === 'dig-btn1');
  const btn2C = lc.filter(c => c.id === 'dig-btn2');
  const stat1 = lc.filter(c => c.id === 'dig-stat1-card');
  const stat2 = lc.filter(c => c.id === 'dig-stat2-card');
  const stat3 = lc.filter(c => c.id === 'dig-stat3-card');
  const stat4 = lc.filter(c => c.id === 'dig-stat4-card');
  const heroCard = lc.filter(c => c.id === 'dig-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#020b12] text-slate-100 overflow-hidden py-20 lg:py-24">
      {/* High-tech Cyan & Emerald Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Digital Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
            
            <div className="space-y-4">
              <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
              <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {renderLayoutComponents(btn1C, sectionId)}
              {renderLayoutComponents(btn2C, sectionId)}
            </div>

            {/* 4 FinTech KPI Cards */}
            <div className="pt-8 border-t border-cyan-500/20 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>{renderLayoutComponents(stat1, sectionId)}</div>
              <div>{renderLayoutComponents(stat2, sectionId)}</div>
              <div>{renderLayoutComponents(stat3, sectionId)}</div>
              <div>{renderLayoutComponents(stat4, sectionId)}</div>
            </div>
          </div>

          {/* Right Column Showcase Card */}
          <div className="lg:col-span-6">
            <div>{renderLayoutComponents(heroCard, sectionId)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
