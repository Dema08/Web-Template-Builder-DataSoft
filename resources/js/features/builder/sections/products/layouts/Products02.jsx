import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NOIR — Full Dark Cinematic Products
 * Hitam pekat + aksen emas, kartu gelap mewah.
 */
export default function Products02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod2-badge', type: 'badge', props: { content: '✦ Koleksi Noir', background: '#1c1917', color: '#e7c873' } },
    { id: 'prod2-heading', type: 'heading', props: { content: 'Kemewahan dalam Setiap Detail', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod2-text', type: 'text', props: { content: 'Kurasi premium untuk mereka yang mengerti kualitas sejati.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 28px 0' } },
    { id: 'prod2-cta', type: 'button', props: { label: 'Lihat Koleksi →', href: '#koleksi', variant: 'outline', size: 'medium', radius: 'full', background: '#e7c873', color: '#e7c873' } },
    {
      id: 'prod2-card-1', type: 'card',
      props: { variant: 'product', background: '#1c1917', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod2-c1-image', type: 'image', props: { src: '', alt: 'Noir Signature', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod2-c1-title', type: 'heading', props: { content: 'Noir Signature', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c1-price', type: 'heading', props: { content: 'Rp 9.900.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#e7c873', margin: '6px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c1-desc', type: 'text', props: { content: 'Edisi terbatas dengan material terbaik dunia.', fontSize: '14px', color: '#a8a29e', margin: '8px 0 16px 0', padding: '0 20px' } },
        { id: 'prod2-c1-btn', type: 'button', props: { label: 'Reserve →', href: '#reserve', variant: 'primary', size: 'small', radius: 'full', background: '#e7c873', color: '#1c1917' } },
      ],
    },
    {
      id: 'prod2-card-2', type: 'card',
      props: { variant: 'product', background: '#1c1917', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod2-c2-image', type: 'image', props: { src: '', alt: 'Noir Heritage', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod2-c2-title', type: 'heading', props: { content: 'Noir Heritage', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c2-price', type: 'heading', props: { content: 'Rp 7.500.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#e7c873', margin: '6px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c2-desc', type: 'text', props: { content: 'Warisan craftsmanship turun-temurun.', fontSize: '14px', color: '#a8a29e', margin: '8px 0 16px 0', padding: '0 20px' } },
        { id: 'prod2-c2-btn', type: 'button', props: { label: 'Reserve →', href: '#reserve', variant: 'primary', size: 'small', radius: 'full', background: '#e7c873', color: '#1c1917' } },
      ],
    },
    {
      id: 'prod2-card-3', type: 'card',
      props: { variant: 'product', background: '#1c1917', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod2-c3-image', type: 'image', props: { src: '', alt: 'Noir Atelier', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod2-c3-title', type: 'heading', props: { content: 'Noir Atelier', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c3-price', type: 'heading', props: { content: 'Rp 12.000.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#e7c873', margin: '6px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c3-desc', type: 'text', props: { content: 'Custom eksklusif sesuai pesanan Anda.', fontSize: '14px', color: '#a8a29e', margin: '8px 0 16px 0', padding: '0 20px' } },
        { id: 'prod2-c3-btn', type: 'button', props: { label: 'Reserve →', href: '#reserve', variant: 'primary', size: 'small', radius: 'full', background: '#e7c873', color: '#1c1917' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-24 px-6 bg-[#0c0a09] relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#e7c873]/60 to-transparent" />
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
