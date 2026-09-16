import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 02 — Noir Full Dark Cinematic
 */
export default function Mission02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-2', type: 'badge', props: { content: 'MISSION STATEMENT — 2026', background: '#1c1917', color: '#e7c873' } },
    { id: 'heading-2', type: 'heading', props: { content: 'To curate perfection without compromise', level: 'h2', fontSize: '48px', fontWeight: '700', color: '#fafaf9', align: 'center', margin: '0 0 18px 0' } },
    { id: 'text-2', type: 'text', props: { content: 'We exist to elevate everyday experiences through meticulous craftsmanship and timeless design.', fontSize: '18px', color: '#a8a29e', align: 'center', margin: '0 0 30px 0' } },
    { id: 'btn-gold', type: 'button', props: { label: 'Discover Our Values →', href: '#values', variant: 'primary', size: 'large', radius: 'full', background: '#c9a227', color: '#0c0a09' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');

  return (
    <section className="relative py-28 px-6 bg-[#0c0a09] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,162,39,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center" style={{ fontFamily: 'Georgia, serif' }}>
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-6 w-full">{renderLayoutComponents(heading, sectionId)}</div>
        <div className="flex items-center gap-3 my-2">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
          <div className="w-2 h-2 rotate-45 bg-[#c9a227]" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
        </div>
        <div className="w-full max-w-xl">{renderLayoutComponents(text, sectionId)}</div>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {renderLayoutComponents(buttons, sectionId)}
        </div>
      </div>
    </section>
  );
}
