import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFeaturesDigital
 * 3 Digital SuperApp Feature Cards with editable cards, images, badges, and headings.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function KopFeaturesDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'feat-badge', type: 'badge', props: { text: '📱 FITUR UNGGULAN SUPERAPP FINTECH', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
    { id: 'feat-title', type: 'heading', props: { content: 'Kemudahan Finansial Lengkap dalam Satu Genggaman', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'feat-desc', type: 'paragraph', props: { content: 'Dari pembukaan rekening instan, pinjaman modal usaha dengan persetujuan AI dalam hitungan menit, hingga pembayaran tagihan bulanan bebas biaya.', fontSize: '16px', color: '#cbd5e1' } },

    // Feature 1: e-KYC Onboarding
    {
      id: 'card-feat1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #072233 0%, #03141f 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'feat1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
            alt: 'Digital e-KYC Online Member Registration',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'feat1-badge', type: 'badge', props: { text: 'REGISTRASI e-KYC 3 MENIT', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'feat1-title', type: 'heading', props: { content: 'Buka Tabungan Koperasi Online 100% Paperless', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'feat1-desc', type: 'paragraph', props: { content: 'Cukup siapkan e-KTP dan selfie biometrik. Buku tabungan digital langsung aktif dan terhubung ke nomor rekening virtual bank utama.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'feat1-spec', type: 'heading', props: { content: 'Setoran Awal: Mulai Rp 20.000 | Bunga Tabungan: 5.5% p.a.', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#67e8f9' } },
      ]
    },

    // Feature 2: AI Credit Scoring Instant Loan
    {
      id: 'card-feat2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #072233 0%, #03141f 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'feat2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=80',
            alt: 'Instant Micro Business Loan Approval AI',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'feat2-badge', type: 'badge', props: { text: 'PENCAIRAN 5 MENIT', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'feat2-title', type: 'heading', props: { content: 'Pinjaman Modal Usaha Kilat Berbasis AI', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'feat2-desc', type: 'paragraph', props: { content: 'Algoritma credit-scoring otomatis mengevaluasi kelayakan usaha Anda tanpa jaminan rumit, dengan bunga flat koperasi yang sangat terjangkau.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'feat2-spec', type: 'heading', props: { content: 'Plafon: Rp 1 Juta - Rp 100 Juta | Bunga Ringan: 0.75% / Bulan', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
      ]
    },

    // Feature 3: QRIS & PPOB Bill Payment
    {
      id: 'card-feat3',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #072233 0%, #03141f 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'feat3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&auto=format&fit=crop&q=80',
            alt: 'QRIS Merchant & PPOB Bill Payment Integration',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'feat3-badge', type: 'badge', props: { text: 'BEBAS BIAYA ADMIN', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
        { id: 'feat3-title', type: 'heading', props: { content: 'Merchant QRIS Usaha & Pembayaran Tagihan', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'feat3-desc', type: 'paragraph', props: { content: 'Terima pembayaran QRIS di toko Anda tanpa potongan MDR, beli token PLN, pulsa, dan bayar BPJS langsung dengan saldo tabungan koperasi.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'feat3-spec', type: 'heading', props: { content: 'Settlement Real-time | Cashback PPOB 2.5% per Transaksi', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fde047' } },
      ]
    },

    { id: 'feat-cta-btn', type: 'button', props: { label: 'Download SuperApp & Dapatkan Saldo Bonus Rp 50.000 📲', href: '#download', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #06b6d4, #059669)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'feat-badge');
  const titleC = lc.filter(c => c.id === 'feat-title');
  const descC = lc.filter(c => c.id === 'feat-desc');
  const card1 = lc.filter(c => c.id === 'card-feat1');
  const card2 = lc.filter(c => c.id === 'card-feat2');
  const card3 = lc.filter(c => c.id === 'card-feat3');
  const ctaBtn = lc.filter(c => c.id === 'feat-cta-btn');

  return (
    <section id="features" className="relative bg-[#031522] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 3 Features Cards Grid */}
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
