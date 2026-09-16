import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * GOLDLEAF — Heritage Gold Products
 * Krem + emas foil + garis ganda elegan.
 */
export default function Products09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod9-badge', type: 'badge', props: { content: '✦ Heritage Collection', background: '#78350f', color: '#fde68a' } },
    { id: 'prod9-heading', type: 'heading', props: { content: 'Warisan Rasa & Kemewahan', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#78350f', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod9-text', type: 'text', props: { content: 'Resep turun-temurun sejak 1968, dikemas premium.', fontSize: '15px', color: '#92400e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod9-cta', type: 'button', props: { label: 'Pesan Heritage →', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } },
    {
      id: 'prod9-card-1', type: 'card',
      props: { variant: 'product', background: '#fffbeb', borderRadius: '16px', shadow: 'md', borderWidth: '2px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod9-c1-image', type: 'image', props: { src: '', alt: 'Gold Lapis', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '14px 14px 0 0' } },
        { id: 'prod9-c1-title', type: 'heading', props: { content: 'Gold Lapis Legit', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#78350f', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c1-price', type: 'heading', props: { content: 'Rp 385rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#b45309', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c1-desc', type: 'text', props: { content: '22 lapis, butter Wijsman.', fontSize: '13px', color: '#92400e', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod9-c1-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'full', background: '#92400e', color: '#fef3c7' } },
      ],
    },
    {
      id: 'prod9-card-2', type: 'card',
      props: { variant: 'product', background: '#78350f', borderRadius: '16px', shadow: 'lg', borderWidth: '2px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod9-c2-image', type: 'image', props: { src: '', alt: 'Royal Hampers', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '14px 14px 0 0' } },
        { id: 'prod9-c2-title', type: 'heading', props: { content: 'Royal Hampers', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c2-price', type: 'heading', props: { content: 'Rp 899rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#fde68a', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c2-desc', type: 'text', props: { content: 'Box emas + 6 varian premium.', fontSize: '13px', color: '#fde68a', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod9-c2-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'full', background: '#fde68a', color: '#78350f' } },
      ],
    },
    {
      id: 'prod9-card-3', type: 'card',
      props: { variant: 'product', background: '#fffbeb', borderRadius: '16px', shadow: 'md', borderWidth: '2px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod9-c3-image', type: 'image', props: { src: '', alt: 'Heritage Tea', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '14px 14px 0 0' } },
        { id: 'prod9-c3-title', type: 'heading', props: { content: 'Heritage Tea', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#78350f', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c3-price', type: 'heading', props: { content: 'Rp 165rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#b45309', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c3-desc', type: 'text', props: { content: 'Teh melati grade kaisar.', fontSize: '13px', color: '#92400e', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod9-c3-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'full', background: '#92400e', color: '#fef3c7' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-24 px-6 bg-[#fefce8] border-y-8 border-double border-[#e7c873]">
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
