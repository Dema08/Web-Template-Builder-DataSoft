import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PAPERCUT — Brutalist Statement Products
 * Kuning brutal, border tebal hitam + shadow kotak.
 */
export default function Products04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod4-badge', type: 'badge', props: { content: '★ BRUTAL DROP', background: '#000000', color: '#facc15' } },
    { id: 'prod4-heading', type: 'heading', props: { content: 'PRODUK ANTI-MAINSTREAM', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod4-text', type: 'text', props: { content: 'No template. No boring. Hanya karya berani.', fontSize: '16px', color: '#000000', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod4-cta', type: 'button', props: { label: 'SHOP DROP →', href: '#shop', variant: 'primary', size: 'medium', radius: 'none', background: '#000000', color: '#facc15' } },
    {
      id: 'prod4-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod4-c1-image', type: 'image', props: { src: '', alt: 'Poster Riot', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod4-c1-title', type: 'heading', props: { content: 'POSTER RIOT', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c1-price', type: 'heading', props: { content: 'Rp 199rb', level: 'h4', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c1-desc', type: 'text', props: { content: 'Sablon manual, edisi 100 pcs.', fontSize: '13px', color: '#000000', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod4-c1-btn', type: 'button', props: { label: 'ADD +', href: '#cart', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#facc15' } },
      ],
    },
    {
      id: 'prod4-card-2', type: 'card',
      props: { variant: 'product', background: '#facc15', borderRadius: '0px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod4-c2-image', type: 'image', props: { src: '', alt: 'Tee Loud', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod4-c2-title', type: 'heading', props: { content: 'TEE LOUD', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c2-price', type: 'heading', props: { content: 'Rp 249rb', level: 'h4', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c2-desc', type: 'text', props: { content: 'Cotton 24s, print plastisol.', fontSize: '13px', color: '#000000', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod4-c2-btn', type: 'button', props: { label: 'ADD +', href: '#cart', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod4-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod4-c3-image', type: 'image', props: { src: '', alt: 'Sticker Pack', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod4-c3-title', type: 'heading', props: { content: 'STICKER PACK', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c3-price', type: 'heading', props: { content: 'Rp 49rb', level: 'h4', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c3-desc', type: 'text', props: { content: 'Vinyl anti air, 20 pcs.', fontSize: '13px', color: '#000000', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod4-c3-btn', type: 'button', props: { label: 'ADD +', href: '#cart', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#facc15' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-[#facc15] border-y-4 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl">
          {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}
          {renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
