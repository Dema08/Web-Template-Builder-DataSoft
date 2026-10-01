import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopProductsSyariah
 * 3 Sharia savings and business financing products with editable cards and images.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function KopProductsSyariah({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prods-badge', type: 'badge', props: { text: '⚖️ PRODUK SIMPANAN & PEMBIAYAAN SYARIAH', variant: 'outline', background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: 'rgba(234,179,8,0.45)' } },
    { id: 'prods-title', type: 'heading', props: { content: 'Pilihan Akad Syariah yang Menenteramkan & Menguntungkan', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em' } },
    { id: 'prods-desc', type: 'paragraph', props: { content: 'Dirancang untuk membantu permodalan usaha anggota, tabungan masa depan, dan perencanaan ibadah dengan sistem bagi hasil murni tanpa riba.', fontSize: '16px', color: '#a7f3d0' } },

    // Product 1: Simpanan Berjangka Mudharabah
    {
      id: 'card-prod1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #022a1d 0%, #011910 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prod1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=80',
            alt: 'Simpanan Berjangka Syariah Mudharabah',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'prod1-badge', type: 'badge', props: { text: 'AKAD MUDHARABAH MUTHLAQAH', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
        { id: 'prod1-title', type: 'heading', props: { content: 'Simpanan Berjangka Mudharabah (Deposito Syariah)', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'prod1-desc', type: 'paragraph', props: { content: 'Investasi dana amanah dengan jangka waktu 3, 6, 12 bulan. Pembagian bagi hasil nisbah kompetitif yang ditransfer langsung ke rekening tabungan anggota setiap bulan.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'prod1-nisbah', type: 'heading', props: { content: 'Nisbah: 65% Anggota : 35% BMT | Minimal Rp 1.000.000', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fde047' } },
      ]
    },

    // Product 2: Pembiayaan Usaha Murabahah
    {
      id: 'card-prod2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #022a1d 0%, #011910 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prod2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80',
            alt: 'Pembiayaan Modal Usaha UMKM Murabahah',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'prod2-badge', type: 'badge', props: { text: 'AKAD MURABAHAH JUAL-BELI', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'prod2-title', type: 'heading', props: { content: 'Pembiayaan Modal Usaha & Pengadaan Barang', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'prod2-desc', type: 'paragraph', props: { content: 'Bantuan modal pengadaan stok dagang, mesin produksi, dan inventaris usaha toko dengan skema cicilan margin transparan yang disepakati bersama tanpa denda berlipat.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'prod2-nisbah', type: 'heading', props: { content: 'Plafon: s/d Rp 250 Juta | Tenor Fleksibel 6 - 36 Bulan', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
      ]
    },

    // Product 3: Tabungan Qurban & Haji
    {
      id: 'card-prod3',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #022a1d 0%, #011910 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prod3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&auto=format&fit=crop&q=80',
            alt: 'Tabungan Rencana Haji Umroh dan Qurban',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'prod3-badge', type: 'badge', props: { text: 'AKAD WADI\'AH YAD DHAMANAH', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
        { id: 'prod3-title', type: 'heading', props: { content: 'Tabungan Rencana Haji, Umroh & Qurban', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
        { id: 'prod3-desc', type: 'paragraph', props: { content: 'Simpanan titipan aman tanpa biaya administrasi bulanan untuk mewujudkan niat suci ibadah ke tanah suci dan ibadah qurban tahunan dengan pendampingan bimbingan resmi.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'prod3-nisbah', type: 'heading', props: { content: 'Bebas Biaya Admin | Bonus Hadiah & Pendampingan Porsi', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fde047' } },
      ]
    },

    { id: 'prods-cta-btn', type: 'button', props: { label: 'Ajukan Pembiayaan & Konsultasi Akad (Gratis) 🕌', href: '#register', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #059669, #047857)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'prods-badge');
  const titleC = lc.filter(c => c.id === 'prods-title');
  const descC = lc.filter(c => c.id === 'prods-desc');
  const card1 = lc.filter(c => c.id === 'card-prod1');
  const card2 = lc.filter(c => c.id === 'card-prod2');
  const card3 = lc.filter(c => c.id === 'card-prod3');
  const ctaBtn = lc.filter(c => c.id === 'prods-cta-btn');

  return (
    <section id="products" className="relative bg-[#022116] py-20 lg:py-28 overflow-hidden text-emerald-50">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 3 Products Cards Grid */}
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
