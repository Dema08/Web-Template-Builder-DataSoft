import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmArtisanCraft
 * Social impact & artisan empowerment profiles for Indonesian Craft UMKM.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmArtisanCraft({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'art-badge', type: 'badge', props: { text: 'DAMPAK SOSIAL & PEMBERDAYAAN', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' } },
    { id: 'art-title', type: 'heading', props: { content: 'Di Balik Setiap Helai Kain, Ada Senyum Ibu Pengrajin', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffedd5', textAlign: 'center' } },
    { id: 'art-desc', type: 'paragraph', props: { content: 'Kami bekerja langsung bersama 120+ perempuan penenun dan pembatik di 4 sentra desa binaan Jawa dan NTT untuk kemandirian ekonomi keluarga.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' } },
    // Artisan 1
    { id: 'a1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80', alt: 'Ibu Ningsih', width: '100%', height: '240px', objectFit: 'cover' } },
    { id: 'a1-name', type: 'heading', props: { content: 'Ibu Ningsih (54 Tahun)', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'a1-role', type: 'paragraph', props: { content: 'Master Batik Tulis Halus — Giriloyo, Bantul', fontSize: '12px', color: '#fb923c', fontWeight: '600' } },
    { id: 'a1-bio', type: 'paragraph', props: { content: 'Telah mencanting selama 35 tahun, mewariskan keahlian pola pakem keraton kepada generasi muda di desanya.', fontSize: '13px', color: '#fed7aa' } },
    // Artisan 2
    { id: 'a2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', alt: 'Mama Maria', width: '100%', height: '240px', objectFit: 'cover' } },
    { id: 'a2-name', type: 'heading', props: { content: 'Mama Maria (48 Tahun)', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'a2-role', type: 'paragraph', props: { content: 'Ketua Kelompok Tenun Ikat — Sikka, NTT', fontSize: '12px', color: '#fb923c', fontWeight: '600' } },
    { id: 'a2-bio', type: 'paragraph', props: { content: 'Memimpin 40 perajin tenun ikat pewarna alam yang kini produknya menembus pameran internasional di Tokyo & Paris.', fontSize: '13px', color: '#fed7aa' } },
    // Artisan 3
    { id: 'a3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', alt: 'Pak Wayan Sudarma', width: '100%', height: '240px', objectFit: 'cover' } },
    { id: 'a3-name', type: 'heading', props: { content: 'Pak Wayan Sudarma (51 Tahun)', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'a3-role', type: 'paragraph', props: { content: 'Perajin Kriya Kayu & Aksen Perak — Celuk, Bali', fontSize: '12px', color: '#fb923c', fontWeight: '600' } },
    { id: 'a3-bio', type: 'paragraph', props: { content: 'Membuat handle tas dan ornamen kriya ukir dari kayu jati bekas kapal nelayan dengan finishing ramah lingkungan.', fontSize: '13px', color: '#fed7aa' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'art-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'art-title');
  const descComps = layoutComponents.filter(c => c.id === 'art-desc');

  const artisans = [
    {
      img: layoutComponents.filter(c => c.id === 'a1-img'),
      fallbackImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      name: layoutComponents.filter(c => c.id === 'a1-name'),
      role: layoutComponents.filter(c => c.id === 'a1-role'),
      bio: layoutComponents.filter(c => c.id === 'a1-bio'),
    },
    {
      img: layoutComponents.filter(c => c.id === 'a2-img'),
      fallbackImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      name: layoutComponents.filter(c => c.id === 'a2-name'),
      role: layoutComponents.filter(c => c.id === 'a2-role'),
      bio: layoutComponents.filter(c => c.id === 'a2-bio'),
    },
    {
      img: layoutComponents.filter(c => c.id === 'a3-img'),
      fallbackImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      name: layoutComponents.filter(c => c.id === 'a3-name'),
      role: layoutComponents.filter(c => c.id === 'a3-role'),
      bio: layoutComponents.filter(c => c.id === 'a3-bio'),
    }
  ];

  return (
    <section id="artisan" className="relative py-24 sm:py-32 bg-[#120a06] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 3 Artisan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((a, idx) => (
            <div
              key={idx}
              className="bg-[#1c1109] border border-orange-950 overflow-hidden shadow-xl hover:border-orange-600/50 transition-all duration-300"
            >
              <div className="h-60 w-full overflow-hidden bg-black/40">
                {a.img && a.img.length > 0 ? (
                  renderLayoutComponents(a.img, sectionId)
                ) : (
                  <img
                    src={a.fallbackImg}
                    alt="Artisan portrait"
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-6 space-y-2">
                {renderLayoutComponents(a.name, sectionId)}
                {renderLayoutComponents(a.role, sectionId)}
                <div className="pt-2">{renderLayoutComponents(a.bio, sectionId)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
