import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgCtaDigital
 * High-energy join CTA for digital community — cyber dark purple/cyan electric.
 * Fully supports right-inspector selection and property editing for cards, images, badges, buttons, and texts.
 */
export default function OrgCtaDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-dig-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #0e1338 0%, #070920 50%, #040514 100%)', borderColor: 'rgba(6,182,212,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'cta-badge', type: 'badge', props: { text: '⚡ PENDAFTARAN KOMUNITAS GELOMBANG 2026', variant: 'outline', background: 'rgba(6,182,212,0.2)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.5)' } },
        { id: 'cta-title', type: 'heading', props: { content: 'Waktunya Terhubung, Berkolaborasi & Membangun Bersama Inovator Terbaik', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '-0.02em', textAlign: 'center' } },
        { id: 'cta-desc', type: 'paragraph', props: { content: 'Gabung bersama 28.000+ builder Indonesia hari ini. Dapatkan akses instant ke forum Discord, repositori open-source, dan mentoring gratis selamanya.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
        { id: 'cta-btn1', type: 'button', props: { label: 'Join Discord Komunitas ⚡', href: '#join', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
        { id: 'cta-btn2', type: 'button', props: { label: 'Eksplorasi GitHub Repo', href: '#projects', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(10,13,38,0.8)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-dig-card');

  return (
    <section className="relative bg-[#03030c] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}

