import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyHeroFresh
 * Fresh Dairy Cooperative Hero with 4 live farm metrics and cooling tank showcase card.
 */
export default function DairyHeroFresh({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'fresh-badge', type: 'badge', props: { text: '🌿 100% MURNI DARI PETERNAKAN RAKYAT BERSTANDAR SNI', variant: 'outline', background: 'rgba(13,148,136,0.15)', color: '#5eead4', borderColor: 'rgba(20,184,166,0.4)' } },
    { id: 'fresh-title', type: 'heading', props: { content: 'Susu Sapi Segar Perahan Pagi, Murni Tanpa Campuran & Higienis', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f0fdfa', letterSpacing: '-0.025em' } },
    { id: 'fresh-desc', type: 'paragraph', props: { content: 'Wadah gotong royong 1.850+ peternak sapi perah rakyat. Menjaga kualitas susu murni melalui pendinginan cepat 4°C dan uji laboratorium ketat setiap pagi.', fontSize: '17px', color: '#99f6e4' } },
    { id: 'fresh-btn1', type: 'button', props: { label: 'Beli Susu Segar Harian 🥛', href: '#products', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #0d9488, #0f766e)', color: '#ffffff', fontWeight: '700' } },
    { id: 'fresh-btn2', type: 'button', props: { label: 'Gabung Peternak Binaan', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(4,47,44,0.7)', color: '#ccfbf1', borderColor: 'rgba(20,184,166,0.4)' } },

    // 4 Fresh Dairy KPI Cards
    {
      id: 'fresh-stat1-card',
      type: 'card',
      props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fresh-stat1-num', type: 'heading', props: { content: '25.000 L', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#5eead4' } },
        { id: 'fresh-stat1-lbl', type: 'paragraph', props: { content: 'Produksi Susu Harian', fontSize: '12px', color: '#99f6e4' } },
      ]
    },
    {
      id: 'fresh-stat2-card',
      type: 'card',
      props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fresh-stat2-num', type: 'heading', props: { content: '1.850+', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#a7f3d0' } },
        { id: 'fresh-stat2-lbl', type: 'paragraph', props: { content: 'Peternak Anggota Aktif', fontSize: '12px', color: '#99f6e4' } },
      ]
    },
    {
      id: 'fresh-stat3-card',
      type: 'card',
      props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fresh-stat3-num', type: 'heading', props: { content: '4°C Suhu', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#a7f3d0' } },
        { id: 'fresh-stat3-lbl', type: 'paragraph', props: { content: 'Rantai Dingin Terjaga', fontSize: '12px', color: '#99f6e4' } },
      ]
    },
    {
      id: 'fresh-stat4-card',
      type: 'card',
      props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fresh-stat4-num', type: 'heading', props: { content: '100% Alami', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#5eead4' } },
        { id: 'fresh-stat4-lbl', type: 'paragraph', props: { content: 'Bebas Pengawet & Aditif', fontSize: '12px', color: '#99f6e4' } },
      ]
    },

    // Farmstead & Cooling Tank Showcase Card
    {
      id: 'fresh-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #0b453f 0%, #032421 100%)', borderColor: 'rgba(20,184,166,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'fresh-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1527153857715-33282435658a?w=1000&auto=format&fit=crop&q=80',
            alt: 'Peternakan Sapi Perah Dataran Tinggi Koperasi Susu',
            borderRadius: '16px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'fresh-card-badge', type: 'badge', props: { text: '🐄 PEMERAHAN HIGIENIS PAGI & SORE HARI', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#99f6e4' } },
        { id: 'fresh-card-title', type: 'heading', props: { content: 'Standarisasi Pakan Alami & Kesehatan Hewan Terjamin', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f0fdfa' } },
        { id: 'fresh-card-desc', type: 'paragraph', props: { content: 'Tim dokter hewan koperasi melakukan pengecekan kesehatan berkala pada setiap sapi perah untuk menjamin kualitas gizi susu terbaik bagi keluarga Anda.', fontSize: '13px', color: '#99f6e4' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'fresh-badge');
  const titleC = lc.filter(c => c.id === 'fresh-title');
  const descC = lc.filter(c => c.id === 'fresh-desc');
  const btn1C = lc.filter(c => c.id === 'fresh-btn1');
  const btn2C = lc.filter(c => c.id === 'fresh-btn2');
  const stat1 = lc.filter(c => c.id === 'fresh-stat1-card');
  const stat2 = lc.filter(c => c.id === 'fresh-stat2-card');
  const stat3 = lc.filter(c => c.id === 'fresh-stat3-card');
  const stat4 = lc.filter(c => c.id === 'fresh-stat4-card');
  const heroCard = lc.filter(c => c.id === 'fresh-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#021a17] text-teal-100 overflow-hidden py-20 lg:py-24">
      {/* Mint Teal Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-teal-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Farm Metrics */}
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

            {/* 4 Dairy Farm Metric Cards */}
            <div className="pt-8 border-t border-teal-900/50 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
