import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmProductsWellness
 * Organic skincare & herbal wellness product cards with ratings and price badges.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmProductsWellness({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prd-wl-badge', type: 'badge', props: { text: 'REKOMENDASI PRODUK ALAMI', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' } },
    { id: 'prd-wl-title', type: 'heading', props: { content: 'Rangkaian Perawatan Alami untuk Segala Jenis Kulit', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ecfdf5', textAlign: 'center' } },
    { id: 'prd-wl-desc', type: 'paragraph', props: { content: 'Dirancang aman untuk kulit sensitif, ibu hamil & menyusui, dengan aroma relaksasi alami tanaman nusantara.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' } },
    // Product 1
    { id: 'wl1-title', type: 'heading', props: { content: 'Merapi Radiance Bakuchiol Face Oil', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'wl1-desc', type: 'paragraph', props: { content: 'Alternatif retinol alami nabati untuk menyamarkan garis halus, mencerahkan, dan mengunci kelembapan kulit.', fontSize: '13px', color: '#a7f3d0' } },
    { id: 'wl1-price', type: 'badge', props: { text: 'Rp 139.000', variant: 'solid', background: '#10b981', color: '#ffffff' } },
    // Product 2
    { id: 'wl2-title', type: 'heading', props: { content: 'Sabun Castille Calendula & Madu Hutan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'wl2-desc', type: 'paragraph', props: { content: 'Sabun cair murni minyak zaitun & VCO, lembut membersihkan tanpa membuat kulit kering atau iritasi.', fontSize: '13px', color: '#a7f3d0' } },
    { id: 'wl2-price', type: 'badge', props: { text: 'Rp 79.000', variant: 'solid', background: '#10b981', color: '#ffffff' } },
    // Product 3
    { id: 'wl3-title', type: 'heading', props: { content: 'Minyak Aromaterapi Ketenangan Kenanga', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'wl3-desc', type: 'paragraph', props: { content: 'Essential oil roll-on murni bunga kenanga Jawa & lavender untuk meredakan stres dan tidur lebih lelap.', fontSize: '13px', color: '#a7f3d0' } },
    { id: 'wl3-price', type: 'badge', props: { text: 'Rp 59.000', variant: 'solid', background: '#10b981', color: '#ffffff' } },
    // Product 4
    { id: 'wl4-title', type: 'heading', props: { content: 'Masker Detoks Temulawak & Kaolin Clay', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'wl4-desc', type: 'paragraph', props: { content: 'Masker bilas pembersih pori mendalam untuk meredakan jerawat meradang dan memudarkan bekas noda.', fontSize: '13px', color: '#a7f3d0' } },
    { id: 'wl4-price', type: 'badge', props: { text: 'Rp 65.000', variant: 'solid', background: '#10b981', color: '#ffffff' } },
    // CTA
    { id: 'prd-wl-cta-btn', type: 'button', props: { label: 'Beli via WhatsApp / Official Store 🛒', href: '#consultation', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'prd-wl-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'prd-wl-title');
  const descComps = layoutComponents.filter(c => c.id === 'prd-wl-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'prd-wl-cta-btn');

  const products = [
    {
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'wl1-title'),
      desc: layoutComponents.filter(c => c.id === 'wl1-desc'),
      price: layoutComponents.filter(c => c.id === 'wl1-price'),
      tag: 'Best Seller'
    },
    {
      img: 'https://images.unsplash.com/photo-1607006314644-8d48721c5f30?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'wl2-title'),
      desc: layoutComponents.filter(c => c.id === 'wl2-desc'),
      price: layoutComponents.filter(c => c.id === 'wl2-price'),
      tag: 'Gentle Soap'
    },
    {
      img: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'wl3-title'),
      desc: layoutComponents.filter(c => c.id === 'wl3-desc'),
      price: layoutComponents.filter(c => c.id === 'wl3-price'),
      tag: 'Aromatherapy'
    },
    {
      img: 'https://images.unsplash.com/photo-1567928815104-b7980ee5032e?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'wl4-title'),
      desc: layoutComponents.filter(c => c.id === 'wl4-desc'),
      price: layoutComponents.filter(c => c.id === 'wl4-price'),
      tag: 'Clay Mask'
    }
  ];

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-[#04110b] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden bg-[#092218] border border-emerald-950 hover:border-emerald-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-black/40">
                <img
                  src={p.img}
                  alt="Product preview"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  {p.tag}
                </div>
              </div>

              <div className="p-5 space-y-3">
                {renderLayoutComponents(p.title, sectionId)}
                {renderLayoutComponents(p.desc, sectionId)}
                <div className="pt-3 border-t border-emerald-950 flex items-center justify-between">
                  <span className="text-xs text-stone-400">Harga:</span>
                  {renderLayoutComponents(p.price, sectionId)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
