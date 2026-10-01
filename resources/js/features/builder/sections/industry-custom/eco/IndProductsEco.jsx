import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndProductsEco
 * 4 Sustainable FMCG & Eco-Packaging product categories with editable cards and images.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function IndProductsEco({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ecoprod-badge', type: 'badge', props: { text: '🍃 LINI PRODUKSI & OEM MANUFAKTUR', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
    { id: 'ecoprod-title', type: 'heading', props: { content: 'Solusi OEM & Manufaktur Berkelanjutan Skala Besar', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em' } },
    { id: 'ecoprod-desc', type: 'paragraph', props: { content: 'Dari formulasi bahan organik tersertifikasi hingga kemasan ramah lingkungan yang dapat terurai alami dalam waktu 180 hari.', fontSize: '16px', color: '#a7f3d0' } },

    // Category 1: Biodegradable Packaging
    {
      id: 'card-eco1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #02291c 0%, #011810 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'eco1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=80',
            alt: 'Biodegradable Eco-Friendly Food Packaging',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'eco1-badge', type: 'badge', props: { text: '100% COMPOSTABLE', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'eco1-title', type: 'heading', props: { content: 'Kemasan Makanan Biodegradable & Box Daur Ulang', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'eco1-desc', type: 'paragraph', props: { content: 'Kemasan food-grade berbahan serat tebu (bagasse) dan pati jagung (PLA) tahan panas hingga 120°C, microwave safe, dan bebas racun mikroplastik.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'eco1-moq', type: 'heading', props: { content: 'MOQ: 10.000 Pcs | Sertifikasi: ASTM D6400, EN 13432', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
      ]
    },

    // Category 2: Botanical & Organic FMCG OEM
    {
      id: 'card-eco2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #02291c 0%, #011810 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'eco2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
            alt: 'Organic Cosmetics Cleanroom Contract Manufacturing',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'eco2-badge', type: 'badge', props: { text: 'CPKB GRADE A & HALAL', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'eco2-title', type: 'heading', props: { content: 'Kontrak Manufaktur Kosmetik & Skincare Organik', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'eco2-desc', type: 'paragraph', props: { content: 'Layanan maklon kosmetik bersih dari formulasi bahan botani lokal, uji efikasi klinis, pendaftaran izin edar BPOM, hingga pengemasan botol ramah lingkungan.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'eco2-moq', type: 'heading', props: { content: 'MOQ: 1.000 Unit | Layanan Full OEM Formulasi Custom', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
      ]
    },

    // Category 3: Cleanroom Beverage & Liquid Bottling
    {
      id: 'card-eco3',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #02291c 0%, #011810 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'eco3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
            alt: 'Aseptic Beverage Bottling & Eco Glass Packaging',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'eco3-badge', type: 'badge', props: { text: 'ASEPTIC HOT-FILL 12.000 BPH', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'eco3-title', type: 'heading', props: { content: 'Bottling & Packaging Minuman Fungsional Steril', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'eco3-desc', type: 'paragraph', props: { content: 'Lini pengisian aseptik otomatis untuk RTD kombucha, cold-pressed juice, dan suplemen herbal cair dengan kemasan botol kaca daur ulang dan aluminium kaleng.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'eco3-moq', type: 'heading', props: { content: 'Kapasitas: 50.000 Botol/Hari | Sertifikasi: FSSC 22000', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
      ]
    },

    // Category 4: Industrial Eco Thermoforming
    {
      id: 'card-eco4',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #02291c 0%, #011810 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'eco4-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800&auto=format&fit=crop&q=80',
            alt: 'Industrial Thermoforming & Molded Fiber Cushioning',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'eco4-badge', type: 'badge', props: { text: 'MOLDED PULP FIBER', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'eco4-title', type: 'heading', props: { content: 'Molded Pulp Cushioning & Industrial Blister', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'eco4-desc', type: 'paragraph', props: { content: 'Pelindung kemasan elektronik, botol parfum, dan kosmetik berbahan bubur kertas daur ulang 100% menggantikan styrofoam dan plastik bubble wrap.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'eco4-moq', type: 'heading', props: { content: 'Custom Mold Design 3D | Kekuatan Beban Uji Drop-Test', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
      ]
    },

    { id: 'ecoprod-cta-btn', type: 'button', props: { label: 'Request Sample Box & Katalog Lengkap (Gratis) 🌱', href: '#oem', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'ecoprod-badge');
  const titleC = lc.filter(c => c.id === 'ecoprod-title');
  const descC = lc.filter(c => c.id === 'ecoprod-desc');
  const card1 = lc.filter(c => c.id === 'card-eco1');
  const card2 = lc.filter(c => c.id === 'card-eco2');
  const card3 = lc.filter(c => c.id === 'card-eco3');
  const card4 = lc.filter(c => c.id === 'card-eco4');
  const ctaBtn = lc.filter(c => c.id === 'ecoprod-cta-btn');

  return (
    <section id="products" className="relative bg-[#021f14] py-20 lg:py-28 overflow-hidden text-emerald-50">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 4 Products Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
          <div>{renderLayoutComponents(card4, sectionId)}</div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          {renderLayoutComponents(ctaBtn, sectionId)}
        </div>
      </div>
    </section>
  );
}
