import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmHeritageCraft
 * Cultural heritage & pattern philosophy section for Indonesian craft/batik studio.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmHeritageCraft({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'hrt-badge', type: 'badge', props: { text: 'FILOSOFI & MAKNA SAKRAL', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' } },
    { id: 'hrt-title', type: 'heading', props: { content: 'Setiap Goresan Canting Mengandung Doa & Kebijaksanaan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffedd5' } },
    { id: 'hrt-desc', type: 'paragraph', props: { content: 'Di balik keindahan visual sehelai kain tradisional, tersimpan narasi peradaban leluhur yang mengajarkan keselarasan antara manusia, alam semesta, dan Sang Pencipta.', fontSize: '16px', color: '#fed7aa' } },
    // Motif 1
    { id: 'm1-name', type: 'heading', props: { content: 'Motif Parang Rusak Barong', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'm1-desc', type: 'paragraph', props: { content: 'Melambangkan ombak samudera yang pantang menyerah, keteguhan hati, dan kepemimpinan yang adil.', fontSize: '13px', color: '#fed7aa' } },
    // Motif 2
    { id: 'm2-name', type: 'heading', props: { content: 'Motif Kawung Suci', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'm2-desc', type: 'paragraph', props: { content: 'Terinspirasi buah kolang-kaling yang melambangkan kemurnian hati, kesederhanaan, dan pengendalian diri.', fontSize: '13px', color: '#fed7aa' } },
    // Motif 3
    { id: 'm3-name', type: 'heading', props: { content: 'Tenun Ikat Kuda Flores', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'm3-desc', type: 'paragraph', props: { content: 'Simbol status kehormatan, kekuatan fisik, serta persaudaraan erat antarsuku di Nusa Tenggara Timur.', fontSize: '13px', color: '#fed7aa' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'hrt-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'hrt-title');
  const descComps = layoutComponents.filter(c => c.id === 'hrt-desc');

  const motifs = [
    {
      num: '01',
      title: layoutComponents.filter(c => c.id === 'm1-name'),
      desc: layoutComponents.filter(c => c.id === 'm1-desc')
    },
    {
      num: '02',
      title: layoutComponents.filter(c => c.id === 'm2-name'),
      desc: layoutComponents.filter(c => c.id === 'm2-desc')
    },
    {
      num: '03',
      title: layoutComponents.filter(c => c.id === 'm3-name'),
      desc: layoutComponents.filter(c => c.id === 'm3-desc')
    }
  ];

  return (
    <section id="heritage" className="relative py-24 sm:py-32 bg-[#170e0a] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>

            <div className="space-y-4 pt-4">
              {motifs.map((m, idx) => (
                <div key={idx} className="p-5 bg-[#22140d] border border-orange-950 flex items-start gap-4">
                  <span className="font-serif text-lg font-bold text-orange-400 shrink-0 mt-0.5">
                    {m.num}.
                  </span>
                  <div className="space-y-1">
                    {renderLayoutComponents(m.title, sectionId)}
                    {renderLayoutComponents(m.desc, sectionId)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cultural Art Photo */}
          <div className="lg:col-span-6">
            <div className="relative border-2 border-orange-900/60 p-3 bg-[#1e120a] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80"
                alt="Artisan drawing batik with canting"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
              <div className="p-4 text-center bg-[#150c07] border-t border-orange-950">
                <div className="text-xs font-serif italic text-orange-300">
                  "Kain bukanlah sekadar sandang, ia adalah pusaka yang membawa jiwa peradaban nusantara."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
