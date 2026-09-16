import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SAKURA — Centered Floral Products
 * Simetris tengah + ornamen pink lembut.
 */
export default function Products08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod8-badge', type: 'badge', props: { content: '🌸 Koleksi Musim Semi', background: '#fce7f3', color: '#be185d' } },
    { id: 'prod8-heading', type: 'heading', props: { content: 'Cantik di Setiap Momen', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod8-text', type: 'text', props: { content: 'Skincare & buket pilihan dengan sentuhan penuh cinta.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod8-cta', type: 'button', props: { label: 'Belanja Koleksi →', href: '#koleksi', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    {
      id: 'prod8-card-1', type: 'card',
      props: { variant: 'product', background: '#fff1f2', borderRadius: '32px 8px 32px 8px', shadow: 'sm', borderWidth: '0', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod8-c1-image', type: 'image', props: { src: '', alt: 'Sakura Serum', width: '100%', height: '190px', objectFit: 'cover', borderRadius: '32px 8px 0 0' } },
        { id: 'prod8-c1-title', type: 'heading', props: { content: 'Sakura Serum', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#831843', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c1-price', type: 'heading', props: { content: 'Rp 285rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#db2777', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c1-desc', type: 'text', props: { content: 'Niacinamide + ekstrak sakura.', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod8-c1-btn', type: 'button', props: { label: 'Add to Bag', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#db2777', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod8-card-2', type: 'card',
      props: { variant: 'product', background: '#fff1f2', borderRadius: '8px 32px 8px 32px', shadow: 'sm', borderWidth: '0', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod8-c2-image', type: 'image', props: { src: '', alt: 'Petal Mist', width: '100%', height: '190px', objectFit: 'cover', borderRadius: '0 32px 0 0' } },
        { id: 'prod8-c2-title', type: 'heading', props: { content: 'Petal Mist', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#831843', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c2-price', type: 'heading', props: { content: 'Rp 145rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#db2777', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c2-desc', type: 'text', props: { content: 'Face mist rose water.', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod8-c2-btn', type: 'button', props: { label: 'Add to Bag', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#db2777', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod8-card-3', type: 'card',
      props: { variant: 'product', background: '#fff1f2', borderRadius: '32px 8px 32px 8px', shadow: 'sm', borderWidth: '0', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod8-c3-image', type: 'image', props: { src: '', alt: 'Blossom Set', width: '100%', height: '190px', objectFit: 'cover', borderRadius: '32px 8px 0 0' } },
        { id: 'prod8-c3-title', type: 'heading', props: { content: 'Blossom Set', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#831843', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c3-price', type: 'heading', props: { content: 'Rp 499rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#db2777', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c3-desc', type: 'text', props: { content: 'Paket lengkap 5 langkah.', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod8-c3-btn', type: 'button', props: { label: 'Add to Bag', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#db2777', color: '#ffffff' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="flex items-center gap-2 my-1 select-none pointer-events-none"><div className="w-12 h-px bg-pink-300" /><span className="text-pink-400">✦</span><div className="w-12 h-px bg-pink-300" /></div>
        <div className="max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
