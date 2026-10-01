import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndHeroHeavy
 * High-precision heavy machinery & fabrication hero.
 * Fully supports right-inspector selection and property editing for all cards, images, badges, buttons, and texts.
 */
export default function IndHeroHeavy({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heavy-badge', type: 'badge', props: { text: '⚙️ HEAVY PRECISION MANUFACTURING & ENGINEERING', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
    { id: 'heavy-title', type: 'heading', props: { content: 'Manufaktur Presisi Tinggi & Fabrikasi Baja Berat Berstandar Global', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
    { id: 'heavy-desc', type: 'paragraph', props: { content: 'Kapasitas fabrikasi 50.000 ton/bulan didukung fasilitas CNC 5-axis mutakhir, robot welding otomatis, dan sertifikasi ASME & ISO 9001 untuk sektor pertambangan, energi, dan infrastruktur.', fontSize: '17px', color: '#cbd5e1' } },
    { id: 'heavy-btn1', type: 'button', props: { label: 'Minta Penawaran (RFQ) ⚡', href: '#rfq', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a', fontWeight: '800' } },
    { id: 'heavy-btn2', type: 'button', props: { label: 'Lihat Spesifikasi Fasilitas', href: '#capabilities', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(30,41,59,0.7)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },

    // 3 Metric Cards
    {
      id: 'heavy-stat1-card',
      type: 'card',
      props: { background: '#111624', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'heavy-stat1-num', type: 'heading', props: { content: '50.000 Ton', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'heavy-stat1-lbl', type: 'paragraph', props: { content: 'Kapasitas Produksi / Bulan', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'heavy-stat2-card',
      type: 'card',
      props: { background: '#111624', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'heavy-stat2-num', type: 'heading', props: { content: '±0.001 mm', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'heavy-stat2-lbl', type: 'paragraph', props: { content: 'Toleransi Presisi CNC', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'heavy-stat3-card',
      type: 'card',
      props: { background: '#111624', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'heavy-stat3-num', type: 'heading', props: { content: '25.000 m²', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'heavy-stat3-lbl', type: 'paragraph', props: { content: 'Luas Area Plant & Pabrik', fontSize: '12px', color: '#94a3b8' } },
      ]
    },

    // Hero Machinery Showcase Card
    {
      id: 'heavy-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #161d2f 0%, #0d121e 100%)', borderColor: 'rgba(245,158,11,0.35)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'heavy-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=80',
            alt: 'Heavy Precision CNC Industrial Plant',
            borderRadius: '14px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'heavy-card-badge', type: 'badge', props: { text: '🏭 PLANT CILEGON INDONESIA · LINE A-01 ACTIVE', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
        { id: 'heavy-card-title', type: 'heading', props: { content: 'Fasilitas Fabrikasi & Robot Welding 5-Axis', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'heavy-card-desc', type: 'paragraph', props: { content: 'Dilengkapi overhead crane 50 Ton, heat treatment furnace, dan laboratorium uji NDT (Non-Destructive Testing) bersertifikasi internasional.', fontSize: '13px', color: '#94a3b8' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'heavy-badge');
  const titleC = lc.filter(c => c.id === 'heavy-title');
  const descC = lc.filter(c => c.id === 'heavy-desc');
  const btn1C = lc.filter(c => c.id === 'heavy-btn1');
  const btn2C = lc.filter(c => c.id === 'heavy-btn2');
  const stat1 = lc.filter(c => c.id === 'heavy-stat1-card');
  const stat2 = lc.filter(c => c.id === 'heavy-stat2-card');
  const stat3 = lc.filter(c => c.id === 'heavy-stat3-card');
  const heroCard = lc.filter(c => c.id === 'heavy-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#07090e] text-slate-100 overflow-hidden py-20 lg:py-24">
      {/* Industrial Metallic Ambient Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-slate-700/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Metrics */}
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

            {/* 3 Industrial Metric Cards */}
            <div className="pt-8 border-t border-amber-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>{renderLayoutComponents(stat1, sectionId)}</div>
              <div>{renderLayoutComponents(stat2, sectionId)}</div>
              <div>{renderLayoutComponents(stat3, sectionId)}</div>
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
