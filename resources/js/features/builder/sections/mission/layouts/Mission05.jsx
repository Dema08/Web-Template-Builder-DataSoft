import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 05 — Serenity Minimal Zen
 */
export default function Mission05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-5', type: 'heading', props: { content: 'To restore balance and inner peace', level: 'h2', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-5', type: 'text', props: { content: 'Creating intentional sanctuaries where modern minds can pause, breathe, and realign.', fontSize: '17px', color: '#78716c', align: 'center', margin: '0 0 30px 0' } },
    { id: 'btn-reserve', type: 'button', props: { label: 'Our Philosophy —', href: '#philosophy', variant: 'ghost', size: 'large', background: 'transparent', color: '#1c1917' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-28 px-6 bg-[#f5f4f0] overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full max-w-xl">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
      </div>
    </section>
  );
}
