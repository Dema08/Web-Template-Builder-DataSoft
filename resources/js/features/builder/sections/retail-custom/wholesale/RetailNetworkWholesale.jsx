import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailNetworkWholesale
 * 4 Supply Chain & Distribution Infrastructure Cards + WMS Guarantee Banner Card.
 */
export default function RetailNetworkWholesale({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'net-badge', type: 'badge', props: { text: '🚚 INFRASTRUKTUR & SUPPLY CHAIN', variant: 'outline', background: 'rgba(37,99,235,0.15)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.4)' } },
    { id: 'net-title', type: 'heading', props: { content: 'Fondasi Distribusi Terintegrasi Untuk Kelancaran Bisnis Anda', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'net-desc', type: 'paragraph', props: { content: 'Sistem operasional berstandar enterprise menjamin pesanan datang tepat waktu, utuh, dan terlindungi asuransi pengiriman penuh.', fontSize: '16px', color: '#94a3b8' } },

    // Card 1: Direct Factory Price
    {
      id: 'card-net1',
      type: 'card',
      props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'net1-badge', type: 'badge', props: { text: '🏭 PRINCIPAL DIRECT', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#60a5fa' } },
        { id: 'net1-title', type: 'heading', props: { content: 'Harga Tangan Pertama Dari Pabrik', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'net1-desc', type: 'paragraph', props: { content: 'Kontrak langsung dengan 50+ produsen FMCG memastikan harga termurah tanpa perantara ganda sehingga margin Anda maksimal.', fontSize: '14px', color: '#94a3b8' } },
      ]
    },

    // Card 2: Tempo Payment 30 Hari
    {
      id: 'card-net2',
      type: 'card',
      props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'net2-badge', type: 'badge', props: { text: '💳 CASH FLOW BUFFER', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#60a5fa' } },
        { id: 'net2-title', type: 'heading', props: { content: 'Fasilitas Pembayaran Tempo 14-30 Hari', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'net2-desc', type: 'paragraph', props: { content: 'Dukungan modal kerja untuk toko mitra aktif dengan plafon kredit fleksibel hingga Rp 500 Juta untuk perputaran stok.', fontSize: '14px', color: '#94a3b8' } },
      ]
    },

    // Card 3: Dedicated Fleet SLA
    {
      id: 'card-net3',
      type: 'card',
      props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'net3-badge', type: 'badge', props: { text: '🚛 ARMADA SENDIRI', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#60a5fa' } },
        { id: 'net3-title', type: 'heading', props: { content: '120+ Truk CDD & Blindvan Terjadwal', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'net3-desc', type: 'paragraph', props: { content: 'Rute pengiriman harian teratur ke seluruh area retail kota dan pelosok kabupaten dengan jaminan barang tidak rusak.', fontSize: '14px', color: '#94a3b8' } },
      ]
    },

    // Card 4: Return & Claim Easy
    {
      id: 'card-net4',
      type: 'card',
      props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'net4-badge', type: 'badge', props: { text: '🛡️ GARANSI 100%', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#60a5fa' } },
        { id: 'net4-title', type: 'heading', props: { content: 'Klaim Retur & Rusak Ganti 1x24 Jam', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'net4-desc', type: 'paragraph', props: { content: 'Sistem proteksi retur mudah langsung melalui dashboard aplikasi grosir tanpa birokrasi berbelit-belit.', fontSize: '14px', color: '#94a3b8' } },
      ]
    },

    // Supply Chain Guarantee Banner Card
    {
      id: 'wms-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)', borderColor: 'rgba(59,130,246,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
      childrenComponents: [
        { id: 'wms-banner-badge', type: 'badge', props: { text: '📊 SISTEM LOGISTIK TERPADU ISO 9001:2015', variant: 'solid', background: 'rgba(59,130,246,0.3)', color: '#bfdbfe' } },
        { id: 'wms-banner-title', type: 'heading', props: { content: 'Real-Time Inventory Tracking & Auto Restock Untuk Mitra Toko', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
        { id: 'wms-banner-desc', type: 'paragraph', props: { content: 'Integrasikan sistem kasir/POS toko Anda dengan API Mega Distribusi untuk pemesanan otomatis ketika stok mendekati batas minimum.', fontSize: '14px', color: '#cbd5e1' } },
        { id: 'wms-banner-btn', type: 'button', props: { label: 'Integrasi POS Toko Sekarang ⚡', href: '#contact', variant: 'primary', size: 'medium', radius: 'md', background: '#3b82f6', color: '#ffffff', fontWeight: '700' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'net-badge');
  const titleC = lc.filter(c => c.id === 'net-title');
  const descC = lc.filter(c => c.id === 'net-desc');
  const card1 = lc.filter(c => c.id === 'card-net1');
  const card2 = lc.filter(c => c.id === 'card-net2');
  const card3 = lc.filter(c => c.id === 'card-net3');
  const card4 = lc.filter(c => c.id === 'card-net4');
  const banner = lc.filter(c => c.id === 'wms-banner-card');

  return (
    <section className="py-20 lg:py-24 bg-[#070e22] text-slate-100">
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
