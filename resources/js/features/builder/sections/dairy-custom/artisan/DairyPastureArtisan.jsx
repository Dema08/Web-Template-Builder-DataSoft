import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyPastureArtisan
 * 4 Animal Welfare & Farmstead Cards + Organic Farm Tour Banner Card.
 */
export default function DairyPastureArtisan({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'pas-badge', type: 'badge', props: { text: '🌿 FILOSOFI PETERNAKAN BERKELANJUTAN', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.4)' } },
    { id: 'pas-title', type: 'heading', props: { content: 'Harmoni Alam, Kesejahteraan Ternak & Pertanian Regeneratif', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#fefce8', letterSpacing: '-0.02em' } },
    { id: 'pas-desc', type: 'paragraph', props: { content: 'Kami percaya kualitas susu terbaik lahir dari tanah yang subur tanpa pupuk kimia, pakan rumput liar alami, dan cinta pada setiap hewan ternak.', fontSize: '16px', color: '#cbd5e1' } },

    // Card 1: 150 Ha Pesticide-Free Pasture
    {
      id: 'card-pas1',
      type: 'card',
      props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pas1-badge', type: 'badge', props: { text: '🌱 ZERO PESTICIDE', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fde68a' } },
        { id: 'pas1-title', type: 'heading', props: { content: 'Padang Rumput Bebas Kimia Sintetis', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fefce8' } },
        { id: 'pas1-desc', type: 'paragraph', props: { content: 'Tanah disuburkan dengan kompos alami peternakan sendiri tanpa herbisida, menghasilkan rumput clover dan alfalfa berkualitas tinggi.', fontSize: '14px', color: '#a7f3d0' } },
      ]
    },

    // Card 2: Low-Stress Milking
    {
      id: 'card-pas2',
      type: 'card',
      props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pas2-badge', type: 'badge', props: { text: '🎵 VOLUNTARY MILKING', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fde68a' } },
        { id: 'pas2-title', type: 'heading', props: { content: 'Pemerahan Sukarela Bebas Stres', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fefce8' } },
        { id: 'pas2-desc', type: 'paragraph', props: { content: 'Sapi masuk ke stasiun perahan dengan kemauannya sendiri diiringi musik klasik yang terbukti menjaga kadar hormon kortisol tetap nol.', fontSize: '14px', color: '#a7f3d0' } },
      ]
    },

    // Card 3: Eco Returnable Glass Bottle
    {
      id: 'card-pas3',
      type: 'card',
      props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pas3-badge', type: 'badge', props: { text: '♻️ ZERO SINGLE-USE PLASTIC', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fde68a' } },
        { id: 'pas3-title', type: 'heading', props: { content: 'Botol Kaca Sirkular Daur Ulang', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fefce8' } },
        { id: 'pas3-desc', type: 'paragraph', props: { content: 'Kemasan kaca tebal kedap udara yang dapat ditukar saat pengiriman berikutnya, disterilisasi dengan uap panas bersuhu 120°C.', fontSize: '14px', color: '#a7f3d0' } },
      ]
    },

    // Card 4: Dawn Delivery 06.00 AM
    {
      id: 'card-pas4',
      type: 'card',
      props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pas4-badge', type: 'badge', props: { text: '🌅 PENGANTARAN SUBUH', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fde68a' } },
        { id: 'pas4-title', type: 'heading', props: { content: 'Tiba di Depan Pintu Pukul 06.00', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fefce8' } },
        { id: 'pas4-desc', type: 'paragraph', props: { content: 'Kurir khusus meletakkan botol dingin di cooler box depan pintu Anda sebelum keluarga bangun untuk sarapan pagi sehat.', fontSize: '14px', color: '#a7f3d0' } },
      ]
    },

    // Organic Farm Tour Banner Card
    {
      id: 'tour-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #1c4a35 0%, #061c13 100%)', borderColor: 'rgba(245,158,11,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
      childrenComponents: [
        { id: 'tour-banner-badge', type: 'badge', props: { text: '🐄 PRIVATE FARM TOUR & CHEESE TASTING', variant: 'solid', background: 'rgba(245,158,11,0.3)', color: '#fef3c7' } },
        { id: 'tour-banner-title', type: 'heading', props: { content: 'Ajak Keluarga Menikmati Suasana Peternakan Pegunungan & Tasting Keju', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
        { id: 'tour-banner-desc', type: 'paragraph', props: { content: 'Nikmati tur edukasi memberi makan anak sapi, melihat proses pembuatan keju gouda, dan piknik santai di hamparan rumput hijau kaki bukit.', fontSize: '14px', color: '#cbd5e1' } },
        { id: 'tour-banner-btn', type: 'button', props: { label: 'Reservasi Kunjungan Private 🌿', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#ffffff', fontWeight: '700' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'pas-badge');
  const titleC = lc.filter(c => c.id === 'pas-title');
  const descC = lc.filter(c => c.id === 'pas-desc');
  const card1 = lc.filter(c => c.id === 'card-pas1');
  const card2 = lc.filter(c => c.id === 'card-pas2');
  const card3 = lc.filter(c => c.id === 'card-pas3');
  const card4 = lc.filter(c => c.id === 'card-pas4');
  const banner = lc.filter(c => c.id === 'tour-banner-card');

  return (
    <section id="pasture" className="py-20 lg:py-24 bg-[#04140e] text-emerald-100">
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
