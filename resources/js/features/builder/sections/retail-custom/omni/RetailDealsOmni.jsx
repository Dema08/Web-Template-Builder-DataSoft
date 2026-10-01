import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailDealsOmni
 * 3 Hot Flash Deals Cards with editable images, promo discount badges, and klaim voucher buttons.
 */
export default function RetailDealsOmni({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'deal-badge', type: 'badge', props: { text: '🔥 FLASH SALE DEAL TERBATAS HARI INI', variant: 'solid', background: '#e11d48', color: '#ffffff' } },
    { id: 'deal-title', type: 'heading', props: { content: 'Penawaran Spesial Dengan Potongan Harga Terbesar Minggu Ini', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
    { id: 'deal-desc', type: 'paragraph', props: { content: 'Stok promo terbatas dan diperbarui setiap 24 jam. Klaim voucher sebelum kehabisan kuota!', fontSize: '16px', color: '#64748b' } },

    // Card 1: Gadget & Tech Deals
    {
      id: 'card-deal1',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#ffe4e6', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'deal1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
            alt: 'Smartphone Smartwatch & Gadget Promo',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'deal1-badge', type: 'badge', props: { text: '📱 GADGET & ELECTRONIC • DISKON 45%', variant: 'solid', background: '#ffe4e6', color: '#e11d48' } },
        { id: 'deal1-title', type: 'heading', props: { content: 'Smartphone, TWS Earphone & Smartwatch', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'deal1-desc', type: 'paragraph', props: { content: 'Garansi resmi TAM/SEIN 1 tahun, gratis proteksi layar, dan cicilan 0% hingga 12 bulan menggunakan berbagai kartu bank.', fontSize: '14px', color: '#64748b' } },
        { id: 'deal1-btn', type: 'button', props: { label: 'Beli Promo Gadget ⚡', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#e11d48', color: '#ffffff', fontWeight: '700' } },
      ]
    },

    // Card 2: Fresh Market Daily Harvest
    {
      id: 'card-deal2',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#ffe4e6', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'deal2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=80',
            alt: 'Buah dan Sayuran Segar Supermart Fresh',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'deal2-badge', type: 'badge', props: { text: '🍎 FRESH MARKET • PANEN PAGI INI', variant: 'solid', background: '#ffe4e6', color: '#e11d48' } },
        { id: 'deal2-title', type: 'heading', props: { content: 'Buah Impor, Sayur Organik & Daging Segar', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'deal2-desc', type: 'paragraph', props: { content: 'Dijamin kesegarannya dengan kontrol cold storage ketat. Pengantaran menggunakan thermal bag es untuk menjaga kualitas prima.', fontSize: '14px', color: '#64748b' } },
        { id: 'deal2-btn', type: 'button', props: { label: 'Belanja Segar Sekarang 🥗', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#e11d48', color: '#ffffff', fontWeight: '700' } },
      ]
    },

    // Card 3: Home & Kitchen Appliances
    {
      id: 'card-deal3',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#ffe4e6', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'deal3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80',
            alt: 'Peralatan Dapur Airfryer Blender Microwave',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'deal3-badge', type: 'badge', props: { text: '🍳 HOME APPLIANCES • BUNDLE HEMAT', variant: 'solid', background: '#ffe4e6', color: '#e11d48' } },
        { id: 'deal3-title', type: 'heading', props: { content: 'Air Fryer, Blender, Rice Cooker & Panci', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'deal3-desc', type: 'paragraph', props: { content: 'Paket bundling perlengkapan dapur pintar hemat hingga 50%. Free ongkir ke seluruh area jabodetabek.', fontSize: '14px', color: '#64748b' } },
        { id: 'deal3-btn', type: 'button', props: { label: 'Klaim Promo Dapur 🍳', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#e11d48', color: '#ffffff', fontWeight: '700' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'deal-badge');
  const titleC = lc.filter(c => c.id === 'deal-title');
  const descC = lc.filter(c => c.id === 'deal-desc');
  const card1 = lc.filter(c => c.id === 'card-deal1');
  const card2 = lc.filter(c => c.id === 'card-deal2');
  const card3 = lc.filter(c => c.id === 'card-deal3');

  return (
    <section id="deals" className="py-20 lg:py-24 bg-rose-50/40 text-slate-900">
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
