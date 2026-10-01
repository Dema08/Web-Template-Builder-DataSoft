import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailCatalogWholesale
 * 3 Tiered Wholesale Product Category Cards with editable images, margin badges, and CTA buttons.
 */
export default function RetailCatalogWholesale({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cat-badge', type: 'badge', props: { text: '📦 KATALOG GROSIR & TIER VOLUME', variant: 'outline', background: 'rgba(37,99,235,0.1)', color: '#2563eb', borderColor: 'rgba(37,99,235,0.3)' } },
    { id: 'cat-title', type: 'heading', props: { content: 'Kategori Produk Fast-Moving & Skema Diskon Grosir Bertingkat', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
    { id: 'cat-desc', type: 'paragraph', props: { content: 'Pilihan produk esensial dengan perputaran tercepat di pasar retail. Dapatkan potongan harga ekstra hingga 15% untuk pembelian per karton/pallet.', fontSize: '16px', color: '#64748b' } },

    // Card 1: Sembako & Staples
    {
      id: 'card-cat1',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'cat1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
            alt: 'Sembako Beras Minyak Gula Grosir',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'cat1-badge', type: 'badge', props: { text: '🌾 SEMBAKO & BAHAN POKOK', variant: 'solid', background: '#eff6ff', color: '#1d4ed8' } },
        { id: 'cat1-title', type: 'heading', props: { content: 'Minyak Goreng, Gula Pasir, Beras & Terigu', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'cat1-desc', type: 'paragraph', props: { content: 'Suplai komoditas pangan pokok bersertifikasi SNI & Halal. Pasokan stabil tanpa fluktuasi harga mendadak, siap kirim per kontainer/truk.', fontSize: '14px', color: '#64748b' } },
        { id: 'cat1-btn', type: 'button', props: { label: 'Order Pallet Sembako 🛒', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', fontWeight: '600' } },
      ]
    },

    // Card 2: FMCG Snacks & Beverages
    {
      id: 'card-cat2',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'cat2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281704?w=800&auto=format&fit=crop&q=80',
            alt: 'Minuman Kemasan dan Snack Grosir FMCG',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'cat2-badge', type: 'badge', props: { text: '🥤 MINUMAN & MAKANAN RINGAN', variant: 'solid', background: '#eff6ff', color: '#1d4ed8' } },
        { id: 'cat2-title', type: 'heading', props: { content: 'Snack, Biskuit, RTD Tea & Minuman Isotonik', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'cat2-desc', type: 'paragraph', props: { content: 'Distributor resmi dari produsen FMCG top nasional. Expired date dijamin masih sangat panjang (> 12 bulan) dengan margin hingga 28%.', fontSize: '14px', color: '#64748b' } },
        { id: 'cat2-btn', type: 'button', props: { label: 'Lihat Pricelist Karton 📋', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', fontWeight: '600' } },
      ]
    },

    // Card 3: Personal & Home Care
    {
      id: 'card-cat3',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'cat3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
            alt: 'Perawatan Rumah dan Sabun Kebersihan',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'cat3-badge', type: 'badge', props: { text: '🧼 HOME & PERSONAL CARE', variant: 'solid', background: '#eff6ff', color: '#1d4ed8' } },
        { id: 'cat3-title', type: 'heading', props: { content: 'Deterjen, Sabun, Pasta Gigi & Sanitasi', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'cat3-desc', type: 'paragraph', props: { content: 'Produk kebersihan rumah tangga dan perlengkapan mandi terlengkap untuk toko kelontong modern dan supermarket ritel mandiri.', fontSize: '14px', color: '#64748b' } },
        { id: 'cat3-btn', type: 'button', props: { label: 'Minta Paket Buka Toko 📦', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', fontWeight: '600' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'cat-badge');
  const titleC = lc.filter(c => c.id === 'cat-title');
  const descC = lc.filter(c => c.id === 'cat-desc');
  const card1 = lc.filter(c => c.id === 'card-cat1');
  const card2 = lc.filter(c => c.id === 'card-cat2');
  const card3 = lc.filter(c => c.id === 'card-cat3');

  return (
    <section id="catalog" className="py-20 lg:py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
        </div>
      </div>
    </section>
  );
}
