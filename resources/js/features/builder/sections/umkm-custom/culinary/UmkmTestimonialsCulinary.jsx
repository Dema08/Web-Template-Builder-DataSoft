import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmTestimonialsCulinary
 * Customer reviews and foodie community feedback with warm ambient card design.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmTestimonialsCulinary({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'rev-badge', type: 'badge', props: { text: 'ULASAN KOMUNITAS & FOODIE', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' } },
    { id: 'rev-title', type: 'heading', props: { content: 'Kata Mereka Tentang Secangkir Karsa', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fef3c7', textAlign: 'center' } },
    { id: 'rev-desc', type: 'paragraph', props: { content: 'Pengalaman nyata dari para pecinta kopi, remote worker, dan pelanggan setia kami.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' } },
    // Review 1
    { id: 'r1-quote', type: 'paragraph', props: { content: '"V60 Gayo Wine-nya luar biasa! Profil acidity-nya pas dan aftertaste floral yang lembut. Suasana tempatnya sangat nyaman untuk WFC berjam-jam."', fontSize: '14px', color: '#fed7aa' } },
    { id: 'r1-author', type: 'heading', props: { content: 'Dimas Wicaksono', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
    { id: 'r1-role', type: 'paragraph', props: { content: 'Coffee Enthusiast & UI Designer', fontSize: '12px', color: '#f59e0b' } },
    // Review 2
    { id: 'r2-quote', type: 'paragraph', props: { content: '"Karsa Aren Cremoso dan Croissant Almond-nya perpaduan juara. Selalu mampir ke sini setiap akhir pekan bareng keluarga. Pelayanannya sangat ramah!"', fontSize: '14px', color: '#fed7aa' } },
    { id: 'r2-author', type: 'heading', props: { content: 'Siti Sarah Anindita', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
    { id: 'r2-role', type: 'paragraph', props: { content: 'Pelanggan Setia Karsa', fontSize: '12px', color: '#f59e0b' } },
    // Review 3
    { id: 'r3-quote', type: 'paragraph', props: { content: '"Biji kopi sangrai mereka (beans) selalu saya stok di kantor. Packaging rapi dengan degas valve berkualitas dan roasting date selalu fresh < 7 hari."', fontSize: '14px', color: '#fed7aa' } },
    { id: 'r3-author', type: 'heading', props: { content: 'Reza Pratama', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
    { id: 'r3-role', type: 'paragraph', props: { content: 'Founder Startup & Home Brewer', fontSize: '12px', color: '#f59e0b' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'rev-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'rev-title');
  const descComps = layoutComponents.filter(c => c.id === 'rev-desc');

  const reviews = [
    {
      stars: '★★★★★',
      quote: layoutComponents.filter(c => c.id === 'r1-quote'),
      author: layoutComponents.filter(c => c.id === 'r1-author'),
      role: layoutComponents.filter(c => c.id === 'r1-role'),
    },
    {
      stars: '★★★★★',
      quote: layoutComponents.filter(c => c.id === 'r2-quote'),
      author: layoutComponents.filter(c => c.id === 'r2-author'),
      role: layoutComponents.filter(c => c.id === 'r2-role'),
    },
    {
      stars: '★★★★★',
      quote: layoutComponents.filter(c => c.id === 'r3-quote'),
      author: layoutComponents.filter(c => c.id === 'r3-author'),
      role: layoutComponents.filter(c => c.id === 'r3-role'),
    }
  ];

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#120a06] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#1d120a] border border-amber-900/40 shadow-xl flex flex-col justify-between hover:border-amber-600/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="text-amber-400 text-lg tracking-wider">{rev.stars}</div>
                {renderLayoutComponents(rev.quote, sectionId)}
              </div>
              <div className="pt-6 border-t border-amber-900/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  ☕
                </div>
                <div>
                  {renderLayoutComponents(rev.author, sectionId)}
                  {renderLayoutComponents(rev.role, sectionId)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
