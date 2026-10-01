import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgCtaProfessional
 * Prestigious call-to-action for professional forum membership — navy/gold.
 * Fully supports right-inspector selection and property editing for cards, buttons, badges, and texts.
 */
export default function OrgCtaProfessional({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'pro-cta-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #122038 0%, #0c1626 50%, #08101e 100%)', borderColor: 'rgba(245,158,11,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'cta-badge', type: 'badge', props: { text: '⚜ PENDAFTARAN ANGGOTA PERIODE 2026', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
        { id: 'cta-title', type: 'heading', props: { content: 'Waktunya Mengukir Prestasi Bersama Komunitas Profesional Terbaik', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em', textAlign: 'center' } },
        { id: 'cta-desc', type: 'paragraph', props: { content: 'Dapatkan pengakuan resmi, kembangkan kompetensi berskala internasional, dan perluas jejaring strategis dengan 35.000+ anggota di seluruh Indonesia.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
        { id: 'cta-btn1', type: 'button', props: { label: 'Daftar Sekarang ⚜', href: '#join', variant: 'primary', size: 'large', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
        { id: 'cta-btn2', type: 'button', props: { label: 'Konsultasi Sekretariat DPP', href: '#contact', variant: 'outline', size: 'large', radius: 'sm', background: 'rgba(15,23,42,0.8)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'pro-cta-card');

  return (
    <section className="relative bg-[#070e1c] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
