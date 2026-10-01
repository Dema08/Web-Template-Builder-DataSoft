import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopHeroAgri
 * Agricultural & Production Producers Cooperative Hero with harvest metrics & cold storage showcase.
 * Fully supports right-inspector selection and property editing for all cards, images, badges, buttons, and texts.
 */
export default function KopHeroAgri({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'agri-badge', type: 'badge', props: { text: '🌾 KOPERASI PRODUSEN & AGRIBISNIS TERPADU', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.45)' } },
    { id: 'agri-title', type: 'heading', props: { content: 'Dari Lahan Petani Hingga Pasar Ekspor — Sejahtera Melalui Gotong Royong', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.025em' } },
    { id: 'agri-desc', type: 'paragraph', props: { content: 'Koperasi produsen pertanian dan perkebunan terintegrasi. Menjamin ketersediaan pupuk berkualitas, fasilitas cold-storage modern, dan kepastian harga beli panen langsung dari 8.500+ petani anggota.', fontSize: '17px', color: '#fde68a' } },
    { id: 'agri-btn1', type: 'button', props: { label: 'Gabung Mitra Kelompok Tani 🌾', href: '#partner', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
    { id: 'agri-btn2', type: 'button', props: { label: 'Lihat Komoditas & Pasokan B2B', href: '#programs', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(35,22,6,0.7)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.4)' } },

    // 4 Agri KPI Stat Cards
    {
      id: 'agri-stat1-card',
      type: 'card',
      props: { background: '#251707', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'agri-stat1-num', type: 'heading', props: { content: '12.000 Ha', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'agri-stat1-lbl', type: 'paragraph', props: { content: 'Luas Lahan Tani Terkelola', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'agri-stat2-card',
      type: 'card',
      props: { background: '#251707', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'agri-stat2-num', type: 'heading', props: { content: '350+ Ton', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde68a' } },
        { id: 'agri-stat2-lbl', type: 'paragraph', props: { content: 'Distribusi Panen per Hari', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'agri-stat3-card',
      type: 'card',
      props: { background: '#251707', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'agri-stat3-num', type: 'heading', props: { content: '100% Fair', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#86efac' } },
        { id: 'agri-stat3-lbl', type: 'paragraph', props: { content: 'Kepastian Pembelian Panen', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'agri-stat4-card',
      type: 'card',
      props: { background: '#251707', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'agri-stat4-num', type: 'heading', props: { content: '85 Mitra', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'agri-stat4-lbl', type: 'paragraph', props: { content: 'Off-taker Ekspor & Supermarket', fontSize: '12px', color: '#94a3b8' } },
      ]
    },

    // Harvest & Warehouse Showcase Card
    {
      id: 'agri-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #301f0b 0%, #170e04 100%)', borderColor: 'rgba(217,119,6,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'agri-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&auto=format&fit=crop&q=80',
            alt: 'Agricultural Producers Cooperative Harvest & Processing Facility',
            borderRadius: '14px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'agri-card-badge', type: 'badge', props: { text: '🌾 SENTRA LOGISTIK PANGAN & COLD STORAGE', variant: 'solid', background: 'rgba(217,119,6,0.25)', color: '#fbbf24' } },
        { id: 'agri-card-title', type: 'heading', props: { content: 'Fasilitas Pasca Panen Berkapasitas 2.500 Ton', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#fef3c7' } },
        { id: 'agri-card-desc', type: 'paragraph', props: { content: 'Dilengkapi mesin pengering gabah otomatis, grading sortasi digital, dan cold storage terkontrol suhu untuk menjaga kesegaran komoditas ekspor.', fontSize: '13px', color: '#fde68a' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'agri-badge');
  const titleC = lc.filter(c => c.id === 'agri-title');
  const descC = lc.filter(c => c.id === 'agri-desc');
  const btn1C = lc.filter(c => c.id === 'agri-btn1');
  const btn2C = lc.filter(c => c.id === 'agri-btn2');
  const stat1 = lc.filter(c => c.id === 'agri-stat1-card');
  const stat2 = lc.filter(c => c.id === 'agri-stat2-card');
  const stat3 = lc.filter(c => c.id === 'agri-stat3-card');
  const stat4 = lc.filter(c => c.id === 'agri-stat4-card');
  const heroCard = lc.filter(c => c.id === 'agri-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#130b03] text-amber-50 overflow-hidden py-20 lg:py-24">
      {/* Warm Golden Harvest Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-yellow-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Agri Metrics */}
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

            {/* 4 Agri KPI Stat Cards */}
            <div className="pt-8 border-t border-amber-600/25 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
