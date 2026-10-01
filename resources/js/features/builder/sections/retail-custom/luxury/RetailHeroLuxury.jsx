import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailHeroLuxury
 * Luxury Lifestyle & Fashion Boutique Hero with 4 Heritage/Prestige Metric Cards and boutique showroom card.
 */
export default function RetailHeroLuxury({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'lux-badge', type: 'badge', props: { text: '💎 CURATED WORLDWIDE LUXURY & HAUTE COUTURE', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#d8b4fe', borderColor: 'rgba(168,85,247,0.45)' } },
    { id: 'lux-title', type: 'heading', props: { content: 'Simbol Keanggunan Tanpa Kompromi & Kurasi Karya Seni Bernilai Tinggi', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#faf5ff', letterSpacing: '-0.025em' } },
    { id: 'lux-desc', type: 'paragraph', props: { content: 'Destinasi eksklusif bagi penikmat kemewahan otentik. Menghadirkan mahakarya horologi Swiss, kerajinan kulit Prancis, dan busana adibusana terbatas dengan sertifikat keaslian internasional.', fontSize: '17px', color: '#cbd5e1' } },
    { id: 'lux-btn1', type: 'button', props: { label: 'Jelajahi Koleksi Eksklusif ✨', href: '#collection', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: '#ffffff', fontWeight: '700' } },
    { id: 'lux-btn2', type: 'button', props: { label: 'Jadwalkan Private Viewing', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(24,15,46,0.7)', color: '#f5d0fe', borderColor: 'rgba(192,132,252,0.4)' } },

    // 4 Heritage Metric Cards
    {
      id: 'lux-stat1-card',
      type: 'card',
      props: { background: '#190e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'lux-stat1-num', type: 'heading', props: { content: '100% Original', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#f0abfc' } },
        { id: 'lux-stat1-lbl', type: 'paragraph', props: { content: 'Garansi Keaslian Seumur Hidup', fontSize: '12px', color: '#a855f7' } },
      ]
    },
    {
      id: 'lux-stat2-card',
      type: 'card',
      props: { background: '#190e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'lux-stat2-num', type: 'heading', props: { content: '60+ Brand', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#e9d5ff' } },
        { id: 'lux-stat2-lbl', type: 'paragraph', props: { content: 'Maison Mewah Terkemuka', fontSize: '12px', color: '#a855f7' } },
      ]
    },
    {
      id: 'lux-stat3-card',
      type: 'card',
      props: { background: '#190e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'lux-stat3-num', type: 'heading', props: { content: 'VIP Suite', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#e9d5ff' } },
        { id: 'lux-stat3-lbl', type: 'paragraph', props: { content: 'Lounge Private Shopping', fontSize: '12px', color: '#a855f7' } },
      ]
    },
    {
      id: 'lux-stat4-card',
      type: 'card',
      props: { background: '#190e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'lux-stat4-num', type: 'heading', props: { content: 'Doorstep', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#f0abfc' } },
        { id: 'lux-stat4-lbl', type: 'paragraph', props: { content: 'White-Glove Delivery Aman', fontSize: '12px', color: '#a855f7' } },
      ]
    },

    // Boutique & Showroom Showcase Card
    {
      id: 'luxury-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #241242 0%, #120724 100%)', borderColor: 'rgba(168,85,247,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'luxury-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1000&auto=format&fit=crop&q=80',
            alt: 'Haute Horlogerie and Luxury Fashion Boutique Flagship Suite',
            borderRadius: '16px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'lux-card-badge', type: 'badge', props: { text: '🥂 PRIVATE SHOPPING APPOINTMENT ONLY', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#e9d5ff' } },
        { id: 'lux-card-title', type: 'heading', props: { content: 'Pengalaman Berbelanja Personal & Intimate', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#faf5ff' } },
        { id: 'lux-card-desc', type: 'paragraph', props: { content: 'Ditemani oleh certified luxury advisor kami dalam suasana mewah nan privat dengan sajian champagne dan presentasi koleksi langka.', fontSize: '13px', color: '#cbd5e1' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'lux-badge');
  const titleC = lc.filter(c => c.id === 'lux-title');
  const descC = lc.filter(c => c.id === 'lux-desc');
  const btn1C = lc.filter(c => c.id === 'lux-btn1');
  const btn2C = lc.filter(c => c.id === 'lux-btn2');
  const stat1 = lc.filter(c => c.id === 'lux-stat1-card');
  const stat2 = lc.filter(c => c.id === 'lux-stat2-card');
  const stat3 = lc.filter(c => c.id === 'lux-stat3-card');
  const stat4 = lc.filter(c => c.id === 'lux-stat4-card');
  const heroCard = lc.filter(c => c.id === 'luxury-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#0a0414] text-purple-100 overflow-hidden py-20 lg:py-24">
      {/* Royal Indigo & Rose Gold ambient lights */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Editorial & Luxury Metrics */}
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

            {/* 4 Luxury Metric Cards */}
            <div className="pt-8 border-t border-purple-900/40 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>{renderLayoutComponents(stat1, sectionId)}</div>
              <div>{renderLayoutComponents(stat2, sectionId)}</div>
              <div>{renderLayoutComponents(stat3, sectionId)}</div>
              <div>{renderLayoutComponents(stat4, sectionId)}</div>
            </div>
          </div>

          {/* Right Column Flagship Showcase Card */}
          <div className="lg:col-span-6">
            <div>{renderLayoutComponents(heroCard, sectionId)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
