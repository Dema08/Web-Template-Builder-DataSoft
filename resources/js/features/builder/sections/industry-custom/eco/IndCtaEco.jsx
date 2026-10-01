import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndCtaEco
 * OEM / Private Label Green Manufacturing Consultation & Sample Kit Request CTA Card.
 * Fully supports right-inspector selection and property editing for cards, badges, buttons, and texts.
 */
export default function IndCtaEco({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-eco-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #023826 0%, #012419 50%, #01140e 100%)', borderColor: 'rgba(16,185,129,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'cta-eco-badge', type: 'badge', props: { text: '🌱 KERJASAMA KONTRAK OEM & PRIVATE LABEL', variant: 'outline', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
        { id: 'cta-eco-title', type: 'heading', props: { content: 'Wujudkan Produk Ramah Lingkungan untuk Brand Anda Bersama Kami', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em', textAlign: 'center' } },
        { id: 'cta-eco-desc', type: 'paragraph', props: { content: 'Dapatkan sample kit kemasan biodegradable gratis dan konsultasi formulasi produk bersama tim R&D ahli kami. Proses cepat, legalitas BPOM terjamin, dan kapasitas produksi masif.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' } },
        { id: 'cta-eco-btn1', type: 'button', props: { label: 'Klaim Sample Kit & Penawaran OEM 🌱', href: 'mailto:oem@ecoplant.id', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
        { id: 'cta-eco-btn2', type: 'button', props: { label: 'Chat R&D Specialist (WhatsApp)', href: 'https://wa.me/6281144556677', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.8)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-eco-card');

  return (
    <section id="oem" className="relative bg-[#01160e] py-20 lg:py-28 overflow-hidden text-emerald-50">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
