import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmMenuCulinary
 * Signature menu grid with warm artisanal styling, price badges, and food/beverage cards.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmMenuCulinary({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'menu-badge', type: 'badge', props: { text: 'PILIHAN MENU TERFAVORIT', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' } },
    { id: 'menu-title', type: 'heading', props: { content: 'Kreasi Rasa Autentik dari Barista & Chef Kami', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fef3c7', textAlign: 'center' } },
    { id: 'menu-desc', type: 'paragraph', props: { content: 'Setiap cangkir kopi dan hidangan disiapkan segar dengan bahan baku alami berkualitas tinggi tanpa pengawet.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' } },
    // Item 1
    { id: 'm1-title', type: 'heading', props: { content: 'Karsa Aren Cremoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'm1-desc', type: 'paragraph', props: { content: 'Espresso blend khas dengan gula aren organik murni dan fresh milk creamy.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'm1-price', type: 'badge', props: { text: 'Rp 28.000', variant: 'solid', background: '#d97706', color: '#ffffff' } },
    // Item 2
    { id: 'm2-title', type: 'heading', props: { content: 'Manual Brew V60 Specialty', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'm2-desc', type: 'paragraph', props: { content: 'Pilihan single-origin Gayo Wine, Flores Bajawa, atau Toraja Sapan dengan tasting notes floral & fruity.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'm2-price', type: 'badge', props: { text: 'Rp 35.000', variant: 'solid', background: '#d97706', color: '#ffffff' } },
    // Item 3
    { id: 'm3-title', type: 'heading', props: { content: 'Croissant Butter Almond', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'm3-desc', type: 'paragraph', props: { content: 'Pastry renyah berlapis dengan isian krim almond manis dan taburan almond panggang renyah.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'm3-price', type: 'badge', props: { text: 'Rp 32.000', variant: 'solid', background: '#d97706', color: '#ffffff' } },
    // Item 4
    { id: 'm4-title', type: 'heading', props: { content: 'Nasi Goreng Kecombrang Iga', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'm4-desc', type: 'paragraph', props: { content: 'Nasi goreng harum rempah bunga kecombrang dengan suwiran iga sapi empuk dan emping gurih.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'm4-price', type: 'badge', props: { text: 'Rp 55.000', variant: 'solid', background: '#d97706', color: '#ffffff' } },
    // Item 5
    { id: 'm5-title', type: 'heading', props: { content: 'Matcha Oat Latte Kyoto', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'm5-desc', type: 'paragraph', props: { content: 'Ceremonial grade matcha Jepang berpadu lembut dengan susu gandum (oat milk) bebas laktosa.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'm5-price', type: 'badge', props: { text: 'Rp 36.000', variant: 'solid', background: '#d97706', color: '#ffffff' } },
    // Item 6
    { id: 'm6-title', type: 'heading', props: { content: 'Spaghetti Tuna Sambal Matah', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'm6-desc', type: 'paragraph', props: { content: 'Pasta al dente ditumis dengan potongan tuna segar, bawang merah, serai, dan irisan cabai rawit khas Bali.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'm6-price', type: 'badge', props: { text: 'Rp 48.000', variant: 'solid', background: '#d97706', color: '#ffffff' } },
    // CTA
    { id: 'menu-cta-btn', type: 'button', props: { label: 'Unduh E-Menu Lengkap (PDF) 📄', href: '#order', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'menu-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'menu-title');
  const descComps = layoutComponents.filter(c => c.id === 'menu-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'menu-cta-btn');

  const menuItems = [
    {
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'm1-title'),
      desc: layoutComponents.filter(c => c.id === 'm1-desc'),
      price: layoutComponents.filter(c => c.id === 'm1-price'),
      tag: 'Best Seller'
    },
    {
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'm2-title'),
      desc: layoutComponents.filter(c => c.id === 'm2-desc'),
      price: layoutComponents.filter(c => c.id === 'm2-price'),
      tag: 'Specialty'
    },
    {
      img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'm3-title'),
      desc: layoutComponents.filter(c => c.id === 'm3-desc'),
      price: layoutComponents.filter(c => c.id === 'm3-price'),
      tag: 'Fresh Baked'
    },
    {
      img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'm4-title'),
      desc: layoutComponents.filter(c => c.id === 'm4-desc'),
      price: layoutComponents.filter(c => c.id === 'm4-price'),
      tag: 'Chef Choice'
    },
    {
      img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'm5-title'),
      desc: layoutComponents.filter(c => c.id === 'm5-desc'),
      price: layoutComponents.filter(c => c.id === 'm5-price'),
      tag: 'Plant-Based'
    },
    {
      img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
      title: layoutComponents.filter(c => c.id === 'm6-title'),
      desc: layoutComponents.filter(c => c.id === 'm6-desc'),
      price: layoutComponents.filter(c => c.id === 'm6-price'),
      tag: 'Signature Food'
    }
  ];

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-[#120a06] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* Menu Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl overflow-hidden bg-[#1d120a] border border-amber-900/40 hover:border-amber-600/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden bg-black/40">
                <img
                  src={item.img}
                  alt="Menu dish preview"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d120a] via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 px-3 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  {renderLayoutComponents(item.title, sectionId)}
                  <div className="shrink-0">{renderLayoutComponents(item.price, sectionId)}</div>
                </div>
                {renderLayoutComponents(item.desc, sectionId)}
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
