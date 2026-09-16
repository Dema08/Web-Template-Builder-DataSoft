import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 02 — NOIR Full Dark Cinematic
 * Mirrors Hero02 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv2-badge', type: 'badge', props: { content: 'EST. 2026 — JAKARTA • PARIS', background: '#1c1917', color: '#e7c873' } },
    { id: 'srv2-heading', type: 'heading', props: { content: 'Timeless elite services, crafted for the few', level: 'h2', fontSize: '60px', fontWeight: '700', color: '#fafaf9', align: 'center', margin: '0 0 18px 0' } },
    { id: 'srv2-text', type: 'text', props: { content: 'Private advisory, bespoke solutions, and an operational experience beyond the ordinary.', fontSize: '18px', color: '#a8a29e', align: 'center', margin: '0 0 30px 0' } },
    {
      id: 'srv2-card-1',
      type: 'card',
      props: { variant: 'service-dark', background: '#1c1917', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.3)', padding: '28px' },
      childrenComponents: [
        { id: 'srv2-c1-icon', type: 'icon', props: { icon: 'FaGem', size: '32px', color: '#e7c873', align: 'left' } },
        { id: 'srv2-c1-title', type: 'heading', props: { content: 'Bespoke Advisory', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#fafaf9', margin: '12px 0 6px 0' } },
        { id: 'srv2-c1-desc', type: 'text', props: { content: 'Strategic consulting tailored exclusively for high-tier enterprise portfolios.', fontSize: '14px', color: '#a8a29e', margin: '0' } },
      ],
    },
    {
      id: 'srv2-card-2',
      type: 'card',
      props: { variant: 'service-dark', background: '#1c1917', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.3)', padding: '28px' },
      childrenComponents: [
        { id: 'srv2-c2-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '32px', color: '#e7c873', align: 'left' } },
        { id: 'srv2-c2-title', type: 'heading', props: { content: 'Private Security', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#fafaf9', margin: '12px 0 6px 0' } },
        { id: 'srv2-c2-desc', type: 'text', props: { content: 'Absolute confidentiality and secure data vaults for sensitive operations.', fontSize: '14px', color: '#a8a29e', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-28 px-6 bg-[#0c0a09] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,162,39,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center" style={{ fontFamily: 'Georgia, serif' }}>
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-6 w-full">{renderLayoutComponents(heading, sectionId)}</div>
        <div className="flex items-center gap-3 my-2">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
          <div className="w-2 h-2 rotate-45 bg-[#c9a227]" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
        </div>
        <div className="w-full max-w-xl">{renderLayoutComponents(text, sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
