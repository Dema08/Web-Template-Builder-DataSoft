import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduCampusUniversity
 * Modern smart campus life and facilities showcase for University variation.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduCampusUniversity({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cmp-badge', type: 'badge', props: { text: 'FASILITAS KAMPUS CERDAS', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' } },
    { id: 'cmp-title', type: 'heading', props: { content: 'Ekosistem Belajar Modern Berkelanjutan Seluas 60 Hektar', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'cmp-desc', type: 'paragraph', props: { content: 'Lingkungan kampus hijau berteknologi tinggi yang dirancang untuk mendukung kreativitas, kolaborasi, dan kesejahteraan mahasiswa.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Facility 1
    { id: 'f1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', alt: 'Digital Smart Library 24/7', width: '100%', height: '240px', objectFit: 'cover' } },
    { id: 'f1-title', type: 'heading', props: { content: 'Digital Smart Library 24/7', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'f1-desc', type: 'paragraph', props: { content: 'Akses ke 500.000+ e-journal internasional, pod studi hening, dan ruang kolaborasi multimedia.', fontSize: '13px', color: '#cbd5e1' } },
    // Facility 2
    { id: 'f2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', alt: 'Innovation & Startup Incubator', width: '100%', height: '240px', objectFit: 'cover' } },
    { id: 'f2-title', type: 'heading', props: { content: 'Innovation & Startup Incubator', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'f2-desc', type: 'paragraph', props: { content: 'Co-working space, makerspace 3D printing, dan pendanaan awal (seed fund) untuk proyek rintisan mahasiswa.', fontSize: '13px', color: '#cbd5e1' } },
    // Facility 3
    { id: 'f3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', alt: 'Green Dormitory & Sports Arena', width: '100%', height: '240px', objectFit: 'cover' } },
    { id: 'f3-title', type: 'heading', props: { content: 'Green Dormitory & Sports Arena', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'f3-desc', type: 'paragraph', props: { content: 'Asrama mahasiswa mandiri energi bertenaga surya, kolam renang olympic, dan lapangan indoor berstandar KONI.', fontSize: '13px', color: '#cbd5e1' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'cmp-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'cmp-title');
  const descComps = layoutComponents.filter(c => c.id === 'cmp-desc');

  const facilities = [
    {
      img: layoutComponents.filter(c => c.id === 'f1-img'),
      fallbackImg: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
      title: layoutComponents.filter(c => c.id === 'f1-title'),
      desc: layoutComponents.filter(c => c.id === 'f1-desc'),
      tag: 'Academic'
    },
    {
      img: layoutComponents.filter(c => c.id === 'f2-img'),
      fallbackImg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      title: layoutComponents.filter(c => c.id === 'f2-title'),
      desc: layoutComponents.filter(c => c.id === 'f2-desc'),
      tag: 'Innovation'
    },
    {
      img: layoutComponents.filter(c => c.id === 'f3-img'),
      fallbackImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      title: layoutComponents.filter(c => c.id === 'f3-title'),
      desc: layoutComponents.filter(c => c.id === 'f3-desc'),
      tag: 'Sports & Life'
    }
  ];

  return (
    <section id="campus" className="relative py-24 sm:py-32 bg-[#091122] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 3 Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-[#0e1a34] border border-blue-900/40 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-black/40">
                {fac.img && fac.img.length > 0 ? (
                  renderLayoutComponents(fac.img, sectionId)
                ) : (
                  <img
                    src={fac.fallbackImg}
                    alt="Campus facility preview"
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-amber-300 text-xs font-semibold pointer-events-none">
                  {fac.tag}
                </div>
              </div>
              <div className="p-6 space-y-2">
                {renderLayoutComponents(fac.title, sectionId)}
                {renderLayoutComponents(fac.desc, sectionId)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
