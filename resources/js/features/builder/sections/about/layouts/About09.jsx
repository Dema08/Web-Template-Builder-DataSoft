import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERENITY — Minimal Zen Story
 * Super lega & tenang: krem, serif ringan, satu CTA.
 * Untuk wellness / villa / skincare premium.
 */
export default function About09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-9', type: 'heading', props: { content: 'Stillness, by design', level: 'h2', fontSize: '46px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-9', type: 'text', props: { content: 'Serenity began as a single joglo in the jungle. Today it is a sanctuary for those seeking slowness — every stone placed with intention.', fontSize: '16px', color: '#78716c', align: 'center', lineHeight: '1.9', margin: '0 0 28px 0' } },
    { id: 'cta-visit', type: 'button', props: { label: 'Plan Your Visit —', href: '#visit', variant: 'ghost', size: 'medium', background: 'transparent', color: '#1c1917' } },
    { id: 'img-9', type: 'image', props: { src: '', alt: 'Sanctuary', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="py-24 px-6 bg-[#faf9f7]" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.5em] text-stone-400 mb-6 select-none pointer-events-none">O U R — P H I L O S O P H Y</p>
        {renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}
        <div className="flex items-center justify-center gap-2 my-4 select-none pointer-events-none">
          <div className="w-12 h-px bg-stone-300" /><div className="w-1.5 h-1.5 rotate-45 bg-stone-400" /><div className="w-12 h-px bg-stone-300" />
        </div>
        {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
        {renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}
      </div>
      <div className="max-w-4xl mx-auto mt-12 rounded-[24px] overflow-hidden shadow-xl">
        {renderLayoutComponents(img, sectionId)}
      </div>
    </section>
  );
}
