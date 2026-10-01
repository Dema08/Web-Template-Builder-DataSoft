import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailOmnichannelOmni
 * 4 Omnichannel Advantage Cards + Member Cashback Banner Card.
 */
export default function RetailOmnichannelOmni({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'adv-badge', type: 'badge', props: { text: '⚡ KEMUDAHAN BELANJA MULTI-CHANNEL', variant: 'solid', background: '#be123c', color: '#ffffff' } },
    { id: 'adv-title', type: 'heading', props: { content: 'Solusi Belanja Terintegrasi: Toko Fisik, Website, & SuperApp', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#fff1f2', letterSpacing: '-0.02em' } },
    { id: 'adv-desc', type: 'paragraph', props: { content: 'Nikmati fleksibilitas tanpa batas berbelanja di mana saja dengan harga, promo, dan poin yang selalu terhubung.', fontSize: '16px', color: '#fda4af' } },

    // Card 1: Click & Collect 2 Jam
    {
      id: 'card-adv1',
      type: 'card',
      props: { background: '#220813', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'adv1-badge', type: 'badge', props: { text: '🏪 DRIVE-THRU / PICKUP', variant: 'solid', background: 'rgba(225,29,72,0.25)', color: '#fb7185' } },
        { id: 'adv1-title', type: 'heading', props: { content: 'Ambil di Gerai Tanpa Antre', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fff1f2' } },
        { id: 'adv1-desc', type: 'paragraph', props: { content: 'Pesan dari rumah, staff kami siapkan kantong belanjaan Anda. Datang langsung ambil di loket express tanpa perlu antre di kasir.', fontSize: '14px', color: '#fda4af' } },
      ]
    },

    // Card 2: Instant 2-Hour Delivery
    {
      id: 'card-adv2',
      type: 'card',
      props: { background: '#220813', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'adv2-badge', type: 'badge', props: { text: '🛵 KURIR INSTAN', variant: 'solid', background: 'rgba(225,29,72,0.25)', color: '#fb7185' } },
        { id: 'adv2-title', type: 'heading', props: { content: 'Kirim Cepat Sampai dalam 2 Jam', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fff1f2' } },
        { id: 'adv2-desc', type: 'paragraph', props: { content: 'Didukung armada kurir gerai dan mitra kurir instan terpercaya untuk pengiriman sembako, sayur, dan daging super cepat.', fontSize: '14px', color: '#fda4af' } },
      ]
    },

    // Card 3: Multi-Payment & Cicilan 0%
    {
      id: 'card-adv3',
      type: 'card',
      props: { background: '#220813', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'adv3-badge', type: 'badge', props: { text: '💳 QRIS & PAYLATER', variant: 'solid', background: 'rgba(225,29,72,0.25)', color: '#fb7185' } },
        { id: 'adv3-title', type: 'heading', props: { content: 'Pembayaran Lengkap & Cicilan 0%', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fff1f2' } },
        { id: 'adv3-desc', type: 'paragraph', props: { content: 'Mendukung QRIS semua e-wallet, kartu kredit cicilan 0% hingga 12 bulan, COD, serta paylater dengan bunga ringan.', fontSize: '14px', color: '#fda4af' } },
      ]
    },

    // Card 4: Loyalty SuperPoin
    {
      id: 'card-adv4',
      type: 'card',
      props: { background: '#220813', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'adv4-badge', type: 'badge', props: { text: '🎁 REWARD POIN', variant: 'solid', background: 'rgba(225,29,72,0.25)', color: '#fb7185' } },
        { id: 'adv4-title', type: 'heading', props: { content: 'SuperPoin Cashback Hingga 10%', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fff1f2' } },
        { id: 'adv4-desc', type: 'paragraph', props: { content: 'Setiap belanja Rp 10.000 dapat 100 poin yang bisa langsung digunakan untuk memotong total tagihan belanja berikutnya.', fontSize: '14px', color: '#fda4af' } },
      ]
    },

    // Member Cashback Banner Card
    {
      id: 'cashback-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #881337 0%, #260a16 100%)', borderColor: 'rgba(244,63,94,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
      childrenComponents: [
        { id: 'cashback-banner-badge', type: 'badge', props: { text: '🎉 BONUS MEMBER BARU SUPERMART', variant: 'solid', background: '#e11d48', color: '#ffffff' } },
        { id: 'cashback-banner-title', type: 'heading', props: { content: 'Daftar Jadi Member Hari Ini & Klaim Voucher Diskon Rp 150.000!', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
        { id: 'cashback-banner-desc', type: 'paragraph', props: { content: 'Plus gratis biaya pengiriman untuk 5 kali transaksi pertama tanpa minimum pembelian. Unduh aplikasinya sekarang.', fontSize: '14px', color: '#fecdd3' } },
        { id: 'cashback-banner-btn', type: 'button', props: { label: 'Klaim Voucher Rp 150.000 🎁', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #f43f5e, #e11d48)', color: '#ffffff', fontWeight: '800' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'adv-badge');
  const titleC = lc.filter(c => c.id === 'adv-title');
  const descC = lc.filter(c => c.id === 'adv-desc');
  const card1 = lc.filter(c => c.id === 'card-adv1');
  const card2 = lc.filter(c => c.id === 'card-adv2');
  const card3 = lc.filter(c => c.id === 'card-adv3');
  const card4 = lc.filter(c => c.id === 'card-adv4');
  const banner = lc.filter(c => c.id === 'cashback-banner-card');

  return (
    <section className="py-20 lg:py-24 bg-[#100409] text-rose-100">
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
