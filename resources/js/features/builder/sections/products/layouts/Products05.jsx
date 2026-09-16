import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERENITY — Minimal Zen Products
 * Krem tenang, tipografi ringan, kartu tanpa border.
 */
export default function Products05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod5-heading', type: 'heading', props: { content: 'Breathe. Choose less.', level: 'h2', fontSize: '46px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod5-text', type: 'text', props: { content: 'Tiga ritual esensial — diramu perlahan di Ubud.', fontSize: '16px', color: '#78716c', align: 'center', margin: '0 0 24px 0' } },
    { id: 'prod5-cta', type: 'button', props: { label: 'View Rituals —', href: '#rituals', variant: 'ghost', size: 'medium', background: 'transparent', color: '#1c1917' } },
    {
      id: 'prod5-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod5-c1-image', type: 'image', props: { src: '', alt: 'Morning Oil', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod5-c1-title', type: 'heading', props: { content: 'Morning Oil', level: 'h3', fontSize: '20px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c1-price', type: 'heading', props: { content: 'Rp 320rb', level: 'h4', fontSize: '16px', fontWeight: '400', color: '#78716c', align: 'center', margin: '4px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c1-desc', type: 'text', props: { content: 'Cold-pressed frangipani & coconut.', fontSize: '13px', color: '#a8a29e', align: 'center', margin: '6px 0 16px 0', padding: '0 20px' } },
        { id: 'prod5-c1-btn', type: 'button', props: { label: 'Add to Ritual', href: '#cart', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
    {
      id: 'prod5-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod5-c2-image', type: 'image', props: { src: '', alt: 'Still Tea', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod5-c2-title', type: 'heading', props: { content: 'Still Tea', level: 'h3', fontSize: '20px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c2-price', type: 'heading', props: { content: 'Rp 180rb', level: 'h4', fontSize: '16px', fontWeight: '400', color: '#78716c', align: 'center', margin: '4px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c2-desc', type: 'text', props: { content: 'Single-origin chamomile highland.', fontSize: '13px', color: '#a8a29e', align: 'center', margin: '6px 0 16px 0', padding: '0 20px' } },
        { id: 'prod5-c2-btn', type: 'button', props: { label: 'Add to Ritual', href: '#cart', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
    {
      id: 'prod5-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod5-c3-image', type: 'image', props: { src: '', alt: 'Slow Candle', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod5-c3-title', type: 'heading', props: { content: 'Slow Candle', level: 'h3', fontSize: '20px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c3-price', type: 'heading', props: { content: 'Rp 240rb', level: 'h4', fontSize: '16px', fontWeight: '400', color: '#78716c', align: 'center', margin: '4px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c3-desc', type: 'text', props: { content: 'Beeswax & sandalwood, 60h burn.', fontSize: '13px', color: '#a8a29e', align: 'center', margin: '6px 0 16px 0', padding: '0 20px' } },
        { id: 'prod5-c3-btn', type: 'button', props: { label: 'Add to Ritual', href: '#cart', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-28 px-6 bg-[#faf9f7]">
      <div className="max-w-5xl mx-auto text-center" style={{ fontFamily: 'Georgia, serif' }}>
        <p className="text-[11px] tracking-[0.5em] text-stone-400 mb-5 select-none pointer-events-none">U B U D — R I T U A L S</p>
        {renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}
        {renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}
        <div className="flex justify-center">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="flex items-center justify-center gap-2 my-6 select-none pointer-events-none"><div className="w-12 h-px bg-stone-300" /><div className="w-1.5 h-1.5 rotate-45 bg-stone-400" /><div className="w-12 h-px bg-stone-300" /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 text-center">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
