import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopHeroSyariah
 * Islamic Sharia Cooperative & BMT Hero with Sharia metrics and member branch showcase.
 * Fully supports right-inspector selection and property editing for all cards, images, badges, buttons, and texts.
 */
export default function KopHeroSyariah({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'syariah-badge', type: 'badge', props: { text: '🕌 KOPERASI SIMPAN PINJAM & PEMBIAYAAN SYARIAH (KSPPS)', variant: 'outline', background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: 'rgba(234,179,8,0.45)' } },
    { id: 'syariah-title', type: 'heading', props: { content: 'Membangun Kesejahteraan Finansial Ummat Berlandaskan Syariat Islam', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.025em' } },
    { id: 'syariah-desc', type: 'paragraph', props: { content: 'Wadah muamalah keuangan adil, transparan, dan bebas riba. Menghubungkan 24.000+ anggota aktif dengan akad mudharabah & murabahah terpercaya sejak 2002.', fontSize: '17px', color: '#a7f3d0' } },
    { id: 'syariah-btn1', type: 'button', props: { label: 'Daftar Jadi Anggota 🕌', href: '#register', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #059669, #047857)', color: '#ffffff', fontWeight: '700' } },
    { id: 'syariah-btn2', type: 'button', props: { label: 'Simulasi Pembiayaan Usaha', href: '#products', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(4,47,30,0.7)', color: '#fde047', borderColor: 'rgba(234,179,8,0.4)' } },

    // 4 Sharia Metric Cards
    {
      id: 'syariah-stat1-card',
      type: 'card',
      props: { background: '#022d1d', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'syariah-stat1-num', type: 'heading', props: { content: 'Rp 180 Miliar', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde047' } },
        { id: 'syariah-stat1-lbl', type: 'paragraph', props: { content: 'Total Aset Kelolaan Ummat', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'syariah-stat2-card',
      type: 'card',
      props: { background: '#022d1d', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'syariah-stat2-num', type: 'heading', props: { content: '24.500+', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'syariah-stat2-lbl', type: 'paragraph', props: { content: 'Anggota Aktif Terdaftar', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'syariah-stat3-card',
      type: 'card',
      props: { background: '#022d1d', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'syariah-stat3-num', type: 'heading', props: { content: '0.42%', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'syariah-stat3-lbl', type: 'paragraph', props: { content: 'Tingkat NPF Sehat Terjaga', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'syariah-stat4-card',
      type: 'card',
      props: { background: '#022d1d', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'syariah-stat4-num', type: 'heading', props: { content: '100% Syariah', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde047' } },
        { id: 'syariah-stat4-lbl', type: 'paragraph', props: { content: 'Bebas Riba, Gharar, Maysir', fontSize: '12px', color: '#94a3b8' } },
      ]
    },

    // Branch & Member Showcase Card
    {
      id: 'syariah-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #033a25 0%, #012216 100%)', borderColor: 'rgba(234,179,8,0.35)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'syariah-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&auto=format&fit=crop&q=80',
            alt: 'Islamic Sharia Microfinance Cooperative Office',
            borderRadius: '14px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'syariah-card-badge', type: 'badge', props: { text: '🕌 KANTOR PUSAT & 35 JARINGAN CABANG', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
        { id: 'syariah-card-title', type: 'heading', props: { content: 'Pelayanan Ramah, Amanah & Teruji Puluhan Tahun', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'syariah-card-desc', type: 'paragraph', props: { content: 'Setiap transaksi keuangan diawasi langsung oleh Dewan Pengawas Syariah (DPS) bersertifikasi DSN-MUI untuk menjamin keberkahan usaha.', fontSize: '13px', color: '#a7f3d0' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'syariah-badge');
  const titleC = lc.filter(c => c.id === 'syariah-title');
  const descC = lc.filter(c => c.id === 'syariah-desc');
  const btn1C = lc.filter(c => c.id === 'syariah-btn1');
  const btn2C = lc.filter(c => c.id === 'syariah-btn2');
  const stat1 = lc.filter(c => c.id === 'syariah-stat1-card');
  const stat2 = lc.filter(c => c.id === 'syariah-stat2-card');
  const stat3 = lc.filter(c => c.id === 'syariah-stat3-card');
  const stat4 = lc.filter(c => c.id === 'syariah-stat4-card');
  const heroCard = lc.filter(c => c.id === 'syariah-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#011a11] text-emerald-50 overflow-hidden py-20 lg:py-24">
      {/* Warm Gold & Islamic Green Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Sharia Metrics */}
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

            {/* 4 Sharia Metric Cards */}
            <div className="pt-8 border-t border-emerald-600/25 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
