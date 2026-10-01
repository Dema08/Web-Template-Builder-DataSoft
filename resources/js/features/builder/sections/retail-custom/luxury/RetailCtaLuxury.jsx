import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailCtaLuxury
 * VIP Private Client Invitation & Boutique Appointment card.
 */
export default function RetailCtaLuxury({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-luxury-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #2e1065 0%, #120724 100%)', borderColor: 'rgba(168,85,247,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'cta-lux-badge', type: 'badge', props: { text: '👑 MAISON PRESTIGE PRIVATE CLIENT', variant: 'solid', background: 'rgba(168,85,247,0.3)', color: '#f5d0fe' } },
        { id: 'cta-lux-title', type: 'heading', props: { content: 'Mulai Pengalaman Eksklusif & Dapatkan Akses Kurasi Private', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
        { id: 'cta-lux-desc', type: 'paragraph', props: { content: 'Hubungi Private Client Concierge kami untuk konsultasi koleksi, pemesanan kustom, atau reservasi waktu kunjungan di VIP Salon.', fontSize: '16px', color: '#e9d5ff' } },
        { id: 'cta-lux-btn1', type: 'button', props: { label: 'Hubungi Private Concierge 💬', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #9333ea, #7c3aed)', color: '#ffffff', fontWeight: '800' } },
        { id: 'cta-lux-btn2', type: 'button', props: { label: 'Unduh Lookbook Musim Ini 📖', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(18,7,36,0.8)', color: '#f5d0fe', borderColor: 'rgba(168,85,247,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-luxury-card');

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#0a0414] text-purple-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
