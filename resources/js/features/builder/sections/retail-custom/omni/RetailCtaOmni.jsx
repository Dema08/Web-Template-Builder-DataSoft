import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailCtaOmni
 * SuperApp Download & Storefront Membership Registration card.
 */
export default function RetailCtaOmni({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-omni-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #9f1239 0%, #3f0d22 100%)', borderColor: 'rgba(244,63,94,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'cta-omni-badge', type: 'badge', props: { text: '📱 SUPERMART MOBILE SUPERAPP', variant: 'solid', background: '#e11d48', color: '#ffffff' } },
        { id: 'cta-omni-title', type: 'heading', props: { content: 'Belanja Lebih Cepat, Lebih Hemat, dan Lebih Praktis dari Genggaman', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
        { id: 'cta-omni-desc', type: 'paragraph', props: { content: 'Tersedia di Google Play Store & Apple App Store. Dapatkan update flash deal harian, live tracking kurir, dan kupon diskon eksklusif pengguna aplikasi.', fontSize: '16px', color: '#ffe4e6' } },
        { id: 'cta-omni-btn1', type: 'button', props: { label: 'Download di App Store / Play Store 📲', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#be123c', fontWeight: '800' } },
        { id: 'cta-omni-btn2', type: 'button', props: { label: 'Daftar Member Online Gratis', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(26,6,15,0.7)', color: '#fecdd3', borderColor: 'rgba(255,255,255,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-omni-card');

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#0d0307] text-rose-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
