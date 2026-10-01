import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailHeroWholesale
 * B2B Wholesale Hero with 4 distribution KPI cards and warehouse dispatch showroom card.
 */
export default function RetailHeroWholesale({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'wh-badge', type: 'badge', props: { text: '📦 DISTRIBUTOR RESMI TIER-1 FMCG & SEMBAKO NASIONAL', variant: 'outline', background: 'rgba(37,99,235,0.15)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.4)' } },
    { id: 'wh-title', type: 'heading', props: { content: 'Pasokan Grosir Langsung Pabrik, Harga Terendah & SLA Pengiriman Tercepat', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
    { id: 'wh-desc', type: 'paragraph', props: { content: 'Pusat distribusi grosir terpercaya menyuplai 4.850+ toko retail, minimarket mandiri, dan agen se-Indonesia. Didukung 15 warehouse modern dengan 50.000+ SKU siap kirim.', fontSize: '17px', color: '#94a3b8' } },
    { id: 'wh-btn1', type: 'button', props: { label: 'Lihat Daftar Harga Grosir 📑', href: '#catalog', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: '#ffffff', fontWeight: '700' } },
    { id: 'wh-btn2', type: 'button', props: { label: 'Ajukan Limit Tempo 30 Hari', href: '#contact', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.7)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.4)' } },

    // 4 Distribution KPI Cards
    {
      id: 'wh-stat1-card',
      type: 'card',
      props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'wh-stat1-num', type: 'heading', props: { content: '50.000+ SKU', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#60a5fa' } },
        { id: 'wh-stat1-lbl', type: 'paragraph', props: { content: 'Produk Ready Stock', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'wh-stat2-card',
      type: 'card',
      props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'wh-stat2-num', type: 'heading', props: { content: '24 - 48 Jam', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#38bdf8' } },
        { id: 'wh-stat2-lbl', type: 'paragraph', props: { content: 'SLA Dispatch Pengiriman', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'wh-stat3-card',
      type: 'card',
      props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'wh-stat3-num', type: 'heading', props: { content: '4.850+ Mitra', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#38bdf8' } },
        { id: 'wh-stat3-lbl', type: 'paragraph', props: { content: 'Toko & Agen Aktif', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'wh-stat4-card',
      type: 'card',
      props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'wh-stat4-num', type: 'heading', props: { content: 's/d 35%', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#60a5fa' } },
        { id: 'wh-stat4-lbl', type: 'paragraph', props: { content: 'Margin Keuntungan Toko', fontSize: '12px', color: '#94a3b8' } },
      ]
    },

    // Warehouse & Logistics Showcase Card
    {
      id: 'wh-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', borderColor: 'rgba(59,130,246,0.35)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'wh-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80',
            alt: 'Automated Logistics Warehouse Hub Distribution Center',
            borderRadius: '14px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'wh-card-badge', type: 'badge', props: { text: '🏭 WAREHOUSE HUB AUTOMATION 24/7', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#93c5fd' } },
        { id: 'wh-card-title', type: 'heading', props: { content: 'Sistem Barcode Picking Cepat & Armada Truk Terjadwal', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'wh-card-desc', type: 'paragraph', props: { content: 'Semua pesanan diproses melalui WMS otomatis untuk memastikan akurasi barang 99.98% tanpa risiko retur atau selisih stok.', fontSize: '13px', color: '#94a3b8' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'wh-badge');
  const titleC = lc.filter(c => c.id === 'wh-title');
  const descC = lc.filter(c => c.id === 'wh-desc');
  const btn1C = lc.filter(c => c.id === 'wh-btn1');
  const btn2C = lc.filter(c => c.id === 'wh-btn2');
  const stat1 = lc.filter(c => c.id === 'wh-stat1-card');
  const stat2 = lc.filter(c => c.id === 'wh-stat2-card');
  const stat3 = lc.filter(c => c.id === 'wh-stat3-card');
  const stat4 = lc.filter(c => c.id === 'wh-stat4-card');
  const heroCard = lc.filter(c => c.id === 'wh-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#070d1e] text-slate-100 overflow-hidden py-20 lg:py-24">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Wholesale Metrics */}
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

            {/* 4 Wholesale Metric Cards */}
            <div className="pt-8 border-t border-blue-900/40 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>{renderLayoutComponents(stat1, sectionId)}</div>
              <div>{renderLayoutComponents(stat2, sectionId)}</div>
              <div>{renderLayoutComponents(stat3, sectionId)}</div>
              <div>{renderLayoutComponents(stat4, sectionId)}</div>
            </div>
          </div>

          {/* Right Column Warehouse Card */}
          <div className="lg:col-span-6">
            <div>{renderLayoutComponents(heroCard, sectionId)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
