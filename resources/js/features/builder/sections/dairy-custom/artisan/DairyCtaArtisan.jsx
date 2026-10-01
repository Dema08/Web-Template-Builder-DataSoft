import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyCtaArtisan
 * Farmstead Weekly Subscription & VIP Member Card.
 */
export default function DairyCtaArtisan({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-artisan-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #1e4533 0%, #051a11 100%)', borderColor: 'rgba(245,158,11,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'cta-art-badge', type: 'badge', props: { text: '🌾 VALLEY PASTURES FARMSTEAD CLUB', variant: 'solid', background: 'rgba(245,158,11,0.3)', color: '#fde68a' } },
        { id: 'cta-art-title', type: 'heading', props: { content: 'Berikan Nutrisi Alami Terbaik Untuk Buah Hati & Keluarga Tercinta', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
        { id: 'cta-art-desc', type: 'paragraph', props: { content: 'Daftar paket pengantaran susu botol mingguan sekarang dan dapatkan bonus complimentary artisan salted butter dan cooler bag eksklusif di pengantaran pertama.', fontSize: '16px', color: '#fef3c7' } },
        { id: 'cta-art-btn1', type: 'button', props: { label: 'Mulai Langganan Mingguan 🥛', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#ffffff', fontWeight: '800' } },
        { id: 'cta-art-btn2', type: 'button', props: { label: 'Tanya Tim Farmstead Concierge', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(5,26,17,0.8)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-artisan-card');

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#04140e] text-emerald-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
