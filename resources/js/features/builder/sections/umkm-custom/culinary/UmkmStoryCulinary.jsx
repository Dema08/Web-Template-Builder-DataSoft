import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmStoryCulinary
 * Storytelling section showcasing direct trade with Indonesian coffee farmers & artisan craftsmanship.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmStoryCulinary({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'sty-badge', type: 'badge', props: { text: 'CERITA DARI HULU KE HILIR', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' } },
    { id: 'sty-title', type: 'heading', props: { content: 'Bermula dari Cinta pada Petani Kopi Nusantara', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fef3c7' } },
    { id: 'sty-desc', type: 'paragraph', props: { content: 'Didirikan pada tahun 2019 di sudut kota Yogyakarta, Kopi Karsa bertekad menjembatani kerja keras kelompok tani lokal di pelosok Sumatra, Jawa, Bali, hingga Flores langsung ke meja Anda dengan skema Direct-Trade berkeadilan.', fontSize: '16px', color: '#fed7aa' } },
    // Value 1
    { id: 'v1-title', type: 'heading', props: { content: 'Fair Trade & Kemitraan Petani', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'v1-desc', type: 'paragraph', props: { content: 'Kami membeli biji kopi di atas harga pasar untuk mendukung kesejahteraan keluarga petani kopi binaan.', fontSize: '13px', color: '#fed7aa' } },
    // Value 2
    { id: 'v2-title', type: 'heading', props: { content: 'Small Batch Artisan Roasting', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'v2-desc', type: 'paragraph', props: { content: 'Disangrai dalam jumlah kecil maksimal 5kg per batch menggunakan mesin buatan anak bangsa untuk profil rasa optimal.', fontSize: '13px', color: '#fed7aa' } },
    // Value 3
    { id: 'v3-title', type: 'heading', props: { content: 'Bahan Baku Alami Tanpa Kimiawi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'v3-desc', type: 'paragraph', props: { content: 'Semua sirup, saus karamel, dan adonan bakery dibuat secara manual (from scratch) setiap pagi.', fontSize: '13px', color: '#fed7aa' } },
    // CTA Button
    { id: 'sty-cta-btn', type: 'button', props: { label: 'Kunjungi Kedai Roastery Kami ➔', href: '#location', variant: 'outline', size: 'medium', radius: 'full', background: 'rgba(217,119,6,0.1)', color: '#f59e0b', borderColor: '#d97706' } },
    // 4 Collage Images
    { id: 'sty-img-1', type: 'image', props: { src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80', alt: 'Coffee beans sorting', width: '100%', height: '256px', objectFit: 'cover', borderRadius: '24px' } },
    { id: 'sty-img-2', type: 'image', props: { src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80', alt: 'Pour over brew', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '24px' } },
    { id: 'sty-img-3', type: 'image', props: { src: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80', alt: 'Coffee roasting drum', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '24px' } },
    { id: 'sty-img-4', type: 'image', props: { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80', alt: 'Cafe barista smiling', width: '100%', height: '256px', objectFit: 'cover', borderRadius: '24px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'sty-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'sty-title');
  const descComps = layoutComponents.filter(c => c.id === 'sty-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'sty-cta-btn');
  const img1 = layoutComponents.filter(c => c.id === 'sty-img-1');
  const img2 = layoutComponents.filter(c => c.id === 'sty-img-2');
  const img3 = layoutComponents.filter(c => c.id === 'sty-img-3');
  const img4 = layoutComponents.filter(c => c.id === 'sty-img-4');

  const values = [
    {
      icon: '🌱',
      title: layoutComponents.filter(c => c.id === 'v1-title'),
      desc: layoutComponents.filter(c => c.id === 'v1-desc')
    },
    {
      icon: '🔥',
      title: layoutComponents.filter(c => c.id === 'v2-title'),
      desc: layoutComponents.filter(c => c.id === 'v2-desc')
    },
    {
      icon: '🥐',
      title: layoutComponents.filter(c => c.id === 'v3-title'),
      desc: layoutComponents.filter(c => c.id === 'v3-desc')
    }
  ];

  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#180e08] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden border border-amber-900/40 shadow-xl">
                {renderLayoutComponents(img1, sectionId)}
              </div>
              <div className="rounded-3xl overflow-hidden border border-amber-900/40 shadow-xl">
                {renderLayoutComponents(img2, sectionId)}
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-3xl overflow-hidden border border-amber-900/40 shadow-xl">
                {renderLayoutComponents(img3, sectionId)}
              </div>
              <div className="rounded-3xl overflow-hidden border border-amber-900/40 shadow-xl">
                {renderLayoutComponents(img4, sectionId)}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>

            <div className="space-y-5 pt-4">
              {values.map((v, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#23150d] border border-amber-900/30">
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-xl shrink-0">
                    {v.icon}
                  </div>
                  <div className="space-y-1">
                    {renderLayoutComponents(v.title, sectionId)}
                    {renderLayoutComponents(v.desc, sectionId)}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
