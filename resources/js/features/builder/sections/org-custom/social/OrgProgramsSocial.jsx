import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgProgramsSocial
 * 4 Social empowerment programs grid for NGO — emerald & warm orange.
 * Fully supports right-inspector selection and property editing for all cards, images, badges, and texts.
 */
export default function OrgProgramsSocial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prog-badge', type: 'badge', props: { text: '💚 4 PILAR PROGRAM UTAMA', variant: 'outline', background: 'rgba(16,185,129,0.18)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
    { id: 'prog-title', type: 'heading', props: { content: 'Program Berkelanjutan untuk Perubahan Nyata di Lapangan', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
    { id: 'prog-desc', type: 'paragraph', props: { content: 'Kami merancang program berbasis kebutuhan riil masyarakat dengan pendampingan intensif dari para relawan ahli dan donatur terpercaya.', fontSize: '16px', color: '#a7f3d0' } },
    
    // Card 1 — Beasiswa
    {
      id: 'card-p1',
      type: 'card',
      props: { background: '#032e22', borderColor: 'rgba(16,185,129,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '0px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'p1-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80', alt: 'Beasiswa Anak Bangsa', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }
        },
        { id: 'p1-tag', type: 'badge', props: { text: '🎓 PENDIDIKAN', variant: 'solid', background: 'rgba(1,26,18,0.9)', color: '#6ee7b7' } },
        { id: 'p1-title', type: 'heading', props: { content: 'Beasiswa Pelajar Nusantara', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
        { id: 'p1-desc', type: 'paragraph', props: { content: 'Bantuan biaya SPP, buku, dan mentoring persiapan perguruan tinggi untuk 2.500 anak berprestasi dari keluarga prasejahtera.', fontSize: '13px', color: '#a7f3d0' } },
        { id: 'p1-stat', type: 'heading', props: { content: '2.500 Pelajar / Tahun', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#f97316' } },
      ]
    },

    // Card 2 — Klinik
    {
      id: 'card-p2',
      type: 'card',
      props: { background: '#032e22', borderColor: 'rgba(16,185,129,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '0px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'p2-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80', alt: 'Klinik Apung Medis', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }
        },
        { id: 'p2-tag', type: 'badge', props: { text: '🏥 KESEHATAN', variant: 'solid', background: 'rgba(1,26,18,0.9)', color: '#6ee7b7' } },
        { id: 'p2-title', type: 'heading', props: { content: 'Klinik Apung & Keliling Medis', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
        { id: 'p2-desc', type: 'paragraph', props: { content: 'Armada ambulans dan kapal medis menjangkau pulau terluar untuk pemeriksaan kesehatan cuma-cuma, USG ibu hamil, dan obat gratis.', fontSize: '13px', color: '#a7f3d0' } },
        { id: 'p2-stat', type: 'heading', props: { content: '48.000 Pasien Terlayani', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#f97316' } },
      ]
    },

    // Card 3 — UMKM Desa
    {
      id: 'card-p3',
      type: 'card',
      props: { background: '#032e22', borderColor: 'rgba(16,185,129,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '0px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'p3-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80', alt: 'Pemberdayaan UMKM Desa', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }
        },
        { id: 'p3-tag', type: 'badge', props: { text: '🌾 EKONOMI KERAKYATAN', variant: 'solid', background: 'rgba(1,26,18,0.9)', color: '#6ee7b7' } },
        { id: 'p3-title', type: 'heading', props: { content: 'Pemberdayaan UMKM Desa', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
        { id: 'p3-desc', type: 'paragraph', props: { content: 'Pelatihan literasi digital, akses modal mikro tanpa bunga, dan pendampingan pemasaran produk olahan tani dan kerajinan ibu-ibu desa.', fontSize: '13px', color: '#a7f3d0' } },
        { id: 'p3-stat', type: 'heading', props: { content: '8.400 Usaha Mandiri', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#f97316' } },
      ]
    },

    // Card 4 — Hutan Lestari
    {
      id: 'card-p4',
      type: 'card',
      props: { background: '#032e22', borderColor: 'rgba(16,185,129,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '0px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'p4-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80', alt: 'Hutan & Pesisir Lestari', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }
        },
        { id: 'p4-tag', type: 'badge', props: { text: '🌱 LINGKUNGAN HIDUP', variant: 'solid', background: 'rgba(1,26,18,0.9)', color: '#6ee7b7' } },
        { id: 'p4-title', type: 'heading', props: { content: 'Hutan & Pesisir Lestari', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
        { id: 'p4-desc', type: 'paragraph', props: { content: 'Gerakan restorasi 1 juta bibit mangrove dan reboisasi sumber mata air desa untuk menahan abrasi dan memitigasi krisis iklim lokal.', fontSize: '13px', color: '#a7f3d0' } },
        { id: 'p4-stat', type: 'heading', props: { content: '1.200 Ha Kawasan Hijau', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#f97316' } },
      ]
    },

    { id: 'prog-cta-btn', type: 'button', props: { label: 'Ajukan Program / Jadi Mitra Komunitas 💚', href: '#volunteer', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'prog-badge');
  const titleC = lc.filter(c => c.id === 'prog-title');
  const descC = lc.filter(c => c.id === 'prog-desc');
  const ctaBtn = lc.filter(c => c.id === 'prog-cta-btn');
  const cardP1 = lc.filter(c => c.id === 'card-p1');
  const cardP2 = lc.filter(c => c.id === 'card-p2');
  const cardP3 = lc.filter(c => c.id === 'card-p3');
  const cardP4 = lc.filter(c => c.id === 'card-p4');

  return (
    <section className="relative bg-[#021f16] py-20 lg:py-28 overflow-hidden text-white">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>{renderLayoutComponents(cardP1, sectionId)}</div>
          <div>{renderLayoutComponents(cardP2, sectionId)}</div>
          <div>{renderLayoutComponents(cardP3, sectionId)}</div>
          <div>{renderLayoutComponents(cardP4, sectionId)}</div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          {renderLayoutComponents(ctaBtn, sectionId)}
        </div>
      </div>
    </section>
  );
}
