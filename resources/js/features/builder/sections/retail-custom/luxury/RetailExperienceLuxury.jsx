import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailExperienceLuxury
 * 4 Bespoke Shopping Cards + Maison Heritage Banner Card.
 */
export default function RetailExperienceLuxury({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'exp-badge', type: 'badge', props: { text: '⚜️ BESPOKE WHITE-GLOVE SERVICE', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#d8b4fe', borderColor: 'rgba(168,85,247,0.4)' } },
    { id: 'exp-title', type: 'heading', props: { content: 'Layanan Eksklusif Yang Dirancang Khusus Untuk Kenyamanan Anda', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#faf5ff', letterSpacing: '-0.02em' } },
    { id: 'exp-desc', type: 'paragraph', props: { content: 'Kami menjamin setiap transaksi berbelanja di Maison Prestige memberikan pengalaman tak tertandingi dengan standar privasi tertinggi.', fontSize: '16px', color: '#cbd5e1' } },

    // Card 1: Personal Concierge
    {
      id: 'card-exp1',
      type: 'card',
      props: { background: '#180e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'exp1-badge', type: 'badge', props: { text: '🤵 1-ON-1 ADVISOR', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#d8b4fe' } },
        { id: 'exp1-title', type: 'heading', props: { content: 'Personal Luxury Concierge 24/7', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#faf5ff' } },
        { id: 'exp1-desc', type: 'paragraph', props: { content: 'Konsultan gaya pribadi yang berdedikasi mencari produk langka, mengurus reservasi salon boutique, dan pengiriman VIP.', fontSize: '14px', color: '#a855f7' } },
      ]
    },

    // Card 2: Champagne Suite
    {
      id: 'card-exp2',
      type: 'card',
      props: { background: '#180e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'exp2-badge', type: 'badge', props: { text: '🥂 PRIVATE SUITE', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#d8b4fe' } },
        { id: 'exp2-title', type: 'heading', props: { content: 'Ruang VIP Pribadi Kedap Suara', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#faf5ff' } },
        { id: 'exp2-desc', type: 'paragraph', props: { content: 'Nikmati belanja secara privat tanpa gangguan di suite mewah kami yang dilengkapi sofa Chesterfield dan sajian beverage premium.', fontSize: '14px', color: '#a855f7' } },
      ]
    },

    // Card 3: Armored Doorstep Delivery
    {
      id: 'card-exp3',
      type: 'card',
      props: { background: '#180e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'exp3-badge', type: 'badge', props: { text: '🚗 WHITE-GLOVE FLEET', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#d8b4fe' } },
        { id: 'exp3-title', type: 'heading', props: { content: 'Pengantaran Khusus Bersarung Tangan Putih', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#faf5ff' } },
        { id: 'exp3-desc', type: 'paragraph', props: { content: 'Kurir berseragam resmi dengan kendaraan khusus dan asuransi all-risk 100% mengantarkan langsung ke kediaman Anda.', fontSize: '14px', color: '#a855f7' } },
      ]
    },

    // Card 4: Blockchain Certificate
    {
      id: 'card-exp4',
      type: 'card',
      props: { background: '#180e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'exp4-badge', type: 'badge', props: { text: '📜 BLOCKCHAIN PASSPORT', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#d8b4fe' } },
        { id: 'exp4-title', type: 'heading', props: { content: 'Sertifikat Digital NFT & Kartu Garansi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#faf5ff' } },
        { id: 'exp4-desc', type: 'paragraph', props: { content: 'Setiap barang dilengkapi paspor digital kriptografis yang membuktikan keaslian serta riwayat servis seumur hidup.', fontSize: '14px', color: '#a855f7' } },
      ]
    },

    // Maison Heritage Banner Card
    {
      id: 'heritage-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #2e1065 0%, #120724 100%)', borderColor: 'rgba(168,85,247,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
      childrenComponents: [
        { id: 'heritage-banner-badge', type: 'badge', props: { text: '👑 GLOBAL LUXURY NETWORK ALLIANCE', variant: 'solid', background: 'rgba(168,85,247,0.3)', color: '#f5d0fe' } },
        { id: 'heritage-banner-title', type: 'heading', props: { content: 'Akses Eksklusif Ke Auction House & Peluncuran Koleksi Dunia', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
        { id: 'heritage-banner-desc', type: 'paragraph', props: { content: 'Sebagai member Maison Prestige Club, Anda mendapatkan prioritas pemesanan (allocation priority) untuk model jam dan tas yang masuk daftar tunggu global.', fontSize: '14px', color: '#cbd5e1' } },
        { id: 'heritage-banner-btn', type: 'button', props: { label: 'Ajukan Undangan VIP Member ✨', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', color: '#ffffff', fontWeight: '700' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'exp-badge');
  const titleC = lc.filter(c => c.id === 'exp-title');
  const descC = lc.filter(c => c.id === 'exp-desc');
  const card1 = lc.filter(c => c.id === 'card-exp1');
  const card2 = lc.filter(c => c.id === 'card-exp2');
  const card3 = lc.filter(c => c.id === 'card-exp3');
  const card4 = lc.filter(c => c.id === 'card-exp4');
  const banner = lc.filter(c => c.id === 'heritage-banner-card');

  return (
    <section id="experience" className="py-20 lg:py-24 bg-[#0a0414] text-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
          <div>{renderLayoutComponents(card4, sectionId)}</div>
        </div>

        <div>{renderLayoutComponents(banner, sectionId)}</div>
      </div>
    </section>
  );
}
