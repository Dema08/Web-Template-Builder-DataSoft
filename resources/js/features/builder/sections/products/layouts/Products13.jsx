import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KIOSO — Playful Food Products
 * Pastel ceria + kartu rounded gemuk.
 */
export default function Products13({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod13-badge', type: 'badge', props: { content: '🍔 Best Seller', background: '#fce7f3', color: '#ec4899' } },
    { id: 'prod13-heading', type: 'heading', props: { content: 'Favorit Semua Keluarga', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod13-text', type: 'text', props: { content: 'Roti panggang tiap jam, daging premium.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod13-cta', type: 'button', props: { label: 'Order Sekarang →', href: '#order', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    {
      id: 'prod13-card-1', type: 'card',
      props: { variant: 'product', background: '#fff1f2', borderRadius: '28px', shadow: 'sm', borderWidth: '0', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod13-c1-image', type: 'image', props: { src: '', alt: 'Burger', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '28px 28px 0 0' } },
        { id: 'prod13-c1-title', type: 'heading', props: { content: 'Burger Kioso', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c1-price', type: 'heading', props: { content: 'Rp 45rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c1-btn', type: 'button', props: { label: '＋ Tambah', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod13-card-2', type: 'card',
      props: { variant: 'product', background: '#fef9c3', borderRadius: '28px', shadow: 'sm', borderWidth: '0', borderColor: '#fef9c3', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod13-c2-image', type: 'image', props: { src: '', alt: 'Fries', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '28px 28px 0 0' } },
        { id: 'prod13-c2-title', type: 'heading', props: { content: 'Cheese Fries', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c2-price', type: 'heading', props: { content: 'Rp 28rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c2-btn', type: 'button', props: { label: '＋ Tambah', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod13-card-3', type: 'card',
      props: { variant: 'product', background: '#dcfce7', borderRadius: '28px', shadow: 'sm', borderWidth: '0', borderColor: '#dcfce7', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod13-c3-image', type: 'image', props: { src: '', alt: 'Milkshake', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '28px 28px 0 0' } },
        { id: 'prod13-c3-title', type: 'heading', props: { content: 'Berry Shake', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c3-price', type: 'heading', props: { content: 'Rp 32rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c3-btn', type: 'button', props: { label: '＋ Tambah', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-rose-50 to-amber-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
