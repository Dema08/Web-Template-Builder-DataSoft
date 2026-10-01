import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndCtaSmart
 * Smart Factory Modernization Audit & Digital Twin Demo CTA Card.
 * Fully supports right-inspector selection and property editing for cards, badges, buttons, and texts.
 */
export default function IndCtaSmart({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-smart-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #0e1c3e 0%, #060e22 50%, #020614 100%)', borderColor: 'rgba(59,130,246,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'cta-smart-badge', type: 'badge', props: { text: '⚡ MODERNISASI PABRIK & AUDIT OTOMASI 4.0', variant: 'outline', background: 'rgba(59,130,246,0.2)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.5)' } },
        { id: 'cta-smart-title', type: 'heading', props: { content: 'Siap Mengubah Pabrik Anda Menjadi Smart Factory Cerdas & Efisien?', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em', textAlign: 'center' } },
        { id: 'cta-smart-desc', type: 'paragraph', props: { content: 'Jadwalkan audit kesiapan otomasi gratis bersama Principal Automation Engineer kami. Dapatkan blueprint integrasi robotik dan estimasi ROI dalam 5 hari kerja.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
        { id: 'cta-smart-btn1', type: 'button', props: { label: 'Jadwalkan Kunjungan Audit & Live Demo 🚀', href: 'mailto:automation@nexus4.id', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: '#ffffff', fontWeight: '700' } },
        { id: 'cta-smart-btn2', type: 'button', props: { label: 'Diskusi Teknis WhatsApp', href: 'https://wa.me/6281133445566', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(10,18,38,0.8)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-smart-card');

  return (
    <section id="audit" className="relative bg-[#02050f] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
