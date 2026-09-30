import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmProductsCraft
 * Artisan products gallery with price tags, handcrafted details, and direct checkout/inquiry buttons.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmProductsCraft({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prd-badge', type: 'badge', props: { text: 'KOLEKSI MAHA KARYA', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' } },
    { id: 'prd-title', type: 'heading', props: { content: 'Karya Eksklusif Ditenun & Dibatik dengan Ketulusan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffedd5', textAlign: 'center' } },
    { id: 'prd-desc', type: 'paragraph', props: { content: 'Setiap helai kain dibuat dalam jumlah sangat terbatas (limited edition) dengan sertifikat keaslian dan nomor seri pengrajin.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' } },
    // Item 1
    { id: 'p1-title', type: 'heading', props: { content: 'Outer Tenun Ikat Sikka Indigo', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'p1-desc', type: 'paragraph', props: { content: 'Tenun tradisional Flores dengan pewarna alami daun Indigofera, siluet modern long outer.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'p1-price', type: 'badge', props: { text: 'Rp 650.000', variant: 'solid', background: '#c2410c', color: '#ffffff' } },
    // Item 2
    { id: 'p2-title', type: 'heading', props: { content: 'Kemeja Batik Tulis Sutra Parang Kusumo', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'p2-desc', type: 'paragraph', props: { content: 'Batik tulis canting malam halus di atas sutra ATBM dengan motif agung Parang Kusumo.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'p2-price', type: 'badge', props: { text: 'Rp 1.250.000', variant: 'solid', background: '#c2410c', color: '#ffffff' } },
    // Item 3
    { id: 'p3-title', type: 'heading', props: { content: 'Selendang Sutra Pewarna Tingi & Secang', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'p3-desc', type: 'paragraph', props: { content: 'Scarf lembut bernuansa terakota hangat dari rebusan kulit kayu tingi dan kayu secang.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'p3-price', type: 'badge', props: { text: 'Rp 380.000', variant: 'solid', background: '#c2410c', color: '#ffffff' } },
    // Item 4
    { id: 'p4-title', type: 'heading', props: { content: 'Tas Anyaman Rotan & Kulit Nabati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'p4-desc', type: 'paragraph', props: { content: 'Kombinasi rotan lulubang halus dengan aksen vegetable tanned leather buatan perajin Yogyakarta.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'p4-price', type: 'badge', props: { text: 'Rp 490.000', variant: 'solid', background: '#c2410c', color: '#ffffff' } },
    // CTA
    { id: 'prd-cta-btn', type: 'button', props: { label: 'Lihat Katalog Lengkap & Pre-Order ➔', href: '#catalog', variant: 'primary', size: 'medium', radius: 'none', background: '#c2410c', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'prd-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'prd-title');
  const descComps = layoutComponents.filter(c => c.id === 'prd-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'prd-cta-btn');

  const products = [
    {
      img: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'p1-title'),
      desc: layoutComponents.filter(c => c.id === 'p1-desc'),
      price: layoutComponents.filter(c => c.id === 'p1-price'),
      tag: 'Handwoven'
    },
    {
      img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'p2-title'),
      desc: layoutComponents.filter(c => c.id === 'p2-desc'),
      price: layoutComponents.filter(c => c.id === 'p2-price'),
      tag: 'Masterpiece'
    },
    {
      img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'p3-title'),
      desc: layoutComponents.filter(c => c.id === 'p3-desc'),
      price: layoutComponents.filter(c => c.id === 'p3-price'),
      tag: 'Eco Dye'
    },
    {
      img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'p4-title'),
      desc: layoutComponents.filter(c => c.id === 'p4-desc'),
      price: layoutComponents.filter(c => c.id === 'p4-price'),
      tag: 'Craftsman'
    }
  ];

  return (
    <section id="products" className="relative py-24 sm:py-32 bg-[#120a06] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* Product Grid 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="group bg-[#1c1109] border border-orange-950 hover:border-orange-600/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black/40">
                <img
                  src={p.img}
                  alt="Product preview"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-black/80 text-orange-300 text-[11px] font-mono uppercase tracking-wider">
                  {p.tag}
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  {renderLayoutComponents(p.title, sectionId)}
                </div>
                {renderLayoutComponents(p.desc, sectionId)}
                <div className="pt-2 border-t border-orange-950/80 flex items-center justify-between">
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
