import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndHeroEco
 * Green FMCG & Sustainable Eco-Manufacturing Hero.
 * Fully supports right-inspector selection and property editing for all cards, images, badges, buttons, and texts.
 */
export default function IndHeroEco({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'eco-badge', type: 'badge', props: { text: '🌱 GREEN SUSTAINABLE FMCG & PACKAGING PLANT', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
    { id: 'eco-title', type: 'heading', props: { content: 'Manufaktur FMCG Ramah Lingkungan & Kemasan Biodegradable', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.025em' } },
    { id: 'eco-desc', type: 'paragraph', props: { content: 'Pabrik manufaktur kontrak (OEM/ODM) berstandar Cleanroom ISO Class 8 bertenaga 100% panel surya untuk produk makanan minuman, kosmetik organik, dan kemasan daur ulang ramah bumi.', fontSize: '17px', color: '#a7f3d0' } },
    { id: 'eco-btn1', type: 'button', props: { label: 'Konsultasi OEM / Private Label 🌱', href: '#oem', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
    { id: 'eco-btn2', type: 'button', props: { label: 'Lihat Katalog Kemasan Hijau', href: '#products', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.7)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },

    // 4 Eco KPI Stat Cards
    {
      id: 'eco-stat1-card',
      type: 'card',
      props: { background: '#032c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'eco-stat1-num', type: 'heading', props: { content: '1.5 Juta', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'eco-stat1-lbl', type: 'paragraph', props: { content: 'Kapasitas Produksi / Hari', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'eco-stat2-card',
      type: 'card',
      props: { background: '#032c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'eco-stat2-num', type: 'heading', props: { content: '100% Solar', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#86efac' } },
        { id: 'eco-stat2-lbl', type: 'paragraph', props: { content: 'Energi Terbarukan Atap Pabrik', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'eco-stat3-card',
      type: 'card',
      props: { background: '#032c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'eco-stat3-num', type: 'heading', props: { content: '0% Landfill', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#a7f3d0' } },
        { id: 'eco-stat3-lbl', type: 'paragraph', props: { content: 'Zero Waste Circular Economy', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'eco-stat4-card',
      type: 'card',
      props: { background: '#032c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'eco-stat4-num', type: 'heading', props: { content: 'BPOM & Halal', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'eco-stat4-lbl', type: 'paragraph', props: { content: 'Grade A CPPOB & CPKB', fontSize: '12px', color: '#94a3b8' } },
      ]
    },

    // Eco Plant Showcase Card
    {
      id: 'eco-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #033a28 0%, #012419 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'eco-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?w=1000&auto=format&fit=crop&q=80',
            alt: 'Automated Sustainable Eco Cleanroom Manufacturing Plant',
            borderRadius: '14px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'eco-card-badge', type: 'badge', props: { text: '🍃 CLEANROOM ISO CLASS 8 · KARAWANG PLANT', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
        { id: 'eco-card-title', type: 'heading', props: { content: 'Fasilitas Manufaktur Steril & Packaging Otomatis', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'eco-card-desc', type: 'paragraph', props: { content: 'Dilengkapi automated filling & sealing berkecepatan tinggi, sistem HEPA filter 99.97%, dan lini packaging biodegradable non-plastik.', fontSize: '13px', color: '#a7f3d0' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'eco-badge');
  const titleC = lc.filter(c => c.id === 'eco-title');
  const descC = lc.filter(c => c.id === 'eco-desc');
  const btn1C = lc.filter(c => c.id === 'eco-btn1');
  const btn2C = lc.filter(c => c.id === 'eco-btn2');
  const stat1 = lc.filter(c => c.id === 'eco-stat1-card');
  const stat2 = lc.filter(c => c.id === 'eco-stat2-card');
  const stat3 = lc.filter(c => c.id === 'eco-stat3-card');
  const stat4 = lc.filter(c => c.id === 'eco-stat4-card');
  const heroCard = lc.filter(c => c.id === 'eco-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#01160e] text-emerald-50 overflow-hidden py-20 lg:py-24">
      {/* Eco Forest Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Eco Metrics */}
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

            {/* 4 Eco KPI Stat Cards */}
            <div className="pt-8 border-t border-emerald-500/20 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
