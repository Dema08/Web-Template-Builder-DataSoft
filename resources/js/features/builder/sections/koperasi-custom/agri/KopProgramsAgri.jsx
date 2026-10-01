import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopProgramsAgri
 * 3 Agricultural Producers empowerment programs with editable cards and images.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function KopProgramsAgri({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prog-badge', type: 'badge', props: { text: '🌾 PROGRAM PEMBERDAYAAN & LOGISTIK TANI', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.45)' } },
    { id: 'prog-title', type: 'heading', props: { content: 'Ekosistem Terintegrasi dari Hulu Tani hingga Hilir Pasar Global', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.02em' } },
    { id: 'prog-desc', type: 'paragraph', props: { content: 'Kami memutus rantai tengkulak yang merugikan dengan menyediakan sarana produksi bersubsidi, fasilitas resi gudang resmi, dan kontrak pembelian panen pasti.', fontSize: '16px', color: '#fde68a' } },

    // Program 1: Saprotan & Pupuk Bersubsidi
    {
      id: 'card-prog1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #2a1b08 0%, #170d03 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prog1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
            alt: 'Penyediaan Pupuk Organik dan Bibit Unggul Bersubsidi',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'prog1-badge', type: 'badge', props: { text: 'SUBSIDI BIBIT & PUPUK', variant: 'solid', background: 'rgba(217,119,6,0.2)', color: '#fbbf24' } },
        { id: 'prog1-title', type: 'heading', props: { content: 'Penyediaan Sarana Produksi Tani (Saprotan)', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#fef3c7' } },
        { id: 'prog1-desc', type: 'paragraph', props: { content: 'Akses pupuk organik kualitas tinggi, bibit unggul bersertifikasi BPSB, dan sewa traktor mekanis modern dengan skema bayar saat panen (Yarnen).', fontSize: '13px', color: '#94a3b8' } },
        { id: 'prog1-spec', type: 'heading', props: { content: 'Skema: Bayar Pasca Panen (Yarnen) | Diskon Pupuk: s/d 25%', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fbbf24' } },
      ]
    },

    // Program 2: Resi Gudang & Cold Storage
    {
      id: 'card-prog2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #2a1b08 0%, #170d03 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prog2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
            alt: 'Sistem Resi Gudang dan Cold Storage Komoditas',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'prog2-badge', type: 'badge', props: { text: 'RESI GUDANG BAPPEBTI', variant: 'solid', background: 'rgba(22,163,74,0.2)', color: '#86efac' } },
        { id: 'prog2-title', type: 'heading', props: { content: 'Fasilitas Cold Storage & Sistem Resi Gudang (SRG)', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#fef3c7' } },
        { id: 'prog2-desc', type: 'paragraph', props: { content: 'Cegah anjloknya harga saat panen raya dengan menyimpan gabah, jagung, cabai, dan kopi di cold storage berpendingin, serta jadikan resi gudang jaminan pinjaman.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'prog2-spec', type: 'heading', props: { content: 'Kapasitas: 2.500 Ton | Pembiayaan SRG s/d 70% Nilai Komoditas', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#86efac' } },
      ]
    },

    // Program 3: Off-Taker & Ekspor B2B
    {
      id: 'card-prog3',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #2a1b08 0%, #170d03 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prog3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
            alt: 'Distribusi Komoditas Pertanian Ekspor B2B',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'prog3-badge', type: 'badge', props: { text: 'JARINGAN EKSPOR B2B', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
        { id: 'prog3-title', type: 'heading', props: { content: 'Kontrak Pembelian Off-Taker Pasar Modern & Ekspor', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#fef3c7' } },
        { id: 'prog3-desc', type: 'paragraph', props: { content: 'Koperasi menjadi jembatan langsung pasokan komoditas pertanian ke jaringan supermarket nasional, industri pengolahan makanan, dan buyer ekspor Timur Tengah & Asia.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'prog3-spec', type: 'heading', props: { content: 'Mitra: 85+ Korporasi & Eksportir | Garansi Pembayaran Tepat Waktu', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fde047' } },
      ]
    },

    { id: 'prog-cta-btn', type: 'button', props: { label: 'Ajukan Kemitraan Kelompok Tani / Supplier Komoditas 🌾', href: '#partner', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'prog-badge');
  const titleC = lc.filter(c => c.id === 'prog-title');
  const descC = lc.filter(c => c.id === 'prog-desc');
  const card1 = lc.filter(c => c.id === 'card-prog1');
  const card2 = lc.filter(c => c.id === 'card-prog2');
  const card3 = lc.filter(c => c.id === 'card-prog3');
  const ctaBtn = lc.filter(c => c.id === 'prog-cta-btn');

  return (
    <section id="programs" className="relative bg-[#190f05] py-20 lg:py-28 overflow-hidden text-amber-50">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 3 Programs Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          {renderLayoutComponents(ctaBtn, sectionId)}
        </div>
      </div>
    </section>
  );
}
