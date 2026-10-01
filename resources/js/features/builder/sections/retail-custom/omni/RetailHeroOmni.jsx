import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailHeroOmni
 * Omnichannel Fast Retail Hero with 4 Flash Retail KPI Cards and mobile storefront card.
 */
export default function RetailHeroOmni({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'omni-badge', type: 'badge', props: { text: '⚡ OMNICHANNEL RETAIL DENGAN 250+ GERAI & APLIKASI BELANJA', variant: 'solid', background: '#be123c', color: '#ffffff' } },
    { id: 'omni-title', type: 'heading', props: { content: 'Belanja Cepat, Harga Lebih Hemat, Kirim Instan Sampai Depan Pintu', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#fff1f2', letterSpacing: '-0.025em' } },
    { id: 'omni-desc', type: 'paragraph', props: { content: 'Pilihan 100.000+ produk kebutuhan harian, sembako segar, elektronik, hingga gadget terkini. Pesan via web/aplikasi dan ambil langsung di gerai terdekat dalam 2 jam.', fontSize: '17px', color: '#fda4af' } },
    { id: 'omni-btn1', type: 'button', props: { label: 'Serbu Flash Sale Sekarang 🔥', href: '#deals', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #e11d48, #be123c)', color: '#ffffff', fontWeight: '800' } },
    { id: 'omni-btn2', type: 'button', props: { label: 'Cek Lokasi Gerai Terdekat 📍', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(26,6,15,0.7)', color: '#fecdd3', borderColor: 'rgba(244,63,94,0.4)' } },

    // 4 Flash Retail KPI Cards
    {
      id: 'omni-stat1-card',
      type: 'card',
      props: { background: '#260a16', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'omni-stat1-num', type: 'heading', props: { content: 'Diskon 70%', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fb7185' } },
        { id: 'omni-stat1-lbl', type: 'paragraph', props: { content: 'Flash Sale Tiap Hari', fontSize: '12px', color: '#fda4af' } },
      ]
    },
    {
      id: 'omni-stat2-card',
      type: 'card',
      props: { background: '#260a16', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'omni-stat2-num', type: 'heading', props: { content: '2 Jam', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fecdd3' } },
        { id: 'omni-stat2-lbl', type: 'paragraph', props: { content: 'Click & Collect Express', fontSize: '12px', color: '#fda4af' } },
      ]
    },
    {
      id: 'omni-stat3-card',
      type: 'card',
      props: { background: '#260a16', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'omni-stat3-num', type: 'heading', props: { content: '250+ Gerai', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fecdd3' } },
        { id: 'omni-stat3-lbl', type: 'paragraph', props: { content: 'Tersebar di 45 Kota', fontSize: '12px', color: '#fda4af' } },
      ]
    },
    {
      id: 'omni-stat4-card',
      type: 'card',
      props: { background: '#260a16', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'omni-stat4-num', type: 'heading', props: { content: '100% Ori', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fb7185' } },
        { id: 'omni-stat4-lbl', type: 'paragraph', props: { content: 'Jaminan Uang Kembali', fontSize: '12px', color: '#fda4af' } },
      ]
    },

    // Storefront & Mobile Shopping Showcase Card
    {
      id: 'omni-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #3f0d22 0%, #1a0610 100%)', borderColor: 'rgba(244,63,94,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'omni-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1000&auto=format&fit=crop&q=80',
            alt: 'Supermart Retail Storefront and Mobile Omnichannel Shopping App',
            borderRadius: '16px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'omni-card-badge', type: 'badge', props: { text: '🛍️ BELANJA MUDAH VIA APLIKASI & GERAI FISIK', variant: 'solid', background: '#be123c', color: '#ffffff' } },
        { id: 'omni-card-title', type: 'heading', props: { content: 'Pengalaman Belanja Terintegrasi Seamless', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#fff1f2' } },
        { id: 'omni-card-desc', type: 'paragraph', props: { content: 'Kumpulkan poin SuperPoin di setiap transaksi online dan offline untuk ditukarkan dengan kupon diskon langsung di kasir.', fontSize: '13px', color: '#fda4af' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'omni-badge');
  const titleC = lc.filter(c => c.id === 'omni-title');
  const descC = lc.filter(c => c.id === 'omni-desc');
  const btn1C = lc.filter(c => c.id === 'omni-btn1');
  const btn2C = lc.filter(c => c.id === 'omni-btn2');
  const stat1 = lc.filter(c => c.id === 'omni-stat1-card');
  const stat2 = lc.filter(c => c.id === 'omni-stat2-card');
  const stat3 = lc.filter(c => c.id === 'omni-stat3-card');
  const stat4 = lc.filter(c => c.id === 'omni-stat4-card');
  const heroCard = lc.filter(c => c.id === 'omni-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#0d0307] text-rose-100 overflow-hidden py-20 lg:py-24">
      {/* Crimson Rose & Amber ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Flash Promo Metrics */}
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

            {/* 4 Flash Promo Metric Cards */}
            <div className="pt-8 border-t border-rose-900/40 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
