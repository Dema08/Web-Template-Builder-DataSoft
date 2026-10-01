import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyCtaFresh
 * Farmer Partnership & Fresh Milk Delivery Subscription Card.
 */
export default function DairyCtaFresh({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-fresh-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #0f766e 0%, #042f2c 100%)', borderColor: 'rgba(20,184,166,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'cta-fr-badge', type: 'badge', props: { text: '🥛 BERLANGGANAN SUSU SEGAR & KEMITRAAN KOPERASI', variant: 'solid', background: 'rgba(13,148,136,0.3)', color: '#ccfbf1' } },
        { id: 'cta-fr-title', type: 'heading', props: { content: 'Nikmati Kebaikan Susu Segar Murni Setiap Pagi Langsung di Depan Rumah Anda', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
        { id: 'cta-fr-desc', type: 'paragraph', props: { content: 'Daftar paket langganan mingguan/bulanan atau ajukan pendaftaran peternak baru untuk mendapatkan pasokan pakan konsentrat bersubsidi dan bantuan permodalan sapi perah.', fontSize: '16px', color: '#ccfbf1' } },
        { id: 'cta-fr-btn1', type: 'button', props: { label: 'Mulai Langganan Harian 🥛', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: '#14b8a6', color: '#ffffff', fontWeight: '800' } },
        { id: 'cta-fr-btn2', type: 'button', props: { label: 'Daftar Jadi Peternak Anggota', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(4,47,44,0.8)', color: '#5eead4', borderColor: 'rgba(20,184,166,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-fresh-card');

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#021a17] text-teal-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
