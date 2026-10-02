import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmHeroCulinary
 * Warm ambient split hero for artisanal coffee shop & kitchen.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmHeroCulinary({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cul-badge', type: 'badge', props: { text: 'ROASTERY & ARTISAN KITCHEN', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' } },
    { id: 'cul-title', type: 'heading', props: { content: 'Cita Rasa Kopi Nusantara yang Dipanggang Sepenuh Jiwa', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.02em' } },
    { id: 'cul-desc', type: 'paragraph', props: { content: 'Biji kopi single-origin pilihan langsung dari petani lokal, disangrai dengan presisi tinggi dan disajikan bersama pastry hangat buatan dapur sendiri.', fontSize: '17px', color: '#fed7aa' } },
    { id: 'cul-btn-pri', type: 'button', props: { label: 'Lihat Daftar Menu ☕', href: '#menu', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '800' } },
    { id: 'cul-btn-sec', type: 'button', props: { label: 'Pesan Biji Kopi (Beans)', href: '#order', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.05)', color: '#fef3c7', borderColor: '#d97706' } },
    { id: 'cul-hero-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80', alt: 'Artisan coffee bar interior', width: '100%', height: '450px', objectFit: 'cover', borderRadius: '0' } },
    // Stats / Highlight pills
    { id: 'cul-stat1-num', type: 'heading', props: { content: '100%', level: 'h3', fontSize: '26px', fontWeight: '800', color: '#f59e0b' } },
    { id: 'cul-stat1-lbl', type: 'paragraph', props: { content: 'Single Origin Lokal', fontSize: '12px', color: '#d6d3d1' } },
    { id: 'cul-stat2-num', type: 'heading', props: { content: '4.9 ★', level: 'h3', fontSize: '26px', fontWeight: '800', color: '#f59e0b' } },
    { id: 'cul-stat2-lbl', type: 'paragraph', props: { content: '1,500+ Ulasan Google', fontSize: '12px', color: '#d6d3d1' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'cul-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'cul-title');
  const descComps = layoutComponents.filter(c => c.id === 'cul-desc');
  const btnPriComps = layoutComponents.filter(c => c.id === 'cul-btn-pri');
  const btnSecComps = layoutComponents.filter(c => c.id === 'cul-btn-sec');
  const heroImgComps = layoutComponents.filter(c => c.id === 'cul-hero-img' || c.type === 'image');
  const stat1Num = layoutComponents.filter(c => c.id === 'cul-stat1-num');
  const stat1Lbl = layoutComponents.filter(c => c.id === 'cul-stat1-lbl');
  const stat2Num = layoutComponents.filter(c => c.id === 'cul-stat2-num');
  const stat2Lbl = layoutComponents.filter(c => c.id === 'cul-stat2-lbl');

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#150d08] overflow-hidden py-20 lg:py-28">
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-orange-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {renderLayoutComponents(btnPriComps, sectionId)}
              {renderLayoutComponents(btnSecComps, sectionId)}
            </div>

            {/* Quick Metrics */}
            <div className="pt-8 border-t border-amber-900/40 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-[#20130c]/80 border border-amber-900/30">
                {renderLayoutComponents(stat1Num, sectionId)}
                {renderLayoutComponents(stat1Lbl, sectionId)}
              </div>
              <div className="p-4 rounded-2xl bg-[#20130c]/80 border border-amber-900/30">
                {renderLayoutComponents(stat2Num, sectionId)}
                {renderLayoutComponents(stat2Lbl, sectionId)}
              </div>
              <div className="p-4 rounded-2xl bg-[#20130c]/80 border border-amber-900/30 hidden sm:block">
                <div className="text-[26px] font-extrabold text-amber-500">07:00 - 23:00</div>
                <div className="text-xs text-stone-300">Buka Setiap Hari</div>
              </div>
            </div>
          </div>

          {/* Right Image Showcase — editable via Right Inspector (image component) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-700/40 shadow-2xl shadow-amber-950/80 group">
              {renderLayoutComponents(heroImgComps, sectionId)}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#150d08] via-transparent to-transparent" />
              
              {/* Floating Coffee Roast Tag Card */}
              <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-10">
                <div className="pointer-events-auto p-4 rounded-2xl bg-[#1c110a]/90 backdrop-blur-md border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">House Blend Karsa</div>
                    <div className="text-sm font-semibold text-white">Full Arabica • Dark Chocolate & Brown Sugar Notes</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-extrabold shrink-0">
                    Rp 85k / 250g
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
