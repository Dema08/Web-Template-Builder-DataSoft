import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopCtaSyariah
 * Member Registration & Sharia Consultation CTA Card.
 * Fully supports right-inspector selection and property editing for cards, badges, buttons, and texts.
 */
export default function KopCtaSyariah({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-syariah-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #033a27 0%, #012419 50%, #01130d 100%)', borderColor: 'rgba(234,179,8,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'cta-syariah-badge', type: 'badge', props: { text: '🕌 PENDAFTARAN ANGGOTA BARU 2026', variant: 'outline', background: 'rgba(234,179,8,0.2)', color: '#fde047', borderColor: 'rgba(234,179,8,0.5)' } },
        { id: 'cta-syariah-title', type: 'heading', props: { content: 'Mari Bergabung & Rasakan Berkah Berkeuangan Bersama Koperasi Syariah', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em', textAlign: 'center' } },
        { id: 'cta-syariah-desc', type: 'paragraph', props: { content: 'Buka rekening simpanan atau ajukan pembiayaan usaha Anda dengan mudah. Nikmati kemudahan layanan digital dan bagi hasil yang menenteramkan hati.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' } },
        { id: 'cta-syariah-btn1', type: 'button', props: { label: 'Daftar Jadi Anggota Sekarang 🕌', href: 'mailto:daftar@bmtamanah.id', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #059669, #047857)', color: '#ffffff', fontWeight: '700' } },
        { id: 'cta-syariah-btn2', type: 'button', props: { label: 'Konsultasi Petugas Layanan (WhatsApp)', href: 'https://wa.me/6281155667788', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(4,47,30,0.8)', color: '#fde047', borderColor: 'rgba(234,179,8,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-syariah-card');

  return (
    <section id="register" className="relative bg-[#01160e] py-20 lg:py-28 overflow-hidden text-emerald-50">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
