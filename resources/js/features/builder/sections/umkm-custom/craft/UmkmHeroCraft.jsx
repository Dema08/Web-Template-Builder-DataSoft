import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmHeroCraft
 * Elegance heritage split hero for handcrafted Indonesian fashion & textiles.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmHeroCraft({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'crf-badge', type: 'badge', props: { text: 'WARISAN BUDAYA & KRIYA MODERN', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' } },
    { id: 'crf-title', type: 'heading', props: { content: 'Merajut Nilai Luhur Nusantara dalam Siluet Kontemporer', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffedd5', letterSpacing: '-0.01em' } },
    { id: 'crf-desc', type: 'paragraph', props: { content: 'Setiap lembar kain tenun ikat dan batik tulis kami dikerjakan secara manual oleh perempuan perajin di pelosok desa, melestarikan motif sakral dengan sentuhan busana modern siap pakai.', fontSize: '17px', color: '#fed7aa' } },
    { id: 'crf-btn-pri', type: 'button', props: { label: 'Lihat Koleksi Terbaru ✦', href: '#products', variant: 'primary', size: 'large', radius: 'none', background: '#c2410c', color: '#ffffff', fontWeight: '700' } },
    { id: 'crf-btn-sec', type: 'button', props: { label: 'Filosofi Motif Tradisi', href: '#heritage', variant: 'outline', size: 'large', radius: 'none', background: 'transparent', color: '#ffedd5', borderColor: '#fb923c' } },
    { id: 'crf-hero-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80', alt: 'Indonesian handcrafted textile batik model', width: '100%', height: '480px', objectFit: 'cover', borderRadius: '0' } },
    // Metric badges
    { id: 'crf-stat1-num', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fb923c' } },
    { id: 'crf-stat1-lbl', type: 'paragraph', props: { content: 'Ibu Pengrajin Desa Binaan', fontSize: '12px', color: '#cbd5e1' } },
    { id: 'crf-stat2-num', type: 'heading', props: { content: '100%', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fb923c' } },
    { id: 'crf-stat2-lbl', type: 'paragraph', props: { content: 'Pewarna Alami Ekologis', fontSize: '12px', color: '#cbd5e1' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'crf-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'crf-title');
  const descComps = layoutComponents.filter(c => c.id === 'crf-desc');
  const btnPriComps = layoutComponents.filter(c => c.id === 'crf-btn-pri');
  const btnSecComps = layoutComponents.filter(c => c.id === 'crf-btn-sec');
  const stat1Num = layoutComponents.filter(c => c.id === 'crf-stat1-num');
  const stat1Lbl = layoutComponents.filter(c => c.id === 'crf-stat1-lbl');
  const stat2Num = layoutComponents.filter(c => c.id === 'crf-stat2-num');
  const stat2Lbl = layoutComponents.filter(c => c.id === 'crf-stat2-lbl');
  const heroImgComps = layoutComponents.filter(c => c.id === 'crf-hero-img' || c.type === 'image');

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#150d09] overflow-hidden py-20 lg:py-28">
      {/* Terracotta Ambience */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-700/15 rounded-full blur-[140px] pointer-events-none" />

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

            {/* Metrics */}
            <div className="pt-8 border-t border-orange-950/80 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="p-4 bg-[#1f130c] border border-orange-900/30">
                {renderLayoutComponents(stat1Num, sectionId)}
                {renderLayoutComponents(stat1Lbl, sectionId)}
              </div>
              <div className="p-4 bg-[#1f130c] border border-orange-900/30">
                {renderLayoutComponents(stat2Num, sectionId)}
                {renderLayoutComponents(stat2Lbl, sectionId)}
              </div>
              <div className="p-4 bg-[#1f130c] border border-orange-900/30 hidden sm:block">
                <div className="text-[28px] font-extrabold text-orange-400">Limited</div>
                <div className="text-xs text-slate-300">Setiap Karya Bernomor Seri</div>
              </div>
            </div>
          </div>

          {/* Right Showcase Photo — editable via Right Inspector (image component) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-orange-700/40 shadow-2xl group">
              {renderLayoutComponents(heroImgComps, sectionId)}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#150d09] via-transparent to-transparent" />
              
              <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-10">
                <div className="pointer-events-auto p-4 bg-[#1c1109]/90 backdrop-blur-md border border-orange-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-orange-400 font-bold">Koleksi Swarna Dwipa</div>
                    <div className="text-sm font-serif font-bold text-white">Tenun Ikat Pewarna Indigofera & Kulit Kayu Tingi</div>
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
