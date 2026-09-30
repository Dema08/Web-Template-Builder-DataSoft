import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmReviewsWellness
 * Customer feedback & skincare journey transformations for Botanical Wellness UMKM.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmReviewsWellness({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'rev-wl-badge', type: 'badge', props: { text: 'PENGALAMAN & HASIL NYATA', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' } },
    { id: 'rev-wl-title', type: 'heading', props: { content: 'Cerita Kulit Sehat Alami dari Sahabat Sekar Arum', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ecfdf5', textAlign: 'center' } },
    { id: 'rev-wl-desc', type: 'paragraph', props: { content: 'Lebih dari 10.000 pelanggan telah beralih ke perawatan kulit organik yang ramah kulit dan lingkungan.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' } },
    // Rev 1
    { id: 'rv1-quote', type: 'paragraph', props: { content: '"Bakuchiol Face Oil-nya penyelamat kulit sensitifku saat hamil! Tidak bikin breakout sama sekali, teksturnya cepat meresap dan bekas jerawat cepat memudar."', fontSize: '14px', color: '#a7f3d0' } },
    { id: 'rv1-name', type: 'heading', props: { content: 'Nadya Larasati', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
    { id: 'rv1-tag', type: 'paragraph', props: { content: 'Pemilik Kulit Sensitif (Jakarta)', fontSize: '12px', color: '#34d399' } },
    // Rev 2
    { id: 'rv2-quote', type: 'paragraph', props: { content: '"Sabun Castille Calendula-nya sangat lembut, anak saya yang ada eksim kulitnya jadi tenang dan tidak gatal lagi. Aroma alaminya sangat menenangkan."', fontSize: '14px', color: '#a7f3d0' } },
    { id: 'rv2-name', type: 'heading', props: { content: 'dr. Anissa Rahma', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
    { id: 'rv2-tag', type: 'paragraph', props: { content: 'Dokter Umum & Ibu Rumah Tangga', fontSize: '12px', color: '#34d399' } },
    // Rev 3
    { id: 'rv3-quote', type: 'paragraph', props: { content: '"Minyak roll-on Kenanga selalu ada di tas kerja. Saat pusing atau lelah meeting, tinggal oles di pelipis langsung rileks seketika. Sangat rekomen!"', fontSize: '14px', color: '#a7f3d0' } },
    { id: 'rv3-name', type: 'heading', props: { content: 'Citra Permatasari', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
    { id: 'rv3-tag', type: 'paragraph', props: { content: 'Corporate Professional (Bandung)', fontSize: '12px', color: '#34d399' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'rev-wl-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'rev-wl-title');
  const descComps = layoutComponents.filter(c => c.id === 'rev-wl-desc');

  const reviews = [
    {
      stars: '★★★★★',
      quote: layoutComponents.filter(c => c.id === 'rv1-quote'),
      name: layoutComponents.filter(c => c.id === 'rv1-name'),
      tag: layoutComponents.filter(c => c.id === 'rv1-tag'),
    },
    {
      stars: '★★★★★',
      quote: layoutComponents.filter(c => c.id === 'rv2-quote'),
      name: layoutComponents.filter(c => c.id === 'rv2-name'),
      tag: layoutComponents.filter(c => c.id === 'rv2-tag'),
    },
    {
      stars: '★★★★★',
      quote: layoutComponents.filter(c => c.id === 'rv3-quote'),
      name: layoutComponents.filter(c => c.id === 'rv3-name'),
      tag: layoutComponents.filter(c => c.id === 'rv3-tag'),
    }
  ];

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#04110b] overflow-hidden">
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
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#092218] border border-emerald-950 shadow-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="text-emerald-400 text-lg tracking-wider">{r.stars}</div>
                {renderLayoutComponents(r.quote, sectionId)}
              </div>
              <div className="pt-6 border-t border-emerald-950 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-sm shrink-0 border border-emerald-400/30">
                  🌿
                </div>
                <div>
                  {renderLayoutComponents(r.name, sectionId)}
                  {renderLayoutComponents(r.tag, sectionId)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
