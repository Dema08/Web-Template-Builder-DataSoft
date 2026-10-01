import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailCtaWholesale
 * Wholesale agency & store partnership registration card.
 */
export default function RetailCtaWholesale({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-wholesale-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)', borderColor: 'rgba(59,130,246,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'cta-wh-badge', type: 'badge', props: { text: '🤝 KEMITRAAN AGEN & TOKO GROSIR', variant: 'solid', background: 'rgba(59,130,246,0.3)', color: '#93c5fd' } },
        { id: 'cta-wh-title', type: 'heading', props: { content: 'Tingkatkan Omset & Hemat Biaya Pasokan Toko Retail Anda Sekarang', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
        { id: 'cta-wh-desc', type: 'paragraph', props: { content: 'Daftarkan toko atau minimarket Anda hari ini untuk langsung mendapatkan akses pricelist khusus distributor, cashback volume bulanan, dan program rak display gratis.', fontSize: '16px', color: '#cbd5e1' } },
        { id: 'cta-wh-btn1', type: 'button', props: { label: 'Daftar Mitra Agen Sekarang 🚀', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#3b82f6', color: '#ffffff', fontWeight: '800' } },
        { id: 'cta-wh-btn2', type: 'button', props: { label: 'Konsultasi Tim Key Account', href: '#contact', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-wholesale-card');

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#070e22] text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
