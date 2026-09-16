import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 04 — Papercut Brutalist Statement
 */
export default function Mission04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-4', type: 'badge', props: { content: '★ OUR MISSION 2026', background: '#000000', color: '#facc15' } },
    { id: 'heading-4', type: 'heading', props: { content: 'DESTROYING BORING SOFTWARE', level: 'h2', fontSize: '56px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-4', type: 'text', props: { content: 'We build brutal, uncompromising digital tools that stand out in a sea of sameness.', fontSize: '18px', color: '#000000', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-hire', type: 'button', props: { label: 'JOIN THE REVOLT ★', href: '#join', variant: 'primary', size: 'large', radius: 'none', background: '#000000', color: '#facc15' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-24 px-6 bg-[#facc15] border-y-4 border-black overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-start">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="flex flex-wrap gap-4 mt-6">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}
        </div>
      </div>
    </section>
  );
}
