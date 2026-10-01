import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopImpactAgri
 * Farmer Prosperity Impact, Crop Yield Insurance & Organic GAP Certification.
 * Fully supports right-inspector selection and property editing for cards, badges, and texts.
 */
export default function KopImpactAgri({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'imp-badge', type: 'badge', props: { text: '📈 DAMPAK KESEJAHTERAAN PETANI ANGGOTA', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.45)' } },
    { id: 'imp-title', type: 'heading', props: { content: 'Meningkatkan Taraf Hidup Komunitas Petani Indonesia', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.02em' } },
    { id: 'imp-desc', type: 'paragraph', props: { content: 'Melalui pembagian SHU usaha perdagangan hasil bumi, jaminan asuransi tani, dan edukasi pertanian modern berkelanjutan.', fontSize: '16px', color: '#fde68a' } },

    // Impact 1: Peningkatan Pendapatan
    {
      id: 'card-imp1',
      type: 'card',
      props: { background: '#261807', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'imp1-tag', type: 'badge', props: { text: 'PENDAPATAN NAIK +65%', variant: 'solid', background: 'rgba(217,119,6,0.2)', color: '#fbbf24' } },
        { id: 'imp1-title', type: 'heading', props: { content: 'Penghapusan Margin Tengkulak Non-Resmi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7' } },
        { id: 'imp1-desc', type: 'paragraph', props: { content: 'Petani anggota menerima harga beli di tingkat kebun 25-40% lebih tinggi dibandingkan sistem tengkulak konvensional.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Impact 2: Asuransi Gagal Panen
    {
      id: 'card-imp2',
      type: 'card',
      props: { background: '#261807', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'imp2-tag', type: 'badge', props: { text: 'PROTEKSI PETANI', variant: 'solid', background: 'rgba(22,163,74,0.2)', color: '#86efac' } },
        { id: 'imp2-title', type: 'heading', props: { content: 'Dana Perlindungan Gagal Panen (AUTP)', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7' } },
        { id: 'imp2-desc', type: 'paragraph', props: { content: 'Fasilitas asuransi usaha tani bekerjasama dengan BUMN untuk mengganti kerugian saat terjadi bencana banjir, kekeringan, atau hama wereng.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Impact 3: SHU Unit Usaha Perdagangan
    {
      id: 'card-imp3',
      type: 'card',
      props: { background: '#261807', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'imp3-tag', type: 'badge', props: { text: 'DIVIDEN SHU RAT', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
        { id: 'imp3-title', type: 'heading', props: { content: 'SHU Ekspor Dibagi Rata ke Seluruh Anggota', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7' } },
        { id: 'imp3-desc', type: 'paragraph', props: { content: 'Keuntungan dari perdagangan komoditas ekspor dan sewa cold storage dikembalikan sebagai dividen SHU tahunan yang ditransfer langsung.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Impact 4: Sertifikasi Organik & Smart Farming
    {
      id: 'card-imp4',
      type: 'card',
      props: { background: '#261807', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'imp4-tag', type: 'badge', props: { text: 'SMART FARMING', variant: 'solid', background: 'rgba(217,119,6,0.2)', color: '#fbbf24' } },
        { id: 'imp4-title', type: 'heading', props: { content: 'Pelatihan IoT Drone Semprot & Sensor Tanah', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7' } },
        { id: 'imp4-desc', type: 'paragraph', props: { content: 'Modernisasi pertanian dengan drone sprayer pupuk organik, sensor kelembapan tanah, dan sertifikasi Good Agricultural Practices (GAP).', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // GAP Banner Card
    {
      id: 'gap-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #38240c 0%, #1c1105 100%)', borderColor: 'rgba(217,119,6,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'gap-badge', type: 'badge', props: { text: '🏅 SERTIFIKASI INDO-GAP & ORGANIK INTERNASIONAL', variant: 'solid', background: 'rgba(217,119,6,0.25)', color: '#fbbf24' } },
        { id: 'gap-title', type: 'heading', props: { content: 'Standar Mutu Komoditas Ekspor Berdaya Saing Global', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#fef3c7' } },
        { id: 'gap-desc', type: 'paragraph', props: { content: 'Seluruh komoditas beras organik, kopi arabika specialty, kakao fermentasi, dan vanili yang dikelola koperasi teruji bebas residu pestisida kimia berbahaya dan bersertifikasi organik resmi.', fontSize: '14px', color: '#fde68a' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'imp-badge');
  const titleC = lc.filter(c => c.id === 'imp-title');
  const descC = lc.filter(c => c.id === 'imp-desc');
  const card1 = lc.filter(c => c.id === 'card-imp1');
  const card2 = lc.filter(c => c.id === 'card-imp2');
  const card3 = lc.filter(c => c.id === 'card-imp3');
  const card4 = lc.filter(c => c.id === 'card-imp4');
  const banner = lc.filter(c => c.id === 'gap-banner-card');

  return (
    <section id="impact" className="relative bg-[#120a02] py-20 lg:py-28 overflow-hidden text-amber-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 4 Cards Grid */}
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
