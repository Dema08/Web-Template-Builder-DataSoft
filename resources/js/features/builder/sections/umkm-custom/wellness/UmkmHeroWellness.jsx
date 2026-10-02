import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmHeroWellness
 * Botanical nature split hero for organic skincare & herbal wellness.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmHeroWellness({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'wel-badge', type: 'badge', props: { text: 'INDONESIAN BOTANICAL WELLNESS', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' } },
    { id: 'wel-title', type: 'heading', props: { content: 'Kemurnian Khasiat Tanaman Herbal untuk Kulit Sehat Alami', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ecfdf5', letterSpacing: '-0.02em' } },
    { id: 'wel-desc', type: 'paragraph', props: { content: 'Diformulasikan dari ekstrak kunyit, temulawak, bunga kenanga, dan minyak kelapa murni (VCO) yang dipanen secara lestari dari kebun organik lereng Gunung Merapi.', fontSize: '17px', color: '#a7f3d0' } },
    { id: 'wel-btn-pri', type: 'button', props: { label: 'Beli Produk Organik 🌿', href: '#products', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
    { id: 'wel-btn-sec', type: 'button', props: { label: 'Konsultasi Masalah Kulit', href: '#consultation', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.05)', color: '#ecfdf5', borderColor: '#34d399' } },
    { id: 'wel-hero-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1608248597359-25f0a6d1b71d?auto=format&fit=crop&w=800&q=80', alt: 'Organic skincare botannical serum bottles', width: '100%', height: '460px', objectFit: 'cover', borderRadius: '0' } },
    // Badges / stats
    { id: 'wel-stat1-num', type: 'heading', props: { content: '100%', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#34d399' } },
    { id: 'wel-stat1-lbl', type: 'paragraph', props: { content: 'Bahan Baku Alami Nabati', fontSize: '12px', color: '#cbd5e1' } },
    // Hero Product Badge Card Elements
    { id: 'wel-prod-tag', type: 'badge', props: { text: 'Hero Product', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#34d399', fontSize: '11px' } },
    { id: 'wel-prod-title', type: 'heading', props: { content: 'Merapi Radiance Bakuchiol Face Oil (30ml)', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#ffffff', margin: '0' } },
    { id: 'wel-prod-price', type: 'badge', props: { text: 'Rp 139k', variant: 'solid', background: '#10b981', color: '#052e16', fontWeight: '800' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'wel-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'wel-title');
  const descComps = layoutComponents.filter(c => c.id === 'wel-desc');
  const btnPriComps = layoutComponents.filter(c => c.id === 'wel-btn-pri');
  const btnSecComps = layoutComponents.filter(c => c.id === 'wel-btn-sec');
  const stat1Num = layoutComponents.filter(c => c.id === 'wel-stat1-num');
  const stat1Lbl = layoutComponents.filter(c => c.id === 'wel-stat1-lbl');
  const stat2Num = layoutComponents.filter(c => c.id === 'wel-stat2-num');
  const stat2Lbl = layoutComponents.filter(c => c.id === 'wel-stat2-lbl');
  const heroImgComps = layoutComponents.filter(c => c.id === 'wel-hero-img' || c.type === 'image');
  const prodTag = layoutComponents.filter(c => c.id === 'wel-prod-tag');
  const prodTitle = layoutComponents.filter(c => c.id === 'wel-prod-title');
  const prodPrice = layoutComponents.filter(c => c.id === 'wel-prod-price');

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#05160f] overflow-hidden py-20 lg:py-28">
      {/* Botanical Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
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

            {/* Guarantees */}
            <div className="pt-8 border-t border-emerald-950 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-[#092419] border border-emerald-900/40">
                {renderLayoutComponents(stat1Num, sectionId)}
                {renderLayoutComponents(stat1Lbl, sectionId)}
              </div>
              <div className="p-4 rounded-2xl bg-[#092419] border border-emerald-900/40">
                {renderLayoutComponents(stat2Num, sectionId)}
                {renderLayoutComponents(stat2Lbl, sectionId)}
              </div>
              <div className="p-4 rounded-2xl bg-[#092419] border border-emerald-900/40 hidden sm:block">
                <div className="text-[26px] font-extrabold text-emerald-400">Cruelty-Free</div>
                <div className="text-xs text-slate-300">Tidak Diuji pada Hewan</div>
              </div>
            </div>
          </div>

          {/* Right Product Spotlight Image — editable via Right Inspector */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-600/40 shadow-2xl shadow-emerald-950 group">
              {renderLayoutComponents(heroImgComps, sectionId)}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#05160f] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10 p-4 rounded-2xl bg-[#082017]/90 backdrop-blur-md border border-emerald-500/40 flex items-center justify-between pointer-events-none">
                <div className="space-y-1 pointer-events-auto">
                  {renderLayoutComponents(prodTag, sectionId)}
                  {renderLayoutComponents(prodTitle, sectionId)}
                </div>
                <div className="shrink-0 pointer-events-auto">
                  {renderLayoutComponents(prodPrice, sectionId)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
