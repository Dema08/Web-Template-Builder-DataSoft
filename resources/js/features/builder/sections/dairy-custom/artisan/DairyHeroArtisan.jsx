import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyHeroArtisan
 * Luxury Artisan Organic Dairy Hero with 4 Heritage/Purity Metric Cards and Highland Pasture Showroom.
 */
export default function DairyHeroArtisan({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'art-badge', type: 'badge', props: { text: '🌾 SINGLE-ESTATE HIGHLAND ORGANIC PASTURE', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.45)' } },
    { id: 'art-title', type: 'heading', props: { content: 'Kemurnian Susu Organik Grass-Fed Dari Padang Rumput Kaki Gunung', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#fefce8', letterSpacing: '-0.025em' } },
    { id: 'art-desc', type: 'paragraph', props: { content: 'Susu organik murni dari sapi Frisian Holstein & Jersey yang merumput bebas di 150 hektar padang rumput alami. Mengandung protein A2 alami yang lebih mudah dicerna dan kaya Omega-3.', fontSize: '17px', color: '#fef3c7' } },
    { id: 'art-btn1', type: 'button', props: { label: 'Langganan Susu Botol Kaca ✨', href: '#collection', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
    { id: 'art-btn2', type: 'button', props: { label: 'Eksplor Padang Rumput', href: '#pasture', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(10,38,26,0.7)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.4)' } },

    // 4 Artisan Purity Metric Cards
    {
      id: 'art-stat1-card',
      type: 'card',
      props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'art-stat1-num', type: 'heading', props: { content: '100% Grass-Fed', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde68a' } },
        { id: 'art-stat1-lbl', type: 'paragraph', props: { content: 'Pakan Rumput Organik', fontSize: '12px', color: '#cbd5e1' } },
      ]
    },
    {
      id: 'art-stat2-card',
      type: 'card',
      props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'art-stat2-num', type: 'heading', props: { content: 'A2 Protein', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#a7f3d0' } },
        { id: 'art-stat2-lbl', type: 'paragraph', props: { content: 'Ramah Pencernaan Perut', fontSize: '12px', color: '#cbd5e1' } },
      ]
    },
    {
      id: 'art-stat3-card',
      type: 'card',
      props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'art-stat3-num', type: 'heading', props: { content: '0% Hormon', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#a7f3d0' } },
        { id: 'art-stat3-lbl', type: 'paragraph', props: { content: 'Bebas rBST & Non-GMO', fontSize: '12px', color: '#cbd5e1' } },
      ]
    },
    {
      id: 'art-stat4-card',
      type: 'card',
      props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'art-stat4-num', type: 'heading', props: { content: '150 Hektar', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde68a' } },
        { id: 'art-stat4-lbl', type: 'paragraph', props: { content: 'Padang Rumput Dataran Tinggi', fontSize: '12px', color: '#cbd5e1' } },
      ]
    },

    // Highland Pasture Showcase Card
    {
      id: 'artisan-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #0e3d2b 0%, #041a12 100%)', borderColor: 'rgba(245,158,11,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'artisan-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1000&auto=format&fit=crop&q=80',
            alt: 'Highland Organic Grass Fed Dairy Cow Pasture Valley',
            borderRadius: '16px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'art-card-badge', type: 'badge', props: { text: '🌿 KESEJAHTERAAN HEWAN (ANIMAL WELFARE CERTIFIED)', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fef3c7' } },
        { id: 'art-card-title', type: 'heading', props: { content: 'Sapi Bahagia Menghasilkan Susu Paling Gurih & Sehat', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#fefce8' } },
        { id: 'art-card-desc', type: 'paragraph', props: { content: 'Sapi kami bebas berjalan di alam terbuka dengan udara sejuk pegunungan 1.400 mdpl dan meminum air mata air alami pegunungan.', fontSize: '13px', color: '#cbd5e1' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'art-badge');
  const titleC = lc.filter(c => c.id === 'art-title');
  const descC = lc.filter(c => c.id === 'art-desc');
  const btn1C = lc.filter(c => c.id === 'art-btn1');
  const btn2C = lc.filter(c => c.id === 'art-btn2');
  const stat1 = lc.filter(c => c.id === 'art-stat1-card');
  const stat2 = lc.filter(c => c.id === 'art-stat2-card');
  const stat3 = lc.filter(c => c.id === 'art-stat3-card');
  const stat4 = lc.filter(c => c.id === 'art-stat4-card');
  const heroCard = lc.filter(c => c.id === 'art-hero-card' || c.id === 'artisan-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#04140e] text-emerald-100 overflow-hidden py-20 lg:py-24">
      {/* Forest Emerald & Amber Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Purity Metrics */}
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

            {/* 4 Purity Metric Cards */}
            <div className="pt-8 border-t border-amber-900/40 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
