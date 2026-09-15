import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERENITY — Minimal Zen
 * Super lega & tenang: krem, serif ringan, satu CTA garis.
 * Untuk wellness / villa / skincare premium.
 */
export default function Hero05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-5', type: 'heading', props: { content: 'Breathe. You have arrived.', level: 'h1', fontSize: '60px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-5', type: 'text', props: { content: 'A private sanctuary in Ubud — slow mornings, jungle views, and rituals crafted for stillness.', fontSize: '17px', color: '#78716c', align: 'center', margin: '0 0 30px 0' } },
    { id: 'btn-reserve', type: 'button', props: { label: 'Reserve Your Stay —', href: '#reserve', variant: 'ghost', size: 'large', background: 'transparent', color: '#1c1917' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-28 px-6 bg-[#faf9f7]">
      <div className="max-w-3xl mx-auto text-center" style={{ fontFamily: 'Georgia, serif' }}>
        <p className="text-[11px] tracking-[0.5em] text-stone-400 mb-6 select-none">U B U D — B A L I</p>
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="w-12 h-px bg-stone-300" />
          <div className="w-1.5 h-1.5 rotate-45 bg-stone-400" />
          <div className="w-12 h-px bg-stone-300" />
        </div>
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}
      </div>
    </section>
  );
}
