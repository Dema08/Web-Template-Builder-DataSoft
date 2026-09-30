import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmBenefitsWellness
 * Formula benefits & clean ingredients breakdown section for Organic Skincare UMKM.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmBenefitsWellness({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ben-badge', type: 'badge', props: { text: 'STANDAR KEBERSIHAN FORMULA', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' } },
    { id: 'ben-title', type: 'heading', props: { content: 'Komitmen Kami untuk Kecantikan yang Aman & Berkelanjutan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ecfdf5' } },
    { id: 'ben-desc', type: 'paragraph', props: { content: 'Kami percaya bahwa perawatan terbaik berasal dari alam yang diolah dengan integritas sains dermatologi modern tanpa merusak bumi.', fontSize: '16px', color: '#a7f3d0' } },
    // Feat 1
    { id: 'b1-title', type: 'heading', props: { content: '100% Cold-Pressed & Fresh Extracts', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'b1-desc', type: 'paragraph', props: { content: 'Minyak alami diekstraksi tanpa pemanasan berlebih untuk menjaga nutrisi dan antioksidan tetap utuh.', fontSize: '13px', color: '#a7f3d0' } },
    // Feat 2
    { id: 'b2-title', type: 'heading', props: { content: 'Bebas 20+ Bahan Kimia Berbahaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'b2-desc', type: 'paragraph', props: { content: 'Formula bebas paraben, sulfat (SLS/SLES), pewangi sintetis, alkohol kering, dan pewarna buatan.', fontSize: '13px', color: '#a7f3d0' } },
    // Feat 3
    { id: 'b3-title', type: 'heading', props: { content: 'Kemasan Kaca Daur Ulang & Eco-Refill', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'b3-desc', type: 'paragraph', props: { content: 'Botol kaca amber pelindung UV yang dapat diisi ulang (refillable) untuk mengurangi limbah plastik.', fontSize: '13px', color: '#a7f3d0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'ben-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'ben-title');
  const descComps = layoutComponents.filter(c => c.id === 'ben-desc');

  const benefits = [
    {
      icon: '🌿',
      title: layoutComponents.filter(c => c.id === 'b1-title'),
      desc: layoutComponents.filter(c => c.id === 'b1-desc')
    },
    {
      icon: '🛡️',
      title: layoutComponents.filter(c => c.id === 'b2-title'),
      desc: layoutComponents.filter(c => c.id === 'b2-desc')
    },
    {
      icon: '♻️',
      title: layoutComponents.filter(c => c.id === 'b3-title'),
      desc: layoutComponents.filter(c => c.id === 'b3-desc')
    }
  ];

  return (
    <section id="benefits" className="relative py-24 sm:py-32 bg-[#061810] overflow-hidden">
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
              {benefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#0a271b] border border-emerald-950 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-xl shrink-0">
                    {b.icon}
                  </div>
                  <div className="space-y-1">
                    {renderLayoutComponents(b.title, sectionId)}
                    {renderLayoutComponents(b.desc, sectionId)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Botanical Lab & Herb Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-700/40 shadow-2xl shadow-emerald-950">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
                alt="Botanical herbal laboratory formulation"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061810] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#092218]/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">100% Kebun Lokal</div>
                  <div className="text-sm font-bold text-white">Bermitra dengan Kelompok Tani Herbal Lereng Merapi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
