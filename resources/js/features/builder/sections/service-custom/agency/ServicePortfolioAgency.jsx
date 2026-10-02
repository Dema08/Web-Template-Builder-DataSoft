import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServicePortfolioAgency
 * Creative visual showcase grid for Agency — interactive project cards with tags, client names, and metrics.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServicePortfolioAgency({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'port-badge', type: 'badge', props: { text: 'PORTFOLIO KAMI', variant: 'outline', background: 'rgba(236,72,153,0.15)', color: '#f472b6', borderColor: '#ec4899' } },
    { id: 'port-title', type: 'heading', props: { content: 'Karya Terbaik yang Menghasilkan Dampak Nyata', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'port-desc', type: 'paragraph', props: { content: 'Kami merancang identitas visual, kampanye digital, dan produk teknologi terobosan untuk brand terkemuka.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Portfolio item 1
    { id: 'port-item-img1', type: 'image', props: { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', alt: 'FinVortex Global Rebranding', width: '100%', height: '280px', objectFit: 'cover' } },
    { id: 'port-item-title1', type: 'heading', props: { content: 'FinVortex Global Rebranding', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'port-item-desc1', type: 'paragraph', props: { content: 'Transformasi brand fintech skala regional dengan peningkatan konversi 340%.', fontSize: '14px', color: '#cbd5e1' } },
    { id: 'port-item-tag1', type: 'badge', props: { text: 'Branding & UI/UX', variant: 'solid', background: '#7c3aed', color: '#ffffff' } },
    // Portfolio item 2
    { id: 'port-item-img2', type: 'image', props: { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', alt: 'Aura Lifestyle Mobile App', width: '100%', height: '280px', objectFit: 'cover' } },
    { id: 'port-item-title2', type: 'heading', props: { content: 'Aura Lifestyle Mobile App', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'port-item-desc2', type: 'paragraph', props: { content: 'Aplikasi e-commerce gaya hidup dengan 1M+ active users dalam 6 bulan.', fontSize: '14px', color: '#cbd5e1' } },
    { id: 'port-item-tag2', type: 'badge', props: { text: 'App Development', variant: 'solid', background: '#ec4899', color: '#ffffff' } },
    // Portfolio item 3
    { id: 'port-item-img3', type: 'image', props: { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', alt: 'CyberShield 3D Experience', width: '100%', height: '280px', objectFit: 'cover' } },
    { id: 'port-item-title3', type: 'heading', props: { content: 'CyberShield 3D Experience', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'port-item-desc3', type: 'paragraph', props: { content: 'Website interaktif WebGL 3D pemenang penghargaan Awwwards Site of the Day.', fontSize: '14px', color: '#cbd5e1' } },
    { id: 'port-item-tag3', type: 'badge', props: { text: '3D Web Experience', variant: 'solid', background: '#06b6d4', color: '#042f2e' } },
    // Portfolio item 4
    { id: 'port-item-img4', type: 'image', props: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', alt: 'Zenith Viral Social Campaign', width: '100%', height: '280px', objectFit: 'cover' } },
    { id: 'port-item-title4', type: 'heading', props: { content: 'Zenith Viral Social Campaign', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'port-item-desc4', type: 'paragraph', props: { content: 'Kampanye digital lintas platform menjangkau 25 juta audiens muda di SEA.', fontSize: '14px', color: '#cbd5e1' } },
    { id: 'port-item-tag4', type: 'badge', props: { text: 'Digital Marketing', variant: 'solid', background: '#f59e0b', color: '#451a03' } },
    // CTA
    { id: 'port-cta-btn', type: 'button', props: { label: 'Lihat Semua Proyek ↗', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'port-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'port-title');
  const descComps = layoutComponents.filter(c => c.id === 'port-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'port-cta-btn');

  const portfolioItems = [
    {
      img: layoutComponents.filter(c => c.id === 'port-item-img1'),
      fallbackImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badge: layoutComponents.filter(c => c.id === 'port-item-tag1'),
      title: layoutComponents.filter(c => c.id === 'port-item-title1'),
      desc: layoutComponents.filter(c => c.id === 'port-item-desc1'),
      gradient: 'from-violet-600/30 to-purple-900/40',
      border: 'border-violet-500/30',
      metric: '+340% Conversion'
    },
    {
      img: layoutComponents.filter(c => c.id === 'port-item-img2'),
      fallbackImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      badge: layoutComponents.filter(c => c.id === 'port-item-tag2'),
      title: layoutComponents.filter(c => c.id === 'port-item-title2'),
      desc: layoutComponents.filter(c => c.id === 'port-item-desc2'),
      gradient: 'from-pink-600/30 to-rose-900/40',
      border: 'border-pink-500/30',
      metric: '1M+ Downloads'
    },
    {
      img: layoutComponents.filter(c => c.id === 'port-item-img3'),
      fallbackImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      badge: layoutComponents.filter(c => c.id === 'port-item-tag3'),
      title: layoutComponents.filter(c => c.id === 'port-item-title3'),
      desc: layoutComponents.filter(c => c.id === 'port-item-desc3'),
      gradient: 'from-cyan-600/30 to-blue-900/40',
      border: 'border-cyan-500/30',
      metric: 'Awwwards SOTD'
    },
    {
      img: layoutComponents.filter(c => c.id === 'port-item-img4'),
      fallbackImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      badge: layoutComponents.filter(c => c.id === 'port-item-tag4'),
      title: layoutComponents.filter(c => c.id === 'port-item-title4'),
      desc: layoutComponents.filter(c => c.id === 'port-item-desc4'),
      gradient: 'from-amber-600/30 to-orange-900/40',
      border: 'border-amber-500/30',
      metric: '25M+ Impressions'
    }
  ];

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#0d071b] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* Portfolio Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${item.gradient} border ${item.border} backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20`}
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                {item.img && item.img.length > 0 ? (
                  renderLayoutComponents(item.img, sectionId)
                ) : (
                  <img
                    src={item.fallbackImg}
                    alt="Portfolio preview"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d071b] via-[#0d071b]/40 to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white pointer-events-none">
                  {item.metric}
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <div className="inline-flex">{renderLayoutComponents(item.badge, sectionId)}</div>
                {renderLayoutComponents(item.title, sectionId)}
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
