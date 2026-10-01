import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndEsgEco
 * ESG Sustainability Performance, Solar PV Rooftop & Zero Landfill Waste Metrics.
 * Fully supports right-inspector selection and property editing for cards, badges, and texts.
 */
export default function IndEsgEco({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'esg-badge', type: 'badge', props: { text: '🌱 KOMITMEN KEBERLANJUTAN & ESG PERFORMANCE', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
    { id: 'esg-title', type: 'heading', props: { content: 'Standar Pabrik Hijau Ramah Lingkungan Masa Depan', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em' } },
    { id: 'esg-desc', type: 'paragraph', props: { content: 'Kami membuktikan bahwa efisiensi manufaktur skala besar dapat berjalan selaras dengan pelestarian alam dan pengurangan jejak karbon global.', fontSize: '16px', color: '#a7f3d0' } },

    // Metric 1: Solar PV Rooftop
    {
      id: 'card-esg1',
      type: 'card',
      props: { background: '#022b1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'esg1-tag', type: 'badge', props: { text: 'CLEAN ENERGY', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'esg1-title', type: 'heading', props: { content: '2.4 MWp Panel Surya Atap Pabrik Terpasang', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'esg1-desc', type: 'paragraph', props: { content: 'Menghasilkan 3.200 MWh energi bersih per tahun, menyuplai 100% kebutuhan listrik lini produksi utama di siang hari.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Metric 2: Zero Liquid Discharge Water
    {
      id: 'card-esg2',
      type: 'card',
      props: { background: '#022b1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'esg2-tag', type: 'badge', props: { text: 'WATER STEWARDSHIP', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'esg2-title', type: 'heading', props: { content: 'Daur Ulang Air 85% dengan Sistem Ultrafiltrasi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'esg2-desc', type: 'paragraph', props: { content: 'Instalasi pengolahan air limbah terpadu (WWTP) dengan teknologi membrane bioreactor memastikan zero-liquid harmful contamination.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Metric 3: Carbon Offset Reduction
    {
      id: 'card-esg3',
      type: 'card',
      props: { background: '#022b1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'esg3-tag', type: 'badge', props: { text: 'CARBON OFFSET', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'esg3-title', type: 'heading', props: { content: '14.000 Ton Emisi Karbon Berhasil Direduksi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'esg3-desc', type: 'paragraph', props: { content: 'Setara dengan menanam 250.000 pohon produktif di hutan konservasi tropis bersama mitra petani lokal.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Metric 4: 100% Recyclable Packaging Loop
    {
      id: 'card-esg4',
      type: 'card',
      props: { background: '#022b1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'esg4-tag', type: 'badge', props: { text: 'CIRCULAR PACKAGING', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'esg4-title', type: 'heading', props: { content: 'Sertifikasi FSC & Kompos Alami Rumah Tangga', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'esg4-desc', type: 'paragraph', props: { content: 'Semua bahan baku karton dan kertas kemasan bersertifikat Forest Stewardship Council (FSC) dari hutan tanaman industri lestari.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // ESG Statement Banner
    {
      id: 'esg-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #023826 0%, #012217 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'esgb-badge', type: 'badge', props: { text: '📋 AUDITED ESG REPORT 2026', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
        { id: 'esgb-title', type: 'heading', props: { content: 'Transparansi Penuh untuk Mitra Brand Korporasi Global', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f0fdf4' } },
        { id: 'esgb-desc', type: 'paragraph', props: { content: 'Dapatkan laporan audit jejak karbon (Scope 1, 2, 3 GHG Protocol) dan sertifikat keberlanjutan resmi untuk setiap batch produksi produk private label brand Anda.', fontSize: '14px', color: '#a7f3d0' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'esg-badge');
  const titleC = lc.filter(c => c.id === 'esg-title');
  const descC = lc.filter(c => c.id === 'esg-desc');
  const card1 = lc.filter(c => c.id === 'card-esg1');
  const card2 = lc.filter(c => c.id === 'card-esg2');
  const card3 = lc.filter(c => c.id === 'card-esg3');
  const card4 = lc.filter(c => c.id === 'card-esg4');
  const banner = lc.filter(c => c.id === 'esg-banner-card');

  return (
    <section id="esg" className="relative bg-[#01170f] py-20 lg:py-28 overflow-hidden text-emerald-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 4 ESG Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
          <div>{renderLayoutComponents(card4, sectionId)}</div>
        </div>

        {/* Banner Card */}
        <div>{renderLayoutComponents(banner, sectionId)}</div>
      </div>
    </section>
  );
}
