import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgCtaSocial
 * Emotional volunteer/donate CTA for NGO — emerald/orange warm call to action.
 * Fully supports right-inspector selection and property editing for cards, images, badges, buttons, and texts.
 */
export default function OrgCtaSocial({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-soc-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, rgba(1,34,23,0.95) 0%, rgba(1,53,36,0.9) 50%, rgba(2,44,34,0.95) 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'cta-badge', type: 'badge', props: { text: '🌱 MARI BERGABUNG DALAM PERUBAHAN', variant: 'outline', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
        { id: 'cta-title', type: 'heading', props: { content: 'Satu Kebaikan Kecilmu Adalah Harapan Besar Bagi Mereka', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em', textAlign: 'center' } },
        { id: 'cta-desc', type: 'paragraph', props: { content: 'Bergabunglah bersama 12.000+ relawan dan ratusan donatur setia. Jadilah bagian dari gerakan nyata yang menyalakan harapan di pelosok Indonesia.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' } },
        { id: 'cta-btn1', type: 'button', props: { label: 'Daftar Jadi Relawan 💚', href: '#volunteer', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#ffffff', fontWeight: '700' } },
        { id: 'cta-btn2', type: 'button', props: { label: 'Salurkan Donasi Program', href: '#donate', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.8)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-soc-card');

  return (
    <section className="relative bg-[#01140e] py-20 lg:py-28 overflow-hidden text-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
